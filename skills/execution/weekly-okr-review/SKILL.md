---
name: weekly-okr-review
description: "Cotygodniowy przegląd OKRów — sprawdź postęp, zidentyfikuj blokery, zaproponuj korekty. Uruchamiany automatycznie w poniedziałek 9:00."
metadata:
  hermes:
    tags: [blueprint, pm, execution, okr]
    blueprint:
      schedule: "0 9 * * 1"
      deliver: origin
      prompt: "Przeprowadź cotygodniowy przegląd OKRów. Sprawdź postęp, zidentyfikuj blokery, zaproponuj korekty na ten tydzień."
---

# Weekly OKR Review

Cotygodniowy przegląd postępu OKRów.

## Workflow

### Step 1: Sprawdź aktualne OKRy
- Poproś usera o aktualne OKRy (Objective + Key Results)
- Jeśli OKRy są w pliku, wczytaj go
- Zanotuj baseline i target dla każdego KR

### Step 2: Oceń postęp
- Dla każdego KR: czy jest na tracku? (green/yellow/red)
- Green: >70% progress, on track
- Yellow: 30-70%, zagrożony
- Red: <30%, bloker lub off track

### Step 3: Zidentyfikuj blokery
- Dla każdego czerwonego KR: co blokuje?
- Dla żółtych: co może pomóc?
- Zaproponuj konkretne akcje odblokowujące

### Step 4: Korekty
- Czy targety są nadal realisticzne?
- Czy priorytety się zmieniły?
- Czy potrzebne są nowe KR?

### Step 5: Raport

**Weekly OKR Review — [Date]**

| Objective | KR | Progress | Status | Blocker | Action |
|-----------|----|----------|--------|---------|--------|

**Key Actions This Week:**
1. ...
2. ...
