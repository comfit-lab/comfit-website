import { Cpu, LineChart, Zap, type LucideIcon } from 'lucide-react'
import Section from './Section'
import { valueProps } from '../data/content'

const ICONS: Record<string, LucideIcon> = { Cpu, LineChart, Zap }

export default function ValueProps() {
  return (
    <Section
      id="solution"
      eyebrow="Core Values"
      title={
        <>
          ComFit 만의 <span className="gradient-text">차별화 포인트</span>
        </>
      }
      description="추상적 카테고리 분류를 넘어, 27개 마이크로아키텍처 메트릭으로 워크로드의 정체를 해부합니다."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {valueProps.map((v, idx) => {
          const Icon = ICONS[v.icon] ?? Cpu
          return (
            <div
              key={v.title}
              className="glass-card relative overflow-hidden p-8 transition-all duration-300 hover:translate-y-[-2px] hover:border-white/20"
            >
              <div className="flex items-center justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand-500/20 to-accent-500/20 text-brand-200 ring-1 ring-white/10">
                  <Icon size={22} />
                </span>
                <span className="font-mono text-xs text-white/40">
                  0{idx + 1}
                </span>
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold text-white">
                {v.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/65">
                {v.desc}
              </p>
              <div className="mt-6 flex items-baseline gap-2 border-t border-white/10 pt-5">
                <span className="font-display text-3xl font-bold text-white">
                  {v.metric}
                </span>
                <span className="text-xs text-white/50">{v.metricLabel}</span>
              </div>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
