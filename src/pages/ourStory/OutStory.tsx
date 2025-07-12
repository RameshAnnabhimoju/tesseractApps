import "./OurStoryStyles.css";
import ourStoryImage from "../../assets/our story image.jpg";
import ourStoryImage1 from "../../assets/our-story-1.jpg";
import ourStoryImage2 from "../../assets/our-story-2.jpg";
import ourStoryImage3 from "../../assets/our-story-3.jpg";
import ourStoryImage4 from "../../assets/our-story-4.jpg";
import ourStoryImage5 from "../../assets/our-story-5.jpg";

import { useEffect } from "react";

const OurStory = () => {
  // const imageRef = useRef<HTMLImageElement | null>(null);
  // console.log(window.innerWidth);
  // useEffect(() => {
  //   if (window.innerWidth > 800 && imageRef.current) {
  //     const imageBottom =
  //       imageRef.current.offsetTop + imageRef.current.offsetHeight - 500;
  //     window.scrollTo({ top: imageBottom, behavior: "smooth" });
  //   }
  // }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      const element = document.getElementById("our-story-bottom");
      if (element) {
        const elementRect = element.getBoundingClientRect();
        const absoluteElementTop = elementRect.top + window.pageYOffset;
        const middle =
          absoluteElementTop - window.innerHeight / 2 + elementRect.height / 2;

        window.scrollTo({
          top: middle,
          behavior: "smooth",
        });
      }
    }, 1000); // Adjust delay as needed

    return () => clearTimeout(timer);
  }, []);
  return (
    <div id="our-story-container">
      {window.innerWidth > 800 && (
        <>
          <div id="our-story-title" className="subheading">
            Our Story
          </div>
          <img src={ourStoryImage} alt="our-story-image" id="our-story-image" />
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
      <div id="our-story-bottom" />
    </div>
  );
};

export default OurStory;
