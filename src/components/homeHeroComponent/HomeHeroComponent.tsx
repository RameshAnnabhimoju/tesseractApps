// import VideoComponent from "../videoComponent/VideoComponent";
import "./HomeHeroStyles.css";
import logo_small from "../../assets/tesseract_logo_small.png";
// import ios from "../../assets/mobile_ios.png";
// import android from "../../assets/mobile_android.png";
// import facebook from "../../assets/facebook.png";
// import youtube from "../../assets/youtube.png";
// import linkedin from "../../assets/linkedin.png";
// import instagram from "../../assets/instagram.png";
import { appNavigate } from "../../routes/AppRoutes";
// import heroImage1 from "../../assets/heroBackground-1.png";
// import heroImage2 from "../../assets/heroBackground-2.png";
// import ArrowRight from "../arrows/ArrowRight";
import HeroArcsLeftComponent from "../HeroArcsComponent/HeroArcsComponent.tsx";
import HeroArcsRightComponent from "../HeroArcsComponent/HeroArcsComponent.tsx";
import { homeLeftArcsData, homeRightArcsData } from "../../utils/DummyData";
import { useNavigate } from "react-router-dom";
const HomeHeroComponent = () => {
  const navigate = useNavigate();
  const HandleClick = (name: string) => {
    appNavigate(name, navigate, false);
  };
  return (
    <div id="home-hero-container">
      {/* <VideoComponent /> */}
      {/* <img
        src={heroImage1}
        alt="hero background image 1"
        className="hero-backround-image"
      /> */}
      <HeroArcsLeftComponent pendulums={homeLeftArcsData} />
      <div id="home-text-container">
        <img src={logo_small} alt="tesseract logo" id="home-tesseract-logo" />
        <h1 id="home-text-heading">End-to-End Workforce Management Software</h1>
        <h2 id="home-text-subText">
          TesseractApps simplifies compliance, team management, NDIS care, and
          service delivery for care providers and IT consultants in one secure,
          scalable platform.
        </h2>
        <div className="cta-button" onClick={() => HandleClick("Signup")}>
          <div>Try It Free</div>
          {/* <ArrowRight className="arrow-icon" /> */}
        </div>
        <div id="home-button-subtext">
          No credit card is required. Free onboarding included.
        </div>
        {/* <div id="home-store-links-container">
          <img
            src={ios}
            alt="ios"
            id="ios-store"
            className="home-store-links"
            onClick={() => {
              HandleClick("ios");
            }}
          />
          <img
            src={android}
            alt="android"
            id="android-store"
            className="home-store-links"
            onClick={() => {
              HandleClick("android");
            }}
          />
        </div> */}
        {/* <div id="home-social-links-container">
          <img
            src={facebook}
            alt="facebook-link"
            className="home-social-links"
            onClick={() => {
              HandleClick("facebook");
            }}
          />
          <img
            src={youtube}
            alt="youtube-link"
            className="home-social-links"
            onClick={() => {
              HandleClick("youtube");
            }}
          />
          <img
            src={linkedin}
            alt="linkedin-link"
            className="home-social-links"
            onClick={() => {
              HandleClick("linkedin");
            }}
          />
          <img
            src={instagram}
            alt="instagram-link"
            className="home-social-links"
            onClick={() => {
              HandleClick("instagram");
            }}
          />
        </div> */}
      </div>
      <HeroArcsRightComponent pendulums={homeRightArcsData} />
      {/* <img
        src={heroImage2}
        alt="hero background image 2"
        className="hero-backround-image"
      /> */}
    </div>
  );
};

export default HomeHeroComponent;
