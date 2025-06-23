import "./TrustedClientsStyles.css";
import company1 from "../../assets/company-1.png";
import company2 from "../../assets/company-2.png";
import company3 from "../../assets/company-3.png";
import company4 from "../../assets/company-4.png";
import company5 from "../../assets/company-5.png";
// import company6 from "../../assets/company-6.png";
import company7 from "../../assets/company-7.png";
import company8 from "../../assets/ANA Logo.jpg";
const TrustedClientsComponent = () => {
  const companiesImages = [
    company1,
    company2,
    company3,
    company4,
    company5,
    company7,
    company8,
  ];
  return (
    <div id="trusted-clients-container">
      <div id="trusted-clients-header">
        Our Most <br /> Trusted Clients
      </div>
      <div id="trusted-clients-images-container">
        {companiesImages?.map((image, index) => (
          <img key={index} src={image} alt="Client 1" className="client-logo" />
        ))}
        <div id="client-logo-PV">Framily Ventures Pty Ltd</div>
      </div>
    </div>
  );
};

export default TrustedClientsComponent;
