import "./TrustedClientsStyles.css";
import company1 from "../../assets/company-1.png";
import company2 from "../../assets/company-2.png";
// import company3 from "../../assets/company-3.png";
import company4 from "../../assets/company-4.png";
import company5 from "../../assets/company-5.png";
// import company6 from "../../assets/company-6.png";
import company7 from "../../assets/company-7.png";
import company8 from "../../assets/ANA Logo.jpg";
import company9 from "../../assets/LOGO1.png";
import company10 from "../../assets/LOGO2.png";
import company13 from "../../assets/logo13.png";
import company14 from "../../assets/logo14.png";
const TrustedClientsComponent = () => {
  const companiesImages = [
    company1,
    company2,
    company10,
    company13,
    company4,
    company5,
    company7,
    company8,
    company9,
    company14,
  ];
  return (
    <div id="trusted-clients-container">
      <div className="heading">
        Our Most <br /> Trusted Clients
      </div>
      <div id="trusted-clients-images-container">
        {companiesImages?.map((image, index) => (
          <img key={index} src={image} alt="Client 1" className="client-logo" />
        ))}
      </div>
    </div>
  );
};

export default TrustedClientsComponent;
