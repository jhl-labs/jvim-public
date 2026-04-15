# Release Policy

How `jvim` releases are versioned, cut, distributed, and supported. This
document is the user-facing contract — it tells you what to expect from a
release, how to verify it, and what support window applies.

The internal procedure (build scripts, leak-check commands, secrets
handling) is intentionally not in this repository.

## Versioning

`jvim` follows [Semantic Versioning 2.0.0](https://semver.org/).

| Change type | Example | When it bumps |
|---|---|---|
| **Patch** (`0.0.x`) | `0.1.0 → 0.1.1` | Bug fixes, security patches, doc-only changes that don't alter behavior |
| **Minor** (`0.x.0`) | `0.1.3 → 0.2.0` | New features, new keybindings, new config options — backward-compatible |
| **Major** (`x.0.0`) | `0.9.2 → 1.0.0` | Breaking changes to config schema, removal of commands/keybindings, CLI flag changes |

### Pre-1.0 caveat

While on `0.x.y`:

- **Breaking changes may ship in minor bumps.** SemVer technically allows
  this before 1.0. We try to minimize it but do not guarantee zero breakage
  between `0.x` versions.
- Every breaking change lands in [`CHANGELOG.md`](../CHANGELOG.md) under a
  clearly labeled **Breaking** section.
- Once `1.0.0` ships, strict SemVer applies — no breakage in minor or patch.

## Release cadence

| Cadence | Frequency | Trigger |
|---|---|---|
| **Patch** | Ad-hoc | Bug fix is ready and verified |
| **Minor** | Every 2–6 weeks | Accumulated features justify a release |
| **Security** | Within **7 days** of fix availability | Confirmed vulnerability with a patch in hand |

We do not commit to a fixed calendar. Subscribe to the
[Releases feed](https://github.com/jhl-labs/jvim-public/releases.atom) to
get notified without polling.

## Distribution channels

| Channel | URL | Mirror of |
|---|---|---|
| **npm** (recommended) | [`@jhl_labs/jvim`](https://www.npmjs.com/package/@jhl_labs/jvim) + `@jhl_labs/jvim-linux-*` | Authoritative |
| **GitHub Releases** | [`jhl-labs/jvim-public/releases`](https://github.com/jhl-labs/jvim-public/releases) | Same binaries, attached to version tag with SHA-256 checksums and transparency reports |

Both channels carry bit-identical binaries for a given version. The
GitHub Release also includes the transparency reports listed in
[`docs/reports/README.md`](./reports/README.md).

## What every release contains

Binaries:

- `jvim-<version>-linux-x64.tar.gz` + `.sha256`
- `jvim-<version>-linux-arm64.tar.gz` + `.sha256`

Transparency reports (see [`docs/reports/README.md`](./reports/README.md) for
field-by-field explanations):

- `test-report.html` — pass/fail for every test in the suite
- `coverage-lcov.info` + `coverage-summary.txt` — coverage numbers
- `sbom.json` — CycloneDX software bill of materials
- `trivy-scan.json`, `osv-scan.json` — vulnerability scans
- `third-party-notices.txt` — bundled dependency licenses

## Obfuscation and source protection

`jvim` is a closed-source product. Released binaries are:

- **Minified** — all internal identifiers mangled to 1–2 characters.
- **Stripped** — ELF symbol table removed (including for cross-arch builds).
- **Sourcemap-free** — no inline base64 sourcemap is embedded.
- **Whitelisted** — npm packages include only `bin/`, `LICENSE`, `README.md`.
  No `src/`, `tests/`, `*.map` files can reach users.

Every release is verified against the above invariants before publish.
The internal verification runbook lives in the private source repository.

What you *can* expect to see in a binary dump:

- Internal Bun-runtime strings (HMR runtime sourcemap metadata, error-reporter
  code, React SSR scaffolding). These are constants in the [Bun](https://bun.sh)
  runtime — not jvim-specific source.

What you will **not** see:

- jvim file paths (no `src/ui/...`, `src/app/...`).
- jvim identifiers (function names, variable names, component names).
- Decodable sourcemaps leading back to original TypeScript.

If you find something that looks like it contradicts this — a readable
jvim source snippet in a released binary — please report it as a
[security issue](../SECURITY.md). It would indicate a regression in our
release pipeline.

## Support window

We support the **current minor version** and the **previous minor version**.

| Version | Support status |
|---|---|
| Current minor (e.g., `0.2.x` when `0.2.3` is latest) | Full — bug fixes and security patches |
| Previous minor (e.g., `0.1.x`) | Security fixes only for 90 days after the successor minor ships |
| Older minors | Unsupported — upgrade recommended |

Pre-1.0 is a moving target. We will extend support retrospectively for any
version deployed in regulated environments — open a
[Question](https://github.com/jhl-labs/jvim-public/issues/new?template=question.yml)
issue describing your constraints and we'll commit in writing.

## Rollback policy

If a release is found to be broken:

1. We publish a **new patch version** with the fix — we do **not** unpublish
   (npm forbids re-using version numbers).
2. The broken version is marked `deprecated` on npm with a pointer to the
   fixed version.
3. If the breakage is severe, the broken version's GitHub Release is edited
   to add a prominent **⚠ Known issue — upgrade to vX.Y.Z** banner at the
   top of the release notes.

The broken binary stays downloadable for reproducibility. We do not
retroactively delete releases.

## Verification checklist for users

Before deploying a new version to production:

1. **Match the SHA-256** of the downloaded tarball against the `.sha256`
   file on GitHub Releases.
2. **Check `CHANGELOG.md`** for any `Breaking` entries since your current
   version.
3. **Scan the SBOM** for dependencies you flag in your SCA tool.
4. **Review `trivy-scan.json` / `osv-scan.json`** against your organization's
   CVE severity threshold.
5. **Test in a staging environment** — especially for terminal-emulator
   specific features (some terminals handle keybindings differently).

## Licensing

Every release is governed by the **jvim Software License** (see
[`LICENSE`](../LICENSE)) in this repository and also ships as `LICENSE`
inside every npm package and release tarball.

The license grants free use of the Binaries (including commercial use and
redistribution) while keeping the source code proprietary. Reverse
engineering, de-obfuscation, and use of any source code obtained by any
means — including accidental disclosure — require prior written permission
from JHL Labs.

The npm manifest declares `"license": "SEE LICENSE IN LICENSE"`, and the
full license text ships inside each package's tarball so it is discoverable
without visiting this repository.

## Reporting release problems

- Broken binary, checksum mismatch, missing report →
  [Bug report](https://github.com/jhl-labs/jvim-public/issues/new?template=bug_report.yml)
- Security issue in a release → [`SECURITY.md`](../SECURITY.md)
- Question about support status → [Question](https://github.com/jhl-labs/jvim-public/issues/new?template=question.yml)
- Source-code licensing / commercial partnership inquiries → `bkperio@gmail.com`
