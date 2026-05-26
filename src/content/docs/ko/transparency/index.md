---
title: 투명성
description: jvim이 데이터를 어떻게 처리하는지, 무엇을 공개하는지, 릴리스를 어떻게 검증하는지.
---

jvim은 클로즈드 소스이지만 모든 릴리스에 대해 완전한 투명성 리포트를 제공합니다.

## 릴리스마다 공개하는 것들

- **SBOM** (소프트웨어 구성 목록) — 모든 의존성, 버전, 라이선스
- **Trivy 보안 스캔** — 바이너리에 대한 알려진 CVE 검사
- **OSV 스캔** — Open Source Vulnerabilities 데이터베이스 검사
- **서드파티 고지** — OSS 의존성 전체 출처 표기

[최신 리포트 보기 →](/jvim-public/ko/transparency/reports/)

## 데이터 처리

- **로컬 우선.** vault는 사용자의 기기에 저장됩니다. 노트 내용은 저희가 볼 수 없습니다.
- **AI 프로바이더는 사용자가 선택합니다.** OpenAI / Anthropic / 로컬 LLM (Ollama / llama.cpp).
- **텔레메트리: 옵트인.** 기본값은 off. 자세한 내용은 [릴리스 정책](/jvim-public/ko/release-policy/)을 참고하세요.

## 소스 접근

바이너리는 상업적 이용과 재배포를 포함하여 무료로 사용할 수 있습니다. 소스 코드는 비공개입니다.
전체 조건은 [라이선스](/jvim-public/ko/license/)를 참고하세요.
