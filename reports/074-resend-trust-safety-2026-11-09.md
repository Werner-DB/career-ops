# Evaluation: Resend — Software Engineer, Trust & Safety

**Date:** 2026-11-09
**Note:** Score relevé de 3.6 → 3.9 le 2026-11-09 (nouvelle politique : full remote = Paris, priorité 5.0).
**URL:** https://jobs.ashbyhq.com/resend/73a37f4c-02d9-40e4-a116-70507ed413b9
**Via:** —
**Archetype:** Senior Backend Engineer
**Score:** 3.9/5
**Decision:** Consider
**Legitimacy:** High Confidence
**Work Auth:** ➖ Not needed
**PDF:** output/cv-candidate-074-resend-trust-safety-2026-11-09.pdf

**Consider.** Trust & Safety chez Resend (Europe) : backend sécurité/abus, 5+ ans demandés. Bon fit backend/sécurité (JWT, IAM) mais le seuil de 5 ans reste au-dessus de ton expérience.

---

## A) Role Summary

| Champ | Valeur |
|-------|--------|
| Archétype détecté | Senior Backend Engineer |
| Domaine | Infrastructure email — trust & safety / anti-abus |
| Fonction | Ingénierie backend/fullstack/plateforme |
| Séniorité | Senior |
| Mode de travail | Europe (remote / Dublin) |
| Taille d'équipe | — |
| TL;DR | Trust & Safety chez Resend (Europe) : backend sécurité/abus, 5+ ans demandés. Bon fit backend/sécurité (JWT, IAM) mais le seuil de 5 ans reste au-dessus de ton expérience. |
| Caps/overrides du profil | Localisation : remote UE éligible → 4.5 ; à défaut d'années explicites, le plafond de 4 ans ne joue pas. |

**Work-authorization classification: ➖ Not needed.** Poste remote EU/UE, candidat à Paris — éligible sans sponsoring (vérifier l'entité qui recrute si remote global).

**Culture screen.** Entreprise tech structurée, culture produit/IA. **pass**.

## B) CV Match

| Requirement | Importance | Match | JD signal | Evidence / gap |
|---|---|---|---|---|
| 5+ ans software engineering | high (structural) | ❌ Missing | — | cv.md : ~4 ans |
| Backend sécurité/abus | high (structural) | ✅ Strong | — | cv.md : JWT, IAM/Keycloak, sécurité |
| Fiabilité/observabilité | high (structural) | ✅ Strong | — | cv.md : Prometheus/Grafana, incidents |
| Europe remote | high (structural) | ✅ Strong | — | cv.md : Paris éligible |

**Gaps et mitigation.**
- 5+ ans exigés
- Domaine anti-abus à confirmer

## C) Level and Strategy

1. **Niveau :** Senior/mid selon le poste ; viser l'impact, pas le compteur d'années.
2. **Vendre senior :** event-driven à haute volumétrie (queues, retries, idempotency), fiabilité/observabilité, IA en prod.
3. **Si downlevel :** accepter un niveau mid/II si comp correcte.

## D) Comp and Demand

- **Advertised (JD) :** not stated (sauf n8n ~183–201k EUR)
- **Company type :** Growth-stage dev-tools — confiance moyenne.
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

**Prior-contact FYI :** aucun historique Resend.

## Verdict (lead)

**Consider.** Trust & Safety chez Resend (Europe) : backend sécurité/abus, 5+ ans demandés. Bon fit backend/sécurité (JWT, IAM) mais le seuil de 5 ans reste au-dessus de ton expérience.

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

**Evidence confidence:** Medium — comp non détaillée, quelques gaps de stack.

## Keywords extracted

(voir JD archivé)

## Keyword Coverage

**ATS coverage: 60%** (6/10 keywords present)

_Scanned: cv.md (base CV, before per-role tailoring)._

_Keywords: 10 taken from the archived job description, because the report has no keyword section. Only names in the skill vocabulary are found, so add the 15-20 keyword section to the report._

**Present (6):** AWS, LLMs, Node.js, PostgreSQL, React, TypeScript

**Missing (4):** Datadog, Go, Next.js, Redis

> Diagnostic only. Add a missing keyword **only** if it reflects real experience — reformulated from your background, never fabricated.

## Job Description (archived verbatim)

Posted: not visible in source (ATS API)

Resend is growing fast, and there are now over 4 million developers using it. We’re building tools that make email better for developers. We care about dependable infrastructure, thoughtful design, and the experience of everyone building with our products.

In this role you'll build the anti-abuse systems that keep Resend open for good senders and closed to bad actors: real-time enforcement on every email, detection pipelines that scale with the platform, and automations that go from detection to action without waiting on a human.

This role is fully remote based in Americas or European timezones, with some expected travel for team offsites, conferences, meetups, and more.

Read more about how we work, how we hire, and what we value here https://resend.com/handbook.




IN THIS ROLE, YOU WILL…

 - Build and run the real-time enforcement layer within a latency budget of milliseconds

 - Design pipelines that move from signal to decision to action, across sending, receiving and account activity

 - Build the detection rules and policies that decide when we act, and make them safe to change

 - Detect and contain account takeover and leaked API keys: notice when a trusted account stops acting like itself, and stop the damage without locking out the real owner

 - Close the feedback loop: every block and every reversal carries a reason, so we can measure each detection's precision and retire the ones that hurt good senders

 - Automate manual work such as investigations, appeals and bulk actions, so the team keeps up as volume grows

 - Build and evaluate ML classifiers for spam and phishing, and prove their precision before they enforce anything

 - Implement safeguards and make every action traceable through logs, metrics and audit trails

 - Ensure all enforcement actions are traceable with logs, metrics, and audit trails




YOU’LL BE A GREAT FIT IF YOU…

 - Bring 5+ years of software engineering experience

 - Are fluent in writing and speaking English

 - Have deep experience with Node.js, TypeScript, React (Hono, Next.js)

 - Write Go, or want to, for latency-sensitive services

 - Have infrastructure and reliability skills (AWS, CDK, Datadog)

 - Are comfortable with APIs, event-driven architectures, queues and stateful services

 - Design systems that fail safe, and treat a false positive as a bug

 - Care deeply about observability: metrics, logs, tracing, error handling

 - Take ownership across the stack, from frontend surfaces down to databases and queues

 - Have proven experience with databases (Postgres, Redis)




YOU WILL BE AN EXCEPTIONAL FIT IF YOU ALSO...

 - Have worked in trust and safety, fraud or security

 - Have built real-time enforcement such as rate limiting, or a rules engine on a policy language like CEL

 - Have shipped ML or LLM-based detection in production, and know how to measure its precision and recall

 - Know email: SPF, DKIM, DMARC, bounces, complaints, and how phishing campaigns work

 - Have knowledge of database performance tuning (Postgres, Redis)




WHAT IT MEANS TO JOIN THE TEAM:

 - Room to shape technical decisions and take projects from discovery through production

 - Work remotely with teammates around the world

 - Close collaboration with the developers who use what you build

 - Teammates who value thoughtful feedback, shared learning, and care for each other

 - A high bar for product quality, reliability, and the details that make software enjoyable to use

 - Comp: $150,000 - $175,000 USD, commensurate with location and experience




LEARN MORE ABOUT HOW WE WORK:

 - Our philosophy for anti-abuse https://resend.com/handbook/support/what-is-our-philosophy-for-anti-abuse

 - $3M to make email safer https://resend.com/blog/3-million-to-make-email-safer

 - Revoking leaked API keys with GitHub secret scanning https://resend.com/changelog/github-secret-scanner




ABOUT RESEND

We are building the modern email sending platform for developers. We care deeply about quality, craft, and the developer experience.

Our fully remote team of 50 spans 15 countries and counting. We're backed by a16z, Y Combinator, and others. Meet the humans → https://resend.com/humans

## Machine Summary

```yaml
company: "Resend"
role: "Software Engineer, Trust & Safety"
job_facts_cache: null
score: 3.9
legitimacy_tier: "High Confidence"
archetype: "Senior Backend Engineer"
final_decision: "Consider"
hard_stops: []
soft_gaps:
  - "5+ ans exigés"
  - "Domaine anti-abus à confirmer"
top_strengths:
  - "Backend + sécurité"
  - "Fiabilité"
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
  - "seniority_mismatch"
via: null
company_confidential: false
advertised_comp: null
reports_to: null
posting_location: "Europe (remote / Dublin)"
requirement_importance:
  - requirement: "5+ ans software engineering"
    jd_signal: null
    evidence: "structural"
    importance: "critical"
    match: "missing"
  - requirement: "Backend sécurité/abus"
    jd_signal: null
    evidence: "structural"
    importance: "high"
    match: "strong"
  - requirement: "Fiabilité/observabilité"
    jd_signal: null
    evidence: "structural"
    importance: "high"
    match: "strong"
  - requirement: "Europe remote"
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
