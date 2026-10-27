'use client'

import React from 'react'
import { ArrowRight, BookOpen } from 'lucide-react'

interface BottomCTAProps {
  onOpenLeadModal: (source?: string) => void
}

export default function BottomCTA({ onOpenLeadModal }: BottomCTAProps) {
  return (
    <section style={{ backgroundColor: 'var(--bg-canvas)', padding: '60px 0 80px' }}>
      <div className="container" style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 24px' }}>
        {/* Dark Mode Box for Prepare for your Cambridge exams */}
        <div
          style={{
            backgroundColor: '#0f1115',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '24px',
            padding: '72px 40px',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.5)',
          }}
        >
          {/* Subtle Ambient Cyan Glow */}
          <div
            style={{
              position: 'absolute',
              top: '-50%',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '550px',
              height: '320px',
              background: 'radial-gradient(circle, rgba(0, 168, 255, 0.2) 0%, rgba(15, 17, 21, 0) 70%)',
              borderRadius: '50%',
              pointerEvents: 'none',
            }}
          />

          <div style={{ position: 'relative', zIndex: 2, maxWidth: '720px', margin: '0 auto' }}>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(28px, 4vw, 42px)',
                fontWeight: 700,
                color: '#ffffff',
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
                marginBottom: '16px',
              }}
            >
              Prepare for your Cambridge exams with zero limits.
            </h2>

            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '16px',
                lineHeight: 1.6,
                color: '#94a3b8',
                marginBottom: '36px',
              }}
            >
              Practice with authentic O-Level and IGCSE past papers, real-time AI feedback on your answers, and achieve guaranteed top grades with your free diagnostic test today.
            </p>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '16px',
              }}
            >
              <button
                onClick={() => onOpenLeadModal('Bottom Banner Primary CTA')}
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '15px',
                  fontWeight: 600,
                  backgroundColor: '#00a8ff',
                  color: '#ffffff',
                  padding: '16px 36px',
                  borderRadius: 'var(--radius-pill)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 4px 14px rgba(0, 168, 255, 0.4)',
                  transition: 'all 0.15s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#0096e6')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#00a8ff')}
              >
                Start Free Diagnostic Practice <ArrowRight size={18} />
              </button>

              <a
                href="#hero-video"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '15px',
                  fontWeight: 600,
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  color: '#e2e8f0',
                  padding: '16px 32px',
                  borderRadius: 'var(--radius-pill)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                }}
                onClick={(e) => {
                  e.preventDefault()
                  const el = document.getElementById('hero-video')
                  if (el) el.scrollIntoView({ behavior: 'smooth' })
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.35)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)'
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)'
                }}
              >
                <BookOpen size={18} color="#00a8ff" /> Explore Our Website
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
