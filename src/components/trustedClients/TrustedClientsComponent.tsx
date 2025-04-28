import "./TrustedClientsStyles.css";
import trusted_clients from "../../assets/trusted-clients.png";
const TrustedClientsComponent = () => {
  return (
    <div id="trusted-clients-container">
      <div id="trusted-clients-header">
        Our Most <br /> Trusted Clients
      </div>
      <div id="trusted-clients-logos">
        <img src={trusted_clients} alt="Client 1" className="client-logo" />
      </div>
    </div>
  );
};

export default TrustedClientsComponent;
