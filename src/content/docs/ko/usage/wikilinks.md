---
title: Wikilinks
description: "'[[이중 괄호]]' 문법으로 볼트 내부 링크를 만들고 탐색하며, 아웃바운드 링크를 살펴보고 백링크 그래프를 검색하세요."
---

import AsciinemaPlayer from '../../../../components/AsciinemaPlayer.astro';
import KeymapTable from '../../../../components/KeymapTable.astro';

jvim은 볼트 내 노트를 연결하기 위해 Obsidian 호환 `[[wikilink]]` 문법을 지원합니다. 에디터에서 `[[`를 입력하면 볼트 전체를 퍼지 검색하고, 키 하나로 링크를 따라가며, 백링크 그래프를 통해 현재 파일을 참조하는 모든 노트를 확인할 수 있습니다.

<AsciinemaPlayer slug="wikilinks" title="Wikilinks: 자동완성, 아웃바운드 링크, 백링크 그래프" />

## Wikilink 자동완성

에디터에서 `[[`를 입력하면 jvim이 볼트의 모든 파일을 나열한 인라인 자동완성 오버레이를 엽니다. 퍼지 매칭이 적용되므로 정확한 파일명을 입력할 필요가 없습니다.

![wikilink 자동완성 입력 중](../../../../assets/images/44-wikilink-completion-typing.png)

<KeymapTable rows={[
  { keys: '[[', action: 'Wikilink 자동완성 열기', notes: '볼트 전체 파일 검색을 인라인으로 시작합니다' },
  { keys: '↑ / ↓', action: '후보 선택', notes: '자동완성 목록 탐색' },
  { keys: 'Tab / Enter', action: '링크 삽입', notes: 'Wikilink를 완성하고 오버레이를 닫습니다' },
  { keys: 'Esc', action: '닫기', notes: '삽입 없이 취소합니다' },
]} />

삽입된 링크는 확장자 없이 파일명만 사용하는 Obsidian 표준 wikilink 형식을 따릅니다: `[[my-note]]`. 대상 파일이 아직 존재하지 않더라도 링크는 유효합니다 — 해당 링크로 이동할 때 jvim이 파일을 생성합니다.

## 아웃바운드 링크 패널

`F8`을 누르면 현재 문서의 아웃바운드 링크 패널이 열립니다 — 이 파일이 참조하는 모든 `[[wikilink]]`가 하나의 오버레이에 나열됩니다. 다른 곳으로 이동하기 전에 현재 노트의 연결 관계를 검토할 때 유용합니다.

<KeymapTable rows={[
  { keys: 'F8', action: '아웃바운드 링크 패널 열기', notes: '현재 문서의 모든 wikilink를 표시합니다' },
  { keys: '↑ / ↓', action: '링크 선택', notes: '아웃바운드 링크 목록을 이동합니다' },
  { keys: 'Enter', action: '대상 파일 열기', notes: '링크된 노트를 에디터에서 엽니다' },
  { keys: 'Esc', action: '패널 닫기', notes: '에디터로 돌아갑니다' },
]} />

## 백링크 그래프

`Ctrl+B`를 누르면 백링크 그래프가 열립니다 — 볼트에서 현재 파일을 `[[wikilink]]`로 참조하는 모든 노트가 표시됩니다. 이것은 아웃바운드 패널의 반대입니다: 이 노트가 어디로 연결되는지가 아니라, 누가 이 노트로 연결하는지를 보여줍니다.

![Ctrl+B로 열린 백링크 그래프](../../../../assets/images/50-backlink-graph-ctrlb.png)

<KeymapTable rows={[
  { keys: 'Ctrl+B', action: '백링크 그래프 열기', notes: '현재 파일로 링크하는 모든 노트를 표시합니다' },
  { keys: '↑ / ↓', action: '백링크 선택', notes: '참조 노트 목록을 이동합니다' },
  { keys: '[ / ]', action: '인접 노트로 이동', notes: '경로를 강조 표시한 채로 인접 노트로 탐색합니다' },
  { keys: 'Enter', action: '선택한 노트 열기', notes: '백링크 소스를 에디터에서 엽니다' },
  { keys: 'Esc', action: '그래프 닫기', notes: '에디터로 돌아갑니다' },
]} />

## Wikilinks vs. 마크다운 링크

jvim은 `[[wikilink]]`와 표준 마크다운 `[텍스트](경로.md)` 문법을 모두 지원합니다. 주요 차이점:

| | Wikilink `[[...]]` | 마크다운 링크 `[](...)` |
|---|---|---|
| 자동완성 | 예 — `[[` 입력 시 시작 | 아니오 |
| 백링크 추적 | 예 — jvim이 인덱싱 | 아니오 |
| 이식성 | Obsidian / jvim | 모든 마크다운 렌더러 |
| 외부 URL | 적합하지 않음 | `[텍스트](https://...)` |

자동완성과 백링크 추적이 필요한 볼트 내부 연결에는 wikilink를 사용하세요. 외부 URL이거나 Obsidian 이외 도구와의 이식성이 중요할 때는 표준 마크다운 링크를 사용하세요.

## 관련 항목

- [태그](/jvim-public/ko/usage/tags/)
- [볼트 검색](/jvim-public/ko/usage/vault-search/)
- [키맵 — 전체 참조](/jvim-public/ko/keymap/full/)
