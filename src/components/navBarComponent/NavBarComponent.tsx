import logo_small from "../../assets/tesseract_logo_small.png";
import search from "../../assets/search.svg";
import plus from "../../assets/plus.svg";
import profile from "../../assets/person.svg";
import australia from "../../assets/australia.png";
import Popup from "../popupComponent/PopupComponent";
import "./NavBarStyles.css";
import { useEffect, useRef, useState } from "react";
import { RefObject } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { navBarDummyData } from "../../utils/DummyData";
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
import { appNavigate } from "../../routes/AppRoutes";
import ArrowLeft from "../arrows/ArrowLeft";
import ArrowUp from "../arrows/ArrowUp";
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
  const [activeLink, setActiveLink] = useState<
    | "About"
    | "Product"
    | "Solutions"
    | "Pricing"
    | "Resources"
    | "Additional Features"
    | ""
  >("");
  useEffect(() => {
    const currentPath = pathname.split("/")[1];
    // console.log("Current Path:", currentPath);
    if (currentPath == "" || currentPath == "coming-soon") {
      setActiveLink("");
    }
    if (
      currentPath == "our-story" ||
      currentPath == "our-mission" ||
      currentPath == "our-vision" ||
      currentPath == "team" ||
      currentPath == "careers" ||
      currentPath == "contact-information"
    ) {
      setActiveLink("About");
    }
    if (
      currentPath == "product" ||
      currentPath == "roster-management" ||
      currentPath == "clock-in-and-clock-out" ||
      currentPath == "forms" ||
      currentPath == "timesheet" ||
      currentPath == "participant-management" ||
      currentPath == "accounting" ||
      currentPath == "admin-console" ||
      currentPath == "incident-management" ||
      currentPath == "t-learning-hub" ||
      currentPath == "access-control-panel" ||
      currentPath == "incident-management" ||
      currentPath == "chat" ||
      currentPath == "hr-operations" ||
      currentPath == "role-based-dashboard" ||
      currentPath == "t-sign" ||
      currentPath == "my-profile"
    ) {
      setActiveLink("Product");
    }
    if (
      currentPath == "ndis-industry" ||
      currentPath == "ict-industry" ||
      currentPath == "administrator" ||
      currentPath == "roster-manager" ||
      currentPath == "ndis-staff" ||
      currentPath == "hr-manager" ||
      currentPath == "accountant" ||
      currentPath == "participant"
    ) {
      setActiveLink("Solutions");
    }
    if (currentPath == "pricing") {
      setActiveLink("Pricing");
    }
    if (currentPath == "blogs" || currentPath == "faq") {
      setActiveLink("Resources");
    }
    if (currentPath == "requestDemo") {
      setActiveLink("Additional Features");
    }
  }, [pathname]);
  const [selectedLink, setSelectedLink] = useState<
    keyof typeof navBarDummyData | ""
  >("");
  const [popupPosition, setPopupPosition] = useState<PopupPosition | null>(
    null
  );

  const handleSearchIcon = () => {
    setShowSearch(false);
  };
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (inputRef.current)
        inputRef.current.setAttribute("style", "width: 200px;");
    }, 0); // slight delay ensures transition triggers

    return () => clearTimeout(timeout);
  }, [showSearch]);

  // useEffect(() => {}, [showSearch]);
  const handleNavClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const name = event.currentTarget.id;
    setToggleDrawer(false);
    if (name) {
      appNavigate(name, navigate, false);
    }
  };
  const handleNavPopupClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    // const scrollTop = window.scrollY || document.documentElement.scrollTop;
    // const scrollLeft = window.scrollX || document.documentElement.scrollLeft;

    // 🎯 Calculate CENTER of the nav link
    const centerX = rect.left + rect.width / 2;

    setPopupPosition({
      top: 80, // right below nav-link
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
      appNavigate(name, navigate);
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
  const loginHandler = () => {
    window.open("https://tesseractapps.my.site.com/s/login/", "_blank");
  };
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 1000);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav id="navbar-container">
      {pathname.split("/")[1] && (
        // <img
        //   id="nav-back"
        //   src={BackArrow}
        //   alt="nav-back"
        //   onClick={() => navigate(-1)}
        // />

        <div
          className="arrow-container"
          id="nav-back"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft />
        </div>
      )}
      {showScroll && (
        <div
          className="arrow-container"
          id="scroll-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ArrowUp />
        </div>
      )}
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
              onClick={() => popupLinkClickHandler("Book a Demo")}
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
                              {navBarDummyData["Product"][0].map((value) => (
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
                              {navBarDummyData["Product"][1].map((value) => (
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
                              {navBarDummyData["Product"][2].map((value) => (
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
            <button id="navbar-login">
              <img
                src={profile}
                alt="navbar-profile-icon"
                id="navbar-profile-icon"
                onClick={loginHandler}
              />{" "}
              Login
            </button>
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
                (activeLink == label || (isPopupOpen && selectedLink == label)
                  ? " nav-link-active"
                  : "")
              }
              onClick={handleNavClick}
              onMouseEnter={(event) => {
                if (label == "Pricing") closePopup();
                if (shouldHavePopup) handleNavPopupClick(event);
              }}
              onMouseLeave={() => {
                if (label == "Pricing") closePopup();
              }}
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
            <div id="navbar-search-container">
              <input
                ref={inputRef}
                type="search"
                placeholder="Search..."
                id="navbar-search-input"
              />
              <img
                src={search}
                alt="navbar-search-button"
                id="navbar-search-button"
                onClick={handleSearchIcon}
              />
            </div>
          )}
        </div>

        <button
          id="navbar-requestDemo"
          onClick={() => navigate("/requestDemo")}
        >
          Book a Demo{" "}
          <img
            src={plus}
            alt="navbar-plus-image"
            id="navbar-requestDemo-icon"
          />
        </button>

        <button id="navbar-login">
          <img
            src={profile}
            alt="navbar-profile-icon"
            id="navbar-profile-icon"
            onClick={loginHandler}
          />{" "}
          Login
        </button>
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
          {selectedLink && selectedLink == "Product" && (
            <div id="popup-nav-products-container">
              {Array.isArray(navBarDummyData[selectedLink][0]) &&
                navBarDummyData[selectedLink][0].map((value) => (
                  <div
                    key={value.title}
                    className="nav-inner-container"
                    onClick={() => popupLinkClickHandler(value.title)}
                  >
                    <div className="nav-title">{value.title}</div>
                    <div className="nav-sub-title">{value.subTitle}</div>
                  </div>
                ))}
              {Array.isArray(navBarDummyData[selectedLink][1]) &&
                navBarDummyData[selectedLink][1].map((value) => (
                  <div
                    key={value.title}
                    className="nav-inner-container"
                    onClick={() => popupLinkClickHandler(value.title)}
                  >
                    <div className="nav-title">{value.title}</div>
                    <div className="nav-sub-title">{value.subTitle}</div>
                  </div>
                ))}
              {Array.isArray(navBarDummyData[selectedLink][2]) &&
                navBarDummyData[selectedLink][2].map((value) => (
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
