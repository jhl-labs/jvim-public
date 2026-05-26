---
title: 키맵 — 전체 참조
description: jvim의 모든 단축키를 영역별로 정리했습니다.
---

import KeymapTable from '../../../../components/KeymapTable.astro';

영역별로 그룹화된 모든 단축키입니다. 10가지 시작 단축키 세트는
[필수 단축키](/jvim-public/ko/keymap/essentials/)를 참조하세요.

## 전역

<KeymapTable rows={[
  { keys: 'Ctrl+Q', action: 'jvim 종료 (dirty 시 확인 프롬프트)' },
  { keys: 'Ctrl+C / V / X', action: '복사 / 붙여넣기 / 잘라내기' },
  { keys: 'F1', action: '키맵 오버레이 전환' },
  { keys: 'F10 / Ctrl+K', action: '설정 오버레이' },
  { keys: 'Ctrl+P / F4', action: '커맨드 팔레트' },
  { keys: 'Ctrl+F', action: '문서 내 찾기 (Tab: 대소문자 전환)' },
  { keys: 'Ctrl+T', action: '전체 바꾸기' },
  { keys: 'Shift+F4', action: '볼트 전체 검색' },
  { keys: 'Shift+F3', action: '라인으로 이동' },
]} />

## 에디터 — 편집

<KeymapTable rows={[
  { keys: 'Ctrl+N', action: '새 버퍼' },
  { keys: 'Ctrl+W', action: '현재 문서 닫기' },
  { keys: 'Ctrl+O', action: '파일 팔레트' },
  { keys: 'Ctrl+S / F3', action: '저장' },
  { keys: 'Alt+F / Alt+Shift+F', action: '문서 / 선택 영역 포맷' },
  { keys: 'Ctrl+A / X', action: '전체 선택 / 잘라내기' },
  { keys: 'Ctrl+Z / Y', action: '되돌리기 / 다시 실행' },
  { keys: 'Tab / Shift+Tab', action: '들여쓰기 / 내어쓰기 (VSCode 방식)' },
  { keys: 'Backspace / Del', action: '문자 삭제' },
  { keys: 'Enter', action: '새 줄 삽입' },
  { keys: 'Esc', action: '선택 해제' },
]} />

## 에디터 — 내비게이션

<KeymapTable rows={[
  { keys: 'Arrows', action: '커서 이동' },
  { keys: 'Ctrl+← / →', action: '단어 단위 이동' },
  { keys: 'Home / End', action: '줄 시작 / 끝' },
  { keys: 'Ctrl+Home / End', action: '문서 시작 / 끝' },
  { keys: 'Ctrl+U / D', action: '페이지 위 / 아래' },
  { keys: 'Shift+<nav>', action: '선택 영역 확장' },
  { keys: 'Ctrl+E / Tab*', action: '트리 ↔ 에디터 포커스 (트리 포커스 시 Tab)' },
  { keys: 'Ctrl+PgUp / PgDn', action: '이전 / 다음 열린 문서 탭' },
  { keys: 'Ctrl+Shift+→ / ←', action: '단어 선택 / 트리에서 버퍼 순환' },
]} />

## 문서 도구

<KeymapTable rows={[
  { keys: 'F2', action: '아웃라인 (헤딩)' },
  { keys: 'F7', action: '태그 브라우저' },
  { keys: 'F8', action: '아웃바운드 링크' },
  { keys: 'Ctrl+B', action: '백링크 그래프' },
  { keys: '#<prefix>', action: '태그 자동완성' },
  { keys: '[[<prefix>', action: 'Wikilink 자동완성' },
]} />

## AI & 지식

<KeymapTable rows={[
  { keys: 'Alt+/ / Ctrl+/', action: 'AI 컨텍스트 메뉴' },
  { keys: 'F6', action: 'AI 프롬프트 오버레이 (Ask/Insert/Rewrite)' },
  { keys: 'Alt+I / F9', action: '인라인 자동완성 전환' },
  { keys: 'Tab / → / Ctrl+→', action: '고스트 텍스트 수락 (전체 / 단어)' },
]} />

## 인덱스 & Git

<KeymapTable rows={[
  { keys: 'Ctrl+R', action: '전체 재인덱싱' },
  { keys: 'Ctrl+L / F5', action: '커밋 로그' },
  { keys: 'Shift+F5', action: '시맨틱 인덱스 범위 (오버레이 외부)' },
  { keys: 'F11', action: '즐겨찾기 전환' },
]} />

## 파일 트리

<KeymapTable rows={[
  { keys: 'j / k / ↓ / ↑', action: '선택 항목 이동' },
  { keys: 'g / G', action: '맨 위 / 맨 아래' },
  { keys: 'Enter', action: '파일 열기' },
  { keys: 'n', action: '새 파일' },
  { keys: 'r', action: '이름 바꾸기' },
  { keys: 'd', action: '삭제 (확인 포함)' },
  { keys: '/ 또는 입력', action: '입력으로 필터' },
  { keys: 'q', action: '포커스 해제' },
]} />

## 오버레이 공통

<KeymapTable rows={[
  { keys: '↑ / ↓', action: '하이라이트 이동' },
  { keys: 'Enter', action: '수락 / 열기' },
  { keys: 'Esc', action: '닫기' },
  { keys: 'Tab', action: '옵션 전환 (찾기의 대소문자)' },
]} />
