---
title: Keymap — full reference
description: Every jvim shortcut, grouped by area.
---

import KeymapTable from '../../../../components/KeymapTable.astro';

Every shortcut, grouped by area. For a 10-shortcut starter set, see
[essentials](/jvim-public/en/keymap/essentials/).

## Global

<KeymapTable rows={[
  { keys: 'Ctrl+Q', action: 'Quit jvim (prompt on dirty)' },
  { keys: 'Ctrl+C / V / X', action: 'Copy / paste / cut' },
  { keys: 'F1', action: 'Toggle keymap overlay' },
  { keys: 'F10 / Ctrl+K', action: 'Settings overlay' },
  { keys: 'Ctrl+P / F4', action: 'Command palette' },
  { keys: 'Ctrl+F', action: 'In-document find (Tab: case)' },
  { keys: 'Ctrl+T', action: 'Replace-all' },
  { keys: 'Shift+F4', action: 'Vault-wide search' },
  { keys: 'Shift+F3', action: 'Go to line' },
]} />

## Editor — editing

<KeymapTable rows={[
  { keys: 'Ctrl+N', action: 'New buffer' },
  { keys: 'Ctrl+W', action: 'Close current document' },
  { keys: 'Ctrl+O', action: 'File palette' },
  { keys: 'Ctrl+S / F3', action: 'Save' },
  { keys: 'Alt+F / Alt+Shift+F', action: 'Format doc / selection' },
  { keys: 'Ctrl+A / X', action: 'Select all / cut' },
  { keys: 'Ctrl+Z / Y', action: 'Undo / redo' },
  { keys: 'Tab / Shift+Tab', action: 'Indent / outdent (VSCode style)' },
  { keys: 'Backspace / Del', action: 'Delete char' },
  { keys: 'Enter', action: 'Insert newline' },
  { keys: 'Esc', action: 'Clear selection' },
]} />

## Editor — navigation

<KeymapTable rows={[
  { keys: 'Arrows', action: 'Move cursor' },
  { keys: 'Ctrl+← / →', action: 'Word jump' },
  { keys: 'Home / End', action: 'Line start / end' },
  { keys: 'Ctrl+Home / End', action: 'Doc start / end' },
  { keys: 'Ctrl+U / D', action: 'Page up / down' },
  { keys: 'Shift+<nav>', action: 'Extend selection' },
  { keys: 'Ctrl+E / Tab*', action: 'Tree ↔ editor focus (Tab when tree focused)' },
  { keys: 'Ctrl+PgUp / PgDn', action: 'Previous / next open document tab' },
  { keys: 'Ctrl+Shift+→ / ←', action: 'Select word / cycle buffer from tree' },
]} />

## Document tools

<KeymapTable rows={[
  { keys: 'F2', action: 'Outline (headings)' },
  { keys: 'F7', action: 'Tag browser' },
  { keys: 'F8', action: 'Outbound links' },
  { keys: 'Ctrl+B', action: 'Backlink graph' },
  { keys: '#<prefix>', action: 'Tag autocomplete' },
  { keys: '[[<prefix>', action: 'Wikilink autocomplete' },
]} />

## AI & knowledge

<KeymapTable rows={[
  { keys: 'Alt+/ / Ctrl+/', action: 'AI context menu' },
  { keys: 'F6', action: 'AI prompt overlay (Ask/Insert/Rewrite)' },
  { keys: 'Alt+I / F9', action: 'Toggle inline completion' },
  { keys: 'Tab / → / Ctrl+→', action: 'Accept ghost text (full / word)' },
]} />

## Index & Git

<KeymapTable rows={[
  { keys: 'Ctrl+R', action: 'Full re-index' },
  { keys: 'Ctrl+L / F5', action: 'Commit log' },
  { keys: 'Shift+F5', action: 'Semantic index scope (outside overlays)' },
  { keys: 'F11', action: 'Toggle favorite' },
]} />

## File tree

<KeymapTable rows={[
  { keys: 'j / k / ↓ / ↑', action: 'Move selection' },
  { keys: 'g / G', action: 'Top / bottom' },
  { keys: 'Enter', action: 'Open file' },
  { keys: 'n', action: 'New file' },
  { keys: 'r', action: 'Rename' },
  { keys: 'd', action: 'Delete (with confirm)' },
  { keys: '/ or type', action: 'Type-to-filter' },
  { keys: 'q', action: 'Release focus' },
]} />

## Overlay common

<KeymapTable rows={[
  { keys: '↑ / ↓', action: 'Move highlight' },
  { keys: 'Enter', action: 'Accept / open' },
  { keys: 'Esc', action: 'Dismiss' },
  { keys: 'Tab', action: 'Toggle option (case in find)' },
]} />
