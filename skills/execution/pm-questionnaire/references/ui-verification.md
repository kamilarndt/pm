# UI Verification — PM Questionnaire

## Jak przetestować UI bez Next.js?

### 1. Przygotuj środowisko
```bash
# Stwórz tymczasowy projekt Next.js
mkdir -p /tmp/pm-questionnaire && cd /tmp/pm-questionnaire
npx create-next-app@latest . --typescript --tailwind --eslint

# Zainstaluj zależności
npm install @radix-ui/react-progress @radix-ui/react-radio-group @radix-ui/react-checkbox
```

### 2. Skopiuj pliki skilla
```bash
# Skopiuj komponent UI
cp /root/.hermes/profiles/pm/skills/pm-questionnaire/ui/DynamicForm.tsx ./components/

# Skopiuj przykładowy zestaw pytań
cp /root/.hermes/profiles/pm/skills/pm-questionnaire/questions/pm-weekly-checkin.json ./data/
```

### 3. Stwórz stronę testową
```bash
cat > ./pages/index.tsx << "EOF"
import { DynamicForm } from '../components/DynamicForm';
import pmWeeklyCheckin from '../data/pm-weekly-checkin.json';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] p-8">
      <DynamicForm questionnaire={pmWeeklyCheckin} />
    </div>
  );
}
EOF
```

### 4. Uruchom
```bash
npm run dev
```
- Otwórz `http://localhost:3000` w przeglądarce.

---

## Oczekiwane zachowanie
| Element | Oczekiwany wynik |
|---------|------------------|
| **Pierwsze pytanie** | Renderuje się `textarea` z placeholderem: *"Np. 'Zakończyć research konkurencji'"*. |
| **Progress bar** | Pokazuje **20%** (1/5 pytań). |
| **Przyciski** | "Dalej" działa, "Wstecz" jest nieaktywny (na pierwszym pytaniu). |
| **Logika warunkowa** | Pytanie o blokery (*"Opisz blokery"*) pojawia się **tylko** po wybraniu "Tak". |
| **Rekomendacje** | Generują się na podstawie odpowiedzi (np. *"Zalecam JTBD + OKRs"*). |
| **Integracja z Hermesem** | Po zakończeniu quizu, wyniki zapisują się do `memory` (sprawdź w konsoli). |

---

## Typowe problemy i rozwiązania

### 1. **Brak klucza sesji Hermes**
- **Objaw**: Błędy w konsoli: *"403 Forbidden"* lub *"Invalid session key"*.
- **Rozwiązanie**:
  ```typescript
  // W DynamicForm.tsx, zastąp:
  headers: { 'X-Hermes-Session-Key': 'YOUR_SESSION_KEY' }
  // na:
  headers: { 'X-Hermes-Session-Key': process.env.NEXT_PUBLIC_HERMES_KEY }
  ```
  - Dodaj zmienną środowiskową w `.env.local`:
    ```
    NEXT_PUBLIC_HERMES_KEY=twój_klucz_sesji
    ```

### 2. **CORS (Cross-Origin Requests Blocked)**
- **Objaw**: Błędy w konsoli: *"Access to fetch at 'http://localhost:8642/api/memory' from origin 'http://localhost:3000' has been blocked by CORS policy"*.
- **Rozwiązanie**:
  - Upewnij się, że Hermes Gateway akceptuje żądania z `http://localhost:3000`.
  - W konfiguracji Hermesa (`config.yaml`), dodaj:
    ```yaml
    cors:
      allowed_origins: ["http://localhost:3000"]
    ```

### 3. **Brak zależności shadcn/ui**
- **Objaw**: Błędy w konsoli: *"Module not found: Can't resolve '@radix-ui/react-progress'"*.
- **Rozwiązanie**:
  ```bash
  npm install @radix-ui/react-progress @radix-ui/react-radio-group @radix-ui/react-checkbox
  ```

### 4. **Logika warunkowa nie działa**
- **Objaw**: Pytanie o blokery pojawia się nawet po wybraniu "Nie".
- **Rozwiązanie**:
  - Sprawdź strukturę `showIf` w `pm-weekly-checkin.json`:
    ```json
    "showIf": {
      "question": "blockers",
      "answer": "Tak"
    }
    ```
  - Upewnij się, że `answers[question]` w `DynamicForm.tsx` zwraca poprawną wartość.

---

## Jak sprawdzić integrację z Hermesem?

### 1. **Zapis do `memory`**
- Po zakończeniu quizu, sprawdź w konsoli:
  ```bash
  curl -X GET "http://localhost:8642/api/memory?target=user" -H "X-Hermes-Session-Key: YOUR_KEY"
  ```
  - Powinieneś zobaczyć wpis:
    ```json
    {
      "content": "PM Check-in: {...}"
    }
    ```

### 2. **Delegacja zadań**
- Jeśli wybrano JTBD, sprawdź w konsoli Hermesa:
  ```bash
  hermes kanban list
  ```
  - Powinno pojawić się nowe zadanie:
    ```
    Goal: Stwórz JTBD dla feature'u X
    Context: Cele: Y, Blokery: Z
    ```

---

## Przykładowy flow testowy
1. **Odpowiedz na pytania**:
   - Cele: *"Zakończyć research konkurencji"*.
   - Blokery: *"Tak"* → Opisz: *"Brak dostępu do API konkurencji od 2 dni"*.
   - Frameworki: *"JTBD", "OKRs"*.

2. **Sprawdź rekomendacje**:
   - Powinno pojawić się:
     - *"Zalecam JTBD dla zrozumienia potrzeb użytkowników + OKRs dla celów kwartalnych."*
     - *"Zalecam priorytetyzację blokad — użyj frameworku RICE do oceny wpływu."*

3. **Sprawdź integrację z Hermesem**:
   - Wyniki powinny zapisać się do `memory`.
   - Zadanie *"Stwórz JTBD dla feature'u X"* powinno pojawić się w kanbanie Hermesa.

---

*Instrukcje stworzone na podstawie konwersacji z 2026-07-03.*