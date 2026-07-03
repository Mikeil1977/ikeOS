import unittest
from pathlib import Path


REPO_ROOT = Path(__file__).resolve().parents[2]


def read_repo_file(relative_path: str) -> str:
    return (REPO_ROOT / relative_path).read_text(encoding="utf-8")


class OperatingModelTests(unittest.TestCase):
    def test_required_operating_model_files_exist(self):
        required = [
            "protocols/operating-model.md",
            "registries/entities.md",
            "registries/asset-types.md",
            "registries/obligation-types.md",
        ]

        missing = [path for path in required if not (REPO_ROOT / path).is_file()]

        self.assertEqual(missing, [])

    def test_entities_capture_business_lines_and_products(self):
        content = read_repo_file("registries/entities.md")

        for term in [
            "Mike / household",
            "Elysium Dynamics Ltd",
            "Invigorate IT Ltd",
            "BC/NAV Consulting / Development",
            "Products",
            "NAV to BC Bridge",
            "Outlook to Timesheet",
            "WearYourManual",
        ]:
            self.assertIn(term, content)

    def test_obligation_types_capture_business_and_life_admin(self):
        content = read_repo_file("registries/obligation-types.md")

        for term in [
            "VAT",
            "Insurance renewal",
            "Subscription renewal",
            "MOT",
            "Vehicle tax",
            "Health admin",
            "Customer delivery",
            "Property maintenance",
        ]:
            self.assertIn(term, content)

    def test_photo_intake_protocol_keeps_images_as_private_evidence(self):
        content = read_repo_file("protocols/photo-intake.md")

        for term in [
            "Photo evidence -> Entity -> Asset / Obligation -> View",
            "private evidence store",
            "distilled visual summary",
            "raw image bytes",
            "property-maintenance",
            "Home",
            "Life Admin",
        ]:
            self.assertIn(term, content)

    def test_interfaces_define_entity_asset_obligation_records(self):
        content = read_repo_file("registries/interfaces.md")

        for term in [
            "EntityRecord",
            "AssetRecord",
            "ObligationRecord",
            "EvidenceRef",
            "entity_id",
            "asset_id",
            "obligation_id",
            "view",
        ]:
            self.assertIn(term, content)

    def test_dashboard_protocol_treats_tabs_as_views(self):
        content = read_repo_file("protocols/dashboard.md")

        self.assertIn("views over the operating model", content)
        self.assertIn("Admin/Money is not a top-level model", content)
        self.assertIn("Life Admin", content)
        self.assertIn("Work", content)

    def test_life_index_protocol_treats_categories_as_hints(self):
        content = read_repo_file("protocols/life-index.md")

        self.assertIn("category guesses are weak hints", content)
        self.assertIn("entity", content)
        self.assertIn("asset", content)
        self.assertIn("obligation", content)
        self.assertIn("EvidenceRef", content)


if __name__ == "__main__":
    unittest.main()
