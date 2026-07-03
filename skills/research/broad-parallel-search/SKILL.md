---
name: broad-parallel-search
description: "Break down a research question into 6-12 sub-questions and execute parallel multi-source searches. Use when starting research, exploring a new topic, or gathering broad evidence."
metadata:
  hermes:
    tags: [research, search, methodology]
    related_skills: [deep-browse-extract, source-quality-evaluator]
---

# Broad Parallel Search

## When to Use
Uruchom ten skill gdy zaczynasz research — zanim zagłębisz się w pojedyncze źródła.

## Methodology

### Step 1: Decompose the Question
Rozbij główne pytanie na 6-12 sub-pytań:
- Różne perspektywy (techniczna, biznesowa, użytkownika)
- Różne timeframe'y (historical, current, future)
- Różne typy źródeł (web, academic, official, news)
- Potencjalne punkty kontradykcji

### Step 2: Formulate Queries
Dla każdego sub-pytania:
- 2-3 różne sformułowania (różne słowa kluczowe)
- Użyj site:, filetype:, -operator gdzie potrzebne
- Uwzględnij filtery czasu (past year, past month)

### Step 3: Parallel Execution
Wykonaj wszystkie zapytania równolegle:
- Użyj web_search z różnymi zapytaniami
- Dla każdego: limit=5-10
- Zbierz wszystkie wyniki

### Step 4: Initial Triage
Dla każdego wyniku oceń:
- Czy relevance do pytania? (high/medium/low)
- Jaki typ źródła? (primary/secondary/opinion)
- Czy potencjalnie wartościowe do deep dive?

### Step 5: Select for Deep Investigation
Wybierz top 8-15 źródeł:
- Priorytet: primary sources, official docs, academic papers
- Aktywnie szukaj źródeł z różnych perspektyw
- Włącz źródła które mogą być sprzeczne

## Output
Lista: Source URL | Type | Relevance | Why Selected | Potential Contradictions
