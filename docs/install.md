# Installing jvim

## Supported platforms

| OS | Architecture | Status |
|---|---|---|
| Linux | x86_64 | ✅ Supported |
| Linux | aarch64 (ARM64) | ✅ Supported |
| macOS | any | 🚧 Not yet — planned |
| Windows | any | 🚧 Not yet — planned |

## Method 1 — npm (recommended)

```bash
npm install -g jvim
jvim --version
```

This installs:
- `jvim` — a tiny JS launcher (~1 KB) that dispatches to the platform binary.
- `@jhl_labs/jvim-linux-x64` or `@jhl_labs/jvim-linux-arm64` — selected
  automatically based on your `os`/`cpu`.

### If `optionalDependencies` weren't installed

Some `npm` configurations skip optional deps. If `jvim` reports a missing
binary:

```bash
npm install -g jvim --include=optional
```

### Upgrading

```bash
npm install -g jvim@latest
jvim --version
```

### Uninstalling

```bash
npm uninstall -g jvim
```

## Method 2 — GitHub Releases (standalone binary)

Best for airgapped environments, CI caches, or when npm is unavailable.

```bash
VERSION="0.1.0"       # pick the desired release
ARCH="linux-x64"      # or linux-arm64
URL="https://github.com/jhl-labs/jvim-public/releases/download/v${VERSION}/jvim-${VERSION}-${ARCH}.tar.gz"

curl -LO "$URL"
curl -LO "${URL}.sha256"
sha256sum -c "jvim-${VERSION}-${ARCH}.tar.gz.sha256"

tar -xzf "jvim-${VERSION}-${ARCH}.tar.gz"
sudo mv jvim /usr/local/bin/
jvim --version
```

## Verifying authenticity

Every release asset has a matching `.sha256` file. **Always verify the
checksum before executing the binary**, especially on shared infrastructure.

## Troubleshooting

### `jvim: command not found` after `npm install -g`

Your `npm` global bin directory is not on `PATH`. Find it and add it:

```bash
npm prefix -g          # prints the npm prefix, e.g. /usr/local
# add "$(npm prefix -g)/bin" to PATH via your shell rc (.bashrc, .zshrc)
```

### `Unsupported platform: <os>-<arch>`

You're running on a platform without a precompiled binary. Check the table
above; if your platform is marked supported, confirm `os`/`cpu` match:

```bash
node -p "[process.platform, process.arch]"
```

Open a [bug report](https://github.com/jhl-labs/jvim-public/issues/new?template=bug_report.yml)
if you hit this on a supposedly supported platform.

### Terminal swallows Ctrl+S, Ctrl+Q, or similar

`jvim` disables terminal flow control (IXON) automatically on startup, so
Ctrl+S (save) should work out of the box. If it does not, your terminal may
have a custom keybinding overriding it. Rebind or remap at the terminal
emulator level.

### jvim exits immediately with a blank screen

Likely cause: you're inside `screen`, `tmux`, or a multiplexer that doesn't
support the alternate screen buffer. Try a plain terminal first to confirm,
then check your multiplexer's `altscreen` / `terminal-overrides` settings.

## Next steps

- Press **F1** in-app for the keymap.
- Read the [FAQ](./faq.md) for common workflow questions.
