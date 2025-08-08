import ContactInformationCard from "../../components/contactInformationCard/ContactInformationCard";
import "./ContactInformationStyles.css";

const ContactInformation = () => {
  return (
    <div id="contact-info-container">
      <div className="heading">CONTACT US</div>
      <div className="subheading">We're ready to connect.</div>
      <div className="text">
        Whether you're exploring our platform or looking for tailored support,
        our team is here to assist.
      </div>
      <ContactInformationCard />
    </div>
  );
};

export default ContactInformation;
