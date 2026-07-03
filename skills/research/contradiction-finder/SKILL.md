---
name: contradiction-finder
description: "Identify contradictions, gaps, and alternative interpretations across sources. Use during synthesis to ensure intellectual honesty and surface disagreements rather than smoothing them over."
metadata:
  hermes:
    tags: [research, synthesis, contradictions]
    related_skills: [source-quality-evaluator, deep-browse-extract]
---

# Contradiction, Gap & Uncertainty Finder

## When to Use
Podczas syntezy (Phase 5) — po zebraniu i ocenie wszystkich źródeł.
Ten skill jest OBLIGATORY w research mode, nigdy nie pomijaj tej sekcji.

## Methodology

### Step 1: Map the Claims
Dla każdego sub-pytania:
- Wypisz wszystkie claims ze wszystkich źródeł
- Pogrupuj wg tematu
- Zanotuj które źródła wspierają który claim

### Step 2: Identify Contradictions
Szukaj:
- **Direct contradictions**: Source A says X, Source B says NOT X
- **Nuance differences**: Source A says "X is good", Source B says "X is good only if Y"
- **Scope differences**: Source A studied population P1, Source B studied P2
- **Methodology-driven differences**: Różne metody dają różne wyniki

### Step 3: Identify Gaps
- **Known unknowns**: Czego nikt nie zbadał?
- **Weak evidence**: Claims supported by only low-quality sources
- **Outdated evidence**: Ostatnie dane sprzed 3+ lat
- **Missing perspectives**: Brakuje perspektywy X (np. tylko USA, brak EU/Asia)

### Step 4: Assess Impact
Dla każdej kontradykcji:
- Czy to zmienia główną odpowiedź?
- Czy to nuance, czy fundamental disagreement?
- Która strona ma lepsze źródła (użyj source-quality-evaluator)?

### Step 5: Present Honestly
- Nie wygładzaj — pokaż sprzeczności jasno
- Daj wagę każdej stronie według quality score
- Jeśli nie wiesz która strona ma rację → powiedz to

## Output Structure (for final answer)

### Conflicting Evidence
| Claim | Evidence FOR | Evidence AGAINST | Resolution |
|-------|-------------|-----------------|------------|
| X | Source A (score 8) | Source B (score 6) | Likely X, but needs more data |

### Gaps & Uncertainties
- What remains unknown
- What evidence is weak
- What perspectives are missing

### Alternative Interpretations
- Other ways to read the same data
- What would change the conclusion
