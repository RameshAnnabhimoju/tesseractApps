import "./DetailsHeroStyles.css";
interface DeatailsHeroType {
  data?: {
    page: string;
    title: string;
    description: string;
    image: string;
    conclusion?: string;
    descriptionPoints?: string[];
    points?: string[];
    pointsObject?: { pointTitle: ""; pointDescription: "" }[];
  };
  displayTitle?: boolean;
}
const DetailsHeroComponent = ({
  data = {
    page: "",
    title: "One Lorem ipsum dolor sit amet, consectetur",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam, dapibus mattis Ronsectetur adipiscing elit. Diam, dapibus mattis ",
    image: "",
    conclusion: "",
  },
  displayTitle = true,
}: DeatailsHeroType) => {
  const pagesWithRightImage = [
    "HR Operations",
    "Role Based Dashboard",
    "Forms",
    "Accounting",
  ];
  return (
    <div id="details-hero-container">
      {displayTitle && <div id="details-hero-page-title">{data.page}</div>}
      {pagesWithRightImage.includes(data.page) && (
        <img
          id="details-hero-image"
          src={data.image}
          alt="details-hero-image"
        />
      )}
      <div id="details-hero-contents">
        <div id="details-hero-heading">{data.title}</div>
        <div className="details-hero-text">{data.description}</div>
        {data.descriptionPoints &&
          data.descriptionPoints.map((point, index) => {
            return (
              <div className="details-hero-text" key={index}>
                {point}
              </div>
            );
          })}
        {data.points && (
          <ul>
            {data.points.map((point, index) => {
              return (
                <li className="details-hero-text" key={index}>
                  {point}
                </li>
              );
            })}
          </ul>
        )}
        {data.pointsObject && (
          <ul>
            {data.pointsObject.map((point, index) => {
              return (
                <li key={index}>
                  <div className="details-hero-text details-hero-text-heading">
                    {point.pointTitle}
                  </div>
                  <div className="details-hero-text">
                    {point.pointDescription}
                  </div>
                </li>
              );
            })}
          </ul>
        )}
        <div className="details-hero-text">{data.conclusion}</div>
      </div>
      {!pagesWithRightImage.includes(data.page) && (
        <img
          id="details-hero-image"
          src={data.image}
          alt="details-hero-image"
        />
      )}
    </div>
  );
};

export default DetailsHeroComponent;
