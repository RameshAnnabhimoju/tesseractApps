/**
 * Sanity Seed Script — Solution Pages (4 BY CARE TYPE documents)
 *
 * Usage:
 *   1. Add your write token to .env.local:
 *        SANITY_API_WRITE_TOKEN=skXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
 *   2. Run:
 *        npm run seed:solutions
 *      or directly:
 *        node scripts/seed-solution-pages.mjs
 *
 * Notes:
 *   - Safe to run multiple times (uses _id-based upserts via createOrReplace)
 *   - relatedSolutions use deterministic _id refs — all 4 docs must exist for refs to resolve
 *   - Two-pass: Pass 1 creates all docs without relatedSolutions, Pass 2 patches them
 *   - After seeding, visit /studio → Solution Page to review content
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
// Helpers
// ---------------------------------------------------------------------------

let _keyCounter = 1
function key() {
  return `sol${String(_keyCounter++).padStart(6, '0')}`
}

function ref(id) {
  return { _key: key(), _type: 'reference', _ref: id }
}

// ---------------------------------------------------------------------------
// ── SOLUTION PAGES — 4 BY CARE TYPE documents ───────────────────────────────
// ---------------------------------------------------------------------------

const solutionPages = [

  // ── 1. Disability Support (NDIS Providers) ─────────────────────────────────
  {
    _id: 'solution-disability-support-ndis',
    _type: 'solutionPage',
    title: 'Disability Support (NDIS Providers)',
    slug: { _type: 'slug', current: 'disability-support-ndis' },
    navCategory: 'BY CARE TYPE',
    order: 1,
    heroHeading: 'Built for NDIS Disability Support Providers.',
    heroSubtitle: 'One connected platform — rostering, compliance, participant management, and NDIS claiming — designed specifically for the complexity of disability services.',
    whoIsThisFor: `This solution is for registered NDIS providers delivering disability support services in Australia. Whether you operate SIL homes, community participation programs, in-home support, or day programs — if you are delivering funded NDIS supports to participants, this is built for you.

You are managing support workers, participant care plans, NDIS claiming, SCHADS Award obligations, incident reporting, and NDIS Quality and Safeguards Commission compliance. You need a platform that understands the difference between a sleepover shift and an active night, knows what a SIRS report is, and does not require you to fit your operations into a generic HR or scheduling tool.`,
    keyBenefits: [
      'Roster by participant needs and worker qualifications — not just availability',
      'NDIS claiming connected directly to service delivery records',
      'Incident and SIRS reporting built into the support worker workflow',
      'SCHADS Award rules enforced at scheduling, not discovered at payroll',
      'Participant care plans, goals, and progress notes in one place',
      'Compliance audit readiness without last-minute document chases',
      'Real-time visibility across all sites, teams, and service types',
    ],
    howWeSupport: `TesseractApps was built from the ground up for NDIS providers. Every module — rostering, timesheets, participant management, claiming, incident reporting — is connected in a single platform that reflects how disability services actually operate.

Support workers complete their shifts, record progress notes, and clock out via the mobile app. That data flows directly into timesheets, NDIS service bookings, and progress records — no re-entry, no data gaps. When a SIRS-reportable incident occurs, the worker captures it on the same platform they use for everything else. It reaches the coordinator, the compliance team, and the Commission on the right timeline.

Rostering automatically matches participants to qualified, credentialed workers. SCHADS rules are embedded in the scheduling engine — overtime, breaks, and penalty rates are calculated before a shift is confirmed. Roster gaps broadcast to available workers instantly.

Claiming connects service delivery directly to NDIS plan periods and budget limits. Coordinators see live budget positions before booking more supports.`,
    whatYouGet: [
      'NDIS-specific rostering engine — qualifications, participant matching, SCHADS Award',
      'Mobile app for support workers — clock in/out, progress notes, incident capture',
      'Participant management — care plans, goals, support histories, contact records',
      'NDIS claiming and invoicing connected to service delivery records',
      'Incident and SIRS reporting with configurable escalation workflows',
      'Compliance & audit readiness dashboard — expiry alerts, gap detection',
      'Timesheet and payroll alignment — SCHADS-compliant, no manual reconciliation',
      'Multi-site visibility — roster, compliance, and finance across all locations',
      'Role-calibrated dashboards for coordinators, managers, and executives',
    ],
    isThisRightForYou: [
      'You are a registered NDIS provider delivering direct support services',
      'You manage SCHADS Award obligations and SIL or overnight support programs',
      'You have had a compliance incident or audit preparation issue in the last 12 months',
      'Your rostering, claiming, and participant records are in separate systems',
      'You are spending significant time manually reconciling timesheets with NDIS claiming',
      'You want to grow your client base without proportionally growing your admin team',
    ],
    relatedSolutions: [
      ref('solution-support-coordination'),
      ref('solution-allied-health'),
      ref('solution-sil'),
    ],
    seo: {
      _type: 'seo',
      metaTitle: 'NDIS Disability Support Provider Software | TesseractApps',
      metaDescription: 'Rostering, participant management, NDIS claiming, SIRS reporting, and SCHADS compliance — one connected platform built for NDIS disability support providers.',
    },
  },

  // ── 2. Support Coordination ────────────────────────────────────────────────
  {
    _id: 'solution-support-coordination',
    _type: 'solutionPage',
    title: 'Support Coordination',
    slug: { _type: 'slug', current: 'support-coordination' },
    navCategory: 'BY CARE TYPE',
    order: 2,
    heroHeading: 'Support Coordination That Puts Participants First.',
    heroSubtitle: 'Manage participant plans, provider relationships, budget positions, and reporting from a single connected platform — built for support coordinators and Specialist Support Coordinators.',
    whoIsThisFor: `This solution is for support coordinators and Specialist Support Coordinators (SSCs) working with NDIS participants to implement their plans, connect them with providers, and navigate complex support needs.

You are managing a caseload of participants, tracking their NDIS plan budgets across multiple support categories, coordinating with multiple providers, documenting progress toward goals, and preparing NDIS plan review reports. You may be employed by a registered provider or operating as an independent coordinator of supports. Either way, the core challenge is the same: too many participants, too many providers, too many budgets, and not enough time.`,
    keyBenefits: [
      'Live NDIS budget tracking across all support categories per participant',
      'Provider engagement and service booking coordination in one place',
      'Progress notes and goal tracking connected directly to NDIS plan outcomes',
      'Plan review reporting supported by structured progress data',
      'Caseload visibility — see all participants, budgets, and next actions at a glance',
      'Secure participant and family communication without personal email',
    ],
    howWeSupport: `TesseractApps gives support coordinators a purpose-built workspace — not a generic case management tool retrofitted for NDIS.

Each participant has a unified profile: NDIS plan details, support categories and budgets, service providers, progress notes, goals, and upcoming appointments. Budget positions update in real time as services are booked and delivered. Coordinators see exactly how much is remaining in each category before booking additional supports — and get alerts when budgets are at risk of under- or over-utilisation.

Progress notes are structured against participant goals from their NDIS plan, so plan review evidence is built as you work rather than assembled in a panic before review. Coordinators can generate progress summaries and utilisation reports directly from the platform.

Secure messaging connects coordinators with participants, families, and providers — with full audit trails and no dependence on personal email or mobile numbers.`,
    whatYouGet: [
      'Participant plan profiles with NDIS goals, budgets, and support categories',
      'Real-time NDIS budget tracking — category-level utilisation and alerts',
      'Service booking and provider coordination workflows',
      'Progress notes structured against NDIS plan goals',
      'Plan review report generation from progress and utilisation data',
      'Caseload dashboard — all participants, actions, and budget status in one view',
      'Secure messaging with participants, families, and providers',
      'Document management — plans, provider agreements, assessments',
    ],
    isThisRightForYou: [
      'You manage a caseload of NDIS participants with complex or multiple support needs',
      'You track participant budgets across multiple support categories manually or in spreadsheets',
      'You spend significant time preparing plan review reports or utilisation summaries',
      'You coordinate between multiple providers and struggle to maintain a complete picture',
      'You are looking for a platform that understands the NDIS support coordination model',
    ],
    relatedSolutions: [
      ref('solution-disability-support-ndis'),
      ref('solution-allied-health'),
      ref('solution-sil'),
    ],
    seo: {
      _type: 'seo',
      metaTitle: 'NDIS Support Coordination Software | TesseractApps',
      metaDescription: 'Manage participant plans, NDIS budget tracking, provider coordination, and plan review reporting. Built for support coordinators and Specialist Support Coordinators.',
    },
  },

  // ── 3. Allied Health Services ──────────────────────────────────────────────
  {
    _id: 'solution-allied-health',
    _type: 'solutionPage',
    title: 'Allied Health Services',
    slug: { _type: 'slug', current: 'allied-health-services' },
    navCategory: 'BY CARE TYPE',
    order: 3,
    heroHeading: 'Allied Health Practice Management for NDIS Providers.',
    heroSubtitle: 'Appointment scheduling, clinical notes, NDIS claiming, and compliance in one platform — built for physiotherapists, occupational therapists, speech pathologists, and allied health practices in the NDIS space.',
    whoIsThisFor: `This solution is for allied health practices and clinicians delivering NDIS-funded supports — including physiotherapy, occupational therapy, speech pathology, psychology, dietetics, and other allied health disciplines registered with the NDIS Commission.

You are managing appointment scheduling across multiple clinicians, capturing clinical session notes, processing NDIS service bookings, and submitting claims against participant plan budgets. You may also provide assessments and reports for plan reviews, capacity building, and assistive technology applications. The NDIS introduces specific claiming rules, funding categories, and registration requirements that generic practice management software does not handle natively.`,
    keyBenefits: [
      'NDIS-aware appointment scheduling across disciplines and clinicians',
      'Session notes and clinical documentation linked to participant NDIS plans',
      'NDIS claiming connected to service delivery — no manual re-entry',
      'Capacity building and assistive technology support category management',
      'Participant budget visibility before booking — no over-service surprises',
      'NDIS registration and compliance requirements tracked in one place',
    ],
    howWeSupport: `TesseractApps connects the clinical and administrative sides of an allied health practice delivering NDIS supports — from the first appointment booking through to NDIS claim submission.

Appointment scheduling is NDIS-aware: clinicians see participant plan details, support budgets, and remaining funding before booking sessions. Over-service alerts prevent accidental budget exhaustion. Session notes are captured in structured templates that generate NDIS-compliant clinical documentation — usable for progress reporting, plan reviews, and assistive technology applications.

NDIS claiming flows directly from completed appointments and clinician sign-off — no separate claiming system, no double-entry. The platform manages NDIS registration groups, support categories, and line items for allied health disciplines.

Compliance documentation — clinician credentials, registration expiry, NDIS registration requirements — is tracked proactively, with alerts before expiry rather than after.`,
    whatYouGet: [
      'Appointment scheduling with NDIS plan and budget visibility per participant',
      'Clinical session notes in NDIS-compliant structured templates',
      'NDIS claiming connected directly to completed, signed-off sessions',
      'Support category management for Capacity Building, Core, and AT funding',
      'Participant budget tracking — live utilisation across all booked services',
      'Clinician credential and NDIS registration expiry tracking',
      'Progress note generation for plan reviews and functional assessments',
      'Multi-discipline, multi-site scheduling from a single platform',
    ],
    isThisRightForYou: [
      'You are an allied health practice providing NDIS-funded services',
      'Your appointment scheduling, clinical notes, and NDIS claiming are in separate systems',
      'You spend time manually tracking participant budget positions before booking sessions',
      'Your clinicians need to produce NDIS-compliant documentation without administrative overhead',
      'You want NDIS claiming to flow automatically from service delivery records',
    ],
    relatedSolutions: [
      ref('solution-disability-support-ndis'),
      ref('solution-support-coordination'),
      ref('solution-sil'),
    ],
    seo: {
      _type: 'seo',
      metaTitle: 'NDIS Allied Health Practice Management Software | TesseractApps',
      metaDescription: 'Appointment scheduling, clinical documentation, NDIS claiming, and compliance for allied health practices. Built for NDIS physiotherapy, OT, speech pathology providers.',
    },
  },

  // ── 4. Supported Independent Living (SIL) ─────────────────────────────────
  {
    _id: 'solution-sil',
    _type: 'solutionPage',
    title: 'Supported Independent Living (SIL)',
    slug: { _type: 'slug', current: 'sil' },
    navCategory: 'BY CARE TYPE',
    order: 4,
    heroHeading: 'Purpose-Built for SIL Providers.',
    heroSubtitle: 'Manage house rosters, sleepover and active night classifications, participant daily living support, and SIL-specific compliance — from a single connected platform.',
    whoIsThisFor: `This solution is for NDIS registered providers delivering Supported Independent Living (SIL) supports — funding category 01 Assistance with Daily Life — in shared and individual living arrangements.

SIL is the most operationally complex support type in the NDIS. You are managing 24/7 house rosters with SCHADS Award sleepover and active night rules, shift handovers, daily progress notes for multiple residents per shift, medication and health monitoring, incident reporting, and continuous NDIS Quality and Safeguards Commission compliance obligations. Generic scheduling software cannot handle this. SIL requires a platform that understands the specific rules, rhythms, and documentation obligations of supported accommodation.`,
    keyBenefits: [
      'SIL house rostering with SCHADS sleepover and active night classification built in',
      'Shift handover notes and daily progress notes per resident, per shift',
      'Medication monitoring and health alerts at the house level',
      'NDIS claiming for 24/7 supports connected to rostered and worked hours',
      'Incident reporting with SIRS escalation from the house floor',
      'Compliance documentation — incident trends, restrictive practices, regulatory reporting',
      'Participant daily living goals tracked through progress notes over time',
    ],
    howWeSupport: `TesseractApps handles the specific operational demands of SIL — from the support worker on the house floor to the compliance team at head office.

SIL rostering is built around SCHADS sleepover and active night rules. Sleepovers are classified correctly at the point of scheduling — not reinterpreted at payroll. Active night transitions trigger automatic reclassification and cost adjustment. Roster gaps in a 24/7 environment are filled through broadcast to available, qualified workers with the right credentials for that house.

Support workers complete shift handovers, daily progress notes per resident, medication records, and incident reports through the same mobile app they use to clock in. Data flows to coordinators and compliance teams in real time.

NDIS claiming for SIL connects rostered supports to NDIS plan budgets, service bookings, and claiming cycles — with budget position visibility before confirming additional roster hours.`,
    whatYouGet: [
      'SIL house rostering — 24/7 scheduling with SCHADS sleepover/active night classification',
      'Shift handover workflows with structured notes per resident',
      'Daily progress notes for multiple residents per shift, from the mobile app',
      'Medication monitoring, health alerts, and health record management',
      'Incident capture and SIRS reporting with escalation workflows',
      'NDIS SIL claiming connected to rostered and worked hours',
      'Participant goal and daily living tracking across the SIL program',
      'Compliance dashboard — incident trends, restrictive practices register, regulatory reporting',
      'Multi-house visibility from a single operations dashboard',
    ],
    isThisRightForYou: [
      'You operate SIL houses or specialist disability accommodation (SDA)',
      'Your 24/7 rostering and SCHADS sleepover classifications are managed manually or in spreadsheets',
      'Support workers use paper or informal digital notes for shift handovers and progress records',
      'Your SIL claiming and rostering data are in separate systems requiring manual reconciliation',
      'You want real-time visibility across all your houses without being on-site',
    ],
    relatedSolutions: [
      ref('solution-disability-support-ndis'),
      ref('solution-support-coordination'),
      ref('solution-allied-health'),
    ],
    seo: {
      _type: 'seo',
      metaTitle: 'SIL Software for NDIS Supported Independent Living Providers | TesseractApps',
      metaDescription: 'SIL house rostering, sleepover classification, shift handovers, progress notes, incident reporting, and NDIS claiming. Built for supported independent living providers.',
    },
  },

]

// ---------------------------------------------------------------------------
// ── MAIN — two-pass seeding ─────────────────────────────────────────────────
// Pass 1: create all documents without relatedSolutions (avoids circular refs)
// Pass 2: patch relatedSolutions onto each document now that all exist
// ---------------------------------------------------------------------------

async function seed() {
  console.log(`\n🌱  Seeding solution pages into dataset "${dataset}" on project "${projectId}"...\n`)

  // ── Pass 1: create all docs without relatedSolutions ─────────────────────
  console.log(`── Pass 1: Create base documents (${solutionPages.length}) ──────────────`)

  let created = 0
  let errors = 0

  for (const doc of solutionPages) {
    const { relatedSolutions: _omit, ...baseDoc } = doc
    try {
      await client.createOrReplace(baseDoc)
      console.log(`  ✅  ${doc._id}  (${doc.navCategory} / ${doc.title})`)
      created++
    } catch (err) {
      console.error(`  ❌  ${doc._id}: ${err.message}`)
      errors++
    }
  }

  if (errors > 0) {
    console.log(`\n❌  Pass 1 failed with ${errors} error(s). Aborting before patching references.\n`)
    process.exit(1)
  }

  // ── Pass 2: patch relatedSolutions now that all docs exist ────────────────
  console.log(`\n── Pass 2: Patch relatedSolutions ──────────────────────────────`)

  let patched = 0
  let patchErrors = 0

  for (const doc of solutionPages) {
    if (!doc.relatedSolutions || doc.relatedSolutions.length === 0) continue
    try {
      await client
        .patch(doc._id)
        .set({ relatedSolutions: doc.relatedSolutions })
        .commit()
      console.log(`  ✅  ${doc._id}  → ${doc.relatedSolutions.length} related solutions linked`)
      patched++
    } catch (err) {
      console.error(`  ❌  ${doc._id}: ${err.message}`)
      patchErrors++
    }
  }

  console.log(`\n📊  Done: ${created} documents created, ${patched} patched with related solutions, ${patchErrors} patch errors.\n`)

  if (patchErrors === 0) {
    console.log('🎉  All 4 solution page documents seeded successfully!')
    console.log('')
    console.log('Next steps:')
    console.log('  → Navigate to /solutions/disability-support-ndis to verify the first page')
    console.log('  → Go to /studio → Solution Page to review content and related solutions')
    console.log('  → Run this script again at any time — it is fully idempotent')
    console.log('')
    console.log('All solution routes:')
    solutionPages.forEach(doc => {
      console.log(`  /solutions/${doc.slug.current}`)
    })
    console.log('')
  } else {
    console.log('⚠️   Some patch operations failed. Check the errors above and re-run to retry.\n')
    process.exit(1)
  }
}

seed().catch((err) => {
  console.error('Fatal error:', err)
  process.exit(1)
})
