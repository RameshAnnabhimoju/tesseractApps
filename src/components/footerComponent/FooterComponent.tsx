import "./FooterStyles.css";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";
import youtube from "../../assets/youtube.png";
import flagsImag1 from "../../assets/flagImage1.jpg";
import flagsImag2 from "../../assets/flagImage2.jpg";
import { navBarDummyData } from "../../utils/DummyData";
import { useNavigate } from "react-router-dom";
import { appNavigate } from "../../routes/AppRoutes";
const FooterComponent = () => {
  const navigate = useNavigate();
  function handleProductDataClick(name: string) {
    // console.log(name);
    if (name) {
      appNavigate(navigate, name);
    }
  }
  const productLinks = navBarDummyData["Product"];
  return (
    <div id="footer-container">
      <div id="footer-column-1">
        <div className="footer-heading">About the company</div>
        <div className="footer-text footer-about-text">
          At TesseractApps, we provide tailored solutions that simplify care
          management, payroll, compliance, and HR, helping care providers run
          their operations efficiently and stay compliant.
          <br></br>
          Phone: 1300 252 808<br></br>Email: enquiries@tesseractapps.com
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
      <div className="footer-links-texts">
        <div id="footer-column-3" className="footer-column">
          <div className="footer-heading">Get Started</div>
          <div
            className="footer-text"
            onClick={() => {
              handleProductDataClick("/coming-soon");
            }}
          >
            Sign Up
          </div>
          <div
            className="footer-text"
            onClick={() => {
              handleProductDataClick("/coming-soon");
            }}
          >
            Learn More
          </div>
          <div
            className="footer-text"
            onClick={() => {
              handleProductDataClick("/coming-soon");
            }}
          >
            Contact Us
          </div>
        </div>
        <div id="footer-column-4" className="footer-column">
          <div className="footer-heading">Explore</div>
          <div
            className="footer-text"
            onClick={() => {
              handleProductDataClick("/coming-soon");
            }}
          >
            Features
          </div>
          <div
            className="footer-text"
            onClick={() => {
              handleProductDataClick("/coming-soon");
            }}
          >
            Pricing
          </div>
          <div
            className="footer-text"
            onClick={() => {
              handleProductDataClick("/coming-soon");
            }}
          >
            Resources
          </div>
          <div
            className="footer-text"
            onClick={() => {
              handleProductDataClick("/coming-soon");
            }}
          >
            Blog
          </div>
          <div
            className="footer-text"
            onClick={() => {
              handleProductDataClick("/coming-soon");
            }}
          >
            Contact
          </div>
        </div>
        <div id="footer-column-4" className="footer-column">
          <div className="footer-heading">Company</div>
          <div
            className="footer-text"
            onClick={() => {
              handleProductDataClick("/coming-soon");
            }}
          >
            About
          </div>
          <div
            className="footer-text"
            onClick={() => {
              handleProductDataClick("/coming-soon");
            }}
          >
            Careers
          </div>
          <div
            className="footer-text"
            onClick={() => {
              handleProductDataClick("/coming-soon");
            }}
          >
            Partners
          </div>
          <div
            className="footer-text"
            onClick={() => {
              handleProductDataClick("/coming-soon");
            }}
          >
            Terms & Conditions
          </div>
          <div
            className="footer-text"
            onClick={() => {
              handleProductDataClick("/coming-soon");
            }}
          >
            Privacy Policy
          </div>
        </div>
        <div id="footer-column-4" className="footer-column">
          <div className="footer-heading">Support</div>
          <div
            className="footer-text"
            onClick={() => {
              handleProductDataClick("/coming-soon");
            }}
          >
            Help Centre
          </div>
          <div
            className="footer-text"
            onClick={() => {
              handleProductDataClick("/coming-soon");
            }}
          >
            FAQs
          </div>
          <div
            className="footer-text"
            onClick={() => {
              handleProductDataClick("/coming-soon");
            }}
          >
            Book a Demo
          </div>
          <div
            className="footer-text"
            onClick={() => {
              handleProductDataClick("/coming-soon");
            }}
          >
            Submit a Ticket
          </div>
          <div
            className="footer-text"
            onClick={() => {
              handleProductDataClick("/coming-soon");
            }}
          >
            24/7 Live Chat
          </div>
        </div>
        <div
          id="footer-column-2"
          className="footer-column footer-products-column"
        >
          <div className="footer-heading">Products</div>
          <div className="footer-products-text-container">
            {productLinks.map((link, index) => {
              return (
                <div
                  className="footer-text"
                  key={index}
                  onClick={() => {
                    handleProductDataClick(link.title);
                  }}
                >
                  {link.title}
                </div>
              );
            })}
          </div>
        </div>
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
      <div id="footer-bottom">
        <br />
        <br />
        <br />
        TesseractApps would like to acknowledge the Traditional Custodians of
        the land on which we operate, and pay our respects to their elders past
        and present.
        <br />
        <img src={flagsImag1} alt="Flag Image 1" />
        <img src={flagsImag2} alt="Flag Image 2" />
        <br /> © 2025 Tesseract Apps. All rights reserved.
      </div>
    </div>
  );
};

export default FooterComponent;
