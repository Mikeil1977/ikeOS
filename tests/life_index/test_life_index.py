import sqlite3
import sys
import tempfile
import unittest
import os
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parents[2]
LIFE_INDEX_DIR = REPO_ROOT / "scripts" / "life-index"
sys.path.insert(0, str(LIFE_INDEX_DIR))

from life_index import (  # noqa: E402
    DEFAULT_EXTENSIONS,
    DEFAULT_ROOT_SPECS,
    iter_candidate_files,
    build_index,
    query_index,
    render_safe_report,
)


class LifeIndexTests(unittest.TestCase):
    def test_dry_run_lists_roots_and_does_not_create_database(self):
        with tempfile.TemporaryDirectory() as temp_dir:
            root = Path(temp_dir) / "Documents"
            root.mkdir()
            db_path = Path(temp_dir) / "private" / "life-index.sqlite"

            result = build_index(
                db_path=db_path,
                roots=[root],
                dry_run=True,
                extract_text=False,
            )

            self.assertEqual(result["mode"], "dry_run")
            self.assertEqual(result["existing_roots"], [str(root)])
            self.assertGreater(len(result["excluded_path_fragments"]), 0)
            self.assertFalse(db_path.exists())

    def test_scan_extracts_text_and_supports_full_text_search(self):
        with tempfile.TemporaryDirectory() as temp_dir:
            root = Path(temp_dir) / "Documents"
            root.mkdir()
            (root / "home-insurance-policy.txt").write_text(
                "Home insurance policy renewal for buildings and contents.",
                encoding="utf-8",
            )
            db_path = Path(temp_dir) / "private" / "life-index.sqlite"

            result = build_index(db_path=db_path, roots=[root], extract_text=True)
            matches = query_index(db_path=db_path, search="insurance")

            self.assertEqual(result["files_seen"], 1)
            self.assertTrue(db_path.exists())
            self.assertEqual(len(matches), 1)
            self.assertEqual(matches[0]["category"], "insurance")
            self.assertEqual(matches[0]["name"], "home-insurance-policy.txt")

    def test_rescan_updates_existing_file_without_duplicate_rows(self):
        with tempfile.TemporaryDirectory() as temp_dir:
            root = Path(temp_dir) / "Downloads"
            root.mkdir()
            file_path = root / "car-insurance.txt"
            file_path.write_text("Vehicle insurance schedule.", encoding="utf-8")
            db_path = Path(temp_dir) / "private" / "life-index.sqlite"

            build_index(db_path=db_path, roots=[root], extract_text=True)
            file_path.write_text(
                "Vehicle insurance schedule and renewal note.",
                encoding="utf-8",
            )
            build_index(db_path=db_path, roots=[root], extract_text=True)

            con = sqlite3.connect(db_path)
            try:
                count = con.execute("SELECT COUNT(*) FROM files").fetchone()[0]
            finally:
                con.close()

            self.assertEqual(count, 1)

    def test_metadata_only_rescan_preserves_existing_text_index(self):
        with tempfile.TemporaryDirectory() as temp_dir:
            root = Path(temp_dir) / "Documents"
            root.mkdir()
            (root / "house-insurance.txt").write_text(
                "Buildings insurance text remains searchable.",
                encoding="utf-8",
            )
            db_path = Path(temp_dir) / "private" / "life-index.sqlite"

            build_index(db_path=db_path, roots=[root], extract_text=True)
            build_index(db_path=db_path, roots=[root], extract_text=False, no_text=True)
            matches = query_index(db_path=db_path, search="Buildings")

            self.assertEqual(len(matches), 1)
            self.assertEqual(matches[0]["text_extracted"], 1)

    def test_query_supports_category_filename_and_date_filters(self):
        with tempfile.TemporaryDirectory() as temp_dir:
            root = Path(temp_dir) / "Documents"
            root.mkdir()
            old_file = root / "home-insurance-old.txt"
            new_file = root / "tax-new.txt"
            old_file.write_text("Home insurance archive.", encoding="utf-8")
            new_file.write_text("VAT receipt for accounts.", encoding="utf-8")
            os.utime(old_file, (1704153600, 1704153600))
            os.utime(new_file, (1767312000, 1767312000))
            db_path = Path(temp_dir) / "private" / "life-index.sqlite"

            build_index(db_path=db_path, roots=[root], extract_text=True)

            self.assertEqual(len(query_index(db_path=db_path, category="insurance")), 1)
            self.assertEqual(len(query_index(db_path=db_path, search="tax-new")), 1)
            self.assertEqual(len(query_index(db_path=db_path, since="2025-01-01")), 1)
            self.assertEqual(len(query_index(db_path=db_path, until="2025-01-01")), 1)

    def test_image_files_record_metadata_without_text_extraction(self):
        try:
            from PIL import Image
        except ImportError:  # pragma: no cover - local environment guard.
            self.skipTest("Pillow is not installed")

        with tempfile.TemporaryDirectory() as temp_dir:
            root = Path(temp_dir) / "Pictures"
            root.mkdir()
            image_path = root / "house-photo.png"
            Image.new("RGB", (3, 5), "white").save(image_path)
            db_path = Path(temp_dir) / "private" / "life-index.sqlite"

            build_index(db_path=db_path, roots=[root], extract_text=True)
            matches = query_index(db_path=db_path, category="media/photo")

            con = sqlite3.connect(db_path)
            try:
                row = con.execute(
                    "SELECT width, height, image_format FROM image_metadata"
                ).fetchone()
            finally:
                con.close()

            self.assertEqual(len(matches), 1)
            self.assertEqual(matches[0]["text_extracted"], 0)
            self.assertEqual(row, (3, 5, "PNG"))

    def test_safe_report_omits_extracted_document_text(self):
        with tempfile.TemporaryDirectory() as temp_dir:
            root = Path(temp_dir) / "Documents"
            root.mkdir()
            (root / "legal-note.txt").write_text(
                "Confidential extracted sentence that must not appear in reports.",
                encoding="utf-8",
            )
            db_path = Path(temp_dir) / "private" / "life-index.sqlite"

            build_index(db_path=db_path, roots=[root], extract_text=True)
            report = render_safe_report(db_path=db_path, include_filenames=True)

            self.assertIn("legal-note.txt", report)
            self.assertNotIn("Confidential extracted sentence", report)

    def test_default_roots_and_extensions_include_v1_scope(self):
        root_labels = {spec.label for spec in DEFAULT_ROOT_SPECS}

        self.assertIn("Documents", root_labels)
        self.assertIn("D Users archive", root_labels)
        self.assertIn("Local Reference", root_labels)
        self.assertIn(".pdf", DEFAULT_EXTENSIONS)
        self.assertIn(".docx", DEFAULT_EXTENSIONS)
        self.assertIn(".xlsx", DEFAULT_EXTENSIONS)
        self.assertIn(".heic", DEFAULT_EXTENSIONS)

    def test_tmp_folders_are_excluded_as_development_noise(self):
        with tempfile.TemporaryDirectory() as temp_dir:
            root = Path(temp_dir) / "Documents"
            tmp = root / "project" / "tmp"
            tmp.mkdir(parents=True)
            (tmp / "insurance-noise.txt").write_text("noise", encoding="utf-8")

            candidates = list(iter_candidate_files([root]))

            self.assertEqual(candidates, [])

    def test_codex_folders_are_excluded_as_development_noise(self):
        with tempfile.TemporaryDirectory() as temp_dir:
            root = Path(temp_dir) / "Documents"
            codex = root / "Codex" / "work"
            codex.mkdir(parents=True)
            (codex / "insurance-like-dev-note.md").write_text("noise", encoding="utf-8")

            candidates = list(iter_candidate_files([root]))

            self.assertEqual(candidates, [])

    def test_rescan_hides_files_that_are_no_longer_candidates(self):
        with tempfile.TemporaryDirectory() as temp_dir:
            root = Path(temp_dir) / "Documents"
            root.mkdir()
            file_path = root / "policy.txt"
            file_path.write_text("Insurance policy.", encoding="utf-8")
            db_path = Path(temp_dir) / "private" / "life-index.sqlite"

            build_index(db_path=db_path, roots=[root], extract_text=True)
            file_path.unlink()
            build_index(db_path=db_path, roots=[root], extract_text=True)
            matches = query_index(db_path=db_path, search="insurance")

            self.assertEqual(matches, [])


if __name__ == "__main__":
    unittest.main()
