import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {presentationTool} from 'sanity/presentation'

import {schemaTypes} from './schemas'

const projectId = process.env.PUBLIC_CHARITY_SINGERS_SANITY_PROJECT_ID!
const dataset = process.env.PUBLIC_CHARITY_SINGERS_SANITY_DATASET!

console.log('Using projectId:', projectId)
console.log('test')

export default defineConfig({
  name: 'charity-singers',
  title: 'Charity Singers',
  projectId,
  dataset,
  plugins: [
    structureTool(),
    presentationTool({
      previewUrl: {
        origin: process.env.SANITY_CHARITY_SINGERS_STUDIO_PREVIEW_URL || 'http://localhost:5173',
        previewMode: {
          enable: '/preview/enable',
          disable: '/preview/disable',
        },
      },
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
})
