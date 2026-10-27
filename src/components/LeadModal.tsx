'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { X, CheckCircle2, ArrowUpRight, ExternalLink } from 'lucide-react'
import PrickyLogo from './PrickyLogo'

interface LeadModalProps {
  isOpen: boolean
  onClose: () => void
  source: string
}

export default function LeadModal({ isOpen, onClose, source }: LeadModalProps) {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [stage, setStage] = useState('class_10')
  const [curriculum, setCurriculum] = useState('cambridge_igcse')
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>(['chemistry', 'physics'])
  const [notes, setNotes] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  if (!isOpen) return null

  const subjectsList = [
    { id: 'chemistry', label: 'Chemistry (0620)' },
    { id: 'physics', label: 'Physics (0625)' },
    { id: 'biology', label: 'Biology (0610)' },
    { id: 'mathematics', label: 'Mathematics (0580)' },
    { id: 'add_maths', label: 'Add Maths (0606)' },
    { id: 'computer_science', label: 'Computer Science (0478)' },
  ]

  const toggleSubject = (id: string) => {
    if (selectedSubjects.includes(id)) {
      setSelectedSubjects(selectedSubjects.filter((s) => s !== id))
    } else {
      setSelectedSubjects([...selectedSubjects, id])
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch('/api/crm/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName,
          email,
          phone,
          stage,
          curriculum,
          subjects: selectedSubjects,
          source: source || 'Landing Page Interactive Modal',
          notes: notes || 'Lead captured from Cambridge diagnostic CTA.',
        }),
      })
      const data = await res.json()
      if (data.success) {
        setSuccess(true)
      }
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(15, 17, 21, 0.72)',
        backdropFilter: 'blur(8px)',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: 'var(--bg-surface)',
          borderRadius: '24px',
          maxWidth: '540px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '36px 32px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            backgroundColor: 'var(--bg-canvas)',
            border: '1px solid var(--border-hairline)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--text-muted)',
            cursor: 'pointer',
          }}
        >
          <X size={18} />
        </button>

        {success ? (
          <div style={{ textAlign: 'center', padding: '24px 0' }}>
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: 'var(--accent-green-subtle)',
                color: 'var(--accent-green)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
              }}
            >
              <CheckCircle2 size={36} />
            </div>

            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '26px', fontWeight: 500, color: 'var(--text-main)', marginBottom: '10px' }}>
              Diagnostic Inquiry Registered!
            </h3>

            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '16px', lineHeight: 1.6, color: 'var(--text-muted)', marginBottom: '28px' }}>
              Your information has been logged into <strong>Payload CRM</strong>. An academic counselor will contact you with your personalized Cambridge past paper diagnostics.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Link
                href="/crm"
                onClick={onClose}
                className="btn-minimal-dark"
                style={{ width: '100%', justifyContent: 'center', textDecoration: 'none' }}
              >
                Inspect in Payload CRM Portal <ExternalLink size={15} />
              </Link>

              <button
                onClick={onClose}
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '13.5px',
                  fontWeight: 500,
                  color: 'var(--text-muted)',
                  padding: '10px',
                  cursor: 'pointer',
                }}
              >
                Back to Landing Page
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div style={{ marginBottom: '18px' }}>
              <PrickyLogo size={32} subtitle="Diagnostic Access" />
            </div>

            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '26px', fontWeight: 500, color: 'var(--text-main)', marginBottom: '6px' }}>
              Start Free Diagnostic Revision
            </h3>

            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '15px', color: 'var(--text-muted)', marginBottom: '24px' }}>
              Experience authentic Cambridge mark schemes and the 22-day Leitner spaced repetition engine.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', fontWeight: 600, color: 'var(--text-main)', display: 'block', marginBottom: '6px' }}>
                  Candidate or Parent Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Maya Sengupta"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: '8px',
                    border: '1px solid var(--border-medium)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '14px',
                    backgroundColor: 'var(--bg-canvas)',
                    outline: 'none',
                  }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', fontWeight: 600, color: 'var(--text-main)', display: 'block', marginBottom: '6px' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: '8px',
                      border: '1px solid var(--border-medium)',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '14px',
                      backgroundColor: 'var(--bg-canvas)',
                      outline: 'none',
                    }}
                  />
                </div>
                <div>
                  <label style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', fontWeight: 600, color: 'var(--text-main)', display: 'block', marginBottom: '6px' }}>
                    Phone / WhatsApp
                  </label>
                  <input
                    type="text"
                    placeholder="+91 / +65..."
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: '8px',
                      border: '1px solid var(--border-medium)',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '14px',
                      backgroundColor: 'var(--bg-canvas)',
                      outline: 'none',
                    }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', fontWeight: 600, color: 'var(--text-main)', display: 'block', marginBottom: '6px' }}>
                    Grade / Stage
                  </label>
                  <select
                    value={stage}
                    onChange={(e) => setStage(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: '8px',
                      border: '1px solid var(--border-medium)',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '13px',
                      backgroundColor: 'var(--bg-canvas)',
                    }}
                  >
                    <option value="class_9">Class 9 Student</option>
                    <option value="class_10">Class 10 Candidate</option>
                    <option value="parent_teacher">Parent or Educator</option>
                    <option value="private_candidate">Private Candidate</option>
                  </select>
                </div>
                <div>
                  <label style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', fontWeight: 600, color: 'var(--text-main)', display: 'block', marginBottom: '6px' }}>
                    Curriculum Focus
                  </label>
                  <select
                    value={curriculum}
                    onChange={(e) => setCurriculum(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: '8px',
                      border: '1px solid var(--border-medium)',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '13px',
                      backgroundColor: 'var(--bg-canvas)',
                    }}
                  >
                    <option value="cambridge_igcse">Cambridge IGCSE</option>
                    <option value="cambridge_olevel">Cambridge O-Level</option>
                    <option value="both">Both IGCSE & O-Level</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', fontWeight: 600, color: 'var(--text-main)', display: 'block', marginBottom: '8px' }}>
                  Target Cambridge Subjects
                </label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {subjectsList.map((sub) => {
                    const isSelected = selectedSubjects.includes(sub.id)
                    return (
                      <button
                        type="button"
                        key={sub.id}
                        onClick={() => toggleSubject(sub.id)}
                        style={{
                          padding: '6px 12px',
                          borderRadius: 'var(--radius-pill)',
                          fontFamily: 'var(--font-sans)',
                          fontSize: '12px',
                          fontWeight: 500,
                          backgroundColor: isSelected ? 'var(--text-main)' : 'var(--bg-canvas)',
                          color: isSelected ? '#ffffff' : 'var(--text-muted)',
                          border: isSelected ? '1px solid var(--text-main)' : '1px solid var(--border-hairline)',
                          cursor: 'pointer',
                        }}
                      >
                        {sub.label}
                      </button>
                    )
                  })}
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-minimal-dark"
                style={{
                  width: '100%',
                  marginTop: '10px',
                  padding: '14px',
                  justifyContent: 'center',
                }}
              >
                {loading ? 'Submitting to Payload CRM...' : 'Start Free Diagnostic Practice'} <ArrowUpRight size={16} />
              </button>

              <div style={{ textAlign: 'center', fontFamily: 'var(--font-sans)', fontSize: '11px', color: 'var(--text-subtle)' }}>
                Directly saved to Payload CRM · Zero credit card required
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}
