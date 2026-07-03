# WorkerReport Template

```markdown
## WorkerReport

- `role`: <CLARA|PM|EA|SA|Home|Motion|PC Analysis|other>
- `status`: <clear|attention_needed|blocked|stale|unavailable>
- `changed_facts`: <distilled facts only>
- `blockers`: <blockers, missing sources, or decisions needed>
- `recommended_actions`: <short action list>
- `next_owner`: <Mike|MikeOS|CLARA|PM|EA|SA|Home|Motion|customer|other>
- `evidence_links`: <canonical links or paths only>
- `confidence`: <high|medium|low and reason when not high>
- `follow_up_needed`: <none|today|scheduled|exact follow-up>
```

## Rules

- Do not include raw email, Teams, transcript, attachment, or trace bodies.
- Use canonical evidence links or paths.
- Say why confidence is `medium` or `low`.
- Keep the report short enough for MikeOS to compose into one brief.
