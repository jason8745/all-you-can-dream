# CLAUDE.md — all-you-can-dream

This file guides AI agents working on this repo. Read it before making any changes.

## What this repo is

A collection of self-contained HTML demo files, each showcasing an LLM concept. The site is hosted on GitHub Pages at https://jason8745.github.io/all-you-can-dream/.

## Structure

```
all-you-can-dream/
├── index.html          ← homepage, auto-renders from demos.json — DO NOT hardcode cards here
├── demos.json          ← ordered list of demo folder names
├── README.md
├── CLAUDE.md
└── <folder-name>/
    ├── meta.json       ← card metadata for the homepage
    └── *.html          ← the demo itself
```

## How the homepage works

`index.html` fetches `demos.json` at runtime, then fetches each folder's `meta.json`, and dynamically renders the card grid. **There are no hardcoded demo cards in index.html.**

## Rules

### Adding a new demo

1. Create a new folder with a short hyphenated name
2. Add the HTML demo file inside
3. Create `meta.json` with these exact fields:

```json
{
  "title": "Demo Title",
  "file": "filename.html",
  "description": "One or two sentences.",
  "date": "YYYY-MM-DD",
  "author": "github-username"
}
```

4. Add the folder name as a new line in `demos.json`

### What NOT to touch

- **`index.html`** — only modify if fixing a bug in the rendering logic, not to add demo content
- **Other contributors' folders** — each folder belongs to its author
- **`demos.json` reordering** — only append, don't reorder existing entries (breaks numbering)

### meta.json validation checklist

Before committing, verify:
- [ ] `title` — non-empty string
- [ ] `file` — matches the actual filename in the folder (case-sensitive)
- [ ] `description` — 1–2 sentences, no trailing period required
- [ ] `date` — ISO format YYYY-MM-DD
- [ ] `author` — GitHub username (no @)

### PR checklist

- [ ] New folder added with `meta.json` and at least one HTML file
- [ ] `demos.json` has the folder name appended (not inserted in the middle)
- [ ] No API keys, tokens, or personal data in any HTML file
- [ ] `index.html` was NOT modified (unless it's a bug fix PR)
- [ ] No other contributors' folders were modified
