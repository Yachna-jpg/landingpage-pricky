import fs from 'fs'
import path from 'path'

export interface CRMLead {
  id: string
  fullName: string
  email: string
  phone?: string
  stage: string
  curriculum: string
  subjects: string[]
  leadStatus: 'new' | 'contacted' | 'diagnostic_scheduled' | 'qualified' | 'enrolled' | 'follow_up'
  source: string
  notes?: string
  createdAt: string
}

const CRM_DATA_FILE = path.join(process.cwd(), 'crm-leads.json')

const INITIAL_SEEDS: CRMLead[] = [
  {
    id: 'lead-001',
    fullName: 'Ananya Agarwal',
    email: 'ananya.agarwal@example.com',
    phone: '+91 98112 43210',
    stage: 'class_10',
    curriculum: 'cambridge_igcse',
    subjects: ['physics', 'chemistry', 'mathematics'],
    leadStatus: 'qualified',
    source: 'Landing Page Hero CTA',
    notes: 'Aiming for A* in Chemistry 0620 Paper 4. Requested Leitner schedule consultation.',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 4).toISOString(),
  },
  {
    id: 'lead-002',
    fullName: 'Aarav Sharma',
    email: 'aarav.sharma@example.sg',
    phone: '+65 9123 4567',
    stage: 'class_10',
    curriculum: 'cambridge_olevel',
    subjects: ['physics', 'mathematics', 'add_maths'],
    leadStatus: 'enrolled',
    source: 'Leitner Stepladder CTA',
    notes: 'Enrolled in Annual Pass. Preparing for O-Level 4024 and 5054.',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
  },
  {
    id: 'lead-003',
    fullName: 'Dr. Priya Kulkarni',
    email: 'p.kulkarni@cambridgeschool.edu',
    phone: '+971 50 123 4567',
    stage: 'parent_teacher',
    curriculum: 'both',
    subjects: ['physics', 'chemistry', 'biology'],
    leadStatus: 'diagnostic_scheduled',
    source: 'Educator Persona Card',
    notes: 'Head of Science at Cambridge International Dubai. Interested in school batch licensing.',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 48).toISOString(),
  },
  {
    id: 'lead-004',
    fullName: 'Rohan Mehta',
    email: 'rohan.mehta@example.com',
    phone: '+91 99201 88491',
    stage: 'class_9',
    curriculum: 'cambridge_igcse',
    subjects: ['mathematics', 'computer_science'],
    leadStatus: 'new',
    source: 'Pricing Section CTA',
    notes: 'Class 9 student building early foundation for 0580 extended math.',
    createdAt: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
  },
]

export function getCRMLeads(): CRMLead[] {
  try {
    if (!fs.existsSync(CRM_DATA_FILE)) {
      fs.writeFileSync(CRM_DATA_FILE, JSON.stringify(INITIAL_SEEDS, null, 2), 'utf8')
      return INITIAL_SEEDS
    }
    const data = fs.readFileSync(CRM_DATA_FILE, 'utf8')
    return JSON.parse(data)
  } catch (error) {
    console.error('Error reading CRM leads:', error)
    return INITIAL_SEEDS
  }
}

export function saveCRMLead(lead: Omit<CRMLead, 'id' | 'createdAt' | 'leadStatus'> & { leadStatus?: CRMLead['leadStatus'] }): CRMLead {
  const existing = getCRMLeads()
  const newLead: CRMLead = {
    ...lead,
    id: `lead-${Date.now().toString().slice(-6)}`,
    leadStatus: lead.leadStatus || 'new',
    createdAt: new Date().toISOString(),
  }
  const updated = [newLead, ...existing]
  try {
    fs.writeFileSync(CRM_DATA_FILE, JSON.stringify(updated, null, 2), 'utf8')
  } catch (error) {
    console.error('Error writing CRM leads:', error)
  }
  return newLead
}

export function updateCRMLeadStatus(id: string, status: CRMLead['leadStatus']): boolean {
  const existing = getCRMLeads()
  const lead = existing.find(l => l.id === id)
  if (!lead) return false
  lead.leadStatus = status
  try {
    fs.writeFileSync(CRM_DATA_FILE, JSON.stringify(existing, null, 2), 'utf8')
    return true
  } catch (error) {
    console.error('Error updating CRM lead:', error)
    return false
  }
}
