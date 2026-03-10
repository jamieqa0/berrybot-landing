# 베리봇 랜딩 페이지 — 프로젝트 스펙 (AI 행동 규칙)

> **버전:** 1.0  **날짜:** 2026-03-10
> Claude Code 등 AI 코딩 에이전트가 이 프로젝트를 다룰 때 반드시 따르는 규칙.

---

## 1. 기술 스택

| 분류 | 선택 | 버전/비고 |
|------|------|-----------|
| 마크업 | HTML5 | 시맨틱 태그 사용 |
| 스타일 | CSS3 (순수) | CSS 변수 활용, 프레임워크 없음 |
| 인터랙션 | Vanilla JS | 라이브러리 없음 |
| 일러스트 | SVG | `assets/illustrations/panel1~4.svg` |
| 빌드 | **없음** | 단일 HTML 직접 실행 |
| 배포 | GitHub Pages | `main` 브랜치 루트 |

---

## 2. 파일 역할

| 파일 | 역할 | 수정 시 주의 |
|------|------|-------------|
| `index.html` | 전체 페이지 구조, 5~6개 섹션 | 파비콘 data URI는 두 곳(`<link>`+인라인) 동시 수정 |
| `style.css` | 모든 스타일, CSS 변수 정의 | hex 직접 사용 금지 → `var(--red)` 등 사용 |
| `main.js` | 스크롤 리빌, 네비 토글, 플로팅 CTA | 프레임워크 없는 바닐라 JS 유지 |

---

## 3. AI 코딩 절대 규칙

### 3.1 언어 & 표현
- **UI 텍스트 전체를 한국어로 유지** — 에러 메시지, 레이블, alt 텍스트 포함
- **배송·수량·신선도 보증 표현 사용 금지** — 과일 배송 서비스로 오해될 수 있음
- 서비스 성격은 **가전 구독** — "로봇이 직접 손질"을 명시

### 3.2 스타일
- CSS 색상은 **반드시 CSS 변수**로만 작성:
  ```css
  /* ❌ 금지 */
  color: #FF3355;

  /* ✅ 허용 */
  color: var(--red);
  ```
- 새 색상 추가 시 `:root`에 변수로 등록 후 사용
- `font-family` 직접 지정 금지 → `var(--font)` 사용

### 3.3 인터랙션
- **JS 프레임워크/라이브러리 추가 금지** — React, Vue, jQuery, GSAP 등
- 새 카드/요소에 **`data-reveal` 속성 추가** → JS가 자동으로 스크롤 리빌 적용
- FOUC 방지 인라인 CSS(`[data-reveal]{opacity:0;transform:translateY(30px)}`) **절대 삭제 금지**

### 3.4 파비콘
- 파비콘 수정 시 **두 곳 모두 반영**:
  1. `<link rel="icon" href="...">` — GitHub Pages용 절대 URL
  2. `<head>` 내 data URI 인라인 — htmlpreview 환경용

### 3.5 반응형
- 브레이크포인트: **1024px** (2열 레이아웃) / **768px** (모바일 전환) / **480px** (전체 1열)
- 새 그리드 추가 시 세 브레이크포인트 모두 처리

---

## 4. CSS 변수 참조

```css
:root {
  --red:      #FF3355;   /* 주요 강조색, 버튼, 링크 호버 */
  --red-dark: #CC1133;   /* 버튼 호버 상태 */
  --red-pale: #FFF0F3;   /* 배경 강조, 뱃지 배경 */
  --green:    #4CAF50;   /* 초록 포인트 (현재 미사용) */
  --yellow:   #FFE14D;   /* 히어로 뱃지 배경 */
  --text:     #222;      /* 기본 텍스트 */
  --muted:    #888;      /* 보조 텍스트 */
  --border:   #F0D0D8;   /* 카드 테두리 */
  --white:    #FFFFFF;   /* 기본 배경 */
  --font:     'Apple SD Gothic Neo', 'Noto Sans KR', Arial, sans-serif;
  --radius:   16px;      /* 카드 모서리 반경 */
  --shadow:   0 8px 32px rgba(255,51,85,0.12);
}
```

---

## 5. 버튼 클래스 참조

| 클래스 | 외형 | 사용 위치 |
|--------|------|-----------|
| `.btn-primary` | 빨간 배경 + 흰 텍스트 | 주요 CTA, 홈·패밀리 플랜 |
| `.btn-ghost` | 투명 + 빨간 테두리 | 히어로 보조 CTA |
| `.btn-outline` | ghost와 동일 외형 | 라이트 플랜 카드 |

---

## 6. 로컬 실행

```bash
# 방법 1: npx serve
npx serve .

# 방법 2: Python
python -m http.server 8000

# index.html 직접 열기도 가능 (file:// 프로토콜)
```

---

## 7. GitHub Pages 배포

```bash
# 1. 변경사항 커밋
git add index.html style.css main.js
git commit -m "feat: 변경 내용 요약"
git push origin main

# 2. GitHub repository → Settings → Pages
#    Source: Deploy from a branch
#    Branch: main / root
#    → Save

# 3. 배포 URL 확인 (1~2분 소요)
# https://[username].github.io/berrybot-landing/
```
