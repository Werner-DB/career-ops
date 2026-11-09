# Evaluation: Supabase — Software Engineer - Branching

**Date:** 2026-11-09
**Note:** Score relevé de 3.9 → 4.2 le 2026-11-09 (nouvelle politique : full remote = Paris, priorité 5.0).
**URL:** https://jobs.ashbyhq.com/supabase/06752423-eebb-472c-95b5-c7ff2559fd60
**Via:** —
**Archetype:** Senior Backend Engineer
**Score:** 4.2/5
**Decision:** Consider
**Legitimacy:** High Confidence
**Work Auth:** ➖ Not needed
**PDF:** ❌

**Consider.** Software Engineer - Branching chez Supabase (remote global, 3+ ans) : infra cloud + backend. Seuil 3 ans atteint ; plus infra que produit.

---

## A) Role Summary

| Champ | Valeur |
|-------|--------|
| Archétype détecté | Senior Backend Engineer |
| Domaine | Backend-as-a-service — Branching (infra DB) |
| Fonction | Ingénierie backend/fullstack |
| Séniorité | Senior |
| Mode de travail | Remote, Global |
| Taille d'équipe | — |
| TL;DR | Software Engineer - Branching chez Supabase (remote global, 3+ ans) : infra cloud + backend. Seuil 3 ans atteint ; plus infra que produit. |
| Caps/overrides du profil | Remote UE éligible ; quota d'années absent ou ≤4 selon le JD. |

**Work-authorization classification: ➖ Not needed.** Poste remote UE/UE, candidat à Paris — éligible.

**Culture screen.** Entreprise tech structurée. **pass**.

## B) CV Match

| Requirement | Importance | Match | JD signal | Evidence / gap |
|---|---|---|---|---|
| 3+ ans cloud infra/backend | high (structural) | ✅ Strong | — | cv.md : K8s, AWS, backend |
| Postgres/backups/réplication | high (structural) | ⚠️ Partial | — | cv.md : PostgreSQL opéré, migrations |
| Remote global | high (structural) | ✅ Strong | — | cv.md : éligible |

**Gaps et mitigation.**
- Cœur infra DB (branches/backups)

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

**Consider.** Software Engineer - Branching chez Supabase (remote global, 3+ ans) : infra cloud + backend. Seuil 3 ans atteint ; plus infra que produit.

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

**ATS coverage: 50%** (4/8 keywords present)

_Scanned: cv.md (base CV, before per-role tailoring)._

_Keywords: 8 taken from the archived job description, because the report has no keyword section. Only names in the skill vocabulary are found, so add the 15-20 keyword section to the report._

**Present (4):** AWS, CI/CD, PostgreSQL, TypeScript

**Missing (4):** GitHub Actions, Go, Supabase, Terraform

> Diagnostic only. Add a missing keyword **only** if it reflects real experience — reformulated from your background, never fabricated.

## Job Description (archived verbatim)

Posted: not visible in source (ATS API)

ABOUT SUPABASE

Supabase is the Postgres development platform, built by developers for developers. We provide a complete backend solution including Database, Auth, Storage, Edge Functions, Realtime, and Vector Search. All services are deeply integrated and designed for growth.

 


ABOUT THE ROLE

We’re building a high-performance CI/CD execution platform similar to runners used by tools like Buildkite, GitHub Actions, and Blacksmith CI. Our platform executes developer pipelines reliably at scale, integrates deeply with source control, and automates build, test, and deployment workflows.

In this role, you will design and build the distributed systems responsible for running CI/CD pipelines securely and efficiently. This includes orchestrating ephemeral compute environments, managing build isolation, scheduling jobs across fleets of workers, and ensuring reliability at scale.

This role is ideal for someone who thrives in async, fast-paced environments and is excited about building developer tools that scale to millions.

 


WHAT YOU’LL BE RESPONSIBLE FOR

 - Design and improve the core orchestration engine that manages the lifecycle of creating, merging, and rebasing Supabase Branches https://supabase.com/docs/guides/deployment/branching.

 - Provision ephemeral sandboxed execution environment on EKS / ECS for running untrusted build workloads from connected git repositories with securely managed secrets.

 - Implement job scheduling that scale to thousands of concurrent builds.

 - Optimize and reduce pipeline runtimes with caching, artifact storage, and dependency reuse.

 - Manage retry, timeout, cancellation, and failure-propagation logic to ensure pipelines behave predictably under failure conditions.

 - Instrument the full pipeline lifecycle with observability tooling to surface traces, metrics, and structured logs to the end user.

 - Develop configuration files (JSON / TOML) and integrations (Terraform / Pulumi) that allow teams to easily define, trigger, and inspect pipelines in code.

 


YOU MIGHT BE A GOOD FIT IF YOU

 - Have strong software engineering skills (Go and Typescript required);

 - Have 3+ years of experience building and operating cloud infrastructure or distributed systems at scale;

 - Have cloud Infrastructure knowledge - familiarity with AWS constructs is required, past experience using the AWS SDKs and IaC tools (Pulumi, Terraform, etc) to build and operate infrastructure is strongly preferred.

 - Have a production operations mindset - track record of building reliable, observable, and maintainable systems

 - Have an ownership mindset - you thrive in being able to operate independently with high-level guidance

 - Communicate clearly across both technical and non-technical audiences

 - Have experience in async or globally distributed teams

 - Are energized by solving real-world problems for developers

 - Are comfortable navigating ambiguity and moving quickly





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
role: "Software Engineer - Branching"
job_facts_cache: null
score: 4.2
legitimacy_tier: "High Confidence"
archetype: "Senior Backend Engineer"
final_decision: "Consider"
hard_stops: []
soft_gaps:
  - "Cœur infra DB (branches/backups)"
top_strengths:
  - "PostgreSQL"
  - "K8s/AWS"
  - "3 ans accessible"
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
  - requirement: "3+ ans cloud infra/backend"
    jd_signal: null
    evidence: "structural"
    importance: "high"
    match: "strong"
  - requirement: "Postgres/backups/réplication"
    jd_signal: null
    evidence: "structural"
    importance: "high"
    match: "partial"
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
