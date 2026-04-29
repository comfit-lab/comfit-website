import { ArrowRight, Sparkles, PlayCircle } from 'lucide-react'
import { company, heroStats } from '../data/content'
import HeroVisual from './HeroVisual'

export default function Hero() {
  return (
    <section className="relative pt-20 pb-24 lg:pt-28 lg:pb-32">
      <div className="absolute inset-0 -z-10 grid-bg opacity-60" />
      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <span className="badge">
              <Sparkles size={14} className="text-accent-400" />
              <span>이화여대 산학협력단 · 실험실창업탐색팀</span>
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-[64px] lg:leading-[1.06]">
              <span className="gradient-text">벤치마크 점수</span>가 높다고
              <br />
              내 작업이 빠른 건 아닙니다.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
              {company.product}는 사용자의 실제 워크로드를 27개 마이크로아키텍처
              메트릭으로 정량 분석합니다. 벤치마크 점수를 넘어, 이 작업에 정확히
              필요한 하드웨어를 과학적 근거로 추천합니다.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#cta" className="btn-primary">
                무료로 시작하기
                <ArrowRight size={16} />
              </a>
              <a href="#solution" className="btn-ghost">
                <PlayCircle size={16} />
                서비스 둘러보기
              </a>
            </div>

            <p className="mt-5 text-xs text-white/50">
              · 신용카드 불필요 · 5분 안에 첫 분석 리포트 ·
            </p>

            <dl className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {heroStats.map((s) => (
                <div
                  key={s.label}
                  className="glass-card p-4 transition-colors hover:bg-white/[0.05]"
                >
                  <dt className="font-display text-2xl font-bold text-white sm:text-3xl">
                    {s.value}
                  </dt>
                  <dd className="mt-1 whitespace-pre-line text-xs leading-tight text-white/60">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-6">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  )
}
