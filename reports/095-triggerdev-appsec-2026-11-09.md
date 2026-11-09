# Evaluation: Trigger.dev — Senior Software Engineer (AppSec)

**Date:** 2026-11-09
**Note:** Score relevé de 3.7 → 4 le 2026-11-09 (nouvelle politique : full remote = Paris, priorité 5.0).
**URL:** https://jobs.ashbyhq.com/triggerdev/cf7e7521-b323-41b8-917b-2972685c7791
**Via:** —
**Archetype:** Senior Backend Engineer
**Score:** 4/5
**Decision:** Consider
**Legitimacy:** High Confidence
**Work Auth:** ➖ Not needed
**PDF:** ❌

**Consider.** Senior Software Engineer (AppSec) chez Trigger.dev (remote EU/UK) : sécurité applicative, pas d'années. Sécurité/JWT présents, mais AppSec est une spécialité.

---

## A) Role Summary

| Champ | Valeur |
|-------|--------|
| Archétype détecté | Senior Backend Engineer |
| Domaine | Dev-tools — sécurité applicative |
| Fonction | Ingénierie backend/fullstack |
| Séniorité | Senior |
| Mode de travail | Remote or Hybrid UK |
| Taille d'équipe | — |
| TL;DR | Senior Software Engineer (AppSec) chez Trigger.dev (remote EU/UK) : sécurité applicative, pas d'années. Sécurité/JWT présents, mais AppSec est une spécialité. |
| Caps/overrides du profil | Remote UE éligible ; quota d'années absent ou ≤4 selon le JD. |

**Work-authorization classification: ➖ Not needed.** Poste remote UE/UE, candidat à Paris — éligible.

**Culture screen.** Entreprise tech structurée. **pass**.

## B) CV Match

| Requirement | Importance | Match | JD signal | Evidence / gap |
|---|---|---|---|---|
| Sécurité applicative | high (structural) | ⚠️ Partial | — | cv.md : JWT, IAM ; AppSec non |
| Backend Node/TS | high (structural) | ✅ Strong | — | cv.md : TS/Node |
| Remote EU/UK | high (structural) | ✅ Strong | — | cv.md : éligible |

**Gaps et mitigation.**
- Spécialité AppSec à confirmer

## C) Level and Strategy

1. **Niveau :** Senior ; viser l'impact, pas le compteur d'années.
2. **Vendre senior :** event-driven haute volumétrie, fiabilité/observabilité, IA en prod.
3. **Si downlevel :** accepter mid si comp correcte.

## D) Comp and Demand

- **Advertised (JD) :** not stated
- **Company type :** Growth-stage dev-tools — confiance moyenne.
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

**Prior-contact FYI :** aucun historique Trigger.dev.

## Verdict (lead)

**Consider.** Senior Software Engineer (AppSec) chez Trigger.dev (remote EU/UK) : sécurité applicative, pas d'années. Sécurité/JWT présents, mais AppSec est une spécialité.

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

**ATS coverage: 33%** (1/3 keywords present)

_Scanned: cv.md (base CV, before per-role tailoring)._

_Keywords: 3 taken from the archived job description, because the report has no keyword section. Only names in the skill vocabulary are found, so add the 15-20 keyword section to the report._

**Present (1):** TypeScript

**Missing (2):** Go, Rust

> Diagnostic only. Add a missing keyword **only** if it reflects real experience — reformulated from your background, never fabricated.

## Job Description (archived verbatim)

Posted: not visible in source (ATS API)

ABOUT US

Trigger.dev http://Trigger.dev is the platform for running reliable AI agents and workflows. Developers use it to build, deploy, and scale production systems with built-in tools for orchestration, scheduling, monitoring, and debugging.

Our Cloud product is a managed service where we deploy our users’ code and auto-scale from zero to millions of executions. Today, we serve thousands of teams building AI apps and agents, handling hundreds of millions of executions per month.


ABOUT THE ROLE

You’ll own security at Trigger.dev: our infrastructure, our app, the runtime that runs our users’ code, and the secrets they trust us with.

Some of our customers let their own users run code on Trigger.dev (think coding agents running whatever instructions they’re given). That code must never reach our systems or our customers’ systems. Keeping it contained is a feature we ship, so this is a product engineering role as much as a security one.

About half to three quarters of your time will be backend engineering. The rest is hunting for problems and fixing them. When you find something, you own the fix. You’ll set your own priorities and work with others when necessary.

We’re looking for an application security (AppSec) engineer who builds: a senior backend engineer who brings a security mindset to everything they ship.


WHAT YOU’LL DO

 - Sandbox and runtime security. Design and harden the environments that isolate untrusted user code. This is the core of the role.

 - Security features for customers. Build things like end-to-end encrypted secrets, log redaction, private networking, and runtime hardening.

 - Automated offensive testing. Use AI tools to attack our own systems on a schedule, find weak spots, and fix them. Bring in outside pen testers when it’s worth it.

 - Detection and response. Build monitoring and alerting for suspicious activity, improve our security observability, and lead the response when something needs a look.

 - Vulnerability management. Run scanning and triage, own our vulnerability disclosure program, and handle incoming reports.

 - Automated quality. Own our security PR reviews, automated scans, fixes, and triage.

 - Write it down. Document how we do security so the rest of the team can answer customer questions with confidence.

 - Security habits. Help the engineering team build secure habits with reviews, docs, and light guardrails.

Like everyone at Trigger.dev, you’ll also help in our Discord and GitHub community, write docs, and create content like blog posts, code examples, and videos.


WHAT WE’RE LOOKING FOR

 - Senior backend engineer. You design and ship production backend systems yourself.

 - AppSec experience. You’ve done hands-on application security work, such as secure code review, threat modelling, pen testing, CTFs or bug bounties. You don’t need a security job title or to have run a security team.

 - Cloud operations. You’ve run production systems in the cloud.

 - Multi-tenant systems. You’ve built or secured systems where many customers share the same infrastructure.

 - TypeScript. You’re comfortable working in it. Our codebase also uses Go and Rust.

 - AI-forward. You use AI tools to automate testing, detection, and defense.

 - Startup pace. You’ve worked somewhere a step or two ahead of where we are, so you know what good looks like at our size.

 - Owner’s mindset. You take work off the team’s plate and fix what you find.

 - On call. Reliability and security response are shared across the team.

 - In-person time. You’re open to team events a few times a year.


YOU’LL STAND OUT IF YOU HAVE

 - Built or hardened sandboxes: containers, microVMs, gVisor, Firecracker, WASM, or similar.

 - Secured platforms where customers have their own customers.

 - A track record in bug bounties or CTFs.

 - Contributed to open source.

 - Worked at a developer tools, infrastructure, or open source company.

 - Experience with Go or Rust.


BENEFITS

 - Compensation and equity. Generous, transparent pay, plus equity so everyone shares in the company’s success.

 - Async working. Need a heads-down day or a meeting-free day? No problem.

 - Home office. We help with equipment so you’re as productive at home as in the office.

 - Vacation. 25 days plus national holidays, sick leave, and generous parental leave.

 - Training budget. An annual budget for books, courses, or an Audible subscription.

 - Pension. Join our company scheme, or we’ll pay into your private pension.


OUR VALUES

 - We’re proud to be open source. We believe in the open source community and in building a great free-to-use product.

 - We ship uncomfortably fast. Moving fast is key for a startup. We’re pragmatic about what we build and when.

 - We work autonomously. We decide as a team what will help our customers most, and prioritize from there.

## Machine Summary

```yaml
company: "Trigger.dev"
role: "Senior Software Engineer (AppSec)"
job_facts_cache: null
score: 4.0
legitimacy_tier: "High Confidence"
archetype: "Senior Backend Engineer"
final_decision: "Consider"
hard_stops: []
soft_gaps:
  - "Spécialité AppSec à confirmer"
top_strengths:
  - "Backend Node/TS"
  - "Sécurité de base"
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
posting_location: "Remote or Hybrid UK"
requirement_importance:
  - requirement: "Sécurité applicative"
    jd_signal: null
    evidence: "structural"
    importance: "high"
    match: "partial"
  - requirement: "Backend Node/TS"
    jd_signal: null
    evidence: "structural"
    importance: "high"
    match: "strong"
  - requirement: "Remote EU/UK"
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
