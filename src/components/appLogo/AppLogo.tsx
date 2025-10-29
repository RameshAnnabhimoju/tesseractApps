import "./AppLogo.css";
import logo_small from "../../assets/tesseract_logo_small.png";
import { useNavigate } from "react-router-dom";

const AppLogo = () => {
  const navigate = useNavigate();
  return (
    <div id="app-logo" onClick={() => navigate("/")}>
      <img src={logo_small} alt="tesseract logo" />
      TesseractApps
    </div>
  );
};

export default AppLogo;
