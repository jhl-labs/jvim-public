---
title: Migrate from Obsidian
description: If you came from Obsidian, here's the mapping for vault, wikilinks, tags, and graph.
---

If you already use Obsidian, jvim's mental model is the same: **markdown vault, wikilinks, tags, backlinks**.

## Concepts that map 1:1

| Obsidian | jvim |
|---|---|
| Vault folder | `jvim my-vault/` |
| `[[wikilink]]` | Same syntax. `[[` autocomplete. |
| `#tag` (inline or YAML) | `#tag` inline, autocomplete on `#`. F7 tag browser. |
| Backlinks panel | Built-in for each note. |
| Quick switcher (Ctrl+O) | `Ctrl+O` — same. |
| Command palette (Ctrl+P) | `F4` — same idea, slightly different name. |
| Search (Ctrl+Shift+F) | `Shift+F4` — full-text + tag + wikilink filters. |
| Daily notes / templates | Manual for now. Templates planned. |

## What's missing vs. Obsidian

- **Graph view** — no visual graph (yet)
- **Plugin marketplace** — jvim has no plugin system (yet)
- **Canvas / whiteboard** — text only
- **Web/mobile sync** — terminal-only
- **WYSIWYG preview pane** — jvim has live styling, no separate preview

## What's better vs. Obsidian

- **Terminal-native.** Works over SSH, in tmux, in containers, in CI.
- **Single binary.** No Electron, no node_modules.
- **Vim-style tree.** j/k/g/G in the file tree.
- **AI overlay with vault RAG built in** — no separate plugin install.
- **Semantic search Tier 2** — `sqlite-vec` based, scope-pickable.

## Vault import

jvim reads any folder of `.md` files. Drop your Obsidian vault and run `jvim ./my-vault/`.
Wikilinks and tags work immediately. No conversion required.

## Recommended first steps

1. [Getting started](/jvim-public/en/getting-started/)
2. [Wikilinks](/jvim-public/en/usage/wikilinks/) and [Tags](/jvim-public/en/usage/tags/)
3. [AI overlay](/jvim-public/en/usage/ai-overlay/) — set up your provider
