import "./ContactInformationCard.css";
import { useNavigate } from "react-router-dom";
const ContactInformationCard = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/requestDemo");
  };
  return (
    <div id="contact-info-text-container">
      <div id="contact-info-sales" className="contact-info">
        <div id="contact-info-upper">
          <div className="contact-info-headingh">Contact Sales:</div>
          <div className="contact-info-text">
            Call us: ‪+61261332818‬ <br />
            Available: Mon - Fri, 9:00 AM to 5:30 PM
          </div>
          <div className="contact-info-headingh">Email:</div>
          <div className="contact-info-text">sales@tesseractapps.com</div>
        </div>
        <div id="contact-info-lower">
          <div className="contact-info-headingh">Not Ready to Talk Yet?</div>
          <div className="contact-info-text">
            You can start a free trial or get in touch with our team for more
            information.
          </div>
        </div>
      </div>
      <div className="contact-info">
        <div className="contact-info-headingh">Head Office:</div>
        <div className="contact-info-text">
          TesseractApps <br />
          28 Thynne St, Bruce ACT 2617, Canberra, ACT, Australia
        </div>
        <div className="contact-info-headingh">Phone:</div>
        <div className="contact-info-text">
          1300 252 808 <br />
          02 6133 2800
        </div>
        <div className="contact-info-headingh">Email:</div>
        <div className="contact-info-text">sales@tesseractapps.com</div>
        <button id="contact-info-button" onClick={handleButtonClick}>
          Book a Demo
        </button>
      </div>
    </div>
  );
};

export default ContactInformationCard;
