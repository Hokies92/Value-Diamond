# Balance Point Metadata Dictionary

This dictionary describes the schema used to define balance points within the Commercial Value Architecture visualization.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `key` | string | Unique identifier for the balance point. One of `value`, `direction`, `exchange`, or `operate`. |
| `label` | string | Human readable name displayed in the UI. |
| `stakeholders` | string | Stakeholder domains represented by this balance point. |
| `description` | string | Explanation of the structural tension the balance point represents. |
| `effects.low` | string | Guidance shown when the slider is heavily biased toward the first stakeholder. |
| `effects.high` | string | Guidance shown when the slider is heavily biased toward the second stakeholder. |
| `effects.balanced` | string | Guidance shown when the slider remains near equilibrium. |

## Sources

All balance point definitions are internal to the application. They may be extended or replaced with externally sourced data as needed.
