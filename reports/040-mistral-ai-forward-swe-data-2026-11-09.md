# Evaluation: Mistral AI — Forward Software Engineer, Data

**Date:** 2026-11-09
**URL:** https://jobs.ashbyhq.com/mistral.ai/242aabbf-a2de-4824-8610-561258083268
**Via:** —
**Archetype:** Backend Engineer — AI/LLM & Data
**Score:** 3.5/5
**Decision:** Consider
**Legitimacy:** High Confidence
**Work Auth:** ➖ Not needed
**PDF:** output/cv-candidate-040-mistral-ai-forward-swe-data-2026-11-09.pdf

**Considérer (limite).** Même équipe Applied AI et même stack que le Forward SWE « général », mais ce rôle est un rôle de data engineering distribué : Spark/Ray/Beam, Airflow/Dagster, lakehouse/data mesh et ontologies sont des exigences structurantes que le CV ne couvre pas (backfills et SQL brut oui, frameworks de traitement distribué non). À postuler seulement si le candidat veut investir dans la data engineering.

---

## A) Role Summary

| Champ | Valeur |
|-------|--------|
| Archétype détecté | Backend Engineer — AI/LLM & Data |
| Domaine | IA appliquée — data engineering pour systèmes agentiques/GenAI |
| Fonction | Ingénierie end-to-end + architecture data (ingestion, pipelines distribués, ontologies, gouvernance) |
| Séniorité | Senior (5+ ans data-intensive) |
| Mode de travail | Paris |
| Taille d'équipe | Applied AI |
| TL;DR | Forward SWE Data chez Mistral pour construire la data architecture (pipelines distribués, retrieval, éval) sous des systèmes agentiques de production, à Paris. |
| Caps/overrides du profil | Paris → 5.0. Comp non annoncée. |

**Work-authorization classification: ➖ Not needed.** Paris, candidat à Paris.

**Culture screen.** Bas ego, hauts standards, autonomie. **pass**.

## B) CV Match

| Requirement | Importance | Match | JD signal | Evidence / gap |
|---|---|---|---|---|
| Full stack Node/Python + TypeScript/React | high (stated) | ✅ Strong | "proficient NodeJS e.g. NextJS/Express/Fastify or similar or Python e.g. FastAPI ... confident with TypeScript + React/NextJS" | `cv.md` : TS/Node, NestJS, React, FastAPI. |
| 5+ ans pipelines data distribué (Spark/Ray/Beam/Dask) + orchestration (Airflow/Dagster/Prefect) | critical (stated) | ❌ Missing | "5+ years of experience building and running production data-intensive pipelines with distributed processing (for example Spark, Ray, Beam, or Dask) and orchestration tools (for example Airflow, Dagster, or Prefect)" | `cv.md` : backfills/migrations, SQL brut ; pas de Spark/Ray/Airflow. |
| Architecture data : ingestion, processing, storage, ontologies | high (structural) | ⚠️ Partial | "Design the data architecture underneath them: ingestion, processing, storage, and the data models and ontologies" | `cv.md` : migrations massives, imports CSV, modèles de données ; pas d'ontologies/lakehouse. |
| RAG / agentic / éval LLM | high (structural) | ⚠️ Partial | "experience with retrieval-augmented generation, agentic use cases, or LLM evaluation" | `cv.md` : APIs génératives, MCP ; RAG/éval non détaillés. |
| Pipelines distribués à grand volume (docs, code, logs, multimodal) | high (structural) | ⚠️ Partial | "Build distributed pipelines that process large volumes of documents, code, logs, and multimodal content" | `cv.md` : backfills, imports CSV ; pas de pipelines multimodaux distribués. |
| Gouvernance data (ownership, accès, lineage, rétention, privacy) | meaningful (structural) | ⚠️ Partial | "Build data governance into the systems themselves: ownership, access control, lineage, retention, and privacy" | `cv.md` : chiffrement/déchiffrement d'identifiants, sécurité ; gouvernance non citée. |
| Boucle d'évaluation (datasets versionnés, drift) | meaningful (structural) | ⚠️ Partial | "Build the evaluation loop: labeling with LLMs and humans, versioned eval datasets" | `cv.md` : observabilité Prometheus/Grafana ; éval de données non citée. |

**Gaps et mitigation.**
- **Spark/Ray/Beam + Airflow/Dagster (critical, manquant).** Bloquant réaliste pour ce rôle data-specialized. Mitigation : ne postuler que si le candidat vise la data engineering ; préparer un projet Spark/Airflow.
- **Ontologies/lakehouse (partial).** Mitigation : mettre en avant les modèles de données et migrations.

## C) Level and Strategy

1. **Niveau :** Senior data engineering. Candidat backend généraliste.
2. **Vendre senior :** l'angle data engineering est trop spécifique ; le profil généraliste s'aligne mieux sur le Forward SWE « général » (039).
3. **Si downlevel :** peu pertinent sans expérience data distribuée.

## D) Comp and Demand

- **Advertised (JD) :** not stated
- **Company type :** Public big tech / mature AI lab — confiance moyenne-haute.
- **Compensation reliability :** Low — pas de chiffre.
- Comp inconnue → comp 3.

## E) Customization Plan

| # | Section | Statut actuel | Changement proposé | Pourquoi |
|---|---------|---------------|--------------------|----------|
| 1 | Summary | Backend/fullstack | (si application) mettre en avant data/migrations | Angle data |
| 2 | Expérience | Backfills/migrations | Ajouter puce pipelines/schémas | Data |
| 3 | Projet | GitHub | Projet Spark/Airflow en support | Comble le gap |
| 4 | Compétences | PostgreSQL/SQL | (si application) pipelines/retrieval | Data |

(Non prioritaire : préférer 039.)

## F) Interview Plan

| # | JD Requirement | STAR+R Story | S | T | A | R | Reflection |
|---|-----------------|-----------------|---|---|---|---|------------|
| 1 | Migrations/backfills | Backfills ILLUIN | Données volumineuses | Migrer | Dry-run, SQL | Migrations sûres | La donnée est fragile |
| 2 | Modèles de données | Schémas event-driven | Modèle | Faire évoluer | Idempotency, tables d'erreurs | Modèle robuste | Le modèle est le produit |
| 3 | Full-stack | NestJS/tRPC/React | Produit HR | Livrer | TS/React | Feature livrée | Le bout-en-bout réduit les handoffs |

Case study : migrations et backfills à grande échelle. Question piège : Spark/Airflow → honnêteté + plan.

## G) Posting Legitimacy

**Assessment : High Confidence.** JD détaillé, entreprise majeure.

| Signal | Constat | Poids |
|--------|---------|-------|
| Fraîcheur | Actif (posté 2026-11-06) | Positive |
| Qualité description | Très précise | Positive |
| Signaux d'embauche | Mistral, croissance | Positive |

**Employment classification :** CDI implicite — ✅ clear.
**Role-clarity :** scope data précis. Pas de blocage.

**Prior-contact FYI :** aucun historique Mistral.

## Verdict (lead)

**Considérer.** Même équipe/stack que le Forward SWE, mais cœur data engineering distribué (Spark/Airflow) hors CV : préférer le Forward SWE général (rapport 039).

## Risk Summary

| Signal | Status |
|--------|--------|
| Posting legitimacy | ✅ High Confidence |
| Employment classification | ✅ clear |
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
| CV match | partial | Stack OK ; data distribué manquant | Niveau data engineering |
| North Star alignment | partial | IA/Data mais spécialisation data | — |
| Compensation | unknown | Non annoncée | — |
| Cultural signals | supported | Bas ego, autonomie | — |
| Red flags | supported | Posting sain | — |

**Evidence confidence:** Medium — gap data engineering structurant.
Priorités : évaluer l'appétence data engineering ; sinon préférer 039.

## Keywords extracted

data architecture, distributed pipelines, Spark, Ray, Beam, Dask, Airflow, Dagster, Prefect, lakehouse, data mesh, ontologies, RAG, evaluation, data governance, TypeScript, React, FastAPI

## Keyword Coverage

**ATS coverage: 17%** (3/18 keywords present)

_Scanned: cv.md (base CV, before per-role tailoring)._

**Present (3):** TypeScript, React, FastAPI

**Missing (15):** data architecture, distributed pipelines, Spark, Ray, Beam, Dask, Airflow, Dagster, Prefect, lakehouse, data mesh, ontologies, RAG, evaluation, data governance

> Diagnostic only. Add a missing keyword **only** if it reflects real experience — reformulated from your background, never fabricated.

## Job Description (archived verbatim)

Posted: 2026-11-06 (Ashby publishedAt)

ABOUT MISTRAL
Mistral provides full-stack AI solutions: from frontier models to developer tools, applications, and compute.
ABOUT THE JOB
As a Forward Software Engineer, Data, you will build the systems behind some of the hardest problems Mistral takes on. You join our team of engineers in Applied AI. We're looking for a strong software engineer who builds end to end and has shipped ML or GenAI systems to production. Data engineering is your edge.
WHAT YOU WILL DO
- Build AI systems end to end, from first prototype to production.
- Design the data architecture: ingestion, processing, storage, and the data models and ontologies.
- Build distributed pipelines that process large volumes of documents, code, logs, and multimodal content.
- Turn what works for one customer into patterns and platforms for many.
- Make systems hold up under real load.
- Build data governance into the systems: ownership, access control, lineage, retention, privacy.
- Build the evaluation loop: labeling with LLMs and humans, versioned eval datasets.
- Set the standard for how the team designs and ships data systems.
WHAT WE'RE LOOKING FOR
- Full ability to ship across the stack: NodeJS or Python (FastAPI); TypeScript + React/NextJS.
- 5+ years building and running production data-intensive pipelines with distributed processing (Spark, Ray, Beam, or Dask) and orchestration (Airflow, Dagster, or Prefect).
- Experience with retrieval-augmented generation, agentic use cases, or LLM evaluation.
- Autonomy and ownership. Clear communication; fluent English.
LOCATION: Paris.

## Machine Summary

```yaml
company: "Mistral AI"
role: "Forward Software Engineer, Data"
job_facts_cache: null
score: 3.5
legitimacy_tier: "High Confidence"
archetype: "Backend Engineer — AI/LLM & Data"
final_decision: "Consider"
hard_stops: []
soft_gaps:
  - "Spark/Ray/Beam + Airflow/Dagster non maîtrisés (data engineering distribué)"
  - "Ontologies/lakehouse/data mesh absents du CV"
  - "Pas d'expérience RAG/éval LLM explicite"
top_strengths:
  - "Backfills/migrations massives et SQL à grande échelle"
  - "Full-stack TS/React/Python"
  - "MCP/IA appliquée"
risk_level: "Medium"
confidence: "Medium"
score_evidence:
  cv_match: "partial"
  north_star: "partial"
  compensation: "unknown"
  culture: "supported"
  red_flags: "supported"
confidence_gaps:
  - "Évaluer l'appétence pour la data engineering distribuée"
  - "Obtenir la fourchette"
next_action: "Préférer le Forward SWE général (rapport 039) ; ne postuler ici que si l'angle data engineering est souhaité"
work_auth: "not_needed"
discard_reasons:
  - "tech_stack_mismatch"
via: null
company_confidential: false
advertised_comp: null
reports_to: null
posting_location: "Paris"
requirement_importance:
  - requirement: "Full stack Node/Python + TypeScript/React"
    jd_signal: "proficient NodeJS e.g. NextJS/Express/Fastify or similar or Python e.g. FastAPI ... confident with TypeScript + React/NextJS"
    evidence: "stated"
    importance: "high"
    match: "strong"
  - requirement: "5+ ans pipelines data distribué + orchestration"
    jd_signal: "5+ years of experience building and running production data-intensive pipelines with distributed processing (for example Spark, Ray, Beam, or Dask) and orchestration tools (for example Airflow, Dagster, or Prefect)"
    evidence: "stated"
    importance: "critical"
    match: "missing"
  - requirement: "Architecture data et ontologies"
    jd_signal: "Design the data architecture underneath them: ingestion, processing, storage, and the data models and ontologies"
    evidence: "structural"
    importance: "high"
    match: "partial"
  - requirement: "RAG/agentic/éval LLM"
    jd_signal: "experience with retrieval-augmented generation, agentic use cases, or LLM evaluation"
    evidence: "structural"
    importance: "high"
    match: "partial"
  - requirement: "Pipelines distribués à grand volume"
    jd_signal: "Build distributed pipelines that process large volumes of documents, code, logs, and multimodal content"
    evidence: "structural"
    importance: "high"
    match: "partial"
  - requirement: "Gouvernance data"
    jd_signal: "Build data governance into the systems themselves: ownership, access control, lineage, retention, and privacy"
    evidence: "structural"
    importance: "meaningful"
    match: "partial"
risk_summary:
  legitimacy: "high_confidence"
  classification: "clear"
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
