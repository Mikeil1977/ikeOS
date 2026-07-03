# WorkerBrief Template

```markdown
## WorkerBrief

- `role`: <CLARA|PM|EA|SA|Home|Motion|PC Analysis|other>
- `workspace`: <exact folder or connector context>
- `question`: <bounded question>
- `allowed_sources`: <sources the worker may inspect>
- `forbidden_sources`: <sources or content that must not be inspected or copied>
- `expected_report`: <required WorkerReport fields or shape>
- `deadline`: <immediate|today|date/time>
- `write_allowed`: <false|true with approval reference>
```

## Rules

- Ask one bounded question per brief.
- Start the worker in the owning workspace or subfolder.
- Set `write_allowed` to `false` unless Mike explicitly approved a write-capable action.
- Name raw source restrictions clearly when mail, Teams, ADO, customer repos, or Home Assistant traces may be involved.
