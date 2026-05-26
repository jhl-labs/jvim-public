---
title: Migrate from vim / neovim
description: If you came from vim, here's what's the same, what's different, and what's missing.
---

import KeymapTable from '../../../components/KeymapTable.astro';

jvim is **not** a vim clone. It's a Notepad-shaped editor with vim's tree navigation.

## What's the same

In the **file tree** (Ctrl+E to focus):

<KeymapTable rows={[
  { keys: 'j / k', action: 'Down / Up' },
  { keys: 'g / G', action: 'Top / Bottom' },
  { keys: 'n', action: 'New file' },
  { keys: 'r', action: 'Rename' },
  { keys: 'd', action: 'Delete (with confirm)' },
  { keys: '/', action: 'Type-to-filter (or just start typing)' },
  { keys: 'Enter', action: 'Open file' },
  { keys: 'q', action: 'Return to editor' },
]} />

In the **editor body** — Notepad semantics, no modes:

- No `i` to enter insert mode — you're already there.
- No `:wq` — `Ctrl+S` and `Ctrl+Q`.
- No `dd / yy / p` — `Ctrl+X / Ctrl+C / Ctrl+V` with `Shift+Arrow` selection.

## What's missing

- Modal editing (insert / normal / visual / command)
- vim regex search (`:%s/...`)
- ex commands (`:set`, `:bd`, etc.)
- vim plugins (jvim has no plugin system — yet)
- Custom keymaps via `init.vim`
- Macros (`q` recording)

## What's different but better

- **Vault as first class.** Folder-based, with backlinks and tag browser.
- **Full-text search out of the box.** Shift+F4 — no plugin install.
- **AI overlay built in.** Alt+A — Ask/Insert/Rewrite with vault RAG.
- **Single binary.** No package manager, no `plug.vim`, no init.lua.

## Recommended first steps

1. [Getting started](/jvim-public/en/getting-started/)
2. [File tree](/jvim-public/en/usage/file-tree/) — the only place vim keys still apply
3. [Keymap full reference](/jvim-public/en/keymap/full/)
