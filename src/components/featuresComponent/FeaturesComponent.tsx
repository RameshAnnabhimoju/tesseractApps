import "./FeaturesStyles.css";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import leftArrow from "../../assets/Blue arrow.png";
import rightArrow from "../../assets/white arrow.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { featuresDummyData } from "../../utils/DummyData";
import { appNavigate } from "../../routes/AppRoutes";
const FeaturesComponent = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  console.log(currentSlide, loaded);
  const [perView, setPerView] = useState(5);
  useEffect(() => {
    if (window.screen.width <= 425) {
      setPerView(1);
    }
  }, []);
  const [sliderRef, slider] = useKeenSlider(
    {
      mode: "snap",
      rubberband: true,
      slides: {
        perView: perView,
        spacing: 30,
      },

      initial: 0,
      slideChanged(s) {
        setCurrentSlide(s.track.details.rel); // update active slide index
      },
      created() {
        setLoaded(true);
      },
    },
    [AutoplayPlugin]
  );
  function AutoplayPlugin(slider: import("keen-slider").KeenSliderInstance) {
    let timeout: number;
    let mouseOver = false;

    function clearNextTimeout() {
      clearTimeout(timeout);
    }

    function nextTimeout() {
      clearTimeout(timeout);
      if (mouseOver) return;
      timeout = setTimeout(() => {
        slider.next();
      }, 2000); // 2 seconds delay (you can change)
    }

    slider.on("created", () => {
      slider.container.addEventListener("mouseover", () => {
        mouseOver = true;
        clearNextTimeout();
      });
      slider.container.addEventListener("mouseout", () => {
        mouseOver = false;
        nextTimeout();
      });
      nextTimeout();
    });

    slider.on("dragStarted", clearNextTimeout);
    slider.on("animationEnded", nextTimeout);
    slider.on("updated", nextTimeout);
  }
  const clickHandler = (name: string) => {
    appNavigate(navigate, name);
  };
  return (
    <div id="features-container">
      <div className="heading">FEATURES</div>
      <div className="subheading features-subheading">
        Why Choose TesseractApps for your organisation ?
      </div>
      <div className="features-buttons">
        <img
          className="features-button"
          src={leftArrow}
          alt="left arrow"
          onClick={() => slider.current?.prev()}
        />
        <img
          className="features-button"
          src={rightArrow}
          alt="right arrow"
          onClick={() => slider.current?.next()}
        />
      </div>
      <div className="features-slider">
        <div ref={sliderRef} className="keen-slider">
          {featuresDummyData.map((feature) => (
            <div
              key={feature.id}
              className="keen-slider__slide features-card"
              onClick={() => clickHandler(feature.title)}
            >
              <img
                className="features-card-image"
                src={feature.image}
                alt={feature.title}
              />
              <div className="features-card-title">{feature.title}</div>
              <div className="features-card-description">
                {feature.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesComponent;
