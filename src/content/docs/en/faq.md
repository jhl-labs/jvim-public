---
title: FAQ
description: 30+ common questions about jvim — install, AI, keymaps, data, troubleshooting, license.
---

## Install & platforms

### Which platforms are supported?

Linux x64 and arm64 today. macOS and Windows are planned — see the
[release policy](/jvim-public/en/release-policy/) for the support matrix.

### Does jvim work on WSL?

Yes. Install via npm inside WSL (`npm install -g @jhl_labs/jvim`).
If the editor doesn't fill the terminal, check that `jvim --version` matches the
latest release — earlier versions had a `~`-fill regression. See [install
troubleshooting](/jvim-public/en/install/#troubleshooting).

### Does jvim work on macOS via Lima / Docker?

You can run the Linux binary inside Lima or Docker, but TTY handling under nested
virtualization is finicky. Native macOS support is on the roadmap.

### What about ARM Macs (M1/M2/M3)?

Native macOS arm64 is not shipped yet. Use Linux arm64 via OrbStack or UTM in the meantime.

### Why can I only install via npm?

We also publish standalone binaries on the GitHub Releases page. npm is recommended
because it handles upgrades automatically and resolves the right architecture.

## AI & privacy

### Does jvim send my notes to an AI provider?

Only when you explicitly use the AI overlay (`F6`) or inline AI actions. With no AI request,
nothing leaves your machine.

### Which AI providers are supported?

Any OpenAI-compatible chat endpoint, including OpenAI, Groq, and local Ollama or
llama.cpp servers that expose a `/v1` API. Anthropic can be used through an
OpenAI-compatible gateway. Configure providers in `~/.config/jvim/providers.toml`.

### Can I use a local LLM?

Yes. Point jvim at an Ollama or llama.cpp endpoint. See
[AI overlay](/jvim-public/en/usage/ai-overlay/).

### Does jvim collect telemetry?

Telemetry is **opt-in** and **off by default**. We don't track usage, files, or queries
unless you explicitly enable it for debugging.

### How does jvim store my API key?

API keys or API-key environment variable names live in `~/.config/jvim/providers.toml`. They're never logged or
sent anywhere except the configured provider.

## Keymaps & UX

### How do I jump to a specific line?

`Shift+F3` — Go to line dialog.

### Why Shift+F3 instead of Ctrl+G?

`Ctrl+G` is reserved for "go to definition" / "graph view" in many editors. We didn't
want to overload it. Shift+F3 is unused by all major terminals we tested.

### Can I customize keymaps?

Not yet. Config-driven keymaps are on the roadmap. See the public repo's backlog.

### Does jvim work with IME (Korean, Japanese, Chinese)?

Yes. We share an IME replacement listener across all input fields. If you hit an IME
bug, report it on the public repo.

### What if my terminal eats Ctrl+S?

Some terminals send Ctrl+S to the OS as XON/XOFF flow control. jvim auto-disables it
via `stty -ixon -ixoff` on startup. If your terminal still swallows it, see
[install troubleshooting](/jvim-public/en/install/).

## Data & vault

### Where does jvim store my data?

Your vault is wherever you opened it. jvim doesn't move or copy files. Per-vault
metadata (cursor positions, recent files) lives in `<vault>/.jvim/`.

### Can I use notes from Obsidian / Notion / Notepad?

Drop the markdown files into a folder and `jvim ./that-folder/`. Wikilinks and tags
are recognized when they use plain markdown-style syntax. See [tool notes](/jvim-public/en/migrate-from/obsidian/).

### Does jvim sync across devices?

jvim itself doesn't sync. Put your vault on iCloud / Dropbox / Syncthing / git, and
jvim will see the synced files.

### What about backup?

Recommended: keep your vault under git. Bonus: jvim integrates with git natively
(diff panel, commit, push).

### Are there file size limits?

Files over 50 MB are rejected with a clear error. Binary files are detected and skipped
from the file tree.

## Troubleshooting

### jvim exits immediately with a blank screen

If `CI=true` is set in your shell, Ink (jvim's rendering layer) switches to append-only
mode. Run `unset CI && jvim`.

### The editor doesn't fill the whole terminal

Check `jvim --version`. v0.5.0/0.5.1 had a regression where short documents left the
bottom of the screen blank. Upgrade to v0.5.2+.

### My vault search returns no results

Run `:reindex` from the command palette (F4). The vault index is built lazily on first
search.

### AI overlay says "no provider configured"

Open or create `~/.config/jvim/providers.toml`, then add an OpenAI-compatible provider. See
[AI overlay setup](/jvim-public/en/usage/ai-overlay/).

### How do I report a bug?

[GitHub issues](https://github.com/jhl-labs/jvim-public/issues) on the public repo.
Include: jvim version (`jvim --version`), OS, terminal app, and steps to reproduce.

### I found a bug in a library jvim uses. Where do I report?

Upstream is preferred (you get more eyes). But also let us know on the public repo
so we can pin/patch.

## License & future

### Is jvim open source?

No. The binary is free to use, share, and run commercially. The source is private.
See [license](/jvim-public/en/license/).

### Can I reverse engineer jvim?

No — prohibited by the license. The binary is obfuscated to enforce this.

### Can I use jvim binaries to train an AI model?

No — ML training on jvim binaries or source is prohibited by the license.

### Will there be a paid version?

Not currently planned. The binary is free for all use.

### Is there a plugin system?

Not yet — it's on the long-term roadmap.

### Will macOS / Windows binaries ship?

Yes — on the roadmap. See [release policy](/jvim-public/en/release-policy/) for the
support matrix.
