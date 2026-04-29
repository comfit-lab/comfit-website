import { performanceCases } from '../data/content'

export default function Stats() {
  return (
    <section className="relative py-20">
      <div className="container-x">
        <div className="glass-card overflow-hidden">
          <div className="grid divide-y divide-white/10 md:grid-cols-3 md:divide-x md:divide-y-0">
            {performanceCases.map((p) => (
              <div
                key={p.label}
                className="group relative p-8 transition-colors hover:bg-white/[0.03]"
              >
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-300">
                  {p.label}
                </div>
                <div className="mt-3 font-display text-5xl font-bold text-white sm:text-6xl">
                  {p.value}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-white/70">
                  {p.desc}
                </p>
                <p className="mt-2 font-mono text-xs text-white/40">{p.sub}</p>
                <span className="absolute right-6 top-6 h-2 w-2 animate-pulse rounded-full bg-emerald-400/80 shadow-[0_0_12px_rgba(52,211,153,0.7)]" />
              </div>
            ))}
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-white/40">
          * 이화여대 지능형시스템 및 병렬컴퓨터구조 연구실 실측 데이터 기반 (2024–2025)
        </p>
      </div>
    </section>
  )
}
