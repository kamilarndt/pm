---
name: weekly-retro-prompt
description: "Prompt do retrospektywy sprintu — zbierz co poszło dobrze, co do poprawy, action items. Uruchamiany automatycznie w piątek 15:00."
metadata:
  hermes:
    tags: [blueprint, pm, execution, retro]
    blueprint:
      schedule: "0 15 * * 5"
      deliver: origin
      prompt: "Przeprowadź retrospektywę sprintu. Zbierz co poszło dobrze, co do poprawy, action items."
---

# Weekly Retro Prompt

Strukturyzowana retrospektywa sprintu/tygodnia.

## Workflow

### Step 1: Ustaw kontekst
- Jaki sprint/tydzień?
- Jaki był cel?
- Kto uczestniczy?

### Step 2: Zbierz dane
Zapytaj o:
- Co zostało zrobione w tym tygodniu?
- Co się nie udało?
- Co było nieoczekiwane?

### Step 3: Structured Retro

**Start Doing** (co zacząć robić)
- ...

**Stop Doing** (co przestać robić)
- ...

**Continue Doing** (co kontynuować)
- ...

**Action Items** (konkretne kroki)
| # | Action | Owner | Deadline |
|---|--------|-------|----------|

### Step 4: Metrics
- Velocity/capacity
- Bug count
- Blocker time
- Co poprawiło się od ostatniego retro?

### Step 5: Save
Zapisz jako `retro-YYYY-MM-DD.md`
