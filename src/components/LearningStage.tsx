'use client'

import React, { useState } from 'react'
import { ArrowUpRight, GraduationCap, Target, Users } from 'lucide-react'

interface LearningStageProps {
  onOpenLeadModal: (stageName: string) => void
}

export default function LearningStage({ onOpenLeadModal }: LearningStageProps) {
  const [selectedStage, setSelectedStage] = useState('class_10')

  const stages = [
    {
      id: 'class_9',
      tag: 'Foundation Phase',
      title: "I'm a Class 9 Student",
      desc: 'Build foundational syllabus mastery early. Master core definitions and progressive problem sets before board exam year.',
      cta: 'Explore Foundation Track',
      icon: GraduationCap,
      isPopular: false,
    },
    {
      id: 'class_10',
      tag: 'Targeting Exam Year',
      title: "I'm a Class 10 Candidate",
      desc: 'Rigorous authentic past paper drills (Paper 1, 2, 4). Leitner 5-box spaced repetition ensuring permanent retention through exam day.',
      cta: 'Start Exam Drills',
      icon: Target,
      isPopular: true,
    },
    {
      id: 'parent_teacher',
      tag: 'Educators & Homeschool',
      title: "I'm a Teacher or Parent",
      desc: 'Monitor candidate progress, identify syllabus weak-point diagnostics, and orchestrate targeted high-retention practice sets.',
      cta: 'Explore Institutional Pilot',
      icon: Users,
      isPopular: false,
    },
  ]

  return (
    <section className="section-spacing" style={{ backgroundColor: 'var(--bg-canvas)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span className="eyebrow-tag" style={{ marginBottom: '14px' }}>
            Tailored to Your Learning Goals
          </span>
          <h2 className="editorial-title">
            Choose your learning <span style={{ fontStyle: 'italic' }}>stage</span>
          </h2>
          <p className="editorial-sub" style={{ margin: '14px auto 0' }}>
            Structured learning pathways calibrated to where you stand in the Cambridge exam lifecycle.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
            gap: '24px',
          }}
        >
          {stages.map((stage) => {
            const Icon = stage.icon
            const isSelected = selectedStage === stage.id

            return (
              <div
                key={stage.id}
                onClick={() => setSelectedStage(stage.id)}
                style={{
                  position: 'relative',
                  backgroundColor: 'var(--bg-surface)',
                  borderRadius: 'var(--radius-md)',
                  border: isSelected ? '1.5px solid var(--text-main)' : '1px solid var(--border-hairline)',
                  padding: '36px 30px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                  boxShadow: isSelected ? 'var(--shadow-subtle)' : 'none',
                }}
              >
                {stage.isPopular && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '-11px',
                      right: '24px',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '10.5px',
                      fontWeight: 600,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      backgroundColor: 'var(--text-main)',
                      color: '#ffffff',
                      padding: '3px 10px',
                      borderRadius: 'var(--radius-pill)',
                    }}
                  >
                    Recommended
                  </div>
                )}

                <div>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      backgroundColor: 'var(--bg-canvas)',
                      border: '1px solid var(--border-hairline)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--text-main)',
                      marginBottom: '24px',
                    }}
                  >
                    <Icon size={20} strokeWidth={1.8} />
                  </div>

                  <div
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '11px',
                      fontWeight: 600,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      color: 'var(--text-subtle)',
                      marginBottom: '8px',
                    }}
                  >
                    {stage.tag}
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '24px',
                      fontWeight: 500,
                      color: 'var(--text-main)',
                      marginBottom: '12px',
                    }}
                  >
                    {stage.title}
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
                    {stage.desc}
                  </p>
                </div>

                <div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      onOpenLeadModal(`Stage: ${stage.title}`)
                    }}
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '13px',
                      fontWeight: 600,
                      color: 'var(--text-main)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      borderBottom: '1px solid var(--border-medium)',
                      paddingBottom: '2px',
                    }}
                  >
                    {stage.cta} <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
