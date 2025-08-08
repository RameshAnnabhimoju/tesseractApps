import "./PricingStyles.css";
import { pricingCardsDummyData, pricingDummyData } from "../../utils/DummyData";
import {
  // useEffect,
  // useRef,
  useState,
} from "react";
import tick from "../../assets/tick.svg";
import remove from "../../assets/remove.png";
import ArrowDown from "../../assets/arrow_down.svg";
// import tick_white from "../../assets/tick_white.svg";
import call from "../../assets/call.svg";
import mark_email from "../../assets/mark_email.svg";
// import Slider from "@mui/material/Slider";
import { useNavigate } from "react-router-dom";
import ContactInformationCard from "../../components/contactInformationCard/ContactInformationCard";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
const Pricing = () => {
  const navigate = useNavigate();
  const handleBookADemoClick = () => {
    navigate("/requestdemo");
  };
  const [selectedTab, setSelectedTab] = useState(0);
  // const [userCount, setUserCount] = useState(0);

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
  // const targetRef = useRef(null);
  // const [showStickyHeader, setShowStickyHeader] = useState(false);

  // useEffect(() => {
  //   const isMobile = window.innerWidth < 500;
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       console.log("showStickyHeader ", entry.isIntersecting);
  //       setShowStickyHeader(entry.isIntersecting);
  //     },
  //     {
  //       root: null, // viewport
  //       threshold: isMobile ? 0 : 0.1, // triggers as soon as any part is visible
  //       rootMargin: isMobile ? "0px 0px 0px 0px" : "400px 0px 0px 0px",
  //     }
  //   );

  //   const currentTarget = targetRef.current;

  //   if (currentTarget) {
  //     observer.observe(currentTarget);
  //   }

  //   return () => {
  //     if (currentTarget) {
  //       observer.unobserve(currentTarget);
  //     }
  //   };
  // }, []);
  const handleTabClick = (index: number) => {
    setSelectedTab(index);
  };
  return (
    <div id="pricing-container">
      <div className="heading">PRICING</div>
      <div className="subheading pricing-subheading">
        Compare Our Plans And Find Yours
      </div>
      <div className="pricing-divider-line pricing-divider-line-header" />
      <div className="text pricing-textt">
        "Efficiency meets simplicity-your all-in-one NDIS solution for managing
        care, rostering, invoicing and compliance seamlessly."
      </div>
      <div id="pricing-category-container">
        <div
          className="slider"
          style={{ transform: `translateX(${selectedTab * 100}%)` }}
        />

        <div
          className={`pricing-category-button${
            selectedTab === 0 ? " selected" : ""
          }`}
          onClick={() => handleTabClick(0)}
        >
          NDIS Industry
        </div>
        <div
          className={`pricing-category-button${
            selectedTab === 1 ? " selected" : ""
          }`}
          onClick={() => handleTabClick(1)}
        >
          ICT Industry
        </div>
      </div>
      {selectedTab == 0 && (
        <div id="pricing-data-container">
          <div id="pricing-cards-container">
            {pricingCardsDummyData.map((data, index) => {
              return (
                <div
                  className={
                    index == 1 ? "pricing-card-selected" : "pricing-card"
                  }
                  key={index + data.title}
                >
                  {index == 1 ? (
                    <div className="pricing-card-tag">MOST POPULAR</div>
                  ) : (
                    <div style={{ height: "10px" }}></div>
                  )}
                  <div className={"pricing-card-title"}>{data.title}</div>
                  <div className={"pricing-card-sub-title"}>
                    {data.subTitle}
                  </div>
                  <div className={"pricing-card-description"}>
                    {data.description}
                  </div>
                  <div className={"pricing-card-pricing"}>
                    {"$" + data.Pricing}
                  </div>
                  <div className={"pricing-card-time-period"}>
                    {data.timePeriod}
                  </div>
                  <div className="pricing-minimum-number">minimum 5 users</div>
                  <button
                    className="pricing-button-primary"
                    onClick={() => navigate("/salesPage")}
                  >
                    Talk to an expert
                  </button>
                  <div className={"features-container "}>
                    {data.features.map((feature, fIndex) => {
                      return (
                        <div
                          key={fIndex}
                          className="pricing-tick-data-container"
                        >
                          <div className="pricing-tick-icon-container">
                            <img
                              src={tick}
                              alt="pricing-tick-icon"
                              className="pricing-tick-icon"
                            />
                          </div>
                          <div className={"pricing-feature-data"}>
                            {feature}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
          <div id="pricing-data-accordian-container">
            {pricingDummyData.map((data) => (
              <Accordion
                key={data.heading}
                className="faq-page-accordian"
                elevation={0}
                square
                sx={{
                  marginBottom: "5px",
                }}
              >
                <AccordionSummary
                  sx={{
                    backgroundImage: "var(--color-background-gradient)",
                  }}
                  expandIcon={<img src={ArrowDown} alt="arrow" />}
                >
                  <Typography component="span">
                    <div className="pricing-data-heading">{data.heading}</div>
                  </Typography>
                </AccordionSummary>

                <div className="pricing-data-data-container">
                  <AccordionDetails>
                    <div className="pricing-sticky-header">
                      <div className="pricing-sticky-empty-header"></div>
                      {pricingCardsDummyData.map((data, index) => {
                        return (
                          <div
                            key={index + data.title}
                            className="pricing-sticky-card"
                          >
                            <div className="pricing-card-title">
                              {data.title}
                            </div>
                            <div className="pricing-card-sub-title">
                              {data.subTitle}
                            </div>
                            {/* <div className={"pricing-card-pricing"}>
                                {typeof data.Pricing == "number"
                                  ? "$" + data.Pricing
                                  : data.Pricing}
                              </div> */}
                            {/* <div className={"pricing-card-time-period"}>
                                {data.timePeriod}
                              </div> */}
                          </div>
                        );
                      })}
                    </div>

                    {data.data.map((dataItem) => (
                      <Typography
                        sx={{
                          fontSize: "18px",
                          fontWeight: 400,
                          textAlign: "left",
                        }}
                      >
                        <div className="pricing-data-title-container-outer">
                          <div className="pricing-data-title">
                            {dataItem.title}
                          </div>
                          <div className="pricing-data-subtitle">
                            {dataItem.subTitle}
                          </div>
                        </div>
                        <div className="pricing-data-data">
                          <div className="pricing-data-title-container">
                            <div className="pricing-data-title">
                              {dataItem.title}
                            </div>
                            <div className="pricing-data-subtitle">
                              {dataItem.subTitle}
                            </div>
                          </div>
                          {/* <div className="pricing-data-tick-container"> */}
                          {dataItem.data1 ? (
                            <div className="pricing-data-data1">
                              <img
                                src={tick}
                                alt="tick"
                                className="pricing-data-tick pricing-data-tick-success"
                              />
                            </div>
                          ) : (
                            <div className="pricing-data-data1">
                              <img
                                src={remove}
                                alt="remove"
                                className="pricing-data-tick"
                              />
                            </div>
                          )}
                          {dataItem.data2 ? (
                            <div className="pricing-data-data2">
                              <img
                                src={tick}
                                alt="tick"
                                className="pricing-data-tick pricing-data-tick-success"
                              />
                            </div>
                          ) : (
                            <div className="pricing-data-data2">
                              <img
                                src={remove}
                                alt="remove"
                                className="pricing-data-tick"
                              />
                            </div>
                          )}
                          {dataItem.data3 ? (
                            <div className="pricing-data-data3">
                              <img
                                src={tick}
                                alt="tick"
                                className="pricing-data-tick pricing-data-tick-success"
                              />
                              {dataItem.title == "Support Chat" && (
                                <span>+ Dedicated Manager</span>
                              )}
                            </div>
                          ) : (
                            <div className="pricing-data-data3">
                              <img
                                src={remove}
                                alt="remove"
                                className="pricing-data-tick"
                              />
                            </div>
                          )}
                          {/* </div> */}
                        </div>
                      </Typography>
                    ))}
                  </AccordionDetails>
                </div>
              </Accordion>
            ))}
          </div>
        </div>
      )}
      {selectedTab == 1 && (
        <div id="pricing-contact-information">
          <ContactInformationCard />
        </div>
      )}
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
