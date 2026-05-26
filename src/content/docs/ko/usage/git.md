---
title: Git 연동
description: 상태 바에서 미커밋 변경 사항을 추적하고, 파일별 diff hunk를 탐색하며, jvim 안에서 커밋, push, pull, fetch를 실행하세요.
---

import AsciinemaPlayer from '../../../../components/AsciinemaPlayer.astro';
import KeymapTable from '../../../../components/KeymapTable.astro';

jvim은 볼트 디렉토리를 git 저장소로 취급합니다. 상태 바는 현재 파일의 실시간 diff 수를 보여주고, 전용 패널은 파일별 hunk를 나열하며, 커맨드 팔레트에서 에디터를 벗어나지 않고 커밋, push, pull, fetch를 실행할 수 있습니다. 내부적으로 jvim은 시스템의 `git` 바이너리를 사용하므로 기존의 credential helper, SSH 에이전트, GPG 서명 설정이 모두 자동으로 적용됩니다.

<AsciinemaPlayer slug="git" title="Git: diff 패널, 커밋, push, pull" />

## 상태 바의 실시간 Diff

편집 중에 상태 바 헤더는 마지막 커밋 대비 추가 및 삭제된 라인 수를 `+N / −M` 형식으로 실시간으로 표시합니다. 저장할 때마다 수가 갱신됩니다. 카운트가 0이면 파일이 클린 상태입니다.

이 표시기를 통해 오버레이를 열지 않고도 워킹 트리가 HEAD에서 얼마나 벗어났는지 항상 파악할 수 있습니다.

## 커밋 로그 오버레이

`F5`(또는 `Ctrl+L`)를 누르면 커밋 로그 오버레이가 열립니다 — 작성자, 짧은 SHA, 커밋 메시지와 함께 최근 커밋 목록이 표시됩니다. 히스토리를 검토하거나 최근 커밋이 반영되었는지 확인할 때 사용하세요.

![커밋 로그 오버레이](../../../../assets/images/46-commit-log-f5.png)

<KeymapTable rows={[
  { keys: 'F5 / Ctrl+L', action: '커밋 로그 열기', notes: '최근 커밋 목록: 작성자, SHA, 메시지' },
  { keys: '↑ / ↓', action: '항목 탐색', notes: '커밋 목록을 탐색합니다' },
  { keys: 'Esc', action: '오버레이 닫기', notes: '에디터로 돌아갑니다' },
]} />

## 현재 파일 Diff Hunk 패널

diff hunk 패널은 현재 파일의 미커밋 변경 사항을 개별 hunk로 나누어 보여줍니다 — `git diff HEAD <file>`에서 얻는 것과 동일한 뷰를 인라인으로 렌더링합니다.

<KeymapTable rows={[
  { keys: 'Ctrl+P / F4', action: '커맨드 팔레트 열기', notes: '"diff"를 입력하면 현재 파일의 diff 패널이 열립니다' },
]} />

각 hunk는 이전 라인과 새 라인을 나란히 보여줍니다. 화살표 키로 hunk를 탐색합니다. 패널은 읽기 전용입니다 — 변경은 에디터 버퍼에서 평소처럼 이루어지고 `Ctrl+S`로 저장합니다.

## 커밋, Push, Pull, Fetch

Git 작업은 커맨드 팔레트(`F4` 또는 `Ctrl+P`)를 통해 사용할 수 있습니다. 작업 이름을 입력하면 필터링됩니다:

- **commit** — 추적된 모든 변경 사항을 스테이징하고 커밋 메시지 입력 프롬프트를 엽니다.
- **push** — 현재 브랜치를 업스트림 리모트에 push합니다.
- **pull** — fetch 후 fast-forward(`--ff-only`)합니다. 로컬 브랜치가 분기된 경우, 머지 커밋을 만들지 않고 pull을 거부합니다. 다시 시도하기 전에 수동으로 rebase하거나 reset하세요.
- **fetch** — 머지 없이 리모트에서 fetch합니다.

<KeymapTable rows={[
  { keys: 'F4 / Ctrl+P', action: '커맨드 팔레트 열기', notes: 'commit / push / pull / fetch를 입력해 git 작업 실행' },
]} />

진행 상황과 오류는 상태 바에 토스트 알림으로 표시됩니다. 인증이 필요한 push는 시스템 credential helper 또는 SSH 에이전트를 통해 프롬프트가 표시됩니다 — jvim이 직접 자격 증명을 관리하지 않습니다.

## 내부적으로 사용하는 시스템 Git

jvim은 `PATH`에 있는 `git` 바이너리를 셸로 실행합니다. 이는 다음을 의미합니다:

- `~/.gitconfig`(사용자 이름, 이메일, 서명 키)가 존중됩니다.
- SSH 에이전트 포워딩은 jvim에서 별도 설정 없이 작동합니다.
- GPG 또는 SSH 커밋 서명은 기존 git 설정을 따릅니다.
- `.gitignore` 파일은 모든 git 작업에서 적용됩니다.

`git`이 `PATH`에 없으면 git 연동이 자동으로 비활성화되고 diff 표시기가 표시되지 않습니다.

## 체크아웃 후 재인덱싱

시맨틱 인덱스와 wikilink 그래프는 볼트를 인식하므로 `git checkout` 후에도 손상 없이 유지됩니다. 브랜치를 전환하고 볼트 내용이 크게 변경된 경우 수동 재인덱싱을 트리거하세요:

<KeymapTable rows={[
  { keys: 'Ctrl+R', action: '볼트 재인덱싱', notes: '전체 시맨틱 인덱스와 링크 그래프를 재구성합니다' },
]} />

## 관련 항목

- [에디터 기본](/jvim-public/ko/usage/editor-basics/)
- [키맵 — 전체 참조](/jvim-public/ko/keymap/full/)
