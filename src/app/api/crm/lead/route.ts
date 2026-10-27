import { NextResponse } from 'next/server'
import { getCRMLeads, saveCRMLead, updateCRMLeadStatus } from '@/lib/crm-store'

export async function GET() {
  const leads = getCRMLeads()
  return NextResponse.json({ success: true, count: leads.length, leads })
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { fullName, email, phone, stage, curriculum, subjects, source, notes } = body

    if (!fullName || !email) {
      return NextResponse.json(
        { success: false, error: 'Full name and email are required.' },
        { status: 400 }
      )
    }

    const newLead = saveCRMLead({
      fullName,
      email,
      phone: phone || '',
      stage: stage || 'class_10',
      curriculum: curriculum || 'cambridge_igcse',
      subjects: Array.isArray(subjects) ? subjects : ['physics'],
      source: source || 'Landing Page CTA',
      notes: notes || 'Submitted via landing page lead capture.',
    })

    return NextResponse.json({
      success: true,
      message: 'Lead successfully captured in Payload CRM!',
      lead: newLead,
    })
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || 'Server error' },
      { status: 500 }
    )
  }
}

export async function PATCH(req: Request) {
  try {
    const body = await req.json()
    const { id, status } = body
    if (!id || !status) {
      return NextResponse.json({ success: false, error: 'id and status required' }, { status: 400 })
    }
    const updated = updateCRMLeadStatus(id, status)
    return NextResponse.json({ success: updated })
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}
