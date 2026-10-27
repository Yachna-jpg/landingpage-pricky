'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import {
  FileText,
  TrendingUp,
  Building2,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Calendar,
  Wand2,
  Brain,
  Layers,
  Printer,
  Target,
  Check,
  X,
} from 'lucide-react'

interface PricingProps {
  onOpenLeadModal: (planName: string) => void
}

export default function Pricing({ onOpenLeadModal }: PricingProps) {
  const [activePlanType, setActivePlanType] = useState<'monthly' | 'yearly'>('yearly')

  const plans = [
    {
      id: 'free',
      name: 'Starter',
      tagline: 'For students getting started with core past paper practice.',
      cta: 'Current Plan',
      buttonVariant: 'status' as const,
      wash: 'linear-gradient(180deg, #e8efff 0%, rgba(232, 239, 255, 0.4) 60%, transparent 100%)',
      iconColor: '#3b82f6',
      labelColor: '#78716c',
      Icon: FileText,
      price: '₹0',
      priceNote: 'forever',
      features: [
        '3 questions per day per subject',
        'Up to 2 past papers per subject',
        '1 custom wizard paper per subject',
        '5 PrickyAI hints per day',
        'Instant mark scheme check',
      ],
    },
    {
      id: 'monthly',
      name: 'Pro Monthly',
      tagline: 'Unlimited practice leading up to Cambridge mock exams.',
      cta: 'Unlock Pro Monthly (₹2,499)',
      badge: 'Popular',
      buttonVariant: 'outline' as const,
      inherits: 'Starter',
      wash: 'linear-gradient(180deg, #f4f8d6 0%, rgba(244, 248, 214, 0.4) 60%, transparent 100%)',
      iconColor: '#65a30d',
      labelColor: '#65a30d',
      Icon: TrendingUp,
      price: '₹2,499',
      priceNote: 'per month',
      gstBreakdown: 'Base: ₹2,117.80 + 18% GST ₹381.20 = ₹2,499 total',
      footnote:
        'Base: ₹2,117.80 + 18% GST (₹381.20) = ₹2,499 total. Inclusive of all taxes (GST incl.). Zero extra fees at checkout.',
      features: [
        '48,400+ authentic questions across all 6 subjects',
        '1,355 complete official Cambridge past papers',
        'Unlimited custom paper creator & instant marking',
        '24/7 PrickyAI Socratic Tutor Bot on Canvas',
        'Full 5-box Leitner spaced repetition engine',
      ],
    },
    {
      id: 'yearly',
      name: 'Annual Pass',
      tagline: 'Complete exam season preparation from day one.',
      cta: 'Get Annual Pass (₹7,999)',
      badge: 'Save 73%',
      buttonVariant: 'outline' as const,
      inherits: 'Pro Monthly',
      wash: 'linear-gradient(180deg, #f6edfe 0%, rgba(246, 237, 254, 0.4) 60%, transparent 100%)',
      iconColor: '#a855f7',
      labelColor: '#6366f1',
      Icon: Building2,
      price: '₹7,999',
      originalPrice: '₹29,988',
      priceNote: 'per year (~₹666/mo)',
      savingsBadge: 'SAVE 73% (₹21,989 OFF)',
      gstBreakdown: 'Base: ₹6,778.81 + 18% GST ₹1,220.19 = ₹7,999 total',
      footnote:
        'Base: ₹6,778.81 + 18% GST (₹1,220.19) = ₹7,999 total. Inclusive of all taxes (GST incl.). Zero extra fees at checkout.',
      features: [
        'Unlimited access to all 48,400+ questions across 6 subjects',
        'All 1,355 past papers with all regional variants (P12, P22, P42)',
        'Just ~₹666/mo (less than 3 hours with a private tutor) · Complete exam season prep',
        'Chemistry, Physics, Maths, Economics, ICT, Biology',
        'Priority AI explanations & printable mock papers with QR keys',
      ],
    },
  ]

  const comparisonRows = [
    {
      icon: Calendar,
      feature: 'Daily Question Practice',
      free: '3 questions / day',
      monthly: 'Unlimited (48,400+ Archive)',
      annual: 'Unlimited (48,400+ Archive)',
    },
    {
      icon: FileText,
      feature: 'Past Paper Attempts per Subject',
      free: 'Max 2 papers',
      monthly: 'All series & variants',
      annual: 'All series & variants',
    },
    {
      icon: Wand2,
      feature: 'Custom Paper Builder Wizard',
      free: '1 topical test',
      monthly: 'Unlimited custom sets',
      annual: 'Unlimited custom sets',
    },
    {
      icon: Brain,
      feature: '24/7 AI Socratic Examiner',
      free: '5 hints / day',
      monthly: 'Standard speed',
      annual: 'Instant Priority Response',
      annualBadge: '< 1s latency',
    },
    {
      icon: ShieldCheck,
      feature: 'Official Cambridge Mark Schemes',
      free: 'Partial summaries',
      monthly: 'Full examiner rubrics',
      annual: 'Full examiner rubrics',
    },
    {
      icon: Layers,
      feature: 'Leitner Spaced Retrieval Engine',
      free: 'Box 1 preview only',
      monthly: 'All 5 consolidation boxes',
      annual: 'All 5 consolidation boxes',
    },
    {
      icon: Printer,
      feature: 'Printable Mock Papers with QR Keys',
      free: false,
      monthly: 'Included',
      annual: 'Included + Examiner Notes',
    },
    {
      icon: Target,
      feature: 'Board Exam Revision Guarantee',
      free: false,
      monthly: false,
      annual: 'Full Session Coverage',
    },
  ]

  return (
    <section
      id="pricing"
      style={{
        padding: '88px 0 100px',
        backgroundColor: '#FDFDFD',
        color: '#0f1115',
        position: 'relative',
        scrollMarginTop: '80px',
      }}
    >
      <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 24px' }}>
        {/* Header section matching exact reference */}
        <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 48px', padding: '0 16px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '10px',
            }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#3b82f6' }} />
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#84cc16' }} />
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#a855f7' }} />
            </span>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '11px',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.16em',
                color: '#a1a1aa',
              }}
            >
              PRICING · ALL TAXES INCLUDED
            </span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(32px, 4.2vw, 42px)',
              fontWeight: 400,
              lineHeight: 1.05,
              letterSpacing: '-0.025em',
              color: '#18181b',
              margin: '0 0 10px',
            }}
          >
            Plans that grow with you
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '15px',
              color: '#71717a',
              lineHeight: 1.45,
              margin: 0,
            }}
          >
            Start free, upgrade when you need unlimited past papers &amp; 24/7 AI marking.
          </p>
        </div>

        {/* 3 Columns Frame with Square Edges, Dividing Borders & Subtle Wash */}
        <div
          style={{
            width: '100%',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            borderRadius: '0px',
            border: '1px solid #e4e4e7',
            backgroundColor: '#ffffff',
            boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
            overflow: 'hidden',
          }}
        >
          {plans.map((plan, index) => {
            const Icon = plan.Icon

            return (
              <div
                key={plan.id}
                style={{
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '28px 24px 32px',
                  borderTop: index > 0 ? '1px solid #e4e4e7' : 'none',
                  borderLeft: index > 0 ? '1px solid #e4e4e7' : 'none',
                  backgroundColor: '#ffffff',
                }}
                className={index > 0 ? 'pricing-card-col' : ''}
              >
                {/* Subtle top gradient tint wash */}
                <span
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '160px',
                    background: plan.wash,
                    pointerEvents: 'none',
                  }}
                />

                <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', height: '100%', zIndex: 1 }}>
                  {/* Top icon and optional badge */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      minHeight: '28px',
                      gap: '8px',
                    }}
                  >
                    <Icon size={20} color={plan.iconColor} strokeWidth={1.8} />
                    {plan.badge ? (
                      <span
                        style={{
                          borderRadius: '9999px',
                          backgroundColor: '#edf3cf',
                          color: '#4d5d12',
                          padding: '2px 9px',
                          fontSize: '11px',
                          fontWeight: 600,
                          boxShadow: '0 1px 2px rgba(0,0,0,0.03)',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {plan.badge}
                      </span>
                    ) : (
                      <span style={{ height: '20px' }} />
                    )}
                  </div>

                  {/* Plan Title (Serif) */}
                  <h3
                    style={{
                      marginTop: '16px',
                      fontFamily: 'var(--font-serif)',
                      fontSize: '24px',
                      fontWeight: 400,
                      letterSpacing: '-0.02em',
                      color: '#18181b',
                      lineHeight: 1.1,
                      margin: '16px 0 4px',
                    }}
                  >
                    {plan.name}
                  </h3>

                  {/* Tagline / Subtitle */}
                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '12.5px',
                      lineHeight: 1.45,
                      color: '#71717a',
                      minHeight: '38px',
                      margin: '0 0 16px',
                    }}
                  >
                    {plan.tagline}
                  </p>

                  {/* Price Row */}
                  <div
                    style={{
                      marginTop: '8px',
                      marginBottom: '16px',
                      paddingBottom: '14px',
                      borderBottom: '1px solid #f4f4f5',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '6px',
                    }}
                  >
                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', justifyContent: 'space-between', gap: '6px' }}>
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                        <span
                          style={{
                            fontFamily: 'var(--font-sans)',
                            fontSize: '24px',
                            fontWeight: 600,
                            letterSpacing: '-0.02em',
                            color: '#18181b',
                          }}
                        >
                          {plan.price}
                        </span>
                        {plan.originalPrice && (
                          <span
                            style={{
                              fontFamily: 'var(--font-sans)',
                              fontSize: '13px',
                              fontWeight: 500,
                              color: '#a1a1aa',
                              textDecoration: 'line-through',
                            }}
                          >
                            {plan.originalPrice}
                          </span>
                        )}
                      </div>
                      {plan.priceNote && (
                        <span
                          style={{
                            fontFamily: 'var(--font-sans)',
                            fontSize: '12px',
                            color: '#a1a1aa',
                          }}
                        >
                          {plan.priceNote}
                        </span>
                      )}
                    </div>

                    {plan.savingsBadge && (
                      <div style={{ paddingTop: '2px' }}>
                        <span
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px',
                            borderRadius: '4px',
                            backgroundColor: '#E7F7ED',
                            color: '#0C831F',
                            border: '1px solid rgba(12, 131, 31, 0.3)',
                            padding: '2px 8px',
                            fontSize: '10.5px',
                            fontWeight: 800,
                            letterSpacing: '-0.01em',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          {plan.savingsBadge}
                        </span>
                      </div>
                    )}

                    {plan.gstBreakdown && (
                      <div style={{ paddingTop: '4px' }}>
                        <span
                          style={{
                            display: 'block',
                            fontFamily: 'var(--font-mono)',
                            fontSize: '10.5px',
                            color: '#71717a',
                            backgroundColor: '#fafafa',
                            borderRadius: '4px',
                            padding: '4px 8px',
                            border: '1px solid #f4f4f5',
                            lineHeight: 1.3,
                            wordBreak: 'break-word',
                          }}
                        >
                          {plan.gstBreakdown}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Slim Button / Status pill */}
                  {plan.buttonVariant === 'status' ? (
                    <div
                      style={{
                        width: '100%',
                        height: '40px',
                        borderRadius: '0px',
                        fontSize: '13px',
                        fontWeight: 500,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px',
                        userSelect: 'none',
                        backgroundColor: 'rgba(244, 244, 245, 0.8)',
                        color: '#71717a',
                        border: '1px solid rgba(228, 228, 231, 0.6)',
                        textAlign: 'center',
                        padding: '0 8px',
                      }}
                    >
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#a1a1aa' }} />
                      <span>{plan.cta}</span>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => onOpenLeadModal(plan.name)}
                      style={{
                        width: '100%',
                        height: '40px',
                        borderRadius: '0px',
                        fontSize: '13px',
                        fontWeight: 500,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px',
                        cursor: 'pointer',
                        padding: '0 12px',
                        border: '1px solid #e4e4e7',
                        backgroundColor: '#ffffff',
                        color: '#18181b',
                        transition: 'all 0.15s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#fafafa'
                        e.currentTarget.style.borderColor = '#d4d4d8'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#ffffff'
                        e.currentTarget.style.borderColor = '#e4e4e7'
                      }}
                    >
                      <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{plan.cta}</span>
                      <ArrowRight size={14} style={{ flexShrink: 0 }} />
                    </button>
                  )}

                  {/* Section Feature Header */}
                  <p
                    style={{
                      marginTop: '22px',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '10.5px',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: plan.labelColor,
                      margin: '22px 0 12px',
                    }}
                  >
                    {plan.inherits ? `EVERYTHING IN ${plan.inherits.toUpperCase()}, PLUS:` : 'CORE FUNCTIONALITY'}
                  </p>

                  {/* Feature checklist */}
                  <ul
                    style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '10px',
                      flex: 1,
                    }}
                  >
                    {plan.features.map((feature) => (
                      <li key={feature} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                        <svg
                          viewBox="0 0 16 16"
                          fill="none"
                          aria-hidden="true"
                          style={{
                            width: '15px',
                            height: '15px',
                            flexShrink: 0,
                            marginTop: '2px',
                            color: '#18181b',
                          }}
                        >
                          <path
                            d="m2.5 8.5 3.5 3.5L13.5 4"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span
                          style={{
                            fontFamily: 'var(--font-sans)',
                            fontSize: '12.5px',
                            lineHeight: 1.45,
                            color: '#3f3f46',
                          }}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Optional bottom footnote */}
                  {plan.footnote ? (
                    <p
                      style={{
                        marginTop: 'auto',
                        paddingTop: '20px',
                        textAlign: 'center',
                        fontSize: '10.5px',
                        lineHeight: 1.45,
                        color: '#a1a1aa',
                        fontFamily: 'var(--font-sans)',
                        margin: 'auto 0 0',
                      }}
                    >
                      {plan.footnote}
                    </p>
                  ) : (
                    <div style={{ marginTop: 'auto', paddingTop: '20px', minHeight: '30px' }} />
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* 2-Line Trust Bar Targeting the Parent's Real Fear */}
        <div
          style={{
            marginTop: '16px',
            padding: '14px 18px',
            backgroundColor: '#F8F7F4',
            border: '1px solid rgba(18, 24, 38, 0.08)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
            fontSize: '12px',
            borderRadius: '0px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <ShieldCheck size={16} color="#065F46" style={{ flexShrink: 0 }} />
            <span style={{ fontWeight: 600, color: '#0A192F', fontFamily: 'var(--font-sans)' }}>
              Aligned with Cambridge Assessment International Education (CAIE) syllabus.
            </span>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              color: '#4B5565',
            }}
          >
            <span>Covers:</span>
            <span style={{ fontWeight: 700, color: '#0A192F' }}>
              Physics · Chemistry · Biology · Mathematics · Economics · Computer Science
            </span>
          </div>
        </div>

        {/* Why Cambridge candidates practice with Pro (Hairline Columns) */}
        <div style={{ marginTop: '56px', paddingTop: '40px', borderTop: '1px solid rgba(18, 24, 38, 0.08)' }}>
          <div style={{ maxWidth: '640px', marginBottom: '24px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '11px',
                fontFamily: 'var(--font-mono)',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#1D4ED8',
                marginBottom: '8px',
              }}
            >
              <Sparkles size={14} color="#1D4ED8" />
              <span>Built For Serious Cambridge Candidates</span>
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(28px, 3.5vw, 36px)',
                fontWeight: 400,
                letterSpacing: '-0.02em',
                color: '#0A192F',
                lineHeight: 1.08,
                margin: '0 0 8px',
              }}
            >
              Why Cambridge candidates practice with Pro.
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '13.5px',
                color: '#4B5565',
                lineHeight: 1.5,
                margin: 0,
              }}
            >
              Authentic Cambridge preparation requires real past papers, examiner mark schemes, and guidance when you hit
              multi-mark obstacles.
            </p>
          </div>

          {/* Hairline 3 Columns */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              backgroundColor: '#ffffff',
              border: '1px solid rgba(18, 24, 38, 0.08)',
              boxShadow: '0 1px 2px rgba(0,0,0,0.03)',
            }}
          >
            <div style={{ padding: '24px', borderRight: '1px solid rgba(18, 24, 38, 0.08)' }}>
              <div
                style={{
                  fontSize: '30px',
                  fontWeight: 600,
                  fontFamily: 'var(--font-sans)',
                  color: '#0f172a',
                  marginBottom: '8px',
                }}
              >
                48,400+
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '17px',
                  fontWeight: 600,
                  color: '#0A192F',
                  marginBottom: '8px',
                }}
              >
                Authentic Past Paper Archive
              </h3>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '12.5px', color: '#4B5565', lineHeight: 1.5, margin: 0 }}>
                Free accounts freeze after 3 questions per day. Pro gives you completely unlimited practice across 48,400+
                authentic Cambridge questions across 1,355 papers with zero momentum interruptions.
              </p>
            </div>

            <div style={{ padding: '24px', borderRight: '1px solid rgba(18, 24, 38, 0.08)' }}>
              <div
                style={{
                  fontSize: '30px',
                  fontWeight: 600,
                  fontFamily: 'var(--font-sans)',
                  color: '#0f172a',
                  marginBottom: '8px',
                }}
              >
                24/7 AI
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '17px',
                  fontWeight: 600,
                  color: '#0A192F',
                  marginBottom: '8px',
                }}
              >
                Examiner-Calibrated Canvas Tutor
              </h3>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '12.5px', color: '#4B5565', lineHeight: 1.5, margin: 0 }}>
                Stuck on a 6-mark chemistry mechanism or maths proof? PrickyAI observes your steps on the canvas in real-time,
                training you directly on Method (M), Accuracy (A), and Fact (B) examiner rubrics.
              </p>
            </div>

            <div style={{ padding: '24px' }}>
              <div
                style={{
                  fontSize: '30px',
                  fontWeight: 600,
                  fontFamily: 'var(--font-sans)',
                  color: '#0f172a',
                  marginBottom: '8px',
                }}
              >
                ₹7,999<span style={{ fontSize: '14px', fontWeight: 400, color: '#64748b' }}>/year</span>
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '17px',
                  fontWeight: 600,
                  color: '#0A192F',
                  marginBottom: '8px',
                }}
              >
                Less than 3 Hours with a Private Tutor
              </h3>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '12.5px', color: '#4B5565', lineHeight: 1.5, margin: 0 }}>
                Complete Cambridge preparation for less than the cost of 3 private tutor sessions. Covers all 6 subjects
                with 48,400+ authentic questions and instant examiner-level mark scheme analysis across the full exam season.
              </p>
            </div>
          </div>
        </div>

        {/* Plan Feature Comparison Table */}
        <div style={{ marginTop: '56px', paddingTop: '40px', borderTop: '1px solid rgba(18, 24, 38, 0.08)' }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '28px',
                fontWeight: 400,
                color: '#0A192F',
                margin: '0 0 8px',
              }}
            >
              Compare plan features
            </h3>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '13.5px', color: '#64748b', margin: 0 }}>
              Clear, transparent limits designed for authentic Cambridge IGCSE and O-Level revision.
            </p>
          </div>

          <div
            style={{
              overflowX: 'auto',
              border: '1px solid rgba(18, 24, 38, 0.08)',
              backgroundColor: '#ffffff',
            }}
          >
            <table style={{ width: '100%', minWidth: '600px', borderCollapse: 'collapse', textAlign: 'left', fontSize: '13px' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(18, 24, 38, 0.08)', backgroundColor: '#fafafa' }}>
                  <th style={{ padding: '14px 20px', fontWeight: 600, color: '#4B5565' }}>Feature</th>
                  <th style={{ padding: '14px 20px', fontWeight: 600, color: '#4B5565', textAlign: 'center' }}>Free Starter</th>
                  <th style={{ padding: '14px 20px', fontWeight: 600, color: '#1D4ED8', textAlign: 'center' }}>Pro Monthly</th>
                  <th style={{ padding: '14px 20px', fontWeight: 600, color: '#7C3AED', textAlign: 'center' }}>Annual Pass</th>
                </tr>
              </thead>
              <tbody style={{ fontFamily: 'var(--font-sans)' }}>
                {comparisonRows.map((row, idx) => {
                  const RowIcon = row.icon
                  return (
                    <tr
                      key={row.feature}
                      style={{
                        borderBottom: idx < comparisonRows.length - 1 ? '1px solid rgba(18, 24, 38, 0.06)' : 'none',
                      }}
                    >
                      <td style={{ padding: '14px 20px', color: '#18181b', fontWeight: 500 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <RowIcon size={16} color="#64748b" style={{ flexShrink: 0 }} />
                          <span>{row.feature}</span>
                        </div>
                      </td>
                      <td style={{ padding: '14px 20px', textAlign: 'center', color: '#64748b' }}>
                        {typeof row.free === 'boolean' ? (
                          row.free ? (
                            <Check size={16} color="#059669" style={{ margin: '0 auto' }} />
                          ) : (
                            <X size={16} color="#94a3b8" style={{ margin: '0 auto' }} />
                          )
                        ) : (
                          row.free
                        )}
                      </td>
                      <td style={{ padding: '14px 20px', textAlign: 'center', color: '#18181b', fontWeight: 500 }}>
                        {typeof row.monthly === 'boolean' ? (
                          row.monthly ? (
                            <Check size={16} color="#059669" style={{ margin: '0 auto' }} />
                          ) : (
                            <X size={16} color="#94a3b8" style={{ margin: '0 auto' }} />
                          )
                        ) : (
                          row.monthly
                        )}
                      </td>
                      <td style={{ padding: '14px 20px', textAlign: 'center', color: '#18181b', fontWeight: 600 }}>
                        {typeof row.annual === 'boolean' ? (
                          row.annual ? (
                            <Check size={16} color="#059669" style={{ margin: '0 auto' }} />
                          ) : (
                            <X size={16} color="#94a3b8" style={{ margin: '0 auto' }} />
                          )
                        ) : (
                          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                            <span>{row.annual}</span>
                            {row.annualBadge && (
                              <span
                                style={{
                                  fontSize: '10px',
                                  padding: '2px 6px',
                                  backgroundColor: '#EDE9FE',
                                  color: '#6D28D9',
                                  borderRadius: '4px',
                                  fontWeight: 700,
                                }}
                              >
                                {row.annualBadge}
                              </span>
                            )}
                          </div>
                        )}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
