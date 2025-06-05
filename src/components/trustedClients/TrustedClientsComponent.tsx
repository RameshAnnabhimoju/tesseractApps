import "./TrustedClientsStyles.css";
import company1 from "../../assets/company-1.png";
import company2 from "../../assets/company-2.png";
import company3 from "../../assets/company-3.png";
import company4 from "../../assets/company-4.png";
import company5 from "../../assets/company-5.png";
const TrustedClientsComponent = () => {
  const companiesImages = [company1, company2, company3, company4, company5];
  return (
    <div id="trusted-clients-container">
      <div id="trusted-clients-header">
        Our Most <br /> Trusted Clients
      </div>
      {companiesImages?.map((image, index) => (
        <img key={index} src={image} alt="Client 1" className="client-logo" />
      ))}
    </div>
  );
};

export default TrustedClientsComponent;
