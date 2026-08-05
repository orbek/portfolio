# Portfolio update: AI Solutions Manager

**Date:** 2026-08-04
**Trigger:** Promotion to AI Solutions Manager, effective August 1, 2026.

## Goal

Update the portfolio site to reflect the new title and a scope of work that the
current copy understates. The site presently describes a process analyst who
builds models; the work is now owning an AI portfolio, leading a team, and
driving initiatives with C-suite sponsorship.

A second goal is representing the current flagship project. It is proprietary to
the employer and cannot be named, but it is the strongest evidence of current
capability, so it appears as a de-identified case study.

## Decisions

| Decision | Choice |
|---|---|
| Title treatment | `AI Solutions Manager`, with architecture language retained in prose so hands-on depth still reads |
| Proprietary work | De-identified case study as featured item 01; no employer, vendor, client, or product names; no links |
| Leadership signals | Team leadership, executive stakeholders, and end-to-end ownership all stated explicitly |
| Stats row | Reframed to delivery and leadership; tenure dropped |

## Disclosure boundary

The site already names the employer, so a reader can connect a de-identified
case study to that employer. The de-identification must therefore be stronger
than "omit the project name."

**Excluded from all published copy:**

- Platform, vendor, product, and client account names
- Internal operational volumes (monthly request counts, queue arrival rates, dwell times)
- Internal financial figures (margin percentages, recoverable exposure, revenue gaps)
- Internal SLA and cycle-time baselines
- Individual names and titles of stakeholders

**Permitted:** architecture and engineering practice, the public tech stack, and
model-evaluation results. Evaluation numbers describe the author's own eval
methodology against public models and reveal nothing proprietary.

**Relativized rather than omitted:** the build-vs-buy analysis is described as
redirecting "a six-figure external design proposal in-house" rather than quoting
the figure.

## Changes

### 1. `index.html` — metadata

`<title>`, `og:title`, `og:description`, and `meta description` all read
"AI Solutions Architect". These drive LinkedIn previews and search results, so
they matter as much as visible copy. All four move to "AI Solutions Manager".

### 2. `src/components/Hero.jsx`

- Eyebrow: `AI Solutions Architect` → `AI Solutions Manager`
- Paragraph: replace the process-analyst framing with end-to-end ownership,
  executive sponsorship, and team leadership
- Meta column: add a `Team` row so leadership reads at a glance without prose

### 3. `src/components/About.jsx`

- Paragraph 1: stop self-describing as "Machine Learning Engineer and Data
  Scientist" — now a demotion in print. Lead with portfolio ownership and
  roadmap authority, hands-on in architecture.
- Paragraph 2: executive stakeholder scope and team development, explicit.
- Stats row: `7+ Years / 15+ Projects / 20+ Certs` →
  `10 Shipped / 5 In Production / 2 Engineers Led`. Sourced: 9 site projects
  plus the proprietary platform; 4 live public URLs plus the proprietary
  platform; 2 engineers.
- Capabilities: replace stale entries (`GPT-4`) with the current stack —
  agent pipelines, evaluation and AI safety, backend and data, cloud and MLOps.
- New `Leadership & Scope` block: four mono-labeled rows (ownership,
  stakeholders, team, delivery model) inside About rather than a new section, so
  the page does not grow longer or repeat itself.

### 4. `src/components/Projects.jsx`

New featured item `01`, de-identified; existing five renumber to `02`–`06`.

- **Title:** Enterprise AI Decision Layer
- **Subtitle:** Production Agent Platform · Program Lead
- **Description:** event-driven agent pipeline over a production
  service-operations platform — polls system state, assembles reviewer context,
  classifies risk with an LLM, fuses into a composite confidence score, executes
  through the platform's own permitted-action API above threshold, hands a
  pre-filled card to a human below it, and writes every decision to an auditable
  ledger with rationale, evidence, and policy snapshot.
- **Result:** led discovery through production approval — program charter,
  roadmap, stakeholder sessions, and a build-vs-buy analysis redirecting a
  six-figure external design proposal in-house. Observe-only validation before
  any autonomy: 10 models across 2 providers benchmarked on a hand-labeled
  golden set, a ≥90% CI accuracy gate, thresholds derived from Wilson
  lower-bound agreement curves.
- **Tags:** Python, FastAPI, AWS Bedrock, Angular, SQL Server, Evals
- **Link slot:** a `proprietary` flag renders a non-link `Proprietary` marker
  where Source/Live links normally sit.

## Out of scope

- Resume update — the user is supplying the resume separately. Note for that
  pass: the current resume lists "AI Solutions Architect · October 2025 –
  Current" and needs splitting into two entries showing Architect → Manager.
- `Certifications.jsx`, `Writing.jsx`, `Navbar.jsx`, `Contact.jsx` — no title
  references, no changes needed.

## Verification

`npm run build` must pass. Visual check of Hero, About, and the renumbered
Projects list. Grep the tree for residual "AI Solutions Architect" and confirm
the only remaining hits are historical resume content under `_backup/`.
