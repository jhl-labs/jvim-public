# Contributing to jvim

Thanks for your interest in `jvim`. This document explains how you *can*
contribute and why some traditional paths are not available here.

## TL;DR

- **Source code is private.** Pull requests cannot be accepted at this time.
- **Issues are the primary way to contribute** — bug reports, feature
  requests, questions, and documentation suggestions all land there.
- **Documentation PRs are welcome** — only files in this repository
  (`jvim-public`) are accepted; see §3.

## 1. Reporting bugs

Before filing:

1. Update to the latest release: `npm install -g @jhl_labs/jvim@latest --include=optional`
   or download from [Releases](https://github.com/jhl-labs/jvim-public/releases).
2. Search [existing issues](https://github.com/jhl-labs/jvim-public/issues?q=is%3Aissue)
   — someone may have hit the same thing.
3. Capture the minimum reproduction: a small file, the exact keystrokes,
   and the exact terminal output.

File via [**Bug report** template](https://github.com/jhl-labs/jvim-public/issues/new?template=bug_report.yml).
Fill in every field — incomplete reports slow triage.

## 2. Requesting features

Use the [**Feature request** template](https://github.com/jhl-labs/jvim-public/issues/new?template=feature_request.yml).

A good proposal includes:

- The **problem** you're trying to solve (not the solution you picked).
- How you solve it today (workaround, other tool, etc.).
- A sketch of what the feature would look like from a user's perspective.
- Whether you'd accept a smaller/simpler version if the full ask isn't
  feasible.

Features that align with the roadmap and have a clear user story are
prioritized. Speculative "nice to have" items may be closed with a reference
to this guidance — no disrespect intended.

## 3. Documentation contributions

You **can** open PRs against **this repository** for:

- Fixes to `README.md`, `CHANGELOG.md`, `docs/*.md`
- Typos, broken links, unclear instructions
- Additional FAQ entries, install-path troubleshooting

You **cannot** open PRs for:

- Anything in the source repository (it is private).
- Behavior changes — file an issue instead and we'll route it internally.

When opening a docs PR, follow the
[pull-request template](./.github/PULL_REQUEST_TEMPLATE.md) and keep changes
focused. Large refactors of the docs should start as an issue.

## 4. Questions

Use the [**Question** template](https://github.com/jhl-labs/jvim-public/issues/new?template=question.yml).

Before asking, please check:

- [`README.md`](./README.md)
- [`docs/install.md`](./docs/install.md)
- [`docs/faq.md`](./docs/faq.md)
- The in-app keymap (press **F1** in `jvim`)

## 5. Code of conduct

All interactions — issues, comments, PRs, discussions — are governed by the
[Code of Conduct](./CODE_OF_CONDUCT.md). Be kind, be direct, and assume good
faith.

## 6. Why is the source private?

`jvim` ships as obfuscated single-binary executables under the **jvim
Software License** (see [`LICENSE`](./LICENSE)) — a custom license that
keeps binary use **free** (install, run, redistribute, commercial use all
permitted) while keeping the source code proprietary. This is the same
pattern products like Anthropic's Claude Code use.

The business model depends on the implementation staying closed while the
product itself remains broadly available and free to use. This may change
in the future; if it does, we will announce it here first.

A few license implications worth calling out explicitly:

- **Reverse engineering is prohibited** (except where local law guarantees
  that right).
- **Accidentally obtained source is still off-limits.** If you come into
  possession of jvim source code by any means — a leak, a misconfigured
  repo, compelled disclosure, a security research finding — unauthorized
  use remains prohibited. Please notify `bkperio@gmail.com` and destroy
  copies on request.
- **ML training on the Binaries or any source artifact is not permitted.**

Commercial source-code licensing, partnerships, and evaluation access are
negotiable — contact `bkperio@gmail.com`.

That decision does not diminish the value of public feedback. Issues from
this repository directly inform the roadmap, and most shipped features trace
back to a user report.

Thank you for taking the time to report, request, or ask.
