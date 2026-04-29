import { company } from '../data/content'

export default function Logo({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const px = size === 'sm' ? 'h-7 w-7' : size === 'lg' ? 'h-10 w-10' : 'h-8 w-8'
  const text = size === 'sm' ? 'text-base' : size === 'lg' ? 'text-2xl' : 'text-lg'

  return (
    <a href="#top" className="group flex items-center gap-2.5">
      <span
        className={`relative grid ${px} place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 shadow-glow transition-transform duration-300 group-hover:rotate-6`}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-1/2 w-1/2 text-white"
          aria-hidden
        >
          <path
            d="M5 19V5l14 14V5"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className={`font-display font-bold ${text} tracking-tight`}>
        {company.name}
        <span className="ml-1 hidden text-white/40 sm:inline">·</span>
        <span className="ml-1 hidden text-white/60 sm:inline">{company.product}</span>
      </span>
    </a>
  )
}
