# Evaluation: Mistral AI — Forward Software Engineer

**Date:** 2026-11-09
**URL:** https://jobs.ashbyhq.com/mistral.ai/9bebc981-cb93-4040-9ec8-9f7bbfef300f
**Via:** —
**Archetype:** Backend Engineer — AI/LLM & Data
**Score:** 4.4/5
**Decision:** Apply
**Legitimacy:** High Confidence
**Work Auth:** ➖ Not needed
**PDF:** output/cv-candidate-039-mistral-ai-forward-swe-2026-11-09.pdf

**Postuler.** Match fort sur l'axe central : construire des systèmes agentiques/GenAI en production, avec orchestration, évaluation, observabilité et sécurité, en Node/TypeScript/FastAPI/React, à Paris chez un leader IA européen. La seule réserve réelle est l'exigence « au moins un système agentique en production » face au CV (MCP/LLM réels mais profondeur « agent en production » à démontrer) et 5+ ans vs ~4.

---

## A) Role Summary

| Champ | Valeur |
|-------|--------|
| Archétype détecté | Backend Engineer — AI/LLM & Data (secondaire : Senior Fullstack Engineer) |
| Domaine | IA appliquée — Applied AI, systèmes agentiques/GenAI pour clients |
| Fonction | Ingénierie end-to-end — architecture d'agents, backend/APIs, évaluation |
| Séniorité | Senior (5+ ans) |
| Mode de travail | Bureau Paris (pas de remote précisé ; ancrage Paris) |
| Taille d'équipe | Équipe Applied AI, multi-pays |
| TL;DR | Poste Forward SWE dans Applied AI de Mistral pour construire des systèmes agentiques de production (orchestration, tool use, éval, sécurité) de bout en bout, à Paris. |
| Caps/overrides du profil | Paris → 5.0. Comp non annoncée. |

**Work-authorization classification: ➖ Not needed.** Poste à Paris (France, UE), candidat à Paris. Pas de sponsoring requis.

**Culture screen.** Bas ego, hauts standards, autonomie, « ship and own », feedback direct, pas de bureaucratie. **pass**.

## B) CV Match

| Requirement | Importance | Match | JD signal | Evidence / gap |
|---|---|---|---|---|
| 5+ ans en production, ≥1 système agentique/GenAI livré et opéré après lancement | critical (stated) | ⚠️ Partial | "5+ years building production software, with at least one agentic or GenAI system shipped to production that you ran after launch." | `cv.md` : ~4 ans ; APIs génératives scalables + MCP servers en prod, mais « agent orchestré en production » non démontré explicitement. |
| Livrer full stack Node (Next/Express/Fastify) ou Python (FastAPI) + TypeScript/React | critical (stated) | ✅ Strong | "proficient NodeJS e.g. NextJS/Express/Fastify or similar or Python e.g. FastAPI ... confident with TypeScript + React/NextJS" | `cv.md` : TypeScript/Node, NestJS, React, Python/FastAPI. |
| Profondeur dans le design d'agents (orchestration, tool use, retrieval, éval, échecs) | high (structural) | ⚠️ Partial | "hands-on depth in agent design: orchestration, tool use, retrieval, evaluation" | `cv.md` : MCP servers, LLM, mais design d'agents/orchestration/éval non détaillé. |
| Autonomie, ownership end-to-end | high (stated) | ✅ Strong | "you find the problem, decide the approach, and own the outcome." | `cv.md` : ownership de bout en bout, référent technique. |
| Construire la boucle d'évaluation (evals, tracing) | meaningful (structural) | ⚠️ Partial | "Build the evaluation loop: task-level evals, tracing, and checks that catch agent failures" | `cv.md` : observabilité Prometheus/Grafana, mais éval d'agents non citée. |
| Sécurité des agents (permissions, sandboxing, prompt-injection) | meaningful (structural) | ⚠️ Partial | "Build security into agents from day one: permissions, sandboxing, prompt-injection defenses" | `cv.md` : sécurité JWT/IAM ; sécurité d'agents non citée. |
| Anglais courant, communication technique/non-technique | critical (stated) | ➖ N/A | "communicate clearly with technical and non-technical audiences, and are fluent in English." | `cv.md` : Anglais courant. |
| Déploiement : Docker, Kubernetes, Terraform, cloud | preferred (structural) | ✅ Strong | "Experience deploying and running what you build: Docker, Kubernetes, Terraform, and AWS, GCP, or Azure." | `cv.md` : Kubernetes, Docker, AWS, GCP. |

**Gaps et mitigation.**
- **Système agentique en production (critical, partial).** Mitigation : cadre les MCP servers (GitLab/Figma) + APIs génératives comme système agentique opéré ; préparer un récit concret d'orchestration, tool use, gestion d'échec, évaluation.
- **Design d'agents/éval (partial).** Mitigation : préparer des exemples de boucle d'éval et d'observabilité appliquée aux agents.

## C) Level and Strategy

1. **Niveau :** Senior, 5+ ans. Candidat ~4 ans mais déjà Senior.
2. **Vendre senior :** insister sur agents/MCP en production, ownership, full-stack. Substituer la densité au compteur.
3. **Si downlevel :** accepter si comp correcte ; négocier revue.

## D) Comp and Demand

- **Advertised (JD) :** not stated
- **Company type :** Public big tech / mature AI lab (Mistral, financé, premier plan européen) — confiance moyenne-haute sur les bandes.
- **Compensation reliability :** Low — pas de chiffre.
- Comp inconnue → comp 3 (Mistral paie généralement bien ; à confirmer).

## E) Customization Plan

| # | Section | Statut actuel | Changement proposé | Pourquoi |
|---|---------|---------------|--------------------|----------|
| 1 | Summary | Backend/fullstack | Mettre en avant systèmes agentiques/GenAI en production | Cœur du poste |
| 2 | Expérience ILLUIN | Event-driven + MCP | Ajouter puce orchestration d'agents + éval | Match direct |
| 3 | Compétences | MCP, LLM | Ajouter retrieval/éval/observabilité d'agents | Comble gaps |
| 4 | Projet | GitHub | Projet agent en prod en support | Preuve |
| 5 | LinkedIn | Générique | Agentique + IA appliquée | Recruteur |

## F) Interview Plan

| # | JD Requirement | STAR+R Story | S | T | A | R | Reflection |
|---|-----------------|-----------------|---|---|---|---|------------|
| 1 | Système agentique en prod | MCP servers ILLUIN | Outiller les devs | Agents actionnables | Serveurs MCP, tool use | Ontillage IA en prod | Le tool use doit être sûr |
| 2 | Full-stack livraison | Feature NestJS/tRPC/React | Produit HR | Livrer | TS/React/API | Feature livrée | Le bout-en-bout réduit les handoffs |
| 3 | Éval/observabilité | Prometheus/Grafana + LLM | Qualité qui dérive | Mesurer | Evals, tracing | Qualité suivie | Mesurer l'agent comme un service |
| 4 | Sécurité agents | JWT/IAM, données sensibles | Agents touchent des systèmes | Sécuriser | Permissions, audit | Agents sûrs | Prompt-injection = risk model |
| 5 | Autonomie/ownership | Référent technique | Problèmes ambigus | Décider et livrer | Architecture + code | Résultats | Le temps à la valeur d'abord |

Case study : le système agentique MCP d'ILLUIN (orchestration, tool use, gestion d'échec, observabilité). Question piège : « agent en production » → cadrer précisément les MCP + APIs génératives.

## G) Posting Legitimacy

**Assessment : High Confidence.** JD très détaillé, entreprise majeure, rôle réaliste.

| Signal | Constat | Poids |
|--------|---------|-------|
| Fraîcheur | Actif (posté 2026-11-06) | Positive |
| Qualité description | Très précise | Positive |
| Signaux d'embauche | Mistral, croissance | Positive |
| Repost | Non détecté | Neutral |

**Employment classification :** CDI implicite — ✅ clear.
**Role-clarity :** scope, attentes, façon de travailler précises. Reporting line non nommée.

**Prior-contact FYI :** aucun historique Mistral dans le tracker.

## Verdict (lead)

**Postuler.** Match fort sur l'agentique/GenAI en production et le full-stack TS/Python à Paris, avec une réserve à démontrer sur la profondeur « agent en production ».

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
| CV match | partial | TS/Node/FastAPI/React + MCP ; agent-en-prod à démontrer | Profondeur agent |
| North Star alignment | supported | Backend IA/LLM, Paris | — |
| Compensation | unknown | Non annoncée | — |
| Cultural signals | supported | Bas ego, autonomie | — |
| Red flags | supported | Posting sain | — |

**Evidence confidence:** Medium — comp unknown + agent-en-prod partial.
Priorités : obtenir la fourchette ; cadrer le récit agent-en-prod ; clarifier le niveau.

## Keywords extracted

agentic systems, GenAI, orchestration, tool use, retrieval, evaluation, TypeScript, React, NextJS, NodeJS, FastAPI, Python, security, sandboxing, prompt injection, Docker, Kubernetes, Terraform

## Keyword Coverage

**ATS coverage: 33%** (6/18 keywords present)

_Scanned: cv.md (base CV, before per-role tailoring)._

**Present (6):** TypeScript, React, FastAPI, Python, Docker, Kubernetes

**Thin — mentioned once, consider reinforcing (1):** Docker

**Missing (12):** agentic systems, GenAI, orchestration, tool use, retrieval, evaluation, NextJS, NodeJS, security, sandboxing, prompt injection, Terraform

> Diagnostic only. Add a missing keyword **only** if it reflects real experience — reformulated from your background, never fabricated.

## Job Description (archived verbatim)

Posted: 2026-11-06 (Ashby publishedAt)

ABOUT MISTRAL
Mistral provides full-stack AI solutions: from frontier models to developer tools, applications, and compute.
ABOUT THE JOB
As a Forward Software Engineer, you will build the systems behind some of the hardest problems Mistral takes on. You join our team of engineers in Applied AI. We're looking for a strong software engineer who has shipped agentic or GenAI systems to production. You build across the stack; you'd rather ship a plain UI on a solid foundation than a polished UI on a fragile one. You think like a founder. You measure success by the value you deliver.
WHAT YOU WILL DO
- Build AI systems end to end, from first prototype to production.
- Design the agent architecture: orchestration, tool use, memory, retrieval, and the interfaces between agents and the systems they act on.
- Build across the stack, from backend services and APIs to the interfaces people use to work with agents.
- Turn what works for one customer into patterns and platforms that work across many.
- Make systems hold up under real load: throughput, latency, cost, and failure recovery.
- Build security into agents from day one: permissions, sandboxing, prompt-injection defenses, and audit trails.
- Build the evaluation loop: task-level evals, tracing, and checks that catch agent failures and quality drift.
WHAT WE'RE LOOKING FOR
- 5+ years building production software, with at least one agentic or GenAI system shipped to production that you ran after launch.
- Full ability to ship across the stack: NodeJS (NextJS/Express/Fastify) or Python (FastAPI); confident with TypeScript + React/NextJS.
- Hands-on depth in agent design: orchestration, tool use, retrieval, evaluation, and the ways agents fail.
- Autonomy and ownership. Clear communication; fluent English. Ship in increments; product judgment.
IDEALLY: open-source contributions in agents/LLMs; deployment (Docker, Kubernetes, Terraform, cloud); security background (prompt injection, SBOM/SLSA); security workflows (SIEM/XDR/SOAR).
LOCATION: Paris.

## Machine Summary

```yaml
company: "Mistral AI"
role: "Forward Software Engineer"
job_facts_cache: null
score: 4.4
legitimacy_tier: "High Confidence"
archetype: "Backend Engineer — AI/LLM & Data"
final_decision: "Apply"
hard_stops: []
soft_gaps:
  - "Système agentique en production à démontrer (MCP/LLM réels)"
  - "5+ ans demandés vs ~4 ans"
  - "Design d'agents/éval/observabilité d'agents non détaillé dans le CV"
top_strengths:
  - "MCP servers et APIs génératives en production"
  - "Full-stack TypeScript/Node/React + Python/FastAPI"
  - "Ownership end-to-end, autonomie, low-ego"
risk_level: "Low"
confidence: "Medium"
score_evidence:
  cv_match: "partial"
  north_star: "supported"
  compensation: "unknown"
  culture: "supported"
  red_flags: "supported"
confidence_gaps:
  - "Obtenir la fourchette de rémunération"
  - "Cadrer précisément le récit 'agent en production'"
  - "Confirmer le niveau Senior"
next_action: "Postuler en mettant en avant MCP/agents + APIs génératives en production, TypeScript/React/FastAPI, éval et observabilité"
work_auth: "not_needed"
discard_reasons: []
via: null
company_confidential: false
advertised_comp: null
reports_to: null
posting_location: "Paris"
requirement_importance:
  - requirement: "5+ ans + agentic/GenAI en production opéré"
    jd_signal: "5+ years building production software, with at least one agentic or GenAI system shipped to production that you ran after launch."
    evidence: "stated"
    importance: "critical"
    match: "partial"
  - requirement: "Full stack Node/Python + TypeScript/React"
    jd_signal: "proficient NodeJS e.g. NextJS/Express/Fastify or similar or Python e.g. FastAPI ... confident with TypeScript + React/NextJS"
    evidence: "stated"
    importance: "critical"
    match: "strong"
  - requirement: "Profondeur design d'agents"
    jd_signal: "hands-on depth in agent design: orchestration, tool use, retrieval, evaluation, and the ways agents fail in the real world."
    evidence: "structural"
    importance: "high"
    match: "partial"
  - requirement: "Autonomie et ownership"
    jd_signal: "you find the problem, decide the approach, and own the outcome."
    evidence: "stated"
    importance: "high"
    match: "strong"
  - requirement: "Boucle d'évaluation (evals, tracing)"
    jd_signal: "Build the evaluation loop: task-level evals, tracing, and checks that catch agent failures"
    evidence: "structural"
    importance: "meaningful"
    match: "partial"
  - requirement: "Sécurité des agents"
    jd_signal: "Build security into agents from day one: permissions, sandboxing, prompt-injection defenses, and audit trails"
    evidence: "structural"
    importance: "meaningful"
    match: "partial"
  - requirement: "Anglais et communication"
    jd_signal: "communicate clearly with technical and non-technical audiences, and are fluent in English."
    evidence: "stated"
    importance: "critical"
    match: "na"
  - requirement: "Déploiement Docker/K8s/Terraform/cloud"
    jd_signal: "Experience deploying and running what you build: Docker, Kubernetes, Terraform, and AWS, GCP, or Azure."
    evidence: "structural"
    importance: "preferred"
    match: "strong"
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

## Application Answers

**Date:** 2026-11-09
**State:** filled

### Free-text answers

1. **Pourquoi Mistral AI ?**

> Mistral construit une pile IA complète, des modèles de pointe aux outils développeurs et aux applications, et reste le champion européen du secteur. Ce qui me parle dans ce poste de Forward Software Engineer, c'est le positionnement Applied AI : résoudre les problèmes les plus difficiles, de façon concrète, pour de vrais clients, plutôt que de rester au niveau du modèle. J'ai déjà travaillé à la frontière entre backend de production et IA appliquée : APIs génératives scalables, serveurs MCP pour outiller les développeurs, assistants de code adoptés par l'équipe, dans un monorepo TypeScript en production chez ILLUIN Technology. Mistral est aussi une équipe où la culture d'ingénieur compte, avec une exigence de fondations solides plutôt que d'interfaces brillantes sur du sable — c'est exactement ma façon de construire. Contribuer à des systèmes agentiques qui fonctionnent sous charge réelle, avec des évaluations et des garde-fous sérieux, est le défi qui me motive le plus aujourd'hui.

2. **Pourquoi ce poste ?**

> Le poste demande de livrer full stack sur Node (Next/Express/Fastify) ou Python (FastAPI) avec TypeScript et React : c'est mon quotidien, entre NestJS/tRPC et REST côté backend, React côté interface, et Python/FastAPI pour des services en production. Il demande aussi d'avoir un vrai sens de l'ownership, de trouver le problème, de décider de l'approche et de porter le résultat — rôle que j'ai tenu comme référent technique. Mon expérience des systèmes en production apporte le socle : services event-driven avec retries, idempotency et backfills, observabilité via Prometheus/Grafana, déploiement Kubernetes/Docker et AWS. Sur la conception d'agents et les boucles d'évaluation, mes acquis (MCP, intégration LLM) sont réels mais moins profonds que ce que ce rôle vise : c'est une pente que je veux gravir, avec l'envie de rendre un agent mesurable et sûr plutôt que simplement démonstratif.

3. **Un projet open source, un side project ou une réalisation dont vous êtes particulièrement fier(e) ?**

> Ask candidate: provide your personal anecdote — cannot be invented.

### Selections made

1. **Êtes-vous autorisé(e) à travailler en France / dans l'UE ?:** Yes
2. **Avez-vous besoin d'un sponsor de visa ?:** No
3. **Informations démographiques (genre, origine, statut, etc.):** Ask candidate
4. **Déclarations légales / contractuelles:** Ask candidate

### Other field values

1. **Nom:** Werner Dia Black
2. **Email:** werner.diablack@gmail.com
3. **Téléphone:** +33750954317
4. **Localisation:** Paris, Île-de-France (France, UE)
5. **LinkedIn:** https://www.linkedin.com/in/werner-diablack
6. **GitHub:** https://github.com/Werner-DB
7. **Années d'expérience:** ~4 ans
8. **Préavis:** 90 jours (3 mois)
9. **Disponibilité:** Sous 90 jours (préavis, 3 mois)

### Files used

1. **Resume (CV):** output/cv-candidate-039-mistral-ai-forward-swe-2026-11-09.pdf
