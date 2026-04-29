# NODE — ComFit Landing

워크로드 기반 하드웨어 최적화 플랫폼 **ComFit** 의 회사 홈페이지입니다.
이화여자대학교 산학협력단 실험실창업탐색팀 **NODE** 가 개발 중입니다.

## 스택

- **Vite 5** + **React 18** + **TypeScript**
- **Tailwind CSS 3** (다크 테마, 그라데이션 / 글래스모피즘)
- **lucide-react** 아이콘

## 실행

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # 프로덕션 빌드
npm run preview  # 빌드 결과 로컬 미리보기
```

## 폴더 구조 — "수정이 쉬운" 설계

```
src/
├── App.tsx                   # 페이지 섹션 조립 (순서 바꾸려면 여기만 수정)
├── data/
│   └── content.ts            # 모든 텍스트/숫자 (회사명, 요금제, 팀원, 통계 등)
└── components/
    ├── Logo.tsx              # 로고 (크기 prop)
    ├── Navbar.tsx            # 상단 내비게이션 + 모바일 메뉴
    ├── Hero.tsx              # 메인 히어로 (타이틀 + CTA + 통계 4개)
    ├── HeroVisual.tsx        # 우측 대시보드 미리보기 + Pareto 차트(SVG)
    ├── LogoStrip.tsx         # 협력 기관 스트립
    ├── Section.tsx           # 공통 섹션 래퍼 (eyebrow / title / description)
    ├── Problem.tsx           # B2C / B2B 문제 정의 카드
    ├── ValueProps.tsx        # 3대 차별화 포인트
    ├── HowItWorks.tsx        # 3-Step 서비스 플로우
    ├── Stats.tsx             # +37% / −20% / +61% 실측 카드
    ├── Technology.tsx        # 핵심 기술 + 비교표 + 특허
    ├── Comparison.tsx        # 컴퓨존 / 견적왕 / ComFit 비교표
    ├── Pricing.tsx           # 요금제 3종 (Free / Pro / Enterprise)
    ├── Roadmap.tsx           # 2026년 마일스톤 타임라인
    ├── Team.tsx              # NODE 팀 5명
    ├── CTA.tsx               # 베타 신청 폼
    └── Footer.tsx            # 푸터
```

### 텍스트만 바꾸고 싶을 때

거의 모든 카피·숫자·요금제·팀원 정보는 `src/data/content.ts` 한 파일에
모여 있습니다. 컴포넌트는 이 파일을 import 하므로 **여기만 수정해도** 페이지가
즉시 갱신됩니다.

### 색상/디자인 토큰

`tailwind.config.js` 의 `theme.extend.colors` 에서 브랜드 컬러를 수정합니다.

- `brand-500` (#3b5dff) — 메인 블루
- `accent-500` (#06b6d4) — 시안 액센트
- `ink-950` ~ `ink-600` — 다크 배경 단계

`src/index.css` 에 정의된 컴포넌트 클래스(`btn-primary`, `glass-card`,
`gradient-text` 등)도 한 곳에서 관리됩니다.

## PDF 이미지 추천 위치

PDF에 포함된 그림들을 어디에 넣으면 좋을지 정리했습니다. 각 위치에는 코드
주석으로 `⬇⬇⬇ [추천]` 마커가 달려 있습니다.

| PDF 그림 | 추천 위치 | 효과 |
| --- | --- | --- |
| **그림 1** — 범용 카테고리 내의 워크로드 별 요구사항 | `Problem.tsx` 하단 | "추상 카테고리"의 한계를 시각적으로 증명 |
| **그림 2** — 하드웨어 구매 비용에 따른 체감 성능 | `Problem.tsx` 또는 `Stats.tsx` 위 | 비용-성능 곡선 자체가 ComFit이 푸는 문제 |
| **그림 3** — 시제품의 통합 아키텍처 플랫폼 | `HowItWorks.tsx` 하단 | 3-Step 아래에서 시스템 구조를 보여주면 자연스러움 |
| **그림 4** — 시제품의 사용자 UI 예시 | `HeroVisual.tsx` 의 placeholder | 임시 SVG 차트 자리를 실제 UI 스크린샷으로 교체 |
| (선택) 팀 단체 사진 / 연구실 장비 | `Team.tsx` 하단 | "회사 홈페이지" 분위기 강화 |

이미지를 추가하는 방법:

1. 이미지 파일을 `public/` 폴더에 저장 (예: `public/figure-3.png`)
2. 컴포넌트에서 `<img src="/figure-3.png" alt="..." />` 로 참조
3. 코드 주석의 `⬇⬇⬇ [추천]` 마커 자리에 placeholder div 를 교체

예시 (`Problem.tsx`):

```tsx
{/* ⬇⬇⬇ [추천] PDF 그림 1 */}
<img
  src="/figure-1.png"
  alt="범용 카테고리 내의 워크로드 별 요구사항"
  className="mt-12 mx-auto rounded-2xl border border-white/10"
/>
```

## 섹션 추가/제거

`src/App.tsx` 의 JSX 순서가 곧 페이지 순서입니다. 드래그 앤 드롭하듯 줄을
이동하거나 삭제하면 끝입니다.

```tsx
<Hero />
<LogoStrip />
<Problem />
<ValueProps />
<HowItWorks />
<Stats />
<Technology />
<Comparison />
<Pricing />
<Roadmap />
<Team />
<CTA />
```
