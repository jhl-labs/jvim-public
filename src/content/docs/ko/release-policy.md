---
title: 릴리스 정책
description: 버전 관리, 릴리스 주기, 지원 기간, 검증 체크리스트, 라이선스 조건.
---

`jvim` 릴리스의 버전 관리, 배포, 지원 방식을 설명합니다. 이 문서는 사용자를 위한 약속입니다 — 릴리스에서 무엇을 기대할 수 있는지, 어떻게 검증하는지, 어떤 지원 기간이 적용되는지를 안내합니다.

내부 절차(빌드 스크립트, 유출 검사 명령어, 비밀 관리)는 의도적으로 이 저장소에 포함되지 않습니다.

## 버전 관리

`jvim`은 [Semantic Versioning 2.0.0](https://semver.org/)을 따릅니다.

| 변경 유형 | 예시 | 언제 올라가나 |
|---|---|---|
| **패치** (`0.0.x`) | `0.1.0 → 0.1.1` | 버그 수정, 보안 패치, 동작에 영향 없는 문서 변경 |
| **마이너** (`0.x.0`) | `0.1.3 → 0.2.0` | 새 기능, 새 키바인딩, 새 설정 옵션 — 하위 호환 |
| **메이저** (`x.0.0`) | `0.9.2 → 1.0.0` | 설정 스키마 호환성 변경, 명령어/키바인딩 제거, CLI 플래그 변경 |

### 1.0 이전 주의 사항

`0.x.y` 기간 동안:

- **하위 호환성을 깨는 변경이 마이너 범프에 포함될 수 있습니다.** SemVer 기술적으로 1.0 이전에는 허용됩니다. 최소화하려 노력하지만 `0.x` 버전 간 무결성을 보장하지는 않습니다.
- 모든 호환성 변경은 [`CHANGELOG.md`](https://github.com/jhl-labs/jvim-public/blob/main/CHANGELOG.md)의 명확히 표시된 **Breaking** 섹션에 기록됩니다.
- `1.0.0` 이후에는 엄격한 SemVer가 적용됩니다 — 마이너나 패치에서 호환성을 깨지 않습니다.

## 릴리스 주기

| 주기 | 빈도 | 트리거 |
|---|---|---|
| **패치** | 비정기 | 버그 수정이 준비되고 검증된 경우 |
| **마이너** | 2~6주마다 | 축적된 기능이 릴리스를 정당화하는 경우 |
| **보안** | 패치 준비 후 **7일 이내** | 패치가 있는 확인된 취약점 |

고정된 일정을 약속하지 않습니다. 폴링 없이 알림을 받으려면
[Releases 피드](https://github.com/jhl-labs/jvim-public/releases.atom)를 구독하세요.

## 배포 채널

| 채널 | URL | 참고 |
|---|---|---|
| **npm** (권장) | [`@jhl_labs/jvim`](https://www.npmjs.com/package/@jhl_labs/jvim) + `@jhl_labs/jvim-linux-*` | 공식 |
| **GitHub Releases** | [`jhl-labs/jvim-public/releases`](https://github.com/jhl-labs/jvim-public/releases) | 동일한 바이너리, SHA-256 체크섬과 투명성 리포트 포함 |

두 채널 모두 동일 버전에 대해 비트 단위로 동일한 바이너리를 제공합니다.
GitHub Release에는 [투명성 리포트](/jvim-public/ko/transparency/reports/)에 나열된 리포트도 포함됩니다.

## 모든 릴리스에 포함되는 것들

바이너리:

- `jvim-<version>-linux-x64.tar.gz` + `.sha256`
- `jvim-<version>-linux-arm64.tar.gz` + `.sha256`

투명성 리포트 ([투명성 리포트](/jvim-public/ko/transparency/reports/) 참고):

- `sbom.json` — CycloneDX 소프트웨어 구성 목록
- `trivy-scan.json`, `osv-scan.json` — 취약점 스캔
- `third-party-notices.txt` — 번들된 의존성 라이선스

커버리지와 테스트 HTML 리포트는 비공개 소스 경로를 열거하므로 내부에만 보관합니다.

## 난독화와 소스 보호

`jvim`은 클로즈드 소스 제품입니다. 릴리스 바이너리는:

- **최소화됨** — 모든 내부 식별자가 1~2자리로 맹글링됨.
- **소스맵 없음** — 인라인 base64 소스맵 없음.
- **화이트리스트 적용** — npm 패키지에는 런처/바이너리 파일, `LICENSE`,
  `NOTICE`, `README.md`, 릴리스 투명성 메타데이터만 포함.
  `src/`, `tests/`, `*.map` 파일은 사용자에게 전달되지 않음.

모든 릴리스는 공개 전 위 불변성을 검증합니다.
내부 검증 런북은 비공개 소스 저장소에 있습니다.

바이너리 덤프에서 볼 수 *있는* 것:

- 내부 Bun 런타임 문자열 (HMR 런타임 소스맵 메타데이터, 오류 리포터 코드, React SSR 스캐폴딩). 이것들은 [Bun](https://bun.sh) 런타임의 상수 — jvim 고유 소스가 아님.

볼 수 **없는** 것:

- jvim 파일 경로 (`src/ui/...`, `src/app/...` 없음).
- jvim 식별자 (함수명, 변수명, 컴포넌트명).
- 원본 TypeScript로 역추적 가능한 소스맵.

이에 반하는 것 — 릴리스 바이너리에서 읽을 수 있는 jvim 소스 스니펫 — 을 발견했다면
[보안 이슈](/jvim-public/ko/security/)로 신고해 주세요. 릴리스 파이프라인의 회귀를 나타냅니다.

## 지원 기간

**현재 마이너 버전**과 **이전 마이너 버전**을 지원합니다.

| 버전 | 지원 상태 |
|---|---|
| 현재 마이너 (예: `0.2.3`이 최신일 때 `0.2.x`) | 전체 — 버그 수정과 보안 패치 |
| 이전 마이너 (예: `0.1.x`) | 후속 마이너 출시 후 90일간 보안 수정만 |
| 더 이전 마이너 | 미지원 — 업그레이드 권장 |

1.0 이전은 변동 중입니다. 규제 환경에 배포된 버전에 대해서는 소급 지원을 확장합니다 —
제약 조건을 설명하는 [질문](https://github.com/jhl-labs/jvim-public/issues/new?template=question.yml) 이슈를 열어 주시면 서면으로 약속하겠습니다.

## 롤백 정책

릴리스에 문제가 발견된 경우:

1. 수정된 **새 패치 버전**을 공개합니다 — npm은 버전 번호 재사용을 금지하므로 **unpublish는 하지 않습니다**.
2. 문제가 있는 버전은 npm에서 `deprecated`로 표시되고 수정 버전을 안내합니다.
3. 문제가 심각하면 해당 버전의 GitHub Release에 상단에 **⚠ 알려진 문제 — vX.Y.Z로 업그레이드** 배너가 추가됩니다.

재현성을 위해 문제 있는 바이너리는 다운로드 가능한 상태로 유지됩니다. 릴리스를 소급 삭제하지 않습니다.

## 사용자를 위한 검증 체크리스트

새 버전을 프로덕션에 배포하기 전:

1. 다운로드한 tarball의 **SHA-256을 GitHub Releases의 `.sha256` 파일과 비교**하세요.
2. 현재 버전 이후의 `Breaking` 항목이 있는지 **`CHANGELOG.md`를 확인**하세요.
3. SCA 도구에서 플래그하는 의존성이 있는지 **SBOM을 스캔**하세요.
4. 조직의 CVE 심각도 기준에 따라 **`trivy-scan.json` / `osv-scan.json`을 검토**하세요.
5. **스테이징 환경에서 테스트** — 특히 터미널 에뮬레이터별 기능 (일부 터미널은 키바인딩을 다르게 처리합니다).

## 라이선싱

모든 릴리스는 이 저장소의 **jvim Software License** ([LICENSE](https://github.com/jhl-labs/jvim-public/blob/main/LICENSE))를 따르며, 모든 npm 패키지와 릴리스 tarball 안에 `LICENSE`로 포함됩니다.

라이선스는 바이너리의 자유로운 사용(상업적 이용, 재배포 포함)을 허가하면서 소스 코드는 독점으로 유지합니다. 역엔지니어링, 디난독화, 및 우발적 공개를 포함한 어떠한 수단으로 입수한 소스 코드의 사용도 JHL Labs의 사전 서면 허가가 필요합니다.

npm 매니페스트는 `"license": "SEE LICENSE IN LICENSE"`를 선언하며, 전체 라이선스 텍스트가 각 패키지 tarball 안에 포함되어 이 저장소를 방문하지 않아도 확인할 수 있습니다.

## 릴리스 문제 신고

- 바이너리 손상, 체크섬 불일치, 누락된 리포트 →
  [버그 리포트](https://github.com/jhl-labs/jvim-public/issues/new?template=bug_report.yml)
- 릴리스의 보안 이슈 → [보안 정책](/jvim-public/ko/security/)
- 지원 상태 문의 → [질문](https://github.com/jhl-labs/jvim-public/issues/new?template=question.yml)
- 소스 코드 라이선싱 / 상업적 파트너십 문의 → `bkperio@gmail.com`
