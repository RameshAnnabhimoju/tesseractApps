import "./HowItWorksStyles.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { howItWorksDummyData, howItWorksImages } from "../../utils/DummyData";
const HowItWorksComponent = () => {
  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState(0);

  return (
    <div id="howItWorks-container">
      <div className="heading heading-howItWorks">HOW IT WORKS</div>
      <div className="subheading subheading-howItWorks">
        A comprehensive, user-friendly platform designed to streamline every
        aspect of care and service delivery.
      </div>
      <div id="howItWorks-content" onMouseLeave={() => setHoveredIndex(0)}>
        <div id="howItWorks-content-text">
          {howItWorksDummyData.map((data, index) => {
            return (
              <div
                key={data.id + index}
                className="howItWorks-card"
                onMouseEnter={() => setHoveredIndex(index)}
                onClick={() => navigate("/details")}
              >
                <div className="howItWorks-card-title-number">{data.id}</div>
                <div className="howItWorks-card-title">{data.title}</div>
                <div className="howItWorks-card-description">
                  {data.description}
                </div>
              </div>
            );
          })}
        </div>
        <div id="howItWorks-image">
          <img
            src={howItWorksImages[hoveredIndex]}
            alt="How It Works"
            id="howItWorks-image"
          />
        </div>
      </div>
    </div>
  );
};

export default HowItWorksComponent;
