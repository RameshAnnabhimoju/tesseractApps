/**
 * Sanity Seed Script — Capability Pages (19 documents)
 *
 * Usage:
 *   1. Add your write token to .env.local:
 *        SANITY_API_WRITE_TOKEN=skXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
 *   2. Run:
 *        npm run seed:capabilities
 *      or directly:
 *        node scripts/seed-capability-pages.mjs
 *
 * Notes:
 *   - Safe to run multiple times (uses _id-based upserts via createOrReplace)
 *   - relatedCapabilities use deterministic _id refs — all docs must exist for refs to resolve
 *   - Two-pass: Pass 1 creates all docs without relatedCapabilities, Pass 2 patches them
 *   - Content is aligned to the Final Edition - March 2026 capability spec
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

function makeDoc({
  id,
  title,
  slug,
  navGroup,
  order,
  metaDescription,
  heroHeading,
  problem,
  whatMattersMost,
  howWeSolveThis,
  whatYouGet,
  isThisRightForYou,
  related,
}) {
  return {
    _id: id,
    _type: 'capabilityPage',
    title,
    slug: { _type: 'slug', current: slug },
    navGroup,
    order,
    heroHeading,
    heroSubtitle: metaDescription,
    problemStatement: problem,
    whatMattersMost,
    howWeSolveThis,
    whatYouGet,
    isThisRightForYou,
    relatedCapabilities: related.map((r) => ref(r)),
    seo: {
      _type: 'seo',
      metaTitle: `TesseractApps | ${title}`,
      metaDescription,
    },
  }
}

// ---------------------------------------------------------------------------
// Capability IDs (stable across re-runs)
// ---------------------------------------------------------------------------

const IDS = {
  roster: 'capability-rostering-scheduling',
  timesheets: 'capability-timesheets-payroll-alignment',
  workforce: 'capability-workforce-management',
  participant: 'capability-participant-management',
  incidents: 'capability-incidents-sirs',
  compliance: 'capability-compliance-audit-readiness',
  claiming: 'capability-ndis-claiming-invoicing',
  accounting: 'capability-accounting-financial-reporting',
  dashboards: 'capability-dashboards-reporting',
  clock: 'capability-clock-in-out',
  portal: 'capability-staff-self-service-portal',
  learning: 'capability-t-learning-hub',
  chat: 'capability-chat-secure-messaging',
  tsign: 'capability-t-sign-digital-signatures',
  voice: 'capability-voice-notes',
  quote: 'capability-quote-generator',
  xero: 'capability-xero-integration',
  workflow: 'capability-t-workflow-automation',
  salesforce: 'capability-salesforce-native-architecture',
}

// ---------------------------------------------------------------------------
// 19 Capability pages aligned to provided spec
// ---------------------------------------------------------------------------

const capabilityPages = [
  makeDoc({
    id: IDS.roster,
    title: 'Rostering & Scheduling',
    slug: 'rostering-scheduling',
    navGroup: 'Workforce',
    order: 1,
    metaDescription: 'NDIS Rostering & Scheduling Software | Auto-schedule by qualifications, manage SIL sleepovers, broadcast open shifts, enforce SCHADS rules.',
    heroHeading: 'Rostering That Actually Works for Disability Services.',
    problem: 'A support worker calls in sick at 6am. You are working through a contact list while cross-referencing qualifications in one system, availability in another, and Award rules in your head. Meanwhile, a shift is uncovered.',
    whatMattersMost: [
      'Every shift filled by a qualified, credentialed support worker automatically',
      'SIL sleepovers and active nights managed without spreadsheet gymnastics',
      'Open shifts filled in minutes, not hours of phone calls',
      'SCHADS Award rules enforced at the point of scheduling, not discovered at payroll',
      'Cross-facility coverage that does not rely on one coordinator memory',
    ],
    howWeSolveThis: 'TesseractApps matches participants to support workers based on qualifications, availability, location, and preferences. Open shifts broadcast instantly to eligible workers on mobile. SIL rosters handle sleepovers, active nights, and handover periods as native shift types. SCHADS rules run in the background and flag overtime triggers before publish.',
    whatYouGet: [
      'Auto-scheduling engine matched to credentials and participant needs',
      'SIL roster templates with sleepover, active night, and handover management',
      'Open shift broadcasting to qualified workers via mobile app',
      'Credential gate with no valid credential no shift assignment',
      'Cross-facility views for multi-site workforce pools',
      'SCHADS compliance layer for minimum engagements, overtime caps, break rules',
      'Drag and drop roster builder for manual adjustments',
      'Participant preference matching for continuity of support',
    ],
    isThisRightForYou: [
      'You spend more than 2 hours per week manually filling roster gaps',
      'SIL sleepovers create payroll headaches every fortnight',
      'You have had a shift covered by a worker missing a required credential',
      'Your roster coordinator is the single point of failure for scheduling',
      'You run services across multiple sites with a shared workforce',
    ],
    related: [IDS.timesheets, IDS.workforce, IDS.compliance],
  }),

  makeDoc({
    id: IDS.timesheets,
    title: 'Timesheets & Payroll Alignment',
    slug: 'timesheets-payroll-alignment',
    navGroup: 'Workforce',
    order: 2,
    metaDescription: 'Geo-verified clock-ins, built-in SCHADS Award interpretation, and 3-layer reconciliation eliminate manual timesheet calculations.',
    heroHeading: 'Stop Calculating SCHADS by Hand.',
    problem: 'Your payroll officer manually interprets casual loadings, overtime thresholds, sleepover rates, broken shift allowances, and public holiday penalties every pay run. One miscalculation creates underpayment or overpayment risk.',
    whatMattersMost: [
      'SCHADS Award rates calculated automatically including loadings and penalties',
      'Every clock-in verified by GPS so timesheets reflect reality',
      'Roster hours reconciled against timesheet hours before payroll runs',
      'Payroll data flows to payroll systems without rekeying',
      'Discrepancies surfaced before they become underpayment claims',
    ],
    howWeSolveThis: 'Support workers clock in and out on mobile. GPS confirms location. The system applies SCHADS rules automatically and identifies broken shifts, sleepover allowances, and loadings. Before payroll, 3-layer reconciliation compares rostered and worked hours, flags variances, and requires exception sign-off.',
    whatYouGet: [
      'Geo-verified mobile clock in and out with configurable location radius',
      'Full SCHADS Award engine including sleepover and broken shift support',
      '3-layer reconciliation from roster to timesheet to claim to payment',
      'Automated exception flagging for early starts, late finishes, and missed breaks',
      'Direct payroll connection without CSV rekeying',
      'Approval workflows with delegation',
      'Historical audit trail for timesheet changes and overrides',
    ],
    isThisRightForYou: [
      'Payroll spends more than a day per fortnight on manual SCHADS calculations',
      'You have had underpayment risk or concern',
      'Support workers submit paper or unverified timesheets',
      'Timesheet discrepancies appear after payroll already runs',
    ],
    related: [IDS.roster, IDS.claiming, IDS.accounting],
  }),

  makeDoc({
    id: IDS.workforce,
    title: 'Workforce Management',
    slug: 'workforce-management',
    navGroup: 'Workforce',
    order: 3,
    metaDescription: 'Manage the full support worker lifecycle including onboarding, credentials, leave, training compliance, and expiry alerts.',
    heroHeading: 'Your Workforce, Under Control.',
    problem: 'A support worker with an expired first aid certificate is a compliance risk. A support worker you do not know has an expired first aid certificate is a crisis waiting to happen. With workers across sites, manual tracking guarantees something slips.',
    whatMattersMost: [
      'Every credential tracked with automated expiry alerts at 90 days, 30 days, and expiry',
      'Onboarding workflows that get support workers job-ready faster',
      'Leave balances and availability visible to roster coordinators in real time',
      'Training compliance monitored across the workforce',
      'One profile per worker with qualifications, training, incidents, and performance',
    ],
    howWeSolveThis: 'TesseractApps manages the support worker lifecycle in a single profile. Onboarding workflows guide document submission, verification, and mandatory training. Alerts notify managers before credentials expire and prevent rostering with lapsed credentials. Leave integrates with rostering to block availability automatically.',
    whatYouGet: [
      'Centralised worker profiles with qualifications and credential history',
      'Automated credential expiry alerts at 90 day, 30 day, and expiry milestones',
      'Configurable onboarding workflows with document upload and verification',
      'Leave management integrated with rostering and availability',
      'Training compliance tracking with completion and renewal reminders',
      'Qualification matrix showing workforce coverage gaps',
      'Bulk credential reporting for audit preparation',
    ],
    isThisRightForYou: [
      'You track credentials in spreadsheets or shared drives',
      'A lapsed credential has slipped through to a participant-facing shift',
      'Onboarding a new support worker takes more than a week of admin effort',
      'You cannot produce a credential compliance report in under five minutes',
    ],
    related: [IDS.roster, IDS.compliance, IDS.dashboards],
  }),

  makeDoc({
    id: IDS.clock,
    title: 'Clock In/Out',
    slug: 'clock-in-out',
    navGroup: 'Workforce',
    order: 4,
    metaDescription: 'GPS-verified mobile clock in and out for NDIS support workers with accurate time capture at point of service.',
    heroHeading: 'Know Exactly When and Where Every Shift Starts',
    problem: 'Support workers arrive at participant locations, but you have no way to verify when they arrived, where they were, or whether the shift matched the roster. Paper timesheets create disputes and unverified hours create payroll risk.',
    whatMattersMost: [
      'GPS-verified clock in and out at participant locations',
      'Real-time visibility of who is on shift and where',
      'Automatic flagging of early starts, late finishes, and no-shows',
      'Seamless connection to timesheets and payroll',
      'Configurable geofence radius for different service types',
    ],
    howWeSolveThis: 'Support workers clock in and out on mobile. GPS verifies they are at the correct participant location. Exact start and end times create an auditable shift record. Variances from rostered shifts are flagged for review and data flows directly to timesheets without manual entry.',
    whatYouGet: [
      'Mobile clock in and out with GPS location verification',
      'Configurable geofence radius by participant or site',
      'Real-time shift status dashboard for coordinators',
      'Automatic variance detection for early starts, late finishes, and missed clock-ins',
      'Offline mode with sync when connectivity returns',
      'Direct integration with timesheets and payroll processing',
      'Photo verification option for high-security environments',
    ],
    isThisRightForYou: [
      'Support workers submit paper or unverified digital timesheets',
      'You cannot confirm whether a worker was at the participant location during a shift',
      'Timesheet disputes consume coordinator time every pay cycle',
      'You need GPS evidence for audit or plan manager reporting',
    ],
    related: [IDS.timesheets, IDS.roster, IDS.workforce],
  }),

  makeDoc({
    id: IDS.portal,
    title: 'Staff Self-Service Portal',
    slug: 'staff-self-service-portal',
    navGroup: 'Workforce',
    order: 5,
    metaDescription: 'Empower support workers with shift visibility, document uploads, leave requests, and credential management from one portal.',
    heroHeading: 'Give Your Team the Tools to Manage Themselves',
    problem: 'Support workers call the office for shift details, leave balances, payslip queries, and credential renewals. Every call pulls coordinators from higher-value work. Workers feel disconnected and coordinators feel overwhelmed.',
    whatMattersMost: [
      'Support workers can view upcoming shifts and availability',
      'Leave requests submitted and approved without calls or email chains',
      'Credential and document uploads managed directly by workers',
      'Payslip and timesheet visibility without admin involvement',
      'Reduced routine administrative burden on office staff',
    ],
    howWeSolveThis: 'The Staff Self-Service Portal gives each support worker one place to manage schedule, leave, credentials, timesheets, and notifications from mobile. Coordinators handle exceptions instead of routine inquiries.',
    whatYouGet: [
      'Personal dashboard with upcoming shifts and schedule changes',
      'Leave request submission and approval tracking',
      'Credential and document upload with expiry notifications',
      'Timesheet review and approval visibility',
      'Shift swap requests with qualification validation',
      'Push notifications for roster changes, approvals, and reminders',
      'Availability management linked to rostering',
    ],
    isThisRightForYou: [
      'Support workers regularly contact the office for basic schedule information',
      'Leave requests are managed through email, text, or phone calls',
      'Credential renewals require admin staff to chase workers',
      'You want to reduce routine administrative workload on coordinators',
    ],
    related: [IDS.workforce, IDS.roster, IDS.clock],
  }),

  makeDoc({
    id: IDS.learning,
    title: 'T Learning Hub',
    slug: 't-learning-hub',
    navGroup: 'Workforce',
    order: 6,
    metaDescription: 'Mandatory training, compliance courses, and professional development for support workers tracked and linked to credentials.',
    heroHeading: 'Training That Tracks Itself',
    problem: 'Workers need mandatory training, but completion, expiry, and evidence are often scattered across spreadsheets, inboxes, and folders. That creates exposure during rostering and audits.',
    whatMattersMost: [
      'Mandatory training assigned and tracked to completion',
      'Training completion linked directly to credential records',
      'Automated reminders before training expires',
      'Central library of compliance and development content',
      'Training evidence available instantly for audits',
    ],
    howWeSolveThis: 'T Learning Hub centralises course assignment, completion, and expiry tracking by role and service type. Completion updates credential profiles automatically. Managers get an at-a-glance training compliance view.',
    whatYouGet: [
      'Centralised training library with mandatory and optional courses',
      'Role-based training assignment by position and service type',
      'Automatic credential update on course completion',
      'Training expiry alerts at configurable intervals',
      'Compliance dashboard showing workforce training status',
      'Support for video, document, and assessment-based training',
      'Audit-ready training records with completion evidence',
    ],
    isThisRightForYou: [
      'You track training completion in spreadsheets or shared drives',
      'A worker has been rostered without completing mandatory training',
      'You cannot produce a workforce training compliance report in under five minutes',
      'Training records are not linked to credential or rostering systems',
    ],
    related: [IDS.workforce, IDS.compliance, IDS.portal],
  }),

  makeDoc({
    id: IDS.participant,
    title: 'Participant Management',
    slug: 'participant-management',
    navGroup: 'Participant & Care',
    order: 1,
    metaDescription: 'Centralised participant profiles, care plans, goal tracking, progress notes, funding balances, and support requests in one audit-ready system.',
    heroHeading: 'Every Participant. Every Detail. One Place.',
    problem: 'Participant information is scattered across emails, paper files, care planning tools, and billing systems that do not connect. Coordinators spend hours searching for information that should be immediately available.',
    whatMattersMost: [
      'Complete participant profile from referral to goals and funding balances',
      'Service agreements and support plans accessible in one workspace',
      'Progress notes structured for compliance and linked to goals',
      'Real-time funding balance visibility by support category',
      'Support requests and case notes creating continuous audit-ready records',
    ],
    howWeSolveThis: 'TesseractApps gives each participant a single comprehensive profile. Care plans, goals, notes, and budgets are connected. Funding balances update as services are delivered and claimed, giving coordinators real-time budget visibility.',
    whatYouGet: [
      'Centralised participant profiles from referral through ongoing support',
      'Care plan and goal management with progress tracking',
      'Structured progress notes linked to funding categories and outcomes',
      'Real-time funding visibility by support category and plan period',
      'Service agreement management with delivery tracking',
      'Document storage with version control and access permissions',
      'Audit-ready records with timestamped and attributed entries',
    ],
    isThisRightForYou: [
      'Participant information lives in more than two systems',
      'Coordinators cannot check funding balance without finance intervention',
      'Progress notes are not consistently linked to participant goals',
      'Preparing for a plan review takes more than an hour of collation',
    ],
    related: [IDS.incidents, IDS.claiming, IDS.compliance],
  }),

  makeDoc({
    id: IDS.incidents,
    title: 'Incidents & SIRS',
    slug: 'incidents-sirs',
    navGroup: 'Participant & Care',
    order: 2,
    metaDescription: 'Mobile incident logging, automatic SIRS classification, escalation workflows, CAPA management, and NDIS Commission reporting support.',
    heroHeading: 'Never Miss a SIRS Deadline Again.',
    problem: 'A support worker witnesses an incident in the evening, records it on paper, and it reaches a coordinator days later. By then, the 24-hour reporting window may be closed.',
    whatMattersMost: [
      'Incidents captured at point of occurrence on mobile with guided prompts',
      'SIRS classification applied automatically based on type and severity',
      'Reportable incidents escalated immediately to the right people',
      'Investigations tracked from assignment through CAPA completion',
      'Complete incident register ready for NDIS Commission expectations',
    ],
    howWeSolveThis: 'Support workers log incidents immediately on mobile. The system classifies each incident against SIRS categories, determines reportability, and triggers escalation workflows. Managers are notified instantly and investigation workflows manage root cause and CAPA completion.',
    whatYouGet: [
      'Mobile incident logging with guided fields and severity classification',
      'Automatic SIRS alignment identifying reportable incidents',
      'Escalation engine with configurable notification rules',
      'Investigation workflows with assignment and evidence collection',
      'CAPA management tracked to completion',
      'Incident analytics for trends and repeat events',
      'NDIS Commission reporting support with submission-aligned outputs',
    ],
    isThisRightForYou: [
      'You have missed or nearly missed a 24-hour reporting deadline',
      'Incident reports arrive days after the event',
      'Investigation outcomes and CAPA actions are tracked in email or spreadsheets',
      'Your SIRS process depends on individual knowledge rather than system guidance',
    ],
    related: [IDS.compliance, IDS.participant, IDS.dashboards],
  }),

  makeDoc({
    id: IDS.compliance,
    title: 'Compliance & Audit Readiness',
    slug: 'compliance-audit-readiness',
    navGroup: 'Participant & Care',
    order: 3,
    metaDescription: 'Embedded credential tracking, documentation integrity, approval workflows, and comprehensive audit trails keep providers continuously audit-ready.',
    heroHeading: 'Audit-Ready Every Day, Not Just Audit Week.',
    problem: 'Providers may be compliant most of the time, but proving it under audit means pulling records from multiple systems, chasing verbal approvals, and hoping nothing slipped through.',
    whatMattersMost: [
      'Credential compliance visible in real time',
      'Every document change tracked with who, what, when, and why',
      'Approval workflows enforcing sign-off before actions take effect',
      'Continuous compliance monitoring replacing audit scramble preparation',
      'Evidence trails that exist because the system generates them automatically',
    ],
    howWeSolveThis: 'Compliance in TesseractApps is embedded across operations. Credential checks occur at rostering. Timesheet approvals create trails automatically. Incident workflows enforce escalation. Document changes are versioned and attributed. Audits retrieve evidence rather than assembling it.',
    whatYouGet: [
      'Embedded credential tracking across rostering, workforce, and participant management',
      'Documentation integrity with version control and timestamp validation',
      'Configurable approval workflows for timesheets, incidents, service changes, and spend',
      'Comprehensive audit trails generated through normal operations',
      'Compliance dashboards showing real-time status across credentials and documentation',
      'Bulk evidence export for audit submissions',
    ],
    isThisRightForYou: [
      'Audit preparation consumes more than a week of senior staff time',
      'You have had preventable audit findings',
      'Compliance monitoring between audits is manual or inconsistent',
      'You operate high-scrutiny services such as SIL and restrictive practices',
    ],
    related: [IDS.workforce, IDS.incidents, IDS.participant],
  }),

  makeDoc({
    id: IDS.chat,
    title: 'ChaT - Secure Messaging',
    slug: 'chat-secure-messaging',
    navGroup: 'Participant & Care',
    order: 4,
    metaDescription: 'NDIS-compliant secure messaging between support workers, coordinators, and teams without unmanaged consumer apps.',
    heroHeading: 'Operational Messaging That Stays on the Record',
    problem: 'Teams use consumer messaging and personal email for operational decisions. Participant information ends up in channels without auditability or platform control.',
    whatMattersMost: [
      'Secure auditable messaging for operational communication',
      'Participant information remains in a controlled platform',
      'Group messaging by team, site, or service type',
      'Communication linked to shifts, participants, and incidents',
      'No reliance on personal messaging apps for work operations',
    ],
    howWeSolveThis: 'ChaT provides secure encrypted operational messaging linked to relevant records inside TesseractApps. Team channels organise communication by site and service function with searchable audit trails.',
    whatYouGet: [
      'Encrypted one-to-one and group messaging',
      'Team channels by site, service type, and function',
      'Message linking to shifts, participants, and incident records',
      'File and image sharing within the secure platform',
      'Read receipts and delivery confirmation',
      'Message search and retrieval for audit purposes',
      'Mobile and desktop access',
    ],
    isThisRightForYou: [
      'Your team uses personal messaging for operational communication',
      'Participant-sensitive information is shared on uncontrolled platforms',
      'You cannot retrieve communication records during investigations',
      'You need auditable communication trails for compliance',
    ],
    related: [IDS.compliance, IDS.incidents, IDS.portal],
  }),

  makeDoc({
    id: IDS.tsign,
    title: 'T-Sign - Digital Signatures',
    slug: 't-sign-digital-signatures',
    navGroup: 'Participant & Care',
    order: 5,
    metaDescription: 'Collect legally binding digital signatures on service agreements, consent forms, and compliance documents without paper workflows.',
    heroHeading: 'Signatures Without the Paper Chase',
    problem: 'Service agreements and consents sit in inboxes waiting to be printed, signed, scanned, and filed. Version control is inconsistent and signature collection is slow.',
    whatMattersMost: [
      'Service agreements and consent forms signed digitally',
      'Signature requests sent and tracked within the platform',
      'Signed documents automatically filed against participant or worker records',
      'Version control ensuring correct document versions are signed',
      'Legal validity equivalent to wet signatures',
    ],
    howWeSolveThis: 'T-Sign sends signature requests directly from participant and worker records. Signed documents are timestamped, filed automatically, and linked to the source record for retrieval and audit.',
    whatYouGet: [
      'Digital signature collection on agreements, consent, and policy documents',
      'Signature requests from participant and worker profiles',
      'Automatic filing to relevant records on completion',
      'Signature tracking for pending, completed, and overdue items',
      'Multi-party signing support',
      'Legally compliant signatures with full audit trail',
      'Template library for frequently signed documents',
    ],
    isThisRightForYou: [
      'Service agreements are printed and scanned manually',
      'Consent signatures take days or weeks to collect',
      'Signed documents are not consistently filed against records',
      'You need faster and auditable document execution',
    ],
    related: [IDS.participant, IDS.compliance, IDS.portal],
  }),

  makeDoc({
    id: IDS.voice,
    title: 'Voice Notes',
    slug: 'voice-notes',
    navGroup: 'Participant & Care',
    order: 6,
    metaDescription: 'Capture progress notes by voice on mobile, transcribe automatically, and link to participant records in real time.',
    heroHeading: 'Speak It. It Is Recorded.',
    problem: 'Typing detailed progress notes on mobile is slow and error-prone. Notes are deferred, abbreviated, or skipped after long shifts.',
    whatMattersMost: [
      'Progress notes captured by voice at point of service',
      'Automatic transcription linked to participant records',
      'Notes structured for compliance and linked to goals and funding',
      'Reduced documentation burden on support workers',
      'Higher quality notes than manual typing',
    ],
    howWeSolveThis: 'Voice Notes captures spoken notes from mobile, transcribes automatically, and links notes to participant goals and funding categories. Coordinators can review and approve for quality control.',
    whatYouGet: [
      'Voice-to-text progress note capture on mobile',
      'Automatic transcription with review and edit capability',
      'Notes linked to participant profiles, goals, and funding categories',
      'Coordinator review and approval workflow',
      'Searchable note archive for audits and plan reviews',
      'Offline recording with sync on reconnect',
      'Multilingual support for diverse teams',
    ],
    isThisRightForYou: [
      'Support workers defer or abbreviate progress notes',
      'Progress note quality is inconsistent across workforce',
      'Documentation compliance is a recurring audit finding',
      'Workers spend excessive time typing notes on mobile',
    ],
    related: [IDS.participant, IDS.compliance, IDS.clock],
  }),

  makeDoc({
    id: IDS.claiming,
    title: 'NDIS Claiming & Invoicing',
    slug: 'ndis-claiming-invoicing',
    navGroup: 'Finance',
    order: 1,
    metaDescription: 'Funding category alignment, budget tracking, and 3-layer reconciliation reduce rejections and revenue leakage.',
    heroHeading: 'Claim Every Dollar You Have Earned.',
    problem: 'Finance teams often cross-reference rosters, timesheets, and claims manually. Some delivered shifts are never claimed, and some claims are rejected for incorrect line-item or funding alignment.',
    whatMattersMost: [
      'Services delivered are services claimed with no unbilled shifts',
      'Claim rejections reduced with pre-submission validation',
      'Budget tracking by participant plan period and support category in real time',
      '3-layer reconciliation catches discrepancies early',
      'PACE-aligned claiming that keeps providers ahead of changes',
    ],
    howWeSolveThis: 'TesseractApps connects claiming to verified service delivery, approved timesheets, and participant plans. Claims are generated with correct category mapping and validated before submission. Reconciliation layers ensure every dollar is accounted for.',
    whatYouGet: [
      'Automated claim generation from approved timesheets mapped to funding categories',
      'Pre-submission validation against price guides and participant budgets',
      '3-layer reconciliation from roster to timesheet to claim to payment',
      'Real-time budget tracking by participant and support category',
      'Claim rejection analytics for recurring root causes',
      'PACE-aligned workflows with bulk claiming support',
    ],
    isThisRightForYou: [
      'You reconcile claims against service records manually',
      'Claim rejection rate is above 2 percent',
      'You have discovered shifts delivered but never invoiced',
      'Participant funding balances are tracked in spreadsheets',
    ],
    related: [IDS.timesheets, IDS.accounting, IDS.participant],
  }),

  makeDoc({
    id: IDS.accounting,
    title: 'Accounting & Financial Reporting',
    slug: 'accounting-financial-reporting',
    navGroup: 'Finance',
    order: 2,
    metaDescription: 'Xero integration, margin tracking, revenue leakage identification, and service-line reporting built for NDIS providers.',
    heroHeading: 'See Where Your Money Goes. And Where It Does Not.',
    problem: 'Operational data and financials often live in separate systems. Reconciliation lags and profitability by service line is uncertain until well after month-end.',
    whatMattersMost: [
      'Manual reconciliation between systems eliminated',
      'Real-time margin visibility by service stream site and participant group',
      'Xero integration removing double entry',
      'Native payroll and accounting available at Enterprise stage',
      'Board-level reporting from live operational data',
    ],
    howWeSolveThis: 'TesseractApps connects budgets, invoices, payroll, and claiming in one system. Xero users get automatic sync. Margin analytics identify under-recovered costs and revenue leakage. Enterprise can activate native payroll and accounting for full consolidation.',
    whatYouGet: [
      'Xero integration with automatic general ledger sync',
      'Native payroll and accounting at Enterprise for consolidation',
      'Margin tracking by service line, location, and participant group',
      'Revenue leakage identification including unbilled and unclaimed services',
      'Financial dashboards with real-time revenue cost and margin views',
      'Service line profitability reporting for strategic decisions',
    ],
    isThisRightForYou: [
      'You manually transfer data between operational and accounting systems',
      'Financial reporting takes more than a day to compile',
      'You cannot see margins by service stream or site in real time',
      'You operate multiple entities and need consolidated reporting',
    ],
    related: [IDS.claiming, IDS.timesheets, IDS.dashboards],
  }),

  makeDoc({
    id: IDS.quote,
    title: 'Quote Generator',
    slug: 'quote-generator',
    navGroup: 'Finance',
    order: 3,
    metaDescription: 'Generate NDIS service quotes aligned to price guides, funding categories, and participant plans in minutes.',
    heroHeading: 'Quote Accurately. Every Time.',
    problem: 'Quoting often requires manual cross-reference of price guides, funding categories, and hours. Errors create disputes and leakage while turnaround time remains slow.',
    whatMattersMost: [
      'Quotes generated from current NDIS price guide rates',
      'Funding category alignment built into quote creation',
      'Professional quote documents ready for participants and plan managers',
      'Quote-to-service-agreement conversion without re-entry',
      'Historical quote tracking for reporting and analysis',
    ],
    howWeSolveThis: 'Quote Generator pulls current price guide rates and participant funding to produce accurate quotes quickly. Approved quotes convert directly into service agreements with no duplicate data entry.',
    whatYouGet: [
      'Automated quote generation from NDIS price guide rates',
      'Funding category and support item alignment',
      'Professional quote document templates',
      'Direct quote-to-service-agreement conversion',
      'Quote versioning and approval workflows',
      'Historical quote analytics and conversion tracking',
      'Bulk quoting for multi-participant proposals',
    ],
    isThisRightForYou: [
      'Quoting takes more than 15 minutes per participant',
      'You have sent quotes with incorrect NDIS rates',
      'Approved quotes are manually re-entered to create agreements',
      'You lack visibility into quote conversion patterns',
    ],
    related: [IDS.claiming, IDS.participant, IDS.accounting],
  }),

  makeDoc({
    id: IDS.xero,
    title: 'Xero Integration',
    slug: 'xero-integration',
    navGroup: 'Finance',
    order: 4,
    metaDescription: 'Bi-directional Xero integration syncing invoices, payments, and finance data without manual CSV workflows.',
    heroHeading: 'Your Books. Always in Sync.',
    problem: 'Operational systems and Xero often require manual export-import cycles. Double-entry introduces errors and delays real-time financial visibility.',
    whatMattersMost: [
      'Invoices and payments synced to Xero automatically',
      'No manual CSV exports or re-entry',
      'Chart of accounts mapped to NDIS service categories',
      'Real-time financial position instead of month-end lag',
      'Error reduction through elimination of manual transfer steps',
    ],
    howWeSolveThis: 'TesseractApps connects directly to Xero. Claim-generated invoices sync to the ledger, payments are matched, and accounts mapping aligns operational categories to finance structure.',
    whatYouGet: [
      'Bi-directional sync between TesseractApps and Xero',
      'Automatic invoice posting to general ledger',
      'Payment matching and reconciliation',
      'Chart of accounts mapping to NDIS service categories',
      'Real-time dashboards reflecting synced financial data',
      'Error logging and sync status monitoring',
      'Configurable sync frequency and approval rules',
    ],
    isThisRightForYou: [
      'Finance manually transfers data between systems and Xero',
      'Invoice reconciliation takes more than a day each month',
      'Manual imports create data-entry errors',
      'You need real-time financial visibility without month-end delays',
    ],
    related: [IDS.accounting, IDS.claiming, IDS.dashboards],
  }),

  makeDoc({
    id: IDS.dashboards,
    title: 'Dashboards & Reporting',
    slug: 'dashboards-reporting',
    navGroup: 'Operational Intelligence',
    order: 1,
    metaDescription: 'Role-specific dashboards for support workers, managers, compliance, finance, and executives with real-time operational visibility.',
    heroHeading: 'The Right Data. The Right Person. Right Now.',
    problem: 'Teams either have too much data without clarity or too little data for confidence. Reports are manually compiled, emailed, and stale by the time decisions are made.',
    whatMattersMost: [
      'Role-specific dashboards so each role sees what matters',
      'Real-time data refresh from live operations',
      'Executive reporting without manual compilation',
      'Drill-down from organisation to site to individual',
      'One source of truth across workforce compliance and finance',
    ],
    howWeSolveThis: 'TesseractApps delivers role-specific dashboards from the same real-time data layer. Support workers, roster managers, compliance leads, finance managers, and executives each get purpose-built views linked to action.',
    whatYouGet: [
      'Support worker dashboard for shifts, credential status, and reminders',
      'Roster manager dashboard for coverage, overtime, and expiries',
      'Compliance dashboard for incidents, CAPA, and audit readiness',
      'Finance dashboard for claiming pipeline and reconciliation exceptions',
      'Executive dashboard for margin, compliance posture, and workforce KPIs',
    ],
    isThisRightForYou: [
      'Different roles do not have role-specific visibility',
      'Executive reporting is manually compiled from multiple sources',
      'Compliance monitoring still relies on spreadsheets',
      'Finance lacks real-time labour cost and margin visibility',
    ],
    related: [IDS.compliance, IDS.claiming, IDS.accounting],
  }),

  makeDoc({
    id: IDS.workflow,
    title: 'T Workflow Automation',
    slug: 't-workflow-automation',
    navGroup: 'Operational Intelligence',
    order: 2,
    metaDescription: 'Automate onboarding, approvals, escalations, and compliance tasks with configurable rules and human oversight.',
    heroHeading: 'Automate the Process. Keep the Control.',
    problem: 'Operational workflows often live in staff memory. Onboarding, escalation, and approvals depend on individuals remembering what should happen next.',
    whatMattersMost: [
      'Workflows defined once and enforced consistently',
      'Automated triggers for onboarding escalations approvals and compliance tasks',
      'Configurable rules without technical complexity',
      'Human oversight preserved while routing is automated',
      'Workflow analytics showing bottlenecks and completion rates',
    ],
    howWeSolveThis: 'T Workflow Automation lets providers define triggers, steps, approvals, and escalation rules for repeatable operations. Automation handles routing and reminders while staff retain decision authority.',
    whatYouGet: [
      'Visual workflow builder with drag and drop configuration',
      'Pre-built templates for onboarding incidents and claims',
      'Configurable triggers by event date and condition',
      'Approval routing with delegation and escalation',
      'SLA tracking with automated reminders',
      'Workflow analytics for cycle time and completion rates',
      'TFlow cross-module orchestration at Enterprise stage',
    ],
    isThisRightForYou: [
      'Critical processes depend on individual memory not documented workflows',
      'Onboarding requires manual tracking across multiple steps and days',
      'Escalations and approvals are inconsistent between managers',
      'You need consistency without adding operational headcount',
    ],
    related: [IDS.dashboards, IDS.compliance, IDS.incidents],
  }),

  makeDoc({
    id: IDS.salesforce,
    title: 'Salesforce Native Architecture',
    slug: 'salesforce-native-architecture',
    navGroup: 'Operational Intelligence',
    order: 3,
    metaDescription: 'Built natively on Salesforce Hyperforce with Australian data residency, ISO certifications, and enterprise-grade reliability.',
    heroHeading: 'Enterprise Infrastructure. Purpose-Built Application.',
    problem: 'Providers evaluating platforms need confidence in scalability, security, data residency, and integration capability. Lightweight stacks often fail under governance and scale pressure.',
    whatMattersMost: [
      'Enterprise-grade infrastructure trusted by government and healthcare',
      'Australian data residency for data sovereignty obligations',
      'ISO 27001 and ISO 9001 certified operations',
      '99.9% uptime SLA with disaster recovery and failover',
      'Native integration capability with enterprise systems',
    ],
    howWeSolveThis: 'TesseractApps runs natively on Salesforce Hyperforce as a purpose-built application. Data is hosted in Australia and protected with enterprise security and compliance controls while the application remains NDIS-specific.',
    whatYouGet: [
      'Salesforce Hyperforce infrastructure with Australian data residency',
      'ISO 27001 information security certification support',
      'ISO 9001 quality management certification support',
      '99.9% uptime SLA with automated failover',
      'Role-based access with comprehensive audit trails',
      'API access for custom integrations and exchange',
      'Regular security updates and compliance patches',
      'Scalable architecture without performance degradation',
    ],
    isThisRightForYou: [
      'Your IT team requires enterprise-grade security documentation',
      'Australian data residency is mandatory',
      'You need to scale without infrastructure migration',
      'Integration with existing enterprise systems is required',
    ],
    related: [IDS.dashboards, IDS.compliance, IDS.workflow],
  }),
]

// ---------------------------------------------------------------------------
// MAIN — two-pass seeding
// ---------------------------------------------------------------------------

async function seed() {
  console.log(`\n🌱  Seeding capability pages into dataset "${dataset}" on project "${projectId}"...\n`)

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
    console.log('🎉  All 19 capability page documents seeded successfully!')
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
