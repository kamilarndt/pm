---
name: daily-market-scan
description: "Codzienny skan rynku i konkurencji — sprawdź newsy, wydarzenia, zmiany w konkurencyjnych produktach. Uruchamiany automatycznie codziennie 7:00."
metadata:
  hermes:
    tags: [blueprint, pm, market-research, competitive]
    blueprint:
      schedule: "0 7 * * *"
      deliver: origin
      prompt: "Przeprowadź codzienny skan rynku. Sprawdź najnowsze newsy, wydarzenia, zmiany konkurencyjne."
---

# Daily Market Scan

Codzienny monitoring rynku i konkurencji.

## Workflow

### Step 1: Zidentyfikuj obszary skanu
Zapytaj usera o:
- Główny rynek / kategoria produktu
- Kluczowi konkurenci do monitorowania
- Tematy do śledzenia (fundraising, M&A, nowe produkty, regulatory)

### Step 2: Parallel search
- Wiadomości branżowe (ostatnie 24h)
- Konkurenci (blogi, newsy, product hunt, changelogi)
- Nowe fundingi i przejęcia

### Step 3: Synteza
- Co się zmieniło od ostatniego skanu?
- Co wymaga reakcji?
- Co to oznacza dla naszego produktu?

### Step 4: Raport

**Daily Market Scan — [Date]**

**Key Events:**
- [Event 1] — [implication]
- [Event 2] — [implication]

**Competitor Moves:**
- [Competitor] — [what changed]

**Recommended Actions:**
- ...
