# Asciinema casts placeholder

이 디렉터리는 jvim 시연 cast 파일이 들어갈 곳입니다. 5개 권장:

- `editor-basics.cast`
- `file-tree.cast`
- `vault-search.cast`
- `ai-overlay.cast`
- `git.cast`

녹화 방법: `asciinema rec -i 2 --title "<title>" <slug>.cast`
30~60초 분량, 핵심 동작 위주.

녹화 후 이 디렉터리에 커밋하면 사이트의 AsciinemaPlayer 컴포넌트가 자동으로 인식합니다.

자세한 내용은 `src/assets/casts/README.md` 참고.
