---
name: add-demo
description: Use when adding a new LLM demo to this repo. Guides folder creation, meta.json setup, demos.json update, and pre-PR validation.
type: project
---

# Add Demo Skill

Use this skill whenever someone wants to add a new demo to llm-ideas-brain.

## Step 1 — Determine folder name

Ask the user for:
- A short hyphenated folder name (e.g. `rag-visualizer`, `prompt-diff`)
- The HTML file to include (or confirm it already exists)

Folder name rules:
- lowercase, hyphens only, no spaces
- descriptive of the concept, not the author

## Step 2 — Create folder structure

```
<folder-name>/
├── meta.json
└── <demo>.html
```

If the HTML file already exists, move/copy it into the folder.

## Step 3 — Create meta.json

Prompt the user for any missing fields, then write `<folder-name>/meta.json`:

```json
{
  "title": "<Demo Title>",
  "file": "<filename.html>",
  "description": "<1-2 sentences>",
  "date": "<YYYY-MM-DD>",
  "author": "<github-username>"
}
```

## Step 4 — Update demos.json

Append the folder name to the array in `demos.json`. Only append — do not reorder existing entries.

## Step 5 — Validate before PR

從 repo 根目錄執行：

```bash
node scripts/validate.js
```

確認輸出是 `✓ All N demo(s) valid` 再繼續。

若有錯誤，依照訊息修正後重新執行，直到通過。

另外手動確認：
- [ ] No API keys or tokens in the HTML: `grep -i "sk-ant\|apikey\|secret\|password" <folder>/*.html`
- [ ] `index.html` was NOT modified
- [ ] No other contributors' folders were modified

## Step 6 — Commit

```bash
git add <folder-name>/ demos.json
git commit -m "feat: add <demo-title> demo"
```

Do NOT include `index.html` in the commit unless explicitly fixing a rendering bug.
