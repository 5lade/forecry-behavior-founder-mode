# Revenue Operator Acceptance Tests

## Outcome acceptance

Pass when the Behavior turns one of these triggers into **ranked revenue task list with draft copy**:

- pricing page changed
- launch checklist is stale
- unanswered sales follow-up appears

## Required checks

- Preview shows intensity 3/6/10, default permission mode, credit expectations, and first-24h suggestion-only behavior.
- Activity log includes behavior slug, trigger, reason, tool, credit cost, permission mode, result, and blocked actions.
- Quiet hours and spend caps pause or downgrade proactive checks.
- External writes, payments, trades, and destructive actions are blocked unless explicitly approved.
- Private data is minimized and never placed in public manifests or catalog metadata.
- Stacking follows: user priority, safety urgency, manifest priority, lower credit cost, visible handoff.

## Done-condition gates

- Personality: preview/log language matches **Direct, ambitious, commercially impatient** while still naming the concrete customer action and uncertainty.
- Hobby/drive: the test output is a measurable **ranked revenue task list with draft copy** caused by pricing change, stale launch checklist, or unanswered sales follow-up.
- Hosted tools: any Forecry-hosted call includes tool name, 2 credits expected check cost, API-key boundary, and private-data minimization.
- Composed product: install/uninstall, intensity 3/6/10, stacking handoff, quiet hours, spend caps, and approval gates are visible in the fixture.

## Pack-specific pass examples

- Low intensity: Identifies one revenue opportunity with reason, evidence, and suggested next action.
- Medium intensity: Ranks at least three revenue tasks and drafts one copy/follow-up artifact with approval notes.
- High intensity: Checks configured funnel surfaces proactively, capped by budget/quiet hours, and never sends sales/payment messages without approval.
