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
  {
    src:     'assets/illustrations/panel1.svg',
    alt:     '1컷 - 딸기 넣기',
    caption: '넣어볼까요!',
    sub:     '베리봇 투입구에 딸기를 넣어요',
    accentColor: '#FF3355',
    bg:      '크림(#FFF9F0 → #FFE8D0)',
  },
  {
    src:     'assets/illustrations/panel2.svg',
    alt:     '2컷 - 세척',
    caption: '깨끗이 씻어줄게!',
    sub:     '3단 초음파 세척으로 농약 99% 제거',
    accentColor: '#3399CC',
    bg:      '파랑(#F0F8FF → #D8EEFF)',
  },
  {
    src:     'assets/illustrations/panel3.svg',
    alt:     '3컷 - 다듬기',
    caption: '예쁘게 다듬어볼게!',
    sub:     'AI가 꼭지 위치를 감지해 정밀 제거',
    accentColor: '#FF8800',
    bg:      '노랑(#FFFCF0 → #FFF0C8)',
  },
  {
    src:     'assets/illustrations/panel4.svg',
    alt:     '4컷 - 꼭지 제거 완료',
    caption: '짜잔~ 드세요!',
    sub:     '딸기·블루베리 손질 완료, 바로 드세요!',
    accentColor: '#FF3355',
    bg:      '분홍(#FFF5FF → #FFE0F0)',
  },
]
```

---

## 5. 4컷 만화 일러스트 상세 스펙

### 5.1 공통 구조 (모든 패널)

```
SVG viewBox: 0 0 400 500
폰트: 'Apple SD Gothic Neo', 'Noto Sans KR', Arial

레이어 z-order (위로 갈수록 앞):
  1. 배경 rect + 장식 도트/컨페티
  2. 패널 테두리 (stroke only rect)
  3. 배경 고정 소품 (수도꼭지, 물줄기, 검수 램프 등 — 로봇 뒤)
  4. 베리봇 <g filter="drop-shadow">
       └─ 다리/발 → 몸통 → 앞치마 → 씨앗 → 팔 → 잎왕관 → 얼굴
  5. 전경 소품 ← 반드시 로봇 그룹 닫힘 태그 </g> 다음에 그릴 것
       패널 1: 없음 (바구니는 x 범위가 달라 겹치지 않음)
       패널 2: 싱크대(카운터+세면대) → 물+과일+물방울
       패널 3: 작업대+딸기+꼭지 → 돋보기
       패널 4: 그릇+딸기+블루베리
  6. 말풍선
  7. 패널 번호 원
  8. 하단 캡션 영역

베리봇 좌표 고정값:
  몸통 하단  y = 368
  다리 rect  y = 368, height = 28
  발 ellipse cy = 396, rx = 14, ry = 8.5
  바닥 그림자 ellipse cy = 405
```

### 5.2 패널별 장면 스펙

#### 패널 1 — 투입 (Hopper 단계)
```
배경색: 크림 (#FFF9F0 → #FFE8D0 radialGradient)
테두리 stroke: #FFD0D8

주요 소품: 과일 바구니 (우측 배치)
  바구니 몸체: M278,272 L264,342 Q314,368 364,342 L350,272 Z  ← 둥근 바닥
  손잡이:     M282,272 Q314,237 346,272  (아치형)
  과일:
    딸기 5개 (2열) + 블루베리 4개 (하단 레이어)
    블루베리: fill=#5566DD/#4455CC, r=8~9
    딸기: fill=#FF3355/#FF4466, rx≈14~17

베리봇 포즈: 오른팔을 바구니 방향(x=274)으로 뻗음
말풍선 텍스트: "냠냠냠..." / "신선한 베리 넣어줘요!"
```

#### 패널 2 — 세척 (Clean Zone 단계)
```
배경색: 파랑 (#F0F8FF → #D8EEFF radialGradient)
테두리 stroke: #A8D8F8

주요 소품 (전경 레이어, 로봇 그룹 다음에 그릴 것):
  ① 싱크대 구조
    카운터: rect x=56 y=318 w=288 h=54
    싱크 외벽: rect x=100 y=275 w=200 h=98
  ② 물 + 과일
    물 fill rect: x=108 y=284 w=184 h=88  fill=linearGradient(#90D0F0→#5AAAD8)
    수면 ripple:  ellipse cy=290
    딸기 3개: cy≈308~314
    블루베리 4개: cx≈128~264 cy≈311~320
    물방울 튀기: 좌우 arc path + circle (x=126~274 범위)
  수도꼭지 + 물줄기: 배경 레이어 유지 (y=217~280, 로봇 얼굴 가림 방지)

베리봇 포즈: 양팔을 싱크 방향 아래로 내림
말풍선 텍스트: "먼지야 안녕~" / "쏴아아아~ 💧"
```

#### 패널 3 — 검수·다듬기 (Trimming Deck 단계)
```
배경색: 노랑 (#FFFCF0 → #FFF0C8 radialGradient)
테두리 stroke: #FFE0A0

배경 레이어 소품 (로봇 뒤):
  검수 램프:
    기둥  rect x=328 y=28 w=12 h=44  (중심 x=334, 등 몸체와 정렬)
    등 몸체 path: M300,72 L368,72 L354,112 L314,112 Z
    글로우 ellipse: cx=334 (기둥과 동일 중심)

전경 레이어 소품 (로봇 그룹 다음에 그릴 것):
  ① 작업대 + 딸기
    작업대: rect x=36 y=325 w=328 h=52
    딸기 2개(✓ 완료) + 1개(검수 중, 꼭지 없음)
    떨어진 꼭지 2개: table 위 + 공중 (translate+rotate transform)
  ② 돋보기
  핸들: line x1=251 y1=269 x2=280 y2=300  (렌즈 45° 접점에서 시작)
  렌즈 링: circle cx=230 cy=248 r=32  stroke 8px
  렌즈 유리: circle cx=230 cy=248 r=26  반투명 fill

베리봇 포즈: 오른팔 위로 올려 돋보기 방향, 왼팔 아래로 휴식
말풍선 텍스트: "흠... 완벽해!" / "⭐ 검수 완료 ⭐"
```

#### 패널 4 — 완성 (Serving Tray 단계)
```
배경색: 분홍 (#FFF5FF → #FFE0F0 radialGradient)
테두리 stroke: #FFD0E8
배경 장식: 컨페티(rect + circle, 다색)

주요 소품 — 그릇 (전경 레이어, 로봇 그룹 다음):
  그릇 몸체: M115,308 Q120,365 200,370 Q280,365 285,308 Z
  그릇 림:   ellipse cx=200 cy=308 rx=85 ry=21
  딸기 5개(꼭지 없음) + 블루베리 4개

베리봇 포즈: 양팔 앞으로 뻗어 그릇 방향 (bowl은 팔 앞 레이어)
말풍선 텍스트: "꼭지까지 완벽하게!" / "베리봇 임무 완료~ 🎉"
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
