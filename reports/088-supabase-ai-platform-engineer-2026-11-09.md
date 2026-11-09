# Evaluation: Supabase — AI Platform Engineer

**Date:** 2026-11-09
**Note:** Score relevé de 3.8 → 4.1 le 2026-11-09 (nouvelle politique : full remote = Paris, priorité 5.0).
**URL:** https://jobs.ashbyhq.com/supabase/3b5d54ca-741b-45ac-bd3f-31605a0d3541
**Via:** —
**Archetype:** Backend Engineer — AI/LLM & Data
**Score:** 4.1/5
**Decision:** Consider
**Legitimacy:** High Confidence
**Work Auth:** ➖ Not needed
**PDF:** ❌

**Consider.** AI Platform Engineer chez Supabase (remote global) : plateforme IA/LLM. Bon axe IA mais plateforme/infra ML, pas de quota d'années explicite.

---

## A) Role Summary

| Champ | Valeur |
|-------|--------|
| Archétype détecté | Backend Engineer — AI/LLM & Data |
| Domaine | Backend-as-a-service — plateforme IA |
| Fonction | Ingénierie backend/fullstack |
| Séniorité | Senior |
| Mode de travail | Remote, Global |
| Taille d'équipe | — |
| TL;DR | AI Platform Engineer chez Supabase (remote global) : plateforme IA/LLM. Bon axe IA mais plateforme/infra ML, pas de quota d'années explicite. |
| Caps/overrides du profil | Remote UE éligible ; quota d'années absent ou ≤4 selon le JD. |

**Work-authorization classification: ➖ Not needed.** Poste remote UE/UE, candidat à Paris — éligible.

**Culture screen.** Entreprise tech structurée. **pass**.

## B) CV Match

| Requirement | Importance | Match | JD signal | Evidence / gap |
|---|---|---|---|---|
| Plateforme IA/LLM | high (structural) | ⚠️ Partial | — | cv.md : MCP, APIs génératives ; plateforme ML non |
| Backend services | high (structural) | ✅ Strong | — | cv.md : TS/Node, APIs |
| Remote global | high (structural) | ✅ Strong | — | cv.md : éligible |

**Gaps et mitigation.**
- Plateforme ML/infra IA spécifique

## C) Level and Strategy

1. **Niveau :** Senior ; viser l'impact, pas le compteur d'années.
2. **Vendre senior :** event-driven haute volumétrie, fiabilité/observabilité, IA en prod.
3. **Si downlevel :** accepter mid si comp correcte.

## D) Comp and Demand

- **Advertised (JD) :** not stated
- **Company type :** Growth-stage BaaS — confiance moyenne.
- **Compensation reliability :** Low — pas de chiffre détaillé.

## E) Customization Plan

| # | Section | Statut actuel | Changement proposé | Pourquoi |
|---|---------|---------------|--------------------|----------|
| 1 | Summary | Backend/fullstack | Aligner sur la stack du JD | ATS |
| 2 | Expérience | Event-driven | Mettre en avant queues/retries/observabilité | Cœur |
| 3 | Compétences | TS/Node/Python | Refléter les mots-clés | ATS |

## F) Interview Plan

| # | JD Requirement | STAR+R Story | S | T | A | R | Reflection |
|---|-----------------|-----------------|---|---|---|---|------------|
| 1 | Systèmes haute volumétrie | ILLUIN event-driven | Charge | Scaler | Queues, retries, idempotency | Robustesse | Idempotency d'abord |
| 2 | Fiabilité/observabilité | Prometheus/Grafana | Incidents | Rétablir | Metrics/logs | MTTR réduit | Observabilité avant tout |
| 3 | Backend/APIs | NestJS/tRPC | Produit HR | Livrer | tRPC/REST | Feature livrée | Contrat d'API d'abord |

Case study : systèmes event-driven ILLUIN.

## G) Posting Legitimacy

**Assessment : High Confidence.** Posting actif, JD détaillé.

| Signal | Constat | Poids |
|--------|---------|-------|
| Fraîcheur | Actif (API ATS) | Positive |
| Qualité description | Détaillée | Positive |
| Signaux d'embauche | Entreprise active | Positive |

**Employment classification :** à confirmer.
**Role-clarity :** scope présent.

**Prior-contact FYI :** aucun historique Supabase.

## Verdict (lead)

**Consider.** AI Platform Engineer chez Supabase (remote global) : plateforme IA/LLM. Bon axe IA mais plateforme/infra ML, pas de quota d'années explicite.

## Risk Summary

| Signal | Status |
|--------|--------|
| Posting legitimacy | ✅ High Confidence |
| Employment classification | — not evaluated |
| Culture screen | ✅ pass |
| Interview red flags | — no interview sessions yet |
| AI claims vs. infrastructure | — not evaluated |
| Fixed-term contract | ✅ no fixed term disclosed |
| Vacancy-status disclosure | — no jurisdiction match |
| Unpaid placement | — not evaluated |
| Candidate-paid fee | — not evaluated |
| Accommodation notice | — no jurisdiction match |

## Score Evidence

| Dimension | Status | Source / observation | Unresolved question |
|-----------|--------|----------------------|---------------------|
| CV match | partial | Stack partiellement alignée | Voir gaps |
| North Star alignment | partial | Rôle backend/fullstack | — |
| Compensation | unknown | Non détaillée | — |
| Cultural signals | supported | Éléments du JD | — |
| Red flags | supported | Posting sain | — |

**Evidence confidence:** Medium — comp et stack à préciser.

## Keywords extracted

(voir JD archivé)

## Keyword Coverage

**ATS coverage: 50%** (3/6 keywords present)

_Scanned: cv.md (base CV, before per-role tailoring)._

_Keywords: 6 taken from the archived job description, because the report has no keyword section. Only names in the skill vocabulary are found, so add the 15-20 keyword section to the report._

**Present (3):** LLMs, PostgreSQL, Python

**Missing (3):** GCP, Prompt Engineering, Supabase

> Diagnostic only. Add a missing keyword **only** if it reflects real experience — reformulated from your background, never fabricated.

## Job Description (archived verbatim)

Posted: not visible in source (ATS API)

ABOUT SUPABASE

Supabase is the Postgres development platform, built by developers for developers. We provide a complete backend solution including Database, Auth, Storage, Edge Functions, Realtime, and Vector Search. All services are deeply integrated and designed for growth.



ABOUT THE ROLE

We are hiring a AI Platform Engineer to build the execution layer for Supabase's internal AI systems.

Supabase is building an AI-native internal operating system: a common way of working across the company where AI carries a meaningful share of the operational load rather than sitting alongside it as an assistant. We are standing up a new central team to build those systems, enable the teams, and embed AI operations throughout the organization. You are the engineer on that team.

The execution layer is yours. You will build the platform that actually runs agents: an event-triggered queue, a headless model-agnostic runtime, durable state so work survives a restart, a human review gate, atomic rollback, and full logging of every prompt, tool call and decision so any run can be reconstructed. You will build the evaluation layer that makes any of it trustworthy, because an agent that cannot be measured cannot be trusted with anything beyond reading. And you will build the agents themselves, across everything from executive reporting down to a layer of agents that watch the platform and improve it.

This is a governance-heavy environment by design, and that is the interesting part of the problem. Agents are risk-tiered from read-only internal data through to external-facing output, with review depth, evaluation requirements and human approval scaling by tier. Some capabilities are permanently off limits: an agent may read and report, it may carry a human-authored update into a system of record once a human consents, and it may initiate contact within a strict budget, but it may never autonomously write a commitment (an owner, a due date, a status) into a shared work system. Your job is to make that structurally impossible rather than merely forbidden.

You will be the only engineer on this platform. You will close open architecture decisions yourself, own the infrastructure end to end, and instrument the system so it reports its own return.



WHAT YOU'LL BE RESPONSIBLE FOR

In this role, you'll:

 - Ship the agent platform to production. An event-triggered queue, a headless model-agnostic runtime (choosing the runtime is an open decision you will close), durable state that survives a failed run, a human review gate, atomic rollback, and complete run logging in the warehouse.

 - Own the evaluation layer, and switch on the gate that depends on it. Golden suites with behavioral assertions rather than intuition, judge criteria with a written rubric, safety cases that must pass on every run, and a CI gate that blocks a regression from merging. This is the precondition for every agent that does anything beyond read internal data.

 - Build and register the agent portfolio. Reporting, drafting, linting, triage and question-answering agents across the executive, team-lead and individual-contributor layers, plus a meta layer that observes the platform and improves it.

 - Enforce governance in code. Risk tiers the pipeline actually enforces, least-privilege credentials per agent, tool-permission gates, a decision audit log, and autonomy classes where the dangerous class has no code path rather than a warning label. Nothing runs without a registered owner, tier, tool grant and human gate.

 - Design how the system contacts people. A hard interruption budget per person, message bundling instead of a stream of pings, and a structure that gives something useful before it asks for anything. Adoption depends on this more than on any other single design choice.

 - Own the platform tooling. The compiler and validator, inventory integrity, and the paths that distribute context and capabilities into the repositories and chat surfaces where work happens.

 - Compute the operating measures from production data. A pipeline from raw system activity through to a computed maturity grade per team, defensible enough that a team can dispute the result and be answered with the query rather than an opinion.

 - Instrument the platform's own return. A ledger that logs the work each agent absorbs and computes the monthly figure, so the value of the system is a measurement rather than a claim.


HOW YOU'LL THINK


RECURSIVE THINKING

You build the generator, not the artifact. When you need thirty agents, you do not write thirty agents; you build the inventory, the compiler and the distribution path that makes the thirty-first cost an afternoon, then a meta layer whose job is to watch the platform, find its drift and file the fix.

The evaluation layer is the same move applied to trust. You are not checking whether one agent is correct today. You are building the machine that decides whether every future agent is allowed to ship, which means the suite has to be right in a way the agent does not, and the thing that grades has to be graded too.


INVERSION THINKING

You start from the failure and work backward to the design. The rule is that an agent may never autonomously write a commitment into a shared work system. The weak implementation is an instruction in a prompt. The strong one is that the credential in the agent's tool grant physically cannot set an owner, a due date or a status, so no amount of clever input, prompt injection or model error produces the forbidden write. You reach for the second one first.

Same for evaluation. Before writing a suite you enumerate how the agent can be wrong: an update that invents progress that did not happen, one that quotes a private channel into a public digest, one that is accurate and reads as an accusation, one that credits the wrong person. Then the suite is that list, each case caught before the agent ships rather than after it embarrasses someone.


AI-NATIVE EXECUTION

You use agentic tools on real work, in files and repositories, with the same rigor you apply to anything else you ship. You have a setup of your own and can describe it mechanically: what triggers it, what it is allowed to touch, where the human approves, what it logs, and how you found out the one time it went wrong.

That experience is this job, generalized. You are building for async engineers across 40+ countries who will judge the platform by whether it saves them an hour or costs them one, so you are your own first user and your own harshest reviewer.



YOU MIGHT BE A GOOD FIT IF YOU


MUST HAVE

 - Have shipped production LLM agent systems that other people depended on. Not demos, not internal showcases. Systems with operational history, real users and at least one incident you can talk through. Prompt engineering on its own does not clear this bar.

 - Design evaluations, not spot checks. You build golden sets, write behavioral assertions, define judge rubrics, set pass thresholds and gate CI on the result. You can explain why "we reviewed a bunch of outputs and they looked good" is not evaluation.

 - Have done deep API work against the systems work actually lives in, and have authored MCP servers. You know the specific failure modes of those APIs, not just that they exist.

 - Own infrastructure end to end in Python on GCP, with a cloud warehouse and infrastructure as code. You provision, deploy, monitor and roll back your own systems, and you close architecture decisions rather than routing them onward.

 - Have taste about how software contacts humans. You treat every notification as spending a limited amount of trust.


STRONG SIGNAL

 - Public work in this space. An open-source agent framework, an MCP server, an evaluation harness, or writing on agent reliability that other practitioners cite.

 - LLM observability and cost instrumentation. Tracing agent runs, attributing spend per run, and building the queries that turn raw logs into a report someone acts on.

 - You have built an internal platform that non-engineers adopted voluntarily, and can describe what you changed after watching them use it.


WHAT SUCCESS LOOKS LIKE

 - The platform is boring. Agents run on a schedule and on events, state survives restarts, failed runs roll back cleanly, and every run can be reconstructed from its log.

 - Nothing ships unevaluated. Every registered agent has a real suite with safety cases, the gate blocks regressions, and when someone challenges an output the answer is a test case rather than an argument.

 - The dangerous action is impossible, not discouraged. An audit of any agent's credentials shows it cannot perform the writes it is not allowed to perform, and the audit log makes every consequential decision traceable.

 - Teams pull the platform instead of being pushed. Agents get adopted because the reports are useful and the contact is rare and well-timed, and each team ends up with at least one workflow that runs automatically.

 - The platform reports its own value. The work absorbed is measured and published, so the case for expanding it is made with data rather than enthusiasm.


WHAT WE OFFER

 - Fully Remote
   
   We hire globally. We believe you can do your best work from anywhere. There are no Supabase offices, but we provide a WeWork membership or co-working allowance you can use anywhere in the world.

 - ESOP
   
   Every team member receives ESOP (equity ownership) in the company. We want everyone to share in the upside of what we’re building together.

 - Tech Allowance
   
   Use this budget to set up your ideal work environment—laptop, monitor, headphones, or whatever helps you do your best work.

 - Health Benefits
   
   Supabase covers 100% of health insurance for employees and 80% for dependents, wherever you are. Your wellbeing and your family’s health are important to us.

 - Annual Off-Sites
   
   Once a year, the entire company gathers in a new city for a week of connection, collaboration, and fun. It’s a highlight of our year.

 - Flexible Work
   
   We operate asynchronously and trust you to manage your own time. You know what needs to be done and when.

 - Professional Development
   
   Every team member receives an annual education allowance to spend on learning—courses, books, conferences, or anything that supports your growth.
   
   


ABOUT THE TEAM

Supabase was born-remote and open-source-first. We believe our globally distributed team is our secret weapon in building tools developers love.

 - ~400 team members

 - 60+ countries

 - 20+ languages spoken

 - Over $1B raised (including our $500M Series F)

 - 540,000+ community members

We move fast, build in public, and use what we ship. If it’s in your project, we probably use it in ours too. We believe deeply in the open-source ecosystem and strive to support—not replace—existing tools and communities.

## Machine Summary

```yaml
company: "Supabase"
role: "AI Platform Engineer"
job_facts_cache: null
score: 4.1
legitimacy_tier: "High Confidence"
archetype: "Backend Engineer — AI/LLM & Data"
final_decision: "Consider"
hard_stops: []
soft_gaps:
  - "Plateforme ML/infra IA spécifique"
top_strengths:
  - "IA/LLM + backend"
  - "Remote global"
risk_level: "Medium"
confidence: "Medium"
score_evidence:
  cv_match: "partial"
  north_star: "partial"
  compensation: "unknown"
  culture: "supported"
  red_flags: "supported"
confidence_gaps:
  - "Vérifier l'éligibilité remote (entité/pays)"
  - "Obtenir la fourchette de rémunération"
next_action: "Voir Verdict"
work_auth: "not_needed"
discard_reasons:
  - "tech_stack_mismatch"
via: null
company_confidential: false
advertised_comp: null
reports_to: null
posting_location: "Remote, Global"
requirement_importance:
  - requirement: "Plateforme IA/LLM"
    jd_signal: null
    evidence: "structural"
    importance: "high"
    match: "partial"
  - requirement: "Backend services"
    jd_signal: null
    evidence: "structural"
    importance: "high"
    match: "strong"
  - requirement: "Remote global"
    jd_signal: null
    evidence: "structural"
    importance: "high"
    match: "strong"
risk_summary:
  legitimacy: "high_confidence"
  classification: "not_evaluated"
  culture: "pass"
  interview_redflags: "not_evaluated"
  ai_infra: "not_evaluated"
  ai_screening_disclosure: "no_match"
  fixed_term: "not_detected"
  relocation_purchasing_power: "not_evaluated"
  vacancy_disclosure: "no_match"
  unpaid_placement: "not_evaluated"
  candidate_fees: "not_evaluated"
  accommodation_notice: "no_match"
```
