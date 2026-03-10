# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

이 파일은 Claude Code(claude.ai/code)가 이 저장소에서 작업할 때 참고하는 가이드입니다.

## 프로젝트 개요

베리봇 (BerryBot) — 딸기 손질 전용 **가정용 스마트 로봇** 구독 서비스의 정적 원페이지 랜딩 사이트. 빌드 단계 없음, 프레임워크 없음, 의존성 없음.

## 사이트 실행

`index.html`을 브라우저에서 직접 열거나, 정적 파일 서버를 사용:

```bash
npx serve .
# 또는
python -m http.server 8000
```

## 아키텍처

프론트엔드 전체가 세 파일로 구성:

- `index.html` — 6개 섹션: `#hero`, `#comic`, `#plans`, `#spec`, `#features`, `#footer`
- `style.css` — 모든 스타일; `:root`에 CSS 커스텀 프로퍼티 정의 (색상, 반경, 그림자, 폰트)
- `main.js` — 세 가지 동작: `[data-reveal]` 스크롤 리빌, 모바일 네비 토글, 플로팅 CTA 표시/숨김

SVG 일러스트는 `assets/illustrations/panel1~4.svg`에 위치하며, 베리봇의 딸기 처리 4단계를 묘사. `panel4.svg`는 히어로 로봇 이미지로도 재사용됨. 파비콘은 `assets/favicon.svg`에 있으나, htmlpreview 등 외부 프리뷰 환경에서도 동작하도록 `index.html`에 data URI로 인라인 삽입되어 있음 — 수정 시 두 곳 모두 반영.

## 주요 컨벤션

- **언어:** UI 텍스트 전체를 한국어로 유지
- **서비스 성격:** 과일 배송 서비스가 아닌 **가전 구독** 서비스 — 배송·수량·신선도 보증 등 배송 관련 표현 사용 금지
- **색상 팔레트:** CSS 변수(`--red`, `--green`, `--yellow`, `--red-pale` 등)로 정의 — 새 규칙에 hex 값 직접 입력 금지
- **스크롤 리빌:** 새 카드/요소에 `data-reveal` 속성 추가 시 JS가 자동으로 감지하여 형제 요소 간 순차 딜레이 적용. FOUC 방지를 위해 `index.html` `<head>`에 인라인 크리티컬 CSS(`[data-reveal]{opacity:0;transform:translateY(30px)}`)가 있음 — 삭제 금지
- **JS 프레임워크 없음:** 인터랙션은 `main.js`의 바닐라 JS로만 처리
- **반응형 브레이크포인트:** 1024px (2열 만화/특장점), 768px (모바일 히어로/플랜), 480px (전체 1열)
- **버튼 변형:** `btn-primary` (빨간 배경), `btn-ghost` (투명 + 빨간 테두리 — 히어로에 사용), `btn-outline` (ghost와 동일 외형 — 플랜 카드에 사용)
- **추천 플랜 카드:** `plan-best` 클래스로 강조 (빨간 테두리 + 그라디언트 배경 + `.plan-badge` 뱃지)

## 구독 플랜 현황

| 플랜 | 가격 | 지원 과일 | 주요 기능 |
|------|------|-----------|-----------|
| **라이트** 🍓 | 월 9,900원 | 딸기 | 기본 세척 + 꼭지 제거 |
| **홈** 🫐 (인기) | 월 19,900원 | 딸기 + 블루베리 | 세척·다듬기·꼭지 제거 전 과정 + AI 손질 품질 보증 |
| **패밀리** 🍒 | 월 34,900원 | 딸기 + 블루베리 + 라즈베리 + 체리 | 전 과정 + 우선 처리 예약 + 과일 쉐이크 모드 |

## 요구사항 참고

`PRD/` 폴더에 구조화된 문서 4종이 있음 — 문구 수정이나 섹션 추가 전 반드시 참고.

- `PRD/01_PRD.md` — 섹션별 콘텐츠 요구사항
- `PRD/02_DATA_MODEL.md` — 플랜/특장점/스펙 데이터 구조
- `PRD/03_PHASES.md` — 작업 Phase 체크리스트
- `PRD/04_PROJECT_SPEC.md` — AI 코딩 규칙, CSS 변수 참조
