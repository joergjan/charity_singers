/**
 * Sanity CLI Configuration
 * This file configures the Sanity CLI tool with project-specific settings
 * and customizes the Vite bundler configuration.
 * Learn more: https://www.sanity.io/docs/cli
 */

import {defineCliConfig} from 'sanity/cli'

const projectId = process.env.PUBLIC_CHARITY_SINGERS_SANITY_PROJECT_ID!
const dataset = process.env.PUBLIC_CHARITY_SINGERS_SANITY_DATASET!

console.log('Using projectId:', projectId)
console.log('test')

export default defineCliConfig({
  api: {
    projectId,
    dataset,
  },
  studioHost: process.env.SANITY_STUDIO_STUDIO_HOST || '', // Visit https://www.sanity.io/docs/environment-variables to leanr more about using environment variables for local & production.
  autoUpdates: true,
})
