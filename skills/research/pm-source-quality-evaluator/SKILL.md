---
name: source-quality-evaluator
description: "Score sources on authority, recency, relevance, methodological rigor, and bias risk. Use when selecting which sources to trust and how much weight to give them in synthesis."
metadata:
  hermes:
    tags: [research, evaluation, quality]
    related_skills: [broad-parallel-search, deep-browse-extract]
---

# Source Quality & Bias Evaluator

## When to Use
Gdy masz listę źródeł i potrzebujesz zdecydować którym ufać bardziej.
Użyj tego frameworku do scoringu każdego źródła.

## Scoring Framework

Oceń każde źródło w 5 kategoriach (1-10, gdzie 10 = najlepsze):

### 1. Authority (autorytet)
- 10: Oficjalny dokument rządowy, peer-reviewed journal, official spec
- 8: Renomowana instytucja (MIT, Stanford, WHO, NASA)
- 6: Uznany ekspert lub medium (Nature, Economist, NYT)
- 4: Blog ekspercki, średnia jakość medium
- 2: Nieznane źródło, forum, social media
- 1: Anonimowe, brak autora

### 2. Recency (aktualność)
- 10: Ostatnie 30 dni (dla szybko zmieniających się tematów)
- 8: Ostatnie 6 miesięcy
- 6: Ostatni rok
- 4: 1-3 lata
- 2: 3+ lat (dla szybkich tematów) lub 10+ lat (dla wolnych)
- 1: Nieznana data publikacji

### 3. Relevance (trafność)
- 10: Bezpośrednio odpowiada na pytanie badawcze
- 8: Mocno związane, ale nie centralne
- 6: Ogólnie związane
- 4: Tylko częściowo związane
- 2: Ledwo związane
- 1: Nietrafne

### 4. Methodological Rigor (rygor metodologiczny)
- 10: Meta-analysis, systematic review, RCT
- 8: Longitudinal study, large-N study, controlled experiment
- 6: Case study, qualitative research, survey
- 4: Expert opinion, thought piece
- 2: Anecdotal, personal experience
- 1: Brak metodologii, clickbait

### 5. Bias Risk (ryzyko błędu systematycznego)
- 10: Brak detectable bias, transparent methodology
- 8: Minimal bias, disclosure of interests
- 6: Umiarkowany bias (znany lean, ale solidne dane)
- 4: Wyraźny bias (polityczny, komercyjny)
- 2: Silny bias, propaganda, sponsored content
- 1: Dezinformacja, znana z manipulacji

## Final Score

**Composite = (Authority × 0.25) + (Recency × 0.20) + (Relevance × 0.30) + (Rigor × 0.15) + (Bias × 0.10)**

| Score | Trust Level |
|-------|-------------|
| 8.5-10 | High — strongly weight in synthesis |
| 6.5-8.4 | Good — use with moderate weight |
| 4.0-6.4 | Moderate — use cautiously, corroborate |
| < 4.0 | Low — avoid as primary evidence |

## Notes
- Bias score jest odwrócony (wyższy = mniej biasu)
- W research mode: uwzględniaj tylko źródła z score >= 4.0
- Dla kontradykcji: waż obie strony według score
