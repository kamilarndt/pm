# PM Agent — Hermes Profile Distribution

Kompletny agent Product Management dla Hermes.
114 skilli PM + 4 skille researchowe + 3 cron automations.

## Instalacja

```bash
hermes profile install github.com/kamilarndt/pm --alias
```

Po instalacji skopiuj `.env.EXAMPLE` do `.env` i uzupełnij klucze API.

## Użycie

```bash
# Rozmowa
pm chat

# Jednorazowe pytanie
pm chat -q "Przeprowadź discovery dla pomysłu na app do nauki języków"

# Research
pm chat -q "Zbadaj rynek AI coding assistantów w 2026"

# Lub przez flagę -p
hermes -p pm chat
```

## Zawartość

| Kategoria | Skills | Opis |
|-----------|-------:|------|
| research | 4 | Multi-source research methodology |
| product-discovery | 18 | Ideation, experiments, assumption testing, interviews |
| product-strategy | 17 | Vision, canvas, SWOT, PESTLE, Ansoff, Porter, pricing |
| execution | 27 | PRDs, OKRs, roadmaps, sprints, pre-mortems, stories |
| market-research | 10 | Personas, segmentation, competitive analysis, sizing |
| data-analytics | 6 | Cohort analysis, A/B testing, SQL queries |
| go-to-market | 9 | GTM strategy, ICP, growth loops, battlecards |
| marketing-growth | 7 | Positioning, North Star, naming, value props |
| toolkit | 9 | Resume review, NDA, privacy policy, grammar |
| ai-shipping | 7 | Documentation, security/performance audit, shipping |
| **Total** | **114** | |

## Automatyzacje (blueprint skills)

Instalacja sugeruje 3 cron joby (akceptuj przez `/suggestions accept`):
- **weekly-okr-review** — pon. 9:00 przegląd OKR
- **daily-market-scan** — codz. 7:00 skan rynku
- **weekly-retro-prompt** — pt. 15:00 prompt do retrospektywy

## Aktualizacja

```bash
hermes profile update pm
```

Twoje .env, pamięć i sesje są zachowane.

## Źródła

- PM Skills: [phuryn/pm-skills](https://github.com/phuryn/pm-skills) by Paweł Huryn
- Hermes: [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)
