'use client'

import React, { useState } from 'react'
import { AlertCircle, CheckCircle2, ShieldAlert } from 'lucide-react'

export default function LeitnerSection() {
  const [activeBox, setActiveBox] = useState<number>(5)

  const stages = [
    {
      box: 1,
      timeline: 'Day 1',
      title: 'Initial Diagnostic',
      retention: '~80%',
      desc: 'First unassisted past paper attempt. All incorrect steps or missed marks are cataloged by syllabus sub-topic.',
      action: 'Daily Diagnostic Drill',
    },
    {
      box: 2,
      timeline: 'Day 3',
      title: '48-Hour Recall',
      retention: '~85%',
      desc: 'Retrieval triggered right before the initial steep Ebbinghaus decay curve. Confirms conceptual understanding.',
      action: 'Targeted Mark Scheme Re-test',
    },
    {
      box: 3,
      timeline: 'Day 7',
      title: '7-Day Variant Drill',
      retention: '~88%',
      desc: 'Candidate solves the same syllabus concept across an alternate Cambridge paper variant (e.g. V1 vs V2).',
      action: 'Cross-Variant Mastery',
    },
    {
      box: 4,
      timeline: 'Day 14',
      title: '14-Day Exam Simulation',
      retention: '~92%',
      desc: 'Timed, unassisted test under strict Cambridge exam mark-scheme penalties with no hints.',
      action: 'Timed Exam Conditions',
    },
    {
      box: 5,
      timeline: 'Day 22',
      title: 'Neocortical Lock-In',
      retention: '>95%',
      desc: '22-day threshold achieved. Concept transitions into permanent long-term memory through board examination day.',
      action: 'Permanent Exam Retention',
    },
  ]

  const [hoveredPoint, setHoveredPoint] = useState<{
    day: number
    label: string
    leitner: number
    standard: number
    stage: string
    x: number
    yLeitner: number
    yStandard: number
  }>({
    day: 22,
    label: 'Day 22 (Threshold)',
    leitner: 96,
    standard: 14,
    stage: 'Neocortical Lock-In achieved',
    x: 780,
    yLeitner: 22,
    yStandard: 195,
  })

  const [activeCurveMode, setActiveCurveMode] = useState<'both' | 'leitner' | 'standard'>('both')

  // Benchmark day milestones
  const milestones = [
    { day: 1, label: 'Day 1', leitner: 80, standard: 75, box: 1, stage: 'Initial Diagnostic', x: 50, yLeitner: 30, yStandard: 45 },
    { day: 3, label: 'Day 3', leitner: 85, standard: 48, box: 2, stage: '48-Hour Recall Re-test', x: 180, yLeitner: 34, yStandard: 120 },
    { day: 7, label: 'Day 7', leitner: 88, standard: 31, box: 3, stage: 'Variant Mastery Drill', x: 350, yLeitner: 32, yStandard: 155 },
    { day: 14, label: 'Day 14', leitner: 92, standard: 20, box: 4, stage: 'Exam Simulation Conditions', x: 540, yLeitner: 26, yStandard: 180 },
    { day: 22, label: 'Day 22', leitner: 96, standard: 14, box: 5, stage: 'Neocortical Lock-In achieved', x: 780, yLeitner: 22, yStandard: 195 },
    { day: 45, label: 'Exam Day', leitner: 95, standard: 11, box: 5, stage: 'Permanent Board Exam Recall', x: 920, yLeitner: 25, yStandard: 198 },
  ]

  const handleGraphMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    const svg = e.currentTarget
    const rect = svg.getBoundingClientRect()
    const mouseX = ((e.clientX - rect.left) / rect.width) * 940

    // Find closest milestone or interpolate
    let closest = milestones[0]
    let minDiff = 9999
    milestones.forEach((m) => {
      const diff = Math.abs(m.x - mouseX)
      if (diff < minDiff) {
        minDiff = diff
        closest = m
      }
    })

    setHoveredPoint({
      day: closest.day,
      label: closest.label,
      leitner: closest.leitner,
      standard: closest.standard,
      stage: closest.stage,
      x: closest.x,
      yLeitner: closest.yLeitner,
      yStandard: closest.yStandard,
    })
    setActiveBox(closest.box)
  }

  const selectMilestone = (m: typeof milestones[0]) => {
    setHoveredPoint({
      day: m.day,
      label: m.label,
      leitner: m.leitner,
      standard: m.standard,
      stage: m.stage,
      x: m.x,
      yLeitner: m.yLeitner,
      yStandard: m.yStandard,
    })
    setActiveBox(m.box)
  }

  return (
    <section id="leitner" className="section-spacing" style={{ backgroundColor: 'var(--bg-canvas)' }}>
      <div className="container" style={{ maxWidth: '1180px' }}>
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span className="eyebrow-tag" style={{ marginBottom: '14px' }}>
            Cognitive Science Architecture
          </span>
          <h2 className="editorial-title">
            Interval Spacing Architecture · <span style={{ fontStyle: 'italic' }}>The 22-Day Threshold</span>
          </h2>
          <p className="editorial-sub" style={{ margin: '14px auto 0' }}>
            In cognitive science, 21–24 days of distributed, unassisted retrieval marks the transition of complex Cambridge exam concepts into permanent neocortical storage.
          </p>
        </div>

        {/* Dynamic Chart & Retention Visual */}
        <div
          style={{
            backgroundColor: 'var(--bg-surface)',
            borderRadius: '20px',
            border: '1px solid var(--border-medium)',
            padding: '36px 36px',
            boxShadow: 'var(--shadow-subtle)',
            marginBottom: '36px',
          }}
        >
          {/* Header Row & Controls */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '20px',
              marginBottom: '24px',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '23px', color: 'var(--text-main)', fontWeight: 500, margin: 0 }}>
                  Dynamic Retention Simulator: Spaced Repetition vs Single Cramming
                </h3>
                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '11px',
                    fontWeight: 700,
                    backgroundColor: '#dbeafe',
                    color: '#0284c7',
                    padding: '2px 8px',
                    borderRadius: 'var(--radius-pill)',
                  }}
                >
                  Interactive
                </span>
              </div>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'var(--text-subtle)', marginTop: '4px' }}>
                Hover or scrub across the timeline to test candidate retention dynamics at any day.
              </p>
            </div>

            {/* Mode Toggle Pills */}
            <div
              style={{
                display: 'flex',
                gap: '4px',
                backgroundColor: 'var(--bg-canvas)',
                padding: '3px',
                borderRadius: 'var(--radius-pill)',
                border: '1px solid var(--border-hairline)',
              }}
            >
              {[
                { id: 'both', label: 'Compare Curves' },
                { id: 'leitner', label: 'PrickyAi (Spaced)' },
                { id: 'standard', label: 'Single Cramming' },
              ].map((m) => (
                <button
                  key={m.id}
                  onClick={() => setActiveCurveMode(m.id as any)}
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '11.5px',
                    fontWeight: 600,
                    padding: '5px 12px',
                    borderRadius: 'var(--radius-pill)',
                    border: 'none',
                    cursor: 'pointer',
                    backgroundColor: activeCurveMode === m.id ? 'var(--text-main)' : 'transparent',
                    color: activeCurveMode === m.id ? '#ffffff' : 'var(--text-muted)',
                    transition: 'all 0.15s ease',
                  }}
                >
                  {m.label}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Day Scrubber Buttons */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px',
              marginBottom: '28px',
              paddingBottom: '16px',
              borderBottom: '1px solid var(--border-hairline)',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '11.5px',
                color: 'var(--text-subtle)',
                display: 'flex',
                alignItems: 'center',
                marginRight: '6px',
              }}
            >
              Test Milestone:
            </span>
            {milestones.map((m) => {
              const isSelected = hoveredPoint.day === m.day
              return (
                <button
                  key={m.day}
                  onClick={() => selectMilestone(m)}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11.5px',
                    fontWeight: 600,
                    padding: '4px 12px',
                    borderRadius: '6px',
                    border: isSelected ? '1px solid var(--text-main)' : '1px solid var(--border-medium)',
                    backgroundColor: isSelected ? 'var(--bg-canvas)' : 'var(--bg-surface)',
                    color: isSelected ? 'var(--text-main)' : 'var(--text-subtle)',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    transition: 'all 0.15s ease',
                  }}
                >
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: isSelected ? '#00a8ff' : '#94a3b8',
                    }}
                  />
                  {m.label} ({m.leitner}%)
                </button>
              )
            })}
          </div>

          {/* Minimalist Dynamic SVG Coordinate Chart */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '250px',
              cursor: 'crosshair',
            }}
          >
            <svg
              viewBox="0 0 940 250"
              style={{ width: '100%', height: '100%', overflow: 'visible' }}
              onMouseMove={handleGraphMouseMove}
              onClick={handleGraphMouseMove}
            >
              {/* Fine hairline grid lines */}
              <line x1="50" y1="20" x2="920" y2="20" stroke="var(--border-hairline)" strokeWidth="1" />
              <line x1="50" y1="70" x2="920" y2="70" stroke="var(--border-hairline)" strokeWidth="1" />
              <line x1="50" y1="120" x2="920" y2="120" stroke="var(--border-hairline)" strokeWidth="1" />
              <line x1="50" y1="170" x2="920" y2="170" stroke="var(--border-hairline)" strokeWidth="1" />
              <line x1="50" y1="200" x2="920" y2="200" stroke="var(--border-medium)" strokeWidth="1.2" />

              {/* Y Axis percentage ticks */}
              <text x="15" y="24" fill="var(--text-subtle)" fontSize="11" fontFamily="var(--font-mono)">100%</text>
              <text x="22" y="74" fill="var(--text-subtle)" fontSize="11" fontFamily="var(--font-mono)">75%</text>
              <text x="22" y="124" fill="var(--text-subtle)" fontSize="11" fontFamily="var(--font-mono)">50%</text>
              <text x="22" y="174" fill="var(--text-subtle)" fontSize="11" fontFamily="var(--font-mono)">25%</text>
              <text x="28" y="204" fill="var(--text-subtle)" fontSize="11" fontFamily="var(--font-mono)">0%</text>

              {/* Red forgetting curve (Single Exposure) */}
              {(activeCurveMode === 'both' || activeCurveMode === 'standard') && (
                <path
                  d="M 50 30 Q 140 180 920 198"
                  fill="none"
                  stroke="#ef4444"
                  strokeWidth="2.2"
                  strokeDasharray="6 6"
                  opacity={activeCurveMode === 'standard' ? 1 : 0.75}
                />
              )}

              {/* PrickyAi 5-Stage Stepladder curve in electric blue */}
              {(activeCurveMode === 'both' || activeCurveMode === 'leitner') && (
                <>
                  <path
                    d="M 50 30 Q 110 85 180 100 L 180 34 Q 260 75 350 90 L 350 32 Q 450 65 540 75 L 540 26 Q 670 50 780 54 L 780 22 L 920 25"
                    fill="none"
                    stroke="#00a8ff"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  {/* Shaded Area underneath */}
                  <path
                    d="M 50 30 Q 110 85 180 100 L 180 34 Q 260 75 350 90 L 350 32 Q 450 65 540 75 L 540 26 Q 670 50 780 54 L 780 22 L 920 25 L 920 200 L 50 200 Z"
                    fill="url(#blueFill)"
                    opacity="0.08"
                  />
                </>
              )}

              <defs>
                <linearGradient id="blueFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#00a8ff" />
                  <stop offset="100%" stopColor="#ffffff" />
                </linearGradient>
              </defs>

              {/* Dynamic Interactive Crosshair Line */}
              <line
                x1={hoveredPoint.x}
                y1="10"
                x2={hoveredPoint.x}
                y2="205"
                stroke="#00a8ff"
                strokeWidth="1.5"
                strokeDasharray="3 3"
                opacity="0.8"
              />

              {/* Dynamic Point on Leitner curve */}
              {(activeCurveMode === 'both' || activeCurveMode === 'leitner') && (
                <g transform={`translate(${hoveredPoint.x}, ${hoveredPoint.yLeitner})`}>
                  <circle r="7" fill="#00a8ff" fillOpacity="0.25">
                    <animate attributeName="r" values="6;10;6" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <circle r="4.5" fill="#00a8ff" stroke="#ffffff" strokeWidth="2" />
                </g>
              )}

              {/* Dynamic Point on Standard curve */}
              {(activeCurveMode === 'both' || activeCurveMode === 'standard') && (
                <circle
                  cx={hoveredPoint.x}
                  cy={hoveredPoint.yStandard}
                  r="4"
                  fill="#ef4444"
                  stroke="#ffffff"
                  strokeWidth="1.5"
                />
              )}

              {/* Day Labels */}
              {milestones.map((m) => (
                <text
                  key={m.day}
                  x={m.x}
                  y="222"
                  fill={hoveredPoint.day === m.day ? 'var(--text-main)' : 'var(--text-subtle)'}
                  fontSize="11"
                  fontFamily="var(--font-mono)"
                  fontWeight={hoveredPoint.day === m.day ? '700' : '400'}
                  textAnchor="middle"
                >
                  {m.label}
                </text>
              ))}

              {/* Dynamic Floating Tooltip */}
              <g
                transform={`translate(${
                  hoveredPoint.x > 700 ? hoveredPoint.x - 220 : Math.max(50, hoveredPoint.x - 10)
                }, 20)`}
              >
                <rect
                  width="210"
                  height="72"
                  rx="10"
                  fill="#0f1115"
                  stroke="rgba(255, 255, 255, 0.14)"
                  filter="drop-shadow(0 8px 16px rgba(0,0,0,0.25))"
                />
                <text x="14" y="22" fill="#94a3b8" fontSize="11" fontFamily="var(--font-mono)">
                  {hoveredPoint.label} · {hoveredPoint.stage}
                </text>
                <text x="14" y="42" fill="#38bdf8" fontSize="13" fontFamily="var(--font-sans)" fontWeight="700">
                  PrickyAi Spaced: {hoveredPoint.leitner}%
                </text>
                <text x="14" y="60" fill="#f87171" fontSize="11.5" fontFamily="var(--font-sans)">
                  Single Cramming: {hoveredPoint.standard}% (decay)
                </text>
              </g>
            </svg>
          </div>
        </div>

        {/* 5 Stages Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
            gap: '16px',
            marginBottom: '32px',
          }}
        >
          {stages.map((s) => {
            const isSelected = activeBox === s.box

            return (
              <div
                key={s.box}
                onClick={() => {
                  setActiveBox(s.box)
                  const targetMilestone = milestones.find((m) => m.box === s.box)
                  if (targetMilestone) {
                    selectMilestone(targetMilestone)
                  }
                }}
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  borderRadius: 'var(--radius-md)',
                  border: isSelected ? '1.5px solid var(--text-main)' : '1px solid var(--border-hairline)',
                  padding: '24px 20px',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                  boxShadow: isSelected ? 'var(--shadow-subtle)' : 'none',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '13px',
                      fontWeight: 700,
                      backgroundColor: isSelected ? 'var(--text-main)' : 'var(--bg-canvas)',
                      color: isSelected ? '#ffffff' : 'var(--text-main)',
                      width: '28px',
                      height: '28px',
                      borderRadius: '6px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {s.box}
                  </span>

                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      fontWeight: 600,
                      color: 'var(--text-subtle)',
                    }}
                  >
                    {s.timeline}
                  </span>
                </div>

                <h4
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '18px',
                    fontWeight: 500,
                    color: 'var(--text-main)',
                    marginBottom: '8px',
                  }}
                >
                  {s.title}
                </h4>

                <p
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '14px',
                    lineHeight: 1.5,
                    color: 'var(--text-muted)',
                    marginBottom: '16px',
                    minHeight: '60px',
                  }}
                >
                  {s.desc}
                </p>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '12px',
                    borderTop: '1px solid var(--border-hairline)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '11.5px',
                  }}
                >
                  <span style={{ color: 'var(--text-subtle)' }}>Retention:</span>
                  <span style={{ fontWeight: 700, color: 'var(--text-main)' }}>{s.retention}</span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Zero-Leak Reset Protocol Banner matched from prickyai.com */}
        <div
          style={{
            backgroundColor: 'var(--bg-surface)',
            border: '1px solid var(--border-medium)',
            borderRadius: 'var(--radius-md)',
            padding: '24px 32px',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '18px',
          }}
        >
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              backgroundColor: '#fee2e2',
              color: '#dc2626',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              marginTop: '2px',
            }}
          >
            <ShieldAlert size={20} />
          </div>

          <div>
            <div
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '13px',
                fontWeight: 700,
                color: 'var(--text-main)',
                letterSpacing: '0.02em',
                marginBottom: '4px',
              }}
            >
              Zero-Leak Reset Protocol
            </div>
            <p
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '15.5px',
                color: 'var(--text-muted)',
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              If a candidate loses even a single method or accuracy mark on Day 14 or Day 22, the PrickyAi engine does not compromise: the question immediately drops back to Box 1 for fresh interval spacing. Zero residual leakage into your final Cambridge exam.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
