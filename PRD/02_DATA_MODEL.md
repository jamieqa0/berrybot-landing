# 베리봇 랜딩 페이지 — 콘텐츠 구조 모델

> **버전:** 1.0  **날짜:** 2026-03-10
> 정적 HTML 사이트이므로 DB 스키마 대신 **콘텐츠 데이터 구조**를 정의한다.

---

## 1. 구독 플랜 데이터

```js
const PLANS = [
  {
    id: 'lite',
    name: '라이트',
    emoji: '🍓',
    price: 9900,
    badge: null,
    socialProof: null,
    features: [
      '딸기 세척 + 꼭지 제거',
      '기본 손질 모드',
    ],
    ctaStyle: 'btn-outline',
  },
  {
    id: 'home',
    name: '홈',
    emoji: '🫐',
    price: 19900,
    badge: '인기',           // plan-best 강조
    socialProof: '월 1,200명 구독 중',
    features: [
      '딸기 + 블루베리 손질 지원',
      '세척 · 다듬기 · 꼭지 제거 전 과정',
      'AI 손질 품질 보증',
    ],
    ctaStyle: 'btn-primary',
  },
  {
    id: 'family',
    name: '패밀리',
    emoji: '🍒',
    price: 34900,
    badge: null,
    socialProof: null,
    features: [
      '딸기 + 블루베리 + 라즈베리 + 체리',
      '전 과정 + 우선 처리 예약',
      '과일 쉐이크 모드 제공',
    ],
    ctaStyle: 'btn-primary',
  },
]
```

---

## 2. 특장점 카드 데이터

```js
const FEATURES = [
  { icon: '🚿', title: '3단 초음파 세척',   desc: '농약·이물질 99% 제거, 씻지 않고 바로 드실 수 있어요' },
  { icon: '✂️', title: '꼭지 완벽 제거',    desc: 'AI가 꼭지 위치를 감지해 오차 1mm 이내로 깔끔하게 제거' },
  { icon: '🔍', title: '신선도 자동 식별',  desc: 'AI 카메라가 숙도·당도·상태를 스캔해 최적 손질 방식 자동 설정' },
  { icon: '🍽️', title: '한입 크기 커팅',  desc: '먹기 좋은 크기로 자동 커팅, 아이도 어른도 바로 즐길 수 있어요' },
  { icon: '🍱', title: '먹다 남은 과일 처리', desc: '먹다 남긴 과일을 재손질·보관 용기 포장까지 처리' },
  { icon: '🥤', title: '과일 쉐이크 모드', desc: '손질한 베리를 바로 갈아 신선한 쉐이크로 (홈·패밀리)' },
]
```

---

## 3. 로봇 사양 데이터 (신규 #spec 섹션)

```js
const ROBOT_SPEC = {
  size: '10인용 전기밥솥 수준',
  body: '무광 화이트 또는 파스텔톤 유선형 바디',
  dome: '강화유리/투명 폴리카보네이트 — 작동 과정 실시간 관찰 가능',
  parts: [
    {
      location: '상단 입구',
      name: '호퍼 (Hopper)',
      role: '씻지 않은 딸기를 한꺼번에 투입',
    },
    {
      location: '중앙부',
      name: '클린 존 (Clean Zone)',
      role: '미세 버블 + 초음파로 잔류 농약 제거 (3단 세척)',
    },
    {
      location: '작업대',
      name: '트리밍 데크 (Trimming Deck)',
      role: 'AI 카메라로 꼭지 위치 감지 후 소프트 그리퍼로 정밀 제거',
    },
    {
      location: '하단 출구',
      name: '서빙 트레이 (Serving Tray)',
      role: '손질 완료 딸기가 담겨 나오는 접시 거치대',
    },
  ],
}
```

---

## 4. 4컷 만화 패널 메타데이터

```js
const COMIC_PANELS = [
  { src: 'assets/illustrations/panel1.svg', alt: '1컷 - 딸기 넣기',      caption: '넣어볼까요!' },
  { src: 'assets/illustrations/panel2.svg', alt: '2컷 - 세척',           caption: '깨끗이 씻어줄게!' },
  { src: 'assets/illustrations/panel3.svg', alt: '3컷 - 다듬기',         caption: '예쁘게 다듬어볼게!' },
  { src: 'assets/illustrations/panel4.svg', alt: '4컷 - 꼭지 제거 완료', caption: '짜잔~ 드세요!' },
]
```

---

## 5. 파일 구조

```
berrybot-landing/
├── index.html              ← 전체 HTML (단일 파일)
├── style.css               ← 모든 스타일, CSS 변수
├── main.js                 ← 스크롤 리빌, 네비 토글, 플로팅 CTA
├── assets/
│   ├── favicon.svg         ← 딸기 SVG 파비콘 (data URI로도 인라인)
│   └── illustrations/
│       ├── panel1.svg      ← 만화 1컷 + 히어로 미사용
│       ├── panel2.svg      ← 만화 2컷
│       ├── panel3.svg      ← 만화 3컷
│       └── panel4.svg      ← 만화 4컷 + 히어로 로봇 이미지 겸용
├── requirements.md         ← 원본 기획 문서
└── PRD/                    ← 이 폴더
    ├── README.md
    ├── 01_PRD.md
    ├── 02_DATA_MODEL.md
    ├── 03_PHASES.md
    └── 04_PROJECT_SPEC.md
```
