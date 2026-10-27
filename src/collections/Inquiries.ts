import type { CollectionConfig } from 'payload'

export const Inquiries: CollectionConfig = {
  slug: 'inquiries',
  admin: {
    useAsTitle: 'subject',
    defaultColumns: ['name', 'email', 'inquiryType', 'status', 'createdAt'],
  },
  access: {
    create: () => true,
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'inquiryType',
      type: 'select',
      defaultValue: 'general',
      options: [
        { label: 'Free Diagnostic Access', value: 'diagnostic' },
        { label: 'School / Institution Licensing', value: 'school' },
        { label: 'Curriculum & Mark Schemes', value: 'curriculum' },
        { label: 'Pricing & Payment', value: 'pricing' },
        { label: 'General Feedback', value: 'general' },
      ],
    },
    {
      name: 'message',
      type: 'textarea',
      required: true,
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'unread',
      options: [
        { label: 'Unread', value: 'unread' },
        { label: 'In Review', value: 'in_review' },
        { label: 'Replied', value: 'replied' },
        { label: 'Archived', value: 'archived' },
      ],
    },
  ],
  timestamps: true,
}
