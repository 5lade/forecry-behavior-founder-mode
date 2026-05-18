#!/usr/bin/env node
import fs from 'node:fs';
const m = JSON.parse(fs.readFileSync(new URL('../manifest.json', import.meta.url), 'utf8'));
const required = ['schema','slug','name','version','kind','personality','drive','intensity','permissions','safety','pricing','subtitle','outcome','buyer_promise','permission_mode_default','plugin','preview','stacking','landing_snippet','done_conditions'];
const logFields = ['behavior_slug','trigger','reason','tool','credit_cost','permission_mode','result','blocked_actions'];
const errors = [];
for (const k of required) if (!(k in m)) errors.push(`missing ${k}`);
if (m.schema !== 'forecry.openclaw.behavior.v1') errors.push('bad schema');
if (!['suggest','draft','act_with_approval'].includes(m.permission_mode_default)) errors.push('bad permission_mode_default');
if (!m.intensity || m.intensity.min !== 1 || m.intensity.max !== 10 || m.intensity.default < 1 || m.intensity.default > 10) errors.push('bad intensity');
for (const f of logFields) if (!m.plugin?.activity_log_fields?.includes(f)) errors.push(`missing log field ${f}`);
for (const i of ['3','6','10']) if (!m.preview?.intensity_examples?.[i]) errors.push(`missing preview intensity ${i}`);
if (typeof m.stacking?.priority !== 'number') errors.push('missing stacking priority');
if (!Array.isArray(m.stacking?.tags) || m.stacking.tags.length === 0) errors.push('missing stacking tags');
if (!Array.isArray(m.stacking?.mutex_resources)) errors.push('missing mutex resources');
if (!m.stacking?.handoff) errors.push('missing handoff');
if (!m.acceptance_tests?.outcome_artifact || !Array.isArray(m.acceptance_tests?.must_block)) errors.push('missing acceptance tests metadata');
if (!m.marketplace_loop?.install || !m.marketplace_loop?.refine) errors.push('missing marketplace loop');
for (const k of ['personality','drive','hosted_tools','composed_product']) {
  if (!m.done_conditions?.[k] || m.done_conditions[k].length < 40) errors.push(`missing measurable done condition ${k}`);
}
if (!m.landing_snippet || m.landing_snippet.length < 60) errors.push('missing landing snippet');
if (errors.length) { console.error(errors.join('\n')); process.exit(1); }
console.log(`${m.slug} manifest validated`);
