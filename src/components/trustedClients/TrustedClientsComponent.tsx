import "./TrustedClientsStyles.css";
import company1 from "../../assets/company-1.png";
import company1_bw from "../../assets/company-1_bw.png";
import company2 from "../../assets/company-2.png";
import company2_bw from "../../assets/company-2_bw.png";
import company3 from "../../assets/company-3.png";
import company3_bw from "../../assets/company-3_bw.png";
import company4 from "../../assets/company-4.png";
import company4_bw from "../../assets/company-4_bw.png";
import company5 from "../../assets/company-5.png";
import company5_bw from "../../assets/company-5_bw.png";
const TrustedClientsComponent = () => {
  const companiesImages = [
    company1_bw,
    company2_bw,
    company3_bw,
    company4_bw,
    company5_bw,
  ];
  const companiesImages2 = [company1, company2, company3, company4, company5];
  return (
    <div id="trusted-clients-container">
      <div id="trusted-clients-header">
        Our Most <br /> Trusted Clients
      </div>
      <div style={{ display: "none" }}>{companiesImages2}</div>
      {companiesImages?.map((image, index) => (
        <img
          key={index}
          src={image}
          alt="Client 1"
          className="client-logo"
          onMouseEnter={(event) => {
            const img = event.currentTarget as HTMLImageElement;
            img.src = img.src.replace("_bw", "");
            console.log(img.src);
          }}
          onMouseLeave={(event) => {
            const img = event.currentTarget as HTMLImageElement;
            img.src = img.src.replace(".png", "_bw.png");
            console.log(img.src);
          }}
        />
      ))}
    </div>
  );
};

export default TrustedClientsComponent;
