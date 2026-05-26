---
title: Vault 검색
description: Shift+F4로 vault의 모든 파일에 대한 풀텍스트 검색을 지원하며, 태그와 wikilink 토큰을 기본으로 지원합니다.
---

import AsciinemaPlayer from '../../../../components/AsciinemaPlayer.astro';
import KeymapTable from '../../../../components/KeymapTable.astro';

jvim은 SQLite FTS5로 vault의 모든 파일을 인덱싱하여 vault 크기에 관계없이 1초 미만의 풀텍스트 검색을 제공합니다. 검색 오버레이는 일반 쿼리뿐만 아니라 `#tag`와 `[[wikilink]]` 토큰을 지원하므로 Obsidian 스타일 표기법으로 생각하고 즉시 일치하는 결과를 얻을 수 있습니다.

<AsciinemaPlayer slug="vault-search" title="Vault 검색: 풀텍스트 검색, 태그 쿼리, 대소문자 전환" />

## 검색 오버레이 열기

jvim 어디서든 `Shift+F4`를 눌러 vault 검색 오버레이를 엽니다. 입력을 시작하면 결과가 실시간으로 나타납니다. 각 결과 행은 파일명과 일치하는 줄의 미리 보기를 표시하여 한눈에 올바른 파일을 식별할 수 있습니다.

![실시간 결과가 있는 vault 전체 검색 오버레이](../../../../assets/images/06-vault-search-shift-f4.png)

<KeymapTable rows={[
  { keys: 'Shift+F4', action: 'vault 검색 오버레이 열기', notes: '모든 파일의 제목, 본문, 태그를 검색합니다' },
  { keys: 'Enter', action: '선택한 파일 열기', notes: '파일로 이동; 커서가 일치하는 줄에 위치합니다' },
  { keys: 'Esc', action: '오버레이 닫기', notes: '내비게이션 없이 에디터로 포커스 반환' },
]} />

## 특수 쿼리 토큰

검색 입력은 일반 단어 외에 두 가지 추가 토큰 유형을 이해합니다:

- **`#tag`** — 지정한 태그를 포함하는 파일과 일치합니다. 예를 들어 `#travel`을 입력하면 `#travel`로 태그된 모든 파일을 찾습니다.
- **`[[wikilink]]`** — 주어진 제목을 참조하는 wikilink가 포함된 파일과 일치합니다. 예를 들어 `[[chunker]]`는 `chunker`로 링크하는 파일을 찾습니다.

단일 쿼리에서 일반 키워드와 조합할 수 있습니다: `#project meeting notes`는 `#project`로 태그되고 본문에 "meeting"과 "notes"라는 단어가 포함된 파일을 찾습니다.

## 대소문자 구분 전환

기본적으로 검색은 대소문자를 구분하지 않습니다. 오버레이 내에서 `Tab`을 눌러 대소문자 구분을 전환합니다. 대소문자 구분 모드가 활성화되면 검색 입력 옆에 `Aa` 배지가 표시되며, `Tab`을 다시 누르면 대소문자 구분 없는 모드로 돌아갑니다.

<KeymapTable rows={[
  { keys: 'Tab', action: '대소문자 구분 전환', notes: '대소문자 구분 모드가 활성화되면 Aa 배지가 표시됨' },
]} />

## 결과 탐색

<KeymapTable rows={[
  { keys: '↑ / ↓', action: '결과 이동', notes: '각 행은 파일명과 일치하는 줄 미리 보기를 표시합니다' },
  { keys: 'Enter', action: '하이라이트된 파일 열기', notes: '커서가 일치 항목이 포함된 줄에 위치합니다' },
]} />

## 시맨틱 검색

Vault 검색은 키워드 풀텍스트 매칭(FTS5)을 사용합니다. 벡터 기반 시맨틱 검색 — "유사한 개념에 대한 파일" — 은 별도의 Tier 2 임베딩 인덱스와 `Shift+F5` 스코프 선택기를 설명하는 [시맨틱 인덱스](/jvim-public/ko/usage/semantic-index/) 페이지를 참조하세요.

## 관련 문서

- [시맨틱 인덱스](/jvim-public/ko/usage/semantic-index/)
- [태그](/jvim-public/ko/usage/tags/)
- [내비게이션](/jvim-public/ko/usage/navigation/)
- [키맵 — 전체 참고](/jvim-public/ko/keymap/full/)
