/**
 * Sanity Seed Script — Team Members, Release Notes, Pricing Plans, Job Listing
 *
 * Usage:
 *   1. Add your write token to .env.local:
 *        SANITY_API_WRITE_TOKEN=skXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
 *   2. Run:
 *        node scripts/seed-sanity-entities.mjs
 *
 * Notes:
 *   - Safe to run multiple times (uses _id-based upserts via createOrReplace)
 *   - Team member photos are NOT uploaded — assign them manually in Studio at /studio
 *   - All 4 entity types are seeded: teamMember, releaseNote, pricingPlan, jobListing
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
// Helpers — Portable Text
// ---------------------------------------------------------------------------

let _keyCounter = 1
function key() {
  return `e${String(_keyCounter++).padStart(6, '0')}`
}

function p(text) {
  return {
    _type: 'block', _key: key(), style: 'normal',
    children: [{ _type: 'span', _key: key(), text }],
    markDefs: [],
  }
}

function li(text) {
  return {
    _type: 'block', _key: key(), style: 'normal',
    listItem: 'bullet', level: 1,
    children: [{ _type: 'span', _key: key(), text }],
    markDefs: [],
  }
}

function oli(text) {
  return {
    _type: 'block', _key: key(), style: 'normal',
    listItem: 'number', level: 1,
    children: [{ _type: 'span', _key: key(), text }],
    markDefs: [],
  }
}

// ---------------------------------------------------------------------------
// ── TEAM MEMBERS ────────────────────────────────────────────────────────────
// ---------------------------------------------------------------------------

const teamMembers = [
  {
    _id: 'team-member-revanth',
    _type: 'teamMember',
    name: 'Revanth',
    role: 'Founder & CEO',
    department: 'Leadership',
    order: 1,
    isVisible: true,
  },
  {
    _id: 'team-member-kranthi',
    _type: 'teamMember',
    name: 'Kranthi',
    role: 'Co-Founder',
    department: 'Leadership',
    order: 2,
    isVisible: true,
  },
  {
    _id: 'team-member-bec',
    _type: 'teamMember',
    name: 'Bec McFarland',
    role: 'HR Manager',
    department: 'Operations',
    order: 3,
    isVisible: true,
  },
  {
    _id: 'team-member-belle',
    _type: 'teamMember',
    name: 'Belle Bai',
    role: 'Marketing Executive',
    department: 'Marketing',
    order: 4,
    isVisible: true,
  },
  {
    _id: 'team-member-darshan',
    _type: 'teamMember',
    name: 'Darshan Shelat',
    role: 'Solutions Consultant',
    department: 'Sales',
    order: 5,
    isVisible: true,
  },
  {
    _id: 'team-member-maheshwari',
    _type: 'teamMember',
    name: 'Maheshwari',
    role: 'Operations Manager',
    department: 'Operations',
    order: 6,
    isVisible: true,
  },
  {
    _id: 'team-member-deepakraj',
    _type: 'teamMember',
    name: 'Deepakraj',
    role: 'Software Engineer',
    department: 'Engineering',
    order: 7,
    isVisible: true,
  },
  {
    _id: 'team-member-meghna',
    _type: 'teamMember',
    name: 'Meghna',
    role: 'Accounts Manager',
    department: 'Operations',
    order: 8,
    isVisible: true,
  },
  {
    _id: 'team-member-saikrishna',
    _type: 'teamMember',
    name: 'Sai Krishna',
    role: 'Test Engineer',
    department: 'Engineering',
    order: 9,
    isVisible: true,
  },
]

// ---------------------------------------------------------------------------
// ── RELEASE NOTES ───────────────────────────────────────────────────────────
// ---------------------------------------------------------------------------

const releaseNotes = [
  {
    _id: 'release-note-1-29-0',
    _type: 'releaseNote',
    version: '1.29.0',
    releaseDate: '2025-03-01',
    releaseType: 'minor',
    changes: [
      {
        _key: key(), _type: 'changeItem',
        title: 'Quote Generator',
        category: 'New Feature',
        description: [p('Introduced a Quote Generator to enable providers to quickly create service quotes with accurate pricing and service details.')],
      },
      {
        _key: key(), _type: 'changeItem',
        title: 'Rounding and Buffer Time',
        category: 'Enhancement',
        description: [p('Implemented 15-minute and 30-minute rounding in the timesheet. Allows a buffer time so minor time variances are treated as matched, preventing unnecessary timesheet mismatches.')],
      },
      {
        _key: key(), _type: 'changeItem',
        title: 'Replicate Previous Week / Fortnightly Roster',
        category: 'Enhancement',
        description: [p('Roster managers can now replicate rosters from the previous week or fortnight. Reduces repetitive scheduling work, improves efficiency, and ensures continuity in staff and participant assignments.')],
      },
      {
        _key: key(), _type: 'changeItem',
        title: 'My Availability – New Changes',
        category: 'Enhancement',
        description: [p('Enhanced staff availability management with updated logic and improved flexibility. Roster managers now have more accurate and reliable availability data when planning shifts.')],
      },
      {
        _key: key(), _type: 'changeItem',
        title: 'Repository Renamed to "Documents"',
        category: 'Enhancement',
        description: [
          p('The existing repository has been renamed to Documents, consolidating:'),
          li('Staff documents'),
          li('Organisation documents'),
          li('Participant documents'),
        ],
      },
      {
        _key: key(), _type: 'changeItem',
        title: 'Accounting – New Enhancements',
        category: 'Accounting',
        description: [
          p('Multiple improvements to the accounting module:'),
          oli('Unlink/Relink Invoices: Invoices can now be unlinked from a service agreement and relinked to a different one.'),
          oli('Bulk Invoice Generation: Users can generate multiple invoices at once from the Claims tab.'),
          oli('Voiding Invoices: Added the ability to void invoices that cannot be deleted.'),
          oli('Invoice Filtering: Invoices can now be filtered by service agreement, improving searchability.'),
          oli('Service Booking Updates: Status field added to Service Booking; support for multiple service bookings per plan; balance now recalculates dynamically.'),
        ],
      },
    ],
  },
  {
    _id: 'release-note-1-28-0',
    _type: 'releaseNote',
    version: '1.28.0',
    releaseDate: '2025-02-01',
    releaseType: 'minor',
    changes: [
      {
        _key: key(), _type: 'changeItem',
        title: 'Bulk Shift Publishing',
        category: 'Enhancement',
        description: [p('Roster managers can now publish multiple shifts at once, saving time when building weekly rosters.')],
      },
      {
        _key: key(), _type: 'changeItem',
        title: 'Support Worker App – Shift Notes',
        category: 'Mobile',
        description: [p('Support workers can now add shift notes directly from the mobile app during or after a shift, reducing post-shift admin.')],
      },
      {
        _key: key(), _type: 'changeItem',
        title: 'Participant Budget Alerts',
        category: 'New Feature',
        description: [p('Automated alerts now notify coordinators when a participant\'s NDIS budget falls below a configurable threshold.')],
      },
      {
        _key: key(), _type: 'changeItem',
        title: 'Invoice Export to CSV',
        category: 'Accounting',
        description: [p('Invoices can now be exported to CSV format for use in external accounting tools and reconciliation workflows.')],
      },
    ],
  },
  {
    _id: 'release-note-1-27-0',
    _type: 'releaseNote',
    version: '1.27.0',
    releaseDate: '2025-01-10',
    releaseType: 'minor',
    changes: [
      {
        _key: key(), _type: 'changeItem',
        title: 'Geo-Location Check-In',
        category: 'New Feature',
        description: [p('Support workers can now check in to shifts with GPS verification, enabling location-based attendance tracking and reducing fraudulent time entries.')],
      },
      {
        _key: key(), _type: 'changeItem',
        title: 'SIRS Incident Report Templates',
        category: 'Enhancement',
        description: [p('Pre-built SIRS-compliant incident report templates added, reducing the time needed to document reportable incidents and ensuring regulatory accuracy.')],
      },
      {
        _key: key(), _type: 'changeItem',
        title: 'Participant App – Goal Tracking',
        category: 'Mobile',
        description: [p('Participants can now view and track their NDIS goals directly from the participant app, improving transparency and engagement.')],
      },
      {
        _key: key(), _type: 'changeItem',
        title: 'Bug Fix – Duplicate Shift Alert',
        category: 'Bug Fix',
        description: [p('Resolved an issue where duplicate shift alerts were being sent to support workers when a shift was edited rather than newly created.')],
      },
    ],
  },
  {
    _id: 'release-note-1-26-0',
    _type: 'releaseNote',
    version: '1.26.0',
    releaseDate: '2024-12-05',
    releaseType: 'minor',
    changes: [
      {
        _key: key(), _type: 'changeItem',
        title: 'T-Sign E-Signature Integration',
        category: 'New Feature',
        description: [p('Integrated T-Sign for electronic document signing. Participants, support workers, and staff can now sign agreements, forms, and consent documents digitally.')],
      },
      {
        _key: key(), _type: 'changeItem',
        title: 'Custom Dashboard Widgets',
        category: 'Enhancement',
        description: [p('Administrators can now customise their dashboard layout by adding, removing, and repositioning widgets to match their most-used workflows.')],
      },
      {
        _key: key(), _type: 'changeItem',
        title: 'Xero Sync Improvements',
        category: 'Integration',
        description: [p('Improved Xero integration reliability. Invoice sync now retries on failure, and error messages are displayed with actionable guidance.')],
      },
    ],
  },
  {
    _id: 'release-note-1-25-0',
    _type: 'releaseNote',
    version: '1.25.0',
    releaseDate: '2024-11-08',
    releaseType: 'minor',
    changes: [
      {
        _key: key(), _type: 'changeItem',
        title: 'Auto-Scheduling Engine',
        category: 'New Feature',
        description: [p('Introduced an auto-scheduling engine that matches available staff to open shifts based on qualifications, availability, and participant preferences — reducing manual roster building by up to 60%.')],
      },
      {
        _key: key(), _type: 'changeItem',
        title: 'Role-Based Access Controls',
        category: 'Enhancement',
        description: [p('Expanded role-based access controls with 12 granular permission levels. Administrators can now define exactly what each role can see and do across every module.')],
      },
      {
        _key: key(), _type: 'changeItem',
        title: 'Mobile App – Push Notifications',
        category: 'Mobile',
        description: [p('Push notifications for shift reminders, roster changes, and incident approvals are now available on both iOS and Android.')],
      },
    ],
  },
  {
    _id: 'release-note-1-24-0',
    _type: 'releaseNote',
    version: '1.24.0',
    releaseDate: '2024-10-12',
    releaseType: 'minor',
    changes: [
      {
        _key: key(), _type: 'changeItem',
        title: 'Document Vault',
        category: 'New Feature',
        description: [p('Centralised Document Vault launched, allowing secure upload and retrieval of participant files, staff certifications, and organisational policies — all with version history.')],
      },
      {
        _key: key(), _type: 'changeItem',
        title: 'Bulk Timesheet Approvals',
        category: 'Enhancement',
        description: [p('Managers can now approve multiple timesheets at once from the timesheet dashboard, significantly reducing administrative overhead at end-of-fortnight.')],
      },
      {
        _key: key(), _type: 'changeItem',
        title: 'Bug Fix – Leave Balance Calculation',
        category: 'Bug Fix',
        description: [p('Fixed a rounding error in leave balance calculations that was causing incorrect accrual figures for part-time staff on irregular hours.')],
      },
    ],
  },
  {
    _id: 'release-note-1-23-0',
    _type: 'releaseNote',
    version: '1.23.0',
    releaseDate: '2024-09-06',
    releaseType: 'minor',
    changes: [
      {
        _key: key(), _type: 'changeItem',
        title: 'Wyzed LMS Integration',
        category: 'Integration',
        description: [p('Full integration with Wyzed Learning Management System. Staff training progress, course completions, and compliance certificates now sync directly into TesseractApps.')],
      },
      {
        _key: key(), _type: 'changeItem',
        title: 'AI-Powered Shift Recommendations',
        category: 'New Feature',
        description: [p('AI model now suggests optimal staff assignments for upcoming shifts based on historical patterns, participant preferences, and staff performance data.')],
      },
      {
        _key: key(), _type: 'changeItem',
        title: 'Participant Risk Matrix',
        category: 'Enhancement',
        description: [p('Added NDIS-aligned Risk Matrix to participant profiles, enabling structured risk assessment and ensuring appropriate support planning documentation.')],
      },
    ],
  },
  {
    _id: 'release-note-1-22-0',
    _type: 'releaseNote',
    version: '1.22.0',
    releaseDate: '2024-08-02',
    releaseType: 'minor',
    changes: [
      {
        _key: key(), _type: 'changeItem',
        title: 'Group Chat & Communication Hub',
        category: 'New Feature',
        description: [p('Launched a centralised communication hub with support for group messaging between staff, coordinators, and administrators — reducing reliance on external messaging apps.')],
      },
      {
        _key: key(), _type: 'changeItem',
        title: 'Reporting Engine – Custom Reports',
        category: 'Enhancement',
        description: [p('New custom report builder lets administrators create exportable reports across any data module with flexible filters, date ranges, and column selection.')],
      },
      {
        _key: key(), _type: 'changeItem',
        title: 'Bug Fix – Roster Calendar Display',
        category: 'Bug Fix',
        description: [p('Resolved an issue where shifts spanning midnight were not rendering correctly in the weekly roster calendar view.')],
      },
    ],
  },
  {
    _id: 'release-note-1-21-0',
    _type: 'releaseNote',
    version: '1.21.0',
    releaseDate: '2024-07-05',
    releaseType: 'minor',
    changes: [
      {
        _key: key(), _type: 'changeItem',
        title: 'Salesforce Integration',
        category: 'Integration',
        description: [p('Native Salesforce CRM integration launched. Participant records, service agreements, and case notes can now be synchronised bidirectionally between TesseractApps and Salesforce.')],
      },
      {
        _key: key(), _type: 'changeItem',
        title: 'Staff Recruitment Module',
        category: 'New Feature',
        description: [p('Added a recruitment tracking module covering job postings, candidate pipeline management, interview scheduling, and onboarding task checklists.')],
      },
      {
        _key: key(), _type: 'changeItem',
        title: 'Mobile App – Voice Notes',
        category: 'Mobile',
        description: [p('Support workers can now record voice notes during shifts using the mobile app, which are automatically transcribed and attached to shift records.')],
      },
    ],
  },
  {
    _id: 'release-note-1-20-0',
    _type: 'releaseNote',
    version: '1.20.0',
    releaseDate: '2024-06-01',
    releaseType: 'minor',
    changes: [
      {
        _key: key(), _type: 'changeItem',
        title: 'Platform Launch',
        category: 'New Feature',
        description: [p('TesseractApps NDIS platform officially launched with core modules: participant management, rostering, timesheets, incident management, and role-based dashboards.')],
      },
      {
        _key: key(), _type: 'changeItem',
        title: 'NDIS Practice Standards Compliance Framework',
        category: 'New Feature',
        description: [p('Built-in compliance checklist aligned to the NDIS Practice Standards, enabling providers to track and evidence compliance across all quality indicator categories.')],
      },
      {
        _key: key(), _type: 'changeItem',
        title: 'Participant & Support Worker Apps',
        category: 'Mobile',
        description: [p('Native iOS and Android apps released for both participants and support workers, providing on-the-go access to shifts, goals, messages, and documents.')],
      },
    ],
  },
]

// ---------------------------------------------------------------------------
// ── PRICING PLANS ───────────────────────────────────────────────────────────
// ---------------------------------------------------------------------------

const pricingPlans = [
  // ── NDIS ──
  {
    _id: 'pricing-ndis-starter',
    _type: 'pricingPlan',
    industryTab: 'ndis',
    order: 1,
    tierName: 'Starter',
    tagline: 'I Want to Choose What I Want',
    description: 'Freedom of choice for providers beginning their journey in the care industry. Suitable for 5–10 users.',
    pricingMode: 'perUser',
    pricePerUser: 9.99,
    pricingLabel: 'Per user/month',
    ctaLabel: 'Begin Your Journey',
    featuresHeading: 'Get the essentials to manage participants, shifts, and invoices.',
    features: [
      'Participant profiles & digital forms',
      'Roster tracker & shift publishing',
      'Role-based dashboards',
      'Incident reporting & audit-ready reports',
      'Support worker dashboard',
      'Goal tracking & support requests',
      'Unlimited uploads & storage',
      'Chat & email support',
    ],
    optionalAddons: ['LMS – Wyzed *', 'E-sign (T Sign)'],
    isHighlighted: false,
  },
  {
    _id: 'pricing-ndis-standard',
    _type: 'pricingPlan',
    industryTab: 'ndis',
    order: 2,
    tierName: 'Standard',
    tagline: 'Serious About Business',
    description: 'For providers serious about growth and looking to streamline multiple business operations. Ideal for those frustrated with current payroll and HR integration.',
    pricingMode: 'perUser',
    pricePerUser: 19.99,
    pricingLabel: 'Per user/month',
    ctaLabel: 'Begin Your Journey',
    featuresHeading: 'Add smarter rostering, funds tracking, and incident logging.',
    features: [
      'Budget tracker & document access',
      'Incident logging (SIRS-ready)',
      'Worker records & leave management',
      'Access controls & secure messaging',
      'Participant monitoring & case notes',
      'Coordinator dashboard & communication hub',
    ],
    optionalAddons: ['LMS – Wyzed *', 'E-sign (T Sign)'],
    isHighlighted: false,
  },
  {
    _id: 'pricing-ndis-professional',
    _type: 'pricingPlan',
    industryTab: 'ndis',
    order: 3,
    tierName: 'Professional',
    tagline: 'Almost Everything Your Business Needs',
    description: 'For providers with established systems seeking advanced scheduling, compliance, and HR tools to scale confidently.',
    pricingMode: 'perUser',
    pricePerUser: 29.99,
    pricingLabel: 'Per user/month',
    ctaLabel: 'Begin Your Journey',
    featuresHeading: 'Advanced scheduling, compliance, and HR tools to scale confidently.',
    features: [
      'Auto-scheduling & shift compliance',
      'Timesheet approvals & bulk invoicing',
      'Document vault & support allocation',
      'Recruitment & training tools',
      'Custom dashboards & performance tracker',
      'Support approvals & accounting suite',
      'AI-powered automation',
    ],
    optionalAddons: ['LMS – Wyzed', 'AI', 'CMS', 'Custom Workflows & Processes'],
    isHighlighted: true,
  },
  {
    _id: 'pricing-ndis-premium',
    _type: 'pricingPlan',
    industryTab: 'ndis',
    order: 4,
    tierName: 'Premium',
    tagline: 'End-to-End Business Management',
    description: 'For established providers seeking a complete, custom solution to manage all business operations.',
    pricingMode: 'perUser',
    pricePerUser: 39.99,
    pricingLabel: 'Per user/month',
    ctaLabel: 'Begin Your Journey',
    featuresHeading: 'Full-featured platform with custom dashboards and enterprise-grade support.',
    features: [
      'Custom onboarding process & dedicated account manager',
      'Geo-location, sleepover tracking, voice notes & client signatures',
      'Advanced risk management (NDIS Risk Matrix)',
      'HR insights & unlimited storage',
      'Group chat & central communication hub',
      'Privacy settings & timesheet submission',
      'Full access to AI automation & LMS',
    ],
    optionalAddons: ['LMS – Wyzed', 'AI', 'Automated Workflows & Processes'],
    isHighlighted: false,
  },
  // ── ICT ──
  {
    _id: 'pricing-ict-professional',
    _type: 'pricingPlan',
    industryTab: 'ict',
    order: 1,
    tierName: 'Professional',
    tagline: 'Serious About Business',
    description: 'Contact us for pricing',
    pricingMode: 'contactUs',
    pricingLabel: 'Per user/month',
    ctaLabel: 'Try TesseractApps free for 30 days',
    features: [
      'Timesheets',
      'Invoice Management',
      'Basic Dashboards & Insights',
      'Core Admin & User Access',
      'My Profile',
      'Documents management',
      'T-sign',
      'Payroll and accounting',
    ],
    isHighlighted: false,
  },
  {
    _id: 'pricing-ict-premium',
    _type: 'pricingPlan',
    industryTab: 'ict',
    order: 2,
    tierName: 'Premium (& AI)',
    tagline: 'End to End',
    description: 'Contact us for pricing',
    pricingMode: 'contactUs',
    pricingLabel: 'Per user/month',
    ctaLabel: 'Try TesseractApps free for 30 days',
    features: [
      'Everything in Professional, plus',
      'All-in-one HR, LMS, Payroll and Accounting Suite',
      'Smart AI Insights & Automation',
      '24/7 Support with Dedicated Manager',
      'Full Document Management & E-Signatures',
      'End-to-End Workforce & Service Integration',
      'Advanced HR & Recruitment',
      'Group Messaging & Collaboration',
      'Accounting & Payroll Integration',
      'Exportable Reports & Documents',
      'Dedicated Support Chat',
    ],
    optionalAddons: ['AI'],
    isHighlighted: false,
  },
]

// ---------------------------------------------------------------------------
// ── JOB LISTING ─────────────────────────────────────────────────────────────
// ---------------------------------------------------------------------------

const jobListings = [
  {
    _id: 'job-ict-sales-solution-specialist',
    _type: 'jobListing',
    title: 'ICT Sales and Solution Specialist',
    isOpen: true,
    order: 1,
    tags: [
      { _key: key(), _type: 'jobTag', icon: 'dollar', label: 'Up to $180K OTE' },
      { _key: key(), _type: 'jobTag', icon: 'home', label: 'Hybrid' },
      { _key: key(), _type: 'jobTag', icon: 'trending', label: 'Full Sales Cycle' },
    ],
    summary: "Are you a natural hunter who thrives on building relationships, uncovering opportunities, and closing deals? At TesseractApps, we're looking for a driven ICT Solution Specialist to help expand our footprint across the healthcare and NDIS services sector.",
    sections: [
      {
        _key: key(), _type: 'jobSection',
        heading: 'About the Role',
        layout: 'prose',
        body: 'You will manage the entire sales lifecycle — lead generation, discovery, product demonstrations, closing deals, and supporting successful client implementations. This is not a purely transactional role; it combines consultative sales, solution design, onboarding support, and relationship management.',
      },
      {
        _key: key(), _type: 'jobSection',
        heading: "What You'll Be Doing",
        layout: 'two-col',
        col1Heading: 'Sales & Business Development',
        col1Items: [
          'Identify and engage prospective clients through outbound and inbound outreach',
          'Build and manage your own sales pipeline',
          'Deliver tailored product demonstrations aligned to client needs',
          'Manage opportunities through the full sales lifecycle from lead to close',
          'Represent TesseractApps at industry events and forums',
        ],
        col2Heading: 'Client Onboarding & Relationships',
        col2Items: [
          'Support onboarding including data migration and system integrations',
          'Design workflows and automation aligned to client requirements',
          'Build strong, long-term client partnerships',
          'Act as a trusted advisor helping clients improve operational outcomes',
          'Identify opportunities for account growth',
        ],
      },
      {
        _key: key(), _type: 'jobSection',
        heading: "What We're Looking For",
        layout: 'list',
        items: [
          'SaaS sales, business development, or solution consulting experience',
          'Strong communication and relationship-building skills',
          'Confidence explaining technology in simple, practical terms',
          'A proactive, self-motivated approach with a problem-solving mindset',
          'Experience in the healthcare or NDIS sector is highly desirable but not essential',
        ],
      },
      {
        _key: key(), _type: 'jobSection',
        heading: 'Why Join Us?',
        layout: 'inline-list',
        items: [
          'OTE up to $180K (base + commission)',
          'Hybrid working environment',
          'Innovative SaaS platform in fast-growing sector',
          'Collaborative team culture focused on growth',
          'Career pathways into Senior or Sales Leadership roles',
        ],
      },
    ],
    contactEmail: 'bec.mcfarland@tesseractapps.com',
    contactName: 'Bec McFarland (HR Manager)',
  },
]

// ---------------------------------------------------------------------------
// ── MAIN ────────────────────────────────────────────────────────────────────
// ---------------------------------------------------------------------------

async function seed() {
  console.log(`\n🌱  Seeding entities into dataset "${dataset}" on project "${projectId}"...\n`)

  const groups = [
    { label: 'Team Members',   docs: teamMembers },
    { label: 'Release Notes',  docs: releaseNotes },
    { label: 'Pricing Plans',  docs: pricingPlans },
    { label: 'Job Listings',   docs: jobListings },
  ]

  let totalCreated = 0
  let totalErrors = 0

  for (const { label, docs } of groups) {
    console.log(`\n── ${label} (${docs.length}) ─────────────────────────`)
    for (const doc of docs) {
      try {
        await client.createOrReplace(doc)
        console.log(`  ✅  ${doc._id}`)
        totalCreated++
      } catch (err) {
        console.error(`  ❌  ${doc._id}: ${err.message}`)
        totalErrors++
      }
    }
  }

  console.log(`\n📊  Done: ${totalCreated} created/updated, ${totalErrors} errors.\n`)

  if (totalErrors === 0) {
    console.log('🎉  All entity documents seeded successfully!')
    console.log('   → Go to /studio → Team Member and upload photos for each member.')
    console.log('   → Pricing and job listings are fully populated.')
    console.log('   → Release notes have 10 versions ready.\n')
  } else {
    console.log('⚠️   Some documents failed. Check the errors above and re-run to retry.\n')
    process.exit(1)
  }
}

seed().catch((err) => {
  console.error('Fatal error:', err)
  process.exit(1)
})
