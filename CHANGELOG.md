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

### Added
- AI overlay now has three explicit modes: **Ask** (Q&A in the overlay, never inserted), **Insert** (new content at the cursor), and **Rewrite** (replace the current selection).
- Context selection follows a single rule: a non-empty selection becomes the context; otherwise Insert uses a markdown-section / line-window fallback (by file extension), Ask uses no context, and Rewrite requires a selection.
- `[ai.context]`, `[ai.prompts]`, `[ai.prompts.filetype]`, `[ai.quick_prompts]` in `config.toml` let you tune line windows, system prompts, and quick-prompt shortcuts per mode.
- Project scaffolding placeholder — see `CONTINUE.md`.

### Fixed
- Inserted AI responses are no longer corrupted by markdown-fence wrappers: an outermost fence whose language tag is `markdown`/`md`/empty/matching the file extension is stripped before insertion.

### Notes
- Pre-0.1. No releases yet. This section will be split into a dated version on first tag.

<!--
When cutting a release, replace `## [Unreleased]` with:

## [X.Y.Z] - YYYY-MM-DD

...and add a fresh empty `## [Unreleased]` above it. Link refs at the bottom.
-->

[Unreleased]: https://github.com/jhl-labs/jvim/compare/main...HEAD
