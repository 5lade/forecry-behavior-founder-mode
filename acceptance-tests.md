# Revenue Leak Operator Acceptance Tests

## Outcome acceptance

Pass when the Behavior turns one of these triggers into **ranked revenue leak report with draft experiment/copy recommendations**:

- pricing/checkout diff
- onboarding drop-off or analytics anomaly
- unanswered sales follow-up

## Required checks

- Preview shows intensity 3/6/10, default permission mode, credit expectations, and first-24h suggestion-only behavior.
- Activity log includes behavior slug, trigger, reason, tool, credit cost, permission mode, result, and blocked actions.
- Quiet hours and spend caps pause or downgrade proactive checks.
- External writes, payments, trades, posts, and destructive actions are blocked unless explicitly approved.
- Private data is minimized and never placed in public manifests or catalog metadata.
- Stacking follows: user priority, safety urgency, manifest priority, lower credit cost, visible handoff.
- The five-layer behavior stack is present in the manifest and exercised by the fixture.
- The scale-gate verdict and kill condition are stated in README, spec, preview, manifest, and catalog metadata.

## Five-layer fixture gates

1. **Signal/input layer:** Funnel events, pricing/checkout diffs, CRM or sales follow-up state, onboarding drop-offs, analytics anomalies, trial conversion signals, and landing-page claims.
2. **Scoring/ranking layer:** Expected revenue impact, confidence, urgency, effort, customer risk, reversibility, and experiment value.
3. **Tool/action layer:** Pricing/checkout scanner, synthetic checkout smoke, analytics query, CRM/task draft, landing copy diff, and experiment brief generator.
4. **Policy/permission layer:** Draft-only for outbound comms, pricing changes, discounts, customer messages, and production config unless explicitly approved.
5. **Memory/calibration layer:** Past experiments, accepted/declined recommendations, conversion impact, segment calibration, and known business constraints.

## Scale-or-kill gate

- **Verdict:** Conditional keep: survives only as a Revenue Leak Operator with real revenue-ops scanning, scoring, and approval-gated action; generic founder motivation is too copyable.
- **Kill condition:** If integrations are too broad for MVP, merge pricing/launch-copy pieces into Launch Narrative Engine and kill the standalone behavior.

## Done-condition gates

- Personality: preview/log language matches **Direct, ambitious, commercially impatient** while still naming the concrete customer action and uncertainty.
- Drive: the test output is a measurable **ranked revenue leak report with draft experiment/copy recommendations** caused by pricing/checkout diff, onboarding drop-off or analytics anomaly, unanswered sales follow-up.
- Hosted tools: any Forecry-hosted call includes tool name, 2 credits expected check cost, API-key boundary, and private-data minimization.
- Composed product: install/uninstall, intensity 3/6/10, stacking handoff, quiet hours, spend caps, approval gates, five-layer stack, scale verdict, and kill condition are visible in the fixture.

## Pack-specific pass examples

- Low intensity: Surfaces one ranked leak with evidence, estimated impact, and an approval-safe next action.
- Medium intensity: Ranks at least three leaks, drafts one experiment/copy recommendation, and logs cost plus confidence.
- High intensity: Runs bounded checks on approved revenue surfaces while respecting quiet hours, spend caps, and approval gates.
