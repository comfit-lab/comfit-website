/**
 * "이런 곳에서 사용/협업합니다" 느낌의 로고 스트립.
 * 임시 텍스트 로고 — 실제 파트너/언론 로고 이미지가 생기면 교체하세요.
 */
const items = [
  '이화여자대학교 창업지원단',
  '지능형시스템 및 병렬컴퓨터구조 LAB',
  'SPEC CPU 2017',
  'NVIDIA Profiling',
  '과학기술사업화진흥원',
]

export default function LogoStrip() {
  return (
    <section aria-label="협력" className="border-y border-white/5 bg-white/[0.015] py-10">
      <div className="container-x">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
          공공기술기반 시장연계 창업탐색 지원사업 · 실험실창업탐색팀
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 opacity-70">
          {items.map((name) => (
            <div
              key={name}
              className="whitespace-nowrap text-center font-display text-sm font-semibold tracking-tight text-white/70"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
