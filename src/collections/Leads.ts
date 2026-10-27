import type { CollectionConfig } from 'payload'

export const Leads: CollectionConfig = {
  slug: 'leads',
  admin: {
    useAsTitle: 'fullName',
    defaultColumns: ['fullName', 'email', 'stage', 'curriculum', 'leadStatus', 'createdAt'],
  },
  access: {
    create: () => true, // Allows landing page lead capture without authentication
    read: () => true,
  },
  fields: [
    {
      name: 'fullName',
      type: 'text',
      required: true,
      label: 'Full Name',
    },
    {
      name: 'email',
      type: 'email',
      required: true,
      label: 'Email Address',
    },
    {
      name: 'phone',
      type: 'text',
      label: 'Phone / WhatsApp',
    },
    {
      name: 'stage',
      type: 'select',
      label: 'Learning Stage / Persona',
      defaultValue: 'class_10',
      options: [
        { label: "Class 9 Student (Early Foundation)", value: 'class_9' },
        { label: "Class 10 Candidate (Targeting Exam Year)", value: 'class_10' },
        { label: "Teacher or Parent (Monitoring & Support)", value: 'parent_teacher' },
        { label: "Private Candidate / Resit", value: 'private_candidate' },
      ],
    },
    {
      name: 'curriculum',
      type: 'select',
      label: 'Curriculum Focus',
      defaultValue: 'cambridge_igcse',
      options: [
        { label: 'Cambridge IGCSE', value: 'cambridge_igcse' },
        { label: 'Cambridge O-Level', value: 'cambridge_olevel' },
        { label: 'Both IGCSE & O-Level', value: 'both' },
      ],
    },
    {
      name: 'subjects',
      type: 'select',
      hasMany: true,
      label: 'Target Cambridge Subjects',
      options: [
        { label: 'Physics (0625 / 5054)', value: 'physics' },
        { label: 'Chemistry (0620 / 5070)', value: 'chemistry' },
        { label: 'Biology (0610 / 5090)', value: 'biology' },
        { label: 'Mathematics (0580 / 4024)', value: 'mathematics' },
        { label: 'Additional Maths (0606)', value: 'add_maths' },
        { label: 'Computer Science (0478 / 2210)', value: 'computer_science' },
      ],
    },
    {
      name: 'leadStatus',
      type: 'select',
      label: 'CRM Status',
      defaultValue: 'new',
      options: [
        { label: 'New Lead', value: 'new' },
        { label: 'Contacted', value: 'contacted' },
        { label: 'Diagnostic Scheduled', value: 'diagnostic_scheduled' },
        { label: 'Qualified', value: 'qualified' },
        { label: 'Enrolled / Pro', value: 'enrolled' },
        { label: 'Follow Up Later', value: 'follow_up' },
      ],
    },
    {
      name: 'source',
      type: 'text',
      label: 'Acquisition Channel / Source',
      defaultValue: 'Landing Page Hero CTA',
    },
    {
      name: 'notes',
      type: 'textarea',
      label: 'CRM Counselor Notes',
    },
  ],
  timestamps: true,
}
