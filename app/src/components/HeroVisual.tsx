import { Cpu, MemoryStick, Gauge, Activity } from 'lucide-react'

/**
 * 우측에 들어가는 인터랙티브 느낌의 대시보드 미리보기.
 * 실제 사진(PDF 그림 4 — 사용자 UI 예시)으로 교체할 수 있도록
 * 아래 imgPlaceholder 영역을 실 이미지로 바꾸면 됩니다.
 */
export default function HeroVisual() {
  return (
    <div className="relative">
      {/* Glow */}
      <div className="absolute -inset-6 -z-10 rounded-[36px] bg-gradient-to-tr from-brand-500/30 via-purple-500/20 to-accent-500/30 blur-3xl" />

      <div className="glass-card relative overflow-hidden rounded-3xl">
        {/* Window chrome */}
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-red-400/80" />
            <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
            <span className="h-3 w-3 rounded-full bg-green-400/80" />
          </div>
          <span className="font-mono text-[11px] text-white/50">
            comfit.app/dashboard
          </span>
          <span className="h-4 w-12" />
        </div>

        {/* Body */}
        <div className="space-y-4 p-5">
          {/*
            ⬇⬇⬇ [추천: PDF 그림 4 — 시제품의 사용자 UI 예시] 를 이 영역에 넣으면 좋습니다.
            아래 placeholder div 를 <img src="/hero-ui.png" /> 등으로 교체하세요.
          */}
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-ink-800 via-ink-900 to-ink-800">
            <ParetoChart />
            <div className="absolute left-3 top-3 rounded-md bg-black/40 px-2 py-1 font-mono text-[10px] text-white/70 backdrop-blur">
              Cost / Performance · Pareto Optimal
            </div>
          </div>

          {/* Metric tiles */}
          <div className="grid grid-cols-3 gap-3">
            {tiles.map((t) => (
              <div
                key={t.label}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-3"
              >
                <div className="flex items-center gap-2 text-xs text-white/60">
                  <t.icon size={14} className="text-brand-300" />
                  {t.label}
                </div>
                <div className="mt-1 font-mono text-lg font-semibold text-white">
                  {t.value}
                </div>
                <div className="mt-1 h-1 w-full overflow-hidden rounded-full bg-white/5">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-brand-400 to-accent-400"
                    style={{ width: t.bar }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between rounded-xl border border-emerald-400/30 bg-emerald-500/10 px-4 py-3">
            <div className="flex items-center gap-2 text-sm text-emerald-200">
              <Activity size={16} />
              추천: AMD Ryzen 9 7950X · DDR5 4채널 · RTX 5060 Ti
            </div>
            <span className="font-mono text-xs text-emerald-200/80">
              −20% cost · +17% perf
            </span>
          </div>
        </div>
      </div>

      {/* Floating stat cards */}
      <div className="absolute -left-6 top-12 hidden animate-float-slow rounded-2xl border border-white/10 bg-ink-800/90 px-4 py-3 shadow-glow backdrop-blur-xl md:block">
        <div className="text-[10px] uppercase tracking-wider text-white/50">
          IPC
        </div>
        <div className="mt-1 font-mono text-xl font-semibold text-white">
          2.41
        </div>
      </div>
      <div className="absolute -right-4 bottom-16 hidden animate-float-slow rounded-2xl border border-white/10 bg-ink-800/90 px-4 py-3 shadow-glow backdrop-blur-xl md:block">
        <div className="text-[10px] uppercase tracking-wider text-white/50">
          L3 Miss
        </div>
        <div className="mt-1 font-mono text-xl font-semibold text-white">
          3.7%
        </div>
      </div>
    </div>
  )
}

const tiles = [
  { icon: Cpu, label: 'CPU 활용도', value: '78%', bar: '78%' },
  { icon: MemoryStick, label: 'Mem BW', value: '64 GB/s', bar: '62%' },
  { icon: Gauge, label: 'Cache Hit', value: '96.3%', bar: '96%' },
]

function ParetoChart() {
  // SVG로 비용-성능 파레토 곡선 미니 차트
  return (
    <svg viewBox="-2 0 330 190" className="h-full w-full">
      <defs>
        <linearGradient id="area" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#5b85ff" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="line" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#67e8f9" />
          <stop offset="100%" stopColor="#5b85ff" />
        </linearGradient>
      </defs>
      {/* grid */}
      {[...Array(5)].map((_, i) => (
        <line
          key={i}
          x1="20"
          x2="310"
          y1={30 + i * 30}
          y2={30 + i * 30}
          stroke="rgba(255,255,255,0.06)"
        />
      ))}
      {/* area */}
      <path
        d="M20,150 C80,140 110,120 140,90 C170,60 210,50 260,42 L310,40 L310,160 L20,160 Z"
        fill="url(#area)"
      />
      {/* line */}
      <path
        d="M20,150 C80,140 110,120 140,90 C170,60 210,50 260,42 L310,40"
        stroke="url(#line)"
        strokeWidth="2.5"
        fill="none"
      />
      {/* points */}
      {[
        [60, 144],
        [110, 120],
        [150, 92],
        [200, 70],
        [255, 48],
      ].map(([x, y], i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r={i === 3 ? 6 : 3.5}
          fill={i === 3 ? '#67e8f9' : '#fff'}
          stroke={i === 3 ? '#5b85ff' : 'transparent'}
          strokeWidth={i === 3 ? 3 : 0}
          opacity={i === 3 ? 1 : 0.7}
        />
      ))}
      {/* label */}
      <g transform="translate(168,46)">
        <rect
          x="0"
          y="0"
          width="92"
          height="22"
          rx="6"
          fill="#0a0d1f"
          stroke="rgba(103,232,249,0.6)"
        />
        <text
          x="46"
          y="14"
          textAnchor="middle"
          fontSize="10"
          fontFamily="monospace"
          fill="#67e8f9"
        >
          OPTIMAL · 7950X
        </text>
      </g>
      {/* x-axis */}
      <text x="310" y="178" fontSize="9" fill="rgba(255,255,255,0.4)" textAnchor="end">
        cost →
      </text>
      {/* y-axis */}
      <text
        x="8"
        y="95"
        fontSize="9"
        fill="rgba(255,255,255,0.4)"
        textAnchor="middle"
        transform="rotate(-90 8 95)"
      >
        perf →
      </text>
    </svg>
  )
}
