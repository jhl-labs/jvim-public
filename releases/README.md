# Release distribution

This directory is intentionally empty in the git tree. Release binaries and
their accompanying reports are **not checked into git** — they live on the
[GitHub Releases page](https://github.com/jhl-labs/jvim-public/releases)
attached to each version tag.

## Why not in git?

- Binaries are ~40 MB compressed per architecture. Committing them would
  bloat the repository and every subsequent clone.
- GitHub Releases attach artifacts to tags without polluting history.
- The release workflow already publishes to both npm and GitHub Releases in
  one step.

## What lives here instead

This directory hosts any **long-term release metadata** that should stay in
git — for example:

- Release-signing public keys (when introduced)
- Announcement archive (historical release blog posts)
- Per-release upgrade notes that exceed what fits in a tag body

Today it holds only this README. Content will accrete over time.

## See also

- [`../docs/reports/README.md`](../docs/reports/README.md) — what each
  release artifact contains and how to verify it.
- [`../CHANGELOG.md`](../CHANGELOG.md) — release history.
