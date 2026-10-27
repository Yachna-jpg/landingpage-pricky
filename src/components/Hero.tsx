'use client'

import React from 'react'
import { ArrowUpRight, BookOpen } from 'lucide-react'

interface HeroProps {
  onOpenLeadModal: (source?: string) => void
}

export default function Hero({ onOpenLeadModal }: HeroProps) {
  return (
    <section
      id="curriculum"
      style={{
        position: 'relative',
        padding: '96px 0 112px',
        backgroundColor: 'var(--bg-canvas)',
      }}
    >
      <div className="container" style={{ maxWidth: '1180px' }}>
        {/* Hero Headline & Subtitle */}
        <div style={{ textAlign: 'center', maxWidth: '920px', margin: '0 auto 64px' }}>
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(42px, 6vw, 72px)',
              fontWeight: 400,
              lineHeight: 1.08,
              letterSpacing: '-0.03em',
              color: 'var(--text-main)',
              marginBottom: '26px',
            }}
          >
            Exam-Specific AI Revision for <br />
            <span style={{ fontStyle: 'italic', fontWeight: 400 }}>Cambridge O-Level & IGCSE</span>
          </h1>

          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(18px, 2.3vw, 22.5px)',
              lineHeight: 1.62,
              color: 'var(--text-muted)',
              maxWidth: '760px',
              margin: '0 auto 44px',
            }}
          >
            Start free, upgrade when you need unlimited past papers & 24/7 AI marking. Master authentic previous year past papers, receive real-time examiner-mark-scheme explanations with exact mark breakdowns, and retain 95% using the Leitner 5-Box spaced engine.
          </p>

          {/* Action Buttons */}
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
              onClick={() => onOpenLeadModal('Hero Diagnostic CTA')}
              className="btn-minimal-dark"
              style={{ padding: '16px 36px', fontSize: '15px' }}
            >
              Start Free Diagnostic Practice <ArrowUpRight size={17} />
            </button>

            <a
              href="#hero-video"
              className="btn-minimal-outline"
              style={{ padding: '16px 32px', fontSize: '15px' }}
              onClick={(e) => {
                e.preventDefault()
                const el = document.getElementById('hero-video')
                if (el) el.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              <BookOpen size={17} color="var(--text-muted)" /> Explore Our Website
            </a>
          </div>
        </div>

        {/* Hero Video Section */}
        <div
          id="hero-video"
          style={{
            maxWidth: '1060px',
            margin: '0 auto',
            backgroundColor: '#0f1115',
            borderRadius: '20px',
            border: '1px solid var(--border-medium)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.14)',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <video
            src="/video.mp4"
            autoPlay
            loop
            muted
            playsInline
            controls
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              borderRadius: '20px',
            }}
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  )
}
