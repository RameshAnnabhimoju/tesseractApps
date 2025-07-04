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
  };
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
}: DeatailsHeroType) => {
  const pagesWithBackgroundImage = [
    "Product",
    "Roster Management",
    "Timesheet",
    "Admin Console",
    "Access Control Panel",
    "HR Operations",
    "T-sign",
    "Clock In & Clock Out",
    "Participant Management",
    "Incident Management",
    "Repository",
    "Role Based Dashboard",
    "My Profile",
    "Forms",
    "Accounting",
    "T Learning Hub",
    "ChaT - Secure Internal Messaging",
    "NDIS Industry",
    "Administrator",
    "Roster Manager",
    "Accountant",
    "NDIS Staff",
    "HR Manager",
    "Participant",
  ];
  const pagesWithWhiteHeadings = [
    "Access Control Panel",
    "T-sign",
    "Clock In & Clock Out",
    "Incident Management",
    "Repository",
    "ChaT - Secure Internal Messaging",
    "Administrator",
  ];
  const pagesWithRightSideData = [
    "HR Operations",
    "Role Based Dashboard",
    "Forms",
    "Accounting",
    "Roster Manager",
    "Accountant",
  ];
  return (
    <div
      id={
        !pagesWithBackgroundImage.includes(data.page)
          ? "details-hero-container"
          : ""
      }
      style={
        pagesWithBackgroundImage.includes(data.page)
          ? {
              backgroundImage: `url(${data.image})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              objectFit: "cover",
            }
          : {}
      }
    >
      <div id="details-hero-page-title">{data.page}</div>
      <div
        id="details-hero-data-container"
        className={
          pagesWithRightSideData.includes(data.page)
            ? "details-hero-container-right"
            : "details-hero-container"
        }
      >
        <div id="details-hero-contents">
          <div
            id="details-hero-heading"
            className={
              pagesWithWhiteHeadings.includes(data.page)
                ? "details-hero-page-title-white"
                : ""
            }
          >
            {data.title}
          </div>
          <div
            id="details-hero-text"
            className={
              pagesWithWhiteHeadings.includes(data.page)
                ? "details-hero-text-white"
                : ""
            }
          >
            {data.description}
          </div>
          {data.descriptionPoints &&
            data.descriptionPoints.map((point, index) => {
              return (
                <div
                  id="details-hero-text"
                  className={
                    pagesWithWhiteHeadings.includes(data.page)
                      ? "details-hero-text-white"
                      : ""
                  }
                  key={index}
                >
                  {point}
                </div>
              );
            })}
          {data.points &&
            data.points.map((point, index) => {
              return (
                <div
                  id="details-hero-text"
                  className={
                    pagesWithWhiteHeadings.includes(data.page)
                      ? "details-hero-text-white"
                      : ""
                  }
                  key={index}
                >
                  &#10687;{point}
                </div>
              );
            })}
          <div
            id="details-hero-text"
            className={
              pagesWithWhiteHeadings.includes(data.page)
                ? "details-hero-text-white"
                : ""
            }
          >
            {data.conclusion}
          </div>
        </div>
      </div>
      {!pagesWithBackgroundImage.includes(data.page) && (
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
