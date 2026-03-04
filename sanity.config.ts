import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { codeInput } from '@sanity/code-input'
import { schemaTypes } from './src/sanity/schemaTypes'
import { apiVersion, dataset, projectId } from './src/sanity/env'

export default defineConfig({
  name: 'tesseract-studio',
  title: 'TesseractApps Studio',
  projectId,
  dataset,
  apiVersion,
  basePath: '/studio',
  plugins: [
    structureTool(),
    visionTool({ defaultApiVersion: apiVersion }),
    codeInput(),
  ],
  schema: {
    types: schemaTypes,
  },
})
