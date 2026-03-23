/**
 * Sanity Seed Script — Solution Pages (4 BY ROLE + 4 BY STAGE documents)
 *
 * Usage:
 *   1. Add your write token to .env.local:
 *        SANITY_API_WRITE_TOKEN=skXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
 *   2. Run:
 *        node scripts/seed-solutions-role-stage.mjs
 *
 * Notes:
 *   - Safe to run multiple times (uses _id-based upserts via createOrReplace)
 *   - relatedSolutions use deterministic _id refs — all 8 docs must exist for refs to resolve
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
  return `solrs${String(_keyCounter++).padStart(6, '0')}`
}

function ref(id) {
  return { _key: key(), _type: 'reference', _ref: id }
}

// ---------------------------------------------------------------------------
// ── SOLUTION PAGES — 4 BY ROLE documents ────────────────────────────────────
// ---------------------------------------------------------------------------

const byRolePages = [

  // ── 1. Operations Manager ──────────────────────────────────────────────────
  {
    _id: 'solution-role-operations-manager',
    _type: 'solutionPage',
    title: 'Operations Manager',
    slug: { _type: 'slug', current: 'operations-manager' },
    navCategory: 'BY ROLE',
    order: 1,
    heroHeading: 'See Everything. Control What Matters.',
    heroSubtitle: 'Workforce oversight, roster coverage, incident management, and operational dashboards — built for NDIS Operations Managers who need visibility and control.',
    whoIsThisFor: `You manage the day-to-day reality of NDIS service delivery. Rostering, workforce issues, incidents, compliance gaps, and the constant pressure to do more with less. You need a platform that gives you visibility and control — not another system to manage.

Your role sits at the intersection of service delivery, compliance, and workforce management. Every gap in your roster, every lapsed credential, and every unresolved incident is your responsibility. You need real-time information, not reports assembled after the fact.`,
    keyBenefits: [
      'Single operational dashboard showing roster coverage, open incidents, credential status, and workforce KPIs',
      'Real-time alerts for unfilled shifts, credential expiries, and escalation triggers',
      'Workflow automation for routine operational processes',
      'Cross-site visibility for multi-location oversight',
      'Approval workflows that enforce consistent operational standards',
      'Reduced time spent on manual coordination and firefighting',
    ],
    howWeSupport: `TesseractApps gives operations managers a single pane of glass across every operational function. Instead of chasing three people for a report, your dashboard shows roster coverage, open incidents, credential status, and workforce KPIs in real time.

When a shift is unfilled, you know immediately — and the system has already broadcast it to eligible workers. When a credential is about to expire, the alert reaches you before the worker is rostered to a non-compliant shift. When an incident occurs, you see it the moment it is logged, not two days later on a piece of paper.

Workflow automation handles the routine — onboarding steps, approval routing, escalation triggers — so you focus on decisions, not process management. Cross-site visibility means you can oversee multiple locations without being physically present at each one.`,
    whatYouGet: [
      'Operational dashboard showing roster coverage, open incidents, credential status, and workforce KPIs',
      'Real-time alerts for unfilled shifts, credential expiries, and escalation triggers',
      'Workflow automation for onboarding, approvals, and escalations',
      'Cross-site visibility for multi-location oversight',
      'Approval workflows that enforce consistent operational standards',
      'Incident management with automatic SIRS classification and escalation',
      'Workforce compliance view — credentials, training, and availability across all staff',
    ],
    isThisRightForYou: [
      'You have no single view of roster coverage, incidents, and workforce compliance',
      'Operational decisions are based on outdated or incomplete information',
      'You spend too much time on manual coordination and firefighting',
      'You struggle to enforce consistent processes across teams and sites',
    ],
    relatedSolutions: [
      ref('solution-role-compliance-lead'),
      ref('solution-role-finance-manager'),
      ref('solution-role-support-worker'),
    ],
    seo: {
      _type: 'seo',
      metaTitle: 'TesseractApps for NDIS Operations Managers | Workforce Oversight & Operational Dashboards',
      metaDescription: 'Workforce oversight, roster coverage, incident management, and operational dashboards — built for NDIS Operations Managers who need visibility and control.',
    },
  },

  // ── 2. Compliance Lead ──────────────────────────────────────────────────────
  {
    _id: 'solution-role-compliance-lead',
    _type: 'solutionPage',
    title: 'Compliance Lead',
    slug: { _type: 'slug', current: 'compliance-lead' },
    navCategory: 'BY ROLE',
    order: 2,
    heroHeading: 'Compliance That Runs Itself.',
    heroSubtitle: 'Audit readiness, credential tracking, incident management, and compliance dashboards — built for NDIS Compliance Leads who need embedded governance, not bolt-on checklists.',
    whoIsThisFor: `You are responsible for ensuring your organisation meets NDIS Practice Standards, SIRS requirements, and audit expectations. You spend too much time chasing evidence and not enough time on proactive risk management. You need compliance embedded in operations, not layered on top.

Every lapsed credential, every undocumented incident, and every missing approval is a risk that falls on your desk. Audit preparation should not consume weeks of your time. Compliance monitoring between audits should not be manual or inconsistent.`,
    keyBenefits: [
      'Real-time compliance dashboard showing credential status, open incidents, and documentation integrity',
      'Automated credential expiry alerts preventing non-compliant rostering',
      'SIRS-aligned incident workflows with automatic classification and escalation',
      'Continuous audit readiness — evidence generated through normal operations',
      'Bulk evidence export for audit submissions',
      'Approval workflows enforcing policy compliance across all functions',
    ],
    howWeSupport: `TesseractApps embeds compliance into every operational function — it is not a separate module you check once a quarter. Credential checks happen at the point of rostering. Timesheet approvals create audit trails automatically. Incident workflows enforce escalation rules. Document changes are versioned and attributed.

Your compliance dashboard shows real-time credential status across the entire workforce, open incidents and their escalation status, documentation integrity, and approval workflow compliance. When an auditor asks for evidence, you are not assembling it — you are retrieving it.

SIRS-aligned incident workflows ensure that every incident is classified correctly, escalated appropriately, and tracked through to completion. CAPA management ensures corrective and preventive actions are documented and closed out.`,
    whatYouGet: [
      'Compliance dashboard showing real-time credential status, open incidents, and documentation integrity',
      'Automated credential expiry alerts preventing non-compliant rostering',
      'SIRS-aligned incident workflows with automatic classification and escalation',
      'Continuous audit readiness — evidence generated through normal operations',
      'Bulk evidence export for audit submissions',
      'Approval workflows enforcing policy compliance across all functions',
      'CAPA management tracking corrective and preventive actions to completion',
    ],
    isThisRightForYou: [
      'Audit preparation consumes more than a week of senior staff time',
      'You have had audit findings you believe could have been prevented with better systems',
      'Compliance monitoring between audits is manual or inconsistent',
      'Credential compliance is monitored manually across a growing workforce',
      'Incident reporting and SIRS compliance depends on individual knowledge',
    ],
    relatedSolutions: [
      ref('solution-role-operations-manager'),
      ref('solution-role-finance-manager'),
      ref('solution-role-support-worker'),
    ],
    seo: {
      _type: 'seo',
      metaTitle: 'TesseractApps for NDIS Compliance Leads | Audit Readiness & Credential Tracking',
      metaDescription: 'Audit readiness, credential tracking, incident management, and compliance dashboards — built for NDIS Compliance Leads who need embedded governance.',
    },
  },

  // ── 3. Finance Manager ──────────────────────────────────────────────────────
  {
    _id: 'solution-role-finance-manager',
    _type: 'solutionPage',
    title: 'Finance Manager',
    slug: { _type: 'slug', current: 'finance-manager' },
    navCategory: 'BY ROLE',
    order: 3,
    heroHeading: 'Every Dollar Accounted For.',
    heroSubtitle: 'Claiming accuracy, revenue tracking, payroll alignment, and financial reporting — built for NDIS Finance Managers who need operational data and financial data in one place.',
    whoIsThisFor: `You manage the financial health of an NDIS provider where revenue is driven by service delivery, constrained by funding rules, and complicated by SCHADS Award payroll requirements. You need financial visibility that connects operations to revenue in real time.

Manual reconciliation between operational data and financial systems costs you time and accuracy. Revenue leakage from unbilled shifts and rejected claims erodes margins. Payroll accuracy dependent on manual SCHADS interpretation creates compliance risk. Financial reporting compiled from exports rather than live data means you are always looking at last month's position.`,
    keyBenefits: [
      '3-Layer Reconciliation ensuring every delivered service flows through to revenue',
      'Pre-submission claim validation reducing rejection rates',
      'SCHADS Award engine eliminating manual payroll calculation risk',
      'Real-time financial dashboards showing revenue, costs, and margins by service line',
      'Xero integration removing manual data transfer',
      'Budget tracking by participant, plan period, and support category',
    ],
    howWeSupport: `TesseractApps connects claiming, payroll, and financial reporting in a single platform — so your financial data reflects operational reality in real time.

3-Layer Reconciliation compares rostered hours against worked hours, worked hours against claims, and claims against payments. Discrepancies surface before they become lost revenue or underpayment claims. Pre-submission validation checks every claim against NDIS price guides and participant budgets before it is submitted.

The SCHADS Award engine calculates casual loadings, overtime, sleepovers, broken shift allowances, and public holiday penalties automatically — removing the risk of manual interpretation errors. Xero integration syncs invoices, payments, and financial data without manual CSV exports or data re-entry.

Real-time financial dashboards show revenue, costs, and margins by service line, site, and participant group — so you can make strategic decisions based on today's data, not last month's reconciliation.`,
    whatYouGet: [
      '3-Layer Reconciliation: roster-to-timesheet → timesheet-to-claim → claim-to-payment',
      'Pre-submission claim validation against NDIS price guides and participant budgets',
      'SCHADS Award engine — casual loadings, overtime, sleepovers, broken shifts, public holidays',
      'Real-time financial dashboards showing revenue, costs, and margins by service line',
      'Xero integration — operational transactions flow to your general ledger automatically',
      'Budget tracking by participant, plan period, and support category',
      'Claim rejection analytics identifying recurring issues and root causes',
      'Revenue leakage identification — flagging unbilled services and unclaimed shifts',
    ],
    isThisRightForYou: [
      'You manually reconcile claims against service records',
      'Revenue leakage from unbilled shifts or rejected claims is a concern',
      'Payroll accuracy depends on manual SCHADS interpretation',
      'Financial reporting is compiled from exports rather than live data',
      'You lack real-time visibility of labour costs and margins',
    ],
    relatedSolutions: [
      ref('solution-role-operations-manager'),
      ref('solution-role-compliance-lead'),
      ref('solution-role-support-worker'),
    ],
    seo: {
      _type: 'seo',
      metaTitle: 'TesseractApps for NDIS Finance Managers | Claiming Accuracy & Financial Reporting',
      metaDescription: 'Claiming accuracy, revenue tracking, payroll alignment, and financial reporting — built for NDIS Finance Managers who need operations and finance connected.',
    },
  },

  // ── 4. Support Worker ───────────────────────────────────────────────────────
  {
    _id: 'solution-role-support-worker',
    _type: 'solutionPage',
    title: 'Support Worker',
    slug: { _type: 'slug', current: 'support-worker' },
    navCategory: 'BY ROLE',
    order: 4,
    heroHeading: 'Everything You Need. Right on Your Phone.',
    heroSubtitle: 'Shift visibility, mobile clock in/out, progress notes, credential management, and leave requests — built for NDIS Support Workers who deliver frontline care.',
    whoIsThisFor: `You deliver the frontline support that participants depend on. Your experience with the platform should make your job easier, not harder. You need to see your shifts, clock in easily, capture notes quickly, and manage your credentials — all from your phone.

You are between appointments, finishing a long shift, or arriving at a participant's home. The last thing you need is a complicated system that takes longer than the paperwork it replaced. You need a tool that works the way you work — fast, mobile, and simple.`,
    keyBenefits: [
      'Personal shift dashboard with upcoming roster and real-time changes',
      'GPS-verified mobile clock in/out with one tap',
      'Voice Notes for fast, accurate progress note capture',
      'Credential management and document upload from your phone',
      'Leave requests and shift swap submissions',
      'Push notifications for roster changes, approvals, and reminders',
      'Secure messaging for team communication',
    ],
    howWeSupport: `TesseractApps puts everything you need on your phone. Your personal dashboard shows upcoming shifts with participant details, location, and any special requirements. Clock in with one tap — GPS verification confirms you are at the right location without extra steps.

Progress notes can be captured by voice — speak your observations and the system transcribes and links them to the participant record. No more typing detailed notes on a small screen after a long shift. Voice Notes mean richer, more detailed documentation with less effort.

Credential management is self-service — upload renewed documents directly from your phone, see when credentials are approaching expiry, and receive reminders before anything lapses. Leave requests and shift swap submissions are handled within the app, with real-time visibility of approval status.

Secure messaging keeps team communication on-platform and auditable — no more WhatsApp groups for operational decisions.`,
    whatYouGet: [
      'Personal shift dashboard with upcoming roster and real-time changes',
      'GPS-verified mobile clock in/out with one tap',
      'Voice Notes for fast, accurate progress note capture on mobile',
      'Credential management and document upload from your phone',
      'Leave request submission and approval tracking',
      'Shift swap requests with qualification validation',
      'Push notifications for roster changes, approvals, and reminders',
      'Secure messaging for team communication',
    ],
    isThisRightForYou: [
      'You have limited visibility of upcoming shifts and schedule changes',
      'Paper or manual timesheets create disputes at payroll time',
      'Progress notes take too long to write on mobile',
      'Credential renewals require chasing admin staff',
      'You want everything in one app on your phone',
    ],
    relatedSolutions: [
      ref('solution-role-operations-manager'),
      ref('solution-role-compliance-lead'),
      ref('solution-role-finance-manager'),
    ],
    seo: {
      _type: 'seo',
      metaTitle: 'TesseractApps for NDIS Support Workers | Mobile Clock In/Out, Progress Notes & Credentials',
      metaDescription: 'Shift visibility, mobile clock in/out, progress notes, credential management, and leave requests — built for NDIS Support Workers on the frontline.',
    },
  },

]

// ---------------------------------------------------------------------------
// ── SOLUTION PAGES — 4 BY STAGE documents ───────────────────────────────────
// ---------------------------------------------------------------------------

const byStagPages = [

  // ── 1. Start (1–15 Staff) ──────────────────────────────────────────────────
  {
    _id: 'solution-stage-start',
    _type: 'solutionPage',
    title: 'Start (1–15 Staff)',
    slug: { _type: 'slug', current: 'start' },
    navCategory: 'BY STAGE',
    order: 1,
    heroHeading: 'Build It Right from the Start.',
    heroSubtitle: 'Structure from day one — compliant rostering, participant records, incident reporting, and NDIS claiming for early-stage providers. Founding Cohort pricing available.',
    whoIsThisFor: `You've registered as an NDIS provider — or you're about to. You're managing everything: participant intake, rostering, documentation, billing, compliance. Most of it yourself, across spreadsheets and email. You know this won't scale. But right now you need something that works without a six-month implementation project. You need structure, not complexity.

You are a founder-led or early-stage provider establishing operations. Your priority is building compliant foundations without the overhead of enterprise-grade governance tools. You need clear processes, documentation integrity, workforce visibility, and reduced cognitive load.`,
    keyBenefits: [
      'Simplified configuration — essential modules without overwhelming complexity',
      'Structure from day one — every participant, shift, note, and claim in one system',
      'Compliance built in — credential tracking, incident documentation, NDIS Practice Standards alignment',
      'Mobile-ready — shift management and progress notes keep documentation accurate in the field',
      'A foundation that grows with you — same platform, no migration when you reach 16 staff',
      'Founding Cohort offer — 18-month subscription waiver, setup fee only',
    ],
    howWeSupport: `TesseractApps Start gives you a simplified, focused platform experience — only the configuration depth relevant to your operations is surfaced. No governance overhead, no enterprise complexity. Just the foundation done right.

From day one, you have compliant rostering, participant records, incident logging, case notes, timesheets, claims, and structured document storage — all in one connected system. Your support workers use the mobile app for clock in/out and progress notes. Your participant records build naturally through everyday service delivery.

The Founding Cohort offer means you pay the one-time setup fee only — no monthly seat charges during your establishment phase. After 18 months, transition to $39.99/seat/month on the same platform, with the same data, and no migration.

Structure is most critical at your size. Growth without structure creates the instability that overwhelms early-stage providers. The Start experience is designed for exactly where you are.`,
    whatYouGet: [
      'Participant onboarding and profile management',
      'Compliant rostering with credential validation',
      'Case notes and progress documentation',
      'Incident logging with guided workflows',
      'Timesheet capture and approval',
      'NDIS claims generation from service delivery',
      'Structured document storage',
      'Guided onboarding with dedicated support',
    ],
    isThisRightForYou: [
      'You have too many disconnected tools — or no tools — for core operations',
      'Compliance requirements feel overwhelming without a system to support them',
      'You risk building bad operational habits now that become expensive to fix later',
      'You have limited time and budget to evaluate, purchase, and learn multiple platforms',
    ],
    relatedSolutions: [
      ref('solution-stage-growth'),
      ref('solution-stage-scale'),
      ref('solution-stage-enterprise'),
    ],
    seo: {
      _type: 'seo',
      metaTitle: 'NDIS Provider Software for Start Organisations | TesseractApps',
      metaDescription: 'Structure from day one for early-stage NDIS providers. Compliant rostering, participant records, incident reporting, and NDIS claiming. Founding Cohort pricing available.',
    },
  },

  // ── 2. Growth (15–60 Staff) ────────────────────────────────────────────────
  {
    _id: 'solution-stage-growth',
    _type: 'solutionPage',
    title: 'Growth (15–60 Staff)',
    slug: { _type: 'slug', current: 'growth' },
    navCategory: 'BY STAGE',
    order: 2,
    heroHeading: 'Growth Exposes Every Gap. Close Them Before They Cost You.',
    heroSubtitle: 'SCHADS payroll automation, operational dashboards, and the structure growing NDIS providers need — $39.99/seat/month.',
    whoIsThisFor: `You've moved past the start hustle. You have a team, participants who depend on you, and enough complexity that early-stage tools are straining. Payroll is your biggest headache. You're spending more time managing the business than delivering services.

You are experiencing workforce expansion, payroll pressure, and increasing reporting needs. You need control, reporting clarity, payroll alignment, and manager accountability. Your rostering that worked at 10 staff is falling apart at 30.`,
    keyBenefits: [
      'SCHADS engine takes over — award interpretation, penalties, overtime automated',
      'Operational dashboards give you visibility — roster coverage, incidents, compliance in real time',
      'Rostering scales — templates, auto-fill suggestions, and gap detection',
      'Claiming keeps pace — auto-generated from delivered shifts, no bottleneck',
      'Payroll-to-roster alignment visibility eliminates manual reconciliation',
      'Manager-level reporting and documentation consistency across teams',
    ],
    howWeSupport: `At Growth stage, the SCHADS Award engine activates — calculating casual loadings, overtime, sleepovers, broken shift allowances, and public holiday penalties automatically. Your payroll team stops interpreting award rules by hand and starts reviewing calculated results.

Operational dashboards provide cross-site visibility. Roster coverage, open incidents, credential expiries, and workforce KPIs are visible in real time. Reporting moves from reactive to real-time. Manager-level dashboards surface the data each team lead needs to manage their area without chasing three people for a report.

Growth introduces structured automation through Workflow Engine using template-driven boards, limited stage edits, and basic triggers. This is where automation begins to save meaningful time in day-to-day workflows such as onboarding, intake routing, document handling, and follow-up actions.

Rostering at this stage includes templates, auto-fill suggestions, and gap detection. Claiming keeps pace with service delivery — auto-generated from delivered shifts with no manual bottleneck.`,
    whatYouGet: [
      'SCHADS Award engine — casual loadings, overtime, sleepovers, broken shifts, public holidays',
      'Operational dashboards with cross-site visibility',
      'Payroll-to-roster alignment and reconciliation',
      'Funding tracking by participant and support category',
      'Manager-level reporting and team oversight',
      'Documentation consistency enforcement across teams',
      'Workflow Engine with template-driven automation',
      'Auto-generated claiming from delivered shifts',
    ],
    isThisRightForYou: [
      'SCHADS Award interpretation is causing payroll errors and compliance risk',
      'Rostering that worked at 10 staff is falling apart at 30',
      'You have no consolidated view of operations across sites or service types',
      'Claiming and billing lag behind service delivery volume',
      'Payroll is your biggest operational headache',
    ],
    relatedSolutions: [
      ref('solution-stage-start'),
      ref('solution-stage-scale'),
      ref('solution-stage-enterprise'),
    ],
    seo: {
      _type: 'seo',
      metaTitle: 'NDIS Provider Software for Growing Organisations | TesseractApps',
      metaDescription: 'SCHADS payroll automation, operational dashboards, and the structure growing NDIS providers need. $39.99/seat/month with 3-year agreement.',
    },
  },

  // ── 3. Scale (60–120 Staff) ────────────────────────────────────────────────
  {
    _id: 'solution-stage-scale',
    _type: 'solutionPage',
    title: 'Scale (60–120 Staff)',
    slug: { _type: 'slug', current: 'scale' },
    navCategory: 'BY STAGE',
    order: 3,
    heroHeading: 'At This Size, Good Intentions Aren\'t Governance.',
    heroSubtitle: 'Approval workflows, executive oversight, multi-site governance, and automated SIRS escalation — $39.99/seat/month for scaling NDIS providers.',
    whoIsThisFor: `You have a multi-team structure, sites across multiple locations, and a compliance lead who is working hard to keep up. The challenge is not capability — it's consistency. Different managers interpret policies differently. Documentation standards drift between sites.

You are a multi-site provider, SIL provider, or organisation managing increasing governance pressure. You need oversight, accountability, approvals, audit trails, and compliance control. Your operational complexity has grown beyond what informal processes can sustain.`,
    keyBenefits: [
      'Approval workflows lock in policy — rosters, expenditure, incidents require authorised sign-off',
      'Audit trail depth grows — every action is logged, attributed, and retrievable',
      'Executive dashboards surface compliance posture and operational KPIs in real time',
      'SIRS escalation is automated — no more relying on individual knowledge',
      'Multi-site audit trail depth ensures consistency across locations',
      'Governance becomes a system property, not a management aspiration',
    ],
    howWeSupport: `At Scale stage, process automation becomes a governance tool — not just an efficiency tool. Approval workflows for rosters, expenditure, and escalations enforce policy consistently across every team and site. No more relying on individual managers to remember the rules.

Workflow Engine expands into configurable boards, SLA rules, escalation logic, and workflow analytics. Incident escalation follows the same path every time — SIRS classification, notification, investigation, CAPA — regardless of which site it originated from.

Executive dashboards surface compliance posture, operational KPIs, incident trends, and workforce metrics in real time. Executive reporting is generated from live data, not manually compiled from multiple sources.

Audit trail depth increases at Scale. Every action — timesheet approval, roster change, incident escalation, document modification — is logged with who, what, when, and why. When an auditor asks a question, the answer exists in the system.`,
    whatYouGet: [
      'Approval workflows for rosters, expenditure, incidents, and escalations',
      'Delegation controls for team leaders and regional managers',
      'Comprehensive audit trails across every operational function',
      'Automated incident escalation with SIRS classification',
      'Compliance reporting and gap detection dashboards',
      'Executive dashboards with real-time operational KPIs',
      'Workflow Engine with configurable boards, SLA rules, and escalation logic',
      'Multi-site governance consistency enforcement',
    ],
    isThisRightForYou: [
      'Approval processes are inconsistent across teams and sites',
      'Documentation gaps only surface at audit',
      'Incident misclassification results from lack of guided workflows',
      'Executive oversight depends on asking the right person, not live data',
      'You operate services with high regulatory scrutiny (SIL, behaviour support, restrictive practices)',
    ],
    relatedSolutions: [
      ref('solution-stage-start'),
      ref('solution-stage-growth'),
      ref('solution-stage-enterprise'),
    ],
    seo: {
      _type: 'seo',
      metaTitle: 'NDIS Provider Software for Scaling Organisations | TesseractApps',
      metaDescription: 'Approval workflows, executive oversight, multi-site governance, and automated SIRS escalation for scaling NDIS providers. $39.99/seat/month.',
    },
  },

  // ── 4. Enterprise (120+ Staff) ─────────────────────────────────────────────
  {
    _id: 'solution-stage-enterprise',
    _type: 'solutionPage',
    title: 'Enterprise (120+ Staff)',
    slug: { _type: 'slug', current: 'enterprise' },
    navCategory: 'BY STAGE',
    order: 4,
    heroHeading: 'Your Organisation Deserves a Platform as Serious as Your Mission.',
    heroSubtitle: 'Native payroll, multi-entity consolidation, board reporting, and full operational visibility — $39.99/seat/month with dedicated account management.',
    whoIsThisFor: `You have an executive layer, board-level reporting requirements, multi-entity operations, and multiple systems that don't talk to each other. Finance lives separately from operations. Payroll is outsourced. Reporting requires manual data assembly from exports.

Your executive teams require financial consolidation, multi-entity oversight, and board-level reporting. You need one source of truth across operations, finance, workforce, and governance. System sprawl is creating integration risk and data duplication.`,
    keyBenefits: [
      'Native payroll and accounting — eliminate integration gaps entirely',
      'Multi-entity consolidation — one view across every entity, site, and service line',
      'Board reporting generated from live data — not assembled from exports',
      'Dedicated account management and strategic partnership at the executive level',
      'TFlow cross-module automation for enterprise-grade workflow orchestration',
      'Single source of truth across operations, finance, workforce, and governance',
    ],
    howWeSupport: `Enterprise stage activates the full depth of TesseractApps. Native payroll and accounting eliminate third-party dependencies and integration gaps. Financial data and operational data live in the same system — reconciliation happens continuously, not monthly.

Multi-entity consolidation provides a single view across every entity, site, and service line. Board reporting is generated from live operational data — not assembled from exports by a team of analysts. Your board sees today's compliance posture, financial position, and operational metrics in real time.

TFlow cross-module automation gives Workflow Engine full orchestration capability across the platform. Workflows span rostering, compliance, finance, and reporting — supporting deeper operational automation, financial control, and governance execution at enterprise scale.

Dedicated account management ensures you have a strategic partner, not just a vendor. Your account team understands your operational structure, governance requirements, and growth trajectory.`,
    whatYouGet: [
      'Native payroll — no third-party payroll dependency',
      'Native accounting — full financial consolidation within the platform',
      'Multi-entity reporting across all sites and service lines',
      'Executive dashboards with board-ready reporting',
      'Consolidated financial visibility — revenue, costs, margins across the organisation',
      'TFlow cross-module automation and workflow orchestration',
      'Dedicated account management and strategic partnership',
      'Single source of truth across every operational function',
    ],
    isThisRightForYou: [
      'Financial data is separated from operational data — reconciliation is always historical',
      'Board and regulatory reporting requires manual data consolidation',
      'System sprawl is creating integration risk and data duplication',
      'Executive blind spots from fragmented systems affect strategic decisions',
      'You need a platform partner, not just a software vendor',
    ],
    relatedSolutions: [
      ref('solution-stage-start'),
      ref('solution-stage-growth'),
      ref('solution-stage-scale'),
    ],
    seo: {
      _type: 'seo',
      metaTitle: 'Enterprise NDIS Provider Platform | TesseractApps',
      metaDescription: 'Native payroll, multi-entity consolidation, board reporting, and full operational visibility. $39.99/seat/month with 5-year agreement and dedicated account management.',
    },
  },

]

// ---------------------------------------------------------------------------
// ── Combine all pages ───────────────────────────────────────────────────────
// ---------------------------------------------------------------------------

const solutionPages = [...byRolePages, ...byStagPages]

// ---------------------------------------------------------------------------
// ── MAIN — two-pass seeding ─────────────────────────────────────────────────
// Pass 1: create all documents without relatedSolutions (avoids circular refs)
// Pass 2: patch relatedSolutions onto each document now that all exist
// ---------------------------------------------------------------------------

async function seed() {
  console.log(`\n🌱  Seeding BY ROLE + BY STAGE solution pages into dataset "${dataset}" on project "${projectId}"...\n`)

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
    console.log('🎉  All 8 BY ROLE + BY STAGE solution page documents seeded successfully!')
    console.log('')
    console.log('Next steps:')
    console.log('  → Navigate to any slug below to verify the page renders')
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
