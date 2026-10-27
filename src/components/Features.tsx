'use client'

import React from 'react'
import { FileText, GraduationCap, Repeat } from 'lucide-react'

export default function Features() {
  const features = [
    {
      num: '01',
      title: 'Authentic Past Papers Archive',
      desc: '10-year comprehensive archive for Cambridge O-Level and IGCSE subjects. Filtered by regional variant (V1, V2, V3) and series (May/June & Oct/Nov).',
      metricLabel: 'Database Scope',
      metricValue: '24,000+ Exam Questions Indexed',
      icon: FileText,
    },
    {
      num: '02',
      title: '24/7 AI Examiner & Socratic Rubrics',
      desc: 'Calibrated on Cambridge marking schemes and examiner reports. Allocates method marks [M], accuracy marks [A], and independent marks [B] in real-time.',
      metricLabel: 'Mark Scheme Fidelity',
      metricValue: 'Official Step-by-Step Rubrics',
      icon: GraduationCap,
    },
    {
      num: '03',
      title: '5-Box Spaced Retention System',
      desc: 'Automated Leitner spaced repetition. Questions you miss cycle back into immediate re-test; mastered concepts advance to Box 5 for permanent recall.',
      metricLabel: 'Average Retention',
      metricValue: '95% at 90 Days',
      icon: Repeat,
    },
  ]

  return (
    <section id="features" className="section-spacing" style={{ backgroundColor: 'var(--bg-canvas)', borderTop: '1px solid var(--border-hairline)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span className="eyebrow-tag" style={{ marginBottom: '14px' }}>
            Built for Academic Precision
          </span>
          <h2 className="editorial-title">
            Precision revision built for <span style={{ fontStyle: 'italic' }}>Cambridge Syllabi</span>
          </h2>
          <p className="editorial-sub" style={{ margin: '14px auto 0' }}>
            No generic summaries or generic flashcards: built directly against authentic Cambridge mark-scheme criteria.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
            gap: '24px',
          }}
        >
          {features.map((f, idx) => {
            const Icon = f.icon

            return (
              <div
                key={idx}
                className="editorial-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '24px',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '13px',
                        color: 'var(--text-subtle)',
                        fontWeight: 600,
                      }}
                    >
                      {f.num}
                    </span>

                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '8px',
                        backgroundColor: 'var(--bg-subtle)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--text-main)',
                      }}
                    >
                      <Icon size={18} strokeWidth={1.8} />
                    </div>
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '23px',
                      fontWeight: 500,
                      color: 'var(--text-main)',
                      marginBottom: '12px',
                    }}
                  >
                    {f.title}
                  </h3>

                  <p
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '16px',
                      lineHeight: 1.6,
                      color: 'var(--text-muted)',
                      marginBottom: '32px',
                    }}
                  >
                    {f.desc}
                  </p>
                </div>

                <div
                  style={{
                    paddingTop: '16px',
                    borderTop: '1px solid var(--border-hairline)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '11.5px',
                      color: 'var(--text-subtle)',
                    }}
                  >
                    {f.metricLabel}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '12.5px',
                      fontWeight: 600,
                      color: 'var(--text-main)',
                    }}
                  >
                    {f.metricValue}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
