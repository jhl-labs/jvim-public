---
title: Obsidian 사용자 참고
description: jvim이 일반 마크다운 폴더, wikilinks, 태그, 백링크를 다루는 방식.
---

노트를 마크다운 파일로 관리하고 있다면 jvim은 같은 폴더를 열 수 있습니다. **wikilinks, 태그, 백링크**처럼 익숙한 요소를 지원하지만, Obsidian을 대체하는 도구라기보다는 더 작은 터미널 편집기입니다.

## 익숙한 개념

| Obsidian | jvim |
|---|---|
| Vault 폴더 | `jvim my-vault/` |
| `[[wikilink]]` | 동일한 문법. `[[` 자동완성. |
| `#tag` (인라인 또는 YAML) | `#tag` 인라인, `#` 입력 시 자동완성. F7 태그 브라우저. |
| 백링크 패널 | 각 노트에서 사용 가능. |
| 빠른 전환기 (Ctrl+O) | `Ctrl+O` — 동일. |
| 커맨드 팔레트 (Ctrl+P) | `F4` — 같은 개념, 이름만 다름. |
| 검색 (Ctrl+Shift+F) | `Shift+F4` — 전문 + 태그 + wikilink 필터. |
| 데일리 노트 / 템플릿 | 현재는 수동. 템플릿 기능 계획 중. |

## 포함하지 않는 것들

- **그래프 뷰** — 시각적 그래프 없음 (아직)
- **플러그인 마켓플레이스** — jvim에는 플러그인 시스템 없음
- **캔버스 / 화이트보드** — 텍스트 전용
- **웹/모바일 동기화** — 터미널 전용
- **WYSIWYG 프리뷰 창** — jvim은 실시간 스타일링 제공, 별도 프리뷰 없음

## jvim이 집중하는 부분

- **터미널 사용.** SSH, tmux, 컨테이너, CI 같은 환경에서 동작.
- **단일 바이너리.** Electron 없음, node_modules 없음.
- **키보드 파일 트리.** 파일 트리에서 j/k/g/G 사용.
- **선택적 AI 오버레이.** 프로바이더 설정 후 vault 검색을 함께 사용할 수 있습니다.
- **선택적 시맨틱 검색.** `sqlite-vec` 기반 인덱싱을 범위 지정해 사용할 수 있습니다.

## 기존 폴더 열기

jvim은 `.md` 파일이 있는 폴더를 읽습니다. 기존 마크다운 폴더를 `jvim ./my-vault/`로 열 수 있습니다. 기본 wikilinks와 인라인 태그는 변환 없이 인식되지만, Obsidian 플러그인 데이터와 canvas 파일은 jvim의 범위 밖입니다.

## 권장 첫 단계

1. [시작하기](/jvim-public/ko/getting-started/)
2. [Wikilinks](/jvim-public/ko/usage/wikilinks/)와 [태그](/jvim-public/ko/usage/tags/)
3. [AI 오버레이](/jvim-public/ko/usage/ai-overlay/) — 프로바이더 설정
