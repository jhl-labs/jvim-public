---
title: 버퍼와 탭
description: 버퍼 모델, 탭 바, 키보드 순환, 탭별 dirty 마커를 사용해 jvim에서 여러 파일을 동시에 작업하세요.
---

import AsciinemaPlayer from '../../../../components/AsciinemaPlayer.astro';
import KeymapTable from '../../../../components/KeymapTable.astro';

jvim에서 열리는 모든 파일은 **버퍼** — 파일 내용의 메모리 상의 사본 — 가 됩니다. 동시에 여러 버퍼를 열 수 있습니다. 두 개 이상이 열리면 jvim은 에디터 영역 상단에 탭 바를 표시하여 열려 있는 모든 파일을 확인하고, 파일 트리를 사용하지 않고도 탭 간에 이동할 수 있습니다.

<AsciinemaPlayer slug="buffers-tabs" title="버퍼와 탭: 순환, 닫기, dirty 마커" />

## 여러 버퍼 열기

`Ctrl+O`(파일 팔레트)를 누르거나 파일 트리에서 파일에 `Enter`를 눌러 추가 파일을 엽니다. 열린 각 파일은 새 탭으로 나타납니다. 탭 바는 두 개 이상의 버퍼가 열리는 즉시 표시됩니다.

<KeymapTable rows={[
  { keys: 'Ctrl+O', action: '파일 팔레트 열기', notes: '볼트를 퍼지 검색해 새 버퍼에 파일을 엽니다' },
  { keys: 'Ctrl+N', action: '새 버퍼', notes: '비어 있는 이름 없는 버퍼를 만듭니다' },
]} />

## 버퍼 간 순환

키보드 단축키로 열린 버퍼 간에 순환합니다. 탭 바는 현재 활성 버퍼를 강조 표시합니다.

<KeymapTable rows={[
  { keys: 'Ctrl+PgDn', action: '다음 버퍼', notes: '오른쪽의 다음 탭으로 전환합니다' },
  { keys: 'Ctrl+PgUp', action: '이전 버퍼', notes: '왼쪽의 이전 탭으로 전환합니다' },
]} />

일부 터미널은 애플리케이션에 키를 전달하기 전에 자체 탭 전환을 위해 `Ctrl+PgUp` / `Ctrl+PgDn`을 가로챌 수 있습니다. 단축키가 반응하지 않으면, 먼저 파일 트리에 포커스를 이동(`Ctrl+E`)한 다음 `Ctrl+Shift+→` / `Ctrl+Shift+←`로 버퍼를 순환하세요.

## 버퍼 닫기

`Ctrl+W`로 활성 버퍼를 닫습니다. 버퍼에 저장되지 않은 변경 사항(`●` 표시)이 있으면 jvim은 닫기 전에 확인 프롬프트를 표시합니다.

![dirty 닫기 확인 다이얼로그](../../../../assets/images/17-dirty-close-confirm.png)

<KeymapTable rows={[
  { keys: 'Ctrl+W', action: '현재 버퍼 닫기', notes: '저장되지 않은 변경 사항이 있으면 확인을 요청합니다' },
  { keys: 'Ctrl+S', action: '버퍼 저장', notes: '닫기 전에 저장해 확인 프롬프트를 방지합니다' },
]} />

마지막으로 열린 버퍼를 닫으면 jvim은 빈 에디터 상태로 돌아갑니다. 애플리케이션은 계속 열려 있으며 — 즉시 새 파일을 열거나 새 버퍼를 만들 수 있습니다.

## Dirty 마커

탭 바의 각 탭은 파일의 기본 이름을 표시합니다. 버퍼에 저장되지 않은 변경 사항이 있으면 파일명 옆에 `●`(채워진 원)이 나타납니다. `Ctrl+S`로 저장하면 바로 사라집니다.

이 마커는 버퍼별로 적용됩니다 — 일부 탭은 클린 상태이고 다른 탭은 dirty 상태일 수 있습니다. `●`는 현재 활성 버퍼의 메인 상태 바에도 표시됩니다.

## 관련 항목

- [에디터 기본](/jvim-public/ko/usage/editor-basics/)
- [내비게이션](/jvim-public/ko/usage/navigation/)
- [키맵 — 전체 참조](/jvim-public/ko/keymap/full/)
