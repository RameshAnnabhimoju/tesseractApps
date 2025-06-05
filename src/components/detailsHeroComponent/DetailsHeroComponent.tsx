import "./DetailsHeroStyles.css";
interface DeatailsHeroType {
  data?: { title: string; description: string; image: string };
}
const DetailsHeroComponent = ({
  data = {
    title: "One Lorem ipsum dolor sit amet, consectetur",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam, dapibus mattis Ronsectetur adipiscing elit. Diam, dapibus mattis ",
    image: "",
  },
}: DeatailsHeroType) => {
  return (
    <div id="details-hero-container">
      <div id="details-hero-contents">
        <div id="details-hero-heading">{data.title}</div>
        <div id="details-hero-text">{data.description}</div>
        {/* <div id="details-hero-buttons">
          <button className="details-hero-button hero-button-primary">
            Book 14-Days Free Trial
          </button>
          <button className="details-hero-button hero-button-secondary">
            Find RIght Plan
          </button>
        </div> */}
      </div>
      <img id="details-hero-image" src={data.image} alt="details-hero-image" />
    </div>
  );
};

export default DetailsHeroComponent;
