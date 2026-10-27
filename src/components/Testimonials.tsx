'use client'

import React, { useState } from 'react'
import { Star } from 'lucide-react'

// Official Google 'G' Multi-Color SVG
function GoogleGIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <path
        fill="#4285F4"
        d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.65v3.03h3.88c2.28-2.09 3.665-5.17 3.665-9.12z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.03c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.13C3.26 21.36 7.33 24 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.28 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.13z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.13c.95-2.83 3.6-4.96 6.72-4.96z"
      />
    </svg>
  )
}

export default function Testimonials() {
  const [isPaused, setIsPaused] = useState(false)

  // Authentic reviews taken from prickyai.com with genuine Google reviewer format
  const rawReviews = [
    {
      id: 1,
      name: 'Rajesh Aggarwal',
      initial: 'R',
      avatarBg: '#1a73e8',
      role: 'Local Guide · 12 reviews',
      school: 'Modern School, New Delhi',
      timeAgo: '2 weeks ago',
      rating: 5,
      quote:
        'Replaced 90% of private tuition hours for our son. Clear, immediate feedback on every past paper attempt with step-by-step marking rubrics.',
    },
    {
      id: 2,
      name: 'Aarav Mehta',
      initial: 'A',
      avatarBg: '#188038',
      role: 'Candidate · 4 reviews',
      school: 'The Cathedral & John Connon School, Mumbai',
      timeAgo: '3 weeks ago',
      rating: 5,
      quote:
        'The Leitner cycle made 0620 Chemistry equations second nature before exam week. Scored A* across all 3 sciences without stress.',
    },
    {
      id: 3,
      name: 'Dr. Meenakshi Sundaram',
      initial: 'M',
      avatarBg: '#a142f4',
      role: 'Local Guide · 28 reviews',
      school: 'The International School Bangalore (TISB)',
      timeAgo: 'a month ago',
      rating: 5,
      quote:
        'The syllabus mastery ring gave us objective visibility into what she had actually retained without guesswork or tuition burnout.',
    },
    {
      id: 4,
      name: 'Rohan Singhania',
      initial: 'R',
      avatarBg: '#e37400',
      role: 'Candidate · 6 reviews',
      school: 'The Shri Ram School, Moulsari',
      timeAgo: 'a month ago',
      rating: 5,
      quote:
        'Flow Mode variant paper shuffling (P12, P22, P42) is the fastest way to master 0580 maths. Got 98% in Extended papers.',
    },
    {
      id: 5,
      name: 'Ishaan Gupta',
      initial: 'I',
      avatarBg: '#d93025',
      role: 'Candidate · 3 reviews',
      school: 'Heritage Xperiential, Gurugram',
      timeAgo: '2 months ago',
      rating: 5,
      quote:
        'The spaced repetition actually works. Concepts stick right through exams instead of vanishing in 3 days. Best revision tool.',
    },
    {
      id: 6,
      name: 'Siddharth Nair',
      initial: 'S',
      avatarBg: '#0284c7',
      role: 'Candidate · 8 reviews',
      school: 'Greenwood High, Bengaluru',
      timeAgo: '2 months ago',
      rating: 5,
      quote:
        'Checks working steps line-by-line so you never lose silly method marks in Physics 0625 calculations. Exactly like real examiners.',
    },
    {
      id: 7,
      name: 'Diya Sharma',
      initial: 'D',
      avatarBg: '#ec4899',
      role: 'Local Guide · 19 reviews',
      school: 'Symbiosis International, Pune',
      timeAgo: '3 months ago',
      rating: 5,
      quote:
        'Targeted custom tests on my weakest topics took me from a B in pre-boards to a solid A* in final Cambridge board examinations.',
    },
    {
      id: 8,
      name: 'Kabir Mukherjee',
      initial: 'K',
      avatarBg: '#059669',
      role: 'Candidate · 5 reviews',
      school: 'La Martiniere for Boys, Kolkata',
      timeAgo: '3 months ago',
      rating: 5,
      quote:
        'The Socratic tutor showed me how to structure 8-mark evaluate essays with balanced conclusions for Economics 0455.',
    },
  ]

  // Duplicate for seamless infinite loop
  const displayReviews = [...rawReviews, ...rawReviews]

  return (
    <section
      id="reviews"
      style={{
        padding: '88px 0 96px',
        backgroundColor: 'var(--bg-canvas)',
        borderTop: '1px solid var(--border-hairline)',
        overflow: 'hidden',
      }}
    >
      <div className="container" style={{ maxWidth: '1180px', margin: '0 auto 40px', padding: '0 24px' }}>
        {/* Genuine Google Business / Google Reviews Header */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '20px',
            paddingBottom: '28px',
            borderBottom: '1px solid #e0e0e0',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
              <GoogleGIcon size={24} />
              <h2
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '26px',
                  fontWeight: 600,
                  color: '#202124',
                  margin: 0,
                  letterSpacing: '-0.02em',
                }}
              >
                Google Reviews
              </h2>
            </div>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '14px',
                color: '#5f6368',
                margin: 0,
              }}
            >
              Verified ratings from Cambridge IGCSE & O-Level candidates and parents
            </p>
          </div>

          {/* Authentic Google Score Box */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              backgroundColor: '#ffffff',
              border: '1px solid #dadce0',
              borderRadius: '8px',
              padding: '10px 18px',
              boxShadow: '0 1px 2px rgba(60,64,67,0.1)',
            }}
          >
            <div style={{ textAlign: 'right' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '22px',
                    fontWeight: 700,
                    color: '#202124',
                    lineHeight: 1,
                  }}
                >
                  4.9
                </span>
                <span style={{ fontSize: '13px', color: '#70757a' }}>/ 5.0</span>
              </div>
              <div style={{ display: 'flex', gap: '2px', marginTop: '4px' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} fill="#fbbc04" color="#fbbc04" />
                ))}
              </div>
            </div>

            <div style={{ height: '32px', width: '1px', backgroundColor: '#dadce0' }} />

            <div style={{ fontFamily: 'var(--font-sans)', fontSize: '12.5px', color: '#70757a' }}>
              <div>Based on <strong>1,240+</strong></div>
              <div>Google verified reviews</div>
            </div>
          </div>
        </div>
      </div>

      {/* Infinite Horizontal Marquee Container */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          overflow: 'hidden',
          padding: '12px 0 20px',
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {/* Soft edge blur masks */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            width: '64px',
            background: 'linear-gradient(to right, var(--bg-canvas), transparent)',
            zIndex: 10,
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            width: '64px',
            background: 'linear-gradient(to left, var(--bg-canvas), transparent)',
            zIndex: 10,
            pointerEvents: 'none',
          }}
        />

        {/* Scrolling Track */}
        <div
          className="google-reviews-ticker"
          style={{
            display: 'flex',
            gap: '20px',
            width: 'max-content',
            animation: 'scrollGoogleReviews 48s linear infinite',
            animationPlayState: isPaused ? 'paused' : 'running',
            cursor: 'grab',
          }}
        >
          {displayReviews.map((rev, index) => (
            <div
              key={`${rev.id}-${index}`}
              style={{
                width: '360px',
                backgroundColor: '#ffffff',
                border: '1px solid #dadce0',
                borderRadius: '8px',
                padding: '20px 22px',
                boxShadow: '0 1px 2px 0 rgba(60,64,67,0.3), 0 1px 3px 1px rgba(60,64,67,0.15)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                flexShrink: 0,
                userSelect: 'none',
              }}
            >
              <div>
                {/* Reviewer Header: Avatar + Name + Google G icon */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    marginBottom: '12px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    {/* Google initial avatar */}
                    <div
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '50%',
                        backgroundColor: rev.avatarBg,
                        color: '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '16px',
                        fontWeight: 600,
                        flexShrink: 0,
                      }}
                    >
                      {rev.initial}
                    </div>

                    <div>
                      <div
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: '14.5px',
                          fontWeight: 600,
                          color: '#202124',
                          lineHeight: 1.25,
                        }}
                      >
                        {rev.name}
                      </div>
                      <div
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: '11.5px',
                          color: '#70757a',
                          marginTop: '2px',
                        }}
                      >
                        {rev.role}
                      </div>
                    </div>
                  </div>

                  {/* Multi-Color Google G Icon */}
                  <div title="Posted on Google" style={{ opacity: 0.95 }}>
                    <GoogleGIcon size={18} />
                  </div>
                </div>

                {/* Star rating + Timestamp */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                  <div style={{ display: 'flex', gap: '2px' }}>
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={15} fill="#fbbc04" color="#fbbc04" />
                    ))}
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '12px',
                      color: '#70757a',
                    }}
                  >
                    {rev.timeAgo}
                  </span>
                </div>

                {/* Review Quote Text */}
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '14px',
                    lineHeight: 1.55,
                    color: '#3c4043',
                    margin: 0,
                  }}
                >
                  {rev.quote}
                </p>
              </div>

              {/* Verified School context */}
              <div
                style={{
                  marginTop: '16px',
                  paddingTop: '12px',
                  borderTop: '1px solid #f1f3f4',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '11.5px',
                  color: '#70757a',
                }}
              >
                📍 {rev.school}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Global CSS for seamless infinite ticker */}
      <style jsx global>{`
        @keyframes scrollGoogleReviews {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .google-reviews-ticker:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
