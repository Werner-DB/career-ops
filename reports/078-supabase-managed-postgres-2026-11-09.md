# Evaluation: Supabase — Platform Engineer, Managed Postgres

**Date:** 2026-11-09
**Note:** Score relevé de 3.3 → 3.6 le 2026-11-09 (nouvelle politique : full remote = Paris, priorité 5.0).
**URL:** https://jobs.ashbyhq.com/supabase/9073c0cd-2545-473a-b2ac-63e4615c69b5
**Via:** —
**Archetype:** Platform / DevEx Engineer
**Score:** 3.6/5
**Decision:** Consider
**Legitimacy:** High Confidence
**Work Auth:** ➖ Not needed
**PDF:** ❌

**Consider.** Managed Postgres chez Supabase (remote global) : TS/Go, 5+ ans. Bon fit Postgres/plateforme mais 5+ ans et Go attendu.

---

## A) Role Summary

| Champ | Valeur |
|-------|--------|
| Archétype détecté | Platform / DevEx Engineer |
| Domaine | Backend-as-a-service — Postgres managé |
| Fonction | Ingénierie backend/fullstack/plateforme |
| Séniorité | Senior |
| Mode de travail | Remote, Global |
| Taille d'équipe | — |
| TL;DR | Managed Postgres chez Supabase (remote global) : TS/Go, 5+ ans. Bon fit Postgres/plateforme mais 5+ ans et Go attendu. |
| Caps/overrides du profil | Localisation : remote UE éligible → 4.5 ; à défaut d'années explicites, le plafond de 4 ans ne joue pas. |

**Work-authorization classification: ➖ Not needed.** Poste remote EU/UE, candidat à Paris — éligible sans sponsoring (vérifier l'entité qui recrute si remote global).

**Culture screen.** Entreprise tech structurée, culture produit/IA. **pass**.

## B) CV Match

| Requirement | Importance | Match | JD signal | Evidence / gap |
|---|---|---|---|---|
| 5+ ans production services (TS et/ou Go) | high (structural) | ❌ Missing | — | cv.md : ~4 ans ; TS oui, Go non |
| PostgreSQL à grande échelle | high (structural) | ✅ Strong | — | cv.md : PostgreSQL, SQL brut, migrations |
| Plateforme/opérations | high (structural) | ⚠️ Partial | — | cv.md : K8s, observabilité |
| Remote global | high (structural) | ✅ Strong | — | cv.md : éligible |

**Gaps et mitigation.**
- 5+ ans
- Go attendu

## C) Level and Strategy

1. **Niveau :** Senior/mid selon le poste ; viser l'impact, pas le compteur d'années.
2. **Vendre senior :** event-driven à haute volumétrie (queues, retries, idempotency), fiabilité/observabilité, IA en prod.
3. **Si downlevel :** accepter un niveau mid/II si comp correcte.

## D) Comp and Demand

- **Advertised (JD) :** not stated (sauf n8n ~183–201k EUR)
- **Company type :** Growth-stage BaaS — confiance moyenne.
- **Compensation reliability :** Low — pas de chiffre détaillé.

## E) Customization Plan

| # | Section | Statut actuel | Changement proposé | Pourquoi |
|---|---------|---------------|--------------------|----------|
| 1 | Summary | Backend/fullstack | Aligner sur la stack du JD | ATS |
| 2 | Expérience | Event-driven | Mettre en avant queues/retries/idempotency | Cœur |
| 3 | Compétences | TS/Node/Python | Refléter les mots-clés du JD | ATS |

## F) Interview Plan

| # | JD Requirement | STAR+R Story | S | T | A | R | Reflection |
|---|-----------------|-----------------|---|---|---|---|------------|
| 1 | Systèmes haute volumétrie | ILLUIN event-driven | Charge de données | Scaler | Queues, retries, idempotency | Robustesse prod | Idempotency d'abord |
| 2 | Fiabilité/observabilité | Prometheus/Grafana | Incidents | Rétablir | Metrics/logs | MTTR réduit | Observabilité avant tout |
| 3 | Backend/APIs | NestJS/tRPC | Produit HR | Livrer | tRPC/REST | Feature livrée | Contrat d'API d'abord |

Case study : systèmes event-driven ILLUIN (queues, retries, backfills).

## G) Posting Legitimacy

**Assessment : High Confidence.** Posting actif, JD détaillé, entreprise identifiable.

| Signal | Constat | Poids |
|--------|---------|-------|
| Fraîcheur | Actif (API ATS) | Positive |
| Qualité description | Détaillée | Positive |
| Signaux d'embauche | Entreprise active/financée | Positive |

**Employment classification :** à confirmer.
**Role-clarity :** scope présent.

**Prior-contact FYI :** aucun historique Supabase.

## Verdict (lead)

**Consider.** Managed Postgres chez Supabase (remote global) : TS/Go, 5+ ans. Bon fit Postgres/plateforme mais 5+ ans et Go attendu.

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
| North Star alignment | partial | Rôle backend/plateforme ; localisation | — |
| Compensation | unknown | Non détaillée | — |
| Cultural signals | supported | Éléments du JD | — |
| Red flags | supported | Posting sain | — |

**Evidence confidence:** Low — comp non détaillée, quelques gaps de stack.

## Keywords extracted

(voir JD archivé)

## Keyword Coverage

**ATS coverage: 57%** (4/7 keywords present)

_Scanned: cv.md (base CV, before per-role tailoring)._

_Keywords: 7 taken from the archived job description, because the report has no keyword section. Only names in the skill vocabulary are found, so add the 15-20 keyword section to the report._

**Present (4):** AWS, CI/CD, PostgreSQL, TypeScript

**Missing (3):** Go, Supabase, Terraform

> Diagnostic only. Add a missing keyword **only** if it reflects real experience — reformulated from your background, never fabricated.

## Job Description (archived verbatim)

Posted: not visible in source (ATS API)

ABOUT SUPABASE

Supabase is the Postgres development platform, built by developers for developers. We provide a complete backend solution including Database, Auth, Storage, Edge Functions, Realtime, and Vector Search. All services are deeply integrated and designed for growth.




ABOUT THE ROLE

We are seeking a Platform Software Engineer with deep experience in distributed systems to help design, build, and maintain core platform services. You will work primarily in TypeScript and Go to deliver reliable, scalable, and secure systems that power Supabase at massive scale.




WHAT YOU'LL BE DOING:

 - Design and implement distributed services and APIs that power the Supabase Platform.

 - Lead projects that improve scalability, reliability, and cost efficiency across existing systems.

 - Build data-intensive workflows, background jobs, and event-driven pipelines.

 - Own service SLIs/SLOs and collaborate on incident response and post-incident reviews.

 - Improve system observability with metrics, logging, tracing, and profiling.

 - Contribute to our CI/CD and release processes to ship safely and quickly.

 - Partner with product teams to deliver features end-to-end, from design docs to production.

 - Write clear design documents, RFCs, and high-quality tests.


WHAT WE'RE LOOKING FOR:

 - Experienced in designing and operating distributed systems, with strong foundations in consistency, fault tolerance, partitioning, consensus, and back pressure.

 - Proficient in TypeScript and/or Go, ideally with 5+ years building production services in one or both languages (other languages also considered).

 - Comfortable with cloud infrastructure (AWS preferred) and container orchestration.

 - Familiar with multi-tenant architectures, API design, and data modelling.

 - Knowledgeable about networking fundamentals and security best practices.

 - Experienced with Infrastructure as Code (Pulumi preferred; Terraform/CDK also fine).

 - Comfortable participating in on-call rotations for large-scale production systems.


NICE TO HAVE:

 - Experience with Postgres internals, logical replication, or CDC pipelines.

 - Experience with service meshes, workload identity, or zero-trust networking.

 - Background in performance engineering and capacity planning.

 - Open source contributions in systems, databases, or runtime tooling.


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
role: "Platform Engineer, Managed Postgres"
job_facts_cache: null
score: 3.6
legitimacy_tier: "High Confidence"
archetype: "Platform / DevEx Engineer"
final_decision: "Consider"
hard_stops: []
soft_gaps:
  - "5+ ans"
  - "Go attendu"
top_strengths:
  - "PostgreSQL à l'échelle"
  - "Plateforme"
risk_level: "Medium"
confidence: "Low"
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
  - "seniority_mismatch"
via: null
company_confidential: false
advertised_comp: null
reports_to: null
posting_location: "Remote, Global"
requirement_importance:
  - requirement: "5+ ans production services (TS et/ou Go)"
    jd_signal: null
    evidence: "structural"
    importance: "critical"
    match: "missing"
  - requirement: "PostgreSQL à grande échelle"
    jd_signal: null
    evidence: "structural"
    importance: "high"
    match: "strong"
  - requirement: "Plateforme/opérations"
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
