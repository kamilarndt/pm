---
name: ahe-pm-agents
description: "Delegate PM work to specialized AHE sub-agents — discovery, strategy, PRD, execution, market research, GTM, marketing. Each agent is a dedicated OpenCode or Pi verifier persona. Use when deep, multi-step PM work is needed."
metadata:
  hermes:
    tags: [product-management, delegation, ahe]
    related_skills: [discover, write-prd, plan-okrs, competitive-analysis-cmd]
---

# AHE PM Agents — Delegation Guide

Gdy potrzebujesz głębokiej, wieloetapowej pracy PM, deleguj do wyspecjalizowanych agentów AHE.
Każdy agent ma dedykowaną personę, narzędzia i proces weryfikacji.

## Dostępni agenci

### OpenCode PM Agents (wykonawcze)

| Agent | Zakres | Użyj gdy |
|-------|--------|----------|
| `opencode-pm-discover` | Full discovery cycle — brainstorming, assumptions, experiments | Nowy pomysł, walidacja, opportunity mapping |
| `opencode-pm-strategy` | Strategy: vision, canvas, SWOT, PESTLE, Porter, pricing | Definiowanie strategii, pozycjonowanie |
| `opencode-pm-prd` | 8-section PRD writing | Gotowy do specyfikacji |
| `opencode-pm-execution` | OKRs, user stories, sprints, roadmaps, retros | Planowanie, wykonanie |
| `opencode-pm-market-research` | Competitors, personas, segments, sizing | Badanie rynku |
| `opencode-pm-gtm` | GTM strategy, motions, beachhead, ICP | Planowanie launchu |
| `opencode-pm-marketing` | North Star, positioning, naming, value props | Marketing i growth |

### Pi PM Agents (weryfikacja)

| Agent | Zakres | Użyj gdy |
|-------|--------|----------|
| `pi-pm-prd-review` | PRD quality review — completeness, clarity, risks | PRD gotowy do review |
| `pi-pm-strategy-check` | Strategy consistency check | Strategia gotowa do weryfikacji |
| `pi-pm-market-fit` | Solution-market fit evaluation | Przed developmentem |
| `pi-pm-discovery-audit` | Discovery process audit | Discovery zakończone |

## Jak delegować

Użyj `delegate_task` z Hermesa:

```python
# Przykład: delegacja discovery
delegate_task(
    goal="You are the AHE PM DISCOVER agent. Run a full discovery cycle.",
    context="Idea: AI meeting summarizer for remote teams. Target: SMB. Key problem: meeting overload.",
    toolsets=["web", "terminal", "file"]
)

# Przykład: delegacja PRD z weryfikacją
delegate_task(
    goal="You are the AHE PM PRD agent. Write an 8-section PRD.",
    context="Feature: SSO support for enterprise. Problem: manual user management.",
    toolsets=["terminal", "file"]
)
```

## Pipeline PM (pełny workflow)

1. **Discover** → `opencode-pm-discover`
2. **Verify discovery** → `pi-pm-discovery-audit`
3. **Strategy** → `opencode-pm-strategy`
4. **Verify strategy** → `pi-pm-strategy-check`
5. **PRD** → `opencode-pm-prd`
6. **Verify PRD** → `pi-pm-prd-review`
7. **Execution** → `opencode-pm-execution`
8. **Market fit check** → `pi-pm-market-fit`

## Integracja z PM Skills

Skills z tego profilu (Claude Code skills) służą jako szybkie referencje frameworków.
AHE agenci służą do głębokiej, wieloetapowej pracy.

**Kiedy skills, kiedy agent:**
- Szybkie pytanie o framework → użyj skilla PM (załadowany automatycznie)
- Głęboka analiza, dokument > 1 strona → deleguj do AHE agenta
- Potrzebujesz review/output weryfikacji → deleguj do Pi agenta
