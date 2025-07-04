import { useLocation } from "react-router-dom";
import "./AboutUsSubPageSyles.css";

const AboutUsSubPage = () => {
  const location = useLocation();
  const { data } = location.state;
  return (
    <div id="about-us-page-container">
      {data.image && data.title != "Our Vision" && (
        <img src={data.image} alt="image-alt" id="about-us-page-image" />
      )}
      <div id="about-us-page-data-container">
        <div id="about-us-page-title" className="subheading">
          {data.title}
        </div>
        {Array.isArray(data.data) ? (
          data.data.map((paragraph: string, idx: number) => (
            <div id="about-us-page-data" className="text" key={idx}>
              {paragraph}
            </div>
          ))
        ) : (
          <div id="about-us-page-data" className="text">
            {data.data}
          </div>
        )}
      </div>
      {data.image && data.title == "Our Vision" && (
        <img src={data.image} alt="image-alt" id="about-us-page-image" />
      )}
    </div>
  );
};

export default AboutUsSubPage;
