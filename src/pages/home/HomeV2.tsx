import { Suspense, lazy, useEffect, useRef, useState } from "react";
import "./HomeV2Styles.css";
import SEO from "../../components/common/SEO";
import HeroArcsLeftComponent from "../../components/sections/heroArcsComponent/HeroArcsComponent";
import HeroArcsRightComponent from "../../components/sections/heroArcsComponent/HeroArcsComponent";
import { homeLeftArcsData, homeRightArcsData } from "../../data/homeArcsData";
import { featuresDummyData } from "../../data/featuresData";
import { howItWorksDummyData } from "../../data/howItWorksData";
import { testimonialDummyData } from "../../data/testimonialData";
import useAppNavigate from "../../hooks/useAppNavigate";

// Lazy-loaded heavy slider components
const TrustedClientsComponent = lazy(
  () => import("../../components/sections/trustedClients/TrustedClientsComponent")
);
const OurBlogComponent = lazy(
  () => import("../../components/sections/ourBlogComponent/OurBlogComponent")
);

// ─── Animated counter hook ───────────────────────────────────────────────────
function useCountUp(target: number, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

// ─── Stats counter item ───────────────────────────────────────────────────────
function StatItem({
  value,
  suffix,
  label,
  start,
  duration,
}: {
  value: number;
  suffix: string;
  label: string;
  start: boolean;
  duration?: number;
}) {
  const count = useCountUp(value, duration ?? 1800, start);
  return (
    <div className="hv2-stat-item">
      <div className="hv2-stat-number">
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="hv2-stat-label">{label}</div>
    </div>
  );
}

// ─── Feature pill tabs ────────────────────────────────────────────────────────
const FEATURED_FEATURES = [0, 3, 10, 7, 8, 11, 4, 13]; // indices from featuresDummyData

// ─── HomeV2 ───────────────────────────────────────────────────────────────────
const HomeV2 = () => {
  const appNavigate = useAppNavigate();

  // Stats section trigger
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsVisible, setStatsVisible] = useState(false);

  // Features active tab
  const [activeFeature, setActiveFeature] = useState(0);

  // How it works step hover
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    document.body.classList.add("hv2-font-scope");
    return () => document.body.classList.remove("hv2-font-scope");
  }, []);

  // Stats intersection observer
  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const featuredList = FEATURED_FEATURES.map((i) => featuresDummyData[i]);
  const activeFeatureData = featuredList[activeFeature];

  return (
    <div className="hv2-page">
      <SEO
        title="TesseractApps | NDIS Software & Workforce Management Platform Australia"
        description="TesseractApps is Australia's leading NDIS software solution for workforce management, rostering, compliance, and billing. Streamline your care operations with our all-in-one platform."
      />

      {/* ═══════════════════════════════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="hv2-hero">
        <div className="hv2-hero-arcs-left" aria-hidden="true">
          <HeroArcsLeftComponent pendulums={homeLeftArcsData} />
        </div>

        <div className="hv2-hero-center">
          {/* Logo mark */}
          <div className="hv2-hero-logo" role="img" aria-label="TesseractApps" />

          {/* Eyebrow */}
          <div className="hv2-hero-eyebrow">
            <span className="hv2-eyebrow-dot" />
            NDIS Workforce Management Platform
          </div>

          {/* Headline */}
          <h1 className="hv2-hero-h1">
            End-to-End Workforce
            <br />
            <span className="hv2-hero-h1-accent">Management Software</span>
          </h1>

          {/* Sub text */}
          <p className="hv2-hero-sub">
            TesseractApps streamlines compliance, team management, NDIS-related
            care and service delivery for providers — all on a secure, scalable
            platform.
          </p>

          {/* CTAs */}
          <div className="hv2-hero-ctas">
            <button
              className="hv2-btn-primary"
              onClick={() => appNavigate("/signup")}
            >
              Begin Your Journey
            </button>
            <button
              className="hv2-btn-outline"
              onClick={() => appNavigate("/book-a-demo")}
            >
              Book a Demo
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          <p className="hv2-hero-fine">No credit card required.</p>
        </div>

        <div className="hv2-hero-arcs-right" aria-hidden="true">
          <HeroArcsRightComponent pendulums={homeRightArcsData} />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          TRUSTED CLIENTS STRIP
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="hv2-clients-strip">
        <p className="hv2-clients-label">Trusted by NDIS providers across Australia</p>
        <div className="hv2-clients-slider-wrap">
          <Suspense fallback={<div style={{ minHeight: 80 }} />}>
            <TrustedClientsComponent />
          </Suspense>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          STATS BANNER
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="hv2-stats" ref={statsRef}>
        <div className="hv2-stats-inner">
          <StatItem value={1000} suffix="+" label="NDIS Professionals" start={statsVisible} duration={1600} />
          <div className="hv2-stats-divider" aria-hidden="true" />
          <StatItem value={40} suffix="%" label="Faster Incident Resolution" start={statsVisible} duration={1200} />
          <div className="hv2-stats-divider" aria-hidden="true" />
          <StatItem value={99} suffix=".9%" label="Platform Uptime" start={statsVisible} duration={1000} />
          <div className="hv2-stats-divider" aria-hidden="true" />
          <StatItem value={16} suffix="+" label="Integrated Modules" start={statsVisible} duration={1400} />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          FEATURES — tab-driven showcase
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="hv2-features">
        <div className="hv2-section-label">FEATURES</div>
        <h2 className="hv2-section-heading">
          Everything your team needs,<br />in one platform.
        </h2>
        <p className="hv2-section-sub">
          Manage your workforce, automate compliance, and deliver high-quality
          NDIS services without stitching together a dozen tools.
        </p>

        <div className="hv2-features-body">
          {/* Pill tabs */}
          <div className="hv2-features-tabs" role="tablist">
            {featuredList.map((f, i) => (
              <button
                key={f.id}
                role="tab"
                aria-selected={i === activeFeature}
                className={`hv2-features-tab${i === activeFeature ? " hv2-features-tab--active" : ""}`}
                onClick={() => setActiveFeature(i)}
              >
                {f.title}
              </button>
            ))}
          </div>

          {/* Showcase panel */}
          <div className="hv2-features-showcase" key={activeFeature}>
            <div className="hv2-features-showcase-text">
              <div className="hv2-features-showcase-icon-wrap">
                <img
                  src={activeFeatureData.image}
                  alt={activeFeatureData.title}
                  className="hv2-features-showcase-icon"
                  width="56"
                  height="56"
                  loading="lazy"
                />
              </div>
              <h3 className="hv2-features-showcase-title">{activeFeatureData.title}</h3>
              <p className="hv2-features-showcase-desc">{activeFeatureData.description}</p>
              <button
                className="hv2-btn-ghost"
                onClick={() => appNavigate(activeFeatureData.title)}
              >
                Learn more
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            <div className="hv2-features-showcase-visual">
              <div className="hv2-features-img-frame">
                <img
                  src={activeFeatureData.image}
                  alt={activeFeatureData.title}
                  className="hv2-features-img"
                  width="320"
                  height="320"
                  loading="lazy"
                />
              </div>
              <div className="hv2-features-visual-glow" aria-hidden="true" />
            </div>
          </div>

          {/* All features grid teaser */}
          <div className="hv2-features-grid">
            {featuresDummyData.slice(0, 12).map((f) => (
              <button
                key={f.id}
                className="hv2-features-grid-item"
                onClick={() => appNavigate(f.title)}
              >
                <img
                  src={f.image}
                  alt={f.title}
                  className="hv2-features-grid-icon"
                  width="36"
                  height="36"
                  loading="lazy"
                />
                <span className="hv2-features-grid-name">{f.title}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          HOW IT WORKS — horizontal stepper
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="hv2-hiw">
        <div className="hv2-hiw-inner">
          <div className="hv2-hiw-header">
            <div className="hv2-section-label">HOW IT WORKS</div>
            <h2 className="hv2-section-heading hv2-hiw-heading">
              Up and running<br />in three steps.
            </h2>
            <p className="hv2-section-sub hv2-hiw-sub">
              From sign-up to fully operational — we make the transition
              smooth, fast, and supported every step of the way.
            </p>
          </div>

          <div className="hv2-hiw-steps">
            {/* Connector line */}
            <div className="hv2-hiw-line" aria-hidden="true" />

            {howItWorksDummyData.map((step, i) => (
              <div
                key={step.id}
                className={`hv2-hiw-step${activeStep === i ? " hv2-hiw-step--active" : ""}`}
                onMouseEnter={() => setActiveStep(i)}
                onFocus={() => setActiveStep(i)}
                tabIndex={0}
              >
                <div className="hv2-hiw-step-number">0{step.id}</div>
                <div className="hv2-hiw-step-img-wrap">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="hv2-hiw-step-img"
                    width="160"
                    height="160"
                    loading="lazy"
                  />
                </div>
                <h3 className="hv2-hiw-step-title">{step.title}</h3>
                <p className="hv2-hiw-step-desc">{step.description}</p>
                <button
                  className="hv2-btn-primary hv2-hiw-step-cta"
                  onClick={() =>
                    appNavigate(i === 0 ? "/signup" : "/book-a-demo")
                  }
                >
                  {i === 0 ? "Sign Up Free" : i === 1 ? "Book Demo" : "Get Support"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          WHY TESSERACT — value propositions
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="hv2-why">
        <div className="hv2-why-inner">
          <div className="hv2-why-left">
            <div className="hv2-section-label">WHY TESSERACTAPPS</div>
            <h2 className="hv2-section-heading hv2-why-heading">
              Built for the
              <br />
              complexity of
              <br />
              NDIS operations.
            </h2>
            <p className="hv2-section-sub hv2-why-sub">
              Other platforms are generic HR tools. TesseractApps was purpose-built
              for NDIS providers — with every module designed around how care actually works.
            </p>
            <button
              className="hv2-btn-primary"
              onClick={() => appNavigate("/book-a-demo")}
            >
              See It In Action
            </button>
          </div>

          <div className="hv2-why-right">
            {[
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                    <path d="M11 2L3 6v5c0 4.4 3.4 8.5 8 9.5 4.6-1 8-5.1 8-9.5V6l-8-4z" stroke="#0c78ba" strokeWidth="1.6" strokeLinejoin="round" />
                    <path d="M7.5 11l2.5 2.5 5-5" stroke="#0c78ba" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
                title: "NDIS-Compliant by Design",
                body: "Automated documentation, policy-based workflows, and audit-ready reporting built to meet NDIS Practice Standards out of the box.",
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                    <rect x="2" y="3" width="18" height="16" rx="2" stroke="#0c78ba" strokeWidth="1.6" />
                    <path d="M7 8h8M7 12h5" stroke="#0c78ba" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                ),
                title: "One Platform, No Tool Sprawl",
                body: "Rostering, payroll, participant management, HR, incidents, and compliance — all connected, all real-time, no integrations needed.",
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                    <circle cx="11" cy="11" r="9" stroke="#0c78ba" strokeWidth="1.6" />
                    <path d="M11 7v4l3 3" stroke="#0c78ba" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                ),
                title: "Built for Growth",
                body: "From a 15-person team to an enterprise spanning hundreds of staff — the platform scales with your organisation without re-implementation.",
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                    <path d="M4 17l4-4 3 3 7-9" stroke="#0c78ba" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
                title: "Measurable Outcomes",
                body: "40% faster incident resolution, 99.9% uptime, and thousands of hours saved annually across rostering and payroll operations.",
              },
            ].map((item, i) => (
              <div key={i} className="hv2-why-card">
                <div className="hv2-why-card-icon">{item.icon}</div>
                <div>
                  <h3 className="hv2-why-card-title">{item.title}</h3>
                  <p className="hv2-why-card-body">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          TESTIMONIALS
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="hv2-testimonials">
        <div className="hv2-section-label hv2-testimonials-label">TESTIMONIALS</div>
        <h2 className="hv2-section-heading">
          Real stories. Real results.
        </h2>
        <p className="hv2-section-sub hv2-testimonials-sub">
          Trusted by leading NDIS providers across Australia.
        </p>

        <div className="hv2-testimonials-grid">
          {testimonialDummyData.map((item) => (
            <div key={item.id} className="hv2-testimonial-card">
              {/* Stars */}
              <div className="hv2-t-stars" aria-label={`${item.rating} out of 5 stars`}>
                {Array.from({ length: 5 }).map((_, idx) => (
                  <svg
                    key={idx}
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill={idx < item.rating ? "#FBBC04" : "#e0e0e0"}
                    aria-hidden="true"
                  >
                    <path d="M7 1l1.8 3.6L13 5.3l-3 2.9.7 4.1L7 10.4l-3.7 1.9.7-4.1L1 5.3l4.2-.7z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="hv2-t-quote">{item.testimonial}</blockquote>

              {/* Author */}
              <div className="hv2-t-author">
                <img
                  src={item.authorImage}
                  alt={item.author}
                  className="hv2-t-author-img"
                  width="40"
                  height="40"
                  loading="lazy"
                />
                <div>
                  <div className="hv2-t-author-name">{item.author}</div>
                  {item.authorTitle && (
                    <div className="hv2-t-author-role">{item.authorTitle}</div>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Spacer card — "Add your story" */}
          <div className="hv2-testimonial-card hv2-testimonial-card--cta">
            <div className="hv2-t-cta-icon" aria-hidden="true">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="15" stroke="#0c78ba" strokeWidth="1.5" />
                <path d="M10 16h12M16 10v12" stroke="#0c78ba" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </div>
            <p className="hv2-t-cta-text">Join hundreds of NDIS providers already running on TesseractApps.</p>
            <button
              className="hv2-btn-primary"
              onClick={() => appNavigate("/signup")}
            >
              Start Free Trial
            </button>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          BLOG
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="hv2-blog">
        <div className="hv2-section-label">FROM THE BLOG</div>
        <h2 className="hv2-section-heading">Insights for NDIS providers.</h2>
        <Suspense fallback={<div style={{ minHeight: 240 }} />}>
          <OurBlogComponent />
        </Suspense>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          CTA BANNER
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="hv2-cta-banner">
        <div className="hv2-cta-banner-glow" aria-hidden="true" />
        <div className="hv2-cta-banner-inner">
          <div className="hv2-cta-banner-logo" role="img" aria-label="TesseractApps" />
          <h2 className="hv2-cta-banner-heading">
            Ready to run your<br />operations on one platform?
          </h2>
          <p className="hv2-cta-banner-sub">
            No credit card. No long setup. Full support from day one.
          </p>
          <div className="hv2-cta-banner-btns">
            <button
              className="hv2-btn-white"
              onClick={() => appNavigate("/signup")}
            >
              Begin Your Journey
            </button>
            <button
              className="hv2-btn-outline-white"
              onClick={() => appNavigate("/book-a-demo")}
            >
              Book a Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeV2;
