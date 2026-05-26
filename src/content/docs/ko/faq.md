---
title: 자주 묻는 질문
description: jvim에 관한 30개 이상의 자주 묻는 질문 — 설치, AI, 키맵, 데이터, 트러블슈팅, 라이선스.
---

## 설치 · 플랫폼

### 어떤 플랫폼을 지원하나요?

현재 Linux x64와 arm64를 지원합니다. macOS와 Windows는 로드맵에 있습니다 — 지원 매트릭스는
[릴리스 정책](/jvim-public/ko/release-policy/)을 참고하세요.

### jvim이 WSL에서 동작하나요?

네. WSL 내부에서 npm으로 설치하세요 (`npm install -g @jhl_labs/jvim`).
에디터가 터미널을 가득 채우지 않는다면, `jvim --version`이 최신 릴리스와 일치하는지 확인하세요 —
이전 버전에는 `~`-fill regression이 있었습니다. [설치 트러블슈팅](/jvim-public/ko/install/#troubleshooting)을 참고하세요.

### jvim이 Lima / Docker에서 macOS 환경으로 동작하나요?

Lima 또는 Docker에서 Linux 바이너리를 실행할 수 있지만, 중첩 가상화 환경에서는 TTY 처리가 까다롭습니다. 네이티브 macOS 지원은 로드맵에 있습니다.

### ARM Mac(M1/M2/M3)은 어떻게 되나요?

네이티브 macOS arm64는 아직 제공되지 않습니다. 그 동안은 OrbStack이나 UTM을 통해 Linux arm64를 사용하세요.

### 왜 npm으로만 설치할 수 있나요?

GitHub Releases 페이지에서 독립형 바이너리도 제공합니다. npm이 권장되는 이유는 업그레이드를 자동으로 처리하고 올바른 아키텍처를 자동으로 선택해 주기 때문입니다.

## AI · 프라이버시

### jvim이 내 노트를 AI 프로바이더에 전송하나요?

AI 오버레이(Alt+A 등)를 명시적으로 사용할 때만 전송됩니다. AI 요청이 없으면 어떤 데이터도 외부로 나가지 않습니다.

### 어떤 AI 프로바이더를 지원하나요?

OpenAI, Anthropic, 그리고 Ollama 또는 llama.cpp를 통한 로컬 LLM을 지원합니다. `F1 → settings`에서 설정하거나 `~/.config/jvim/config.toml`을 직접 편집하세요.

### 로컬 LLM을 사용할 수 있나요?

네. jvim을 Ollama 또는 llama.cpp 엔드포인트에 연결하세요. 자세한 내용은
[AI 오버레이](/jvim-public/ko/usage/ai-overlay/)를 참고하세요.

### jvim이 텔레메트리를 수집하나요?

텔레메트리는 **opt-in** 방식이며 **기본적으로 비활성화**되어 있습니다. 디버깅을 위해 명시적으로 활성화하지 않는 한, 사용 패턴, 파일, 쿼리를 추적하지 않습니다.

### jvim이 내 API 키를 어떻게 저장하나요?

API 키는 `~/.config/jvim/config.toml`(chmod 600)에 저장됩니다. 로그에 기록되거나 설정된 프로바이더 외부로 전송되지 않습니다.

## 키맵 · UX

### 특정 줄로 이동하려면 어떻게 하나요?

`Shift+F3` — 줄 이동 다이얼로그입니다.

### 왜 Ctrl+G 대신 Shift+F3인가요?

`Ctrl+G`는 많은 에디터에서 "go to definition" / "graph view"로 예약되어 있습니다. 중복 사용을 피하기 위해 Shift+F3을 선택했으며, 테스트한 모든 주요 터미널에서 사용되지 않는 키입니다.

### 키맵을 커스터마이즈할 수 있나요?

아직 지원하지 않습니다. 설정 파일 기반 키맵은 로드맵에 있습니다. 공개 저장소의 backlog를 참고하세요.

### jvim이 IME(한국어, 일본어, 중국어)와 함께 동작하나요?

네. 모든 입력 필드에서 IME 교체 리스너를 공유합니다. IME 관련 버그가 발생하면 공개 저장소에 리포트해 주세요.

### 터미널이 Ctrl+S를 가로채면 어떻게 하나요?

일부 터미널은 XON/XOFF 흐름 제어로 Ctrl+S를 OS에 전달합니다. jvim은 시작 시 `stty -ixon -ixoff`로 이를 자동으로 비활성화합니다. 그래도 터미널이 해당 키를 삼킨다면 [설치 트러블슈팅](/jvim-public/ko/install/)을 참고하세요.

## 데이터 · vault

### jvim은 내 데이터를 어디에 저장하나요?

vault는 열었던 위치 그대로입니다. jvim은 파일을 이동하거나 복사하지 않습니다. vault별 메타데이터(커서 위치, 최근 파일)는 `<vault>/.jvim/`에 저장됩니다.

### Obsidian / Notion / Notepad에서 어떻게 마이그레이션하나요?

마크다운 파일을 폴더에 넣고 `jvim ./that-folder/`를 실행하면 됩니다. 위키링크와 태그가 즉시 동작합니다. 자세한 내용은 [마이그레이션 가이드](/jvim-public/ko/migrate-from/obsidian/)를 참고하세요.

### 기기 간 동기화가 가능한가요?

jvim 자체에는 동기화 기능이 없습니다. vault를 iCloud / Dropbox / Syncthing / git에 올려두면 jvim이 동기화된 파일을 그대로 인식합니다.

### 백업은 어떻게 하나요?

vault를 git으로 관리하는 것을 권장합니다. 추가적으로 jvim은 git과 네이티브로 통합되어 있어 diff 패널, commit, push를 바로 사용할 수 있습니다.

### 파일 크기 제한이 있나요?

50 MB를 초과하는 파일은 명확한 오류 메시지와 함께 거부됩니다. 바이너리 파일은 자동으로 감지되어 파일 트리에서 제외됩니다.

## 트러블슈팅

### jvim이 빈 화면과 함께 즉시 종료됩니다

셸에 `CI=true`가 설정되어 있으면, jvim의 렌더링 레이어인 Ink가 append-only 모드로 전환됩니다. `unset CI && jvim`을 실행하세요.

### 에디터가 터미널 전체를 채우지 않습니다

`jvim --version`을 확인하세요. v0.5.0/0.5.1에는 짧은 문서를 열었을 때 화면 하단이 비는 regression이 있었습니다. v0.5.2 이상으로 업그레이드하세요.

### vault 검색에 결과가 나오지 않습니다

커맨드 팔레트(F4)에서 `:reindex`를 실행하세요. vault 인덱스는 첫 번째 검색 시 지연 빌드됩니다.

### AI 오버레이에서 "no provider configured"가 표시됩니다

`F1 → AI settings`에서 프로바이더와 API 키를 설정하세요. [AI 오버레이 설정](/jvim-public/ko/usage/ai-overlay/)을 참고하세요.

### 버그를 어떻게 리포트하나요?

공개 저장소의 [GitHub 이슈](https://github.com/jhl-labs/jvim-public/issues)에 올려주세요.
다음 정보를 포함해 주세요: jvim 버전(`jvim --version`), OS, 터미널 앱, 재현 단계.

### jvim이 사용하는 라이브러리에서 버그를 발견했습니다. 어디에 리포트해야 하나요?

업스트림에 리포트하는 것이 우선입니다(더 많은 사람이 볼 수 있습니다). 하지만 핀/패치를 검토할 수 있도록 공개 저장소에도 알려주세요.

## 라이선스 · 미래

### jvim은 오픈 소스인가요?

아닙니다. 바이너리는 자유롭게 사용, 공유, 상업적 목적으로 실행할 수 있습니다. 소스 코드는 비공개입니다.
[라이선스](/jvim-public/ko/license/)를 참고하세요.

### jvim을 리버스 엔지니어링할 수 있나요?

아닙니다 — 라이선스로 금지되어 있습니다. 바이너리는 이를 강제하기 위해 난독화되어 있습니다.

### jvim 바이너리로 AI 모델을 훈련할 수 있나요?

아닙니다 — jvim 바이너리나 소스에 대한 ML 훈련은 라이선스로 금지되어 있습니다.

### 유료 버전이 출시될 예정인가요?

현재는 계획이 없습니다. 바이너리는 모든 용도에 무료입니다.

### 플러그인 시스템이 있나요?

아직 없습니다 — 장기 로드맵에 있습니다.

### macOS / Windows 바이너리가 출시될 예정인가요?

네 — 로드맵에 있습니다. 지원 매트릭스는 [릴리스 정책](/jvim-public/ko/release-policy/)을 참고하세요.
