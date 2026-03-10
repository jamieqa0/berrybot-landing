# 베리봇 랜딩 페이지 — Phase 분리 계획

> **버전:** 1.0  **날짜:** 2026-03-10

---

## 요약

| Phase | 목표 | 상태 |
|-------|------|------|
| Phase 1 — 기본 완성 | 핵심 5개 섹션 + 인터랙션 구현 | ✅ 완료 |
| Phase 2 — 스펙 섹션 추가 | `#spec` 로봇 사양 표 구현 | 🔧 진행 중 |
| Phase 3 — 배포 및 최종 검수 | GitHub Pages 배포 + 크로스 브라우저 확인 | ⏳ 예정 |

---

## Phase 1 — 기본 완성 ✅

> **완료** — 핵심 원페이지 구조 및 인터랙션 전부 구현됨

### 구조
- [x] `index.html` 원페이지 레이아웃
- [x] `style.css` CSS 변수 + 전체 스타일
- [x] `main.js` 바닐라 JS 인터랙션 3종

### 섹션
- [x] `#hero` — 타이틀, 서브카피, CTA 2개, 로봇 이미지, float 애니메이션
- [x] `#comic` — 4컷 SVG 패널 그리드
- [x] `#plans` — 라이트/홈/패밀리 플랜 카드 (홈 강조)
- [x] `#features` — 6개 특장점 카드 그리드
- [x] `#footer` — 사업자 정보, 링크

### 전역 컴포넌트
- [x] 네비게이션 바 (fixed, blur 배경)
- [x] 모바일 햄버거 메뉴 (768px 이하)
- [x] `[data-reveal]` 스크롤 리빌 (IntersectionObserver)
- [x] 플로팅 CTA 버튼
- [x] FOUC 방지 인라인 크리티컬 CSS
- [x] 딸기 SVG 파비콘 (data URI 인라인)

---

## Phase 2 — 스펙 섹션 추가 🔧

> **다음 작업** — `#spec` 섹션을 `#features` 뒤에 추가

### 할 일
- [x] `index.html` — `#features` 앞에 `#spec` 섹션 HTML 작성
  - 섹션 태그: "베리봇 로봇 사양"
  - 개요 카드 3개 (크기, 소재, 투명 돔)
  - 4행 사양 표 (부위 / 명칭 / 역할)
- [x] `style.css` — `#spec` 섹션 스타일 추가
- [x] 네비게이션 바에 "로봇 사양" 링크 추가

### 완료 기준
- 모바일(480px)에서 표가 가로 스크롤 없이 표시됨
- `data-reveal` 적용으로 스크롤 시 페이드인

---

## Phase 3 — 배포 및 최종 검수 ⏳

> **최종 단계** — GitHub Pages 배포 후 제출

### 배포
- [ ] GitHub repository `Settings → Pages` 설정
- [ ] `main` 브랜치 루트 디렉토리로 배포 설정
- [ ] 배포 URL 접속 확인: `https://[username].github.io/berrybot-landing/`

### 최종 검수
- [ ] SVG 일러스트 4개 로드 확인 (panel1~4.svg)
- [ ] 파비콘 표시 확인 (data URI 버전)
- [ ] OG 태그 / 메타 description 최종 검토
- [ ] 모바일 레이아웃 확인 (480px, 768px)
- [ ] 데스크톱 레이아웃 확인 (1024px+)
- [ ] Chrome / Safari / Firefox 크로스 브라우저 테스트
- [ ] 모든 CTA 버튼 `#plans` 스크롤 이동 확인
- [ ] 플로팅 CTA 표시/숨김 동작 확인
