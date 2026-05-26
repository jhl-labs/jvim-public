---
title: Obsidian에서 마이그레이션
description: Obsidian에서 넘어온 분들을 위한 vault, wikilinks, 태그, 그래프 대응 안내.
---

Obsidian을 이미 사용하고 있다면 jvim의 사고방식이 동일합니다: **마크다운 vault, wikilinks, 태그, 백링크**.

## 1:1 대응 개념

| Obsidian | jvim |
|---|---|
| Vault 폴더 | `jvim my-vault/` |
| `[[wikilink]]` | 동일한 문법. `[[` 자동완성. |
| `#tag` (인라인 또는 YAML) | `#tag` 인라인, `#` 입력 시 자동완성. F7 태그 브라우저. |
| 백링크 패널 | 각 노트에 내장. |
| 빠른 전환기 (Ctrl+O) | `Ctrl+O` — 동일. |
| 커맨드 팔레트 (Ctrl+P) | `F4` — 같은 개념, 이름만 다름. |
| 검색 (Ctrl+Shift+F) | `Shift+F4` — 전문 + 태그 + wikilink 필터. |
| 데일리 노트 / 템플릿 | 현재는 수동. 템플릿 기능 계획 중. |

## Obsidian과 비교해서 없는 것들

- **그래프 뷰** — 시각적 그래프 없음 (아직)
- **플러그인 마켓플레이스** — jvim에는 플러그인 시스템 없음 (아직)
- **캔버스 / 화이트보드** — 텍스트 전용
- **웹/모바일 동기화** — 터미널 전용
- **WYSIWYG 프리뷰 창** — jvim은 실시간 스타일링 제공, 별도 프리뷰 없음

## Obsidian과 비교해서 더 나은 것들

- **터미널 네이티브.** SSH, tmux, 컨테이너, CI에서 동작.
- **단일 바이너리.** Electron 없음, node_modules 없음.
- **vim 스타일 파일 트리.** 파일 트리에서 j/k/g/G 사용.
- **vault RAG 내장 AI 오버레이** — 별도 플러그인 설치 불필요.
- **시맨틱 검색 Tier 2** — `sqlite-vec` 기반, 범위 지정 가능.

## Vault 가져오기

jvim은 `.md` 파일이 있는 모든 폴더를 읽습니다. Obsidian vault를 그대로 두고 `jvim ./my-vault/`를 실행하세요. Wikilinks와 태그가 즉시 작동합니다. 변환 작업이 필요 없습니다.

## 권장 첫 단계

1. [시작하기](/jvim-public/ko/getting-started/)
2. [Wikilinks](/jvim-public/ko/usage/wikilinks/)와 [태그](/jvim-public/ko/usage/tags/)
3. [AI 오버레이](/jvim-public/ko/usage/ai-overlay/) — 프로바이더 설정
