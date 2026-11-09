# Evaluation: Spotify — Toronto

**Date:** 2026-11-09
**URL:** 
**Via:** —
**Archetype:** Senior Backend Engineer
**Score:** 3.6/5
**Decision:** Consider
**Legitimacy:** High Confidence
**Work Auth:** ➖ Not needed
**PDF:** output/cv-candidate-100-spotify-toronto-2026-11-09.pdf

**Consider.** Senior Software Engineer chez Spotify Toronto : backend authz/permissions/team management, scalable services. Tu es partant Canada ; fit backend solide mais localisation Toronto (visa/reloc) et pas de mention sponsoring.

---

## A) Role Summary

| Champ | Valeur |
|-------|--------|
| Archétype détecté | Senior Backend Engineer |
| Domaine | Streaming — backend autorisation/permissions |
| Fonction | Ingénierie backend/fullstack/plateforme |
| Séniorité | Senior |
| Mode de travail | Toronto, Canada |
| Taille d'équipe | — |
| TL;DR | Senior Software Engineer chez Spotify Toronto : backend authz/permissions/team management, scalable services. Tu es partant Canada ; fit backend solide mais localisation Toronto (visa/reloc) et pas de mention sponsoring. |
| Caps/overrides du profil | Canada/Mexique/Amériques acceptés par le candidat ; seul un refus légal explicite (ex. US-only) exclut. |

**Work-authorization classification: ➖ Not needed.** Remote jouable depuis la France/fuseau Europe.

**Culture screen.** Entreprise tech structurée. **pass**.

## B) CV Match

| Requirement | Importance | Match | JD signal | Evidence / gap |
|---|---|---|---|---|
| Backend services scalables en prod | high (structural) | ✅ Strong | — | cv.md : event-driven, scale, K8s |
| Authorization/permissions/identity | high (structural) | ✅ Strong | — | cv.md : JWT, IAM/Keycloak, permissions |
| Fiabilité/observabilité | high (structural) | ✅ Strong | — | cv.md : Prometheus/Grafana, incidents |
| Basé Toronto (Canada) | high (structural) | ❌ Missing | — | cv.md : Paris ; visa/reloc Canada requis |

**Gaps et mitigation.**
- Toronto (visa/reloc Canada)
- Sponsoring non précisé

## C) Level and Strategy

1. **Niveau :** Senior ; viser l'impact.
2. **Vendre senior :** event-driven, retries/idempotency, fiabilité/observabilité, IA.
3. **Si downlevel :** évaluer selon la comp.

## D) Comp and Demand

- **Advertised (JD) :** not stated
- **Company type :** Public/mature tech (Spotify) — confiance moyenne.
- **Compensation reliability :** Low — pas de chiffre détaillé.

## E) Customization Plan

| # | Section | Statut actuel | Changement proposé | Pourquoi |
|---|---------|---------------|--------------------|----------|
| 1 | Summary | Backend/fullstack | Aligner sur la stack du JD | ATS |
| 2 | Expérience | Event-driven | Mettre en avant retries/idempotency/observabilité | Cœur |
| 3 | Compétences | TS/Node/Python | Refléter les mots-clés | ATS |

## F) Interview Plan

| # | JD Requirement | STAR+R Story | S | T | A | R | Reflection |
|---|-----------------|-----------------|---|---|---|---|------------|
| 1 | Retries/idempotency/rate limits | ILLUIN event-driven | Charge | Fiabiliser | Retry, idempotency, tables d'erreurs | Robustesse | Idempotency d'abord |
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

**Prior-contact FYI :** aucun historique Spotify.

## Verdict (lead)

**Consider.** Senior Software Engineer chez Spotify Toronto : backend authz/permissions/team management, scalable services. Tu es partant Canada ; fit backend solide mais localisation Toronto (visa/reloc) et pas de mention sponsoring.

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
| North Star alignment | partial | Rôle backend ; localisation | — |
| Compensation | unknown | Non détaillée | — |
| Cultural signals | supported | Éléments du JD | — |
| Red flags | supported | Posting sain | — |

**Evidence confidence:** Medium — comp et éligibilité géo à préciser.

## Keywords extracted

(voir JD archivé)

## Job Description (archived verbatim)

See jds/100-2026-11-09_spotify-toronto_spotify_53234c8a56f0a249.pdf for the full archive (archive-posting.mjs --report=100).


## Machine Summary

```yaml
company: "Spotify"
role: "Toronto"
job_facts_cache: null
score: 3.6
legitimacy_tier: "High Confidence"
archetype: "Senior Backend Engineer"
final_decision: "Consider"
hard_stops: []
soft_gaps:
  - "Toronto (visa/reloc Canada)"
  - "Sponsoring non précisé"
top_strengths:
  - "Backend authz/permissions"
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
  - "Confirmer l'éligibilité géo/sponsoring depuis Paris"
  - "Obtenir la fourchette de rémunération"
next_action: "Voir Verdict"
work_auth: "not_needed"
discard_reasons:
  - "geo_restriction"
via: null
company_confidential: false
advertised_comp: null
reports_to: null
posting_location: "Toronto, Canada"
requirement_importance:
  - requirement: "Backend services scalables en prod"
    jd_signal: null
    evidence: "structural"
    importance: "high"
    match: "strong"
  - requirement: "Authorization/permissions/identity"
    jd_signal: null
    evidence: "structural"
    importance: "high"
    match: "strong"
  - requirement: "Fiabilité/observabilité"
    jd_signal: null
    evidence: "structural"
    importance: "high"
    match: "strong"
  - requirement: "Basé Toronto (Canada)"
    jd_signal: null
    evidence: "structural"
    importance: "critical"
    match: "missing"
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
