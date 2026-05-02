import { Cpu, ServerCog, Network, BadgeCheck } from 'lucide-react'
import Section from './Section'
import { techHighlights, patents } from '../data/content'

const ICONS = [Cpu, ServerCog, Network]

export default function Technology() {
  return (
    <Section
      id="technology"
      eyebrow="Core Technology"
      title={
        <>
          마이크로아키텍처 <span className="gradient-text">White-Box</span> 분석
        </>
      }
      description="시스템 전체를 Black-box로 보는 벤치마크 방식이 아니라, 커널/명령어 단위까지 들여다봅니다."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {techHighlights.map((t, i) => {
          const Icon = ICONS[i]
          return (
            <div
              key={t.title}
              className="glass-card relative flex flex-col p-8 transition-all duration-300 hover:border-white/20"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-white/5 text-accent-400 ring-1 ring-white/10">
                <Icon size={22} />
              </span>
              <h3 className="mt-6 font-display text-xl font-semibold text-white">
                {t.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-white/65">
                {t.body}
              </p>
              <div className="mt-6 rounded-xl border border-emerald-400/20 bg-emerald-500/5 p-4 text-sm leading-relaxed text-emerald-100/90">
                <span className="mr-1 font-semibold text-emerald-300">실증 ·</span>
                {t.proof}
              </div>
            </div>
          )
        })}
      </div>

      {/* Comparison table — Conventional vs ComFit */}
      <div className="mt-16 overflow-hidden rounded-2xl border border-white/10">
        <div className="grid grid-cols-3 bg-white/[0.04] text-sm">
          <div className="p-5 font-semibold text-white/60">구분</div>
          <div className="border-l border-white/10 p-5 font-semibold text-white/60">
            기존 방식 (Benchmark)
          </div>
          <div className="border-l border-white/10 p-5 font-semibold text-white">
            <span className="gradient-text">ComFit (Microarchitecture-aware)</span>
          </div>
        </div>
        {[
          ['판단 근거', '단순 점수 합산', '하드웨어 내부 지표 (IPC, Cache, UVM)'],
          ['분석 단위', '시스템 전체 (Black-box)', '커널/명령어 단위 (White-box)'],
          ['최적화 범위', '예산 맞춤형 단순 조합', '아키텍처 특성 고려 맞춤형 설계'],
          ['전문성', '일반 사용자 경험 의존', '학술적 마이크로아키텍처 분석 기반'],
        ].map((row, i) => (
          <div
            key={i}
            className="grid grid-cols-3 border-t border-white/10 text-sm transition-colors hover:bg-white/[0.02]"
          >
            <div className="p-5 font-medium text-white/80">{row[0]}</div>
            <div className="border-l border-white/10 p-5 text-white/55">
              {row[1]}
            </div>
            <div className="border-l border-white/10 p-5 text-white">
              {row[2]}
            </div>
          </div>
        ))}
      </div>

      {/* Patents */}
      <div id="patents" className="mt-16 scroll-mt-24">
        <h3 className="font-display text-lg font-semibold text-white">
          관련 특허
        </h3>
        <p className="mt-1 text-sm text-white/50">
          PI 윤명국 교수 및 연구팀의 마이크로아키텍처 분야 출원·등록 특허
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {patents.map((p) => (
            <div
              key={p.no}
              className="rounded-xl border border-white/10 bg-white/[0.02] p-5"
            >
              <div className="flex items-center justify-between">
                <span
                  className={`badge ${
                    p.status === '등록'
                      ? 'border-emerald-400/30 bg-emerald-500/10 text-emerald-200'
                      : 'border-brand-400/30 bg-brand-500/10 text-brand-200'
                  }`}
                >
                  <BadgeCheck size={12} />
                  {p.status}
                </span>
                <span className="font-mono text-xs text-white/40">{p.no}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-white/85">
                {p.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
