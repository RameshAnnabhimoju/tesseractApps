import { Suspense, lazy, useEffect, useRef, useState } from "react";
import "./HomeV3Styles.css";
import SEO from "../../components/common/SEO";
import HeroArcsLeftComponent from "../../components/sections/heroArcsComponent/HeroArcsComponent";
import HeroArcsRightComponent from "../../components/sections/heroArcsComponent/HeroArcsComponent";
import { homeLeftArcsData, homeRightArcsData } from "../../data/homeArcsData";
import { testimonialDummyData } from "../../data/testimonialData";
import useAppNavigate from "../../hooks/useAppNavigate";

const TrustedClientsComponent = lazy(
  () => import("../../components/sections/trustedClients/TrustedClientsComponent")
);
const OurBlogComponent = lazy(
  () => import("../../components/sections/ourBlogComponent/OurBlogComponent")
);

// ─── Animated counter hook ────────────────────────────────────────────────
function useCountUp(target: number, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

// ─── Inline SVG icons ─────────────────────────────────────────────────────
const IconArrow = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconShield = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
);

const IconCalendar = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const IconClock = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const IconUsers = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const IconChart = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
    <line x1="2" y1="20" x2="22" y2="20" />
  </svg>
);

const IconDollar = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="12" y1="1" x2="12" y2="23" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);

const IconAlert = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <triangle points="10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

const IconGlobe = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const IconEye = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const IconLayers = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
);

const IconTag = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
    <line x1="7" y1="7" x2="7.01" y2="7" />
  </svg>
);

const IconCheck = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <polyline points="2 8 6 12 14 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// ─── Maturity stage data ──────────────────────────────────────────────────
const MATURITY_STAGES = [
  {
    key: "start",
    label: "Start",
    staff: "1–15 staff",
    focus: "Structure",
    desc: "Build your compliance foundation. Compliant rostering, participant records, incident reporting, and NDIS claiming from day one. Founding Cohort pricing available.",
  },
  {
    key: "growth",
    label: "Growth",
    staff: "15–60 staff",
    focus: "Control",
    desc: "Stabilise payroll and operations. Automate SCHADS interpretation, connect timesheets to invoicing, and gain real-time oversight across your workforce.",
  },
  {
    key: "scale",
    label: "Scale",
    staff: "60–120 staff",
    focus: "Governance",
    desc: "Enforce governance across every site. Approval workflows, automated SIRS escalation, multi-site consistency. The platform enforces the rules you set.",
  },
  {
    key: "enterprise",
    label: "Enterprise",
    staff: "120+ staff",
    focus: "Consolidation",
    desc: "Consolidate finance, payroll, and board reporting. Unify multi-site operations and surface the data your leadership needs to act.",
  },
];

// ─── Operational flow steps ──────────────────────────────────────────────
const FLOW_STEPS = [
  { num: 1, title: "Intake", band: "ops", cap: "Participant Management", slug: "/capabilities/participant-management" },
  { num: 2, title: "Service Agreement", band: "ops", cap: "Participant Management", slug: "/capabilities/participant-management" },
  { num: 3, title: "Funding Allocation", band: "ops", cap: "NDIS Claiming", slug: "/capabilities/ndis-claiming-invoicing" },
  { num: 4, title: "Roster Planning", band: "ops", cap: "Rostering", slug: "/capabilities/rostering-scheduling" },
  { num: 5, title: "Shift Delivery", band: "care", cap: "Clock In/Out", slug: "/capabilities/clock-in-out" },
  { num: 6, title: "Case Notes", band: "care", cap: "Participant Management", slug: "/capabilities/participant-management" },
  { num: 7, title: "Incident Reporting", band: "care", cap: "Incidents & SIRS", slug: "/capabilities/incidents-sirs" },
  { num: 8, title: "Timesheet & Payroll", band: "finance", cap: "Timesheets & Payroll", slug: "/capabilities/timesheets-payroll" },
  { num: 9, title: "Invoice & Claim", band: "finance", cap: "NDIS Claiming", slug: "/capabilities/ndis-claiming-invoicing" },
  { num: 10, title: "Reconciliation", band: "finance", cap: "Accounting", slug: "/capabilities/accounting-reporting" },
  { num: 11, title: "Reporting", band: "intel", cap: "Dashboards", slug: "/capabilities/dashboards-reporting" },
  { num: 12, title: "Audit Evidence", band: "intel", cap: "Compliance", slug: "/capabilities/compliance-audit-readiness" },
];

// ─── Getting started steps ────────────────────────────────────────────────
const START_STEPS = [
  {
    num: 1,
    title: "Assess",
    desc: "Book a demo. We evaluate your operations, identify your provider maturity stage, and map the configuration your organisation needs.",
  },
  {
    num: 2,
    title: "Configure",
    desc: "Your dedicated onboarding team configures TesseractApps to match your operational reality — rostering rules, SCHADS interpretation, claiming workflows, and approval chains.",
  },
  {
    num: 3,
    title: "Migrate & Train",
    desc: "Your data is migrated with full validation. Role-based training ensures every team member — from support worker to finance manager — is ready.",
  },
  {
    num: 4,
    title: "Go Live",
    desc: "You launch with a dedicated onboarding specialist. Ongoing support from day one. Most providers are fully operational within six weeks.",
  },
];

// ─── Problems we solve ────────────────────────────────────────────────────
const PROBLEMS = [
  {
    icon: <IconCalendar />,
    title: "Rostering-Payroll Gap",
    desc: "You're running rostering in one system and payroll in another — and they never agree.",
    linkLabel: "Rostering & Scheduling",
    slug: "/capabilities/rostering-scheduling",
  },
  {
    icon: <IconAlert />,
    title: "Incident Trail Gaps",
    desc: "You can't confidently tell the NDIS Commission when an incident was reported, escalated, and resolved.",
    linkLabel: "Incidents & SIRS",
    slug: "/capabilities/incidents-sirs",
  },
  {
    icon: <IconClock />,
    title: "SCHADS Risk",
    desc: "Your SCHADS interpretation lives in someone's head — and payroll errors surface weeks later.",
    linkLabel: "Timesheets & Payroll",
    slug: "/capabilities/timesheets-payroll",
  },
  {
    icon: <IconDollar />,
    title: "Revenue Leakage",
    desc: "You're submitting NDIS claims manually and reconciling against spreadsheets.",
    linkLabel: "NDIS Claiming & Invoicing",
    slug: "/capabilities/ndis-claiming-invoicing",
  },
  {
    icon: <IconShield />,
    title: "Audit Anxiety",
    desc: "Compliance documentation is scattered across email, shared drives, and filing cabinets.",
    linkLabel: "Compliance & Audit Readiness",
    slug: "/capabilities/compliance-audit-readiness",
  },
  {
    icon: <IconEye />,
    title: "No Visibility",
    desc: "You have no single view of your operations — every report requires chasing three people.",
    linkLabel: "Dashboards & Reporting",
    slug: "/capabilities/dashboards-reporting",
  },
];

// ─── Explore the platform cards ───────────────────────────────────────────
const EXPLORE_CARDS = [
  {
    icon: <IconCalendar />,
    title: "Rostering & Scheduling",
    desc: "Auto-schedule qualified workers. Manage SIL sleepovers. Enforce SCHADS at scheduling.",
    slug: "/capabilities/rostering-scheduling",
  },
  {
    icon: <IconClock />,
    title: "Timesheets & Payroll",
    desc: "Geo-verified clock-ins. Built-in SCHADS Award engine. 3-Layer Reconciliation.",
    slug: "/capabilities/timesheets-payroll",
  },
  {
    icon: <IconUsers />,
    title: "Workforce Management",
    desc: "Credential tracking, onboarding workflows, and leave management integrated with rostering.",
    slug: "/capabilities/workforce-management",
  },
  {
    icon: <IconLayers />,
    title: "Participant Management",
    desc: "Centralised profiles. Care plans linked to goals. Real-time funding visibility.",
    slug: "/capabilities/participant-management",
  },
  {
    icon: <IconAlert />,
    title: "Incidents & SIRS",
    desc: "Mobile incident logging. Automatic SIRS classification and escalation. CAPA tracking.",
    slug: "/capabilities/incidents-sirs",
  },
  {
    icon: <IconShield />,
    title: "Compliance & Audit",
    desc: "Embedded compliance across every function. Evidence retrieved, not assembled.",
    slug: "/capabilities/compliance-audit-readiness",
  },
  {
    icon: <IconDollar />,
    title: "NDIS Claiming",
    desc: "Claims generated from verified delivery. Pre-submission validation. Budget tracking.",
    slug: "/capabilities/ndis-claiming-invoicing",
  },
  {
    icon: <IconChart />,
    title: "Dashboards & Reporting",
    desc: "Role-specific dashboards from support worker to CEO. One source of truth.",
    slug: "/capabilities/dashboards-reporting",
  },
  {
    icon: <IconTag />,
    title: "Pricing",
    desc: "$39.99/seat/month. No feature gating. No per-module charges. One price.",
    slug: "/pricing",
  },
  {
    icon: <IconGlobe />,
    title: "Find Your Stage",
    desc: "Start | Growth | Scale | Enterprise — see which configuration matches your operations.",
    slug: "/pricing",
  },
];

// ─── Word cycle words ─────────────────────────────────────────────────────
const CYCLE_WORDS = ["Rostering", "Payroll", "Compliance", "Claiming", "Reporting"];

// ═══════════════════════════════════════════════════════════════════════════
// HomeV3 Component
// ═══════════════════════════════════════════════════════════════════════════

const HomeV3 = () => {
  const appNavigate = useAppNavigate();

  // Word cycle
  const [wordIdx, setWordIdx] = useState(0);
  const [cycling, setCycling] = useState<"in" | "out">("in");

  useEffect(() => {
    const interval = setInterval(() => {
      setCycling("out");
      setTimeout(() => {
        setWordIdx((i) => (i + 1) % CYCLE_WORDS.length);
        setCycling("in");
      }, 320);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Font scope
  useEffect(() => {
    document.body.classList.add("hv3-font-scope");
    return () => document.body.classList.remove("hv3-font-scope");
  }, []);

  return (
    <div className="hv3-page">
      <SEO
        title="One platform for every NDIS operation | Rostering, Payroll, Compliance & Claiming - TesseractApps"
        description="Purpose-built NDIS operational infrastructure connecting rostering, payroll, compliance, and participant management on one platform. Starting at $39.99/seat/month."
      />

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 1 — HERO
      ════════════════════════════════════════════════════════════════════ */}
      <section className="hv3-hero">
        <div className="hv3-hero-arcs-left" aria-hidden="true">
          <HeroArcsLeftComponent pendulums={homeLeftArcsData} />
        </div>

        <div className="hv3-hero-center">
          <div className="hv3-hero-eyebrow">
            <span className="hv3-hero-eyebrow-dot" />
            NDIS Operational Platform · Salesforce Native · Australian Hosted
          </div>

          <h1 className="hv3-hero-h1">
            One platform for every
            <span className="hv3-hero-h1-line2">NDIS operation.</span>
          </h1>

          <p className="hv3-hero-subline">
            <span
              className={`hv3-hero-word-cycle hv3-cycling-${cycling}`}
            >
              {CYCLE_WORDS[wordIdx]}
            </span>
            {". "}
            Payroll. Compliance. Claiming. Reporting.
            <br />
            All connected on one architecture that deepens as you grow.
          </p>

          <p className="hv3-hero-body">
            Stop stitching together disconnected tools. TesseractApps gives providers a single operational platform — purpose-built for the NDIS, running natively on Salesforce Hyperforce. Everything stays connected. Everything stays compliant.
          </p>

          <div className="hv3-hero-ctas">
            <button className="hv3-btn-primary" onClick={() => appNavigate("/book-a-demo")}>
              Book a Demo
              <IconArrow />
            </button>
            <button className="hv3-btn-outline-white" onClick={() => appNavigate("/signup")}>
              Begin Your Journey
            </button>
          </div>

          <p className="hv3-hero-fine">
            Book a Provider Maturity Review
            <span className="hv3-hero-fine-sep">·</span>
            Start Your Provider Setup
          </p>
        </div>

        <div className="hv3-hero-arcs-right" aria-hidden="true">
          <HeroArcsRightComponent pendulums={homeRightArcsData} />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          TRUSTED CLIENTS STRIP
      ════════════════════════════════════════════════════════════════════ */}
      <section className="hv3-clients">
        <p className="hv3-clients-label">Trusted by NDIS providers across Australia</p>
        <Suspense fallback={<div style={{ minHeight: 80 }} />}>
          <TrustedClientsComponent />
        </Suspense>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 2 — PROVIDER MATURITY MODEL
      ════════════════════════════════════════════════════════════════════ */}
      <section className="hv3-maturity">
        <div className="hv3-outer">
          <div className="hv3-maturity-header">
            <div className="hv3-label hv3-label--light">Provider Maturity Model</div>
            <h2 className="hv3-h2 hv3-h2--light">
              Where are you on your provider journey?
            </h2>
            <p className="hv3-maturity-intro">
              Every NDIS provider follows a maturity path. TesseractApps is built around it — so the platform meets you where you are and grows with you. Same architecture at every stage. Configuration deepens. You never start again.
            </p>
          </div>

          <div className="hv3-maturity-grid">
            {MATURITY_STAGES.map((stage) => (
              <div
                key={stage.key}
                className={`hv3-maturity-card hv3-maturity-card--${stage.key}`}
              >
                <div className="hv3-maturity-stage-chip">{stage.label}</div>
                <div className="hv3-maturity-staff">{stage.staff}</div>
                <div className="hv3-maturity-focus">Focus</div>
                <div className="hv3-maturity-focus-val">{stage.focus}</div>
                <p className="hv3-maturity-desc">{stage.desc}</p>
              </div>
            ))}
          </div>

          <div className="hv3-maturity-footer">
            <button
              className="hv3-maturity-link"
              onClick={() => appNavigate("/pricing")}
            >
              See all pricing stages
              <IconArrow />
            </button>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 3 — OPERATIONAL FLOW
      ════════════════════════════════════════════════════════════════════ */}
      <section className="hv3-flow">
        <div className="hv3-outer">
          <div className="hv3-flow-header">
            <div className="hv3-label">Operational Flow</div>
            <h2 className="hv3-h2">
              From intake to audit evidence — one connected flow.
            </h2>
          </div>
          <p className="hv3-flow-intro">
            Every step in your NDIS operations connects to the next. No re-entry. No reconciliation gaps. No data lost between systems.
          </p>
        </div>

        <div className="hv3-flow-pipeline-wrap">
          <div className="hv3-flow-pipeline">
            {FLOW_STEPS.map((step) => (
              <div key={step.num} className="hv3-flow-step">
                <div className={`hv3-flow-node hv3-flow-node--${step.band}`}>
                  {step.num}
                </div>
                <div className="hv3-flow-step-body">
                  <div className="hv3-flow-step-title">{step.title}</div>
                  <button
                    className="hv3-flow-step-link"
                    onClick={() => appNavigate(step.slug)}
                  >
                    {step.cap} →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="hv3-outer">
          <div className="hv3-flow-legend">
            <div className="hv3-flow-legend-item">
              <div className="hv3-flow-legend-dot hv3-flow-legend-dot--ops" />
              Operations
            </div>
            <div className="hv3-flow-legend-item">
              <div className="hv3-flow-legend-dot hv3-flow-legend-dot--care" />
              Care Delivery
            </div>
            <div className="hv3-flow-legend-item">
              <div className="hv3-flow-legend-dot hv3-flow-legend-dot--finance" />
              Finance
            </div>
            <div className="hv3-flow-legend-item">
              <div className="hv3-flow-legend-dot hv3-flow-legend-dot--intel" />
              Intelligence
            </div>
          </div>

          <p className="hv3-flow-footer-text">
            Every step generates data that feeds the next. When an auditor, plan manager, or board member asks a question — the answer already exists in the system.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 4 — GETTING STARTED
      ════════════════════════════════════════════════════════════════════ */}
      <section className="hv3-start">
        <div className="hv3-outer">
          <div className="hv3-start-header">
            <div className="hv3-label">Getting Started</div>
            <h2 className="hv3-h2">Live in weeks, not months.</h2>
            <p className="hv3-sub">
              Getting onto TesseractApps is a structured process — not a six-month project.
            </p>
          </div>

          <div className="hv3-start-steps">
            {START_STEPS.map((step) => (
              <div key={step.num} className="hv3-start-step">
                <div className="hv3-start-num">{step.num}</div>
                <h3 className="hv3-start-step-title">{step.title}</h3>
                <p className="hv3-start-step-desc">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="hv3-start-ctas">
            <button
              className="hv3-btn-primary"
              onClick={() => appNavigate("/book-a-demo")}
            >
              Book a Demo
              <IconArrow />
            </button>
            <button
              className="hv3-btn-outline"
              onClick={() => appNavigate("/signup")}
            >
              Begin Your Journey
            </button>
          </div>

          <p className="hv3-start-guarantee">
            <IconCheck />
            Money back guarantee
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 5 — WHY NOW
      ════════════════════════════════════════════════════════════════════ */}
      <section className="hv3-whynow">
        <div className="hv3-outer">
          <div className="hv3-whynow-inner">
            <div className="hv3-whynow-text">
              <div className="hv3-label">Why Now</div>
              <h2 className="hv3-h2">The cost of waiting is rising.</h2>
              <div className="hv3-whynow-body">
                <p>
                  The NDIS regulatory environment is tightening. Audit frequency is increasing. The NDIS Commission now expects providers to demonstrate compliance continuously — not scramble to prove it when an auditor arrives.
                </p>
                <p>
                  Every month you run on disconnected spreadsheets, siloed systems, or manual workarounds, the risk compounds. Gaps in incident reporting, payroll errors under SCHADS, and missing audit trails do not get easier to fix later — they get more expensive.
                </p>
                <p>
                  The providers building their operational foundation now are the ones who will navigate what's ahead with confidence.
                </p>
              </div>
            </div>

            <div className="hv3-whynow-panel">
              <div className="hv3-whynow-panel-label">Risk exposure without a unified platform</div>
              <div className="hv3-whynow-risks">
                {[
                  { label: "Payroll compliance errors", width: "88%", color: "#ef4444" },
                  { label: "Incomplete audit trails", width: "76%", color: "#f59e0b" },
                  { label: "Incident reporting gaps", width: "70%", color: "#f97316" },
                  { label: "Revenue reconciliation gaps", width: "62%", color: "#eab308" },
                ].map((risk) => (
                  <div key={risk.label} className="hv3-whynow-risk">
                    <div
                      className="hv3-whynow-risk-bar"
                      style={{ width: risk.width, background: risk.color }}
                    />
                    <div className="hv3-whynow-risk-label">{risk.label}</div>
                  </div>
                ))}
              </div>
              <div className="hv3-whynow-callout">
                Providers on TesseractApps report audit-ready evidence retrieval in minutes — not days.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 6 — PROBLEMS WE SOLVE
      ════════════════════════════════════════════════════════════════════ */}
      <section className="hv3-problems">
        <div className="hv3-outer">
          <div className="hv3-problems-header">
            <div className="hv3-label">Problems We Solve</div>
            <h2 className="hv3-h2">Sound familiar?</h2>
            <p className="hv3-sub">
              These are the operational gaps that cost NDIS providers money, time, and compliance certainty.
            </p>
          </div>

          <div className="hv3-problems-grid">
            {PROBLEMS.map((p) => (
              <div key={p.title} className="hv3-problem-card">
                <div className="hv3-problem-icon">{p.icon}</div>
                <h3 className="hv3-problem-title">{p.title}</h3>
                <p className="hv3-problem-desc">{p.desc}</p>
                <button
                  className="hv3-problem-link"
                  onClick={() => appNavigate(p.slug)}
                >
                  {p.linkLabel}
                  <IconArrow />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 7 — EXPLORE THE PLATFORM
      ════════════════════════════════════════════════════════════════════ */}
      <section className="hv3-explore">
        <div className="hv3-outer">
          <div className="hv3-explore-header">
            <div className="hv3-label">Explore the Platform</div>
            <h2 className="hv3-h2">See what connects.</h2>
            <p className="hv3-sub">
              Every capability is part of one connected architecture. Click to explore any area.
            </p>
          </div>

          <div className="hv3-explore-grid">
            {EXPLORE_CARDS.map((card) => (
              <button
                key={card.title}
                className="hv3-explore-card"
                onClick={() => appNavigate(card.slug)}
              >
                <div className="hv3-explore-icon">{card.icon}</div>
                <div className="hv3-explore-card-title">{card.title}</div>
                <div className="hv3-explore-card-desc">{card.desc}</div>
                <div className="hv3-explore-card-arrow">
                  Explore <IconArrow />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          TESTIMONIALS
      ════════════════════════════════════════════════════════════════════ */}
      <section className="hv3-testimonials">
        <div className="hv3-outer">
          <div className="hv3-testimonials-header">
            <div className="hv3-label">Testimonials</div>
            <h2 className="hv3-h2">Real stories. Real results.</h2>
            <p className="hv3-sub">Trusted by leading NDIS providers across Australia.</p>
          </div>

          <div className="hv3-testimonials-grid">
            {testimonialDummyData.map((item) => (
              <div key={item.id} className="hv3-t-card">
                <div className="hv3-t-stars" aria-label={`${item.rating} out of 5`}>
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <svg key={idx} width="14" height="14" viewBox="0 0 14 14" fill={idx < item.rating ? "#FBBC04" : "#e0e0e0"} aria-hidden="true">
                      <path d="M7 1l1.8 3.6L13 5.3l-3 2.9.7 4.1L7 10.4l-3.7 1.9.7-4.1L1 5.3l4.2-.7z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="hv3-t-quote">{item.testimonial}</blockquote>
                <div className="hv3-t-author">
                  <img
                    src={item.authorImage}
                    alt={item.author}
                    className="hv3-t-author-img"
                    width="40"
                    height="40"
                    loading="lazy"
                  />
                  <div>
                    <div className="hv3-t-author-name">{item.author}</div>
                    {item.authorTitle && (
                      <div className="hv3-t-author-role">{item.authorTitle}</div>
                    )}
                  </div>
                </div>
              </div>
            ))}

            <div className="hv3-t-card hv3-t-card--cta">
              <div className="hv3-t-cta-icon" aria-hidden="true">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                  <circle cx="18" cy="18" r="17" stroke="#5bb8f5" strokeWidth="1.5" />
                  <path d="M11 18h14M18 11v14" stroke="#5bb8f5" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <p className="hv3-t-cta-text">
                Join hundreds of NDIS providers already running on TesseractApps.
              </p>
              <button
                className="hv3-btn-white"
                onClick={() => appNavigate("/signup")}
              >
                Begin Your Journey
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          BLOG
      ════════════════════════════════════════════════════════════════════ */}
      <section className="hv3-blog">
        <div className="hv3-outer">
          <div className="hv3-blog-header">
            <div className="hv3-label">From the Blog</div>
            <h2 className="hv3-h2">Insights for NDIS providers.</h2>
          </div>
          <Suspense fallback={<div style={{ minHeight: 240 }} />}>
            <OurBlogComponent />
          </Suspense>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 8 — FINAL CTA BANNER
      ════════════════════════════════════════════════════════════════════ */}
      <section className="hv3-cta-banner">
        <div className="hv3-cta-banner-inner">
          <h2 className="hv3-cta-banner-heading">
            See how TesseractApps works<br />for your organisation.
          </h2>
          <p className="hv3-cta-banner-sub">
            Your demo is configured for your care type, team size, and provider maturity stage.
            30 minutes. Live platform — not a slide deck. Clear next steps, no pressure.
          </p>
          <div className="hv3-cta-banner-btns">
            <button
              className="hv3-btn-white"
              onClick={() => appNavigate("/book-a-demo")}
            >
              Book a Demo
            </button>
            <button
              className="hv3-btn-outline-white"
              onClick={() => appNavigate("/signup")}
            >
              Begin Your Journey
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeV3;
