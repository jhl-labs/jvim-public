---
title: Keymap — essentials (10)
description: The 10 shortcuts that get you 90% of the way. Memorize these first.
---

import KeymapTable from '../../../../components/KeymapTable.astro';

You don't need to learn 100 shortcuts. These 10 cover the common path.

<KeymapTable rows={[
  { keys: 'Ctrl+S', action: 'Save' },
  { keys: 'Ctrl+O', action: 'Open file (vault-wide fuzzy palette)' },
  { keys: 'Ctrl+E', action: 'Toggle editor ↔ file tree focus' },
  { keys: 'Ctrl+F', action: 'Find in document' },
  { keys: 'Shift+F4', action: 'Search across the entire vault' },
  { keys: 'F4', action: 'Command palette (run any command)' },
  { keys: 'F2', action: 'Outline overlay — jump to a heading' },
  { keys: 'F1', action: 'Help — searchable list of all shortcuts' },
  { keys: 'Ctrl+Q', action: 'Quit jvim' },
  { keys: 'Alt+A', action: 'Ask the AI about your selection or vault' },
]} />

Want more?

- [Full reference](/jvim-public/en/keymap/full/) — every shortcut, grouped by area
- [Printable cheatsheet](/jvim-public/en/keymap/cheatsheet/) — PDF / 4K PNG
