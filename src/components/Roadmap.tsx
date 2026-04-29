import Section from './Section'
import { milestones } from '../data/content'

export default function Roadmap() {
  return (
    <Section
      eyebrow="Roadmap"
      title={
        <>
          2026년 <span className="gradient-text">실행 계획</span>
        </>
      }
      description="기초창업탐색교육에서 창업보육까지, 6개월 단위의 명확한 마일스톤으로 진행됩니다."
    >
      <div className="relative mx-auto max-w-5xl">
        <div
          aria-hidden
          className="absolute left-4 top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-brand-500/0 via-brand-400/40 to-accent-500/0 md:left-1/2"
        />
        <ul className="space-y-10">
          {milestones.map((m, i) => (
            <li
              key={m.title}
              className={`relative grid items-center gap-6 md:grid-cols-2 ${
                i % 2 === 0 ? '' : 'md:[direction:rtl]'
              }`}
            >
              <span className="absolute left-4 top-2 z-10 grid h-3 w-3 -translate-x-1/2 place-items-center rounded-full bg-gradient-to-br from-brand-400 to-accent-400 ring-4 ring-ink-950 md:left-1/2" />
              <div
                className={`pl-10 md:pl-0 ${
                  i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:[direction:ltr] md:text-left'
                }`}
              >
                <span className="font-mono text-sm text-brand-300">
                  {m.period}
                </span>
                <h3 className="mt-1 font-display text-xl font-semibold text-white">
                  {m.title}
                </h3>
              </div>
              <div
                className={`pl-10 md:pl-0 ${
                  i % 2 === 0 ? 'md:pl-12 md:[direction:ltr]' : 'md:pr-12 md:text-right'
                }`}
              >
                <p className="text-sm leading-relaxed text-white/65">
                  {m.desc}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
