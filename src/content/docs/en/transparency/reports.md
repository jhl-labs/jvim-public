---
title: Transparency reports
description: Per-release SBOM, security scans, and third-party notices.
---

For each release, the following reports are attached to the GitHub Release page:

- `sbom.json` — CycloneDX SBOM
- `trivy-scan.json` — Trivy vulnerability scan
- `osv-scan.json` — OSV scan
- `third-party-notices.txt` — OSS attributions

[Latest release →](https://github.com/jhl-labs/jvim-public/releases/latest)

## Why coverage / test reports are not published

Coverage (`coverage-lcov.info`) and test HTML reports enumerate `src/**` file paths,
which would leak the closed-source structure. They remain internal.
