import "./DetailsHeroStyles.css";
import detailsHero from "../../assets/heroDetails1.png";

const DetailsHeroComponent = ({
  data = { sectionTitle1: "", sectionDescription1: "" },
}: {
  data?: { sectionTitle1: string; sectionDescription1: string };
}) => {
  return (
    <div id="details-hero-container">
      <div id="details-hero-contents">
        <div id="details-hero-heading">
          {data.sectionTitle1 || "One Lorem ipsum dolor sit amet, consectetur"}
        </div>
        <div id="details-hero-text">
          {data.sectionDescription1 ||
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam, dapibus mattis Ronsectetur adipiscing elit. Diam, dapibus mattis "}
        </div>
        <div id="details-hero-buttons">
          <button className="details-hero-button hero-button-primary">
            Book 14-Days Free Trial
          </button>
          <button className="details-hero-button hero-button-secondary">
            Find RIght Plan
          </button>
        </div>
      </div>
      <img id="details-hero-image" src={detailsHero} alt="details-hero-image" />
    </div>
  );
};

export default DetailsHeroComponent;
