import "./ContactInformationStyles.css";
import SEO from "../../../components/common/SEO";
import { Phone, MapPin, Clock, Send, CalendarCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ContactInformation = () => {
  const navigate = useNavigate();

  return (
    <div id="contact-page">
      <SEO
        title="Contact TesseractApps | NDIS Software Support & Sales | Australia"
        description="Get in touch with TesseractApps for NDIS software enquiries, demos, or support. Call 1300 252 808 or email sales@tesseractapps.com. Located in Phillip ACT 2606."
      />

      {/* ── Hero ── */}
      <section id="contact-hero">
        <div id="contact-hero-inner">
          <div id="contact-hero-label">Contact Us</div>
          <h1 id="contact-hero-heading">We're ready to connect.</h1>
          <p id="contact-hero-sub">
            Whether you're exploring our platform or looking for tailored
            support, our team is here to assist.
          </p>
        </div>
      </section>

      {/* ── Body ── */}
      <div id="contact-outer">

        {/* ── Contact Cards ── */}
        <div id="contact-cards-grid">

          <div className="contact-card">
            <div className="contact-card-icon">
              <Phone size={20} strokeWidth={2} />
            </div>
            <div className="contact-card-title">Sales</div>
            <div className="contact-card-detail">
              <strong>Phone</strong>
              +61 2 6133 2818
            </div>
            <div className="contact-card-detail">
              <strong>Toll-free</strong>
              1300 252 808
            </div>
            <div className="contact-card-detail">
              <strong>Email</strong>
              <a href="mailto:sales@tesseractapps.com">sales@tesseractapps.com</a>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-card-icon">
              <Clock size={20} strokeWidth={2} />
            </div>
            <div className="contact-card-title">Business Hours</div>
            <div className="contact-card-detail">
              <strong>Monday – Friday</strong>
              9:00 AM – 5:30 PM AEST
            </div>
            <div className="contact-card-detail">
              Outside business hours? Leave us a message and we'll get back to
              you the next business day.
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-card-icon">
              <MapPin size={20} strokeWidth={2} />
            </div>
            <div className="contact-card-title">Head Office</div>
            <div className="contact-card-detail">
              <strong>Address</strong>
              TesseractApps Pty Ltd
              <br />
              Phillip ACT 2606, Australia
            </div>
            <div className="contact-card-detail">
              <strong>Phone</strong>
              02 6133 2800
            </div>
          </div>

        </div>

        {/* ── CTA strip ── */}
        <div id="contact-cta-strip">
          <div id="contact-cta-text">
            <div id="contact-cta-heading">Not ready to talk yet?</div>
            <p id="contact-cta-sub">
              Start a free 7-day trial or book a personalised demo, no credit
              card required.
            </p>
          </div>
          <div id="contact-cta-buttons">
            <button
              type="button"
              className="contact-btn-primary"
              onClick={() => navigate("/book-a-demo")}
            >
              <CalendarCheck size={16} strokeWidth={2.5} />
              Book a Demo
            </button>
            <button
              type="button"
              className="contact-btn-outline"
              onClick={() => navigate("/signup")}
            >
              <Send size={15} strokeWidth={2.5} />
              Free Trial
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactInformation;
