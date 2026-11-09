# Evaluation: Supabase — Software Engineer - Storage

**Date:** 2026-11-09
**Note:** Score relevé de 3.3 → 3.6 le 2026-11-09 (nouvelle politique : full remote = Paris, priorité 5.0).
**URL:** https://jobs.ashbyhq.com/supabase/9f2ba0b2-6d3b-43ea-990f-5b4bf3930520
**Via:** —
**Archetype:** Senior Backend Engineer
**Score:** 3.6/5
**Decision:** Consider
**Legitimacy:** High Confidence
**Work Auth:** ➖ Not needed
**PDF:** ❌

**Consider.** Storage chez Supabase (Node.js en prod) : backend Node/stockage, 5+ ans. Bon stack Node mais stockage système + 5 ans au-dessus.

---

## A) Role Summary

| Champ | Valeur |
|-------|--------|
| Archétype détecté | Senior Backend Engineer |
| Domaine | Backend-as-a-service — Storage (S3-like) |
| Fonction | Ingénierie backend/fullstack/plateforme |
| Séniorité | Senior |
| Mode de travail | Remote, Global |
| Taille d'équipe | — |
| TL;DR | Storage chez Supabase (Node.js en prod) : backend Node/stockage, 5+ ans. Bon stack Node mais stockage système + 5 ans au-dessus. |
| Caps/overrides du profil | Localisation : remote UE éligible → 4.5 ; à défaut d'années explicites, le plafond de 4 ans ne joue pas. |

**Work-authorization classification: ➖ Not needed.** Poste remote EU/UE, candidat à Paris — éligible sans sponsoring (vérifier l'entité qui recrute si remote global).

**Culture screen.** Entreprise tech structurée, culture produit/IA. **pass**.

## B) CV Match

| Requirement | Importance | Match | JD signal | Evidence / gap |
|---|---|---|---|---|
| 5+ ans backend Node.js en prod | high (structural) | ❌ Missing | — | cv.md : ~4 ans ; Node oui, 5+ non |
| Systèmes de stockage/S3 | high (structural) | ⚠️ Partial | — | cv.md : Amazon S3 opéré, pas construit |
| Remote global | high (structural) | ✅ Strong | — | cv.md : éligible |

**Gaps et mitigation.**
- 5+ ans
- Construction de stockage système (vs opération)

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

**Consider.** Storage chez Supabase (Node.js en prod) : backend Node/stockage, 5+ ans. Bon stack Node mais stockage système + 5 ans au-dessus.

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

**ATS coverage: 62%** (8/13 keywords present)

_Scanned: cv.md (base CV, before per-role tailoring)._

_Keywords: 13 taken from the archived job description, because the report has no keyword section. Only names in the skill vocabulary are found, so add the 15-20 keyword section to the report._

**Present (8):** AWS, Docker, Grafana, Kubernetes, Node.js, PostgreSQL, Prometheus, React

**Thin — mentioned once, consider reinforcing (1):** Docker

**Missing (5):** Azure, GCP, Next.js, OpenTelemetry, Supabase

> Diagnostic only. Add a missing keyword **only** if it reflects real experience — reformulated from your background, never fabricated.

## Job Description (archived verbatim)

Posted: not visible in source (ATS API)

ABOUT SUPABASE

Supabase is the Postgres development platform, built by developers for developers. We provide a complete backend solution including Database, Auth, Storage, Edge Functions, Realtime, and Vector Search. All services are deeply integrated and designed for growth.



ABOUT THE ROLE

Supabase Storage https://supabase.com/docs/guides/storage is a scalable and high performance object storage service and is one of our fastest growing services. The current landscape of tools for uploading, storing, processing and delivering assets is complicated. Developers are forced to think about regions, caching, codecs and security before they can start uploading anything.

We are looking for engineers to solve this problem once and for all!

You will be working across the entire stack - client libraries, CLI, CDN, the storage server and the deployment infrastructure. One day, you might focus on improving upload resilience in iOS applications; the next, you could be optimizing the S3 protocol for efficient retries or finding ways to accelerate upload processing.

You will be contributing to both our open source server https://github.com/supabase/storage and upstream dependencies we use, like the TUS server https://github.com/tus/tus-node-server/pulls?q=sort%3Aupdated-desc+is%3Apr+author%3Afenos+is%3Amerged.

This role is ideal for someone who thrives in async, fast-paced environments and is excited about building developer tools that scale to millions.



WHAT YOU’LL BE RESPONSIBLE FOR

 - Improving our analytics bucket offering and improving the storage of open file formats like iceberg and ducklake

 - Asset optimization to speed up delivery for websites and mobile applications

 - Building out our edge network to speed up uploads and build features like automatic cache invalidation

 - Improve the performance, observability, and reliability of our storage server

 - Work with the frontend team to build a fast, powerful storage explorer

 - Improve our APIs, client libraries and CLI to provide an exceptional end-to-end DX for our users

 - Resolve escalated support issues, while also identifying and resolving systemic issues across the platform
 


YOU MIGHT BE A GOOD FIT IF YOU

 - Have 5+ years backend engineering experience of running Node.js in production

 - Have experience with highly scalable, distributed systems

 - Are comfortable with working across the stack - backend application development, some infrastructure work including deploying, monitoring and scaling the service

 - Posses familiarity with observability tools (OpenTelemetry, Prometheus, Grafana) and performance tuning

 - Have experience with production-grade PostgreSQL usage, including tuning and troubleshooting

 - Demonstrate an ownership mentality: driving projects end-to-end

 - Display empathy towards developer experience
 


NICE-TO-HAVE

 - Prior experience working on developer tools

 - Solid knowledge of cloud infrastructure (AWS, GCP or Azure) and containerization (Docker, Kubernetes)

 - Direct experience designing and operating large file upload/download pipelines at scale

 - Deep, practical CDN integration and optimization knowledge

 - Experience with image and video processing tools (sharp, dssim, ffmpeg), formats and codecs (AVIF, WebM, Brotli) is a plus

 - Experience with the frontend ecosystem (Next.js, React, etc) is a plus


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
role: "Software Engineer - Storage"
job_facts_cache: null
score: 3.6
legitimacy_tier: "High Confidence"
archetype: "Senior Backend Engineer"
final_decision: "Consider"
hard_stops: []
soft_gaps:
  - "5+ ans"
  - "Construction de stockage système (vs opération)"
top_strengths:
  - "Node.js backend"
  - "S3"
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
  - requirement: "5+ ans backend Node.js en prod"
    jd_signal: null
    evidence: "structural"
    importance: "critical"
    match: "missing"
  - requirement: "Systèmes de stockage/S3"
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
