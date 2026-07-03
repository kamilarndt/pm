---
name: pm-ask-user
description: "JEDYNY dozwolony sposób zadawania pytań użytkownikowi. Zawsze używaj tego formatu. NIGDY nie pytaj inline w prozie."
metadata:
  hermes:
    tags: [interaction, user-input, communication, mandatory]
    priority: critical
    related_skills: [pm-discover, pm-create-prd, pm-plan-okrs, pm-new-project-kickoff]
---

# pm-ask-user — Standardized Question Format

## ZASADA ABSOLUTNA
NIGDY nie zadawaj pytań inline w prozie. ZAWSZE używaj tego formatu.

## Format

```
┌─ PYTANIE ───────────────────────────────────────┐
│ Kontekst: <krótki kontekst, 1-2 zdania>           │
│                                                   │
│ Q: <pytanie, jasne i konkretne>                   │
│                                                   │
│ [1] <opcja 1>                                     │
│ [2] <opcja 2>                                     │
│ [3] <opcja 3>                                     │
│ [0] Inne (wpisz własną odpowiedź)                 │
└───────────────────────────────────────────────────┘
```

## Typy pytań

### Typ 1: Wybór (z opcjami)
Gdy masz 2-4 konkretne opcje. Zawsze dodaj `[0] Inne`.

```
┌─ PYTANIE ───────────────────────────────────────┐
│ Kontekst: Planujemy discovery dla app do nauki.   │
│                                                   │
│ Q: Kto jest głównym użytkownikiem?                │
│                                                   │
│ [1] Studenci (18-25)                              │
│ [2] Profesjonaliści (25-40)                       │
│ [3] Dzieci (8-15) z rodzicami                     │
│ [0] Inne                                          │
└───────────────────────────────────────────────────┘
```

### Typ 2: Otwarte (bez opcji)
Gdy potrzebujesz opisowej odpowiedzi. Zawsze daj wskazówkę.

```
┌─ PYTANIE ───────────────────────────────────────┐
│ Kontekst: Rozpoczynam PRD dla funkcji onboarding. │
│                                                   │
│ Q: Opisz jak powinien wyglądać idealny onboarding │
│    dla nowego użytkownika (2-3 zdania).           │
│                                                   │
│ [0] Wpisz odpowiedź                               │
└───────────────────────────────────────────────────┘
```

### Typ 3: Potwierdzenie (tak/nie)
Gdy potrzebujesz zgody na kontynuację.

```
┌─ PYTANIE ───────────────────────────────────────┐
│ Kontekst: Mam 3 pomysły na eksperyment.           │
│                                                   │
│ Q: Przejść do szczegółowego planu eksperymentów?  │
│                                                   │
│ [1] Tak, planuj                                   │
│ [2] Nie, najpierw pokaż pomysły                   │
│ [0] Inne                                          │
└───────────────────────────────────────────────────┘
```

### Typ 4: Priorytetyzacja (ranking)
Gdy użytkownik ma ułożyć kolejność.

```
┌─ PYTANIE ───────────────────────────────────────┐
│ Kontekst: Mamy 4 funkcje w backlogu.              │
│                                                   │
│ Q: Ułóż w kolejności priorytetu (wpisz numery).   │
│                                                   │
│ [A] Auth + onboarding                             │
│ [B] Dashboard analytics                           │
│ [C] Export PDF                                    │
│ [D] Mobile responsive                             │
│                                                   │
│ Format: np. "A C B D"                             │
└───────────────────────────────────────────────────┘
```

## Kiedy pytać
- Brak kluczowej informacji do kontynuacji (cel, użytkownik, kontekst)
- Wieloznaczność — 2+ interpretacje możliwe
- Decyzja o kierunku (scope, priorytet, framework)
- Walidacja założeń przed drogą akcją

## Kiedy NIE pytać
- Można wywnioskować z kontekstu → załóż i kontynuuj
- Szczegóły, które nie blokują postępu
- Gdy odpowiedź jest w zadaniu użytkownika

## Zasady
1. JEDNO pytanie na raz — nie zadawaj 5 pytań naraz
2. Zawsze daj kontekst — użytkownik musi wiedzieć dlaczego pytasz
3. Zawsze dodaj `[0] Inne` — użytkownik musi móc podać własną odpowiedź
4. Po odpowiedzi — potwierdź zrozumienie i kontynuuj
5. Maks 3 pytania z rzędu — potem działaj z założeniami
