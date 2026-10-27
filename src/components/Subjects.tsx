'use client'

import React from 'react'
import { ArrowUpRight, Atom, Dna, Calculator, Binary, Sparkles, TrendingUp } from 'lucide-react'

interface SubjectsProps {
  onOpenLeadModal: (subjectName: string) => void
}

export default function Subjects({ onOpenLeadModal }: SubjectsProps) {
  // Exact 6 subjects present on prickyai.com
  const subjects = [
    {
      name: 'Physics',
      code: '0625 · 5054',
      curriculum: 'Cambridge IGCSE & O-Level',
      icon: Atom,
    },
    {
      name: 'Chemistry',
      code: '0620 · 5070',
      curriculum: 'Cambridge IGCSE & O-Level',
      icon: Sparkles,
    },
    {
      name: 'Biology',
      code: '0610 · 5090',
      curriculum: 'Cambridge IGCSE & O-Level',
      icon: Dna,
    },
    {
      name: 'Mathematics',
      code: '0580 · 0606',
      curriculum: 'Cambridge IGCSE & O-Level',
      icon: Calculator,
    },
    {
      name: 'Economics',
      code: '0455 · 2281',
      curriculum: 'Cambridge IGCSE & O-Level',
      icon: TrendingUp,
    },
    {
      name: 'Computer Science / ICT',
      code: '0478 · 2210',
      curriculum: 'Cambridge IGCSE & O-Level',
      icon: Binary,
    },
  ]

  return (
    <section
      id="subjects"
      style={{
        padding: '88px 0',
        backgroundColor: 'var(--bg-canvas)',
        borderTop: '1px solid var(--border-hairline)',
      }}
    >
      <div className="container" style={{ maxWidth: '1180px', margin: '0 auto', padding: '0 24px' }}>
        {/* Clean Editorial Header - No AI-style blue badges */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
          <span className="eyebrow-tag" style={{ marginBottom: '14px' }}>
            Supported Curricula
          </span>
          <h2 className="editorial-title">
            Cambridge O-Level & IGCSE <span style={{ fontStyle: 'italic' }}>Subjects</span>
          </h2>
          <p className="editorial-sub" style={{ margin: '14px auto 0' }}>
            Available across all examination series, past year paper components, and official examiner marking rubrics.
          </p>
        </div>

        {/* Clean, Non-Elaborated Subject Cards - Exact Subjects from prickyai.com */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '20px',
          }}
        >
          {subjects.map((sub, idx) => {
            const Icon = sub.icon

            return (
              <div
                key={idx}
                className="editorial-card"
                onClick={() => onOpenLeadModal(`Practice: ${sub.name}`)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '24px 24px',
                  backgroundColor: 'var(--bg-surface)',
                  borderRadius: '14px',
                  border: '1px solid var(--border-hairline)',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '10px',
                      backgroundColor: 'var(--bg-canvas)',
                      border: '1px solid var(--border-hairline)',
                      color: 'var(--text-main)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={20} strokeWidth={1.8} />
                  </div>

                  <div>
                    <h3
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '20px',
                        fontWeight: 500,
                        color: 'var(--text-main)',
                        margin: 0,
                        marginBottom: '4px',
                      }}
                    >
                      {sub.name}
                    </h3>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '12px',
                        color: 'var(--text-subtle)',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '11.5px',
                          fontWeight: 600,
                          color: 'var(--text-muted)',
                        }}
                      >
                        {sub.code}
                      </span>
                      <span>·</span>
                      <span>{sub.curriculum}</span>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--bg-canvas)',
                    border: '1px solid var(--border-hairline)',
                    color: 'var(--text-main)',
                    flexShrink: 0,
                  }}
                >
                  <ArrowUpRight size={15} />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
