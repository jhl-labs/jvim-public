---
title: 설정
description: jvim의 설정 오버레이, TUI 설정 마법사, effective settings 뷰, config.toml 위치를 살펴보세요.
---

import AsciinemaPlayer from '../../../../components/AsciinemaPlayer.astro';
import KeymapTable from '../../../../components/KeymapTable.astro';

jvim은 모든 설정을 하나의 `config.toml` 파일에 저장합니다. 직접 편집하거나 내장 설정 오버레이(`F10`)를 사용할 수 있으며, 오버레이는 문법 유효성 검사와 함께 jvim 내부에서 파일을 엽니다. 변경 사항은 저장 즉시 적용됩니다 — 재시작이 필요 없습니다.

<AsciinemaPlayer slug="settings" title="설정: 오버레이, config.toml, F1 도움말" />

## 설정 오버레이

`F10`(또는 `Ctrl+K`)을 눌러 설정 오버레이를 엽니다. 메인 에디터와 동일한 키 바인딩을 사용하는 `config.toml`의 전문 편집기입니다. `Ctrl+S`로 저장하면 설정이 적용됩니다.

![F10으로 열린 설정 오버레이](../../../../assets/images/11-settings-f10.png)

<KeymapTable rows={[
  { keys: 'F10 / Ctrl+K', action: '설정 오버레이 열기', notes: '편집 가능한 오버레이에서 config.toml을 엽니다' },
  { keys: 'Ctrl+S', action: '저장 및 적용', notes: 'config.toml을 기록하고 재시작 없이 변경 사항을 적용합니다' },
  { keys: 'Esc', action: '저장 없이 닫기', notes: '편집 내용을 버리고 에디터로 돌아갑니다' },
]} />

저장 시 TOML에 문법 오류가 있으면 jvim은 오류 토스트를 표시하고 이전의 유효한 설정을 유지합니다. 편집(잘못된) 텍스트는 오버레이에 남아 있어 수정할 수 있습니다.

## 설정 파일 위치

설정 파일은 다음 위치에 있습니다:

```
~/.config/jvim/config.toml
```

jvim 외부의 텍스트 편집기로도 이 파일을 편집할 수 있습니다. 외부에서 변경한 내용은 다음번 jvim 시작 시 반영됩니다.

## 주요 설정 섹션

### Editor

```toml
[editor]
tab_size = 2
line_numbers = true
scroll_off = 5
```

### AI 프로바이더

```toml
[ai]
provider = "openai"          # openai | anthropic | ollama | custom
model = "gpt-4o"
inline_model = "gpt-4o-mini" # 선택 사항: 고스트 텍스트용 별도 모델
```

전체 프로바이더 설정 가이드는 [AI 오버레이](/jvim-public/ko/usage/ai-overlay/)를 참조하세요.

### 업데이트

```toml
[updates]
check_on_start = true    # npm 업데이트 확인을 비활성화하려면 false로 설정
```

## F1 도움말 오버레이

`F1`은 jvim 내부에서 검색 가능한 키맵 참조를 엽니다. 카테고리별로 그룹화된 모든 단축키가 나열됩니다. 입력하면 실시간으로 목록이 좁혀집니다.

![키 바인딩을 표시하는 F1 도움말 오버레이](../../../../assets/images/04-help-f1.png)

<KeymapTable rows={[
  { keys: 'F1', action: '키맵 도움말 오버레이 열기', notes: '항상 사용 가능한 검색 가능 단축키 참조' },
  { keys: '입력하여 필터', action: '목록 좁히기', notes: '입력하는 동안 일치하는 단축키만 표시합니다' },
  { keys: 'Esc', action: '도움말 닫기', notes: '에디터로 돌아갑니다' },
]} />

도움말 오버레이는 앱 내 빠른 참조입니다 — 주석이 달린 전체 키맵은 [키맵 — 전체 참조](/jvim-public/ko/keymap/full/)를 참조하세요.

## 첫 실행 설정 마법사

jvim이 처음 실행될 때 `config.toml`이 없으면 TUI 설정 마법사가 실행됩니다. 마법사는 다음을 묻습니다:

- 선호하는 AI 프로바이더와 API 키 (선택 사항 — AI 기능 없이 jvim을 사용하려면 건너뛰세요)
- 에디터 환경설정 (탭 크기, 라인 번호)

마법사는 결과 `config.toml`을 작성하고 종료합니다. 나중에 `F10`을 통해 다시 실행하거나 설정을 조정할 수 있습니다.

## 재시작 없는 설정 다시 불러오기

`F10` 오버레이를 통해 변경한 모든 설정은 저장 즉시 적용됩니다. jvim을 종료하고 다시 시작할 필요가 없습니다. 유일한 예외는 AI 프로바이더 기본 URL 변경으로, HTTP 클라이언트를 재연결하려면 재시작이 필요합니다.

## 관련 항목

- [AI 오버레이](/jvim-public/ko/usage/ai-overlay/)
- [키맵 — 전체 참조](/jvim-public/ko/keymap/full/)
