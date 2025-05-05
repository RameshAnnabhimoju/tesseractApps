import "./FooterStyles.css";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";
import youtube from "../../assets/youtube.png";
const FooterComponent = () => {
  return (
    <div id="footer-container">
      <div id="footer-column-1">
        <div className="footer-heading">About the company</div>
        <div className="footer-text">
          At TesseractApps, we provide tailored solutions that simplify care
          management, payroll, compliance, and HR, helping care providers run
          their operations efficiently and stay compliant.
        </div>
        <div id="footer-social-links">
          <img
            src={facebook}
            alt="Facebook"
            className="footer-social-icon"
          ></img>
          <img
            src={instagram}
            alt="Instagram"
            className="footer-social-icon"
          ></img>
          <img
            src={linkedin}
            alt="LinkedIn"
            className="footer-social-icon"
          ></img>
          <img src={youtube} alt="YouTube" className="footer-social-icon"></img>
        </div>
      </div>
      <div id="footer-column-2" className="footer-column">
        <div className="footer-heading">Products</div>
        <div className="footer-text">Human Resources</div>
        <div className="footer-text">Payroll Management</div>
        <div className="footer-text">Incident Reporting</div>
        <div className="footer-text">Account Management</div>
        <div className="footer-text">T-Sign - Digital Signatures</div>
        <div className="footer-text">Analytics and Reporting</div>
      </div>
      <div id="footer-column-3" className="footer-column">
        <div className="footer-heading">Get Started</div>
        <div className="footer-text">Sign Up</div>
        <div className="footer-text">Request a Demo</div>
        <div className="footer-text">Learn More</div>
        <div className="footer-text">Contact Us</div>
      </div>
      <div id="footer-column-4" className="footer-column">
        <div className="footer-heading">Explore</div>
        <div className="footer-text">Features</div>
        <div className="footer-text">Pricing</div>
        <div className="footer-text">Resources</div>
        <div className="footer-text">Blog</div>
        <div className="footer-text">Contact</div>
      </div>
      <div id="footer-column-4" className="footer-column">
        <div className="footer-heading">Company</div>
        <div className="footer-text">About</div>
        <div className="footer-text">Careers</div>
        <div className="footer-text">Partners</div>
        <div className="footer-text">Terms & Conditions</div>
        <div className="footer-text">Privacy Policy</div>
      </div>
      <div id="footer-column-4" className="footer-column">
        <div className="footer-heading">Support</div>
        <div className="footer-text">Help Centre</div>
        <div className="footer-text">FAQs</div>
        <div className="footer-text">Request a Demo</div>
        <div className="footer-text">Submit a Ticket</div>
        <div className="footer-text">24/7 Live Chat</div>
      </div>
      <div id="foooter-column-5">
        <div id="footer-newsletter-heading">Newsletter</div>
        <div id="footer-newsletter-text">
          Get the Latest Insights, Updates, and Tips Straight to Your Inbox.
        </div>
        <div id="footer-newsletter-input-container">
          <input
            type="text"
            id="footer-newsletter-input"
            placeholder="Enter your email"
          />
          <button id="footer-newsletter-button">SUBSCRIBE</button>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
