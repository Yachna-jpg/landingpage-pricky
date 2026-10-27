import { buildConfig } from 'payload'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { fileURLToPath } from 'url'
import { Users } from './collections/Users'
import { Leads } from './collections/Leads'
import { Inquiries } from './collections/Inquiries'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [Users, Leads, Inquiries],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || 'prickly-cambridge-ai-crm-secret-salt-2026',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URI || 'file:./payload-crm.db',
    },
  }),
})
