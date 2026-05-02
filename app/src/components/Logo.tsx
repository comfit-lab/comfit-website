import { company } from '../data/content'

export default function Logo({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  if (size === 'lg') {
    return (
      <a
        href="#top"
        className="group inline-flex transition-transform duration-300 hover:-translate-y-0.5"
      >
        <img
          src="/comfit-logo.png"
          alt={company.product}
          className="h-20 w-auto"
          draggable={false}
        />
      </a>
    )
  }

  const iconH = size === 'sm' ? 'h-7' : 'h-9'
  const textH = size === 'sm' ? 'h-5' : 'h-6'
  const gap = size === 'sm' ? 'gap-2' : 'gap-2.5'

  return (
    <a
      href="#top"
      className={`group flex items-center ${gap} transition-transform duration-300 hover:-translate-y-0.5`}
    >
      <img
        src="/comfit-icon.png"
        alt=""
        aria-hidden
        className={`${iconH} w-auto`}
        draggable={false}
      />
      <img
        src="/comfit-text.png"
        alt={company.product}
        className={`${textH} w-auto`}
        draggable={false}
      />
    </a>
  )
}
