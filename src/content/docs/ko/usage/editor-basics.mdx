---
title: 에디터 기본
description: jvim에서 파일과 vault를 열고, 텍스트를 편집하고, 원자적으로 저장하며, 상태바 표시기를 이해하는 방법입니다.
---

import AsciinemaPlayer from '../../../../components/AsciinemaPlayer.astro';
import KeymapTable from '../../../../components/KeymapTable.astro';

jvim은 별도의 모드 전환이나 설정 없이 편집 가능한 버퍼로 바로 실행됩니다. 이 페이지에서는 파일과 vault 열기, 상태바 읽기, 저장, 실행 취소/다시 실행 등 기본 사항을 다룹니다.

<AsciinemaPlayer slug="editor-basics" title="에디터 기본: 열기, 편집, 저장" />

## 파일과 Vault 열기

터미널에서 `jvim`에 단일 파일이나 디렉토리를 전달합니다. 둘 다 사용 가능합니다:

```
jvim notes.md          # 단일 파일 열기
jvim ./my-vault/       # vault 열기 (왼쪽에 파일 트리 표시)
```

경로가 존재하지 않으면 jvim은 빈 버퍼를 생성합니다 — `vi`나 메모장과 동일한 동작입니다. 파일은 명시적으로 저장할 때만 디스크에 기록됩니다.

![README 파일이 열린 jvim 에디터](../../../../assets/images/02-readme-open.png)

<KeymapTable rows={[
  { keys: 'Ctrl+S', action: '저장', notes: '원자적 쓰기 + fsync — 충돌 시 부분 쓰기 방지' },
  { keys: 'Ctrl+Shift+S', action: '다른 이름으로 저장', notes: '새 경로에 쓰기; 현재 버퍼가 새 파일을 따라감' },
]} />

## 상태바 표시기

상태바는 편집하는 동안 실시간으로 업데이트됩니다. 주요 표시기:

- **`●`** — 버퍼에 저장되지 않은 변경 사항이 있습니다.
- **EOL** — 현재 줄 끝 스타일 (`LF`, `CRLF`).
- **저장 상태** — 쓰기 성공 후 잠시 `Saved`를 표시합니다.
- **Git diff 요약** — 마지막 커밋 대비 추가/삭제 줄 수, 저장 시마다 업데이트됩니다.

저장하기 전까지는 메모리 내 버퍼만 수정됩니다. `Ctrl+S`가 완료되는 즉시 `●` 점이 사라집니다.

## 실행 취소, 다시 실행, 전체 선택

jvim은 세션 동안 전체 실행 취소 히스토리를 유지합니다. 단일 편집 세션에서는 실행 취소 횟수에 제한이 없습니다.

<KeymapTable rows={[
  { keys: 'Ctrl+Z', action: '실행 취소', notes: '한 단계 되돌리기' },
  { keys: 'Ctrl+Y', action: '다시 실행', notes: '취소된 편집을 다시 적용' },
  { keys: 'Ctrl+A', action: '전체 선택', notes: '버퍼 전체 내용 선택' },
]} />

## EOF 패딩

뷰포트 하단의 빈 줄은 vim 스타일 `~` 마커로 채워집니다. 이는 시각적 표시일 뿐이며 파일에는 나타나지 않습니다. 패딩은 뷰포트 경계를 명확히 해서 문서가 어디서 끝나는지 항상 알 수 있게 합니다.

## 관련 문서

- [파일 트리](/jvim-public/ko/usage/file-tree/)
- [검색 / 치환](/jvim-public/ko/usage/find-replace/)
- [키맵 — 기본](/jvim-public/ko/keymap/essentials/)
