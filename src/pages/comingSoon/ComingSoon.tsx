import "./ComingSoonStyles.css";
import comingSoonImage from "../../assets/coming soon.png";
const ComingSoon = () => {
  return (
    <div id="comming-soon-container">
      <img
        src={comingSoonImage}
        alt="coming-soon-image"
        id="coming-soon-image"
      />
    </div>
  );
};

export default ComingSoon;
