---
title: Find & Replace
description: Search within the current document, toggle case sensitivity, and replace all matches in a single step.
---

import AsciinemaPlayer from '../../../../components/AsciinemaPlayer.astro';
import KeymapTable from '../../../../components/KeymapTable.astro';

jvim's in-document search highlights matches in real time as you type and lets you step through them one by one. A separate replace-all dialog handles bulk substitutions without leaving the keyboard.

<AsciinemaPlayer slug="find-replace" title="Find & Replace: search, case toggle, replace-all" />

## In-Document Search

Press `Ctrl+F` to open the search overlay. Start typing and every match in the current buffer is highlighted immediately. A match counter in the overlay shows how many occurrences were found.

![Search overlay with case-sensitivity toggle active](../../../../assets/images/48-search-case-toggle.png)

<KeymapTable rows={[
  { keys: 'Ctrl+F', action: 'Open search overlay', notes: 'Starts a live search in the current buffer' },
  { keys: 'Enter', action: 'Next match', notes: 'Jump forward to the next occurrence' },
  { keys: 'Shift+Enter', action: 'Previous match', notes: 'Jump backward to the previous occurrence' },
  { keys: 'Esc', action: 'Close search', notes: 'Dismiss the overlay; highlights clear' },
]} />

## Case Sensitivity Toggle

By default, search is case-insensitive. Press `Tab` inside the search overlay to toggle case sensitivity. When case-sensitive mode is active, an `Aa` badge appears in the status bar.

<KeymapTable rows={[
  { keys: 'Tab', action: 'Toggle case sensitivity', notes: 'Aa badge in status bar indicates case-sensitive mode is on' },
]} />

Toggling immediately re-runs the search with the current query, so the match count and highlights update at once.

## Replace All

`Ctrl+T` opens the replace-all dialog. It prompts for two strings — the search term and the replacement — then substitutes every occurrence in the buffer in one operation.

<KeymapTable rows={[
  { keys: 'Ctrl+T', action: 'Open replace-all dialog', notes: 'Enter search string, then replacement string, then confirm' },
]} />

The replacement is applied to the in-memory buffer. Review the result before saving with `Ctrl+S`. If the result is not what you intended, `Ctrl+Z` undoes the entire replacement in one step.

## Related

- [Vault Search](/jvim-public/en/usage/vault-search/)
- [Formatting](/jvim-public/en/usage/formatting/)
- [Keymap — full reference](/jvim-public/en/keymap/full/)
