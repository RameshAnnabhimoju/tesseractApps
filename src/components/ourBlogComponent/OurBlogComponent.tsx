import "./OurBlogStyles.css";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useEffect, useRef, useState } from "react";

// import image3 from "../../assets/image2.webp";
// import image4 from "../../assets/image3.webp";
// import leftArrow from "../../assets/Blue arrow.webp";
import rightArrow from "../../assets/white arrow.webp";
import { ourBlogDummyData } from "../../utils/DummyData";
import { useNavigate } from "react-router-dom";
import ArrowLeft from "../arrows/ArrowLeft";
import ArrowRight from "../arrows/ArrowRight";

// Inner component: contains useKeenSlider — only mounts when shell is in view
// Deferring mount until intersection avoids the offsetWidth reflow during initial page load.
const OurBlogSlider = () => {
  const getPerView = () => {
    if (typeof window === "undefined") return 4;
    if (window.innerWidth <= 570) return 1;
    if (window.innerWidth <= 1000) return 2;
    if (window.innerWidth <= 1100) return 3;
    return 4;
  };

  const [sliderRef, slider] = useKeenSlider(
    {
      mode: "free-snap",
      slides: {
        perView: getPerView(),
        spacing: 50,
      },
    },
    [
      (slider) => {
        const handleResize = () => {
          slider.update({
            slides: {
              perView: getPerView(),
              spacing: 50,
            },
          });
        };
        slider.on("created", () => {
          window.addEventListener("resize", handleResize);
        });
        slider.on("destroyed", () => {
          window.removeEventListener("resize", handleResize);
        });
      },
    ]
  );

  const navigate = useNavigate();
  return (
    <>
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
        {ourBlogDummyData
          .sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          )
          .map((data, index) => {
            return (
              <div
                key={index}
                className="keen-slider__slide ourBlog-card"
                onClick={() => {
                  if (data.slug) navigate(data.slug);
                }}
              >
                <img loading="lazy"
                  className="ourBlog-image"
                  src={data.thumbnail ?? data.image}
                  alt="ourBlog Image"
                  width="400"
                  height="210"
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
                    <img loading="lazy"
                      src={data.authorImageThumb ?? data.authorImage}
                      alt="author Image"
                      className="ourBlog-author-image"
                      width="45"
                      height="45"
                    />
                    <div className="ourBlog-author-name">{data?.author}</div>
                  </div>
                  <div className="read-more-container">
                    <div className="ourBlog-read-more">Read More</div>
                    <img loading="lazy"
                      className="ourBlog-right-arrow"
                      src={rightArrow}
                      alt="arrow Image"
                      width="30"
                      height="30"
                    />
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

const OurBlogComponent = () => {
  const shellRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = shellRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect(); // one-shot: init slider once, never re-observe
        }
      },
      { rootMargin: "200px" } // pre-init 200px before entering viewport
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div id="ourBlog-container" ref={shellRef}>
      <div className="heading">OUR BLOG</div>
      <div className="subheading">Most Recent Updates and Research</div>
      {isInView
        ? <OurBlogSlider />
        : <div style={{ minHeight: "300px" }} aria-hidden="true" />
      }
    </div>
  );
};

export default OurBlogComponent;
