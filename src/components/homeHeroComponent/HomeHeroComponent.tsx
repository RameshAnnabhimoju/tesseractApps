// import VideoComponent from "../videoComponent/VideoComponent";
import "./HomeHeroStyles.css";
import ios from "../../assets/mobile_ios.png";
import android from "../../assets/mobile_android.png";
import facebook from "../../assets/facebook.png";
import youtube from "../../assets/youtube.png";
import linkedin from "../../assets/linkedin.png";
import instagram from "../../assets/instagram.png";
import { appNavigate } from "../../routes/AppRoutes";
import heroImage1 from "../../assets/heroBackground-1.png";
import heroImage2 from "../../assets/heroBackground-2.png";
const HomeHeroComponent = () => {
  const HandleClick = (name: string) => {
    appNavigate(name);
  };
  return (
    <div id="home-hero-container">
      {/* <VideoComponent /> */}
      <img
        src={heroImage1}
        alt="hero background image 1"
        className="hero-backround-image"
      />
      <div id="home-text-container">
        <h1 id="home-text-heading">
          TesseractApps: One Platform to Transform Workforce Management in Care
        </h1>
        <div id="home-text-subText">
          TesseractApps helps care providers streamline compliance, manage teams
          efficiently, and deliver higher quality care with one secure, scalable
          platform tailored to the unique needs of the care and IT sector.
        </div>
        <div id="home-store-links-container">
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
        </div>
        <div id="home-social-links-container">
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
        </div>
      </div>
      <img
        src={heroImage2}
        alt="hero background image 2"
        className="hero-backround-image"
      />
    </div>
  );
};

export default HomeHeroComponent;
