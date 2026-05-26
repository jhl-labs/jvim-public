---
title: Getting started — 5 minutes
description: Install, create your first vault, write your first note, search, and try the AI overlay in 5 minutes.
---

import AsciinemaPlayer from '../../../components/AsciinemaPlayer.astro';

This guide takes you from zero to a working vault in 5 minutes.

## 1. Install (1 min)

```bash
npm install -g @jhl_labs/jvim
jvim --version    # expect: jvim 0.5.x
```

If `command not found`, see [install troubleshooting](/jvim-public/en/install/#troubleshooting).

## 2. Create your first vault (30 sec)

```bash
mkdir my-notes
jvim my-notes/
```

The file tree appears on the left (empty), editor on the right.

## 3. Write your first note (1 min)

In the editor, press `Ctrl+N` (new file). Type a filename: `welcome.md`. Then write:

```markdown
# Welcome

This is my first jvim note.

- [[ideas]] for things to write later
- #journal #setup
```

Press `Ctrl+S`. The status bar's `●` marker disappears — saved.

## 4. Navigate and search (1 min)

- `Ctrl+E` — toggle to the file tree. `j`/`k` to move, `Enter` to open.
- `Ctrl+O` — vault-wide fuzzy file finder.
- `Shift+F4` — search across all notes (full-text + tags + wikilinks).
- `F2` — outline of the current document (heading jump).

<AsciinemaPlayer slug="getting-started" title="The first 5 minutes" />

## 5. Ask the AI (1 min)

`Alt+A` opens the Ask panel. Type a question — it searches your vault first, then composes
an answer citing the source notes.

> You need an AI provider configured. By default jvim prompts on first use.
> See [AI overlay](/jvim-public/en/usage/ai-overlay/) for provider setup (OpenAI / Anthropic / local).

## What next?

- [Migrate from Notepad](/jvim-public/en/migrate-from/notepad/) · [vim](/jvim-public/en/migrate-from/vim/) · [Obsidian](/jvim-public/en/migrate-from/obsidian/)
- [Keymap essentials — 10 shortcuts](/jvim-public/en/keymap/essentials/)
- [FAQ](/jvim-public/en/faq/)
