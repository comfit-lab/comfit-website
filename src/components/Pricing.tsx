import { Check, Sparkles } from 'lucide-react'
import Section from './Section'
import { pricing } from '../data/content'

export default function Pricing() {
  return (
    <Section
      id="pricing"
      eyebrow="Pricing"
      title={
        <>
          개인부터 <span className="gradient-text">엔터프라이즈</span>까지
        </>
      }
      description="시작은 무료. 정밀 분석이 필요할 때 자연스럽게 업그레이드하세요."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {pricing.map((p) => (
          <div
            key={p.name}
            className={`relative flex flex-col p-8 transition-all duration-300 ${
              p.highlighted
                ? 'rounded-2xl border-2 border-transparent bg-gradient-to-b from-brand-500/15 via-ink-900 to-ink-900 [background-clip:padding-box] shadow-glow'
                : 'glass-card hover:border-white/20'
            }`}
            style={
              p.highlighted
                ? {
                    boxShadow:
                      '0 0 0 1px rgba(91,133,255,0.5), 0 30px 80px -20px rgba(59,93,255,0.45)',
                  }
                : undefined
            }
          >
            {p.highlighted && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-brand-500 to-accent-500 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white shadow-glow">
                <Sparkles size={11} className="mr-1 inline" />
                {p.badge}
              </span>
            )}
            <div className="flex items-baseline justify-between">
              <h3 className="font-display text-xl font-semibold text-white">
                {p.name}
              </h3>
            </div>
            <div className="mt-6 flex items-baseline gap-1.5">
              <span className="font-display text-4xl font-bold text-white">
                {p.price}
              </span>
              <span className="text-sm text-white/50">{p.cadence}</span>
            </div>
            <p className="mt-3 text-sm text-white/65">{p.desc}</p>

            <ul className="mt-6 flex-1 space-y-3">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm">
                  <span className="mt-0.5 grid h-4 w-4 flex-none place-items-center rounded-full bg-emerald-500/20 text-emerald-300">
                    <Check size={11} strokeWidth={3} />
                  </span>
                  <span className="text-white/80">{f}</span>
                </li>
              ))}
            </ul>
            <a
              href="#cta"
              className={`mt-8 ${p.highlighted ? 'btn-primary' : 'btn-ghost'} w-full`}
            >
              {p.cta}
            </a>
          </div>
        ))}
      </div>
      <p className="mt-8 text-center text-xs text-white/40">
        * 요금제는 베타 기간 동안 변경될 수 있습니다. 학생/연구실 할인은 별도 문의 바랍니다.
      </p>
    </Section>
  )
}
