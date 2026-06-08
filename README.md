# Revenue Leak Operator

_Revenue Leak Operator system for revenue-leak decisioning_

Forecry Behavior for OpenClaw. This pack is plugin-simple for the customer: click Install Behavior, connect OpenClaw with a Forecry API key, set intensity, and review the trust log. Private prompts and tool logic stay hosted behind Forecry APIs; the local manifest declares safe behavior metadata only.

- **Outcome:** Scans pricing, checkout, onboarding, funnel, and follow-up signals for ranked revenue leaks
- **Artifact:** ranked revenue leak report with draft experiment/copy recommendations
- **Default intensity:** 7/10
- **Permission mode:** `draft`
- **Plan:** Command
- **Hosted check cost:** 2 credits
- **Positioning:** complex hosted decision system for agents, not a prompt/persona wrapper

## Five-layer behavior stack

1. **Signal/input layer:** Funnel events, pricing/checkout diffs, CRM or sales follow-up state, onboarding drop-offs, analytics anomalies, trial conversion signals, and landing-page claims.
2. **Scoring/ranking layer:** Expected revenue impact, confidence, urgency, effort, customer risk, reversibility, and experiment value.
3. **Tool/action layer:** Pricing/checkout scanner, synthetic checkout smoke, analytics query, CRM/task draft, landing copy diff, and experiment brief generator.
4. **Policy/permission layer:** Draft-only for outbound comms, pricing changes, discounts, customer messages, and production config unless explicitly approved.
5. **Memory/calibration layer:** Past experiments, accepted/declined recommendations, conversion impact, segment calibration, and known business constraints.

## Scale-or-kill gate

- **Verdict:** Conditional keep: survives only as a Revenue Leak Operator with real revenue-ops scanning, scoring, and approval-gated action; generic founder motivation is too copyable.
- **Kill condition:** If integrations are too broad for MVP, merge pricing/launch-copy pieces into Launch Narrative Engine and kill the standalone behavior.

## Acceptance summary

A release is accepted only when previews, manifest metadata, activity logs, and acceptance tests prove the five-layer stack, scale-gate verdict, kill condition, intensity 3/6/10 behavior, permission gates, quiet hours, spend caps, and stacking handoff.
