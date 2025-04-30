import "./DownloadAppStyles.css";
import mockup from "../../assets/mockups.png";
import mobileLinks from "../../assets/mobile_insets.png";
const DownloadAppComponent = () => {
  return (
    <div id="download-container">
      <div id="download-content">
        <div id="download-content-heading">Download app to enjoy more!</div>
        <div id="download-content-text">
          Amet in elementum nulla scelerisque dui, egestas at. Elit consectetur
          turpis elementum amet vitae et etiam nec. Varius volutpat hac
          adipiscing tincidunt pretium.
        </div>
        <img id="links-image" src={mobileLinks} alt="mobile links image" />
      </div>
      <img id="download-image" src={mockup} alt="download image" />
    </div>
  );
};

export default DownloadAppComponent;
