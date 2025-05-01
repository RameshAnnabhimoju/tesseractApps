import "./HowItWorksStyles.css";
import howItWorksImage1 from "../../assets/howItWorks1.png";
import howItWorksImage2 from "../../assets/howItWorks2.png";
import howItWorksImage3 from "../../assets/howItWorks3.png";
import howItWorksImage4 from "../../assets/howItWorks4.png";
import howItWorksImage5 from "../../assets/howItWorks5.png";
import howItWorksImage6 from "../../assets/howItWorks6.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const HowItWorksComponent = () => {
  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState(0);
  const howItWorksDummyData = [
    {
      id: 1,
      title: "NDIS operations",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam, dapibus mattis ",
    },
    {
      id: 2,
      title: "Payroll",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    },
    {
      id: 3,
      title: "Marketing",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    },
    {
      id: 4,
      title: "Support",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    },
    {
      id: 5,
      title: "HR Operations",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    },
    {
      id: 6,
      title: "24/7 Protection",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    },
  ];
  const howItWorksImages = [
    howItWorksImage1,
    howItWorksImage2,
    howItWorksImage3,
    howItWorksImage4,
    howItWorksImage5,
    howItWorksImage6,
  ];
  return (
    <div id="howItWorks-container">
      <div className="heading heading-howItWorks">HOW IT WORKS</div>
      <div className="subheading subheading-howItWorks">
        A comprehensive, user-friendly platform that handles everything from
        care managemment to compliance.
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
