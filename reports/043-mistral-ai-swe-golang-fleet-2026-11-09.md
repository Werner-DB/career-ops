# Evaluation: Mistral AI — Software Engineer (Golang), Fleet Delivery

**Date:** 2026-11-09
**URL:** https://jobs.ashbyhq.com/mistral.ai/926f9306-c524-4161-8b06-21a85cd3bfd5
**Via:** —
**Archetype:** Not a target — closest default: Platform / DevEx Engineer
**Score:** 2.1/5
**Decision:** Skip
**Legitimacy:** High Confidence
**Work Auth:** ➖ Not needed
**PDF:** output/cv-candidate-043-mistral-ai-swe-golang-fleet-2026-11-09.pdf

**Passer.** Rôle d'ingénierie hardware/bare-metal en Go, avec déplacements datacenter. Aucune expérience correspondante dans le CV.

---

## A) Role Summary

| Champ | Valeur |
|-------|--------|
| Archétype détecté | Pas une cible — le plus proche : Platform / DevEx Engineer |
| Domaine | Automatisation de flottes bare-metal, hardware (servers, GPUs, NICs, switches, firmware), Go |
| Fonction | Infrastructure / systèmes (Cloud Platform, Mistral) |
| Séniorité | Senior / Staff infra |
| Mode de travail | Bureau Paris (Cloud Platform) |
| Taille d'équipe | Équipe Cloud Platform (compute, K8s, storage, réseau, datacenters) |
| TL;DR | Rôle d'infrastructure Cloud Platform chez Mistral dédié à l'automatisation de flottes bare-metal (Go, hardware), à Paris. |
| Caps/overrides du profil | Paris → 5.0 (mais fit technique très faible). |

**Work-authorization classification: ➖ Not needed.** Poste à Paris, candidat à Paris.

**Culture screen.** Bas ego, hauts standards, autonomie. **pass**.

## B) CV Match

| Requirement | Importance | Match | JD signal | Evidence / gap |
|---|---|---|---|---|
| Automatisation de flottes bare-metal | critical (stated) | ❌ Missing | — | Absent du `cv.md` |
| Hardware fluency (servers, GPUs, NICs, firmware) | critical (stated) | ❌ Missing | — | Absent du `cv.md` |
| Go en production (shipped) | critical (stated) | ❌ Missing | — | Absent du `cv.md` |
| Linux bas niveau + déplacements datacenter | critical (stated) | ❌ Missing | — | Absent du `cv.md` |

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

**Passer.** Rôle d'ingénierie hardware/bare-metal en Go, avec déplacements datacenter. Aucune expérience correspondante dans le CV.

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

Go, bare-metal, automation, GPU, NIC, switch, firmware, Linux, datacenter

## Keyword Coverage

**ATS coverage: 0%** (0/9 keywords present)

_Scanned: cv.md (base CV, before per-role tailoring)._

**Present (0):** —

**Missing (9):** Go, bare-metal, automation, GPU, NIC, switch, firmware, Linux, datacenter

> Diagnostic only. Add a missing keyword **only** if it reflects real experience — reformulated from your background, never fabricated.

## Job Description (archived verbatim)

Posted: 2026-10-21 (Ashby publishedAt)

ABOUT MISTRAL

Mistral provides full-stack AI solutions: from frontier models to developer tools, applications, and compute. We partner with enterprises tackling the hardest problems across high-stakes industries like finance, manufacturing, defense, healthcare, and the public sector, co-creating customized AI systems that they can run on their terms.

We are a dynamic, collaborative team passionate about AI and its potential to transform society. Our diverse workforce thrives in competitive environments and is committed to driving innovation. Our teams are distributed between Europe, North America, Asia and the Middle East. We are creative, low-ego and team-spirited.



THE TEAM

Mistral is building a sovereign AI cloud for Europe. Our customers in finance, healthcare, and the public sector run frontier models on European-jurisdiction infrastructure, and the Cloud Platform team builds the systems that make that possible — compute orchestration, Kubernetes, bare metal, storage, networking, and the datacenter fleet that runs it all.

European Compute Units let enterprises commit to multi-year capacity on that infrastructure, and we are scaling toward a gigawatt of compute across Europe by 2030. You will design and ship the layer every sovereign AI deployment depends on.

THE ROLE

A datacenter is not a cloud until software makes it one. You will build the software that turns arriving hardware into accepted clusters.

Cabling validation, burn-in, firmware, deployment validation, software stack install — all of it automated, none of it click-ops. Your KPI is time to acceptance: the hours between a rack being physically installed and it serving customer workloads. Across the industry that number is measured in weeks. You will drive it toward days, then hours, as we scale toward a gigawatt of compute across Europe.

This is a hands-on engineering role at the intersection of hardware and software. Most of your time in the code and the architecture, some of it on datacenter floors, because the automation has to survive contact with the machines it runs on.

WHAT YOU WILL DO

- Build the delivery pipeline in Go: provisioning, configuration, validation, burn-in, network bring-up, software stack install.

- Own time-to-acceptance and drive it down relentlessly — measure it, break it down, kill the slowest step first.

- Work shoulder-to-shoulder with Hardware Design and Fleet Health — reliability starts at delivery.

- Handle GPU fleets at scale: H100 and GB200-class nodes, InfiniBand and RoCE fabrics, and the failure modes they bring.

- Partner with Product Managers and the datacenter org to plan delivery waves against capacity commitments.

WHAT WE'RE LOOKING FOR

- You have automated bare-metal fleets — you have written the software that turns racks into clusters. If you have done it by hand, you resented it and scripted it.

- Hardware fluency: servers, GPUs, NICs, switches, firmware — you can read a parts list and a topology diagram.

- 5+ years building backend or infrastructure systems.

- Deep Linux: you are comfortable well below the application layer.

- You have shipped production systems in Go. Not dabbled. Shipped.

- Willing to travel to datacenter sites when the work demands it.

- A low-ego, team-first mindset. We care less about your exact domain and more about whether you are the kind of technical force other engineers want to work alongside.




WHAT WE OFFER

We offer a comprehensive benefits package designed to support your well-being, growth, and work-life balance. Benefits vary by country and may include healthcare coverage, parental leave, retirement plans, relocation support, wellness programs, meal and transportation allowances, and other location-specific perks.

For the most up-to-date details on benefits available in your location, please refer to our Benefits page https://app.notion.com/p/mistralai/Benefits-at-Mistral-36e6ba59a7fe836b93dd01737fcc27ef?source=copy_link.




PRIVACY POLICY

Your privacy matters to us. You can learn more about how we handle your personal data in our Applicant Privacy Policy https://legal.mistral.ai/terms/applicant-privacy-policy.

## Machine Summary

```yaml
company: "Mistral AI"
role: "Software Engineer (Golang), Fleet Delivery"
job_facts_cache: null
score: 2.1
legitimacy_tier: "High Confidence"
archetype: "Not a target — closest default: Platform / DevEx Engineer"
final_decision: "Skip"
hard_stops:
  - "Automatisation de flottes bare-metal absent du CV"
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
