import "./FeaturesStyles.css";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { featuresDummyData } from "../../utils/DummyData";
import { appNavigate } from "../../routes/AppRoutes";
import ArrowLeft from "../arrows/ArrowLeft";
import ArrowRight from "../arrows/ArrowRight";
const FeaturesComponent = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  console.log(currentSlide, loaded);
  const [perView, setPerView] = useState(5);
  useEffect(() => {
    if (window.innerWidth <= 1100) {
      setPerView(3);
    }
    if (window.innerWidth <= 425) {
      setPerView(1);
    }
  }, []);
  const [sliderFeaturesRef, featuresSlider] = useKeenSlider(
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
    let timeout: ReturnType<typeof setTimeout>;
    let mouseOver = false;

    const clearTimeoutFn = () => clearTimeout(timeout);

    const startTimeout = () => {
      clearTimeout(timeout);
      if (!mouseOver) {
        timeout = setTimeout(() => slider.next(), 2000);
      }
    };

    slider.on("created", () => {
      slider.container.addEventListener("mouseover", () => {
        mouseOver = true;
        clearTimeoutFn();
      });

      slider.container.addEventListener("mouseout", () => {
        mouseOver = false;
        startTimeout();
      });

      startTimeout();
    });

    slider.on("dragStarted", clearTimeoutFn);
    slider.on("animationEnded", startTimeout);
    slider.on("updated", startTimeout);
  }

  const clickHandler = (name: string) => {
    appNavigate(name, navigate);
  };
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace("#", "");
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "end" });
      }
    }
  }, [location]);
  return (
    <div id="features-container">
      <div className="heading">FEATURES</div>
      <h2 className="subheading features-subheading">
        Why TesseractApps is the Preferred NDIS Software for Modern Care
        Organisations?
      </h2>
      <div className="text features-text">
        Streamline workforce management, automate compliance, support IT
        operations, and deliver high-quality NDIS services. All in one platform.{" "}
      </div>
      <div className="features-buttons">
        <div
          className="arrow-container"
          id="features-prev"
          onClick={() => featuresSlider.current?.prev()}
        >
          <ArrowLeft />
        </div>
        <div
          className="arrow-container"
          id="features-next"
          onClick={() => featuresSlider.current?.next()}
        >
          <ArrowRight />
        </div>
      </div>
      <div className="features-slider">
        <div ref={sliderFeaturesRef} className="keen-slider">
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
