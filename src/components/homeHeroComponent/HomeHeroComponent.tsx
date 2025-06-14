import VideoComponent from "../videoComponent/VideoComponent";
import "./HomeHeroStyles.css";
import ios from "../../assets/mobile_ios.png";
import android from "../../assets/mobile_android.png";
import facebook from "../../assets/facebook.png";
import youtube from "../../assets/youtube.png";
import linkedin from "../../assets/linkedin.png";
import instagram from "../../assets/instagram.png";
import { appNavigate } from "../../routes/AppRoutes";
const HomeHeroComponent = () => {
  const HandleClick = (name: string) => {
    appNavigate(name);
  };
  return (
    <div id="home-hero-container">
      <VideoComponent />
      <div id="home-text-container">
        <div id="home-text-heading">
          All-in-One Tools for Smarter Workforce Management
        </div>
        <div id="home-text-subText">
          "Tesseract Apps helps providers streamline compliance, manage teams
          with ease, and deliver higher-quality care—through one secure,
          scalable platform designed for the evolving needs of the care sector."
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
    </div>
  );
};

export default HomeHeroComponent;
