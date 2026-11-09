# Evaluation: Supabase — Software Engineer - Turso

**Date:** 2026-11-09
**Note:** Score relevé de 3.2 → 3.5 le 2026-11-09 (nouvelle politique : full remote = Paris, priorité 5.0).
**URL:** https://jobs.ashbyhq.com/supabase/7c5eb3fc-1087-4c1c-b3a2-a19fe01dd259
**Via:** —
**Archetype:** Senior Backend Engineer
**Score:** 3.5/5
**Decision:** Consider
**Legitimacy:** High Confidence
**Work Auth:** ➖ Not needed
**PDF:** ❌

**Consider.** Turso chez Supabase : backend bases de données/stockage (SQLite/libSQL), pas de quota d'années explicite. Stack bases de données intéressante mais systèmes DB bas niveau.

---

## A) Role Summary

| Champ | Valeur |
|-------|--------|
| Archétype détecté | Senior Backend Engineer |
| Domaine | Backend-as-a-service — Turso (SQLite/libSQL) |
| Fonction | Ingénierie backend/fullstack/plateforme |
| Séniorité | Senior |
| Mode de travail | Remote, Global |
| Taille d'équipe | — |
| TL;DR | Turso chez Supabase : backend bases de données/stockage (SQLite/libSQL), pas de quota d'années explicite. Stack bases de données intéressante mais systèmes DB bas niveau. |
| Caps/overrides du profil | Localisation : remote UE éligible → 4.5 ; à défaut d'années explicites, le plafond de 4 ans ne joue pas. |

**Work-authorization classification: ➖ Not needed.** Poste remote EU/UE, candidat à Paris — éligible sans sponsoring (vérifier l'entité qui recrute si remote global).

**Culture screen.** Entreprise tech structurée, culture produit/IA. **pass**.

## B) CV Match

| Requirement | Importance | Match | JD signal | Evidence / gap |
|---|---|---|---|---|
| Backend systems / bases de données | high (structural) | ⚠️ Partial | — | cv.md : PostgreSQL, SQL ; pas de construction de moteur DB |
| TypeScript/Node ou Rust | high (structural) | ⚠️ Partial | — | cv.md : TS/Node ; Rust non |
| Remote global | high (structural) | ✅ Strong | — | cv.md : éligible |

**Gaps et mitigation.**
- Moteur DB bas niveau (vs usage)
- Aucun quota d'années → favorable

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

**Consider.** Turso chez Supabase : backend bases de données/stockage (SQLite/libSQL), pas de quota d'années explicite. Stack bases de données intéressante mais systèmes DB bas niveau.

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

**ATS coverage: 67%** (4/6 keywords present)

_Scanned: cv.md (base CV, before per-role tailoring)._

_Keywords: 6 taken from the archived job description, because the report has no keyword section. Only names in the skill vocabulary are found, so add the 15-20 keyword section to the report._

**Present (4):** AWS, Kubernetes, LLMs, PostgreSQL

**Missing (2):** Rust, Supabase

> Diagnostic only. Add a missing keyword **only** if it reflects real experience — reformulated from your background, never fabricated.

## Job Description (archived verbatim)

Posted: not visible in source (ATS API)

ABOUT SUPABASE

Supabase is the Postgres development platform, built by developers for developers. We provide a complete backend solution including Database, Auth, Storage, Edge Functions, Realtime, and Vector Search. All services are deeply integrated and designed for growth.




ABOUT THE ROLE

We’re looking for a Software Engineer to join our Turso core database team and help bring forward the future of agentic databases. Turso is both an Open Source database that replaces SQLite—with an ongoing project to also support the Postgres interface—and a Cloud offering where users can create databases on demand. You’ll work closely with customers and other teams at Supabase to build the future of what databases look like in a world where users and agents are creating millions of databases a day.

This role is ideal for someone who thrives in async, fast-paced environments and is excited about building database technology tools that scale to billions.




WHAT YOU’LL BE RESPONSIBLE FOR

 - Driving the progress of the Turso Open Source database, in particular the Postgres compatibility layer.

 - Making sure code works, and never breaks, and putting the systems and guarantees in place for that to happen.

 - Maintaining the Turso Cloud operations, including the Cloud API and data plane operations.

 - Improving the scalability of the Turso Cloud operations to support a 100x larger number of databases


YOU MIGHT BE A GOOD FIT IF YOU

 - Have written databases before, and/or other high-stakes low-level systems like Hypervisors, OS Kernels, storage devices, etc.

 - Have experience working with remote teams and Open Source communities.

 - Have a passion and experience for correct systems that work, and have the experience in the tools to make that happen: Deterministic Simulation Testing, formal verification methods, fuzz and differential testing, etc.

 - Have experience deploying, operating and debugging large scale software systems in production in cloud environments such as AWS & Kubernetes

 - Have experience improving the observability, reliability and performance of complex cloud systems.

 - Are comfortable working in Rust.

 - Are comfortable with LLM-assisted development and evals.

 - Are comfortable working with Embedded databases.

 - Communicate clearly across both technical and non-technical audiences.

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
role: "Software Engineer - Turso"
job_facts_cache: null
score: 3.5
legitimacy_tier: "High Confidence"
archetype: "Senior Backend Engineer"
final_decision: "Consider"
hard_stops: []
soft_gaps:
  - "Moteur DB bas niveau (vs usage)"
  - "Aucun quota d'années → favorable"
top_strengths:
  - "Bases de données/SQL"
  - "TS/Node"
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
  - requirement: "Backend systems / bases de données"
    jd_signal: null
    evidence: "structural"
    importance: "high"
    match: "partial"
  - requirement: "TypeScript/Node ou Rust"
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
