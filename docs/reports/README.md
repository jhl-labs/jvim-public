---
layout: page
title: Release reports
description: 릴리스마다 첨부되는 투명성 리포트 — SBOM, Trivy, OSV, third-party notices, SHA-256.
permalink: /reports/
---

Every tagged release on
[this repo](https://github.com/jhl-labs/jvim-public/releases) attaches a set
of transparency artifacts alongside the binaries. The source code itself is
not published, so these reports are the primary way users and security teams
can independently evaluate the build.

## Artifact matrix

| File | Format | What it shows |
|---|---|---|
| `jvim-<v>-linux-x64.tar.gz` | tarball | Compiled, obfuscated, stripped binary (x64) |
| `jvim-<v>-linux-arm64.tar.gz` | tarball | Compiled, obfuscated, stripped binary (arm64) |
| `*.sha256` | text | SHA-256 checksum for the matching tarball |
| `test-report.html` | HTML | Unit + integration test results summary |
| `coverage-lcov.info` | LCOV | Line and branch coverage produced by `bun test --coverage` |
| `coverage-summary.txt` | text | Human-readable coverage roll-up |
| `sbom.json` | CycloneDX JSON | Software bill of materials — every dependency in the compiled binary with version + license |
| `trivy-scan.json` | JSON | Vulnerability scan (filesystem + dependency) via Trivy |
| `osv-scan.json` | JSON | Vulnerability scan via OSV-Scanner (Google's OSV database) |
| `third-party-notices.txt` | text | License texts of every bundled dependency |

## Verifying a release

```bash
VERSION="0.1.0"
ARCH="linux-x64"
BASE="https://github.com/jhl-labs/jvim-public/releases/download/v${VERSION}"

# Fetch binary + checksum
curl -LO "${BASE}/jvim-${VERSION}-${ARCH}.tar.gz"
curl -LO "${BASE}/jvim-${VERSION}-${ARCH}.tar.gz.sha256"
sha256sum -c "jvim-${VERSION}-${ARCH}.tar.gz.sha256"

# (Optional) Inspect SBOM
curl -LO "${BASE}/sbom.json"
jq '.components[] | {name, version, licenses}' sbom.json | less
```

## Reading the vulnerability scans

Both `trivy-scan.json` and `osv-scan.json` are run in the release pipeline
and the results are attached **as-is**, without filtering.

Not every CVE in these reports means jvim is exploitable. An advisory may
apply to a dependency's code path that jvim never calls, or be a
vendor-tagged informational. We review each finding during the release and
publish remarks in the release notes when:

- The finding is confirmed exploitable → we patch and ship a new version.
- The finding is not exploitable in jvim's usage → we note **why** in the
  release body.
- The finding is disputed / false positive → we reference the upstream
  rationale.

## Reading the coverage reports

`coverage-lcov.info` can be visualized in any LCOV viewer:

```bash
# One-shot HTML in a temp dir
genhtml coverage-lcov.info -o /tmp/jvim-cov && xdg-open /tmp/jvim-cov/index.html
```

The summary file gives quick numbers:

```
Lines   : 87.3%  (<lines_hit> / <lines_found>)
Branches: 74.9%  (<branch_hit> / <branch_found>)
Functions: 91.2% (<fns_hit> / <fns_found>)
```

Because the source repository is private, **paths in the LCOV file are
relative to the build tree** at compile time and will not resolve on your
machine. They exist to group coverage by file rather than to let you browse
source.

## Why publish these if the source is closed?

- **Trust** — users deploying `jvim` in organizations need to justify the
  decision to security / compliance.
- **Accountability** — public CVE scans make it harder for us to ship
  regressions without noticing.
- **Transparency** — even without source, the *composition* and *tested
  behavior* of the binary is verifiable.

## Request a report type

If you need an additional artifact (e.g., OpenSSF Scorecard, Sigstore
attestation, SPDX instead of CycloneDX), file a
[Feature request](https://github.com/jhl-labs/jvim-public/issues/new?template=feature_request.yml).
