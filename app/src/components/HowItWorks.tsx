import { ScanSearch, Microscope, Sparkles } from 'lucide-react'
import Section from './Section'
import { flowSteps } from '../data/content'

const STEP_ICONS = [ScanSearch, Microscope, Sparkles]

export default function HowItWorks() {
  return (
    <Section
      id="flow"
      eyebrow="How it works"
      title={
        <>
          단 <span className="gradient-text">3단계</span>로 끝나는 분석
        </>
      }
      description="복잡한 분석은 시스템이, 사용자는 결과 그래프에서 최적점을 클릭만 하면 됩니다."
    >
      <div className="relative">
        {/* connector */}
        <div
          aria-hidden
          className="absolute left-[8%] right-[8%] top-12 hidden h-px bg-gradient-to-r from-transparent via-brand-400/40 to-transparent md:block"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {flowSteps.map((s, i) => {
            const Icon = STEP_ICONS[i]
            return (
              <div
                key={s.step}
                className="glass-card relative p-8 transition-all duration-300 hover:border-white/20"
              >
                <div className="flex items-center gap-3">
                  <span className="relative grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-accent-500 text-white shadow-glow">
                    <Icon size={20} />
                  </span>
                  <span className="font-mono text-sm text-white/40">
                    STEP {s.step}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold text-white">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">
                  {s.desc}
                </p>
                <div className="mt-6 flex items-center gap-2 rounded-lg border border-white/10 bg-black/30 px-3 py-2 font-mono text-xs text-brand-200/90">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  {s.keypoint}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/*
        ⬇⬇⬇ [추천] PDF의 "그림 3. 시제품의 통합 아키텍처 플랫폼" 다이어그램을 이 아래
        영역에 넣으면 시스템 구조 이해에 도움이 됩니다.
        예) <img src="/architecture.png" className="mt-12 mx-auto rounded-2xl border ..." />
      */}
    </Section>
  )
}
