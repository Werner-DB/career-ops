# Evaluation: Supabase — Platform Engineer - Compute

**Date:** 2026-11-09
**Note:** Score relevé de 3 → 3.3 le 2026-11-09 (nouvelle politique : full remote = Paris, priorité 5.0).
**URL:** https://jobs.ashbyhq.com/supabase/6b314e83-6617-49fc-8c73-021ebae9a757
**Via:** —
**Archetype:** Platform / DevEx Engineer
**Score:** 3.3/5
**Decision:** Skip
**Legitimacy:** High Confidence
**Work Auth:** ➖ Not needed
**PDF:** ❌

**Skip.** Compute platform chez Supabase : 5+ ans infra cloud (AWS requis). Cœur plateforme/infra, hors profil backend produit.

---

## A) Role Summary

| Champ | Valeur |
|-------|--------|
| Archétype détecté | Platform / DevEx Engineer |
| Domaine | Backend-as-a-service — compute |
| Fonction | Ingénierie backend/fullstack/plateforme |
| Séniorité | Senior |
| Mode de travail | Remote, Global |
| Taille d'équipe | — |
| TL;DR | Compute platform chez Supabase : 5+ ans infra cloud (AWS requis). Cœur plateforme/infra, hors profil backend produit. |
| Caps/overrides du profil | Localisation : remote UE éligible → 4.5 ; à défaut d'années explicites, le plafond de 4 ans ne joue pas. |

**Work-authorization classification: ➖ Not needed.** Poste remote EU/UE, candidat à Paris — éligible sans sponsoring (vérifier l'entité qui recrute si remote global).

**Culture screen.** Entreprise tech structurée, culture produit/IA. **pass**.

## B) CV Match

| Requirement | Importance | Match | JD signal | Evidence / gap |
|---|---|---|---|---|
| 5+ ans infra cloud (AWS) | high (structural) | ❌ Missing | — | cv.md : AWS opéré, pas 5+ ans infra |
| Platform engineering | high (structural) | ⚠️ Partial | — | cv.md : K8s |
| Remote global | high (structural) | ✅ Strong | — | cv.md : éligible |

**Gaps et mitigation.**
- Cœur infra compute
- 5+ ans

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

**Skip.** Compute platform chez Supabase : 5+ ans infra cloud (AWS requis). Cœur plateforme/infra, hors profil backend produit.

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

**ATS coverage: 44%** (4/9 keywords present)

_Scanned: cv.md (base CV, before per-role tailoring)._

_Keywords: 9 taken from the archived job description, because the report has no keyword section. Only names in the skill vocabulary are found, so add the 15-20 keyword section to the report._

**Present (4):** AWS, Kubernetes, PostgreSQL, TypeScript

**Missing (5):** Azure, GCP, Go, Supabase, Terraform

> Diagnostic only. Add a missing keyword **only** if it reflects real experience — reformulated from your background, never fabricated.

## Job Description (archived verbatim)

Posted: not visible in source (ATS API)

ABOUT THE ROLE

We are seeking a platform engineer to join our Compute team. This team owns the critical systems that power project provisioning, scaling, and the compute that our users rely on every day.

You’ll work on the core platform that ensures Supabase can seamlessly scale
across multiple regions, handle high-volume workloads, and provide
low-latency, highly available compute services.

You'll design, build, and operate systems that are both robust and highly
automated — enabling us to provision new projects reliably at scale,
optimize resource utilization, and deliver a seamless experience to the
millions of databases which we manage.




WHAT YOU’LL BE RESPONSIBLE FOR:

 - Help build and maintain the Supabase Cloud offering;

 - Design and implement systems to provision, scale, and manage the multi-region compute workloads powering Supabase projects;

 - Own the full lifecycle of compute orchestration: project creation, warm pools, autoscaling, resizing, and resource optimization;

 - Improve automation and observability across the compute stack to ensure high availability and performance;

 - Improve our system architecture to reduce costs while balancing security, reliability, and performance;

 - Collaborate cross-functionally with other teams to help leverage compute as a core platform offering;

 - Participate in on-call rotations, incident response, and post-incident reviews;

 - Resolve escalated support issues, while also identifying and resolving systemic issues across the platform.


YOU MIGHT BE A GOOD FIT IF YOU:

 - Have strong software engineering skills (Go and Typescript required);

 - Experience building and operating cloud infrastructure or distributed systems at scale;

 - Have 5+ years experience with cloud infrastructure (AWS required, additional experience with GCP and Azure is a plus) - particularly compute, networking, and storage services;

 - Have 3+ years experience working with building custom Kubernetes controllers, and operating large-scale (tens-to-hundreds of thousands of pods) clusters;

 - Are knowledgable about networking and multi-region infrastructure design;

 - Are familiar with Postgres;

 - Have experience with Infrastructure as Code tools (Pulumi highly preferred, Terraform/CDK etc acceptable)

 - Have experience working with QEMU, KVM, and NAS is a plus;

 - Have experience with being part of on-call rotations for large production system;


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
role: "Platform Engineer - Compute"
job_facts_cache: null
score: 3.3
legitimacy_tier: "High Confidence"
archetype: "Platform / DevEx Engineer"
final_decision: "Skip"
hard_stops: []
soft_gaps:
  - "Cœur infra compute"
  - "5+ ans"
top_strengths:
  - "AWS/K8s"
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
  - "tech_stack_mismatch"
via: null
company_confidential: false
advertised_comp: null
reports_to: null
posting_location: "Remote, Global"
requirement_importance:
  - requirement: "5+ ans infra cloud (AWS)"
    jd_signal: null
    evidence: "structural"
    importance: "critical"
    match: "missing"
  - requirement: "Platform engineering"
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
