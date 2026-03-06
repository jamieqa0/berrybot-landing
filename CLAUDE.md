# CLAUDE.md

이 파일은 Claude Code(claude.ai/code)가 이 저장소에서 작업할 때 참고하는 가이드입니다.

## 프로젝트 개요

베리봇 (BerryBot) — 딸기 손질 로봇 구독 서비스의 정적 원페이지 랜딩 사이트. 빌드 단계 없음, 프레임워크 없음, 의존성 없음.

## 사이트 실행

`index.html`을 브라우저에서 직접 열거나, 정적 파일 서버를 사용:

```bash
npx serve .
# 또는
python -m http.server 8000
```

## 아키텍처

프론트엔드 전체가 세 파일로 구성:

- `index.html` — 6개 섹션으로 구성된 페이지 구조, 각 섹션에 앵커 ID: `#hero`, `#comic`, `#plans`, `#features`, `#faq`, `#footer`
- `style.css` — 모든 스타일; `:root`에 CSS 커스텀 프로퍼티 정의 (색상, 반경, 그림자, 폰트)
- `main.js` — 두 가지 동작: `[data-reveal]` 요소에 `IntersectionObserver`로 스크롤 리빌, FAQ 아코디언 토글

SVG 일러스트는 `assets/illustrations/panel1~4.svg`에 위치하며, 베리봇의 딸기 처리 4단계를 묘사. `panel4.svg`는 히어로 로봇 이미지로도 재사용됨.

## 주요 컨벤션

- **언어:** UI 텍스트 전체를 한국어로 유지
- **색상 팔레트:** CSS 변수(`--red`, `--green`, `--yellow`, `--red-pale` 등)로 정의 — 새 규칙에 hex 값 직접 입력 금지
- **스크롤 리빌:** 새 카드/요소에 `data-reveal` 속성 추가 시 JS가 자동으로 감지하여 형제 요소 간 순차 딜레이 적용
- **JS 프레임워크 없음:** 인터랙션은 `main.js`의 바닐라 JS로만 처리
- **반응형 브레이크포인트:** 1024px (2열 만화/특장점), 768px (모바일 히어로/플랜), 480px (전체 1열)
- **버튼 변형:** `btn-primary` (빨간 배경), `btn-ghost` (투명 + 빨간 테두리 — 히어로에 사용), `btn-outline` (ghost와 동일 외형 — 플랜 카드에 사용)
- **FAQ 아코디언:** `max-height` 트랜지션으로 CSS 구동 — JS는 `.faq-item`에 `.open` 클래스와 버튼의 `aria-expanded`만 토글, JS 기반 높이 계산 추가 금지
- **추천 플랜 카드:** `plan-best` 클래스로 강조 (빨간 테두리 + 그라디언트 배경 + `.plan-badge` 뱃지)

## 요구사항 참고

`requirements.md`에 구독 플랜 상세, 로봇 캐릭터 정의, 4컷 만화 콘티 등 전체 제품 스펙이 포함 — 문구 수정이나 섹션 추가 전 반드시 참고.
