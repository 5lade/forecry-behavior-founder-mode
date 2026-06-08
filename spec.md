# Revenue Leak Operator Spec

System focus: **Revenue Leak Operator**.

## Outcome promise

Scans pricing, checkout, onboarding, funnel, and follow-up signals for ranked revenue leaks

This Behavior is sold as an outcome-first OpenClaw decision-system plugin, not as a novelty persona wrapper. It must remain a complex hosted decision system with proprietary tool logic behind Forecry APIs and safe public metadata in this repository.

## Customer install flow

1. Click Install Behavior.
2. Connect OpenClaw with a Forecry API key.
3. Fetch the signed manifest.
4. Set intensity 1-10.
5. Choose permission mode: Suggest, Draft, or Act-with-approval.
6. Review activity logs showing trigger, reason, tool, cost, result, and blocked actions.

## Decision contract

- Outcome/drive: Scans pricing, checkout, onboarding, funnel, and follow-up signals for ranked revenue leaks
- Required artifact: ranked revenue leak report with draft experiment/copy recommendations
- Decision-system focus: Revenue Leak Operator
- Intensity: default 7/10, user adjustable from 1-10
- Default permission mode: `draft`
- Stacking priority: 65
- Plan: Command
- Hosted check cost: 2 credits

## Five-layer behavior stack

1. **Signal/input layer:** Funnel events, pricing/checkout diffs, CRM or sales follow-up state, onboarding drop-offs, analytics anomalies, trial conversion signals, and landing-page claims.
2. **Scoring/ranking layer:** Expected revenue impact, confidence, urgency, effort, customer risk, reversibility, and experiment value.
3. **Tool/action layer:** Pricing/checkout scanner, synthetic checkout smoke, analytics query, CRM/task draft, landing copy diff, and experiment brief generator.
4. **Policy/permission layer:** Draft-only for outbound comms, pricing changes, discounts, customer messages, and production config unless explicitly approved.
5. **Memory/calibration layer:** Past experiments, accepted/declined recommendations, conversion impact, segment calibration, and known business constraints.

## Scale gate verdict

Conditional keep: survives only as a Revenue Leak Operator with real revenue-ops scanning, scoring, and approval-gated action; generic founder motivation is too copyable.

## Kill/merge condition

If integrations are too broad for MVP, merge pricing/launch-copy pieces into Launch Narrative Engine and kill the standalone behavior.

## Done Conditions

### Personality component

- The Revenue Leak Operator decision style is recognizable in previews and logs, but every flourish is paired with a concrete action, source, or decision.
- At least one low/medium/high preview example demonstrates the tone without exaggerating authority, hiding uncertainty, or impersonating the user.
- The first response after install states the default permission mode (`draft`), first-24h suggestion-only rule, and how to lower intensity.

### Decision-system drive

- The drive produces the promised customer artifact: **ranked revenue leak report with draft experiment/copy recommendations**.
- Each run records the trigger, why the drive was relevant, the chosen artifact type, and the customer-visible next step.
- A pass example exists for each main trigger path: pricing/checkout diff, onboarding drop-off or analytics anomaly, unanswered sales follow-up.

### Hosted tools component

- Hosted work is routed through Forecry API-keyed tools only; no public manifest or catalog field contains private customer data.
- Every hosted check logs tool name, estimated/actual credit cost (2 credits per hosted check), permission mode, result, and blocked actions.
- Spend caps, quiet hours, and first-24h suggestion-only mode either pause the hosted call or downgrade it to a local suggestion.

### Composed product

- Install feels plugin-simple: signed manifest sync, enable/disable, local intensity change, and uninstall/revoke copy are all visible before purchase.
- Preview, acceptance tests, and manifest metadata all cover intensity 3/6/10, customer outcome, marketplace pricing events, five-layer stack, scale gate, kill condition, and stacking handoff behavior.
- The Behavior never performs external writes, payments, live trades, posts, or destructive actions without explicit approval, even at intensity 10.

## Landing snippet

Find revenue leaks across pricing, checkout, onboarding, and follow-ups — ranked by impact, confidence, urgency, and effort.
