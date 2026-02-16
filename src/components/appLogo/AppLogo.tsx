import "./AppLogo.css";
import logo_small from "../../assets/tesseract_logo_small.webp";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../contexts/AppContext";

const AppLogo = () => {
  const { handleBookADemo, handleSignup, setExpoBanner } = useAppContext();
  const navigate = useNavigate();
  const handleClick = () => {
    handleBookADemo(false);
    handleSignup(false);
    setExpoBanner(false);
    navigate("/");
  };
  return (
    <div id="app-logo" onClick={() => handleClick()}>
      <img loading="lazy" src={logo_small} alt="Tesseract Apps Logo" width="50" height="50" />
      TesseractApps
    </div>
  );
};

export default AppLogo;
