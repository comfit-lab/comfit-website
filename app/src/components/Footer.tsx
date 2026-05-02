import { Github, Mail, Globe } from 'lucide-react'
import Logo from './Logo'
import { company } from '../data/content'

const linkGroups = [
  {
    title: '제품',
    links: [
      { label: '핵심 기술', href: '#technology' },
      { label: '서비스 플로우', href: '#flow' },
      { label: '비교', href: '#comparison' },
      { label: '요금제', href: '#pricing' },
    ],
  },
  {
    title: '회사',
    links: [
      { label: '특허/IP', href: '#patents' },
      {
        label: '연구실',
        href: 'https://ip-cal.ewha.ac.kr',
        external: true,
      },
    ],
  },
  {
    title: '리소스',
    links: [
      { label: '베타 신청', href: '#cta' },
      { label: '문의', href: `mailto:${company.email}` },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-ink-950 pt-16">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo size="lg" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/55">
              {company.product}는 워크로드 기반 하드웨어 최적화 통합 플랫폼
              입니다. {company.affiliation} 실험실창업탐색팀 NODE에서 개발
              중입니다.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <a
                href={`mailto:${company.email}`}
                aria-label="이메일"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-white/70 transition-colors hover:bg-white/10 hover:text-white"
              >
                <Mail size={16} />
              </a>
              <a
                href={company.github}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-white/70 transition-colors hover:bg-white/10 hover:text-white"
              >
                <Github size={16} />
              </a>
              <a
                href="#"
                aria-label="홈페이지"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-white/70 transition-colors hover:bg-white/10 hover:text-white"
              >
                <Globe size={16} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            {linkGroups.map((g) => (
              <div key={g.title}>
                <h4 className="font-display text-sm font-semibold text-white">
                  {g.title}
                </h4>
                <ul className="mt-4 space-y-3">
                  {g.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        {...('external' in l && l.external
                          ? { target: '_blank', rel: 'noreferrer noopener' }
                          : {})}
                        className="text-sm text-white/55 transition-colors hover:text-white"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 py-8 sm:flex-row sm:items-center">
          <p className="text-xs text-white/40">
            © {company.year} {company.name} · {company.affiliation} · All
            rights reserved.
          </p>
          <p className="font-mono text-xs text-white/30">
            High benchmark scores don't always mean your work is faster.
          </p>
        </div>
      </div>
    </footer>
  )
}
