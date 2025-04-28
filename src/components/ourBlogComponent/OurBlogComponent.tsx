import "./OurBlogStyles.css";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import image1 from "../../assets/image.png";
import image2 from "../../assets/image1.png";
import image3 from "../../assets/image2.png";
import image4 from "../../assets/image3.png";
import leftArrow from "../../assets/Blue arrow.png";
import rightArrow from "../../assets/white arrow.png";
import authorImage from "../../assets/authorProfileImage.png";

const OurBlogComponent = () => {
  const [sliderRef, slider] = useKeenSlider(
    {
      mode: "free-snap",
      rubberband: true,
      slides: {
        perView: "auto",
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
  const ourBlogDummyData = [
    {
      id: 1,
      title: "Health care In Australia",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: image1,
      date: "2023-10-01",
      author: "John Doe",
      authorImage: authorImage,
      comments: 253,
    },
    {
      id: 2,
      title: "Oldage",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: image2,
      date: "2024-12-05",
      author: "Jane Doe",
      authorImage: authorImage,
      comments: 150,
    },
    {
      id: 3,
      title: "Health care In Australia",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: image3,
      date: "2023-10-01",
      author: "John Doe",
      authorImage: authorImage,
      comments: 253,
    },
    {
      id: 4,
      title: "Health care In Australia",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: image4,
      date: "2023-10-01",
      author: "John Doe",
      authorImage: authorImage,
      comments: 253,
    },
    {
      id: 5,
      title: "Health care In Australia",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: image3,
      date: "2023-10-01",
      author: "John Doe",
      authorImage: authorImage,
      comments: 253,
    },
    {
      id: 6,
      title: "Health care In Australia",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: image2,
      date: "2023-10-01",
      author: "John Doe",
      authorImage: authorImage,
      comments: 253,
    },
    {
      id: 7,
      title: "Health care In Australia",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: image2,
      date: "2023-10-01",
      author: "John Doe",
      authorImage: authorImage,
      comments: 253,
    },
    {
      id: 8,
      title: "Health care In Australia",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: image2,
      date: "2023-10-01",
      author: "John Doe",
      authorImage: authorImage,
      comments: 253,
    },
    {
      id: 9,
      title: "Health care In Australia",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: image2,
      date: "2023-10-01",
      author: "John Doe",
      authorImage: authorImage,
      comments: 253,
    },
  ];

  return (
    <div id="ourBlog-container">
      <div className="heading">OUR BLOG</div>
      <div className="subheading">Most Recent Updates and Research</div>
      <div className="ourBlog-buttons">
        <img
          className="ourBlog-button"
          src={leftArrow}
          alt="left arrow"
          onClick={() => slider.current?.prev()}
        />
        <img
          className="ourBlog-button"
          src={rightArrow}
          alt="right arrow"
          onClick={() => slider.current?.next()}
        />
      </div>
      <div ref={sliderRef} className="keen-slider">
        {ourBlogDummyData.map((data) => {
          return (
            <div className="keen-slider__slide ourBlog-card">
              <img
                className="ourBlog-image"
                src={data.image}
                alt="ourBlog Image"
              />
              <div className="ourBlog-attributes-container">
                <div className="ourBlog-attributes">{data?.date}</div>
                <div className="ourBlog-attributes">
                  {data?.comments} COMMENTS
                </div>
              </div>
              <div className="ourBlog-title">{data?.title}</div>
              <div className="ourBlog-description">{data?.description}</div>
              <div className="dividerLine" />
              <div className="ourBlog-footer">
                <div className="ourBlog-author">
                  <img src={data.authorImage} alt="author Image" />
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
