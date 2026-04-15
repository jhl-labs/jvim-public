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

(Nothing yet. Open follow-ups in `memory/project_release_follow_ups.md`: wiring the Bun coverage-summary generator once the Bun 1.3 coverage bug is fixed.)

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

[Unreleased]: https://github.com/jhl-labs/jvim/compare/main...HEAD
