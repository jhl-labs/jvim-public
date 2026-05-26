---
title: 투명성 리포트
description: 릴리스별 SBOM, 보안 스캔, 서드파티 고지.
---

각 릴리스에는 다음 리포트가 GitHub Release 페이지에 첨부됩니다:

- `sbom.json` — CycloneDX SBOM
- `trivy-scan.json` — Trivy 취약점 스캔
- `osv-scan.json` — OSV 스캔
- `third-party-notices.txt` — OSS 출처 표기

[최신 릴리스 →](https://github.com/jhl-labs/jvim-public/releases/latest)

## 커버리지 / 테스트 리포트를 공개하지 않는 이유

커버리지(`coverage-lcov.info`)와 테스트 HTML 리포트는 `src/**` 파일 경로를 열거하므로 클로즈드 소스 구조가 유출될 수 있습니다. 해당 파일들은 내부에서만 보관합니다.
