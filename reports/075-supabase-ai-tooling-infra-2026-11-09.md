# Evaluation: Supabase — Software Engineer - AI Tooling Infrastructure

**Date:** 2026-11-09
**Note:** Score relevé de 3.5 → 3.8 le 2026-11-09 (nouvelle politique : full remote = Paris, priorité 5.0).
**URL:** https://jobs.ashbyhq.com/supabase/fb0b563a-e541-43fd-8555-9eb6473aaa11
**Via:** —
**Archetype:** Backend Engineer — AI/LLM & Data
**Score:** 3.8/5
**Decision:** Consider
**Legitimacy:** High Confidence
**Work Auth:** ➖ Not needed
**PDF:** output/cv-candidate-075-supabase-ai-tooling-infra-2026-11-09.pdf

**Consider.** Infra d'outillage IA chez Supabase (remote global) : backend + IA/LLM, mais 5+ ans et on-call. Bon alignement IA/backend, seuil d'années au-dessus.

---

## A) Role Summary

| Champ | Valeur |
|-------|--------|
| Archétype détecté | Backend Engineer — AI/LLM & Data |
| Domaine | Backend-as-a-service — outillage IA |
| Fonction | Ingénierie backend/fullstack/plateforme |
| Séniorité | Senior |
| Mode de travail | Remote, Global |
| Taille d'équipe | — |
| TL;DR | Infra d'outillage IA chez Supabase (remote global) : backend + IA/LLM, mais 5+ ans et on-call. Bon alignement IA/backend, seuil d'années au-dessus. |
| Caps/overrides du profil | Localisation : remote UE éligible → 4.5 ; à défaut d'années explicites, le plafond de 4 ans ne joue pas. |

**Work-authorization classification: ➖ Not needed.** Poste remote EU/UE, candidat à Paris — éligible sans sponsoring (vérifier l'entité qui recrute si remote global).

**Culture screen.** Entreprise tech structurée, culture produit/IA. **pass**.

## B) CV Match

| Requirement | Importance | Match | JD signal | Evidence / gap |
|---|---|---|---|---|
| 5+ ans backend en prod + on-call | high (structural) | ❌ Missing | — | cv.md : ~4 ans |
| IA/LLM tooling, agents | high (structural) | ✅ Strong | — | cv.md : MCP, APIs génératives |
| TypeScript/Node, backend services | high (structural) | ✅ Strong | — | cv.md : TS/Node, APIs |
| Remote global | high (structural) | ✅ Strong | — | cv.md : Paris éligible |

**Gaps et mitigation.**
- 5+ ans + on-call
- Remote global : vérifier fuseau/pays

## C) Level and Strategy

1. **Niveau :** Senior/mid selon le poste ; viser l'impact, pas le compteur d'années.
2. **Vendre senior :** event-driven à haute volumétrie (queues, retries, idempotency), fiabilité/observabilité, IA en prod.
3. **Si downlevel :** accepter un niveau mid/II si comp correcte.

## D) Comp and Demand

- **Advertised (JD) :** not stated (sauf n8n ~183–201k EUR)
- **Company type :** Growth-stage BaaS (Supabase) — confiance moyenne.
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

**Consider.** Infra d'outillage IA chez Supabase (remote global) : backend + IA/LLM, mais 5+ ans et on-call. Bon alignement IA/backend, seuil d'années au-dessus.

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

**ATS coverage: 70%** (7/10 keywords present)

_Scanned: cv.md (base CV, before per-role tailoring)._

_Keywords: 10 taken from the archived job description, because the report has no keyword section. Only names in the skill vocabulary are found, so add the 15-20 keyword section to the report._

**Present (7):** CI/CD, Docker, Grafana, LLMs, Node.js, PostgreSQL, TypeScript

**Thin — mentioned once, consider reinforcing (1):** Docker

**Missing (3):** Go, OpenTelemetry, Supabase

> Diagnostic only. Add a missing keyword **only** if it reflects real experience — reformulated from your background, never fabricated.

## Job Description (archived verbatim)

Posted: not visible in source (ATS API)

ABOUT SUPABASE

Supabase is the Postgres development platform, built by developers for developers. We provide a complete backend solution including Database, Auth, Storage, Edge Functions, Realtime, and Vector Search. All services are deeply integrated and designed for growth.


About the Role

We’re looking for a Software Engineer, AI Tooling Infrastructure to join our AI Tooling team and help build and run the backend services behind Supabase’s AI products. The Supabase MCP server is one example of what the team runs in production, alongside the services that support agent skills and the dashboard assistant. You’ll work closely with the Platform, SRE, Auth, Billing and Edge Functions teams, and with the engineers on the AI Tooling team who build the product surfaces.

The AI Tooling team runs its own services in production and carries its own on-call. Traffic from AI clients and agents behaves differently from traffic from people: hundreds of calls a minute, retry loops, and no reading of deprecation warnings. This role makes sure the services they use are reliable, correctly authorized and observable. It is a systems and infrastructure role rather than a product AI role, and it is not an SRE role. You will build and operate these systems, not only advise on them.

This role is ideal for someone who thrives in async, fast-paced environments, owns what they ship in production, and is excited about building developer tools that scale to millions.




WHAT YOU’LL BE RESPONSIBLE FOR

In this role, you’ll:

 - Build and operate the production backend services behind Supabase’s AI products, including the MCP server: deployment, scaling, configuration and release.

 - Take ownership of how those services are structured, including splitting or reshaping a service when that makes it safer to run and easier to change.

 - Define, measure and meet reliability targets for the services the team runs. Set SLOs with the SRE team, track error budgets, and use them to decide what to fix first.

 - Participate in the AI Tooling team on-call rotation, and be a first responder for incidents in those services. Investigate, fix, coordinate with other teams during incidents, and write the follow-ups and runbooks.

 - Work the AI Tooling team support queue alongside on-call, and turn recurring issues into fixes rather than repeated manual answers.

 - Own authentication and authorization for AI and agent clients: OAuth apps, scoped tokens, and permissions that make sense for agents as well as humans, including how we change or deprecate a permission without breaking existing integrations.

 - Own observability for the services the team runs: metrics, traces, logs, dashboards and alerts, so we find problems before customers do.

 - Handle capacity and abuse for agent traffic: rate limits, cost and safety controls, and behavior under load or when a dependency degrades.

 - Improve the architecture of the services the team owns as they grow, including splitting or reshaping a service when that makes it safer to run and easier to change.

 - Work with the Platform team on shared code, review ownership and release process, and with the SRE team on infrastructure, alerting and incident practice.

 - Contribute to the code of the AI Tooling team’s tools, such as the MCP server, where it affects reliability and security, in partnership with the engineers who own the product surface.



YOU MIGHT BE A GOOD FIT IF YOU

Must have:

 - Have 5+ years of experience building and running backend services in production, and have carried on-call for them.

 - Write strong TypeScript or Go, and are comfortable working in the other.

 - Have designed and operated APIs with real consumers: versioning, error handling, rate limiting, and backwards-compatible change.

 - Know OAuth, OIDC, JWT and API authorization well enough to debug them in production and to explain where implementations commonly deviate from the spec.

 - Have a good understanding of PostgreSQL and relational databases.

 - Are comfortable with CI/CD, Docker and containerized deployments, and with infrastructure as code. Any tool is fine.

 - Can debug across services: follow a slow or failing request through several systems using metrics, traces and logs.

 - Communicate clearly in writing, work with a wide range of stakeholders, and thrive in async, globally distributed teams.

 - Are comfortable navigating ambiguity and moving quickly.

Pick your centre of gravity. We expect you to be deep in at least one of these, and to tell us which:

 - APIs and auth: You have designed permission models, token scopes or OAuth flows for third-party or machine clients, and you have migrated them without breaking users.

 - Operations: You have run production services yourself: carried the pager, written alerts and runbooks, used SLOs or similar to decide what to fix, and made shared systems less risky over time.

 - Gateways and distributed systems: You have built or run proxies or gateways, or debugged hard failures across services (retries, partial failures, upstream outages, fail-open vs fail-closed decisions), and you can reason about load and degradation.

Nice to have:

 - Experience with agent tooling (MCP or similar), or serving traffic from AI agents and LLM clients.

 - Experience moving a service out of a larger codebase while keeping existing clients working.

 - Experience with Grafana, OpenTelemetry, Logflare or a similar observability stack, and real SLO work.

 - Open-source contributions, especially to Node.js, Go, TypeScript or API tooling.


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
role: "Software Engineer - AI Tooling Infrastructure"
job_facts_cache: null
score: 3.8
legitimacy_tier: "High Confidence"
archetype: "Backend Engineer — AI/LLM & Data"
final_decision: "Consider"
hard_stops: []
soft_gaps:
  - "5+ ans + on-call"
  - "Remote global : vérifier fuseau/pays"
top_strengths:
  - "IA/LLM + backend TS"
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
  - "seniority_mismatch"
via: null
company_confidential: false
advertised_comp: null
reports_to: null
posting_location: "Remote, Global"
requirement_importance:
  - requirement: "5+ ans backend en prod + on-call"
    jd_signal: null
    evidence: "structural"
    importance: "critical"
    match: "missing"
  - requirement: "IA/LLM tooling, agents"
    jd_signal: null
    evidence: "structural"
    importance: "high"
    match: "strong"
  - requirement: "TypeScript/Node, backend services"
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

## Application Answers

**Date:** 2026-11-09
**State:** filled

### Free-text answers

1. **Pourquoi Supabase ?**

> Supabase m'intéresse parce que c'est un produit construit par et pour des développeurs, et parce que le rôle touche à l'infrastructure qui rend l'outillage IA fiable en production — le serveur MCP en est un bon exemple. J'ai une vraie affinité avec ce sujet : j'utilise déjà des serveurs MCP (GitLab, Figma) et l'intégration d'assistants de code dans mon travail quotidien, et je comprends à quel point le trafic d'agents (retries, volumes élevés, clients qui ignorent les dépréciations) exige une conception différente. Côté backend, j'ai construit et opéré des services TypeScript/Node en production, avec des systèmes événementiels robustes (queues, consumers, retries, idempotence, backfills). Je suis à l'aise avec PostgreSQL et les bases relationnelles, avec Docker/Kubernetes et avec l'observabilité via Prometheus/Grafana. Le poste est fully remote et l'équipe distribue sa responsabilité d'on-call à ses membres, ce qui correspond à mon envie d'ownership réel. Je vois aussi un bel alignement avec l'approche open source de Supabase.

2. **Pourquoi ce rôle ?**

> Le rôle combine deux choses que je connais bien : backend TypeScript/Node et outillage IA/LLM. J'ai construit des services backend en production, des APIs versionnées avec gestion d'erreurs et rate limiting, et des systèmes événementiels où l'idempotence et les retries sont non négociables. Je travaille régulièrement avec MCP et des assistants de code, ce qui donne un point de départ concret pour opérer une MCP server et les services d'agent skills. Je connais aussi l'authentification et l'autorisation via JWT et Keycloak IAM, ce qui recoupe directement la partie OAuth/scopes/permissions du JD. Le gap assumé est le compteur d'années (j'ai ~4 ans, le JD demande 5+) et une expérience d'on-call formelle : je l'ai vécue de fait via la fiabilité en production et les incidents, mais je ne l'ai pas portée dans un cadre structuré d'astreinte. Je suis en revanche très à l'aise avec l'idée de l'adopter.

3. **Un projet open source, un side project, ou quelque chose dont vous êtes particulièrement fier ?**

> Ask candidate: provide your personal anecdote — cannot be invented.

### Selections made

1. **Êtes-vous autorisé à travailler dans le pays du poste (remote global) ?:** Yes
2. **Avez-vous besoin d'un sponsoring de visa ?:** Ask candidate: confirm whether the hiring entity requires visa sponsorship outside the EU
3. **Questions démographiques ou légales (genre, ethnicité, statut de handicap, etc.):** Ask candidate

### Other field values

1. **Nom complet:** Werner Dia Black
2. **Email:** werner.diablack@gmail.com
3. **Téléphone:** +33750954317
4. **Localisation:** Paris, Île-de-France (France, EU)
5. **LinkedIn:** https://www.linkedin.com/in/werner-diablack
6. **GitHub:** https://github.com/Werner-DB
7. **Années d'expérience:** ~4 ans
8. **Préavis:** 90 jours (3 mois)
9. **Disponibilité:** Sous 90 jours (préavis, 3 mois)

### Files used

1. **Resume (CV):** output/cv-candidate-075-supabase-ai-tooling-infra-2026-11-09.pdf
