---
name: pm-knowledge-base
description: "Zarządzanie wiedzą PM: zapis do bazy wiedzy, vaultu i Obsidian. Gdzie zapisać PRD, research, analizy, notatki."
metadata:
  hermes:
    tags: [product-management, knowledge, vault, obsidian]
    related_skills: [obsidian, daily-market-scan]
---

# PM Knowledge Base — Vault i Obsidian

## Folder Structure

```
/root/
├── 00-Inbox/          ← szybkie notatki, output agenta
├── 01-Labs/           ← eksperymenty, POC
├── 02-Projects/       ← aktywne projekty
├── 03-Knowledge/      ← BAZA WIEDZY (RAG, głównie czytanie)
│   ├── architecture-patterns/    ← wzorce architektoniczne
│   ├── business-domain/         ← wiedza domenowa
│   ├── prompts-library/         ← biblioteka promptów (275+)
│   ├── research-papers/         ← badania i publikacje
│   └── tech-stack-docs/         ← dokumentacja tech (369+)
├── 04-Archive/        ← archiwum
├── 05-Agents/         ← AHE framework
└── vaults/ahe-obsidian/ ← Obsidian vault (Google Drive mirror)
```

## Obsidian Vault — gdzie pisać

| Ścieżka | Uprawnienie | Kiedy użyć |
|---------|-------------|------------|
| `vaults/ahe-obsidian/00-Inbox/` | write | Szybkie notatki, output PM, tymczasowe |
| `vaults/ahe-obsidian/01-Daily/` | write | Daily notes, stan prac |
| `vaults/ahe-obsidian/02-Projects/` | write | Stan projektów (symlink → /root/02-Projects/) |
| `vaults/ahe-obsidian/04-Dashboards/` | write | Dashboardy PM, Dataview, Kanban |
| `vaults/ahe-obsidian/05-Agents/` | write | Konfiguracje agentów (symlink) |
| `vaults/ahe-obsidian/Brain/` | write | Brainstorming, analizy, video-reports |
| `vaults/ahe-obsidian/Templates/` | write | Nowe szablony Templater |
| `vaults/ahe-obsidian/03-Knowledge/` | **skill** | TYLKO przez strukturę z templatem |
| `vaults/ahe-obsidian/.obsidian/` | **never** | Nie dotykaj |
| `vaults/ahe-obsidian/Assets/` | **never** | Nie dotykaj |

## Zasady zapisu

1. **Zawsze sprawdź vault-guard.sh przed zapisem**:
   ```bash
   ~/.hermes/scripts/vault-guard.sh /root/vaults/ahe-obsidian/00-Inbox/notatka.md write
   ```

2. **PM research / framework → 03-Knowledge/architecture-patterns/**
   - Każdy plik MUSI mieć: frontmatter (title, tags, source, date)
   - minimum jeden H2 section
   - sekcja `## Źródła` na końcu
   - TYLKO do sub_paths: architecture-patterns, business-domain, research-papers

3. **Tymczasowe notatki → 00-Inbox/**
   - Dowolna treść, bez struktury
   - Sprzątaj po sobie: przenieś do docelowej lokalizacji lub usuń

4. **Analizy, strategie, PRDy → Brain/**
   - Pełna treść z citation i frameworkiem
   - Użyj formatu: `PM-[topic]-YYYY-MM-DD.md`

5. **Wiedza domenowa → 03-Knowledge/business-domain/**
   - Frontmatter: title, tags, source, date
   - Konkretna wartość merytoryczna

## Knowledge Base Template (dla 03-Knowledge/)

```markdown
---
title: "Nazwa notatki"
tags: [pm, kategoria]
source: "URL lub autor"
date: YYYY-MM-DD
---

## Cel
Co ta notatka opisuje, dlaczego jest ważna.

## Treść
Główna zawartość merytoryczna.

## Powiązane
- linki do innych notatek
- [[Wikilinks do vaultu]]

## Źródła
- [Źródło 1](URL)
- [Źródło 2](URL)
```

## Przykłady zapisu

**Po discovery:** `vaults/ahe-obsidian/Brain/PM-discovery-app-nauka-2026-07-03.md`

**Research rynku:** `03-Knowledge/research-papers/rynek-ai-coding-2026.md`

**Szybka notatka:** `vaults/ahe-obsidian/00-Inbox/pomysl-na-feature.md`

**Daily note:** `vaults/ahe-obsidian/01-Daily/2026-07-03.md`
