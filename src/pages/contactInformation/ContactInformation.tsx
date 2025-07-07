import { useNavigate } from "react-router-dom";
import "./ContactInformationStyles.css";

const ContactInformation = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/requestDemo");
  };
  return (
    <div id="contact-info-container">
      <div className="heading">CONTACT US</div>
      <div className="subheading">We're ready to connect.</div>
      <div className="text">
        Whether you're exploring our platform or looking for tailored support,
        our team is here to assist.
      </div>
      <div id="contact-info">
        <div className="contact-info-headingh">Head Office:</div>
        <div className="contact-info-text">
          TesseractApps <br />
          Canberra, ACT, Australia
        </div>
        <div className="contact-info-headingh">Phone:</div>
        <div className="contact-info-text">
          1300 252 808 <br />
          02 6133 2800
        </div>
        <div className="contact-info-headingh">Email:</div>
        <div className="contact-info-text">enquiries@tesseractapps.com</div>
        <button id="contact-info-button" onClick={handleButtonClick}>
          Book a Demo
        </button>
      </div>
    </div>
  );
};

export default ContactInformation;
