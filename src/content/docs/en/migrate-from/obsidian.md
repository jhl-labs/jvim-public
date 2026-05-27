---
title: Notes for Obsidian users
description: How jvim handles plain markdown folders, wikilinks, tags, and backlinks.
---

If you already keep notes as markdown files, jvim can work with the same folder. It supports familiar pieces such as **wikilinks, tags, and backlinks**, but it is a smaller terminal editor rather than an Obsidian replacement.

## Familiar concepts

| Obsidian | jvim |
|---|---|
| Vault folder | `jvim my-vault/` |
| `[[wikilink]]` | Same syntax. `[[` autocomplete. |
| `#tag` (inline or YAML) | `#tag` inline, autocomplete on `#`. F7 tag browser. |
| Backlinks panel | Available for each note. |
| Quick switcher (Ctrl+O) | `Ctrl+O` — same. |
| Command palette (Ctrl+P) | `F4` — same idea, slightly different name. |
| Search (Ctrl+Shift+F) | `Shift+F4` — full-text + tag + wikilink filters. |
| Daily notes / templates | Manual for now. Templates planned. |

## Not included

- **Graph view** — no visual graph (yet)
- **Plugin marketplace** — jvim has no plugin system
- **Canvas / whiteboard** — text only
- **Web/mobile sync** — terminal-only
- **WYSIWYG preview pane** — jvim has live styling, no separate preview

## jvim's focus

- **Terminal use.** Works over SSH, in tmux, in containers, and in CI-like environments.
- **Single binary.** No Electron or node_modules.
- **Keyboard file tree.** j/k/g/G in the file tree.
- **Optional AI overlay.** Can use vault search after a provider is configured.
- **Optional semantic search.** `sqlite-vec` support can be enabled for scoped indexing.

## Using an existing folder

jvim reads folders of `.md` files. You can point it at an existing markdown folder with `jvim ./my-vault/`.
Basic wikilinks and inline tags are recognized without a conversion step; Obsidian-specific plugin data and canvas files are outside jvim's scope.

## Recommended first steps

1. [Getting started](/jvim-public/en/getting-started/)
2. [Wikilinks](/jvim-public/en/usage/wikilinks/) and [Tags](/jvim-public/en/usage/tags/)
3. [AI overlay](/jvim-public/en/usage/ai-overlay/) — set up your provider
