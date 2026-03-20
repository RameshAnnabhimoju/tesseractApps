/**
 * Sanity Seed Script — Capability Pages (9 documents)
 *
 * Usage:
 *   1. Add your write token to .env.local:
 *        SANITY_API_WRITE_TOKEN=skXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
 *   2. Run:
 *        node scripts/seed-capability-pages.mjs
 *
 * Notes:
 *   - Safe to run multiple times (uses _id-based upserts via createOrReplace)
 *   - relatedCapabilities use deterministic _id refs — all 9 docs must exist for refs to resolve
 *   - After seeding, visit /studio → Capability Page to review and adjust relatedCapabilities
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
  return `cap${String(_keyCounter++).padStart(6, '0')}`
}

function ref(id) {
  return { _key: key(), _type: 'reference', _ref: id }
}

// ---------------------------------------------------------------------------
// ── CAPABILITY PAGES — 9 documents ──────────────────────────────────────────
// ---------------------------------------------------------------------------

const capabilityPages = [

  // ── 1. Rostering & Scheduling ────────────────────────────────────────────
  {
    _id: 'capability-rostering-scheduling',
    _type: 'capabilityPage',
    title: 'Rostering & Scheduling',
    slug: { _type: 'slug', current: 'rostering-scheduling' },
    navGroup: 'Workforce',
    order: 1,
    heroHeading: 'Rostering That Actually Works for Disability Services.',
    heroSubtitle: 'Auto-schedule by qualifications, fill gaps instantly, manage SIL sleepovers, and enforce SCHADS rules — without the spreadsheets.',
    problemStatement: `A support worker calls in sick at 6am. You have 23 shifts to cover across 4 sites. Your roster is a spreadsheet. Your qualification records are in a filing cabinet. You have 90 minutes.

This is the daily reality for most NDIS roster managers. The problem isn't effort — it's that the tools they're using weren't built for disability services. They were built for hospitality, retail, or generic shift work. NDIS rostering has credential requirements, participant matching rules, SCHADS Award obligations, SIL sleepover classifications, and last-minute complexity that generic tools simply cannot handle.

The result: overtime, compliance exposure, staff burnout, and participant continuity breakdowns.`,
    whatMattersMost: [
      'Every shift filled by a qualified, credentialed support worker — automatically',
      'SIL sleepovers and active nights managed without spreadsheet gymnastics',
      'SCHADS Award rules enforced at the point of scheduling, not discovered at payroll',
      'Broadcast open shifts to available, qualified workers instantly',
      'Participant preferences and support worker history respected in every assignment',
      'Roster changes trigger real-time notifications — no phone trees required',
    ],
    howWeSolveThis: `TesseractApps auto-schedules by matching participants to support workers based on qualifications, availability, participant preferences, and SCHADS obligations — before a roster manager even looks at the screen.

When a shift gap opens, the system identifies qualified, available workers and broadcasts the open shift immediately. Managers approve or adjust. Workers confirm from the app. The roster is live.

SIL sleepovers and active night shifts are classified correctly at the point of creation — not reinterpreted at payroll. SCHADS rules are embedded in the scheduling engine, not enforced afterwards. Credential expiry warnings surface before a credentialed worker is rostered, not after they've already worked the shift.`,
    whatYouGet: [
      'Auto-scheduling engine matched to qualifications, availability, and participant needs',
      'Open shift broadcast with instant worker notification and app-based confirmation',
      'SIL sleepover and active night classification built into the scheduling flow',
      'SCHADS Award engine — penalty rates, break rules, and overtime enforced at scheduling',
      'Credential expiry tracking with pre-scheduling warnings',
      'Participant preference profiles linked to roster assignments',
      'Real-time roster change notifications for all affected workers',
      'Multi-site roster visibility from a single dashboard',
    ],
    isThisRightForYou: [
      'You spend more than 2 hours per week manually filling roster gaps',
      'You have had a compliance incident because a worker lacked current credentials',
      'Your roster is built in a spreadsheet or a generic scheduling tool',
      'You manage SIL or overnight shifts and tracking classifications is manual',
      'Workers regularly find out about roster changes by phone or text message',
    ],
    relatedCapabilities: [
      ref('capability-timesheets-payroll'),
      ref('capability-workforce-management'),
      ref('capability-compliance-audit'),
    ],
    seo: {
      _type: 'seo',
      metaTitle: 'NDIS Rostering & Scheduling Software | TesseractApps',
      metaDescription: 'Auto-schedule by qualifications, manage SIL sleepovers, broadcast open shifts, and enforce SCHADS rules. Built for NDIS disability support providers.',
    },
  },

  // ── 2. Timesheets & Payroll Alignment ────────────────────────────────────
  {
    _id: 'capability-timesheets-payroll',
    _type: 'capabilityPage',
    title: 'Timesheets & Payroll Alignment',
    slug: { _type: 'slug', current: 'timesheets-payroll' },
    navGroup: 'Workforce',
    order: 2,
    heroHeading: 'Timesheets That Feed Payroll Correctly. Every Time.',
    heroSubtitle: 'Connect rostered hours to worked hours to payroll-ready data — with SCHADS Award classification built in, not bolted on.',
    problemStatement: `Payroll errors in disability services are not calculation mistakes. They are classification mistakes. A sleepover processed as an active shift. A Saturday shift paid at the wrong SCHADS penalty rate. A casual worker's hours miscategorised because the timesheet system didn't know they were employed under the Social, Community, Home Care and Disability Services Industry Award.

Most providers are running timesheets in one system, SCHADS classification in someone's head, and payroll in a third platform. The reconciliation happens in a spreadsheet. The errors surface at month end — or at an audit.`,
    whatMattersMost: [
      'Timesheets that automatically inherit SCHADS classification from the rostered shift',
      'Worked hours compared to rostered hours with variance flagging before approval',
      'Bulk timesheet approval without losing individual audit trail',
      'Clock-in/out data feeding timesheet records with geolocation verification',
      'Payroll export that maps directly to your payroll platform without manual translation',
      'Leave management integrated into timesheet calculations',
    ],
    howWeSolveThis: `In TesseractApps, a timesheet is not a separate record — it is the worked record of a rostered shift. When a shift is created with a SCHADS classification, that classification carries through to the timesheet and into the payroll export. There is no re-entry, no manual mapping, no interpretation layer.

Worked hours are compared to rostered hours automatically. Variances over a configurable threshold surface for manager review before the timesheet is approved. Clock-in and clock-out data from the mobile app reconciles against the rostered shift in real time.

At payroll run, a clean, mapped export feeds your payroll system. SCHADS penalty rates, leave entitlements, and ordinary hour classifications are already resolved.`,
    whatYouGet: [
      'SCHADS-aware timesheet generation from rostered shift data',
      'Rostered vs worked hours variance detection and flagging',
      'Bulk timesheet approval with individual audit trail preservation',
      'Mobile clock-in/out integration with GPS verification',
      'Leave management integrated into timesheet calculations',
      'Payroll-ready export mapped to your payroll platform',
      'Overtime and penalty rate visibility before payroll run',
      'Fortnightly and weekly payroll cycle support',
    ],
    isThisRightForYou: [
      'Your payroll team spends hours reconciling timesheets to rostered shifts each pay run',
      'You have had SCHADS classification errors surface at payroll or audit',
      'Timesheets and rostering live in separate systems with no automatic connection',
      'Your payroll export requires manual reformatting before it can be imported',
      'You have no automatic way to detect when a worker\'s hours don\'t match their roster',
    ],
    relatedCapabilities: [
      ref('capability-rostering-scheduling'),
      ref('capability-workforce-management'),
      ref('capability-ndis-claiming'),
    ],
    seo: {
      _type: 'seo',
      metaTitle: 'NDIS Timesheets & Payroll Alignment Software | TesseractApps',
      metaDescription: 'SCHADS-aware timesheets connected directly to rostering and payroll. Variance detection, bulk approval, and clean payroll export for NDIS providers.',
    },
  },

  // ── 3. Workforce Management ───────────────────────────────────────────────
  {
    _id: 'capability-workforce-management',
    _type: 'capabilityPage',
    title: 'Workforce Management',
    slug: { _type: 'slug', current: 'workforce-management' },
    navGroup: 'Workforce',
    order: 3,
    heroHeading: 'Your Entire Workforce. One Platform. Full Visibility.',
    heroSubtitle: 'Staff records, credential tracking, leave management, recruitment, and HR operations — unified so nothing falls through the cracks.',
    problemStatement: `The average NDIS provider manages a workforce that is 60–80% casual and part-time. Staff come and go. Credentials expire. Leave balances accumulate. Onboarding is ad-hoc. Training compliance is tracked in spreadsheets or not at all.

The consequence is not just administrative — it is operational. An expired Working With Children Check isn't discovered until the worker is already rostered. A leave request is approved without checking the roster impact. A new starter goes live in the system before their police check clears.

Workforce management in disability services requires a connected view of every worker record, qualification, availability, and operational status — not a collection of disconnected spreadsheets.`,
    whatMattersMost: [
      'Every worker\'s credential status visible before they are rostered',
      'Onboarding checklists that enforce compliance gates before system access is granted',
      'Leave requests that show roster impact at the point of submission',
      'Credential expiry alerts that surface with enough lead time to act',
      'Recruitment pipeline tracked from application through to first roster',
      'Training completion linked directly to credential records',
    ],
    howWeSolveThis: `TesseractApps maintains a single worker record that connects qualifications, availability, leave, roster history, and operational status. Every time a worker is rostered, the system checks their credential status in real time. Expired credentials block scheduling — not after the fact, at the point of entry.

Onboarding checklists are configurable and gate-controlled. A new worker cannot be rostered until their compliance requirements are met. Leave requests are submitted through the app and show the approving manager exactly which shifts are affected before approval.

Credential expiry alerts fire at configurable lead times. Training completions from the integrated LMS update credential records automatically.`,
    whatYouGet: [
      'Centralised worker records with real-time credential and availability status',
      'Configurable onboarding checklists with compliance gates before rostering access',
      'Leave management integrated with roster impact visibility',
      'Credential expiry alerts at configurable lead times',
      'Recruitment pipeline from job posting through to onboarding',
      'Training completion integration with credential record updates',
      'Worker performance tracking and shift history',
      'Role-based access controls for manager and worker-level permissions',
    ],
    isThisRightForYou: [
      'You have discovered an expired credential only after the worker was already rostered',
      'Your onboarding process has no system-level compliance gates',
      'Leave requests are approved without visibility of roster impact',
      'Credential tracking is managed in a spreadsheet outside your main system',
      'You have no automated way to track training completions against credential requirements',
    ],
    relatedCapabilities: [
      ref('capability-rostering-scheduling'),
      ref('capability-timesheets-payroll'),
      ref('capability-compliance-audit'),
    ],
    seo: {
      _type: 'seo',
      metaTitle: 'NDIS Workforce Management Software | TesseractApps',
      metaDescription: 'Manage staff records, credentials, leave, onboarding, and recruitment in one platform. Built for NDIS disability support providers.',
    },
  },

  // ── 4. Participant Management ─────────────────────────────────────────────
  {
    _id: 'capability-participant-management',
    _type: 'capabilityPage',
    title: 'Participant Management',
    slug: { _type: 'slug', current: 'participant-management' },
    navGroup: 'Participant & Care',
    order: 1,
    heroHeading: 'Every Participant. Every Plan. One Complete Record.',
    heroSubtitle: 'Participant profiles, support plans, goal tracking, case notes, and NDIS budget visibility — connected and accessible from anywhere.',
    problemStatement: `Participant records in most NDIS providers are fragmented. The support plan is in a PDF. The case notes are in a separate system. The NDIS budget is tracked in a spreadsheet. The risk assessment is in a filing cabinet. The support worker going to the shift has access to none of it.

This fragmentation creates safety risk and compliance exposure. When a participant's support needs change, the update may reach the care coordinator but not the support worker. When an NDIS audit requests a complete participant record, it has to be assembled from four different places.

Good participant management is not about storing more data — it is about making the right data available to the right person at the right time.`,
    whatMattersMost: [
      'A single participant record that support workers, coordinators, and managers all work from',
      'Support plans and care instructions accessible to the assigned support worker on shift',
      'NDIS budget tracking that shows remaining funds in real time',
      'Goal tracking that captures progress against NDIS plan goals over time',
      'Case notes that are structured, searchable, and attached to the participant record',
      'Risk assessments and behaviour support plans visible before a shift begins',
    ],
    howWeSolveThis: `TesseractApps creates a single participant record that connects every touchpoint: support plan, goals, case notes, risk assessments, budget tracking, shift history, and incident records. Every support worker assigned to a participant sees the information relevant to their role — no more, no less.

Case notes are structured for searchability and compliance. Budget tracking is automatic — as service agreements are delivered and invoices raised, the remaining NDIS budget updates in real time. Goal progress is captured through structured note types that map directly to NDIS plan goals.

When an audit occurs, the complete participant record is assembled and exportable from a single location.`,
    whatYouGet: [
      'Unified participant profiles with support plans, goals, and risk assessments',
      'Role-appropriate participant record access for support workers, coordinators, and managers',
      'NDIS budget tracking with real-time remaining funds visibility',
      'Structured case notes linked to participant goals and shift records',
      'Risk assessment and behaviour support plan access before shift commencement',
      'Goal progress tracking aligned to NDIS plan objectives',
      'Audit-ready participant record export',
      'Participant app access for goal tracking and communication',
    ],
    isThisRightForYou: [
      'Support workers go to shifts without access to current care instructions or risk assessments',
      'Your NDIS budget tracking happens in a spreadsheet outside your main system',
      'Case notes are stored in a system separate from the participant profile',
      'Assembling a complete participant record for an audit takes significant manual effort',
      'Goal progress is not systematically captured in a way that maps to the NDIS plan',
    ],
    relatedCapabilities: [
      ref('capability-incidents-sirs'),
      ref('capability-compliance-audit'),
      ref('capability-ndis-claiming'),
    ],
    seo: {
      _type: 'seo',
      metaTitle: 'NDIS Participant Management Software | TesseractApps',
      metaDescription: 'Unified participant records with support plans, goal tracking, NDIS budget visibility, and structured case notes. Built for NDIS disability support providers.',
    },
  },

  // ── 5. Incidents & SIRS ───────────────────────────────────────────────────
  {
    _id: 'capability-incidents-sirs',
    _type: 'capabilityPage',
    title: 'Incidents & SIRS',
    slug: { _type: 'slug', current: 'incidents-sirs' },
    navGroup: 'Participant & Care',
    order: 2,
    heroHeading: 'Incident Reporting That Meets NDIS Practice Standards.',
    heroSubtitle: 'Capture, classify, escalate, and report incidents with built-in SIRS compliance — so nothing is missed and no deadline is breached.',
    problemStatement: `The NDIS Commission's Serious Incident Response Scheme (SIRS) requires registered providers to report certain incidents within 24 hours. Others must be reported within 5 days. The classification of which incidents are reportable, and within what timeframe, is not always straightforward — and the consequences of getting it wrong range from regulatory action to registration suspension.

Most providers manage incident reporting through a combination of email, paper forms, and manual tracking in spreadsheets. When an incident occurs on a Friday afternoon, the classification decision and notification chain often falls to whoever is available — not whoever has the right information.

The result is late notifications, misclassified incidents, and audit findings that should have been preventable.`,
    whatMattersMost: [
      'Incidents classified at the point of entry against NDIS SIRS categories',
      'Automatic escalation workflows triggered by incident classification',
      'Reporting deadlines tracked and visible — 24-hour and 5-day thresholds surfaced',
      'Support worker incident reporting from mobile app, not a paper form',
      'Manager review and sign-off workflow built into the incident record',
      'Audit-ready incident register exportable in NDIS Commission format',
    ],
    howWeSolveThis: `TesseractApps guides the person lodging an incident through a classification workflow at the point of entry. Based on the incident type and participant impact, the system assigns the correct SIRS category and triggers the appropriate notification chain.

Reporting deadlines are tracked from the moment the incident is classified. A 24-hour reportable incident surfaces with a visible countdown to the compliance deadline. Managers and compliance leads receive automatic notifications aligned to the escalation workflow.

The incident register is always current, exportable, and structured for NDIS Commission reporting. When an audit occurs, the incident history for any participant or worker is available immediately — not assembled from email threads.`,
    whatYouGet: [
      'SIRS-aligned incident classification at point of entry',
      'Automatic escalation workflows triggered by incident type and severity',
      'Reporting deadline tracking — 24-hour and 5-day thresholds with visible countdowns',
      'Mobile incident reporting for support workers in the field',
      'Manager review and sign-off workflow within the incident record',
      'Incident register always current and exportable for NDIS Commission reporting',
      'Incident trend analysis and reporting for quality improvement',
      'Participant-level and worker-level incident history',
    ],
    isThisRightForYou: [
      'You have missed a SIRS reporting deadline or are not confident you have correctly classified all reportable incidents',
      'Incident reports are currently captured on paper or via email',
      'Your incident register is maintained separately from your participant and worker records',
      'You have no automatic escalation workflow when a serious incident is lodged',
      'Preparing an incident summary for an audit requires manual collation from multiple sources',
    ],
    relatedCapabilities: [
      ref('capability-participant-management'),
      ref('capability-compliance-audit'),
      ref('capability-dashboards-reporting'),
    ],
    seo: {
      _type: 'seo',
      metaTitle: 'NDIS Incident Reporting & SIRS Compliance Software | TesseractApps',
      metaDescription: 'SIRS-aligned incident classification, automatic escalation, and reporting deadline tracking. Audit-ready incident register for NDIS registered providers.',
    },
  },

  // ── 6. Compliance & Audit Readiness ──────────────────────────────────────
  {
    _id: 'capability-compliance-audit',
    _type: 'capabilityPage',
    title: 'Compliance & Audit Readiness',
    slug: { _type: 'slug', current: 'compliance-audit' },
    navGroup: 'Participant & Care',
    order: 3,
    heroHeading: 'Always Audit Ready. Not Just Before the Auditor Arrives.',
    heroSubtitle: 'Compliance evidence is generated by your daily operations — not assembled in a panic when the NDIS Commission announces a review.',
    problemStatement: `NDIS audits do not fail because providers are not trying to comply. They fail because compliance evidence is fragmented, manual, or assembled under pressure. The evidence that an auditor needs — credential records, incident logs, participant support plans, shift notes, policy acknowledgements — exists somewhere in the organisation. Retrieving it, formatting it, and presenting it coherently under a two-week audit timeline is a crisis management exercise, not a business process.

The NDIS Practice Standards require evidence of systematic compliance across 27 quality indicators. Most providers can demonstrate intent. Far fewer can demonstrate systematic, documented compliance across all 27 — because the systems generating that evidence were never designed to talk to each other.`,
    whatMattersMost: [
      'Compliance evidence generated automatically by operational activity — not assembled retrospectively',
      'NDIS Practice Standards mapped to operational processes so gaps are visible in advance',
      'Credential and policy acknowledgement tracking with audit-ready export',
      'Incident, complaint, and feedback records structured for auditor review',
      'Support plans and risk assessments version-controlled and timestamped',
      'Audit mode — a single export that packages all required evidence by quality indicator',
    ],
    howWeSolveThis: `TesseractApps generates compliance evidence as a by-product of daily operations. Every shift note, incident record, credential check, timesheet approval, and case note is timestamped, attributed, and stored in an audit-ready format.

The NDIS Practice Standards framework is mapped within the platform. Compliance indicators are tracked against operational activity — not against a separate checklist. Gaps surface before an audit, not during one.

When an audit is scheduled, the audit export packages evidence by quality indicator. Credential records, incident registers, participant records, and policy acknowledgements are formatted for auditor review without manual assembly.`,
    whatYouGet: [
      'NDIS Practice Standards compliance framework mapped to operational processes',
      'Compliance gap visibility — indicators tracked against live operational activity',
      'Automated credential, policy, and training acknowledgement tracking',
      'Timestamped, attributed records for every operational action',
      'Audit export packaged by quality indicator — no manual assembly',
      'Version-controlled support plans and risk assessments',
      'Complaint and feedback register structured for audit review',
      'Compliance dashboard showing status across all 27 NDIS quality indicators',
    ],
    isThisRightForYou: [
      'You have experienced an audit finding that you believe was preventable',
      'Preparing evidence for an NDIS audit currently takes weeks of manual work',
      'You are not confident you could evidence compliance across all 27 NDIS Practice Standards quality indicators today',
      'Credential, incident, and participant records are stored in different systems',
      'Your compliance monitoring is reactive rather than continuous',
    ],
    relatedCapabilities: [
      ref('capability-incidents-sirs'),
      ref('capability-participant-management'),
      ref('capability-dashboards-reporting'),
    ],
    seo: {
      _type: 'seo',
      metaTitle: 'NDIS Compliance & Audit Readiness Software | TesseractApps',
      metaDescription: 'Continuous compliance evidence generated by daily operations. NDIS Practice Standards mapped to processes. Audit-ready export for registered providers.',
    },
  },

  // ── 7. NDIS Claiming & Invoicing ──────────────────────────────────────────
  {
    _id: 'capability-ndis-claiming',
    _type: 'capabilityPage',
    title: 'NDIS Claiming & Invoicing',
    slug: { _type: 'slug', current: 'ndis-claiming' },
    navGroup: 'Finance',
    order: 1,
    heroHeading: 'NDIS Claims Submitted Correctly. Cash Flow Protected.',
    heroSubtitle: 'Service delivery generates claim-ready data automatically. No double entry. No claim errors. No revenue leaking through the cracks.',
    problemStatement: `NDIS claiming is where operational errors become financial losses. A shift delivered at the wrong support category. An invoice raised for a participant whose plan has expired. A claim rejected by the NDIA because the line item code doesn't match the registered support category.

Most providers manage claiming through a combination of manual timesheet review, spreadsheet-based NDIS price guide lookups, and bulk invoice exports that require revalidation before submission. The person doing this work is often a finance coordinator who is also managing Xero, chasing creditor invoices, and preparing month-end reports.

NDIS claiming errors don't just delay revenue — they create compliance exposure. Overbilling, even inadvertently, is a reportable issue under NDIS legislation.`,
    whatMattersMost: [
      'Service delivery data flows directly into claim generation — no re-entry',
      'NDIS price guide line item validation at the point of service booking',
      'Plan expiry and budget utilisation checks before claims are submitted',
      'Bulk invoice generation with per-claim audit trail',
      'Claim error detection before submission to the NDIA portal',
      'Participant service agreement management with budget tracking',
    ],
    howWeSolveThis: `In TesseractApps, the path from service delivery to NDIS claim is automated. When a shift is completed and approved, the system generates a claim-ready line item using the correct NDIS support category, line item code, and price guide rate — cross-referenced against the participant's current service agreement.

Budget utilisation is tracked in real time. Before a claim is raised, the system checks that the participant has sufficient plan funding in the relevant category. Plan expiry warnings surface before delivery occurs, not after an invoice is rejected.

Bulk invoice generation creates individual per-participant invoices with full audit trail. The export is formatted for NDIS portal submission.`,
    whatYouGet: [
      'Automated claim generation from approved service delivery records',
      'NDIS price guide line item validation at the point of service booking',
      'Real-time participant budget tracking and utilisation visibility',
      'Plan expiry and funding category checks before claim submission',
      'Bulk invoice generation with individual audit trail per claim',
      'NDIS portal-ready claim export format',
      'Service agreement management with budget allocation by support category',
      'Claim error detection and validation before submission',
    ],
    isThisRightForYou: [
      'Your claiming process requires manual re-entry of service delivery data',
      'You have had NDIS claims rejected due to incorrect line item codes or support categories',
      'Budget utilisation tracking is done in a spreadsheet separate from your operational systems',
      'Your finance team spends significant time reconciling service delivery to claims before submission',
      'You have submitted a claim for a participant whose NDIS plan had expired without realising it',
    ],
    relatedCapabilities: [
      ref('capability-accounting-reporting'),
      ref('capability-participant-management'),
      ref('capability-timesheets-payroll'),
    ],
    seo: {
      _type: 'seo',
      metaTitle: 'NDIS Claiming & Invoicing Software | TesseractApps',
      metaDescription: 'Automated NDIS claim generation from service delivery. Price guide validation, budget tracking, and portal-ready export for NDIS registered providers.',
    },
  },

  // ── 8. Accounting & Financial Reporting ───────────────────────────────────
  {
    _id: 'capability-accounting-reporting',
    _type: 'capabilityPage',
    title: 'Accounting & Financial Reporting',
    slug: { _type: 'slug', current: 'accounting-reporting' },
    navGroup: 'Finance',
    order: 2,
    heroHeading: 'Financial Reporting That Reflects Your Operations — Not Your Spreadsheets.',
    heroSubtitle: 'Connect NDIS revenue, payroll costs, and operational expenditure in one financial view. Know your margin. Manage your cash flow.',
    problemStatement: `NDIS providers operate in a fundamentally different financial environment to most businesses. Revenue is participant-driven, constrained by NDIS price guide rates, and delivered through service agreements that can change mid-year. Costs are primarily workforce-driven — casual, award-regulated, and variable.

The result is a financial picture that most accounting platforms were not designed to produce. MYOB and Xero are excellent at bookkeeping. They are not equipped to show you the margin by participant, the cost per hour of care delivered, or the revenue at risk from expiring plan funding — because they don't have the operational data that generates those numbers.

Providers who make decisions from their accounting system alone are making decisions with incomplete information.`,
    whatMattersMost: [
      'Revenue visibility by participant, care type, and support category — not just by invoice',
      'Cost visibility by shift, worker, and service line — not just by payroll run',
      'Margin analysis that connects NDIS revenue to workforce costs in real time',
      'Cash flow forecasting informed by service agreement delivery trajectories',
      'Xero integration that pushes clean, categorised data — not raw transactions',
      'Financial reporting at the level of detail an operations manager, finance manager, and board each need',
    ],
    howWeSolveThis: `TesseractApps maintains the operational data layer — participant service agreements, shift delivery records, timesheet approvals, and payroll-classified hours — and surfaces financial reporting built on that foundation.

Revenue is tracked by participant, support category, and service line. Costs are tracked by shift, worker classification, and SCHADS rate. Margin is visible at the service line level, not just at the entity level.

Xero integration synchronises clean, categorised financial data — not raw transactions. The chart of accounts mapping is configurable. Invoices, payroll journals, and operational costs push through with the level of categorisation that makes your accounting meaningful.`,
    whatYouGet: [
      'Revenue reporting by participant, care type, and NDIS support category',
      'Cost reporting by shift, worker, and service line',
      'Margin analysis connecting NDIS revenue to workforce costs',
      'Cash flow forecasting from service agreement delivery trajectories',
      'Xero integration with configurable chart of accounts mapping',
      'Payroll journal export with SCHADS classification detail',
      'Financial dashboards at operations, finance, and executive levels',
      'Exportable financial reports in formats suitable for board and external reporting',
    ],
    isThisRightForYou: [
      'You cannot quickly identify which participants or service lines are margin-positive or margin-negative',
      'Your financial reporting requires manual data extraction from multiple systems before it is usable',
      'Your Xero integration pushes raw transactions that require significant manual categorisation',
      'You have limited visibility of cash flow risk from expiring NDIS plan funding',
      'Your board reporting is prepared from spreadsheets built from multiple system extracts',
    ],
    relatedCapabilities: [
      ref('capability-ndis-claiming'),
      ref('capability-dashboards-reporting'),
      ref('capability-timesheets-payroll'),
    ],
    seo: {
      _type: 'seo',
      metaTitle: 'NDIS Accounting & Financial Reporting Software | TesseractApps',
      metaDescription: 'Financial reporting built on operational data. Revenue by participant, cost by shift, margin by service line. Xero integration for NDIS providers.',
    },
  },

  // ── 9. Dashboards & Reporting ─────────────────────────────────────────────
  {
    _id: 'capability-dashboards-reporting',
    _type: 'capabilityPage',
    title: 'Dashboards & Reporting',
    slug: { _type: 'slug', current: 'dashboards-reporting' },
    navGroup: 'Operational Intelligence',
    order: 1,
    heroHeading: 'One Source of Truth. Every Role. Every Decision.',
    heroSubtitle: 'Role-calibrated dashboards that surface the operational, compliance, and financial information each person needs — without the noise.',
    problemStatement: `Most NDIS providers have data. They do not have visibility. Timesheets are in one system. Incidents are in another. Participant records are in a third. Financial data is in Xero. The operations manager compiles a weekly status report from three exports and a spreadsheet. The compliance lead finds out about an overdue incident closure from the support coordinator. The finance manager discovers a billing shortfall at month end.

The problem is not that the data doesn't exist. The problem is that it exists in silos, surfaces reactively, and reaches the wrong person at the wrong time. Dashboards that show everyone the same thing solve nothing. The operations manager needs roster coverage. The compliance lead needs overdue incident actions. The finance manager needs billing status.`,
    whatMattersMost: [
      'Role-calibrated dashboards — each user sees what they need, not everything',
      'Operational dashboards showing roster coverage, shift gaps, and attendance in real time',
      'Compliance dashboards showing overdue actions, expiring credentials, and incident status',
      'Financial dashboards showing billing status, budget utilisation, and cash flow position',
      'Executive dashboards with cross-site operational and financial summary',
      'Exportable reports that can be scheduled and distributed without manual intervention',
    ],
    howWeSolveThis: `TesseractApps surfaces operational, compliance, and financial data through role-calibrated dashboards. Each role in the platform — support worker, coordinator, roster manager, compliance lead, finance manager, operations manager, and executive — sees a dashboard configured for their function.

Roster managers see shift coverage, open gaps, and attendance status. Compliance leads see overdue incident actions, expiring credentials, and quality indicator status. Finance managers see billing status, participant budget utilisation, and cash flow trajectory. Executives see multi-site operational performance in a single view.

Reports are exportable, schedulable, and configurable. There is no manual extraction — the report is generated from live operational data on demand.`,
    whatYouGet: [
      'Role-calibrated dashboards for each function: operations, compliance, finance, executive',
      'Real-time roster coverage, shift gaps, and attendance dashboards for operations',
      'Compliance status dashboard — overdue actions, expiring credentials, incident pipeline',
      'Financial dashboard — billing status, budget utilisation, cash flow position',
      'Executive multi-site performance dashboard',
      'Schedulable and exportable reports from live operational data',
      'Cross-module reporting connecting workforce, participant, and financial data',
      'Configurable KPI widgets and custom report builder',
    ],
    isThisRightForYou: [
      'Your operations manager compiles a weekly status report manually from multiple system exports',
      'Compliance issues surface reactively rather than being visible in advance',
      'Financial reporting requires manual data assembly before it is usable',
      'Different roles in your organisation have no tailored view of the information they need',
      'You have no single view of operational performance across multiple sites or service lines',
    ],
    relatedCapabilities: [
      ref('capability-compliance-audit'),
      ref('capability-accounting-reporting'),
      ref('capability-incidents-sirs'),
    ],
    seo: {
      _type: 'seo',
      metaTitle: 'NDIS Operational Dashboards & Reporting Software | TesseractApps',
      metaDescription: 'Role-calibrated dashboards for operations, compliance, finance, and executives. Live operational reporting for NDIS disability support providers.',
    },
  },

]

// ---------------------------------------------------------------------------
// ── MAIN — two-pass seeding ─────────────────────────────────────────────────
// Pass 1: create all documents without relatedCapabilities (avoids circular refs)
// Pass 2: patch relatedCapabilities onto each document now that all exist
// ---------------------------------------------------------------------------

async function seed() {
  console.log(`\n🌱  Seeding capability pages into dataset "${dataset}" on project "${projectId}"...\n`)

  // ── Pass 1: create all docs without relatedCapabilities ──────────────────
  console.log(`── Pass 1: Create base documents (${capabilityPages.length}) ──────────────`)

  let created = 0
  let errors = 0

  for (const doc of capabilityPages) {
    const { relatedCapabilities: _omit, ...baseDoc } = doc
    try {
      await client.createOrReplace(baseDoc)
      console.log(`  ✅  ${doc._id}  (${doc.navGroup} / ${doc.title})`)
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

  // ── Pass 2: patch relatedCapabilities now that all docs exist ────────────
  console.log(`\n── Pass 2: Patch relatedCapabilities ───────────────────────────`)

  let patched = 0
  let patchErrors = 0

  for (const doc of capabilityPages) {
    if (!doc.relatedCapabilities || doc.relatedCapabilities.length === 0) continue
    try {
      await client
        .patch(doc._id)
        .set({ relatedCapabilities: doc.relatedCapabilities })
        .commit()
      console.log(`  ✅  ${doc._id}  → ${doc.relatedCapabilities.length} related capabilities linked`)
      patched++
    } catch (err) {
      console.error(`  ❌  ${doc._id}: ${err.message}`)
      patchErrors++
    }
  }

  console.log(`\n📊  Done: ${created} documents created, ${patched} patched with related capabilities, ${patchErrors} patch errors.\n`)

  if (patchErrors === 0) {
    console.log('🎉  All 9 capability page documents seeded successfully!')
    console.log('')
    console.log('Next steps:')
    console.log('  → Navigate to /capabilities/rostering-scheduling to verify the first page')
    console.log('  → Go to /studio → Capability Page to review content and adjust relatedCapabilities')
    console.log('  → Run this script again at any time — it is fully idempotent')
    console.log('')
    console.log('All capability routes:')
    capabilityPages.forEach(doc => {
      console.log(`  /capabilities/${doc.slug.current}`)
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
