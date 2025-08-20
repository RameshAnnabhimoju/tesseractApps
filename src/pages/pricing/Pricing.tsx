import "./PricingStyles.css";
import { pricingCardsDummyData, pricingDummyData } from "../../utils/DummyData";
import { useState } from "react";
import tick from "../../assets/tick.svg";
import tickBlue from "../../assets/tick-blue.svg";
import tickBlack from "../../assets/tick-black.svg";
import remove from "../../assets/remove.png";
import ArrowDown from "../../assets/arrow_down.svg";
// import tick_white from "../../assets/tick_white.svg";
import call from "../../assets/call.svg";
import mark_email from "../../assets/mark_email.svg";
import { useNavigate } from "react-router-dom";
import ContactInformationCard from "../../components/contactInformationCard/ContactInformationCard";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
type PricingDataTickItemTypes = {
  title: string;
  subTitle: string;
  data1?: boolean;
  data2?: boolean;
  data3?: boolean;
};
const Pricing = () => {
  const navigate = useNavigate();
  const handleBookADemoClick = () => {
    navigate("/requestdemo");
  };
  const [selectedTab, setSelectedTab] = useState<
    | "ndis"
    | "ict"
    | "retailAndHospitality"
    | "multiSiteBusinesses"
    | "manufacturing"
    | "construction"
  >("ndis");
  // const [userCount, setUserCount] = useState(0);

  function handleFooterActions(name: string) {
    if (name === "phone") {
      window.location.href = "tel:1300252808";
    }

    if (name === "email") {
      const mailto = "mailto:sales@tesseractapps.com?subject=Inquiry";
      const link = document.createElement("a");
      link.href = mailto;
      link.style.display = "none";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setTimeout(() => {
        if (document.hasFocus()) {
          alert(
            "If your email client didn't open, please email us at: sales@tesseractapps.com"
          );
        }
      }, 1000);
    }
  }
  const categoryChangeHandler = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const value = event.target.value;
    setSelectedTab(value as typeof selectedTab);
  };
  return (
    <div id="pricing-container">
      <div className="heading">PRICING</div>
      <h1 className="subheading pricing-subheading">
        Save time with TesseractApps.
      </h1>
      <div className="pricing-divider-line pricing-divider-line-header" />
      <h2 className="text pricing-textt">
        "Our all-in-one NDIS software helps you manage everything from staff
        schedules to billing, quickly and easily."
      </h2>
      <div id="pricing-cta-button">
        <button
          className="pricing-button-primary button-contain"
          onClick={() => navigate("/salesPage")}
        >
          Start Your Trial Now
        </button>
      </div>

      <div id="pricing-category-container">
        <select
          name="pricingCategory"
          id="pricing-category-select"
          defaultValue="ndis"
          onChange={categoryChangeHandler}
        >
          <option className="pricing-category-select-option" value="ndis">
            NDIS Industry
          </option>
          <option className="pricing-category-select-option" value="ict">
            ICT Industry
          </option>
          <option
            className="pricing-category-select-option"
            value="retailAndHospitality"
          >
            Retail & Hospitality
          </option>
          <option
            className="pricing-category-select-option"
            value="multiSiteBusinesses"
          >
            Multi-Site Businesses
          </option>
          <option
            className="pricing-category-select-option"
            value="manufacturing"
          >
            Manufacturing
          </option>
          <option
            className="pricing-category-select-option"
            value="construction"
          >
            Construction
          </option>
        </select>
      </div>
      {pricingCardsDummyData[selectedTab].length > 0 && (
        <div id="pricing-data-container">
          <div id="pricing-cards-container">
            {pricingCardsDummyData[selectedTab].length > 0 &&
              pricingCardsDummyData[selectedTab].map((data, index) => {
                return (
                  <div
                    className={
                      index == 1 && selectedTab == "ndis"
                        ? "pricing-card-selected"
                        : "pricing-card"
                    }
                    key={index + data.title}
                  >
                    {index == 1 && selectedTab == "ndis" ? (
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
                      {data.Pricing > 0 ? "$" + data.Pricing : ""}
                    </div>
                    <div className={"pricing-card-time-period"}>
                      {data.timePeriod}
                    </div>
                    <div className="pricing-minimum-number">
                      minimum 5 users
                    </div>
                    <button
                      className="pricing-button-primary"
                      onClick={() => navigate("/salesPage")}
                    >
                      {data.cta}
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
                                src={index == 1 ? tickBlue : tickBlack}
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
                      {data.optionalAddons.length > 0 && (
                        <div className="pricing-optional-addon-container">
                          <div className="pricing-optional-addon-subheading">
                            Optional Addons
                          </div>
                          {data.optionalAddons.map((addOn, index) => (
                            <div
                              key={index + addOn}
                              className="pricing-feature-data pricing-optional-addon"
                            >
                              {addOn}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
          </div>
          <div id="pricing-data-accordian-container">
            {(
              pricingDummyData[selectedTab as keyof typeof pricingDummyData] ??
              []
            ).map((data) => (
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
                      {pricingCardsDummyData[selectedTab].length > 0 &&
                        pricingCardsDummyData[selectedTab].map(
                          (data, index) => {
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
                              </div>
                            );
                          }
                        )}
                    </div>

                    {data.data.map((dataItem: PricingDataTickItemTypes) => (
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
                          {dataItem.data1 !== undefined && (
                            <PricingDataItem
                              value={dataItem.data1}
                              className="pricing-data-data1"
                            />
                          )}

                          {dataItem.data2 !== undefined && (
                            <PricingDataItem
                              value={dataItem.data2}
                              className="pricing-data-data2"
                            />
                          )}

                          {dataItem.data3 !== undefined && (
                            <PricingDataItem
                              value={dataItem.data3}
                              className="pricing-data-data3"
                            >
                              {dataItem.title === "Support Chat" && (
                                <span>+ Dedicated Manager</span>
                              )}
                            </PricingDataItem>
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
      {(pricingDummyData[selectedTab as keyof typeof pricingDummyData] ?? [])
        .length == 0 && (
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
              <div className="pricing-links-data">sales@tesseractapps.com</div>
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

import React from "react";

type PricingDataItemProps = {
  value: boolean; // true / false
  className: string;
  children?: React.ReactNode;
};

const PricingDataItem: React.FC<PricingDataItemProps> = ({
  value,
  className,
  children,
}) => {
  return (
    <div className={className}>
      <img
        src={value ? tick : remove}
        alt={value ? "tick" : "remove"}
        className={`pricing-data-tick ${
          value ? "pricing-data-tick-success" : ""
        }`}
      />
      {value && children}
    </div>
  );
};
