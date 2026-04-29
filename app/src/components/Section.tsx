import { ReactNode } from 'react'

interface SectionProps {
  id?: string
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  children: ReactNode
  align?: 'left' | 'center'
  className?: string
}

export default function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  align = 'center',
  className = '',
}: SectionProps) {
  return (
    <section id={id} className={`relative py-24 lg:py-32 ${className}`}>
      <div className="container-x">
        <div
          className={`mx-auto max-w-3xl ${
            align === 'center' ? 'text-center' : 'text-left'
          }`}
        >
          {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
          <h2 className="mt-3 section-heading">{title}</h2>
          {description && (
            <p className="mt-4 text-lg leading-relaxed text-white/65">
              {description}
            </p>
          )}
        </div>
        <div className="mt-14">{children}</div>
      </div>
    </section>
  )
}
