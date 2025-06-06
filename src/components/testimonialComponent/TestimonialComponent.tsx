import "./TestimonialStyles.css";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { testimonialDummyData } from "../../utils/DummyData";
import leftArrow from "../../assets/Blue arrow.png";
import rightArrow from "../../assets/white arrow.png";
import star from "../../assets/star.png";
import blurImage from "../../assets/blurPinkImage.png";
import { useEffect, useState } from "react";
const TestimonialComponent = () => {
  const [perView, setPerView] = useState(3);
  useEffect(() => {
    if (window.screen.width <= 425) {
      setPerView(1);
    }
  }, []);
  const [sliderRef, slider] = useKeenSlider(
    {
      initial: 0,
      rubberband: true,
      slides: {
        perView: perView,
        spacing: 30,
      },
      slideChanged(slide) {
        console.log(slide.track.details.rel);
      },
    },
    [
      // add plugins here
    ]
  );
  return (
    <div id="testimonial-container">
      <div className="heading">TESTIMONIAL</div>
      <div className="subheading">
        Real Stories. Real Results. Trusted by Leading NDIS Providers.
      </div>
      {/* <div className="text testimonial-heading-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa labore
        eaque in explicabo ea mollitia reprehenderit?
      </div> */}
      <div id="testimonial-carousel-container">
        <img src={blurImage} alt="blurImage" id="blur-image" />
        <div id="testimonial-carousel" ref={sliderRef} className="keen-slider">
          {testimonialDummyData.map((item) => (
            <div key={item.id} className="keen-slider__slide testimonial-card">
              <div className="testimonial-rating-container">
                {Array.from({ length: item.rating }, (_, index) => (
                  <img
                    key={index}
                    src={star}
                    alt="star"
                    className="star-image"
                  />
                ))}
              </div>
              <div className="testimonial-text">{item.testimonial}</div>
              <div className="testimonial-author-details">
                <img
                  src={item.authorImage}
                  alt="author"
                  className="author-image"
                />
                <div className="author-details">
                  <div className="author-name">{item.author}</div>
                  <div className="author-title">{item.authorTitle}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="testimonial-buttons">
          <img
            className="testimonial-button"
            src={leftArrow}
            alt="left arrow"
            onClick={() => slider.current?.prev()}
          />
          <img
            className="testimonial-button"
            src={rightArrow}
            alt="right arrow"
            onClick={() => slider.current?.next()}
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialComponent;
