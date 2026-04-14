# Frequently Asked Questions

## Is jvim open source?

The `jvim` **binary** is freely available under
[Apache-2.0](../LICENSE): you can install, run, redistribute, and integrate
it without paying. The **source code** is not currently public. See
[`CONTRIBUTING.md`](../CONTRIBUTING.md) for why.

## Where does jvim store my data?

`jvim` is a file-first editor. Your markdown files live wherever you put
them — `jvim` never moves or uploads them.

Per-workspace state (search index, open-buffer memory, recent files) goes in
a `.jvim/` directory at the workspace root. Safe to `.gitignore`.

## Does jvim send my notes to an AI provider?

Only when you explicitly trigger an AI action (Ctrl+/, F6) and have
configured an API key. Without credentials, the AI overlay refuses to call
out. See [`docs/reports/README.md`](./reports/README.md) for the security
reports documenting this boundary.

## Can I use a local LLM?

Yes. Configure a local endpoint (e.g., `llama.cpp`, `ollama`) via the jvim
config. No cloud key required.

## How do I jump to a specific line?

Press **Shift+F3** and type the line number.

## Why Shift+F3 instead of Ctrl+G?

Ctrl+G is the terminal bell (BEL) — it's reserved and can't be reliably
captured by a terminal app. Same reason Ctrl+S needs special handling (we
disable XON/XOFF flow control at startup).

## What about Windows / macOS support?

Planned. The build toolchain already cross-compiles to both platforms; the
bottleneck is testing and release logistics. Follow the
[roadmap](https://github.com/jhl-labs/jvim-public/labels/roadmap) label on
issues for updates.

## Can jvim edit plain text (non-markdown) files?

Yes, though the markdown-specific features (inline styling, headings,
wikilinks) are no-ops. For structured editing of code, a dedicated IDE is
usually better.

## Does jvim have plugins?

Not today. There is an internal plugin API being hardened; once stable, a
plugin interface may be exposed. No timeline committed yet.

## How do I report a bug or ask a question?

- Bug → [Bug report template](https://github.com/jhl-labs/jvim-public/issues/new?template=bug_report.yml)
- Feature → [Feature request template](https://github.com/jhl-labs/jvim-public/issues/new?template=feature_request.yml)
- Question → [Question template](https://github.com/jhl-labs/jvim-public/issues/new?template=question.yml)
- Security → [`SECURITY.md`](../SECURITY.md) (do **not** open a public issue)

## I found a bug in a library jvim uses. Where do I report?

First, upstream to that library. If `jvim`'s use of the library is what
surfaces the bug (e.g., insecure configuration, missing input validation),
open an issue here too so we can track a mitigation.
