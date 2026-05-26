---
title: Git Integration
description: Track uncommitted changes in the status bar, browse per-file diff hunks, and run commit, push, pull, and fetch from inside jvim.
---

import AsciinemaPlayer from '../../../../components/AsciinemaPlayer.astro';
import KeymapTable from '../../../../components/KeymapTable.astro';

jvim treats a vault directory as a git repository. The status bar shows live diff counts for the current file, a dedicated panel lists per-file hunks, and the command palette exposes commit, push, pull, and fetch without leaving the editor. Under the hood jvim uses the system `git` binary — your existing credential helper, SSH agent, and GPG signing config all apply automatically.

<AsciinemaPlayer slug="git" title="Git: diff panel, commit, push, pull" />

## Live Diff in the Status Bar

While editing, the status bar header shows a live `+N / −M` count of added and removed lines relative to the last commit. The count updates each time you save. A zero count means the file is clean.

This indicator gives you a constant read on how far the working tree has drifted from HEAD without opening any overlay.

## Commit Log Overlay

`F5` (or `Ctrl+L`) opens the commit log overlay — a list of recent commits with author, short SHA, and commit message. Use it to review history or verify that a recent commit landed.

![Commit log overlay](../../../../assets/images/46-commit-log-f5.png)

<KeymapTable rows={[
  { keys: 'F5 / Ctrl+L', action: 'Open commit log', notes: 'Shows recent commits: author, SHA, message' },
  { keys: '↑ / ↓', action: 'Navigate entries', notes: 'Browse the commit list' },
  { keys: 'Esc', action: 'Close overlay', notes: 'Return to the editor' },
]} />

## Current-File Diff Hunk Panel

The diff hunk panel shows uncommitted changes in the current file broken into individual hunks — the same view you'd get from `git diff HEAD <file>`, rendered inline.

<KeymapTable rows={[
  { keys: 'Ctrl+P / F4', action: 'Open command palette', notes: 'Type "diff" to open the current-file diff panel' },
]} />

Each hunk shows the old and new lines side by side. Navigate hunks with arrow keys. The panel is read-only — changes are made in the editor buffer as normal and saved with `Ctrl+S`.

## Commit, Push, Pull, Fetch

Git operations are available through the command palette (`F4` or `Ctrl+P`). Type the operation name to filter:

- **commit** — stages all tracked changes and opens a prompt for the commit message.
- **push** — pushes the current branch to its upstream remote.
- **pull** — fetches and fast-forwards (`--ff-only`). If the local branch has diverged, the pull is refused rather than creating a merge commit. Rebase or reset manually before retrying.
- **fetch** — fetches from the remote without merging.

<KeymapTable rows={[
  { keys: 'F4 / Ctrl+P', action: 'Open command palette', notes: 'Type commit / push / pull / fetch to run git operations' },
]} />

Progress and errors appear as toast notifications in the status bar. A push that requires authentication will prompt via the system credential helper or SSH agent — jvim does not manage credentials itself.

## System Git Under the Hood

jvim shells out to the `git` binary found on your `PATH`. This means:

- Your `~/.gitconfig` (user name, email, signing key) is respected.
- SSH agent forwarding works without any extra configuration in jvim.
- GPG or SSH commit signing follows your existing git config.
- `.gitignore` files are honored for all git operations.

If `git` is not on your `PATH`, git integration is silently disabled and the diff indicator is not shown.

## Re-indexing After Checkout

The semantic index and wikilink graph are vault-aware and survive `git checkout` without corruption. If you switch branches and the vault contents change significantly, trigger a manual re-index:

<KeymapTable rows={[
  { keys: 'Ctrl+R', action: 'Re-index vault', notes: 'Rebuilds the full semantic index and link graph' },
]} />

## Related

- [Editor Basics](/jvim-public/en/usage/editor-basics/)
- [Keymap — full reference](/jvim-public/en/keymap/full/)
