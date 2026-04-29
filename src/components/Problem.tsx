import { AlertTriangle, Building2, User } from 'lucide-react'
import Section from './Section'
import { problems } from '../data/content'

const icons = [User, Building2]

export default function Problem() {
  return (
    <Section
      id="problem"
      eyebrow="The Problem"
      title={
        <>
          하드웨어 선택은 여전히
          <br />
          <span className="gradient-text">경험과 직관의 영역</span>입니다.
        </>
      }
      description="개인은 과투자와 체감 성능 저하 사이에서, 기업은 수억 원 규모의 인프라 의사결정 앞에서 길을 잃습니다."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {problems.map((p, i) => {
          const Icon = icons[i]
          return (
            <div
              key={p.title}
              className="glass-card group relative overflow-hidden p-8 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05]"
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-500/15 blur-3xl transition-opacity duration-300 group-hover:bg-brand-500/30" />
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/5 text-brand-300">
                  <Icon size={20} />
                </span>
                <h3 className="font-display text-xl font-semibold text-white">
                  {p.title}
                </h3>
              </div>
              <p className="mt-4 text-white/70 leading-relaxed">{p.body}</p>
              <ul className="mt-5 space-y-2.5">
                {p.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-2.5 text-sm text-white/60"
                  >
                    <AlertTriangle
                      size={14}
                      className="mt-0.5 flex-none text-amber-400/80"
                    />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>

      {/*
        ⬇⬇⬇ [추천] PDF의 "그림 1. 범용 카테고리 내의 워크로드 별 요구사항" 또는
        "그림 2. 하드웨어 구매 비용에 따른 체감 성능" 그래프를 이 영역에 넣으면
        문제를 시각적으로 설득력 있게 보강할 수 있습니다.
        예) <img src="/figure-1.png" alt="..." className="..." />
      */}
    </Section>
  )
}
