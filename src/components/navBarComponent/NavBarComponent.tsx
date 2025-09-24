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
import signupImage from "../../assets/signup.png";

const NavBarComponent = ({
  portalContainerRef,
  handleDialog,
  handleBookADemo,
}: {
  portalContainerRef: RefObject<HTMLDivElement | null>;
  handleDialog: (value?: boolean) => void;
  handleBookADemo: (value?: boolean) => void;
}) => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  const navigate = useNavigate();
  const [showSearch, setShowSearch] = useState(false);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<
    "About" | "Product" | "Solutions" | "Pricing" | "Resources" | ""
  >("");
  const DROPDOWN_LINKS = ["Product", "Solutions", "Resources"];
  const NAV_LINKS = ["Product", "Pricing", "Solutions", "Resources"];
  // const [showHeader, setShowHeader] = useState(true);
  // const [lastScrollY, setLastScrollY] = useState(0);

  // useEffect(() => {
  // const handleScroll = () => {
  //   const currentScrollY = window.scrollY;

  //   if (currentScrollY < lastScrollY) {
  //     // scrolling up
  //     setShowHeader(true);
  //   } else {
  //     // scrolling down
  //     setShowHeader(false);
  //   }

  //   setLastScrollY(currentScrollY);
  // };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [lastScrollY]);
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
      setActiveLink("");
    }
  }, [pathname]);
  const [selectedLink, setSelectedLink] = useState<
    keyof typeof navBarDummyData | "" | "navbar-profile-icon"
  >("");
  const [popupPosition, setPopupPosition] = useState<PopupPosition | null>(
    null
  );

  const handleSearchIcon = (value?: boolean) => {
    typeof value === "boolean"
      ? setShowSearch(value)
      : setShowSearch(!showSearch);
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
    let centerX = rect.left + rect.width / 2;

    setPopupPosition({
      top: 120, // right below nav-link
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
    handleSearchIcon(false);
    setSearchTerm("");
    handleSearch(name);
    setToggleDrawer(false);
    if (name && name == "Free Trial Sign-Up") {
      handleDialog(true);
      return;
    }
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
    // appNavigate("Signup", navigate);
    closePopup();
  };
  const signupHandler = () => {
    handleDialog();
    closePopup();
  };
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 1000);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const popularSearchClickHandler = (value: string) => {
    setSearchTerm(value);
  };
  const handleSearch = (name: string) => {
    if (name) {
      addSearch(name);
    }
  };
  const addSearch = (term: string) => {
    setSearchHistory((prev) => {
      const updated = [...prev, term];
      if (updated.length > 5) {
        updated.shift(); // remove oldest
      }
      return updated;
    });
  };
  return (
    <nav
      // className={`navbar-container ${showHeader ? "visible" : "hidden"}`}
      id="navbar-container"
    >
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
              className={
                "navbar-requestDemo" +
                (toggleDrawer ? " drawer-request-demo" : "")
              }
              onClick={() => handleBookADemo(true)}
            >
              <div className="navbar-requestDemo-text">Book a Demo</div>
              <div className="navbar-requestDemo-icon-container">
                <img
                  src={plus}
                  alt="navbar-plus-image"
                  className="navbar-requestDemo-icon"
                />
              </div>
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
            {NAV_LINKS.map((label, index) => {
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
                                <>
                                  <div>{value.heading}</div>
                                  {value.links.map((link) => (
                                    <div
                                      key={link.title}
                                      className="nav-inner-container"
                                      onClick={() =>
                                        popupLinkClickHandler(link.title)
                                      }
                                    >
                                      <div className="nav-title">
                                        {link.title}
                                      </div>
                                      <div className="nav-sub-title">
                                        {link.subTitle}
                                      </div>
                                    </div>
                                  ))}
                                </>
                              ))}
                              {/* {navBarDummyData["Product"][1].map((value) => (
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
                                {navBarDummyData["Product"][2].map((value) => (
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
                                ))} */}
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
                        {/* {expanded == 5 &&
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
                          )} */}
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
            {/* <Accordion
              key={"Country"}
              className="faq-accordian"
              elevation={0}
              square
              expanded={expanded === 5}
              onChange={() => handleExpansion(5)}
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
                  Country
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ fontSize: "18px", fontWeight: 400 }}>
                  <div className="nav-inner-container">Australia</div>
                  <div className="nav-inner-container">United Kingdom</div>
                  <div className="nav-inner-container">India</div>
                </Typography>
              </AccordionDetails>
            </Accordion> */}
          </div>
          <div id="nav-menu-icons">
            <button id="navbar-login" onClick={signupHandler}>
              <img
                src={signupImage}
                alt="navbar-profile-icon"
                id="navbar-profile-icon"
              />{" "}
              Sign Up
            </button>
            <button id="navbar-login" onClick={loginHandler}>
              <img
                src={profile}
                alt="navbar-profile-icon"
                id="navbar-profile-icon"
              />{" "}
              Sign In
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
        <div id="navbar-links-logins">
          <div className="nav-link-logins" onClick={loginHandler}>
            Sign in
          </div>
          <div className="nav-link-logins" onClick={signupHandler}>
            Sign up
          </div>
        </div>
        <div id="navbar-links-links">
          {NAV_LINKS.map((label) => {
            const shouldHavePopup = DROPDOWN_LINKS.includes(label);

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
          <div id="navbar-search">
            <img
              src={search}
              alt="navbar-search-icon"
              id="navbar-search-icon"
              onClick={() => handleSearchIcon(true)}
            />
          </div>

          <div
            className="navbar-tryItFree"
            onClick={() => appNavigate("Signup", navigate, false)}
          >
            <div className="navbar-requestDemo-text">Try It Free</div>
          </div>

          <div
            className="navbar-requestDemo"
            onClick={() => handleBookADemo(true)}
          >
            <div className="navbar-requestDemo-text">Book a Demo</div>
            <div className="navbar-requestDemo-icon-container">
              <img
                src={plus}
                alt="navbar-plus-image"
                className="navbar-requestDemo-icon"
              />
            </div>
          </div>

          {/* <button id="navbar-login" onClick={signupHandler}>
          <img
            src={signupImage}
            alt="navbar-profile-icon"
            id="navbar-profile-icon"
          />{" "}
          Sign Up
        </button> */}
          {/* <button id="navbar-login" onClick={loginHandler}>
          <img
            src={profile}
            alt="navbar-profile-icon"
            id="navbar-profile-icon"
          />{" "}
          Sign In
        </button> */}
          {/* <img
          src={profile}
          alt="navbar-profile-icon"
          id="navbar-profile-icon"
          onMouseEnter={(event) => handleNavPopupClick(event)}
        /> */}
          {/* <img
          src={australia}
          alt="navbar-country-icon"
          id="navbar-country-icon"
        /> */}
        </div>
      </div>

      <div id="nav-icons-container"></div>

      <Popup
        isOpen={isPopupOpen}
        onClose={closePopup}
        containerRef={portalContainerRef}
        position={popupPosition}
        onMouseLeave={closePopup}
        backgroundColor="white"
        currentLink={selectedLink}
      >
        <div id="popup-nav-container">
          {selectedLink &&
            selectedLink != "Solutions" &&
            selectedLink != "Product" &&
            Object.prototype.hasOwnProperty.call(
              navBarDummyData,
              selectedLink
            ) &&
            Array.isArray(
              navBarDummyData[selectedLink as keyof typeof navBarDummyData]
            ) &&
            (
              navBarDummyData[selectedLink as keyof typeof navBarDummyData] as {
                title: string;
                subTitle: string;
              }[]
            ).map((value) => (
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
              {navBarDummyData["Product"].map((value) => (
                <>
                  <div className="nav-inner-heading">{value.heading}</div>
                  {value.links.map((link) => (
                    <div
                      key={link.title}
                      className="nav-inner-container"
                      onClick={() => popupLinkClickHandler(link.title)}
                    >
                      <div className="nav-title">{link.title}</div>
                      <div className="nav-sub-title">{link.subTitle}</div>
                    </div>
                  ))}
                </>
              ))}
              {/* {Array.isArray(navBarDummyData[selectedLink][1]) &&
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
                ))} */}
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
          {selectedLink == "navbar-profile-icon" && (
            <div>
              <div className="nav-inner-container" onClick={signupHandler}>
                <div className="nav-title">Sign Up</div>
              </div>
              <div className="nav-inner-container" onClick={loginHandler}>
                <div className="nav-title">Sign In</div>
              </div>
            </div>
          )}
        </div>
      </Popup>
      <Popup
        isOpen={showSearch}
        onClose={handleSearchIcon}
        containerRef={portalContainerRef}
        position={{ top: 120, left: window.innerWidth / 2 }}
        showTriangle={false}
        backgroundColor="white"
      >
        <div id="search-popup-container">
          <header id="search-popup-header">
            <div id="search-popup-header-text">Search at Tesseract</div>
            <div
              id="search-popup-close"
              onClick={() => handleSearchIcon(false)}
            >
              &times;
            </div>
          </header>
          <input
            id="search-popup-input"
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm.length == 0 ? (
            <div>
              <div id="search-popup-popular">
                <div className="search-popup-title">Popular Searches</div>
                <div id="search-popup-popular-list">
                  <div
                    className="search-popup-popular-item"
                    onClick={() => popularSearchClickHandler("Accounting")}
                  >
                    Accounting
                  </div>
                  <div
                    className="search-popup-popular-item"
                    onClick={() =>
                      popularSearchClickHandler("Roster Management")
                    }
                  >
                    Roster Management
                  </div>
                  <div
                    className="search-popup-popular-item"
                    onClick={() => popularSearchClickHandler("HR")}
                  >
                    HR
                  </div>
                </div>
              </div>
              <div id="search-popup-recent">
                <div className="search-popup-title">Recent</div>
                <div id="search-popup-recent-list">
                  {searchHistory.map((item, index) => (
                    <div
                      key={index}
                      className="search-popup-recent-item"
                      onClick={() => popularSearchClickHandler(item)}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div id="search-popup-results-container">
              {searchTerm.length > 0 &&
                searchKeywords
                  .filter((keyword) =>
                    keyword.toLowerCase().includes(searchTerm.toLowerCase())
                  )
                  .sort((a, b) => {
                    const aIndex = a
                      .toLowerCase()
                      .indexOf(searchTerm.toLowerCase());
                    const bIndex = b
                      .toLowerCase()
                      .indexOf(searchTerm.toLowerCase());

                    if (aIndex === bIndex) {
                      return a.localeCompare(b);
                    }
                    return aIndex - bIndex;
                  })
                  .map((keyword) => {
                    const regex = new RegExp(`(${searchTerm})`, "ig");
                    const parts = keyword.split(regex);

                    return (
                      <div
                        className="search-popup-result"
                        key={keyword}
                        onClick={() => popupLinkClickHandler(keyword)}
                      >
                        {parts.map((part, index) =>
                          regex.test(part) ? (
                            <b key={index}>{part}</b> // preserves original case
                          ) : (
                            <span key={index}>{part}</span>
                          )
                        )}
                      </div>
                    );
                  })}
            </div>
          )}
        </div>
      </Popup>
    </nav>
  );
};
const searchKeywords = [
  "Our Story",
  "Product",
  "Roster Management",
  "Timesheet",
  "Admin Console",
  "Access Control Panel",
  "HR Operations",
  "T-Sign",
  "Clock In & Clock Out",
  "Participant Management",
  "Incident Management",
  "Repository",
  "Role based Dashboard",
  "My Profile",
  "Forms",
  "Accounting",
  "T Learning Hub",
  "ChaT",
  "Administrator",
  "Roster Manager",
  "NDIS Staff",
  "Accountant",
  "Participant",
  "NDIS Industry",
  "ICT Industry",
];
export default NavBarComponent;
