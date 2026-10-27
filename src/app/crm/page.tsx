'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  Users,
  Search,
  Filter,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowLeft,
  Mail,
  Phone,
  BookOpen,
  Plus,
  RefreshCw,
  ExternalLink,
  ShieldCheck,
} from 'lucide-react'

interface Lead {
  id: string
  fullName: string
  email: string
  phone?: string
  stage: string
  curriculum: string
  subjects: string[]
  leadStatus: string
  source: string
  notes?: string
  createdAt: string
}

export default function CRMPage() {
  const [leads, setLeads] = useState<Lead[]>([])
  const [loading, setLoading] = useState(true)
  const [filterStatus, setFilterStatus] = useState('all')
  const [filterStage, setFilterStage] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [showAddModal, setShowAddModal] = useState(false)
  const [newLead, setNewLead] = useState({
    fullName: '',
    email: '',
    phone: '',
    stage: 'class_10',
    curriculum: 'cambridge_igcse',
    subjects: ['physics'],
    notes: '',
  })
  const [submitting, setSubmitting] = useState(false)

  const fetchLeads = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/crm/lead')
      const data = await res.json()
      if (data.leads) setLeads(data.leads)
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchLeads()
  }, [])

  const handleStatusChange = async (id: string, newStatus: string) => {
    try {
      await fetch('/api/crm/lead', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status: newStatus }),
      })
      setLeads((prev) =>
        prev.map((l) => (l.id === id ? { ...l, leadStatus: newStatus } : l))
      )
    } catch (e) {
      console.error(e)
    }
  }

  const handleCreateLead = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      const res = await fetch('/api/crm/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...newLead, source: 'Payload CRM Admin Portal' }),
      })
      const data = await res.json()
      if (data.lead) {
        setLeads((prev) => [data.lead, ...prev])
        setShowAddModal(false)
        setNewLead({
          fullName: '',
          email: '',
          phone: '',
          stage: 'class_10',
          curriculum: 'cambridge_igcse',
          subjects: ['physics'],
          notes: '',
        })
      }
    } catch (e) {
      console.error(e)
    } finally {
      setSubmitting(false)
    }
  }

  const filteredLeads = leads.filter((lead) => {
    const matchesStatus = filterStatus === 'all' || lead.leadStatus === filterStatus
    const matchesStage = filterStage === 'all' || lead.stage === filterStage
    const matchesSearch =
      searchQuery === '' ||
      lead.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (lead.notes && lead.notes.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesStatus && matchesStage && matchesSearch
  })

  const getStatusBadge = (status: string) => {
    const statusMap: Record<string, { label: string; bg: string; color: string; border: string }> = {
      new: { label: 'New Lead', bg: '#eff6ff', color: '#1d4ed8', border: '#bfdbfe' },
      contacted: { label: 'Contacted', bg: '#fef3c7', color: '#b45309', border: '#fde68a' },
      diagnostic_scheduled: { label: 'Diagnostic Set', bg: '#f3e8ff', color: '#7e22ce', border: '#e9d5ff' },
      qualified: { label: 'Qualified', bg: '#ecfdf5', color: '#047857', border: '#a7f3d0' },
      enrolled: { label: 'Enrolled / Pro', bg: '#dcfce7', color: '#15803d', border: '#86efac' },
      follow_up: { label: 'Follow Up', bg: '#f1f5f9', color: '#475569', border: '#cbd5e1' },
    }
    const s = statusMap[status] || { label: status, bg: '#f1f5f9', color: '#334155', border: '#e2e8f0' }
    return (
      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          padding: '4px 10px',
          borderRadius: '9999px',
          fontSize: '12px',
          fontWeight: 600,
          backgroundColor: s.bg,
          color: s.color,
          border: `1px solid ${s.border}`,
        }}
      >
        {s.label}
      </span>
    )
  }

  const getStageLabel = (stage: string) => {
    switch (stage) {
      case 'class_9':
        return 'Class 9 Student'
      case 'class_10':
        return 'Class 10 Candidate'
      case 'parent_teacher':
        return 'Teacher / Parent'
      default:
        return 'Private Candidate'
    }
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc', color: '#0f172a' }}>
      {/* Top Bar */}
      <header
        style={{
          backgroundColor: '#ffffff',
          borderBottom: '1px solid #e2e8f0',
          padding: '16px 32px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'sticky',
          top: 0,
          zIndex: 40,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Link
            href="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: '#0284c7',
              fontSize: '14px',
              fontWeight: 600,
              textDecoration: 'none',
              padding: '6px 12px',
              borderRadius: '8px',
              background: '#f0f9ff',
            }}
          >
            <ArrowLeft size={16} /> Back to Landing Page
          </Link>
          <div style={{ height: '20px', width: '1px', backgroundColor: '#e2e8f0' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #0284c7 0%, #2563eb 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontWeight: 800,
                fontSize: '16px',
              }}
            >
              P
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: '16px', letterSpacing: '-0.02em', display: 'flex', alignItems: 'center', gap: '6px' }}>
                PricklyAI <span style={{ fontSize: '11px', background: '#e0f2fe', color: '#0369a1', padding: '2px 6px', borderRadius: '4px' }}>CRM</span>
              </div>
              <div style={{ fontSize: '12px', color: '#64748b' }}>Cambridge Candidates & School Leads</div>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button
            onClick={fetchLeads}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 14px',
              fontSize: '13px',
              fontWeight: 600,
              color: '#475569',
              background: '#ffffff',
              border: '1px solid #cbd5e1',
              borderRadius: '8px',
            }}
          >
            <RefreshCw size={14} /> Refresh
          </button>
          <button
            onClick={() => setShowAddModal(true)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 16px',
              fontSize: '13px',
              fontWeight: 600,
              color: '#ffffff',
              background: '#0284c7',
              borderRadius: '8px',
              boxShadow: '0 2px 6px rgba(2, 132, 199, 0.3)',
            }}
          >
            <Plus size={16} /> New Lead
          </button>
        </div>
      </header>

      {/* Main Container */}
      <main style={{ maxWidth: '1240px', margin: '32px auto', padding: '0 24px' }}>
        {/* KPI Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '16px',
            marginBottom: '28px',
          }}
        >
          <div style={{ background: '#ffffff', padding: '20px', borderRadius: '14px', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
            <div style={{ fontSize: '13px', color: '#64748b', fontWeight: 600 }}>Total Inquiries / Leads</div>
            <div style={{ fontSize: '28px', fontWeight: 800, color: '#0f172a', marginTop: '6px' }}>{leads.length}</div>
            <div style={{ fontSize: '12px', color: '#10b981', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <ShieldCheck size={14} /> Integrated with Payload CRM
            </div>
          </div>
          <div style={{ background: '#ffffff', padding: '20px', borderRadius: '14px', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
            <div style={{ fontSize: '13px', color: '#64748b', fontWeight: 600 }}>Qualified Candidates</div>
            <div style={{ fontSize: '28px', fontWeight: 800, color: '#0284c7', marginTop: '6px' }}>
              {leads.filter((l) => l.leadStatus === 'qualified' || l.leadStatus === 'enrolled').length}
            </div>
            <div style={{ fontSize: '12px', color: '#64748b', marginTop: '4px' }}>Ready for Diagnostic / Pro</div>
          </div>
          <div style={{ background: '#ffffff', padding: '20px', borderRadius: '14px', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
            <div style={{ fontSize: '13px', color: '#64748b', fontWeight: 600 }}>Class 10 Exam Candidates</div>
            <div style={{ fontSize: '28px', fontWeight: 800, color: '#0f172a', marginTop: '6px' }}>
              {leads.filter((l) => l.stage === 'class_10').length}
            </div>
            <div style={{ fontSize: '12px', color: '#64748b', marginTop: '4px' }}>Targeting 2026 Board Exams</div>
          </div>
          <div style={{ background: '#ffffff', padding: '20px', borderRadius: '14px', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
            <div style={{ fontSize: '13px', color: '#64748b', fontWeight: 600 }}>Educators & Schools</div>
            <div style={{ fontSize: '28px', fontWeight: 800, color: '#7e22ce', marginTop: '6px' }}>
              {leads.filter((l) => l.stage === 'parent_teacher').length}
            </div>
            <div style={{ fontSize: '12px', color: '#64748b', marginTop: '4px' }}>Institutional Inquiries</div>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div
          style={{
            background: '#ffffff',
            padding: '16px 20px',
            borderRadius: '12px',
            border: '1px solid #e2e8f0',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            marginBottom: '20px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: '1 1 300px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: '#f8fafc',
                border: '1px solid #cbd5e1',
                borderRadius: '8px',
                padding: '8px 12px',
                width: '100%',
                maxWidth: '380px',
              }}
            >
              <Search size={16} color="#94a3b8" />
              <input
                type="text"
                placeholder="Search leads by student name, email, notes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  border: 'none',
                  outline: 'none',
                  background: 'transparent',
                  width: '100%',
                  fontSize: '13px',
                }}
              />
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: '#64748b' }}>
              <Filter size={14} /> Status:
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                style={{
                  padding: '6px 10px',
                  borderRadius: '6px',
                  border: '1px solid #cbd5e1',
                  fontSize: '13px',
                  background: '#fff',
                }}
              >
                <option value="all">All Statuses</option>
                <option value="new">New Lead</option>
                <option value="contacted">Contacted</option>
                <option value="diagnostic_scheduled">Diagnostic Scheduled</option>
                <option value="qualified">Qualified</option>
                <option value="enrolled">Enrolled / Pro</option>
              </select>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: '#64748b' }}>
              Stage:
              <select
                value={filterStage}
                onChange={(e) => setFilterStage(e.target.value)}
                style={{
                  padding: '6px 10px',
                  borderRadius: '6px',
                  border: '1px solid #cbd5e1',
                  fontSize: '13px',
                  background: '#fff',
                }}
              >
                <option value="all">All Stages</option>
                <option value="class_9">Class 9 Student</option>
                <option value="class_10">Class 10 Candidate</option>
                <option value="parent_teacher">Teacher / Parent</option>
              </select>
            </div>
          </div>
        </div>

        {/* Leads Table */}
        <div
          style={{
            background: '#ffffff',
            borderRadius: '14px',
            border: '1px solid #e2e8f0',
            overflow: 'hidden',
            boxShadow: '0 1px 3px rgba(0,0,0,0.03)',
          }}
        >
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '13px' }}>
              <thead>
                <tr style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0', color: '#64748b' }}>
                  <th style={{ padding: '14px 20px', fontWeight: 600 }}>Lead / Student</th>
                  <th style={{ padding: '14px 20px', fontWeight: 600 }}>Persona / Stage</th>
                  <th style={{ padding: '14px 20px', fontWeight: 600 }}>Curriculum & Subjects</th>
                  <th style={{ padding: '14px 20px', fontWeight: 600 }}>CRM Status</th>
                  <th style={{ padding: '14px 20px', fontWeight: 600 }}>Source</th>
                  <th style={{ padding: '14px 20px', fontWeight: 600 }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredLeads.length === 0 ? (
                  <tr>
                    <td colSpan={6} style={{ padding: '48px', textAlign: 'center', color: '#94a3b8' }}>
                      No matching leads found in Payload CRM.
                    </td>
                  </tr>
                ) : (
                  filteredLeads.map((lead) => (
                    <tr key={lead.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                      <td style={{ padding: '16px 20px' }}>
                        <div style={{ fontWeight: 700, color: '#0f172a', fontSize: '14px' }}>{lead.fullName}</div>
                        <div style={{ color: '#64748b', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '6px', marginTop: '2px' }}>
                          <Mail size={12} /> {lead.email}
                        </div>
                        {lead.phone && (
                          <div style={{ color: '#64748b', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <Phone size={12} /> {lead.phone}
                          </div>
                        )}
                        {lead.notes && (
                          <div
                            style={{
                              marginTop: '6px',
                              background: '#f8fafc',
                              padding: '6px 10px',
                              borderRadius: '6px',
                              fontSize: '11px',
                              color: '#475569',
                              maxWidth: '280px',
                            }}
                          >
                            💬 {lead.notes}
                          </div>
                        )}
                      </td>
                      <td style={{ padding: '16px 20px' }}>
                        <div style={{ fontWeight: 600, color: '#0f172a' }}>{getStageLabel(lead.stage)}</div>
                        <div style={{ fontSize: '11px', color: '#64748b', textTransform: 'capitalize' }}>
                          {lead.curriculum.replace('_', ' ')}
                        </div>
                      </td>
                      <td style={{ padding: '16px 20px' }}>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', maxWidth: '240px' }}>
                          {lead.subjects.map((s) => (
                            <span
                              key={s}
                              style={{
                                background: '#f1f5f9',
                                color: '#334155',
                                padding: '2px 8px',
                                borderRadius: '4px',
                                fontSize: '11px',
                                textTransform: 'capitalize',
                              }}
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td style={{ padding: '16px 20px' }}>{getStatusBadge(lead.leadStatus)}</td>
                      <td style={{ padding: '16px 20px', color: '#64748b', fontSize: '12px' }}>
                        <div>{lead.source}</div>
                        <div style={{ fontSize: '11px', color: '#94a3b8', marginTop: '2px' }}>
                          {new Date(lead.createdAt).toLocaleDateString()}
                        </div>
                      </td>
                      <td style={{ padding: '16px 20px' }}>
                        <select
                          value={lead.leadStatus}
                          onChange={(e) => handleStatusChange(lead.id, e.target.value)}
                          style={{
                            padding: '6px 8px',
                            borderRadius: '6px',
                            border: '1px solid #cbd5e1',
                            fontSize: '12px',
                            background: '#fff',
                            color: '#0f172a',
                          }}
                        >
                          <option value="new">Mark New</option>
                          <option value="contacted">Mark Contacted</option>
                          <option value="diagnostic_scheduled">Schedule Diagnostic</option>
                          <option value="qualified">Mark Qualified</option>
                          <option value="enrolled">Mark Enrolled</option>
                          <option value="follow_up">Follow Up</option>
                        </select>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* Manual New Lead Modal */}
      {showAddModal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(15, 23, 42, 0.6)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            zIndex: 50,
          }}
        >
          <div
            style={{
              background: '#ffffff',
              borderRadius: '16px',
              maxWidth: '500px',
              width: '100%',
              padding: '28px',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h2 style={{ fontSize: '18px', fontWeight: 800, color: '#0f172a' }}>Add New Cambridge CRM Lead</h2>
              <button onClick={() => setShowAddModal(false)} style={{ fontSize: '18px', color: '#94a3b8' }}>
                ✕
              </button>
            </div>

            <form onSubmit={handleCreateLead} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div>
                <label style={{ fontSize: '12px', fontWeight: 600, color: '#475569', display: 'block', marginBottom: '4px' }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Maya Sengupta"
                  value={newLead.fullName}
                  onChange={(e) => setNewLead({ ...newLead, fullName: e.target.value })}
                  style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '14px' }}
                />
              </div>

              <div>
                <label style={{ fontSize: '12px', fontWeight: 600, color: '#475569', display: 'block', marginBottom: '4px' }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. maya@example.com"
                  value={newLead.email}
                  onChange={(e) => setNewLead({ ...newLead, email: e.target.value })}
                  style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '14px' }}
                />
              </div>

              <div>
                <label style={{ fontSize: '12px', fontWeight: 600, color: '#475569', display: 'block', marginBottom: '4px' }}>
                  Phone / WhatsApp
                </label>
                <input
                  type="text"
                  placeholder="+91 / +65 / +971..."
                  value={newLead.phone}
                  onChange={(e) => setNewLead({ ...newLead, phone: e.target.value })}
                  style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '14px' }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={{ fontSize: '12px', fontWeight: 600, color: '#475569', display: 'block', marginBottom: '4px' }}>
                    Stage / Track
                  </label>
                  <select
                    value={newLead.stage}
                    onChange={(e) => setNewLead({ ...newLead, stage: e.target.value })}
                    style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '13px' }}
                  >
                    <option value="class_9">Class 9 Student</option>
                    <option value="class_10">Class 10 Candidate</option>
                    <option value="parent_teacher">Parent / Teacher</option>
                  </select>
                </div>
                <div>
                  <label style={{ fontSize: '12px', fontWeight: 600, color: '#475569', display: 'block', marginBottom: '4px' }}>
                    Curriculum
                  </label>
                  <select
                    value={newLead.curriculum}
                    onChange={(e) => setNewLead({ ...newLead, curriculum: e.target.value })}
                    style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '13px' }}
                  >
                    <option value="cambridge_igcse">Cambridge IGCSE</option>
                    <option value="cambridge_olevel">Cambridge O-Level</option>
                    <option value="both">Both</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ fontSize: '12px', fontWeight: 600, color: '#475569', display: 'block', marginBottom: '4px' }}>
                  Counselor Notes
                </label>
                <textarea
                  rows={3}
                  placeholder="Specific requirements, mock test target dates..."
                  value={newLead.notes}
                  onChange={(e) => setNewLead({ ...newLead, notes: e.target.value })}
                  style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '13px', resize: 'vertical' }}
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '12px' }}>
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  style={{ padding: '10px 16px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '13px', fontWeight: 600 }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  style={{
                    padding: '10px 20px',
                    borderRadius: '8px',
                    backgroundColor: '#0284c7',
                    color: '#ffffff',
                    fontSize: '13px',
                    fontWeight: 600,
                  }}
                >
                  {submitting ? 'Saving...' : 'Add Lead to CRM'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
