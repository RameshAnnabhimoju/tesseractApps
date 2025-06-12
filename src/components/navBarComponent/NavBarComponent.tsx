import logo_small from "../../assets/tesseract_logo_small.png";
import search from "../../assets/search.svg";
import plus from "../../assets/plus.svg";
import profile from "../../assets/person.svg";
import australia from "../../assets/australia.png";
import Popup from "../popupComponent/PopupComponent";
import "./NavBarStyles.css";
import { useEffect, useState } from "react";
import { RefObject } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  navBarDummyData,
  SubPagesDummyData,
  itemsPageDummyData,
  aboutUsPageData,
  byRoleData,
  byIndustryData,
  productsDetailsData,
} from "../../utils/DummyData";
import { Drawer } from "@mui/material";
import menuIcon from "../../assets/menu.png";
import closeIcon from "../../assets/close.png";
interface PopupPosition {
  top: number;
  left: number;
}
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDown from "../../assets/arrow_down.svg";
const NavBarComponent = ({
  portalContainerRef,
}: {
  portalContainerRef: RefObject<HTMLDivElement | null>;
}) => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  const navigate = useNavigate();
  const [showSearch, setShowSearch] = useState(false);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState<
    keyof typeof navBarDummyData | ""
  >("");
  const [popupPosition, setPopupPosition] = useState<PopupPosition | null>(
    null
  );

  const handleSearchIcon = () => {
    setShowSearch(false);
  };
  const handleNavClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const name = event.currentTarget.id;
    setToggleDrawer(false);
    if (name) {
      switch (name) {
        case "Pricing":
          navigate("/pricing");
          break;
        case "Product":
          navigate("/product", {
            state: { data: SubPagesDummyData["Product"] },
          });
          break;
        default:
          break;
      }
    }
  };
  const handleNavPopupClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    // const scrollLeft = window.scrollX || document.documentElement.scrollLeft;

    // 🎯 Calculate CENTER of the nav link
    const centerX = rect.left + rect.width / 2;

    setPopupPosition({
      top: rect.bottom + scrollTop + 10, // right below nav-link
      left: centerX, // center X position
    });
    setPopupOpen(true);
    const name = event.currentTarget.id;
    setSelectedLink(name as keyof typeof navBarDummyData | "");
  };

  const closePopup = () => {
    setPopupOpen(false);
    setPopupPosition(null);
  };
  const popupLinkClickHandler = (name: string) => {
    closePopup();
    setToggleDrawer(false);
    if (name) {
      console.log(name);
      switch (name) {
        case "Blog":
          navigate("/blogs", {
            state: { data: itemsPageDummyData["Blog"] },
          });
          break;
        // case "Case Studies":
        //   navigate("/case-studies", {
        //     state: { data: itemsPageDummyData["Case Studies"] },
        //   });
        //   break;
        // case "Whitepapers":
        //   navigate("/whitepapers", {
        //     state: { data: itemsPageDummyData["Whitepapers"] },
        //   });
        //   break;
        // case "Support Documentation":
        //   navigate("/support-documentation", {
        //     state: { data: itemsPageDummyData["Support Documentation"] },
        //   });
        //   break;
        case "Scheduling":
          navigate("/scheduling", {
            state: { data: SubPagesDummyData["Scheduling"] },
          });
          break;
        case "Time Management":
          navigate("/time-management", {
            state: { data: SubPagesDummyData["Time Management"] },
          });
          break;
        case "HR Management":
          navigate("/hr-management", {
            state: { data: SubPagesDummyData["HR Management"] },
          });
          break;
        case "Communication":
          navigate("/communication", {
            state: { data: SubPagesDummyData["Communication"] },
          });
          break;
        case "FAQs":
          navigate("/faq");
          break;
        case "Team":
          navigate("/team");
          break;
        case "Our Story":
          navigate("/our-story", {
            state: { data: aboutUsPageData["Our Story"] },
          });
          break;
        case "Our Mission":
          navigate("/our-mission", {
            state: { data: aboutUsPageData["Our mission"] },
          });
          break;
        case "Our Vision":
          navigate("/our-vision", {
            state: { data: aboutUsPageData["Our Vision"] },
          });
          break;
        case "Careers":
          navigate("/careers");
          break;
        case "Contact Information":
          navigate("/contact-information");
          break;
        case "Administrator":
          navigate("/administrator", {
            state: { data: byRoleData["Administrator"] },
          });
          break;
        case "Participant":
          navigate("/participant", {
            state: { data: byRoleData["Participant"] },
          });
          break;
        case "Roster Manager":
          navigate("/roster-manager", {
            state: { data: byRoleData["Roster Manager"] },
          });
          break;
        case "NDIS Staff":
          navigate("/ndis-staff", {
            state: { data: byRoleData["NDIS Staff"] },
          });
          break;
        case "HR Manager":
          navigate("/hr-manager", {
            state: { data: byRoleData["HR Manager"] },
          });
          break;
        case "Accountant":
          navigate("/accountant", {
            state: { data: byRoleData["Accountant"] },
          });
          break;
        case "NDIS Industry":
          navigate("/ndis-industry", {
            state: { data: byIndustryData["NDIS Industry"] },
          });
          break;
        case "ICT Industry":
          navigate("/ict-industry", {
            state: { data: byIndustryData["ICT Industry"] },
          });
          break;
        case "Roster Management":
          navigate("/roster-management", {
            state: { data: productsDetailsData["Roster Management"] },
          });
          break;

        case "Timesheet":
          navigate("/timesheet", {
            state: { data: productsDetailsData["Timesheet"] },
          });
          break;

        case "Admin Console":
          navigate("/admin-console", {
            state: { data: productsDetailsData["Admin Console"] },
          });
          break;

        case "Access Control Panel":
          navigate("/access-control-panel", {
            state: { data: productsDetailsData["Access Control Panel"] },
          });
          break;

        case "HR Operations":
          navigate("/hr-operations", {
            state: { data: productsDetailsData["HR Operations"] },
          });
          break;

        case "T-sign":
          navigate("/t-sign", {
            state: { data: productsDetailsData["T-sign"] },
          });
          break;

        case "Clock In & Clock Out":
          navigate("/clock-in-and-clock-out", {
            state: { data: productsDetailsData["Clock In & Clock Out"] },
          });
          break;

        case "Participant Management":
          navigate("/participant-management", {
            state: { data: productsDetailsData["Participant Management"] },
          });
          break;

        case "Incident Management":
          navigate("/incident-management", {
            state: { data: productsDetailsData["Incident Management"] },
          });
          break;

        case "Role based Dashboards":
          navigate("/role-based-dashboard", {
            state: { data: productsDetailsData["Role Based Dashboard"] },
          });
          break;

        case "ChaT - Secure Internal Messaging":
          navigate("/chat", {
            state: {
              data: productsDetailsData["ChaT - Secure Internal Messaging"],
            },
          });
          break;

        case "My Profile":
          navigate("/my-profile", {
            state: { data: productsDetailsData["My Profile"] },
          });
          break;

        case "Forms":
          navigate("/forms", {
            state: { data: productsDetailsData["Forms"] },
          });
          break;

        case "Accounting":
          navigate("/accounting", {
            state: { data: productsDetailsData["Accounting"] },
          });
          break;

        case "T Learning Hub":
          navigate("/t-learning-hub", {
            state: { data: productsDetailsData["T Learning Hub"] },
          });
          break;
        default:
          navigate("/coming-soon");
          break;
      }
    }
  };
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const [expanded, setExpanded] = useState(-1);

  const handleExpansion = (index: number) => {
    // console.log(index);
    setExpanded((prevExpanded) => {
      if (prevExpanded === index) {
        return -1; // Collapse the currently expanded item
      } else {
        return index; // Expand the clicked item
      }
    });
  };
  return (
    <nav id="navbar-container">
      <div id="navbar-logo" onClick={() => navigate("/")}>
        <img src={logo_small} alt="tesseract logo" />
        TesseractApps
      </div>
      <img
        src={menuIcon}
        alt="menu"
        id="nav-menu-icon"
        onClick={() => {
          setToggleDrawer(!toggleDrawer);
        }}
      />
      <Drawer
        id="nav-menu-drawer"
        anchor="right"
        open={toggleDrawer}
        // PaperProps={{
        //   sx: {
        //     height: "80vh", // <-- Set Drawer height to 80% of viewport height
        //   },
        // }}
        ModalProps={{
          BackdropProps: {
            sx: {
              backdropFilter: "blur(4px)", // 💡 adds blur effect
              backgroundColor: "rgba(0, 0, 0, 0.4)", // optional dark overlay
            },
          },
        }}
      >
        <div id="nav-menu-card">
          <div id="nav-menu-header">
            <div
              className="nav-menu-header-request"
              id="navbar-requestDemo"
              onClick={() => navigate("/requestDemo")}
            >
              Book a Demo{" "}
              <img
                src={plus}
                alt="navbar-plus-image"
                id="navbar-requestDemo-icon"
              />
            </div>
            <img
              src={closeIcon}
              alt="closeIcon"
              id="nav-drawer-close"
              onClick={() => {
                setToggleDrawer(false);
              }}
            />
          </div>
          <div id="nav-menu-links">
            {[
              "About",
              "Product",
              "Solutions",
              "Pricing",
              "Resources",
              "Additional Features",
            ].map((label, index) => {
              if (label != "Pricing") {
                return (
                  <Accordion
                    key={label}
                    className="faq-accordian"
                    elevation={0}
                    square
                    expanded={expanded === index}
                    onChange={() => handleExpansion(index)}
                    sx={{
                      backgroundColor: "transparent",
                      marginBottom: "5px",
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<img src={ArrowDown} alt="arrow" />}
                    >
                      <Typography
                        sx={{ fontSize: "20px", fontWeight: 600 }}
                        component="span"
                      >
                        {label}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography sx={{ fontSize: "18px", fontWeight: 400 }}>
                        {expanded == 0 &&
                          Array.isArray(navBarDummyData["About"]) &&
                          navBarDummyData["About"].map((value) => (
                            <div
                              key={value.title}
                              className="nav-inner-container"
                              onClick={() => popupLinkClickHandler(value.title)}
                            >
                              <div className="nav-title">{value.title}</div>
                              <div className="nav-sub-title">
                                {value.subTitle}
                              </div>
                            </div>
                          ))}
                        {expanded == 1 &&
                          Array.isArray(navBarDummyData["Product"]) && (
                            <>
                              <div
                                key="Product"
                                id="Product"
                                className="nav-inner-container"
                                onClick={handleNavClick}
                              >
                                <div className="nav-title">
                                  Products Overview
                                </div>
                                <div className="nav-sub-title">Learn More</div>
                              </div>
                              {navBarDummyData["Product"].map((value) => (
                                <div
                                  key={value.title}
                                  className="nav-inner-container"
                                  onClick={() =>
                                    popupLinkClickHandler(value.title)
                                  }
                                >
                                  <div className="nav-title">{value.title}</div>
                                  <div className="nav-sub-title">
                                    {value.subTitle}
                                  </div>
                                </div>
                              ))}
                            </>
                          )}
                        {expanded == 4 &&
                          Array.isArray(navBarDummyData["Resources"]) &&
                          navBarDummyData["Resources"].map((value) => (
                            <div
                              key={value.title}
                              className="nav-inner-container"
                              onClick={() => popupLinkClickHandler(value.title)}
                            >
                              <div className="nav-title">{value.title}</div>
                              <div className="nav-sub-title">
                                {value.subTitle}
                              </div>
                            </div>
                          ))}
                        {expanded == 5 &&
                          Array.isArray(
                            navBarDummyData["Additional Features"]
                          ) &&
                          navBarDummyData["Additional Features"].map(
                            (value) => (
                              <div
                                key={value.title}
                                className="nav-inner-container"
                                onClick={() =>
                                  popupLinkClickHandler(value.title)
                                }
                              >
                                <div className="nav-title">{value.title}</div>
                                <div className="nav-sub-title">
                                  {value.subTitle}
                                </div>
                              </div>
                            )
                          )}
                        {expanded == 2 && (
                          <div id="nav-menu-solutions">
                            <div>
                              <div className="services-heading">
                                BY INDUSTRY
                              </div>
                              {Array.isArray(
                                navBarDummyData["Solutions"]["BY INDUSTRY"]
                              ) &&
                                navBarDummyData["Solutions"]["BY INDUSTRY"].map(
                                  (value) => (
                                    <div
                                      key={value.title}
                                      className="nav-inner-container"
                                      onClick={() =>
                                        popupLinkClickHandler(value.title)
                                      }
                                    >
                                      <div className="nav-title">
                                        {value.title}
                                      </div>
                                      <div className="nav-sub-title">
                                        {value.subTitle}
                                      </div>
                                    </div>
                                  )
                                )}
                            </div>
                            <div>
                              <div className="services-heading">BY CARE</div>
                              {Array.isArray(
                                navBarDummyData["Solutions"]["BY CARE"]
                              ) &&
                                navBarDummyData["Solutions"]["BY CARE"].map(
                                  (value) => (
                                    <div
                                      key={value.title}
                                      className="nav-inner-container"
                                      onClick={() =>
                                        popupLinkClickHandler(value.title)
                                      }
                                    >
                                      <div className="nav-title">
                                        {value.title}
                                      </div>
                                      <div className="nav-sub-title">
                                        {value.subTitle}
                                      </div>
                                    </div>
                                  )
                                )}
                            </div>
                            <div>
                              <div className="services-heading">BY ROLE</div>
                              {Array.isArray(
                                navBarDummyData["Solutions"]["BY ROLE"]
                              ) &&
                                navBarDummyData["Solutions"]["BY ROLE"].map(
                                  (value) => (
                                    <div
                                      key={value.title}
                                      className="nav-inner-container"
                                      onClick={() =>
                                        popupLinkClickHandler(value.title)
                                      }
                                    >
                                      <div className="nav-title">
                                        {value.title}
                                      </div>
                                      <div className="nav-sub-title">
                                        {value.subTitle}
                                      </div>
                                    </div>
                                  )
                                )}
                            </div>
                            <div>
                              <div className="services-heading">
                                BY BUSINESS TYPE
                              </div>
                              {Array.isArray(
                                navBarDummyData["Solutions"]["BY BUSINESS TYPE"]
                              ) &&
                                navBarDummyData["Solutions"][
                                  "BY BUSINESS TYPE"
                                ].map((value) => (
                                  <div
                                    key={value.title}
                                    className="nav-inner-container"
                                    onClick={() =>
                                      popupLinkClickHandler(value.title)
                                    }
                                  >
                                    <div className="nav-title">
                                      {value.title}
                                    </div>
                                    <div className="nav-sub-title">
                                      {value.subTitle}
                                    </div>
                                  </div>
                                ))}
                            </div>
                            <div>
                              <div className="services-heading">
                                BY BUSINESS PROBLEM
                              </div>
                              {Array.isArray(
                                navBarDummyData["Solutions"][
                                  "BY BUSINESS PROBLEM"
                                ]
                              ) &&
                                navBarDummyData["Solutions"][
                                  "BY BUSINESS PROBLEM"
                                ].map((value) => (
                                  <div
                                    key={value.title}
                                    className="nav-inner-container"
                                    onClick={() =>
                                      popupLinkClickHandler(value.title)
                                    }
                                  >
                                    <div className="nav-title">
                                      {value.title}
                                    </div>
                                    <div className="nav-sub-title">
                                      {value.subTitle}
                                    </div>
                                  </div>
                                ))}
                            </div>
                          </div>
                        )}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                );
              } else {
                return (
                  <div
                    className="nav-menu-link"
                    key={label}
                    id={label}
                    onClick={handleNavClick}
                  >
                    {label}
                  </div>
                );
              }
            })}
          </div>
          <div id="nav-menu-icons">
            <img
              src={profile}
              alt="navbar-profile-icon"
              id="navbar-profile-icon"
            />
            <img
              src={australia}
              alt="navbar-country-icon"
              id="navbar-country-icon"
            />
          </div>
        </div>
      </Drawer>
      <div id="navbar-links">
        {[
          "About",
          "Product",
          "Solutions",
          "Pricing",
          "Resources",
          "Additional Features",
        ].map((label) => {
          const shouldHavePopup = [
            "About",
            "Product",
            "Solutions",
            "Resources",
            "Additional Features",
          ].includes(label);

          return (
            <div
              key={label}
              id={label}
              className={
                "nav-link" +
                (isPopupOpen && selectedLink == label ? " nav-link-active" : "")
              }
              onClick={handleNavClick}
              onMouseEnter={shouldHavePopup ? handleNavPopupClick : undefined}
              // onMouseLeave={shouldHavePopup ? closePopup : undefined}
            >
              {label}
            </div>
          );
        })}
      </div>

      <div id="nav-icons-container">
        <div id="navbar-search">
          {!showSearch ? (
            <img
              src={search}
              alt="navbar-search-icon"
              id="navbar-search-icon"
              onClick={handleSearchIcon}
            />
          ) : (
            <input type="text" placeholder="Search..." />
          )}
        </div>

        <div id="navbar-requestDemo" onClick={() => navigate("/requestDemo")}>
          Book a Demo{" "}
          <img
            src={plus}
            alt="navbar-plus-image"
            id="navbar-requestDemo-icon"
          />
        </div>

        <img src={profile} alt="navbar-profile-icon" id="navbar-profile-icon" />
        <img
          src={australia}
          alt="navbar-country-icon"
          id="navbar-country-icon"
        />
      </div>

      <Popup
        isOpen={isPopupOpen}
        onClose={closePopup}
        containerRef={portalContainerRef}
        position={popupPosition}
        onMouseLeave={closePopup}
      >
        <div id="popup-nav-container">
          {selectedLink &&
            selectedLink != "Solutions" &&
            selectedLink != "Product" &&
            Array.isArray(navBarDummyData[selectedLink]) &&
            navBarDummyData[selectedLink].map((value) => (
              <div
                key={value.title}
                className="nav-inner-container"
                onClick={() => popupLinkClickHandler(value.title)}
              >
                <div className="nav-title">{value.title}</div>
                <div className="nav-sub-title">{value.subTitle}</div>
              </div>
            ))}
          {selectedLink &&
            selectedLink == "Product" &&
            Array.isArray(navBarDummyData[selectedLink]) && (
              <div id="popup-nav-peoduct-container">
                {navBarDummyData[selectedLink].map((value) => (
                  <div
                    key={value.title}
                    className="nav-inner-container"
                    onClick={() => popupLinkClickHandler(value.title)}
                  >
                    <div className="nav-title">{value.title}</div>
                    <div className="nav-sub-title">{value.subTitle}</div>
                  </div>
                ))}
              </div>
            )}

          {selectedLink && selectedLink == "Solutions" && (
            <div id="popup-nav-services-container">
              <div>
                <div className="services-heading">BY INDUSTRY</div>
                {Array.isArray(navBarDummyData[selectedLink]["BY INDUSTRY"]) &&
                  navBarDummyData[selectedLink]["BY INDUSTRY"].map((value) => (
                    <div
                      key={value.title}
                      className="nav-inner-container"
                      onClick={() => popupLinkClickHandler(value.title)}
                    >
                      <div className="nav-title">{value.title}</div>
                      <div className="nav-sub-title">{value.subTitle}</div>
                    </div>
                  ))}
              </div>
              <div>
                <div className="services-heading">BY CARE</div>
                {Array.isArray(navBarDummyData[selectedLink]["BY CARE"]) &&
                  navBarDummyData[selectedLink]["BY CARE"].map((value) => (
                    <div
                      key={value.title}
                      className="nav-inner-container"
                      onClick={() => popupLinkClickHandler(value.title)}
                    >
                      <div className="nav-title">{value.title}</div>
                      <div className="nav-sub-title">{value.subTitle}</div>
                    </div>
                  ))}
              </div>
              <div>
                <div className="services-heading">BY ROLE</div>
                {Array.isArray(navBarDummyData[selectedLink]["BY ROLE"]) &&
                  navBarDummyData[selectedLink]["BY ROLE"].map((value) => (
                    <div
                      key={value.title}
                      className="nav-inner-container"
                      onClick={() => popupLinkClickHandler(value.title)}
                    >
                      <div className="nav-title">{value.title}</div>
                      <div className="nav-sub-title">{value.subTitle}</div>
                    </div>
                  ))}
              </div>
              <div>
                <div className="services-heading">BY BUSINESS TYPE</div>
                {Array.isArray(
                  navBarDummyData[selectedLink]["BY BUSINESS TYPE"]
                ) &&
                  navBarDummyData[selectedLink]["BY BUSINESS TYPE"].map(
                    (value) => (
                      <div
                        key={value.title}
                        className="nav-inner-container"
                        onClick={() => popupLinkClickHandler(value.title)}
                      >
                        <div className="nav-title">{value.title}</div>
                        <div className="nav-sub-title">{value.subTitle}</div>
                      </div>
                    )
                  )}
              </div>
              <div>
                <div className="services-heading">BY BUSINESS PROBLEM</div>
                {Array.isArray(
                  navBarDummyData[selectedLink]["BY BUSINESS PROBLEM"]
                ) &&
                  navBarDummyData[selectedLink]["BY BUSINESS PROBLEM"].map(
                    (value) => (
                      <div
                        key={value.title}
                        className="nav-inner-container"
                        onClick={() => popupLinkClickHandler(value.title)}
                      >
                        <div className="nav-title">{value.title}</div>
                        <div className="nav-sub-title">{value.subTitle}</div>
                      </div>
                    )
                  )}
              </div>
            </div>
          )}
        </div>
      </Popup>
    </nav>
  );
};

export default NavBarComponent;
