import { Check, X, Sparkles } from 'lucide-react'
import Section from './Section'
import { comparison } from '../data/content'

export default function Comparison() {
  return (
    <Section
      id="comparison"
      eyebrow="Why ComFit"
      title={
        <>
          기존 견적 서비스와의 <span className="gradient-text">결정적 차이</span>
        </>
      }
      description="추상적 카테고리·정성적 상담 중심의 기존 서비스로는 풀 수 없는 정량적 분석의 영역."
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] overflow-hidden rounded-2xl border border-white/10">
          <thead>
            <tr className="bg-white/[0.04] text-left text-sm">
              {comparison.headers.map((h, i) => (
                <th
                  key={i}
                  className={`p-5 font-semibold ${
                    i === 0
                      ? 'text-white/60'
                      : i === 3
                        ? 'text-white'
                        : 'text-white/55'
                  }`}
                >
                  {i === 3 ? (
                    <span className="inline-flex items-center gap-1.5">
                      <Sparkles size={14} className="text-accent-400" />
                      <span className="gradient-text">{h}</span>
                    </span>
                  ) : (
                    h
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {comparison.rows.map((row, ri) => (
              <tr
                key={ri}
                className="border-t border-white/10 text-sm transition-colors hover:bg-white/[0.02]"
              >
                {row.map((cell, ci) => (
                  <td
                    key={ci}
                    className={`p-5 align-top ${
                      ci === 0
                        ? 'font-medium text-white/85'
                        : ci === 3
                          ? 'text-white'
                          : 'text-white/55'
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      {ci > 0 &&
                        (cell === '없음' ||
                        cell === '거의 없음' ||
                        cell === '제한적' ||
                        cell === '기본 호환성' ||
                        cell === '가격 비교 중심' ? (
                          <X
                            size={14}
                            className="mt-1 flex-none text-white/30"
                          />
                        ) : ci === 3 ? (
                          <Check
                            size={14}
                            className="mt-1 flex-none text-emerald-400"
                          />
                        ) : null)}
                      <span>{cell}</span>
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  )
}
