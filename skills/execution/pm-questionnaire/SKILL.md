---
name: pm-questionnaire
description: "JEDYNY dozwolony sposób zadawania pytań użytkownikowi. Interaktywny HTML questionnaire — jedno pytanie na ekran, logika warunkowa, JSON output do wklejenia w terminal. NIGDY nie pytaj inline w prozie."
metadata:
  hermes:
    tags: [interaction, user-input, mandatory, ui]
    priority: critical
    related_skills: [pm-discover, pm-create-prd, pm-new-project-kickoff, pm-plan-okrs]
---

# pm-questionnaire — Interaktywny System Pytań

## ZASADA ABSOLUTNA
NIGDY nie zadawaj pytań inline w prozie. ZAWSZE używaj tego narzędzia.

## Jak działa
1. PM Agent generuje question set JSON (lub używa gotowego)
2. Zapisuje HTML z embedded JSON do temp file
3. Otwiera w przeglądarce (`xdg-open` / `wslview`)
4. User wypełnia → klika "Skopiuj do schowka"
5. User wkleja JSON w terminalu
6. PM Agent parsuje JSON i kontynuuje

## Workflow (dla PM Agenta)

### Step 1: Wybierz question set
Gotowe zestawy w `questions/`:
- `pm-weekly-checkin.json` — cotygodniowy check-in
- `pm-new-project-kickoff.json` — start nowego projektu
- `pm-discovery.json` — discovery dla nowego pomysłu

### Step 2: Uruchom questionnaire
```bash
# Opcja A: Użyj gotowego zestawu
python3 ~/.hermes/profiles/pm/skills/pm-questionnaire/scripts/launch.py questions/pm-discovery.json

# Opcja B: Wygeneruj custom zestaw (embed JSON w HTML)
python3 ~/.hermes/profiles/pm/skills/pm-questionnaire/scripts/launch.py --custom '{"id":"custom","title":"Custom","questions":[...]}'
```

### Step 3: Komunikat do użytkownika
```
┌─ PYTANIE ───────────────────────────────────────┐
│ Otworzyłem questionnaire w przeglądarce.          │
│ Wypełnij i kliknij "Skopiuj do schowka".          │
│ Następnie wklej JSON tutaj (Ctrl+Shift+V).        │
└───────────────────────────────────────────────────┘
```

### Step 4: Parsuj odpowiedź
Gdy użytkownik wklei JSON:
```python
import json
answers = json.loads(user_input)
# answers = {"goals": "...", "blockers": "Tak", ...}
```

## Format question set JSON
```json
{
  "id": "string",
  "title": "string",
  "description": "string",
  "questions": [
    {
      "id": "unique-id",
      "question": "Treść pytania",
      "hint": "Podpowiedź (opcjonalnie)",
      "type": "textarea | text | radio | checkbox",
      "required": true,
      "placeholder": "Np. ...",
      "options": ["Opcja 1", "Opcja 2"],
      "showIf": { "question": "other-q-id", "answer": "Tak" }
    }
  ],
  "recommendations": [
    {
      "if": { "question": "q-id", "answer": "Tak" },
      "then": "Rekomendacja..."
    }
  ]
}
```

## Typy pytań
| Typ | Użycie | Example |
|-----|--------|---------|
| `textarea` | Otwarte, opisowe | "Opisz problem..." |
| `text` | Krótka odpowiedź | "Nazwa projektu?" |
| `radio` | 1 z N opcji | "Tak/Nie", wybór frameworka |
| `checkbox` | N z N opcji | "Wybierz wszystkie które..." |

## Logika warunkowa
`showIf` — pytanie pojawia się tylko gdy odpowiedź na inne pytanie spełnia warunek:
```json
"showIf": { "question": "blockers", "answer": "Tak" }
```

## Kiedy pytać
- Brak kluczowej informacji (cel, użytkownik, kontekst)
- Wieloznaczność — 2+ interpretacje
- Decyzja o kierunku (scope, priorytet, framework)
- Walidacja założeń

## Kiedy NIE pytać
- Można wywnioskować z kontekstu
- Szczegóły nieblokujące
- Odpowiedź jest w zadaniu

## Zasady
1. Jedno pytanie na ekran — nie bombast użytkownika
2. Zawsze daj kontekst (title + description)
3. Maks 8 pytań w zestawie
4. Required oznacz gwiazdką *
5. Po odpowiedzi — potwierdź i kontynuuj
