---
title: 태그
description: "'#'을 입력하는 순간 자동완성 팝업이 열리고, F7 태그 브라우저로 볼트 전체의 태그 빈도를 한눈에 확인하세요."
---

import AsciinemaPlayer from '../../../../components/AsciinemaPlayer.astro';
import KeymapTable from '../../../../components/KeymapTable.astro';

jvim에서 태그는 일급 시민입니다. 에디터에서 `#`을 입력하는 즉시, 볼트 전체의 태그를 빈도순으로 나열한 자동완성 팝업이 열립니다. `F7` 태그 브라우저는 모든 태그를 조감도처럼 보여주고, 단 한 번의 키 입력으로 원하는 태그로 파고들 수 있습니다.

<AsciinemaPlayer slug="tags" title="태그: 자동완성과 태그 브라우저" />

## 태그 자동완성

에디터 본문 어디서나 `#`을 입력하면 jvim이 실시간 자동완성 팝업을 열어, 지금까지 입력한 문자와 일치하는 볼트 전체의 태그를 나열합니다. 목록은 키 입력마다 갱신됩니다. 항목을 선택한 뒤 `Enter`를 누르면 완성된 태그가 문서에 삽입되고, `Esc`는 아무것도 삽입하지 않고 팝업을 닫습니다.

![입력 중인 태그 자동완성 팝업](../../../../assets/images/43-tag-completion-typing.png)

<KeymapTable rows={[
  { keys: '#', action: '태그 자동완성 시작', notes: '태그 이름을 입력하는 동안 자동완성 팝업이 열립니다' },
  { keys: '↑ / ↓', action: '제안 탐색', notes: '태그 목록에서 선택 항목을 이동합니다' },
  { keys: 'Enter', action: '선택한 태그 삽입', notes: '태그를 완성하고 에디터로 포커스를 돌려줍니다' },
  { keys: 'Esc', action: '팝업 닫기', notes: '삽입 없이 닫습니다; 커서는 # 위치에 유지됩니다' },
]} />

## 태그 브라우저

`F7`을 누르면 태그 브라우저 오버레이가 열립니다. 브라우저는 볼트의 모든 태그와 함께 다음을 표시합니다:

- **빈도** — 해당 태그를 가진 파일 수.
- **주요 파일** — 그 태그를 사용하는 가장 최근이거나 가장 관련성 높은 파일 미리보기.

아무 문자나 입력하면 접두사로 목록을 필터링합니다. 원하는 태그를 찾았으면 `Enter`를 눌러 `tag:<name>` 쿼리가 미리 채워진 볼트 검색으로 넘어가면, 해당 태그가 붙은 모든 파일을 즉시 확인할 수 있습니다.

<KeymapTable rows={[
  { keys: 'F7', action: '태그 브라우저 열기', notes: '빈도 수와 주요 파일이 포함된 볼트 전체 태그 목록' },
  { keys: '↑ / ↓', action: '태그 탐색', notes: '필터링된 태그 목록을 이동합니다' },
  { keys: 'Enter', action: '이 태그로 파일 검색', notes: 'tag:<name>이 미리 채워진 볼트 검색으로 이동합니다' },
  { keys: 'Esc', action: '태그 브라우저 닫기', notes: '에디터로 포커스를 돌려줍니다' },
]} />

## 접두사 필터링

태그 브라우저 안에서 입력을 시작하면 해당 문자로 시작하는 태그만 목록에 남습니다. 필터는 대소문자를 구분하지 않으며 실시간으로 갱신됩니다. `Backspace`로 필터를 지우면 전체 태그 목록으로 돌아옵니다.

## 관련 항목

- [Wikilinks](/jvim-public/ko/usage/wikilinks/)
- [볼트 검색](/jvim-public/ko/usage/vault-search/)
- [키맵 — 전체 참조](/jvim-public/ko/keymap/full/)
