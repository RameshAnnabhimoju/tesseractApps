import "./OurStoryStyles.css";
import ourStoryImage from "../../assets/our story image.jpg";
import ourStoryImage1 from "../../assets/our-story-1.jpg";
import ourStoryImage2 from "../../assets/our-story-2.jpg";
import ourStoryImage3 from "../../assets/our-story-3.jpg";
import ourStoryImage4 from "../../assets/our-story-4.jpg";
import ourStoryImage5 from "../../assets/our-story-5.jpg";

import { useEffect, useRef } from "react";

const OurStory = () => {
  const imageRef = useRef<HTMLImageElement | null>(null);
  console.log(window.innerWidth);
  useEffect(() => {
    if (window.innerWidth > 800 && imageRef.current) {
      const imageBottom =
        imageRef.current.offsetTop + imageRef.current.offsetHeight;
      window.scrollTo({ top: imageBottom, behavior: "smooth" });
    }
  }, []);

  return (
    <div id="our-story-container">
      {window.innerWidth > 800 && (
        <>
          <div id="our-story-title" className="subheading">
            Our Story
          </div>
          <img
            ref={imageRef}
            src={ourStoryImage}
            alt="our-story-image"
            id="our-story-image"
          />
        </>
      )}
      {window.innerWidth < 800 && (
        <>
          <div id="our-story-title" className="subheading">
            Our Story
          </div>
          <img
            src={ourStoryImage1}
            alt="our-story-image1"
            id="our-story-image1"
          />
          <img
            src={ourStoryImage2}
            alt="our-story-image2"
            id="our-story-image3"
          />
          <img
            src={ourStoryImage3}
            alt="our-story-image3"
            id="our-story-image3"
          />
          <img
            src={ourStoryImage4}
            alt="our-story-image4"
            id="our-story-image4"
          />
          <img
            src={ourStoryImage5}
            alt="our-story-image5"
            id="our-story-image5"
          />
        </>
      )}
    </div>
  );
};

export default OurStory;
