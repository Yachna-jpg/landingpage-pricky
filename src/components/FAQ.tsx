'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import {
  ChevronDown,
  CheckCircle2,
  Sparkles,
  Check,
  ArrowRight,
} from 'lucide-react'

interface FaqItem {
  id: string
  category: 'limits' | 'pricing' | 'tutor' | 'exams' | 'billing'
  question: string
  answer: React.ReactNode
}

const FAQS: FaqItem[] = [
  {
    id: 'free-vs-pro-limits',
    category: 'limits',
    question: 'What exactly do I get on the Free Plan vs the Pro Pass?',
    answer: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <p style={{ margin: 0, fontSize: '13.5px', color: '#4b5563', lineHeight: 1.5 }}>
          We believe every student should experience our interactive exam engine. However, Free accounts have strict caps to prevent infrastructure overload:
        </p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '12px',
            paddingTop: '6px',
          }}
        >
          <div
            style={{
              padding: '16px',
              borderRadius: '8px',
              backgroundColor: '#f8fafc',
              border: '1px solid #e2e8f0',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontWeight: 700,
                color: '#0f172a',
                fontSize: '13px',
                marginBottom: '10px',
              }}
            >
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#94a3b8' }} />
              <span>Free Account Caps</span>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12px', color: '#64748b' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '6px' }}>
                <span style={{ fontWeight: 700, color: '#0f172a' }}>• 3 questions / day</span> per subject (resets at midnight IST).
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '6px' }}>
                <span style={{ fontWeight: 700, color: '#0f172a' }}>• Max 2 past papers</span> can be attempted per subject.
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '6px' }}>
                <span style={{ fontWeight: 700, color: '#0f172a' }}>• Max 1 custom paper</span> can be created per subject.
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '6px' }}>
                <span style={{ fontWeight: 700, color: '#0f172a' }}>• 5 PrickyAI hints</span> per day.
              </li>
            </ul>
          </div>

          <div
            style={{
              padding: '16px',
              borderRadius: '8px',
              backgroundColor: '#f0fdf4',
              border: '1px solid rgba(22, 163, 74, 0.3)',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontWeight: 700,
                color: '#16a34a',
                fontSize: '13px',
                marginBottom: '10px',
              }}
            >
              <Sparkles size={16} />
              <span>PrickyAI Pro Pass</span>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12px', color: '#0f172a' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '6px' }}>
                <CheckCircle2 size={14} color="#16a34a" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span><strong>Unlimited questions:</strong> Full access to 48,400+ Cambridge past questions across all 6 subjects.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '6px' }}>
                <CheckCircle2 size={14} color="#16a34a" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span><strong>Unlimited past papers:</strong> Attempt every year, variant &amp; season.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '6px' }}>
                <CheckCircle2 size={14} color="#16a34a" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span><strong>Unlimited custom papers:</strong> Generate targeted exam builder sets.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '6px' }}>
                <CheckCircle2 size={14} color="#16a34a" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span><strong>24/7 PrickyAI Bot:</strong> Live guidance watching your steps when stuck.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'pricing-inr',
    category: 'pricing',
    question: 'What is your pricing in Indian Rupees (INR)?',
    answer: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <p style={{ margin: 0, fontSize: '13.5px', color: '#4b5563', lineHeight: 1.5 }}>
          Our pricing is transparent and designed to be affordable for every Cambridge candidate:
        </p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '12px',
            margin: '6px 0',
          }}
        >
          <div
            style={{
              padding: '16px',
              borderRadius: '8px',
              border: '1px solid #e2e8f0',
              backgroundColor: '#ffffff',
              boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
            }}
          >
            <span
              style={{
                fontSize: '10px',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#64748b',
                display: 'block',
              }}
            >
              MONTHLY PLAN
            </span>
            <div style={{ fontSize: '22px', fontWeight: 800, color: '#0f172a', margin: '4px 0 2px' }}>
              ₹2,499{' '}
              <span style={{ fontSize: '12px', fontWeight: 400, color: '#64748b' }}>/ month (GST incl.)</span>
            </div>
            <p style={{ fontSize: '12px', color: '#64748b', margin: 0 }}>
              Billed monthly recurring. Cancel anytime with 1 click.
            </p>
          </div>

          <div
            style={{
              padding: '16px',
              borderRadius: '8px',
              border: '2px solid #00a8ff',
              backgroundColor: 'rgba(0, 168, 255, 0.04)',
              boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <span
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                fontSize: '10px',
                fontWeight: 800,
                padding: '2px 8px',
                borderRadius: '9999px',
                backgroundColor: '#00a8ff',
                color: '#ffffff',
              }}
            >
              SAVE 73%
            </span>
            <span
              style={{
                fontSize: '10px',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#00a8ff',
                display: 'block',
              }}
            >
              ANNUAL MASTER PASS
            </span>
            <div style={{ fontSize: '22px', fontWeight: 800, color: '#0f172a', margin: '4px 0 2px' }}>
              ₹7,999{' '}
              <span style={{ fontSize: '12px', fontWeight: 400, color: '#64748b' }}>/ year (GST incl.)</span>
            </div>
            <p style={{ fontSize: '12px', color: '#64748b', margin: 0 }}>
              Just ~₹666/month (only <strong>₹22/day</strong>). Best for full exam season.
            </p>
          </div>
        </div>
        <p style={{ fontSize: '11.5px', color: '#94a3b8', margin: 0 }}>
          Both plans include complete access across all 6 subjects, official mark schemes, and 24/7 AI marking.
        </p>
      </div>
    ),
  },
  {
    id: 'payment-gateway',
    category: 'billing',
    question: 'Which payment gateway do you use? Is UPI AutoPay supported?',
    answer: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13.5px', color: '#4b5563', lineHeight: 1.5 }}>
        <p style={{ margin: 0 }}>
          We use <strong>Dodo Payments (dodopay)</strong> as our international and domestic payment infrastructure. Dodo Payments is fully compliant with the <strong>Reserve Bank of India (RBI)</strong> regulations for recurring e-mandates.
        </p>
        <p style={{ margin: 0 }}>We support all major Indian payment methods:</p>
        <ul style={{ paddingLeft: '20px', margin: 0, fontSize: '12.5px', color: '#64748b', display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <li><strong>UPI AutoPay:</strong> Google Pay, PhonePe, Paytm, BHIM, and bank UPI apps.</li>
          <li><strong>Credit &amp; Debit Cards:</strong> Visa, MasterCard, RuPay, and American Express with OTP authentication.</li>
          <li><strong>NetBanking:</strong> All major Indian private and public sector banks.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'prickyai-bot',
    category: 'tutor',
    question: 'What is the PrickyAI bot and how does it help when I get stuck?',
    answer: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13.5px', color: '#4b5563', lineHeight: 1.5 }}>
        <p style={{ margin: 0 }}>
          PrickyAI is our proprietary Socratic AI tutor built specifically for Cambridge IGCSE &amp; O-Level mark schemes and examiner reports.
        </p>
        <p style={{ margin: 0 }}>Unlike generic chat models that just reveal the answer, PrickyAI:</p>
        <ul style={{ paddingLeft: '20px', margin: 0, fontSize: '12.5px', color: '#64748b', display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <li><strong>Watches your canvas and responses:</strong> It detects which step or formula you missed.</li>
          <li><strong>Provides Socratic hints:</strong> Guides you to solve the question yourself so you retain the concept in real exams.</li>
          <li><strong>Breaks down mark schemes:</strong> Explains exactly which keywords examiners look for to award full M/A/B marks.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'cambridge-coverage',
    category: 'exams',
    question: 'How many Cambridge past paper questions do you have?',
    answer: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <p style={{ margin: 0, fontSize: '13.5px', color: '#4b5563', lineHeight: 1.5 }}>
          Our database contains over <strong>48,400+ authentic Cambridge O-Level questions</strong> across <strong>1,355 official papers</strong> for all 6 subjects currently active on our platform:
        </p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '8px',
            fontSize: '12px',
            padding: '4px 0',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 12px', borderRadius: '6px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0' }}>
            <span>• Chemistry (0620)</span>
            <span style={{ fontWeight: 700, color: '#00a8ff' }}>15,400 questions (417 papers)</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 12px', borderRadius: '6px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0' }}>
            <span>• Physics (0625)</span>
            <span style={{ fontWeight: 700, color: '#00a8ff' }}>14,300 questions (423 papers)</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 12px', borderRadius: '6px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0' }}>
            <span>• Mathematics (0580)</span>
            <span style={{ fontWeight: 700, color: '#00a8ff' }}>12,200 questions (283 papers)</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 12px', borderRadius: '6px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0' }}>
            <span>• Economics (0455)</span>
            <span style={{ fontWeight: 700, color: '#00a8ff' }}>4,000 questions (139 papers)</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 12px', borderRadius: '6px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0' }}>
            <span>• ICT (0417)</span>
            <span style={{ fontWeight: 700, color: '#00a8ff' }}>2,500 questions (93 papers)</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 12px', borderRadius: '6px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0' }}>
            <span>• Biology (0610)</span>
            <span style={{ fontWeight: 700, color: '#00a8ff' }}>2,500 questions (syllabus active)</span>
          </div>
        </div>
        <p style={{ margin: 0, fontSize: '12px', color: '#64748b', lineHeight: 1.5 }}>
          Combined total: <strong>48,400+ authentic questions</strong>. Every single question comes directly from official Cambridge International examinations with diagrams, multi-part sub-questions, and examiner mark scheme rubrics.
        </p>
      </div>
    ),
  },
  {
    id: 'cancellation-policy',
    category: 'billing',
    question: 'Can I cancel my subscription anytime? What happens after I cancel?',
    answer: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13.5px', color: '#4b5563', lineHeight: 1.5 }}>
        <p style={{ margin: 0 }}>
          Yes, absolutely. You can cancel your subscription with a single click from <strong>Account Settings → Subscriptions</strong> or directly via the Dodo Payments Customer Portal link in your email invoice.
        </p>
        <p style={{ margin: 0 }}>When you cancel:</p>
        <ul style={{ paddingLeft: '20px', margin: 0, fontSize: '12.5px', color: '#64748b', display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <li>Your subscription will <strong>not renew</strong> at the next billing date.</li>
          <li>You retain full Pro access until your current paid month or year ends.</li>
          <li>Your solved history, saved notes, and mastery progress are permanently preserved.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'daily-limit-reset',
    category: 'limits',
    question: 'When does the daily 3-question limit reset for Free accounts?',
    answer: (
      <p style={{ margin: 0, fontSize: '13.5px', color: '#4b5563', lineHeight: 1.5 }}>
        The daily 3-question free quota resets every night at <strong>00:00 IST (Indian Standard Time, Asia/Kolkata)</strong>. You can see a live countdown timer in your sidebar and Account Settings showing exactly how many hours remain until reset.
      </p>
    ),
  },
  {
    id: 'flashcards-leitner',
    category: 'tutor',
    question: 'What is the Leitner spaced repetition flashcard system?',
    answer: (
      <p style={{ margin: 0, fontSize: '13.5px', color: '#4b5563', lineHeight: 1.5 }}>
        Flashcards in PrickyAI use the scientific <strong>Leitner 5-box algorithm</strong>. Cards you find difficult are shown more frequently, while mastered cards are scheduled across increasing intervals (1 day, 3 days, 7 days, 14 days, and 22+ days for permanent neocortical storage). This active recall method is proven to optimize long-term memory for tough definitions, chemical equations, and mathematical formulas before Cambridge exams.
      </p>
    ),
  },
]

const CATEGORIES = [
  { id: 'all', label: 'All Questions' },
  { id: 'limits', label: 'Free vs Pro Limits' },
  { id: 'pricing', label: 'Pricing in INR' },
  { id: 'billing', label: 'Dodo Payments & Billing' },
  { id: 'tutor', label: 'PrickyAI Socratic Bot' },
  { id: 'exams', label: 'Exam Questions & Subjects' },
]

export default function FAQ() {
  const [openIds, setOpenIds] = useState<string[]>(['free-vs-pro-limits', 'pricing-inr'])
  const [activeCategory, setActiveCategory] = useState<string>('all')

  const toggleFaq = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  const filteredFaqs =
    activeCategory === 'all'
      ? FAQS
      : FAQS.filter((f) => f.category === activeCategory)

  return (
    <section
      id="faq"
      style={{
        width: '100%',
        padding: '88px 0 96px',
        borderTop: '1px solid rgba(18, 24, 38, 0.08)',
        backgroundColor: '#ffffff',
        scrollMarginTop: '80px',
      }}
    >
      <div style={{ maxWidth: '940px', margin: '0 auto', padding: '0 24px' }}>
        {/* Hero Section with Celestial Book Line Art */}
        <div style={{ position: 'relative', textAlign: 'center', maxWidth: '680px', margin: '0 auto 36px', overflow: 'visible' }}>
          <div
            style={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              top: '-40px',
              width: '500px',
              maxWidth: '90vw',
              opacity: 0.06,
              pointerEvents: 'none',
              zIndex: 0,
            }}
          >
            <Image
              src="/lineart/4.png"
              alt="Academic Celestial Line Art"
              width={650}
              height={360}
              style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
            />
          </div>

          <div style={{ position: 'relative', zIndex: 1 }}>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(32px, 4.5vw, 46px)',
                fontWeight: 400,
                letterSpacing: '-0.025em',
                color: '#0f172a',
                lineHeight: 1.05,
                margin: '0 0 12px',
              }}
            >
              Everything you need to know.
            </h2>

            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '14.5px',
                color: '#64748b',
                lineHeight: 1.45,
                maxWidth: '560px',
                margin: '0 auto',
              }}
            >
              Pricing, free limits, Cambridge exam practice, and how the 24/7 Socratic Tutor works — answered.
            </p>
          </div>
        </div>

        {/* Free Plan vs Pro Pass Snapshot Comparison Card (from scratch-repo app/faq/page.tsx) */}
        <div
          style={{
            position: 'relative',
            marginTop: '32px',
            marginBottom: '36px',
            padding: '24px 28px',
            borderRadius: '0px',
            backgroundColor: '#FBFBFF',
            border: '1px solid rgba(18, 24, 38, 0.08)',
            boxShadow: '0 1px 2px rgba(0,0,0,0.03)',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '12px',
              borderBottom: '1px solid rgba(18, 24, 38, 0.08)',
              paddingBottom: '16px',
              marginBottom: '16px',
            }}
          >
            <div>
              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '20px',
                  fontWeight: 400,
                  letterSpacing: '-0.02em',
                  color: '#0f172a',
                  margin: 0,
                }}
              >
                Free Plan vs Pro Pass at a glance.
              </h3>
            </div>
            <a
              href="#pricing"
              style={{
                fontSize: '12px',
                fontWeight: 700,
                color: '#00a8ff',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                textDecoration: 'none',
              }}
            >
              <span>Explore full pricing table</span>
              <ArrowRight size={14} />
            </a>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', minWidth: '540px', borderCollapse: 'collapse', textAlign: 'left', fontSize: '12.5px' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(18, 24, 38, 0.08)', textTransform: 'uppercase', fontSize: '11px', color: '#64748b', fontWeight: 700 }}>
                  <th style={{ padding: '8px 0' }}>Feature / Limit</th>
                  <th style={{ padding: '8px 16px', textAlign: 'center' }}>Free Account</th>
                  <th style={{ padding: '8px 16px', textAlign: 'center', color: '#00a8ff' }}>Pro Pass (₹2,499/mo or ₹7,999/yr)</th>
                </tr>
              </thead>
              <tbody style={{ fontFamily: 'var(--font-sans)', color: '#0f172a' }}>
                <tr style={{ borderBottom: '1px solid rgba(18, 24, 38, 0.06)' }}>
                  <td style={{ padding: '12px 0', fontWeight: 500 }}>Daily Question Practice</td>
                  <td style={{ padding: '12px 16px', textAlign: 'center', color: '#64748b' }}>3 questions / day</td>
                  <td style={{ padding: '12px 16px', textAlign: 'center', fontWeight: 600 }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                      <Check size={14} color="#00a8ff" />
                      <span>Unlimited (48,400+ Archive)</span>
                    </span>
                  </td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(18, 24, 38, 0.06)' }}>
                  <td style={{ padding: '12px 0', fontWeight: 500 }}>Past Paper Attempts per Subject</td>
                  <td style={{ padding: '12px 16px', textAlign: 'center', color: '#64748b' }}>Only 2 papers</td>
                  <td style={{ padding: '12px 16px', textAlign: 'center', fontWeight: 600 }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                      <Check size={14} color="#00a8ff" />
                      <span>Unlimited (All Years &amp; Variants)</span>
                    </span>
                  </td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(18, 24, 38, 0.06)' }}>
                  <td style={{ padding: '12px 0', fontWeight: 500 }}>Custom Paper Builder Wizard</td>
                  <td style={{ padding: '12px 16px', textAlign: 'center', color: '#64748b' }}>Only 1 created paper</td>
                  <td style={{ padding: '12px 16px', textAlign: 'center', fontWeight: 600 }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                      <Check size={14} color="#00a8ff" />
                      <span>Unlimited Custom Tests</span>
                    </span>
                  </td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(18, 24, 38, 0.06)' }}>
                  <td style={{ padding: '12px 0', fontWeight: 500 }}>PrickyAI Socratic Tutor Bot</td>
                  <td style={{ padding: '12px 16px', textAlign: 'center', color: '#64748b' }}>5 hints / day</td>
                  <td style={{ padding: '12px 16px', textAlign: 'center', fontWeight: 600 }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                      <Check size={14} color="#00a8ff" />
                      <span>24/7 Live Observation &amp; Advice</span>
                    </span>
                  </td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(18, 24, 38, 0.06)' }}>
                  <td style={{ padding: '12px 0', fontWeight: 500 }}>Spaced Repetition Flashcards</td>
                  <td style={{ padding: '12px 16px', textAlign: 'center', color: '#64748b' }}>Basic preview</td>
                  <td style={{ padding: '12px 16px', textAlign: 'center', fontWeight: 600 }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                      <Check size={14} color="#00a8ff" />
                      <span>Full Leitner 5-Box Decks</span>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: '12px 0', fontWeight: 500 }}>Official Cambridge Mark Schemes</td>
                  <td style={{ padding: '12px 16px', textAlign: 'center', color: '#64748b' }}>Partial</td>
                  <td style={{ padding: '12px 16px', textAlign: 'center', fontWeight: 600 }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                      <Check size={14} color="#00a8ff" />
                      <span>Instant Step-by-Step Breakdown</span>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Category Pills / FAQ Filters */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            marginBottom: '32px',
          }}
        >
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  height: '34px',
                  padding: '0 14px',
                  borderRadius: '0px',
                  fontSize: '12px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  border: isActive ? '1px solid #0f172a' : '1px solid #e2e8f0',
                  backgroundColor: isActive ? '#0f172a' : '#f8fafc',
                  color: isActive ? '#ffffff' : '#64748b',
                  transition: 'all 0.15s ease',
                }}
              >
                {cat.label}
              </button>
            )
          })}
        </div>

        {/* FAQs Accordion - Square Edges matching site theme */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {filteredFaqs.map((faq) => {
            const isOpen = openIds.includes(faq.id)

            return (
              <div
                key={faq.id}
                style={{
                  borderRadius: '0px',
                  border: '1px solid rgba(18, 24, 38, 0.08)',
                  backgroundColor: '#ffffff',
                  overflow: 'hidden',
                  boxShadow: '0 1px 2px rgba(0,0,0,0.02)',
                  transition: 'all 0.2s ease',
                }}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  style={{
                    width: '100%',
                    padding: '18px 20px',
                    textAlign: 'left',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '16px',
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 600,
                    fontSize: '14.5px',
                    color: '#0f172a',
                    backgroundColor: isOpen ? '#fcfcfd' : '#ffffff',
                    cursor: 'pointer',
                    transition: 'background-color 0.15s ease',
                  }}
                  onMouseEnter={(e) => {
                    if (!isOpen) e.currentTarget.style.backgroundColor = '#fafafa'
                  }}
                  onMouseLeave={(e) => {
                    if (!isOpen) e.currentTarget.style.backgroundColor = '#ffffff'
                  }}
                >
                  <span style={{ lineHeight: 1.35 }}>{faq.question}</span>
                  <ChevronDown
                    size={16}
                    color="#64748b"
                    style={{
                      flexShrink: 0,
                      transform: isOpen ? 'rotate(180deg)' : 'none',
                      transition: 'transform 0.2s ease',
                    }}
                  />
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: '16px 20px 20px',
                      fontSize: '13.5px',
                      color: '#475569',
                      lineHeight: 1.6,
                      borderTop: '1px solid rgba(18, 24, 38, 0.06)',
                      backgroundColor: '#FAFAFC',
                      fontFamily: 'var(--font-sans)',
                    }}
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
