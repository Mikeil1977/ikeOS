# Photo Intake Protocol

Photo intake turns an image into routed MikeOS state without making the dashboard a raw media archive.

`Photo evidence -> Entity -> Asset / Obligation -> View`

## Route

1. Keep the raw image in a private evidence store or in the owning source system.
2. Classify the owning entity before adding a dashboard card.
3. Attach the photo to an asset or obligation using a distilled visual summary.
4. Render only the distilled card in Pulse.

For household property photos, classify the entity as `household`, the asset type as `property`, and the obligation type as `property-maintenance` until Mike confirms otherwise.

## MikeOS Record

Tracked MikeOS state may include:

- evidence label such as `Photo evidence`;
- captured date if known;
- short visual summary;
- confidence;
- safe route or canonical source label;
- action mode.

Tracked MikeOS state must not include:

- raw image bytes;
- original attachment paths;
- private media paths;
- message IDs;
- source-system URLs;
- credentials or auth cache paths.

## Dashboard Rule

Show photo-backed property issues in `Home` and `Life Admin > properties`. Include them in `Today` only when the issue is urgent, worsening, scheduled, blocking, or freshly captured and waiting for Mike to classify.

The first card should ask Mike to confirm the property/location and choose inspect, monitor, quote, schedule, or dismiss.
