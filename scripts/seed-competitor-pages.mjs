/**
 * Sanity Seed Script — Competitor Comparison Pages (13 documents)
 *
 * Usage:
 *   1. Add your write token to .env.local:
 *        SANITY_API_WRITE_TOKEN=skXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
 *   2. Run:
 *        npm run seed:competitors
 *      or directly:
 *        node scripts/seed-competitor-pages.mjs
 *
 * Notes:
 *   - Safe to run multiple times (uses _id-based upserts via createOrReplace)
 *   - No cross-document references — single-pass seeding
 *   - After seeding, visit /studio → Competitor Pages to review and edit content
 *   - All routes follow the pattern /compare/{slug}
 */

import { createClient } from '@sanity/client'
import { readFileSync, existsSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const rootDir = resolve(__dirname, '..')

function loadEnvFile(filePath) {
  if (!existsSync(filePath)) return
  const lines = readFileSync(filePath, 'utf8').split('\n')
  for (const line of lines) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) continue
    const eqIdx = trimmed.indexOf('=')
    if (eqIdx === -1) continue
    const key = trimmed.slice(0, eqIdx).trim()
    const val = trimmed.slice(eqIdx + 1).trim().replace(/^["']|["']$/g, '')
    if (!(key in process.env)) process.env[key] = val
  }
}

loadEnvFile(resolve(rootDir, '.env.local'))
loadEnvFile(resolve(rootDir, '.env'))

const projectId = process.env.VITE_SANITY_PROJECT_ID
const dataset = process.env.VITE_SANITY_DATASET || 'production'
const token = process.env.SANITY_API_WRITE_TOKEN

if (!projectId || projectId === 'your-project-id') {
  console.error('❌  VITE_SANITY_PROJECT_ID is not set or still has placeholder value.')
  console.error('   Set it in .env.local and re-run.')
  process.exit(1)
}

if (!token) {
  console.error('❌  SANITY_API_WRITE_TOKEN is not set.')
  console.error('   Get a write token from https://sanity.io/manage → API → Tokens')
  console.error('   Add SANITY_API_WRITE_TOKEN=sk... to .env.local and re-run.')
  process.exit(1)
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-01-01',
  token,
  useCdn: false,
})

// ---------------------------------------------------------------------------
// Default content — shared across all competitor pages (editable in Studio)
// ---------------------------------------------------------------------------

const DEFAULT_ABOUT_BODY = `TesseractApps is purpose-built governance infrastructure for Australian NDIS providers. Built natively on Salesforce Hyperforce — the only enterprise-grade infrastructure that meets Australian data sovereignty requirements for sensitive participant data — TesseractApps was designed from the ground up around the NDIS Quality and Safeguards Commission requirements, SCHADS Award obligations, and the operational reality of disability support services.

Every module — rostering, participant management, NDIS claiming, incident reporting, and compliance tracking — is connected in a single unified platform. There is no data re-entry between systems, no reconciliation between siloed tools, and no workarounds to accommodate the NDIS price guide. Every provider runs on the same platform. Configuration deepens as your organisation matures. There are no feature-gated tiers and no migration between products.`

const DEFAULT_ABOUT_TRUST_BADGES = [
  'Salesforce Hyperforce',
  'SCHADS Award Compliant',
  'NDIS Quality & Safeguards',
  'Australian Hosted',
  'Single Unified Platform',
]

const DEFAULT_AWARD_BADGES = [
  { label: 'NDIS Native', sub: 'Purpose-built' },
  { label: 'Salesforce', sub: 'Hyperforce' },
  { label: 'SOC 2', sub: 'Type II' },
  { label: 'SCHADS', sub: 'Compliant' },
  { label: 'Australian', sub: 'Hosted' },
]

const DEFAULT_COMPARISON_CATEGORIES = [
  {
    title: 'Platform Architecture',
    rows: [
      { feature: 'Built natively for NDIS', us: true, them: 'no' },
      { feature: 'Single unified platform (no integrations needed)', us: true, them: 'no' },
      { feature: 'Salesforce Hyperforce infrastructure', us: true, them: 'no' },
      { feature: 'Australian data sovereignty', us: true, them: 'partial' },
      { feature: 'No per-module add-on pricing', us: true, them: 'no' },
      { feature: 'Multi-site visibility from one login', us: true, them: 'partial' },
    ],
  },
  {
    title: 'Compliance & Governance',
    rows: [
      { feature: 'SCHADS Award built into scheduling engine', us: true, them: 'no' },
      { feature: 'SIRS incident reporting workflow', us: true, them: 'no' },
      { feature: 'Continuous audit readiness dashboard', us: true, them: 'no' },
      { feature: 'NDIS Quality & Safeguards Commission alignment', us: true, them: 'partial' },
      { feature: 'Expiry alerts for credentials & registrations', us: true, them: 'partial' },
      { feature: 'Restrictive practices register', us: true, them: 'no' },
    ],
  },
  {
    title: 'Rostering & Workforce',
    rows: [
      { feature: 'Participant-matched rostering (qualifications)', us: true, them: 'partial' },
      { feature: 'SCHADS sleepover & active night classification', us: true, them: 'no' },
      { feature: 'Real-time roster gap broadcast', us: true, them: 'partial' },
      { feature: 'Mobile app for support workers', us: true, them: 'yes' },
      { feature: 'Shift handover workflows', us: true, them: 'no' },
      { feature: 'Timesheet → payroll alignment', us: true, them: 'partial' },
    ],
  },
  {
    title: 'NDIS Claiming & Finance',
    rows: [
      { feature: 'NDIS claiming connected to service delivery', us: true, them: 'no' },
      { feature: 'Live participant budget visibility', us: true, them: 'no' },
      { feature: 'NDIS price guide compliance', us: true, them: 'partial' },
      { feature: 'Invoicing from rostered supports', us: true, them: 'partial' },
      { feature: 'No manual reconciliation between systems', us: true, them: 'no' },
      { feature: 'Financial reporting across all sites', us: true, them: 'partial' },
    ],
  },
]

const DEFAULT_SWITCH_STEPS = [
  {
    title: 'Scoped Implementation',
    body: 'We map your existing workflows, participant records, and compliance configuration before a single line of data moves.',
  },
  {
    title: 'Guided Migration',
    body: 'Your TesseractApps implementation team handles data migration from your current platform — no CSV wrangling required.',
  },
  {
    title: 'Go Live with Confidence',
    body: 'Staff training, payroll validation, and live claim reconciliation before your first production roster runs.',
  },
]

const DEFAULT_RIGHT_CHOICE_ITEMS = [
  'You need a single operational platform connecting rostering, payroll, compliance, claiming, and reporting',
  'SCHADS Award accuracy, SIRS compliance, and continuous audit readiness are critical to your operations',
  'You want a platform that grows with your organisation without migration or re-implementation',
  'You operate across multiple sites or service types and need governance consistency',
  'You want transparent, stable pricing without feature gating',
]

const DEFAULT_CTA_DESCRIPTION = `Your demo is configured for your care type, team size, and provider maturity stage. 30 minutes. Live platform — not a slide deck. Clear next steps, no pressure.`

// ---------------------------------------------------------------------------
// Competitor documents — 13 total
// ---------------------------------------------------------------------------

const competitorPages = [

  // 1. ShiftCare
  {
    _id: 'competitor-shiftcare',
    _type: 'competitorPage',
    title: 'TesseractApps vs ShiftCare',
    slug: { _type: 'slug', current: 'shiftcare' },
    competitorName: 'ShiftCare',
    order: 1,
    heroHeading: 'TesseractApps vs ShiftCare',
    heroSubtitle: 'NDIS-native platform vs generalist workforce software. See why disability support providers choose TesseractApps for governance, compliance, and unified operations.',
    aboutHeading: 'About TesseractApps',
    aboutBody: DEFAULT_ABOUT_BODY,
    aboutTrustBadges: DEFAULT_ABOUT_TRUST_BADGES,
    awardBadges: DEFAULT_AWARD_BADGES,
    comparisonCategories: DEFAULT_COMPARISON_CATEGORIES,
    switchSteps: DEFAULT_SWITCH_STEPS,
    rightChoiceHeading: 'When TesseractApps Is the Right Choice',
    rightChoiceItems: DEFAULT_RIGHT_CHOICE_ITEMS,
    ctaHeading: 'See How TesseractApps Compares in Practice',
    ctaDescription: DEFAULT_CTA_DESCRIPTION,
    seo: {
      _type: 'seo',
      metaTitle: 'TesseractApps vs ShiftCare | NDIS Software Comparison',
      metaDescription: 'Compare TesseractApps vs ShiftCare for NDIS providers. Salesforce Hyperforce, SCHADS compliance, and integrated claiming vs a generalist shift management tool.',
    },
  },

  // 2. Lumary
  {
    _id: 'competitor-lumary',
    _type: 'competitorPage',
    title: 'TesseractApps vs Lumary',
    slug: { _type: 'slug', current: 'lumary' },
    competitorName: 'Lumary',
    order: 2,
    heroHeading: 'TesseractApps vs Lumary',
    heroSubtitle: 'Purpose-built NDIS operations vs a Salesforce customisation. Integrated claiming, rostering, and compliance in one platform — with no per-module pricing.',
    aboutHeading: 'About TesseractApps',
    aboutBody: DEFAULT_ABOUT_BODY,
    aboutTrustBadges: DEFAULT_ABOUT_TRUST_BADGES,
    awardBadges: DEFAULT_AWARD_BADGES,
    comparisonCategories: DEFAULT_COMPARISON_CATEGORIES,
    switchSteps: DEFAULT_SWITCH_STEPS,
    rightChoiceHeading: 'When TesseractApps Is the Right Choice',
    rightChoiceItems: DEFAULT_RIGHT_CHOICE_ITEMS,
    ctaHeading: 'See How TesseractApps Compares in Practice',
    ctaDescription: DEFAULT_CTA_DESCRIPTION,
    seo: {
      _type: 'seo',
      metaTitle: 'TesseractApps vs Lumary | NDIS Software Comparison',
      metaDescription: 'TesseractApps vs Lumary — compare NDIS platform approaches. Native SCHADS, integrated rostering and claiming, vs a customised Salesforce build.',
    },
  },

  // 3. SupportAbility
  {
    _id: 'competitor-supportability',
    _type: 'competitorPage',
    title: 'TesseractApps vs SupportAbility',
    slug: { _type: 'slug', current: 'supportability' },
    competitorName: 'SupportAbility',
    order: 3,
    heroHeading: 'TesseractApps vs SupportAbility',
    heroSubtitle: 'Modern NDIS platform vs legacy database software. Built for providers who need to scale without proportional admin overhead.',
    aboutHeading: 'About TesseractApps',
    aboutBody: DEFAULT_ABOUT_BODY,
    aboutTrustBadges: DEFAULT_ABOUT_TRUST_BADGES,
    awardBadges: DEFAULT_AWARD_BADGES,
    comparisonCategories: DEFAULT_COMPARISON_CATEGORIES,
    switchSteps: DEFAULT_SWITCH_STEPS,
    rightChoiceHeading: 'When TesseractApps Is the Right Choice',
    rightChoiceItems: DEFAULT_RIGHT_CHOICE_ITEMS,
    ctaHeading: 'See How TesseractApps Compares in Practice',
    ctaDescription: DEFAULT_CTA_DESCRIPTION,
    seo: {
      _type: 'seo',
      metaTitle: 'TesseractApps vs SupportAbility | NDIS Software Comparison',
      metaDescription: 'Compare TesseractApps vs SupportAbility. Modern NDIS claiming, rostering, and compliance against a legacy client management system.',
    },
  },

  // 4. Comm.care
  {
    _id: 'competitor-commcare',
    _type: 'competitorPage',
    title: 'TesseractApps vs Comm.care',
    slug: { _type: 'slug', current: 'commcare' },
    competitorName: 'Comm.care',
    order: 4,
    heroHeading: 'TesseractApps vs Comm.care',
    heroSubtitle: 'NDIS-specific operations vs generic care management. Complete compliance, rostering, and claiming in one connected platform.',
    aboutHeading: 'About TesseractApps',
    aboutBody: DEFAULT_ABOUT_BODY,
    aboutTrustBadges: DEFAULT_ABOUT_TRUST_BADGES,
    awardBadges: DEFAULT_AWARD_BADGES,
    comparisonCategories: DEFAULT_COMPARISON_CATEGORIES,
    switchSteps: DEFAULT_SWITCH_STEPS,
    rightChoiceHeading: 'When TesseractApps Is the Right Choice',
    rightChoiceItems: DEFAULT_RIGHT_CHOICE_ITEMS,
    ctaHeading: 'See How TesseractApps Compares in Practice',
    ctaDescription: DEFAULT_CTA_DESCRIPTION,
    seo: {
      _type: 'seo',
      metaTitle: 'TesseractApps vs Comm.care | NDIS Software Comparison',
      metaDescription: 'TesseractApps vs Comm.care for NDIS providers — compare integrated rostering, SCHADS compliance, and NDIS claiming capabilities.',
    },
  },

  // 5. iinsight
  {
    _id: 'competitor-iinsight',
    _type: 'competitorPage',
    title: 'TesseractApps vs iinsight',
    slug: { _type: 'slug', current: 'iinsight' },
    competitorName: 'iinsight',
    order: 5,
    heroHeading: 'TesseractApps vs iinsight',
    heroSubtitle: 'Integrated NDIS operations vs a standalone client database. One platform for rostering, participant management, and claiming.',
    aboutHeading: 'About TesseractApps',
    aboutBody: DEFAULT_ABOUT_BODY,
    aboutTrustBadges: DEFAULT_ABOUT_TRUST_BADGES,
    awardBadges: DEFAULT_AWARD_BADGES,
    comparisonCategories: DEFAULT_COMPARISON_CATEGORIES,
    switchSteps: DEFAULT_SWITCH_STEPS,
    rightChoiceHeading: 'When TesseractApps Is the Right Choice',
    rightChoiceItems: DEFAULT_RIGHT_CHOICE_ITEMS,
    ctaHeading: 'See How TesseractApps Compares in Practice',
    ctaDescription: DEFAULT_CTA_DESCRIPTION,
    seo: {
      _type: 'seo',
      metaTitle: 'TesseractApps vs iinsight | NDIS Software Comparison',
      metaDescription: 'Compare TesseractApps vs iinsight. Full NDIS rostering, SCHADS Award compliance, and integrated claiming against a client management-only tool.',
    },
  },

  // 6. MYP (Manage Your People)
  {
    _id: 'competitor-myp',
    _type: 'competitorPage',
    title: 'TesseractApps vs MYP (Manage Your People)',
    slug: { _type: 'slug', current: 'myp' },
    competitorName: 'MYP (Manage Your People)',
    order: 6,
    heroHeading: 'TesseractApps vs MYP',
    heroSubtitle: 'NDIS-native workforce management vs a general HR platform. Built specifically for the NDIS compliance and operational model.',
    aboutHeading: 'About TesseractApps',
    aboutBody: DEFAULT_ABOUT_BODY,
    aboutTrustBadges: DEFAULT_ABOUT_TRUST_BADGES,
    awardBadges: DEFAULT_AWARD_BADGES,
    comparisonCategories: DEFAULT_COMPARISON_CATEGORIES,
    switchSteps: DEFAULT_SWITCH_STEPS,
    rightChoiceHeading: 'When TesseractApps Is the Right Choice',
    rightChoiceItems: DEFAULT_RIGHT_CHOICE_ITEMS,
    ctaHeading: 'See How TesseractApps Compares in Practice',
    ctaDescription: DEFAULT_CTA_DESCRIPTION,
    seo: {
      _type: 'seo',
      metaTitle: 'TesseractApps vs MYP (Manage Your People) | NDIS Software Comparison',
      metaDescription: 'TesseractApps vs MYP (Manage Your People) for NDIS providers — compare NDIS-specific rostering, claiming, and participant management.',
    },
  },

  // 7. Brevity Care Software
  {
    _id: 'competitor-brevity-care',
    _type: 'competitorPage',
    title: 'TesseractApps vs Brevity Care Software',
    slug: { _type: 'slug', current: 'brevity-care' },
    competitorName: 'Brevity Care Software',
    order: 7,
    heroHeading: 'TesseractApps vs Brevity Care Software',
    heroSubtitle: 'Scalable NDIS platform vs a rostering-first tool. Full participant management, NDIS claiming, and compliance built in.',
    aboutHeading: 'About TesseractApps',
    aboutBody: DEFAULT_ABOUT_BODY,
    aboutTrustBadges: DEFAULT_ABOUT_TRUST_BADGES,
    awardBadges: DEFAULT_AWARD_BADGES,
    comparisonCategories: DEFAULT_COMPARISON_CATEGORIES,
    switchSteps: DEFAULT_SWITCH_STEPS,
    rightChoiceHeading: 'When TesseractApps Is the Right Choice',
    rightChoiceItems: DEFAULT_RIGHT_CHOICE_ITEMS,
    ctaHeading: 'See How TesseractApps Compares in Practice',
    ctaDescription: DEFAULT_CTA_DESCRIPTION,
    seo: {
      _type: 'seo',
      metaTitle: 'TesseractApps vs Brevity Care Software | NDIS Software Comparison',
      metaDescription: 'Compare TesseractApps vs Brevity Care Software. Complete NDIS operations — rostering, participant management, claiming, and compliance — in one platform.',
    },
  },

  // 8. GoodHuman
  {
    _id: 'competitor-goodhuman',
    _type: 'competitorPage',
    title: 'TesseractApps vs GoodHuman',
    slug: { _type: 'slug', current: 'goodhuman' },
    competitorName: 'GoodHuman',
    order: 8,
    heroHeading: 'TesseractApps vs GoodHuman',
    heroSubtitle: 'Enterprise NDIS operations vs a participant engagement platform. Comprehensive compliance, rostering, and claiming without gaps.',
    aboutHeading: 'About TesseractApps',
    aboutBody: DEFAULT_ABOUT_BODY,
    aboutTrustBadges: DEFAULT_ABOUT_TRUST_BADGES,
    awardBadges: DEFAULT_AWARD_BADGES,
    comparisonCategories: DEFAULT_COMPARISON_CATEGORIES,
    switchSteps: DEFAULT_SWITCH_STEPS,
    rightChoiceHeading: 'When TesseractApps Is the Right Choice',
    rightChoiceItems: DEFAULT_RIGHT_CHOICE_ITEMS,
    ctaHeading: 'See How TesseractApps Compares in Practice',
    ctaDescription: DEFAULT_CTA_DESCRIPTION,
    seo: {
      _type: 'seo',
      metaTitle: 'TesseractApps vs GoodHuman | NDIS Software Comparison',
      metaDescription: 'TesseractApps vs GoodHuman for NDIS providers — compare platform depth for rostering, SCHADS compliance, NDIS claiming, and incident reporting.',
    },
  },

  // 9. CareMaster
  {
    _id: 'competitor-caremaster',
    _type: 'competitorPage',
    title: 'TesseractApps vs CareMaster',
    slug: { _type: 'slug', current: 'caremaster' },
    competitorName: 'CareMaster',
    order: 9,
    heroHeading: 'TesseractApps vs CareMaster',
    heroSubtitle: 'Modern NDIS platform vs legacy software. Purpose-built for current NDIS requirements with Salesforce-grade infrastructure.',
    aboutHeading: 'About TesseractApps',
    aboutBody: DEFAULT_ABOUT_BODY,
    aboutTrustBadges: DEFAULT_ABOUT_TRUST_BADGES,
    awardBadges: DEFAULT_AWARD_BADGES,
    comparisonCategories: DEFAULT_COMPARISON_CATEGORIES,
    switchSteps: DEFAULT_SWITCH_STEPS,
    rightChoiceHeading: 'When TesseractApps Is the Right Choice',
    rightChoiceItems: DEFAULT_RIGHT_CHOICE_ITEMS,
    ctaHeading: 'See How TesseractApps Compares in Practice',
    ctaDescription: DEFAULT_CTA_DESCRIPTION,
    seo: {
      _type: 'seo',
      metaTitle: 'TesseractApps vs CareMaster | NDIS Software Comparison',
      metaDescription: 'Compare TesseractApps vs CareMaster. NDIS-native rostering, claiming, and compliance on Salesforce Hyperforce vs an older generation platform.',
    },
  },

  // 10. Splose
  {
    _id: 'competitor-splose',
    _type: 'competitorPage',
    title: 'TesseractApps vs Splose',
    slug: { _type: 'slug', current: 'splose' },
    competitorName: 'Splose',
    order: 10,
    heroHeading: 'TesseractApps vs Splose',
    heroSubtitle: 'NDIS operations platform vs allied health practice software. Integrated rostering, support worker management, and NDIS claiming.',
    aboutHeading: 'About TesseractApps',
    aboutBody: DEFAULT_ABOUT_BODY,
    aboutTrustBadges: DEFAULT_ABOUT_TRUST_BADGES,
    awardBadges: DEFAULT_AWARD_BADGES,
    comparisonCategories: DEFAULT_COMPARISON_CATEGORIES,
    switchSteps: DEFAULT_SWITCH_STEPS,
    rightChoiceHeading: 'When TesseractApps Is the Right Choice',
    rightChoiceItems: DEFAULT_RIGHT_CHOICE_ITEMS,
    ctaHeading: 'See How TesseractApps Compares in Practice',
    ctaDescription: DEFAULT_CTA_DESCRIPTION,
    seo: {
      _type: 'seo',
      metaTitle: 'TesseractApps vs Splose | NDIS Software Comparison',
      metaDescription: 'TesseractApps vs Splose for NDIS providers — compare allied health and disability support management, rostering, and NDIS claiming capabilities.',
    },
  },

  // 11. AlayaCare
  {
    _id: 'competitor-alayacare',
    _type: 'competitorPage',
    title: 'TesseractApps vs AlayaCare',
    slug: { _type: 'slug', current: 'alayacare' },
    competitorName: 'AlayaCare',
    order: 11,
    heroHeading: 'TesseractApps vs AlayaCare',
    heroSubtitle: 'Australian NDIS-native platform vs international home care software. Purpose-built for NDIS compliance and SCHADS obligations.',
    aboutHeading: 'About TesseractApps',
    aboutBody: DEFAULT_ABOUT_BODY,
    aboutTrustBadges: DEFAULT_ABOUT_TRUST_BADGES,
    awardBadges: DEFAULT_AWARD_BADGES,
    comparisonCategories: DEFAULT_COMPARISON_CATEGORIES,
    switchSteps: DEFAULT_SWITCH_STEPS,
    rightChoiceHeading: 'When TesseractApps Is the Right Choice',
    rightChoiceItems: DEFAULT_RIGHT_CHOICE_ITEMS,
    ctaHeading: 'See How TesseractApps Compares in Practice',
    ctaDescription: DEFAULT_CTA_DESCRIPTION,
    seo: {
      _type: 'seo',
      metaTitle: 'TesseractApps vs AlayaCare | NDIS Software Comparison',
      metaDescription: 'Compare TesseractApps vs AlayaCare for NDIS providers. NDIS-native Australian platform vs an internationally-built home care system.',
    },
  },

  // 12. FieldWorker
  {
    _id: 'competitor-fieldworker',
    _type: 'competitorPage',
    title: 'TesseractApps vs FieldWorker',
    slug: { _type: 'slug', current: 'fieldworker' },
    competitorName: 'FieldWorker',
    order: 12,
    heroHeading: 'TesseractApps vs FieldWorker',
    heroSubtitle: 'Integrated NDIS platform vs field service management software. Native SCHADS, participant management, and NDIS claiming built in.',
    aboutHeading: 'About TesseractApps',
    aboutBody: DEFAULT_ABOUT_BODY,
    aboutTrustBadges: DEFAULT_ABOUT_TRUST_BADGES,
    awardBadges: DEFAULT_AWARD_BADGES,
    comparisonCategories: DEFAULT_COMPARISON_CATEGORIES,
    switchSteps: DEFAULT_SWITCH_STEPS,
    rightChoiceHeading: 'When TesseractApps Is the Right Choice',
    rightChoiceItems: DEFAULT_RIGHT_CHOICE_ITEMS,
    ctaHeading: 'See How TesseractApps Compares in Practice',
    ctaDescription: DEFAULT_CTA_DESCRIPTION,
    seo: {
      _type: 'seo',
      metaTitle: 'TesseractApps vs FieldWorker | NDIS Software Comparison',
      metaDescription: 'TesseractApps vs FieldWorker for NDIS providers — compare NDIS-specific compliance, rostering, participant management, and claiming capabilities.',
    },
  },

  // 13. Visual Care
  {
    _id: 'competitor-visual-care',
    _type: 'competitorPage',
    title: 'TesseractApps vs Visual Care',
    slug: { _type: 'slug', current: 'visual-care' },
    competitorName: 'Visual Care',
    order: 13,
    heroHeading: 'TesseractApps vs Visual Care',
    heroSubtitle: 'Modern NDIS platform vs legacy care software. Salesforce Hyperforce infrastructure, SCHADS compliance, and integrated NDIS claiming.',
    aboutHeading: 'About TesseractApps',
    aboutBody: DEFAULT_ABOUT_BODY,
    aboutTrustBadges: DEFAULT_ABOUT_TRUST_BADGES,
    awardBadges: DEFAULT_AWARD_BADGES,
    comparisonCategories: DEFAULT_COMPARISON_CATEGORIES,
    switchSteps: DEFAULT_SWITCH_STEPS,
    rightChoiceHeading: 'When TesseractApps Is the Right Choice',
    rightChoiceItems: DEFAULT_RIGHT_CHOICE_ITEMS,
    ctaHeading: 'See How TesseractApps Compares in Practice',
    ctaDescription: DEFAULT_CTA_DESCRIPTION,
    seo: {
      _type: 'seo',
      metaTitle: 'TesseractApps vs Visual Care | NDIS Software Comparison',
      metaDescription: 'Compare TesseractApps vs Visual Care. Modern Salesforce-native NDIS platform vs an older generation disability software system.',
    },
  },

]

// ---------------------------------------------------------------------------
// Main — single-pass seeding (no cross-references)
// ---------------------------------------------------------------------------

async function seed() {
  console.log(`\n🌱  Seeding competitor pages into dataset "${dataset}" on project "${projectId}"...\n`)

  let created = 0
  let errors = 0

  for (const doc of competitorPages) {
    try {
      await client.createOrReplace(doc)
      console.log(`  ✅  ${doc._id}  (/tesseract-vs/${doc.slug.current})`)
      created++
    } catch (err) {
      console.error(`  ❌  ${doc._id}: ${err.message}`)
      errors++
    }
  }

  console.log(`\n📊  Done: ${created} competitor pages created, ${errors} errors.\n`)

  if (errors === 0) {
    console.log('🎉  All 13 competitor page documents seeded successfully!')
    console.log('')
    console.log('All compare routes:')
    competitorPages.forEach((doc) => {
      console.log(`  /tesseract-vs/${doc.slug.current}`)
    })
    console.log('')
    console.log('Next steps:')
    console.log('  → Navigate to /tesseract-vs-shiftcare to verify the first page')
    console.log('  → Go to /studio → Competitor Pages to review and edit content')
    console.log('  → Run this script again at any time — it is fully idempotent')
    console.log('')
  } else {
    console.log('⚠️   Some documents failed. Check errors above and re-run to retry.\n')
    process.exit(1)
  }
}

seed().catch((err) => {
  console.error('Fatal error:', err)
  process.exit(1)
})
