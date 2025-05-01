import "./FeaturesStyles.css";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import leftArrow from "../../assets/Blue arrow.png";
import rightArrow from "../../assets/white arrow.png";
import HumanResourceImage from "../../assets/folder_supervised.svg";
import PayrollImage from "../../assets/payments.svg";
import IncidentReport from "../../assets/siren_check.svg";
import AccountManagement from "../../assets/checkbook.svg";
import TSign from "../../assets/stylus_note.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FeaturesComponent = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  console.log(currentSlide, loaded);
  const [sliderRef, slider] = useKeenSlider(
    {
      mode: "snap",
      rubberband: true,
      slides: {
        perView: 5,
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
  const featuresDummyData = [
    {
      id: 1,
      title: "Human Resources",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: HumanResourceImage,
    },
    {
      id: 2,
      title: "Payroll Management",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: PayrollImage,
    },
    {
      id: 3,
      title: "Incident Reporting",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: IncidentReport,
    },
    {
      id: 4,
      title: "Account Management",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: AccountManagement,
    },
    {
      id: 5,
      title: "T-Sign",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: TSign,
    },
    {
      id: 6,
      title: "Human Resources",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: HumanResourceImage,
    },
    {
      id: 7,
      title: "Payroll Management",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: PayrollImage,
    },
    {
      id: 8,
      title: "Incident Reporting",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: IncidentReport,
    },
    {
      id: 9,
      title: "Account Management",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: AccountManagement,
    },
    {
      id: 10,
      title: "T-Sign",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: TSign,
    },
  ];
  return (
    <div id="features-container">
      <div className="heading">FEATURES</div>
      <div className="subheading features-subheading">
        Why Choose TesseractApps for your organization ?
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
              onClick={() => navigate("/details")}
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
      {/* {loaded && slider.current && (
        <div className="features-dots">
          {[
            ...Array(
              slider.current.track.details.slides.length -
                (slider.current.options.slides?.perView || 5) +
                1
            ),
          ].map((_, idx) => (
            <button
              key={idx}
              onClick={() => slider.current?.moveToIdx(idx)}
              className={`dot ${currentSlide === idx ? "active" : ""}`}
            />
          ))}
        </div>
      )} */}
    </div>
  );
};

export default FeaturesComponent;
