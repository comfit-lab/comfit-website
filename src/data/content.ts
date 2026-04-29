/**
 * 사이트의 모든 텍스트/숫자 데이터를 한 곳에서 관리.
 * 새 항목 추가/수정 시 이 파일만 고치면 컴포넌트들이 자동 반영됩니다.
 */

export const company = {
  name: 'NODE',
  nameKo: '노드',
  product: 'ComFit',
  tagline: '벤치마크 점수가 높다고 내 작업이 빠른 건 아닙니다.',
  shortDescription:
    '워크로드 기반 하드웨어 최적화 통합 플랫폼. 27개 마이크로아키텍처 메트릭으로 정확한 성능을 예측합니다.',
  email: 'team.comfit@gmail.com',
  github: 'https://github.com/comfit-lab',
  affiliation: '이화여자대학교 산학협력단',
  year: new Date().getFullYear(),
}

export const nav = [
  { label: '솔루션', href: '#solution' },
  { label: '핵심 기술', href: '#technology' },
  { label: '비교', href: '#comparison' },
  { label: '요금제', href: '#pricing' },
]

export const heroStats = [
  { value: '27', label: '마이크로아키텍처\n메트릭' },
  { value: '±10%', label: '성능 예측\n정확도' },
  { value: '37%', label: '실측 기반\n성능 개선' },
  { value: '20%', label: '하드웨어\n비용 절감' },
]

export const problems = [
  {
    title: 'B2C — 불필요한 고사양 구매와 체감 성능 저하',
    body: '동일한 "게이밍 PC"라도 게임 장르에 따라 CPU, GPU, 캐시, 메모리의 병목 지점이 모두 다릅니다. 추상적 카테고리 분류는 워크로드의 실제 특성을 반영하지 못합니다.',
    bullets: [
      '연간 약 500만 대 PC 시장의 40%가 조립 PC',
      '"게이밍용 / 영상편집용 / AI용" 추상 분류의 한계',
      '결국 과투자 또는 성능 저하로 이어지는 잘못된 선택',
    ],
  },
  {
    title: 'B2B — 기업 환경에서 증폭되는 비효율과 비용 손실',
    body: '수천만 원에서 수억 원의 하드웨어 투자를 경험과 관행에 의존해 결정하면, 활용되지 않는 리소스와 비효율적 성능 구조라는 결과로 돌아옵니다.',
    bullets: [
      'AI 학습·추론·시뮬레이션의 고부하 워크로드',
      'CPU/GPU/메모리 조합의 수많은 변수',
      '재현 가능한 정량적 의사결정 근거 부재',
    ],
  },
]

export const valueProps = [
  {
    icon: 'Cpu',
    title: '병목 진단의 정밀도',
    desc: '동일 CPU 환경에서 메모리 구성만으로 37% 성능 차이가 발생합니다. ComFit은 이를 사전에 예측합니다.',
    metric: '+37%',
    metricLabel: '성능 차이 예측',
  },
  {
    icon: 'Zap',
    title: '아키텍처 최적화',
    desc: 'AMD 7950X3D가 7950X보다 느린 워크로드를 식별하여 동일 예산에서 더 빠른 구성을 제시합니다.',
    metric: '−20%',
    metricLabel: '비용 절감',
  },
  {
    icon: 'LineChart',
    title: '의사결정 단순화',
    desc: '복잡한 분석은 시스템이 수행합니다. 사용자는 비용-성능 그래프에서 최적점을 클릭만 하면 됩니다.',
    metric: '3-Step',
    metricLabel: '서비스 플로우',
  },
]

export const flowSteps = [
  {
    step: '01',
    title: '프로파일링',
    desc: '사용자 PC에서 자동으로 워크로드 패턴을 수집합니다. 백그라운드 데몬이 IPC, CPI, 캐시 미스율, 메모리 대역폭 등을 측정합니다.',
    keypoint: 'Chrome Extension · Local Daemon',
  },
  {
    step: '02',
    title: '분석',
    desc: '27개 마이크로아키텍처 메트릭을 SPEC CPU 2017 데이터베이스와 매칭하여 워크로드의 정체를 정량적으로 진단합니다.',
    keypoint: 'SPEC CPU DB · ML 매칭 엔진',
  },
  {
    step: '03',
    title: '추천',
    desc: '비용-성능 파레토 최적해를 시각화하고, 부품 호환성 자동 검증과 실시간 가격 정보를 결합한 최적 조합을 제시합니다.',
    keypoint: 'Pareto Optimal · 원클릭 구매',
  },
]

export const techHighlights = [
  {
    title: '마이크로아키텍처 기반 병목 진단',
    body: '실제 워크로드 실행 시 IPC, CPI, 캐시 미스율, 메모리 대역폭 등 27개 메트릭을 측정하여 병목 지점을 식별합니다.',
    proof: 'L3 캐시 민감도가 낮은 워크로드에서 7950X3D 대신 7950X 선택 시 17% 성능 향상 + 20% 비용 절감.',
  },
  {
    title: 'GPU 심층 분석',
    body: 'SM 점유율, Tensor Core 가동률, GDDR 대역폭, Int8 연산 효율 등 연산 커널 단위의 실행 특성을 분석합니다.',
    proof: '레이트레이싱 활용도와 메모리 집약도에 따라 세대별/아키텍처별 최적 GPU를 자동 매칭.',
  },
  {
    title: 'B2B 인프라 전략 최적화',
    body: '기업과 연구소의 초기 투자 비용 절감과 확장성을 동시에 해결합니다. UVM 활용, 단일·멀티 GPU 구성을 비교 분석합니다.',
    proof: 'TRL 6 단계까지 6개월 내 도달, CPU 17종 / GPU 11종 데이터 포인트 15,000개 확보 계획.',
  },
]

export const comparison = {
  headers: ['', '컴퓨존', '견적왕', 'ComFit'],
  rows: [
    ['추천 기준', '가격대·인기 구성', '정성적 상담·경험', '워크로드 정량 분석'],
    ['성능 예측', '없음', '없음', '구성별 정량 예측 (±10%)'],
    ['구성 옵션 분석', '제한적', '거의 없음', 'SMT · 캐시 · 가속기 고려'],
    ['호환성 검증', '기본 호환성', '기본 호환성', '메모리 클럭 · PCIe · 가속기 자동 검증'],
    ['비용-성능 비교', '가격 비교 중심', '가격 비교 중심', 'Pareto Optimal 시각화'],
    ['B2B 확장성', '거의 없음', '거의 없음', '기업·연구실 시나리오 분석'],
  ],
}

export const performanceCases = [
  {
    label: '성능 개선',
    value: '+37%',
    desc: '동일 CPU에서 메모리 구성 최적화만으로 실행 시간 37% 단축',
    sub: 'DDR5 4채널 구성 및 클럭 최적화',
  },
  {
    label: '비용 절감',
    value: '−20%',
    desc: 'AMD 7950X3D 대신 7950X 선택 시 20% 저렴 + 17% 성능 향상',
    sub: 'L3 캐시 민감도가 낮은 워크로드',
  },
  {
    label: '효율성 향상',
    value: '+61%',
    desc: 'AMD 7950X3D가 7950X 대비 61% 빠른 워크로드 식별',
    sub: '대형 그래프 알고리즘 처리',
  },
]

export const pricing = [
  {
    name: 'Free',
    price: '₩0',
    cadence: '/ 영구 무료',
    desc: '개인 사용자가 첫 빌드를 시작하기에 충분한 기능.',
    features: [
      '기본 워크로드 프로파일링',
      '월 3회 추천 리포트',
      '범용 카테고리 추천',
      '커뮤니티 부품 DB 접근',
    ],
    cta: '무료로 시작',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '₩14,900',
    cadence: '/ 월',
    desc: '게이머·크리에이터·개발자를 위한 정밀 분석.',
    features: [
      '27개 메트릭 전체 정량 분석',
      '무제한 추천 리포트 & 시나리오 비교',
      '실시간 부품 가격 연동',
      'Pareto 최적 시각화',
      '호환성 자동 검증',
    ],
    cta: 'Pro 시작하기',
    highlighted: true,
    badge: '가장 인기',
  },
  {
    name: 'Enterprise',
    price: '맞춤',
    cadence: '/ 견적 문의',
    desc: '대학·연구소·기업을 위한 인프라 전략 수립.',
    features: [
      '부서별 워크로드 분석',
      '단일·멀티 GPU 구성 ROI 비교',
      'UVM 활용 및 TCO 시뮬레이터',
      '전담 솔루션 엔지니어',
      'SLA 및 온프레미스 옵션',
    ],
    cta: '도입 문의',
    highlighted: false,
  },
]

export const team = [
  {
    role: 'EL · CEO',
    name: '김선우',
    field: 'CPU 마이크로아키텍처',
    bio: '하이브리드 아키텍처와 V-Cache 최적화 연구. 복소수 신경망 텐서 병렬화 논문·특허, Edge AI 하드웨어 다수 경험.',
    affiliation: '이화여대 인공지능·소프트웨어학부',
  },
  {
    role: 'PI · 기술 자문',
    name: '윤명국',
    field: 'GPU 마이크로아키텍처',
    bio: '前 삼성전자 무선·네트워크사업부. 컴퓨터 아키텍처 분야 다수의 특허 출원·등록. 연구 및 특허 전략 총괄.',
    affiliation: '이화여대 컴퓨터공학과',
  },
  {
    role: 'PM · 사업 지원',
    name: '오대현',
    field: '경영 / 창업기획',
    bio: '창업기획자, 창업보육전문매니저, 기술창업지도사. 사업 실무와 보육 프로그램 전반을 지원.',
    affiliation: '이화여대 산학협력단/창업지원단',
  },
  {
    role: 'EM · 시스템 엔지니어',
    name: '박세진',
    field: 'UVM · GPU',
    bio: '통합 가상 메모리 페이지 폴트 핸들링 연구. Jetson 멀티모달 추론 커널 퓨전, FPGA·Jetson 등 Edge AI 경험.',
    affiliation: '이화여대 컴퓨터공학과',
  },
  {
    role: 'EM · SW 엔지니어',
    name: '김희서',
    field: 'SW 시스템 / 풀스택',
    bio: '동시 접속자 1,000명+ 이화이언 운영진 웹개발팀 및 리뉴얼 TF, Edge AI 경량화 논문, 다수의 웹개발 수상 실적.',
    affiliation: '이화여대 컴퓨터공학과',
  },
]

export const milestones = [
  { period: '2026.4–6', title: '기초창업탐색교육', desc: 'MVP 핵심 기능 구현, 웹 플랫폼 1차 완성' },
  { period: '~2026.6', title: '프리토타입교육', desc: '베타 오픈, 초기 사용자 50명 정확도·만족도 검증' },
  { period: '2026.7', title: '실전창업탐색교육', desc: '커뮤니티·SNS 입소문, 베타 사용자 1,000명 확보' },
  { period: '2026.8–12', title: '창업보육', desc: '유료 모델 검증, B2B 파일럿 1–2건 확보' },
]

export const patents = [
  {
    title: '이기종 메모리 시스템에서 페이지 폴트 기반 통합 가상 메모리 관리',
    no: '10-2025-0050927',
    status: '출원',
  },
  {
    title: '오퍼랜드 컬렉터 사전 할당으로 레지스터 파일 효율화',
    no: '10-2713738',
    status: '등록',
  },
  {
    title: '프로세서의 레지스터 캐시 인덱스 결정 방법',
    no: '10-2663496',
    status: '등록',
  },
]
