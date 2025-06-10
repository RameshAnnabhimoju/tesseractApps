import "./DetailsDataStyles.css";
interface detailsDataType {
  data?: {
    title: string;
    description: string;
    images: string[];
    points?: string[];
    conclusion?: string;
    discriptionsPoints?: string[];
  };
  componentType?: number;
}
const DetailsDataComponent = ({
  data = {
    title: " One Lorem ipsum dolor sit amet, consectetur Lorem ipsum",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam, dapibus
          mattis adipiscing elit. Diam, dapibus mattis Lorem ipsum dolor sit
          amet, onsectetur adipiscing elit. Diam, dapibus mattis`,
    images: [],
    points: [],
  },
  componentType,
}: detailsDataType) => {
  // console.log(data.images);
  return (
    <div id="details-data-container">
      {componentType == 1 && data.images && data.images.length > 1 && (
        <div id="details-data-image-collage">
          <img src={data.images[0]} alt="details image 1" />
          <div id="details-data-image-collage-item">
            <img src={data.images[1]} alt="details image 2" />
            <img src={data.images[2]} alt="details image 3" />
          </div>
        </div>
      )}
      {componentType == 1 && data.images && data.images.length == 1 && (
        <div id="details-data-image-collage">
          <img src={data.images[0]} alt="details image 1" />
        </div>
      )}

      <div id="details-data-text">
        <div id="details-data-text-title"> {data.title} </div>
        <div id="details-data-text-description">{data.description}</div>
        {data.points &&
          data.points.map((point, index) => (
            <div id="details-data-text-points" key={index}>
              &#10687; {point}
            </div>
          ))}
        {data.discriptionsPoints &&
          data.discriptionsPoints.map((point, index) => (
            <div id="details-data-text-points" key={index}>
              {point}
            </div>
          ))}
        {data.conclusion && (
          <div id="details-data-text-description">{data.conclusion}</div>
        )}
      </div>
      {componentType == 2 && data.images && data.images.length > 1 && (
        <div id="details-data-image-collage">
          <img src={data.images[0]} alt="details image 1" />
          <div id="details-data-image-collage-item">
            <img src={data.images[1]} alt="details image 2" />
            <img src={data.images[2]} alt="details image 3" />
          </div>
        </div>
      )}
      {componentType == 2 && data.images && data.images.length == 1 && (
        <div id="details-data-image-collage">
          <img src={data.images[0]} alt="details image 1" />
        </div>
      )}
    </div>
  );
};

export default DetailsDataComponent;
