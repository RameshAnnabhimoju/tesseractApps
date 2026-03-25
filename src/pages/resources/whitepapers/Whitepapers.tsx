import "./WhitepapersStyles.css";
import { Link } from "react-router-dom";
import SEO from "../../../components/common/SEO";

const WHITEPAPERS = [
  {
    id: "wp-ndis-ops",
    title: "Modern NDIS Operations Playbook",
    description:
      "A practical guide to reducing operational friction across rostering, compliance evidence, and participant delivery.",
    audience: "Operations and Service Managers",
    status: "Planned for 2026",
  },
  {
    id: "wp-compliance",
    title: "Audit Readiness Without Spreadsheet Overload",
    description:
      "A framework for building clear, defensible audit trails while cutting manual handoffs and duplicate entry.",
    audience: "Compliance and Quality Leads",
    status: "Planned for 2026",
  },
  {
    id: "wp-finance",
    title: "Scaling Claims and Payroll Together",
    description:
      "How growth-stage providers can align timesheets, claiming, and payroll decisions to protect margin and trust.",
    audience: "Finance and Payroll Teams",
    status: "Planned for 2026",
  },
];

const Whitepapers = () => {
  return (
    <div>
      <SEO
        title="Whitepapers & Research | NDIS Digital Transformation | TesseractApps"
        description="Download free whitepapers on NDIS digital transformation, workforce management best practices, and care sector innovation for 2025-2030."
      />

      {/* ── Hero ── */}
      <section id="wp-hero">
        <div id="wp-hero-inner">
          <div id="wp-hero-label">Whitepapers & Research</div>
          <h1 id="wp-hero-heading">Research and Decision Guides for Care Leaders</h1>
          <p id="wp-hero-sub">
            The final resource strategy positions whitepapers as high-value decision assets.
            Explore the current publishing pipeline and request early access.
          </p>
        </div>
      </section>

      {/* ── Content ── */}
      <section id="wp-content">
        <div id="wp-outer">
          <div id="wp-section-label">Available Downloads</div>
          <div id="wp-section-heading">2026 whitepaper roadmap</div>

          <div id="wp-grid">
            {WHITEPAPERS.map((wp) => (
              <article key={wp.id} className="wp-card">
                <div className="wp-card-status">{wp.status}</div>
                <h3 className="wp-card-title">{wp.title}</h3>
                <p className="wp-card-description">{wp.description}</p>
                <div className="wp-card-audience">Best for: {wp.audience}</div>
                <Link to="/contact-us" className="wp-card-cta">Request whitepaper access</Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Whitepapers;
