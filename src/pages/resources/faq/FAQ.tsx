import "./FAQStyles.css";
import { Link } from "react-router-dom";
import SEO from "../../../components/common/SEO";

const HELP_CENTRE_SECTIONS = [
  {
    title: "Getting Started",
    items: [
      "Platform onboarding checklist",
      "Role setup and access basics",
      "First week implementation milestones",
    ],
  },
  {
    title: "Product Guides",
    items: [
      "Rostering and scheduling workflows",
      "Timesheets, claiming, and payroll alignment",
      "Compliance evidence and incident handling",
    ],
  },
  {
    title: "Troubleshooting",
    items: [
      "Common setup and data issues",
      "Permission and user access troubleshooting",
      "Escalation paths for urgent blockers",
    ],
  },
  {
    title: "Support Channels",
    items: [
      "Business-hours support queue",
      "Guided implementation support",
      "Release update communications",
    ],
  },
];

const FAQ = () => {
  return (
    <div>
      <SEO
        title="Help Center | FAQs & Support Resources | TesseractApps"
        description="Find answers to common questions about TesseractApps. Browse FAQs, guides, and support resources to get the most from your NDIS software platform."
      />

      {/* ── Hero ── */}
      <section id="hc-hero">
        <div id="hc-hero-inner">
          <div id="hc-hero-label">Help Centre</div>
          <h1 id="hc-hero-heading">Support Resources Built for Care Teams</h1>
          <p id="hc-hero-sub">
            The help centre is now structured around implementation support, product guidance,
            and issue resolution, in line with the final resource strategy.
          </p>
        </div>
      </section>

      {/* ── Content ── */}
      <section id="hc-content">
        <div id="hc-outer">
          <div id="hc-section-label">Support Framework</div>
          <h2 id="hc-section-heading">How support content is organised</h2>

          <div id="hc-grid">
            {HELP_CENTRE_SECTIONS.map((section) => (
              <article key={section.title} className="hc-card">
                <h3 className="hc-card-title">{section.title}</h3>
                <ul className="hc-list">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div id="hc-resource-links">
            <h3 id="hc-resource-links-heading">Related resources</h3>
            <div id="hc-link-row">
              <Link to="/blogs" className="hc-resource-link">Blog</Link>
              <Link to="/whitepapers" className="hc-resource-link">Whitepapers</Link>
              <Link to="/changelog" className="hc-resource-link">Release Notes</Link>
              <Link to="/contact-us" className="hc-resource-link">Contact Support</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
