import "./PricingStyles.css";
import { pricingCardsDummyData, pricingDummyData } from "../../utils/DummyData";
import { useEffect, useRef, useState } from "react";
import tick from "../../assets/tick.svg";
import tick_white from "../../assets/tick_white.svg";
import call from "../../assets/call.svg";
import mark_email from "../../assets/mark_email.svg";
import Slider from "@mui/material/Slider";
import { useNavigate } from "react-router-dom";
const Pricing = () => {
  const navigate = useNavigate();
  const handleBookADemoClick = () => {
    navigate("/requestdemo");
  };
  const [userCount, setUserCount] = useState(0);
  const [readMore, setReadMore] = useState([
    { tier: false },
    { tier: false },
    { tier: false },
  ]);
  const handleReadMore = (index: number) => {
    setReadMore((prev) =>
      prev.map((each, rIndex) =>
        rIndex === index ? { ...each, tier: !readMore[index].tier } : each
      )
    );
  };
  function handleFooterActions(name: string) {
    if (name === "phone") {
      window.location.href = "tel:1300252808";
    }

    if (name === "email") {
      const mailto = "mailto:enquiries@tesseractapps.com?subject=Inquiry";
      const link = document.createElement("a");
      link.href = mailto;
      link.style.display = "none";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setTimeout(() => {
        if (document.hasFocus()) {
          alert(
            "If your email client didn't open, please email us at: enquiries@tesseractapps.com"
          );
        }
      }, 1000);
    }
  }
  const targetRef = useRef(null);
  const [showStickyHeader, setShowStickyHeader] = useState(false);

  useEffect(() => {
    const isMobile = window.innerWidth < 500;
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log("showStickyHeader ", entry.isIntersecting);
        setShowStickyHeader(entry.isIntersecting);
      },
      {
        root: null, // viewport
        threshold: isMobile ? 0 : 0.1, // triggers as soon as any part is visible
        rootMargin: isMobile ? "0px 0px 0px 0px" : "400px 0px 0px 0px",
      }
    );

    const currentTarget = targetRef.current;

    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, []);
  return (
    <div id="pricing-container">
      {showStickyHeader && (
        <div id="pricing-sticky-header">
          {pricingCardsDummyData.map((data, index) => {
            return (
              <div key={index + data.title} className="pricing-sticky-card">
                <div className="pricing-card-title">{data.title}</div>
                <div className="pricing-card-sub-title">{data.subTitle}</div>
                <div className={"pricing-card-pricing"}>
                  {typeof data.Pricing == "number"
                    ? "$" + data.Pricing
                    : data.Pricing}
                </div>
                <div className={"pricing-card-time-period"}>
                  {data.timePeriod}
                </div>
              </div>
            );
          })}
        </div>
      )}
      <div className="heading">PRICING</div>
      <div className="subheading pricing-subheading">
        Compare Our Plans And Find Yours
      </div>
      <div className="pricing-divider-line pricing-divider-line-header" />
      <div className="text pricing-textt">
        "Efficiency meets simplicity-your all-in-one NDIS solution for managing
        care, rostering, invoicing and compliance seamlessly."
      </div>
      <div id="pricing-slider-container">
        <Slider
          defaultValue={50}
          valueLabelDisplay="auto"
          shiftStep={50}
          step={100}
          marks
          min={0}
          max={500}
          id="pricing-slider"
          value={userCount}
          onChange={(event, value) => {
            event.preventDefault();
            setUserCount(value);
          }}
        />
      </div>
      <div id="pricing-cards-container">
        {pricingCardsDummyData.map((data, index) => {
          return (
            <div
              className={
                "pricing-card" +
                (userCount >= data.userLimitRange[0] &&
                userCount <= data.userLimitRange[1]
                  ? "-selected"
                  : "")
              }
              key={index + data.title}
            >
              <div
                className={
                  "pricing-card-title" +
                  (userCount >= data.userLimitRange[0] &&
                  userCount <= data.userLimitRange[1]
                    ? "-selected"
                    : "")
                }
              >
                {data.title}
              </div>
              <div
                className={
                  "pricing-card-sub-title" +
                  (userCount >= data.userLimitRange[0] &&
                  userCount <= data.userLimitRange[1]
                    ? "-selected"
                    : "")
                }
              >
                {data.subTitle}
              </div>
              <div
                className={
                  "pricing-card-pricing" +
                  (userCount >= data.userLimitRange[0] &&
                  userCount <= data.userLimitRange[1]
                    ? "-selected"
                    : "")
                }
              >
                {typeof data.Pricing == "number"
                  ? "$" + data.Pricing
                  : data.Pricing}
              </div>
              <div
                className={
                  "pricing-card-time-period" +
                  (userCount >= data.userLimitRange[0] &&
                  userCount <= data.userLimitRange[1]
                    ? "-selected"
                    : "")
                }
              >
                {data.timePeriod}
              </div>
              {data.currentPlan ? (
                <button
                  className={
                    userCount >= data.userLimitRange[0] &&
                    userCount <= data.userLimitRange[1]
                      ? "pricing-button-selected"
                      : "pricing-button-secondary"
                  }
                >
                  Current Plan
                </button>
              ) : (
                <button
                  className={
                    userCount >= data.userLimitRange[0] &&
                    userCount <= data.userLimitRange[1]
                      ? "pricing-button-selected"
                      : "pricing-button-primary"
                  }
                  onClick={() => navigate("/salesPage")}
                >
                  {data.title == "Enterprise"
                    ? "Contact Us"
                    : "Talk to an expert"}
                </button>
              )}
              <div
                className={
                  "features-container " +
                  (readMore[index].tier ? "expanded" : "collapsed")
                }
              >
                {data.features.map((feature, fIndex) => {
                  return readMore[index].tier ? (
                    <div key={fIndex} className="pricing-tick-data-container">
                      <div className="pricing-tick-icon-container">
                        <img
                          src={
                            userCount >= data.userLimitRange[0] &&
                            userCount <= data.userLimitRange[1]
                              ? tick_white
                              : tick
                          }
                          alt="pricing-tick-icon"
                          className="pricing-tick-icon"
                        />
                      </div>
                      <div
                        className={
                          "pricing-feature-data" +
                          (userCount >= data.userLimitRange[0] &&
                          userCount <= data.userLimitRange[1]
                            ? "-selected"
                            : "")
                        }
                      >
                        {feature}
                      </div>
                    </div>
                  ) : (
                    fIndex < 6 && (
                      <div key={fIndex} className="pricing-tick-data-container">
                        <div className="pricing-tick-icon-container">
                          <img
                            src={
                              userCount >= data.userLimitRange[0] &&
                              userCount <= data.userLimitRange[1]
                                ? tick_white
                                : tick
                            }
                            alt="pricing-tick-icon"
                            className="pricing-tick-icon"
                          />
                        </div>
                        <div
                          className={
                            "pricing-feature-data" +
                            (userCount >= data.userLimitRange[0] &&
                            userCount <= data.userLimitRange[1]
                              ? "-selected"
                              : "")
                          }
                        >
                          {feature}
                        </div>
                      </div>
                    )
                  );
                })}
              </div>
              <div
                className="readMoreButton"
                onClick={() => handleReadMore(index)}
              >
                {readMore[index].tier ? "Read Less" : "Read More"}
              </div>
            </div>
          );
        })}
      </div>
      <div ref={targetRef} id="pricing-data-container">
        {pricingDummyData.map((data) => (
          <div className="pricing-data" key={data.heading}>
            {/* <div className="pricing-divider-line" /> */}

            <div className="pricing-data-heading">{data.heading}</div>
            <div className="pricing-data-data-container">
              {data.data.map((dataItem, index) => (
                <div key={dataItem.title}>
                  {index != 0 && <div className="pricing-divider-line" />}

                  <div className="pricing-data-data">
                    <div className="pricing-data-title-container">
                      <div className="pricing-data-title">{dataItem.title}</div>
                      <div className="pricing-data-subtitle">
                        {dataItem.subTitle}
                      </div>
                    </div>
                    <div className="pricing-data-tick-container">
                      <div className="pricing-data-data1">
                        {typeof dataItem.data1 != "boolean" ? (
                          dataItem.data1
                        ) : (
                          <img
                            src={tick}
                            alt="tick"
                            className="pricing-data-tick"
                          />
                        )}
                      </div>
                      <div className="pricing-data-data2">
                        {typeof dataItem.data2 != "boolean" ? (
                          dataItem.data2
                        ) : (
                          <img
                            src={tick}
                            alt="tick"
                            className="pricing-data-tick"
                          />
                        )}
                      </div>
                      <div className="pricing-data-data3">
                        {typeof dataItem.data3 != "boolean" ? (
                          dataItem.data3
                        ) : (
                          <img
                            src={tick}
                            alt="tick"
                            className="pricing-data-tick"
                          />
                        )}
                      </div>
                    </div>
                    {/* <div className="pricing-data-data4">
                      {typeof dataItem.data4 != "boolean" ? (
                        dataItem.data4
                      ) : (
                        <img
                          src={tick}
                          alt="tick"
                          className="pricing-data-tick"
                        />
                      )}
                    </div> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div id="pricing-help-card">
        <div id="pricing-help-title-container">
          <div id="pricing-help-title">Still have questions?</div>
          <div id="pricing-help-subtitle">We are here to help</div>
        </div>
        <div id="pricing-help-links">
          <div className="pricing-links-container">
            <img src={call} alt="" className="pricing-links-image" />
            <div
              className="pricing-links-data-container"
              onClick={() => handleFooterActions("phone")}
            >
              <div className="pricing-links-data">+61 1300 252 808</div>
              <div className="pricing-links-data-subtext">Support Hotline</div>
            </div>
          </div>
          <div className="pricing-links-container">
            <img src={mark_email} alt="" className="pricing-links-image" />
            <div
              className="pricing-links-data-container"
              onClick={() => handleFooterActions("email")}
            >
              <div className="pricing-links-data">
                enquiries@tesseractapps.com
              </div>
              <div className="pricing-links-data-subtext">Support Email</div>
            </div>
          </div>
          <button id="pricing-help-chat-button" onClick={handleBookADemoClick}>
            {" "}
            Book a Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
