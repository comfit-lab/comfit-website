import { useState } from 'react'
import { ArrowRight, Mail } from 'lucide-react'
import { company } from '../data/content'

// ⚙️ 폼 제출 엔드포인트
//   1) Formspree (https://formspree.io) 가입 → 새 폼 생성 → endpoint 복붙
//   2) team.comfit@gmail.com 으로 알림 메일이 자동 전달됩니다
//   3) Formspree 대시보드에서 신청 내역도 모두 확인 가능
//   - 미설정 시(placeholder) 그대로면 mailto: 로 폴백합니다
const FORM_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'

export default function CTA() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    if (FORM_ENDPOINT.includes('YOUR_FORM_ID')) {
      // 폴백: 사용자의 메일 클라이언트로 전송
      const email = data.get('email')
      window.location.href = `mailto:${company.email}?subject=ComFit%20베타%20신청&body=신청자%20이메일:%20${email}`
      return
    }

    setStatus('loading')
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="cta" className="relative py-24 lg:py-32">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-mesh-1 p-10 sm:p-16">
          <div className="absolute inset-0 -z-10 bg-ink-900/60 backdrop-blur-3xl" />
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <span className="section-eyebrow">Get Started</span>
              <h2 className="mt-3 section-heading">
                지금, <span className="gradient-text">데이터 기반</span>으로
                <br />
                하드웨어를 결정하세요.
              </h2>
              <p className="mt-5 max-w-lg text-white/70">
                ComFit 베타에 신청하면 27개 메트릭 기반 워크로드 분석 리포트를
                무료로 제공합니다. 정식 출시 시 Pro 플랜 1개월 무료 사용권도
                드립니다.
              </p>
            </div>

            <form
              className="grid gap-3 sm:grid-cols-[1fr_auto]"
              onSubmit={handleSubmit}
            >
              <label className="relative">
                <span className="sr-only">이메일</span>
                <Mail
                  size={16}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/40"
                />
                <input
                  type="email"
                  name="email"
                  required
                  disabled={status === 'loading'}
                  placeholder="business@company.com"
                  className="w-full rounded-full border border-white/15 bg-white/[0.04] py-3.5 pl-11 pr-5 text-sm text-white placeholder:text-white/40 outline-none transition focus:border-brand-400/60 focus:bg-white/[0.07] disabled:opacity-60"
                />
              </label>
              <input type="hidden" name="_subject" value="[ComFit] 베타 신청" />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-primary disabled:opacity-60"
              >
                {status === 'loading' ? '전송 중…' : '베타 신청'}
                <ArrowRight size={16} />
              </button>
              <p className="col-span-full text-xs text-white/40">
                {status === 'success' ? (
                  <span className="text-emerald-300">
                    ✓ 신청이 접수되었습니다. 곧 연락드리겠습니다.
                  </span>
                ) : status === 'error' ? (
                  <span className="text-amber-300">
                    전송 중 오류가 발생했습니다. {company.email} 로 직접 문의 부탁드립니다.
                  </span>
                ) : (
                  <>
                    또는 직접 문의:{' '}
                    <a
                      href={`mailto:${company.email}`}
                      className="underline-offset-2 hover:text-white hover:underline"
                    >
                      {company.email}
                    </a>
                  </>
                )}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
