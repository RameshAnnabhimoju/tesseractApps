import "./DetailsDataStyles.css";
import detailsImage1 from "../../assets/detailImage1.png";
import detailsImage2 from "../../assets/detailImage2.png";
import detailsImage3 from "../../assets/detailImage3.png";
const DetailsDataComponent = ({
  data = {
    title: " One Lorem ipsum dolor sit amet, consectetur Lorem ipsum",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam, dapibus
          mattis adipiscing elit. Diam, dapibus mattis Lorem ipsum dolor sit
          amet, onsectetur adipiscing elit. Diam, dapibus mattis`,
  },
}: {
  data?: { title: string; description: string };
}) => {
  return (
    <div id="details-data-container">
      <div id="details-data-image-collage">
        <img src={detailsImage1} alt="details image 1" />
        <div id="details-data-image-collage-item">
          <img src={detailsImage2} alt="details image 2" />
          <img src={detailsImage3} alt="details image 3" />
        </div>
      </div>
      <div id="details-data-text">
        <div id="details-data-text-title"> {data.title} </div>
        <div id="details-data-text-description">{data.description}</div>
      </div>
    </div>
  );
};

export default DetailsDataComponent;
