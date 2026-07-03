---
name: deep-browse-extract
description: "Read full content of a high-value source and extract structured data, key claims, methodology, limitations, and further references. Use after broad-parallel-search selected candidate sources."
metadata:
  hermes:
    tags: [research, extraction, analysis]
    related_skills: [broad-parallel-search, source-quality-evaluator]
---

# Deep Browse & Structured Extract

## When to Use
Po tym jak broad-parallel-search wybrał 8-15 wartościowych źródeł.
Dla każdego źródła wykonaj pełną ekstrakcję.

## Methodology

### Step 1: Access Full Content
- Użyj web_extract do pobrania pełnej treści
- Dla PDFów/arXiv: podaj URL bezpośrednio
- Dla długich stron: użyj read_file do paginacji

### Step 2: Extract Structure
Dla każdego źródła wyekstrahuj:

**Metadata:**
- Title, author, publication date, publisher
- URL, DOI jeśli dostępne
- Typ źródła (research paper, news article, official doc, blog)

**Key Claims:**
- Główne twierdzenia i tezy autora
- Cytaty z datami i liczbami
- Wyniki badań i statystyki

**Methodology:**
- Jak autor doszedł do wniosków?
- Sample size, metody badawcze
- Ograniczenia przyznane przez autora

**Supporting Evidence:**
- Dane, wykresy, case studies
- Referencje do innych źródeł
- Linki do dalszej lektury

**Potential Issues:**
- Bias autora/wydawcy
- Braki w danych
- Konflikt interesów
- Daty które mogą być nieaktualne

### Step 3: Cross-Reference
- Zanotuj które claims pokrywają się z innymi źródłami
- Zanotuj które claims są sprzeczne

## Output
Per source: Structured notes with citations ready for synthesis.
