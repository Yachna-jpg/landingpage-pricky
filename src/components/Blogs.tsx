'use client'

import React from 'react'
import { ArrowUpRight, BookOpen, Clock } from 'lucide-react'

interface BlogsProps {
  onOpenLeadModal: (title: string) => void
}

export default function Blogs({ onOpenLeadModal }: BlogsProps) {
  const articles = [
    {
      category: 'Examiner Report Audit',
      readTime: '6 min read',
      date: 'May 2024 Series Analysis',
      title: 'The Anatomy of Method Marks: Why Candidates Lose 30% of Paper 4 Marks in Sciences',
      excerpt:
        'A comprehensive review of official Cambridge marking schemes. Why intermediate working [M1] rescues failing answers, and how premature rounding triggers fatal accuracy [A0] penalties.',
      tag: '0620 & 0625 Syllabi',
    },
    {
      category: 'Cognitive Science',
      readTime: '8 min read',
      date: 'Methodology Brief',
      title: 'The 22-Day Threshold: How Working Memory Becomes Permanent Neocortical Recall',
      excerpt:
        'Why single exposure cramming decays below 15% within 3 weeks, and how distributed 5-stage retrieval schedules guarantee 95%+ permanent retention on Cambridge exam day.',
      tag: 'Leitner Spaced Retrieval',
    },
    {
      category: 'Exam Strategy',
      readTime: '5 min read',
      date: 'Regional Variant Guide',
      title: 'Mastering Regional Paper Variants: Why Practicing V1, V2, and V3 Is Non-Negotiable',
      excerpt:
        'Cambridge designs distinct variants for different global time zones. Here is how cross-variant drills expose novel question twists before you see them in the examination hall.',
      tag: 'Cambridge Variants V1–V3',
    },
  ]

  return (
    <section id="blogs" className="section-spacing" style={{ backgroundColor: 'var(--bg-canvas)', borderTop: '1px solid var(--border-hairline)' }}>
      <div className="container" style={{ maxWidth: '1180px' }}>
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span className="eyebrow-tag" style={{ marginBottom: '14px' }}>
            Cambridge Revision Insights
          </span>
          <h2 className="editorial-title">
            Latest articles & <span style={{ fontStyle: 'italic' }}>examiner guides</span>
          </h2>
          <p className="editorial-sub" style={{ margin: '14px auto 0' }}>
            Deep dives into Cambridge assessment patterns, interval spacing methodologies, and syllabus masterclasses.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '28px',
          }}
        >
          {articles.map((item, idx) => (
            <article
              key={idx}
              className="editorial-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                cursor: 'pointer',
              }}
              onClick={() => onOpenLeadModal(`Blog: ${item.title}`)}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '18px',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '11.5px',
                    color: 'var(--text-subtle)',
                  }}
                >
                  <span
                    style={{
                      fontWeight: 600,
                      color: 'var(--text-accent)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {item.category}
                  </span>

                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    <Clock size={12} /> {item.readTime}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '22px',
                    fontWeight: 500,
                    lineHeight: 1.3,
                    color: 'var(--text-main)',
                    marginBottom: '14px',
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '15.5px',
                    lineHeight: 1.6,
                    color: 'var(--text-muted)',
                    marginBottom: '28px',
                  }}
                >
                  {item.excerpt}
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
                    fontSize: '11px',
                    fontWeight: 600,
                    color: 'var(--text-subtle)',
                  }}
                >
                  {item.tag}
                </span>

                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '12.5px',
                    fontWeight: 600,
                    color: 'var(--text-main)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  Read Analysis <ArrowUpRight size={14} />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
