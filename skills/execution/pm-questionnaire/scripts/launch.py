#!/usr/bin/env python3
"""pm-questionnaire launcher — embeds JSON question set into HTML and opens in browser."""
import json
import os
import sys
import tempfile
import subprocess

SKILL_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
HTML_TEMPLATE = os.path.join(SKILL_DIR, "static", "pm-questionnaire.html")
QUESTIONS_DIR = os.path.join(SKILL_DIR, "questions")


def load_question_set(path_or_json):
    """Load from file path or inline JSON string."""
    if path_or_json.startswith("{"):
        return json.loads(path_or_json)
    if not path_or_json.endswith(".json"):
        path_or_json += ".json"
    full_path = os.path.join(QUESTIONS_DIR, path_or_json) if not os.path.isabs(path_or_json) else path_or_json
    with open(full_path) as f:
        return json.load(f)


def embed_and_open(question_set):
    """Embed question set into HTML and open in browser."""
    with open(HTML_TEMPLATE) as f:
        html = f.read()

    # Inject JSON before the script
    json_js = f"window.__QUESTIONNAIRE__ = {json.dumps(question_set, ensure_ascii=False)};"
    html = html.replace("<script>", f"<script>\n{json_js}\n", 1)

    # Write to temp file
    tmp = tempfile.NamedTemporaryFile(suffix=".html", delete=False, mode="w", encoding="utf-8")
    tmp.write(html)
    tmp.close()

    print(f"Questionnaire: {question_set.get('title', 'Custom')}")
    print(f"Questions: {len(question_set.get('questions', []))}")
    print(f"File: {tmp.name}")
    print(f"Opening in browser...")

    # Open in browser
    try:
        subprocess.run(["wslview", tmp.name], check=False, timeout=5)
    except FileNotFoundError:
        try:
            subprocess.run(["xdg-open", tmp.name], check=False, timeout=5)
        except FileNotFoundError:
            try:
                # WSL fallback — use Windows explorer.exe
                import subprocess as sp
                wsl_path = sp.check_output(["wslpath", "-w", tmp.name], text=True).strip()
                sp.run(["explorer.exe", wsl_path], check=False, timeout=5)
            except Exception:
                print(f"Could not auto-open. Open manually: {tmp.name}")

    return tmp.name


def main():
    if len(sys.argv) < 2:
        # List available question sets
        print("Available question sets:")
        if os.path.isdir(QUESTIONS_DIR):
            for f in sorted(os.listdir(QUESTIONS_DIR)):
                if f.endswith(".json"):
                    name = f.replace(".json", "")
                    try:
                        with open(os.path.join(QUESTIONS_DIR, f)) as fh:
                            data = json.load(fh)
                        print(f"  {name:30s} — {data.get('title', '?')}")
                    except Exception:
                        print(f"  {name:30s} — (error)")
        print()
        print("Usage:")
        print(f"  {sys.argv[0]} <set-name>          # Launch named set")
        print(f"  {sys.argv[0]} --custom '{{json}}'  # Launch custom set")
        print(f"  {sys.argv[0]} --list              # List sets")
        return

    arg = sys.argv[1]
    if arg == "--list":
        os.system(f"{sys.argv[0]}")
        return

    if arg == "--custom" and len(sys.argv) > 2:
        qs = load_question_set(sys.argv[2])
    else:
        qs = load_question_set(arg)

    embed_and_open(qs)


if __name__ == "__main__":
    main()
