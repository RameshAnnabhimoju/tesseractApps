import "./OurBlogStyles.css";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

// import image3 from "../../assets/image2.png";
// import image4 from "../../assets/image3.png";
// import leftArrow from "../../assets/Blue arrow.png";
import rightArrow from "../../assets/white arrow.png";
import { ourBlogDummyData } from "../../utils/DummyData";
import { useNavigate } from "react-router-dom";
import ArrowLeft from "../arrows/ArrowLeft";
import ArrowRight from "../arrows/ArrowRight";
import { useEffect, useState } from "react";

const OurBlogComponent = () => {
  const [perView, setPerView] = useState(4);
  useEffect(() => {
    if (window.innerWidth <= 1100) {
      setPerView(3);
    }
    if (window.innerWidth <= 1000) {
      setPerView(2);
    }
    if (window.innerWidth <= 570) {
      setPerView(1);
    }
  }, []);
  const [sliderRef, slider] = useKeenSlider(
    {
      mode: "free-snap",
      slides: {
        perView: perView,
        spacing: 50,
      },
      slideChanged(slide) {
        console.log(slide.track.details.rel);
      },
    },
    [
      // add plugins here
    ]
  );

  const navigate = useNavigate();
  return (
    <div id="ourBlog-container">
      <div className="heading">OUR BLOG</div>
      <div className="subheading">Most Recent Updates and Research</div>
      <div className="ourBlog-buttons">
        <div
          className="arrow-container ourBlog-button"
          onClick={() => slider.current?.prev()}
        >
          <ArrowLeft />
        </div>
        <div
          className="arrow-container ourBlog-button"
          onClick={() => slider.current?.next()}
        >
          <ArrowRight />
        </div>
      </div>
      <div ref={sliderRef} className="keen-slider">
        {ourBlogDummyData.map((data, index) => {
          return (
            <div
              key={index}
              className="keen-slider__slide ourBlog-card"
              onClick={() => {
                if (data.id == 1) {
                  navigate("/blogpost");
                } else if (data.id == 2) {
                  navigate("/blogpost2");
                } else if (data.id == 3) {
                  navigate("/blogpost3");
                } else if (data.id == 4) {
                  navigate("/blogpost4");
                } else if (data.id == 5) {
                  navigate("/blogpost5");
                } else if (data.id == 6) {
                  navigate("/blogpost6");
                } else if (data.id == 7) {
                  navigate("/blogpost7");
                } else if (data.id == 8) {
                  navigate("/blogpost8");
                } else if (data.id == 9) {
                  navigate("/blogpost9");
                } else if (data.id == 10) {
                  navigate("/blogpost10");
                }
              }}
            >
              <img
                className="ourBlog-image"
                src={data.image}
                alt="ourBlog Image"
              />
              <div className="ourBlog-attributes-container">
                <div className="ourBlog-attributes">{data?.date}</div>
                {/* <div className="ourBlog-attributes">
                  {data?.comments} COMMENTS
                </div> */}
              </div>
              <div className="ourBlog-title">{data?.title}</div>
              <div className="ourBlog-description">{data?.description}</div>
              <div className="dividerLine" />
              <div className="ourBlog-footer">
                <div className="ourBlog-author">
                  <img
                    src={data.authorImage}
                    alt="author Image"
                    className="ourBlog-author-image"
                  />
                  <div className="ourBlog-author-name">{data?.author}</div>
                </div>
                <div className="read-more-container">
                  <div className="ourBlog-read-more">Read More</div>
                  <img
                    className="ourBlog-right-arrow"
                    src={rightArrow}
                    alt="arrow Image"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurBlogComponent;
