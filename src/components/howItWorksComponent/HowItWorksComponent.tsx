import "./HowItWorksStyles.css";

import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

import { howItWorksDummyData, howItWorksImages } from "../../utils/DummyData";
import { useKeenSlider } from "keen-slider/react";
const HowItWorksComponent = () => {
  // const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState(0);
  const [perView, setPerView] = useState(window.screen.width <= 1100 ? 1 : 4);
  useEffect(() => {
    // console.log(window.screen.width);
    if (window.screen.width <= 1100) {
      setPerView(1);
    }
    if (window.screen.width <= 425) {
      setPerView(1);
    }
  }, []);
  const [sliderRef] = useKeenSlider({
    mode: "snap",
    rubberband: true,
    slides: {
      perView: perView,
      spacing: 30,
    },

    initial: 0,
    slideChanged(s) {
      setHoveredIndex(s.track.details.rel); // update active slide index
    },
  });

  return (
    <div id="howItWorks-container">
      <div className="heading ">HOW IT WORKS</div>
      <div className="subheading subheading-howItWorks">
        From onboarding to compliance — TesseractApps simplifies every step of
        care delivery and operations.
      </div>
      <div id="howItWorks-content" onMouseLeave={() => setHoveredIndex(0)}>
        {perView > 1 && (
          <div id="howItWorks-content-text">
            {howItWorksDummyData.map((data, index) => {
              return (
                <div
                  key={data.id + index}
                  className="howItWorks-card"
                  onMouseEnter={() => setHoveredIndex(index)}
                  // onClick={() => navigate("/details")}
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
        )}
        {perView == 1 && (
          <div
            ref={sliderRef}
            className="keen-slider"
            id="howItWorks-content-text-carousel"
          >
            {howItWorksDummyData.map((data, index) => {
              return (
                <div
                  key={data.id + index}
                  className="keen-slider__slide howItWorks-card"
                  // onMouseEnter={() => setHoveredIndex(index)}
                  // onClick={() => navigate("/details")}
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
        )}
        {/* <div id="howItWorks-image-container">
          <img
            src={howItWorksImages[hoveredIndex]}
            alt="How It Works"
            id="howItWorks-image"
          />
        </div> */}
        {howItWorksImages.map((image, index) => {
          return (
            hoveredIndex == index && (
              <div
                id="howItWorks-image-container"
                // className={hoveredIndex == index ? "" : "howItWorks-hide"}
                key={image + index}
              >
                <img src={image} alt="How It Works" id="howItWorks-image" />
              </div>
            )
          );
        })}
      </div>
    </div>
  );
};

export default HowItWorksComponent;
