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
          Learn To Love Growth And Change And You Will Be A Success
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
        <div className="footer-text">Example</div>
        <div className="footer-text">Example</div>
        <div className="footer-text">Example</div>
        <div className="footer-text">Example</div>
        <div className="footer-text">Example</div>
      </div>
      <div id="footer-column-3" className="footer-column">
        <div className="footer-heading">Get Started</div>
        <div className="footer-text">Example</div>
        <div className="footer-text">Example</div>
        <div className="footer-text">Example</div>
        <div className="footer-text">Example</div>
        <div className="footer-text">Example</div>
      </div>
      <div id="footer-column-4" className="footer-column">
        <div className="footer-heading">About</div>
        <div className="footer-text">Example</div>
        <div className="footer-text">Example</div>
        <div className="footer-text">Example</div>
        <div className="footer-text">Example</div>
        <div className="footer-text">Example</div>
      </div>
      <div id="foooter-column-5">
        <div id="footer-newsletter-heading">Newsletter</div>
        <div id="footer-newsletter-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem
          aliquam itaque exercitationem maiores!
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
