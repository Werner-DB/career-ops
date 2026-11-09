# Evaluation: Mistral AI — Software Engineer (Golang), Sandbox

**Date:** 2026-11-09
**URL:** https://jobs.ashbyhq.com/mistral.ai/d23aec52-d08e-4a99-bc17-b7f98a6be0d4
**Via:** —
**Archetype:** Not a target — closest default: Platform / DevEx Engineer
**Score:** 2.2/5
**Decision:** Skip
**Legitimacy:** High Confidence
**Work Auth:** ➖ Not needed
**PDF:** output/cv-candidate-044-mistral-ai-swe-golang-sandbox-2026-11-09.pdf

**Passer.** Rôle de runtime/systèmes (microVMs, isolation réseau, Go). Hors du périmètre CV.

---

## A) Role Summary

| Champ | Valeur |
|-------|--------|
| Archétype détecté | Pas une cible — le plus proche : Platform / DevEx Engineer |
| Domaine | Isolation (microVMs/containers), Linux internals (namespaces, cgroups, seccomp), isolation réseau, Go |
| Fonction | Infrastructure / systèmes (Cloud Platform, Mistral) |
| Séniorité | Senior / Staff infra |
| Mode de travail | Bureau Paris (Cloud Platform) |
| Taille d'équipe | Équipe Cloud Platform (compute, K8s, storage, réseau, datacenters) |
| TL;DR | Rôle d'infrastructure Cloud Platform chez Mistral dédié aux sandboxes isolés (microVMs, Go), à Paris. |
| Caps/overrides du profil | Paris → 5.0 (mais fit technique très faible). |

**Work-authorization classification: ➖ Not needed.** Poste à Paris, candidat à Paris.

**Culture screen.** Bas ego, hauts standards, autonomie. **pass**.

## B) CV Match

| Requirement | Importance | Match | JD signal | Evidence / gap |
|---|---|---|---|---|
| Linux internals : namespaces, cgroups, seccomp, microVMs | critical (stated) | ❌ Missing | — | Absent du `cv.md` |
| Go en production (shipped) | critical (stated) | ❌ Missing | — | Absent du `cv.md` |
| Isolation réseau au niveau paquet | critical (stated) | ❌ Missing | — | Absent du `cv.md` |
| Performance et profiling | critical (stated) | ❌ Missing | — | Absent du `cv.md` |

**Gaps et mitigation.** Écart structurel sur les compétences système/infrastructure demandées. Non comblable par un transfert court ; ne pas postuler.

## C) Level and Strategy

1. **Niveau :** Senior/Staff infrastructure. Candidat backend produit.
2. **Vendre senior :** sans objet pour ce rôle système.
3. **Si downlevel :** non pertinent.

## D) Comp and Demand

- **Advertised (JD) :** not stated
- **Company type :** Public big tech / mature AI lab — confiance moyenne-haute.
- **Compensation reliability :** Low — pas de chiffre.

## E) Customization Plan

| # | Section | Statut actuel | Changement proposé | Pourquoi |
|---|---------|---------------|--------------------|----------|
| 1 | — | — | Aucune (Skip) | Écart structurel |

## F) Interview Plan

Non applicable (Skip).

## G) Posting Legitimacy

**Assessment : High Confidence.** JD détaillé, entreprise majeure, rôle réel.

| Signal | Constat | Poids |
|--------|---------|-------|
| Fraîcheur | Actif (posté 2026-10-21) | Positive |
| Qualité description | Très précise | Positive |
| Signaux d'embauche | Mistral, croissance | Positive |

**Employment classification :** CDI implicite — ✅ clear.
**Role-clarity :** scope infrastructure précis. Pas de blocage.

**Prior-contact FYI :** aucun historique Mistral.

## Verdict (lead)

**Passer.** Rôle de runtime/systèmes (microVMs, isolation réseau, Go). Hors du périmètre CV.

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
| CV match | unknown | Compétences système/infra absentes | — |
| North Star alignment | unknown | Rôle infra, hors cible backend | — |
| Compensation | unknown | Non annoncée | — |
| Cultural signals | supported | Bas ego, autonomie | — |
| Red flags | supported | Posting sain | — |

**Evidence confidence:** Low — CV match et North Star unknown (écart structurel).

## Keywords extracted

Go, microVM, Firecracker, namespaces, cgroups, seccomp, network isolation, Linux

## Keyword Coverage

**ATS coverage: 0%** (0/8 keywords present)

_Scanned: cv.md (base CV, before per-role tailoring)._

**Present (0):** —

**Missing (8):** Go, microVM, Firecracker, namespaces, cgroups, seccomp, network isolation, Linux

> Diagnostic only. Add a missing keyword **only** if it reflects real experience — reformulated from your background, never fabricated.

## Job Description (archived verbatim)

Posted: 2026-10-21 (Ashby publishedAt)

ABOUT MISTRAL

Mistral provides full-stack AI solutions: from frontier models to developer tools, applications, and compute. We partner with enterprises tackling the hardest problems across high-stakes industries like finance, manufacturing, defense, healthcare, and the public sector, co-creating customized AI systems that they can run on their terms.

We are a dynamic, collaborative team passionate about AI and its potential to transform society. Our diverse workforce thrives in competitive environments and is committed to driving innovation. Our teams are distributed between Europe, North America, Asia and the Middle East. We are creative, low-ego and team-spirited.



THE TEAM

Mistral is building a sovereign AI cloud for Europe. Our customers in finance, healthcare, and the public sector run frontier models on European-jurisdiction infrastructure, and the Cloud Platform team builds the systems that make that possible — compute orchestration, Kubernetes, bare metal, storage, networking, and the datacenter fleet that runs it all.

We run it all on our own metal, our own network, our own datacenters — which means when something breaks, the fix is ours to write.

European Compute Units let enterprises commit to multi-year capacity on that infrastructure, and we are scaling toward a gigawatt of compute across Europe by 2030. You will design and ship the layer every sovereign AI deployment depends on.

THE ROLE

AI agents don't run in browsers. They run in sandboxes — and you will build ours.

We build secure, isolated, network-controlled environments with snapshotting primitives, designed for AI agents and reinforcement-learning workloads. An RL training run doesn't need one environment; it needs thousands, created and destroyed every second. An agent needs to be sandboxed from the world while still feeling fast enough to be useful. That tension — airtight isolation, at fleet scale, at low latency — is the product.

Your customers are the people building the next generation of AI software on our infrastructure; the primitives you ship become the runtime their agents live in.

WHAT YOU WILL DO

- Build the isolation layer: microVMs or containers, namespaces, cgroups, seccomp, snapshot and restore.

- Own the security boundary. Customers run code they didn't write and can't fully trust — your systems make that safe.

- Scale to fleets: creation latency, density, and lifecycle management for thousands of concurrent environments.

- Write Go and own the architecture and the hardest implementation decisions.

- Partner with Product Managers to turn frontier research needs into shippable primitives.

WHAT WE'RE LOOKING FOR

- Deep Linux internals: namespaces, cgroups, seccomp, virtualization — ideally microVMs of the Firecracker class.

- You have shipped production systems in Go. Not dabbled. Shipped.

- You understand network isolation at the packet level — not just firewall rules.

- Performance instincts: you know what a syscall costs, and you have the profiles to prove you've cared.

- 5+ years building backend or infrastructure systems.

- You have partnered with product, design, and business teams to ship software that reached real users.

- A low-ego, team-first mindset. We care less about your exact domain and more about whether you are the kind of technical force other engineers want to work alongside.




WHAT WE OFFER

We offer a comprehensive benefits package designed to support your well-being, growth, and work-life balance. Benefits vary by country and may include healthcare coverage, parental leave, retirement plans, relocation support, wellness programs, meal and transportation allowances, and other location-specific perks.

For the most up-to-date details on benefits available in your location, please refer to our Benefits page https://app.notion.com/p/mistralai/Benefits-at-Mistral-36e6ba59a7fe836b93dd01737fcc27ef?source=copy_link.




PRIVACY POLICY

Your privacy matters to us. You can learn more about how we handle your personal data in our Applicant Privacy Policy https://legal.mistral.ai/terms/applicant-privacy-policy.

## Machine Summary

```yaml
company: "Mistral AI"
role: "Software Engineer (Golang), Sandbox"
job_facts_cache: null
score: 2.2
legitimacy_tier: "High Confidence"
archetype: "Not a target — closest default: Platform / DevEx Engineer"
final_decision: "Skip"
hard_stops:
  - "Linux internals : namespaces, cgroups, seccomp, microVMs absent du CV"
soft_gaps:
  - "Écart structurel sur les compétences système/infrastructure demandées"
top_strengths:
  - "Backend produit solide mais non pertinent pour ce rôle"
risk_level: "Medium"
confidence: "Low"
score_evidence:
  cv_match: "unknown"
  north_star: "unknown"
  compensation: "unknown"
  culture: "supported"
  red_flags: "supported"
confidence_gaps:
  - "Compétences système/infrastructure absentes (écart structurel)"
next_action: "Passer — cibler les rôles backend/IA appliquée (ex. Forward SWE, rapport 039)"
work_auth: "not_needed"
discard_reasons:
  - "seniority_mismatch"
via: null
company_confidential: false
advertised_comp: null
reports_to: null
posting_location: "Paris"
requirement_importance: []
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
