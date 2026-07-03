---
name: existing-project-audit
description: "Zbadaj istniejący projekt — przeanalizuj kod, strukturę, stan, konfigurację AHE i dokumentację z perspektywy PM. Użyj gdy wchodzisz do istniejącego projektu, potrzebujesz onboardu lub audytu."
metadata:
  hermes:
    tags: [product-management, project, audit, research, onboarding]
    related_skills: [new-project-kickoff, discover, pm-knowledge-base]
---

# Existing Project Audit — PM Onboarding

## Kiedy użyć
Gdy wchodzisz do istniejącego projektu — przejmujesz, audytujesz lub potrzebujesz zrozumieć co się dzieje.

## Workflow

### Step 1: Scan the Project Structure
Przeskanuj katalog projektu:
```bash
ls -la                            # pliki główne
ls <project>/                     # struktura
cat <project>/README.md           # dokumentacja
cat <project>/package.json        # zależności (JS)
cat <project>/pyproject.toml      # zależności (Python)
cat <project>/Cargo.toml          # zależności (Rust)
cat <project>/go.mod              # zależności (Go)
```

### Step 2: Check AHE/Agent Setup
- Czy projekt ma AHE harness? → `ls <project>/harness.yaml`
- Czy ma agentów? → `ls <project>/agents/`
- Czy ma workflow? → `ls <project>/.hermes/workflow/ 2>/dev/null`
- Jaki jest stan featureów? → `ahe status` jeśli CLI dostępne

### Step 3: Analyze Codebase (PM lens)
- **Tech stack** — z czego zbudowane?
- **Architektura** — frontend, backend, baza danych, API
- **Stan projektu** — czy jest aktywny? Ostatni commit?
- **Jakość** — czy są testy? Lint? CI/CD?
- **Dokumentacja** — czy jest README? Specyfikacje? Arch docs?

### Step 4: Analyze Business Context
- **Cel projektu** — co ten projekt robi? Dla kogo?
- **Faza** — development / beta / production / maintenance / martwy?
- **Zespół** — kto pracuje? Kto ostatnio commitował?
- **Stakeholderzy** — kto decyduje o kierunku?

### Step 5: Generate PM Audit Report
```markdown
## Project Audit: [Nazwa]

### Metadata
| Pole | Wartość |
|------|---------|
| Tech stack | ... |
| Ostatni commit | ... |
| Aktywni devs | ... |
| AHE harness | Tak/Nie |
| Testy | ... |
| Dokumentacja | ... |

### Stan
- **Co działa**: ...
- **Co jest nie tak**: ...
- **Ryzyka**: ...
- **Blokery**: ...

### Rekomendacje
1. ...
2. ...
3. ...

### Suggested Next Steps
- [ ] Uruchomić / sprawdzić
- [ ] Zaktualizować dokumentację
- [ ] Ustawić AHE harness
- [ ] Przeprowadzić discovery
```

### Step 6: Save
- Zapisz raport do `/root/vaults/ahe-obsidian/02-Projects/[nazwa]/audit-YYYY-MM-DD.md`
- Jeśli projekt nie istnieje w vault → utwórz wpis
