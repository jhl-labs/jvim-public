---
title: Security policy
description: How to report security vulnerabilities in jvim.
---

We take the security of `jvim` users seriously. This document describes how
to report vulnerabilities and what response you can expect.

## Reporting a vulnerability

**Do not open a public GitHub issue for security reports.**

Use one of the following channels:

1. **GitHub Private Vulnerability Reporting (preferred)**
   - Go to the [Security tab](https://github.com/jhl-labs/jvim-public/security/advisories/new) of this repository
   - Click **"Report a vulnerability"**
   - This creates a private advisory that only maintainers can see.

2. **Email (backup channel)**
   - Send details to **`bkperio@gmail.com`**
   - Use subject prefix `[jvim-security]`
   - PGP encryption is not currently required but welcomed; request the
     public key in your first message if needed.

## What to include

A useful report contains:

- `jvim --version` output (or release version downloaded)
- Operating system and architecture
- Steps to reproduce, or at minimum a description of the vulnerability class
  (e.g., path traversal, shell injection, insecure deserialization)
- Proof-of-concept file, input, or trace (if safe to share)
- Impact assessment from your perspective
- Your preferred contact and whether you want public credit after disclosure

## Scope

**In scope:**

- The `jvim` binary distributed via npm (`jvim`, `@jhl_labs/jvim-linux-*`)
  and GitHub Releases.
- The launcher shim and its platform dispatch logic.
- The AI overlay when configured with an API key.
- The MCP server, LSP integration, and any network-facing code inside `jvim`.

**Out of scope:**

- The source code repository itself (it is private; there is no public source
  to audit).
- Third-party dependencies — please report those upstream first. If the flaw
  is in how `jvim` uses a dependency, that **is** in scope.
- Denial of service via deliberately oversized inputs (e.g., 10 GB markdown
  files) — these are known limits, not vulnerabilities.
- Anything requiring an already-compromised local account with write access
  to the user's filesystem (jvim is a local editor and inherits the trust of
  its invoking user).

## Response expectations

| Event | Target |
|---|---|
| Acknowledgement of report | Within **5 business days** |
| Initial triage + severity rating | Within **10 business days** |
| Fix released for high/critical issues | Within **30 days** of triage |
| Fix released for medium/low issues | Next scheduled release |
| Public disclosure | After a fix ships, or **90 days** after report if unresolved and not in active work |

We may request additional information during triage. We will keep you updated
at least every two weeks while a report is open.

## Safe harbor

We will not pursue legal action against researchers who:

- Make a good-faith effort to avoid privacy violations, destruction of data,
  and disruption of service.
- Only interact with systems they own or have explicit permission to test.
- Disclose privately first and allow reasonable time for us to respond before
  public disclosure.
- Do not exploit findings beyond what is necessary to demonstrate the issue.

## Credit

Reporters who wish public credit will be listed in the release notes of the
fix version. Anonymous reporting is also accepted.
