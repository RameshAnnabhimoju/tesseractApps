import VideoComponent from "../videoComponent/VideoComponent";
import "./HomeHeroStyles.css";
import ios from "../../assets/mobile_ios.png";
import android from "../../assets/mobile_android.png";
import facebook from "../../assets/facebook.png";
import youtube from "../../assets/youtube.png";
import linkedin from "../../assets/linkedin.png";
import instagram from "../../assets/instagram.png";
const HomeHeroComponent = () => {
  const HandleClick = (name: string) => {
    switch (name) {
      case "android":
        window.open(
          "https://play.google.com/store/apps/details?id=com.compinacle&hl=en&pli=1",
          "_blank"
        );
        break;
      case "ios":
        window.open(
          " https://apps.apple.com/al/app/tesseract-apps/id6476831276",
          "_blank"
        );
        break;
      case "linkedin":
        window.open("https://www.linkedin.com/company/tesseractapps", "_blank");
        break;
      case "facebook":
        window.open(
          "https://www.facebook.com/people/TesseractApps/61573872703468/",
          "_blank"
        );
        break;
      case "instagram":
        window.open("https://www.instagram.com/tesseract_apps", "_blank");
        break;
      case "youtube":
        window.open("https://www.youtube.com/@TesseractApps", "_blank");
        break;

      default:
        break;
    }
  };
  return (
    <div id="home-hero-container">
      <VideoComponent />
      <div id="home-text-container">
        <div id="home-text-heading">
          All-in-One Tools for Smarter Workforce Management
        </div>
        <div id="home-text-subText">
          "TesseractApps helps providers streamline compliance, manage teams
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
