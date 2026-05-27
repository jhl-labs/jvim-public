# Changelog

All notable changes to jvim will be documented in this file.

The format is based on [Keep a Changelog 1.1.0](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning 2.0.0](https://semver.org/spec/v2.0.0.html).

Release-process expectations, support windows, and versioning guarantees live in [`docs/ops/changelog.md`](./docs/ops/changelog.md) and [`docs/ops/support-policy.md`](./docs/ops/support-policy.md).

## Conventions

- **Added** — new features.
- **Changed** — changes in existing functionality.
- **Deprecated** — soon-to-be removed features.
- **Removed** — removed features.
- **Fixed** — bug fixes.
- **Security** — vulnerability fixes; always call these out even for small issues.
- **Performance** — measurable perf wins (include before/after where possible).
- **Docs** — user-facing documentation changes worth surfacing.

Every PR MUST add an entry under `[Unreleased]` unless it is a pure internal refactor (tests, CI, typo). The PR template enforces this.

## [Unreleased]

## [0.5.4] — 2026-05-27

### Added

- **TUI setup wizard.** First-run/provider setup is now available from inside the settings flow, with IME-safe text input for provider IDs, base URLs, and custom headers.
- **Current-file diff hunks in the Git panel.** The Git workflow overlay can now open a focused diff view for the active file.

### Fixed

- **Settings inputs no longer eat provider shortcut keys as commands.** Provider fields now treat normal text as text, including shortcut-looking letters.
- **Provider role fields are constrained to valid values.** Invalid role/config values are normalized before they can break settings flows.
- **AI context-menu rewrite failures are surfaced clearly** instead of silently failing.
- **IME coalesced chunks no longer insert raw control characters.** Fast Korean/CJK input paths drop control bytes and keep only the committed text.
- **Wrapped selection highlights stay within the viewport.** Multi-line selections on wrapped rows no longer bleed into unrelated rows.
- **Short documents and empty/sparse trees fill the terminal with vim-style `~` rows** instead of leaving unstable blank space.
- **Effective settings scroll on short terminals** so the panel remains navigable in compact layouts.

### Performance

- **Editor viewport rendering avoids redundant truncation and caches visible slice wrap counts.** Large-file cursor movement and repeated visible-row reads are materially cheaper.

### Docs

- **Astro Starlight docs site promoted with this app release.** The public docs now use the rebuilt bilingual site, updated release metadata, and re-recorded workflow asciicasts.

## [docs-v1.0.0] — 2026-05-27

### Docs

- **Documentation site rewritten from Jekyll to Astro Starlight 0.39 (Astro 6).** Same hosting (`https://jhl-labs.github.io/jvim-public/`), all-new information architecture.
- **First-class bilingual support.** Route-based i18n at `/en/` and `/ko/`. 28 pages × 2 languages = 56 pages, all 1:1 mirrored. Previous client-side `data-i18n` JS toggle removed.
- **Brand-new sections.**
  - `/getting-started/` — 5-minute setup walkthrough.
  - `/migrate-from/{notepad,vim,obsidian}/` — persona-targeted migration guides.
  - `/usage/*` — 13 focused workflow pages (split from the prior 90-card single landing block).
  - `/keymap/{essentials,full,cheatsheet}/` — 3-tier shortcut reference (10 essentials → 8-group full reference → printable cheatsheet).
  - `/transparency/` + `/transparency/reports/` — split out from the prior single landing section.
  - `/faq/` expanded from 11 to **32 questions** across 6 categories (install, AI, keymaps, data, troubleshooting, license).
- **Landing redesign.** Hero with badge row, demo media, "Coming from somewhere else?" persona-card grid, 8-feature grid, "Why jvim?" 4-card explanation grid, closing CTA.
- **Search built in.** Pagefind index covers both languages.
- **Typography overhaul.** 17px base · 1.7 line-height · Korean-aware `word-break: keep-all` · key-cap inline code styling · table zebra striping · h2 hairline rules · accent left-border blockquote.
- **Asciinema demos.** `<AsciinemaPlayer>` component reserves space on every workflow page; graceful "recording in progress" placeholder until cast files land.
- **Dark mode locked.** Site enforces dark theme on every page; light toggle removed for visual consistency with jvim's TUI.
- **CI deployment.** New `.github/workflows/deploy-docs.yml` builds via Astro and deploys via `actions/deploy-pages`. GitHub Pages now serves from Actions instead of a branch folder.
- **Single source of truth for version.** Site-wide version string is read from `src/version.json` (was `_config.yml`). Per-release: bump that one file, push, Pages rebuilds.

## [0.5.2] — 2026-04-22

### Docs
- Added `LICENSE.kr`, a Korean reference translation of the jvim Software License. The English `LICENSE` remains the controlling text.

## [0.5.1] — 2026-04-21

### Fixed
- **File tree no longer aborts when the path contains root-owned subtrees.** Running `jvim` in `$HOME` (or anywhere that happens to hold podman/docker overlay layers, apt cache partials, etc.) previously crashed the scan with `EACCES: permission denied` and left the editor with no file list at all. Unreadable subtrees are now skipped; the readable siblings still render.
- **Opening a file with an unrecognized extension loads its contents.** `jvim test.crt` on an existing certificate used to render a blank buffer and risked overwriting the file on save. The restore path now checks the disk before assuming "new file".

### Changed
- **File tree is vim-style permissive.** The tree now shows `.crt`, `.env`, `.gitignore`, `.service`, `.tf`, `.hcl`, `.proto`, `.graphql`, `.vue`, `.svelte`, and every other text-ish file by default — hiding only known binary formats (images, archives, executables, media, sqlite, fonts, binary documents). Extensionless scripts (Makefile, shebang runners) are included without needing a name allowlist. Use `.jvimignore` to prune project-specific noise.

### Added
- **Open-time safety guard.** Before loading a file into the buffer, jvim refuses:
  - Non-regular files (directories, fifos, sockets, devices).
  - Files larger than 50 MB (status line: *"file too large (X MB); jvim refuses files larger than 50 MB"*).
  - Binary files (NUL-byte sniff on the first 8 KiB; *"binary file (contains NUL bytes); jvim declined to open — use xxd, hexdump, or a hex viewer"*).

  On rejection the previous buffer, cursor, and save status stay intact — only the status bar surfaces the reason, so a stray click on a binary in the tree doesn't lose your editor state.

### Deprecated
- `@jhl_labs/jvim@0.5.0` and matching subpackages — superseded by 0.5.1 (fixes the EACCES scan crash and the unknown-extension blank-buffer bug). `npm install -g @jhl_labs/jvim@latest` resolves to 0.5.1.

## [0.5.0] — 2026-04-20

### Added
- **Git workflow panel (Ctrl+Shift+G)** — new overlay with commit / push / pull / fetch actions. Status line now shows current branch and ahead/behind counts so you can stay in-editor through the whole review cycle.
- **Git operations**: `fetch --prune`, `pull --ff-only` (refuses dirty tree), `push` with automatic `--set-upstream` on a new branch's first push. Missing git CLI is surfaced as a clear error; toast paths are redacted to avoid leaking absolute paths.
- **Semantic knowledge index**:
  - Configurable per-project index folders.
  - Browse nested docs with Shift+F5.
  - Pick which docs participate in indexing.
  - Unicode tags supported (한국어, 日本語, café).
  - AI Ask overlay surfaces the retrieved sources; press Enter to open one.
- **Palette action items** — the palette accepts commands alongside file entries. The tag browser can hand a selection off to the search flow.
- **Editor: vim-style soft word wrap** for long lines.

### Changed
- **Syntax highlighting theme**: switched from `github-light` to `github-dark`. Previously dark token colors (strings, variable names) were unreadable on dark terminal backgrounds — most noticeable in Python because of docstring / f-string density. JSON, TypeScript, HTML, CSS, Dockerfile, YAML benefit equally.
- **Overlay UX**: deferred dismiss, palette modes, and shared knowledge scope make overlay behavior consistent across the editor.
- **Tree panel**: Esc / q returns to the editor when no filter is active.

### Fixed
- **Find overlay**: guards dismissal against a dual-dispatch cursor snapback; hits are live-previewed as you type or arrow through matches.
- **Save errors** are now prefixed with `save failed:` so toasts are unambiguous.
- **TOML config errors** are labeled with which config scope (user / project) failed.
- **Raw keyboard shortcuts** are guarded behind overlays — no accidental firing while an overlay is open.
- **Link resolution**: both outbound and inbound targets resolve exactly; alias and heading-anchor resolution corrected.
- **Backlinks**: inbound targets match exactly, no more false positives.
- **Editor**: waits for closed markdown fences before applying fence-based highlighting; `DEL` treated as a backward delete; terminal row budget honored.
- **Markdown selection formatting** stays scoped to the selection (no bleed to neighboring paragraphs).
- **Fenced markdown code blocks** are highlighted inside markdown documents.
- **Git status** display: counts split onto their own line and spelled out for clarity.
- **AI processing badge** now animates, giving clear visual feedback during long operations.

### Notes
- This release consolidates everything published between v0.2.0 and v0.4.0 on npmjs.org that had not yet been recorded on this public changelog. From v0.5.0 on, the changelog here is the authoritative user-facing history.

## [0.1.4] — 2026-04-15

### Fixed
- **Editor: Tab now indents.** Previously Tab toggled focus between the file tree and editor, which conflicted with universal text-editor expectations and was the most reported UX papercut after the v0.1.2 launch. Focus toggle moves to **Ctrl+E**.

### Deprecated
- `@jhl_labs/jvim@0.1.3` and matching subpackages — superseded by 0.1.4 (Tab fix). `npm install -g @jhl_labs/jvim@latest` resolves to 0.1.4.

## [0.1.3] — 2026-04-15

### Added
- AI overlay is now centered on screen and has a width cap, giving a cleaner box layout especially on wide terminals.

### Fixed
- Editor: when scrolling upward leaves a tiny sliver below the scroll-off threshold, the viewport now snaps cleanly to row 0 instead of stalling. Removes a noticeable jitter when navigating to the top of long documents.

### Changed
- Build pipeline: `VERSION` is injected into the compiled binary at build time from `package.json` via `--define 'process.env.JVIM_VERSION=...'`. Previous releases required bumping the same constant in two places.

## [0.1.2] — 2026-04-15

First publicly installable release.

### Added
- **npm distribution** — install with `npm install -g @jhl_labs/jvim`. Launcher auto-resolves the platform binary for linux-x64 / linux-arm64.
- **GitHub Release assets** — `jvim-<v>-linux-{x64,arm64}.tar.gz` + `.sha256`, plus `sbom.json` (CycloneDX v1.5), `trivy-scan.json`, `osv-scan.json`, and `third-party-notices.txt` bundled into every npm tarball and attached to the tagged release.
- **License gate** — `scripts/license-audit.ts` blocks releases if any production dependency introduces GPL / AGPL / SSPL / unknown licenses. Clean at v0.1.2 (282 packages, 91.8% MIT, zero copyleft).
- AI overlay now has three explicit modes: **Ask** (Q&A in the overlay, never inserted), **Insert** (new content at the cursor), and **Rewrite** (replace the current selection).
- Context selection follows a single rule: a non-empty selection becomes the context; otherwise Insert uses a markdown-section / line-window fallback (by file extension), Ask uses no context, and Rewrite requires a selection.
- `[ai.context]`, `[ai.prompts]`, `[ai.prompts.filetype]`, `[ai.quick_prompts]` in `config.toml` let you tune line windows, system prompts, and quick-prompt shortcuts per mode.

### Changed
- **Build pipeline is now two-stage** (bundle → compile). The single-stage `bun build --compile src/cli/main.tsx` previously embedded a sourcemap `sources` array listing every `src/**/*.tsx` file. `--sourcemap=none` did not suppress the compile-time embed, and post-build `strip` destroyed Bun's payload section entirely (see Fixed). Two-stage builds to a single synthetic bundle first; the compile step sees only one input, so no source paths leak.

### Fixed
- **v0.1.0 binary was non-functional** — post-build `strip --strip-all` removed the ELF section containing Bun's embedded script, leaving the binary as a bare Bun runtime that printed Bun's CLI help when invoked. Every `strip` variant (`--strip-debug`, `--strip-unneeded`) reproduced the same breakage.
- Inserted AI responses are no longer corrupted by markdown-fence wrappers: an outermost fence whose language tag is `markdown`/`md`/empty/matching the file extension is stripped before insertion.

### Deprecated
- `@jhl_labs/jvim@0.1.0`, `@jhl_labs/jvim-linux-x64@0.1.0`, `@jhl_labs/jvim-linux-arm64@0.1.0` — binaries non-functional. `npm install -g @jhl_labs/jvim` resolves to 0.1.2.

### Security
- Verified no source-code leakage in either x64 or arm64 binaries: zero `src/**/*.tsx` paths, zero unminified identifiers, zero inline base64 sourcemap payloads.

<!--
When cutting a release, replace `## [Unreleased]` with:

## [X.Y.Z] - YYYY-MM-DD

...and add a fresh empty `## [Unreleased]` above it. Link refs at the bottom.
-->

[Unreleased]: https://github.com/jhl-labs/jvim/compare/v0.5.4...HEAD
[0.5.4]: https://github.com/jhl-labs/jvim/releases/tag/v0.5.4
[0.5.2]: https://github.com/jhl-labs/jvim/releases/tag/v0.5.2
[0.5.1]: https://github.com/jhl-labs/jvim/releases/tag/v0.5.1
[0.5.0]: https://github.com/jhl-labs/jvim/releases/tag/v0.5.0
[0.1.4]: https://github.com/jhl-labs/jvim/releases/tag/v0.1.4
[0.1.3]: https://github.com/jhl-labs/jvim/releases/tag/v0.1.3
[0.1.2]: https://github.com/jhl-labs/jvim/releases/tag/v0.1.2
