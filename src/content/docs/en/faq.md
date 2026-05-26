---
title: FAQ
description: Common questions about jvim — install, AI, keymaps, data, troubleshooting, license.
---

## Is jvim open source?

Not in the OSI sense. `jvim` uses a **custom proprietary license with free
binary use**, similar to products like Anthropic's Claude Code:

- The **compiled binaries are free** to install, run, redistribute, and
  integrate — personally or commercially.
- The **source code is proprietary**. It is not published, and using
  source code obtained by any means (including accidental disclosure)
  requires prior written permission from JHL Labs.
- **Reverse engineering and de-obfuscation are prohibited** (except where
  local law guarantees that right).

Full terms in [LICENSE](https://github.com/jhl-labs/jvim-public/blob/main/LICENSE); plain-language summary in the [license page](/jvim-public/en/license/). Commercial source licensing inquiries:
`bkperio@gmail.com`.

## Where does jvim store my data?

`jvim` is a file-first editor. Your markdown files live wherever you put
them — `jvim` never moves or uploads them.

Per-workspace state (search index, open-buffer memory, recent files) goes in
a `.jvim/` directory at the workspace root. Safe to `.gitignore`.

## Does jvim send my notes to an AI provider?

Only when you explicitly trigger an AI action (Ctrl+/, F6) and have
configured an API key. Without credentials, the AI overlay refuses to call
out. See [transparency reports](/jvim-public/en/transparency/reports/) for the security
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
- Security → [security policy](/jvim-public/en/security/) (do **not** open a public issue)

## I found a bug in a library jvim uses. Where do I report?

First, upstream to that library. If `jvim`'s use of the library is what
surfaces the bug (e.g., insecure configuration, missing input validation),
open an issue here too so we can track a mitigation.
