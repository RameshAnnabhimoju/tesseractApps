import logo_small from "../../assets/tesseract_logo_small.png";
import search from "../../assets/search.svg";
import plus from "../../assets/plus.svg";
import profile from "../../assets/person.svg";
import australia from "../../assets/australia.png";
import Popup from "../popupComponent/PopupComponent";
import "./NavBarStyles.css";
import { useState } from "react";
import { RefObject } from "react";
import { useNavigate } from "react-router-dom";
import { navBarDummyData } from "../../utils/DummyData";
interface PopupPosition {
  top: number;
  left: number;
}

const NavBarComponent = ({
  portalContainerRef,
}: {
  portalContainerRef: RefObject<HTMLDivElement | null>;
}) => {
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
    setShowSearch(!showSearch);
  };
  const handleNavClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const name = event.currentTarget.id;
    // console.log("name :", name);
    if (name && name == "Case Studies") {
      navigate("/blogs");
    }
    if (name && name == "Pricing") {
      navigate("/pricing");
    }
  };
  const handleNavLinkClick = (event: React.MouseEvent<HTMLDivElement>) => {
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
  const popupLinkClickHandler = () => {
    closePopup();
    navigate("/details");
  };
  return (
    <nav id="navbar-container">
      <div id="navbar-logo" onClick={() => navigate("/")}>
        <img src={logo_small} alt="tesseract logo" />
        Tesseract Apps
      </div>

      <div id="navbar-links">
        {[
          "About",
          "Platform",
          "Solutions",
          "Pricing",
          "Resources",
          "Get Started",
        ].map((label) => {
          const shouldHavePopup = [
            "About",
            "Platform",
            "Solutions",
            "Resources",
            "Get Started",
          ].includes(label);

          return (
            <div
              key={label}
              id={label}
              className="nav-link"
              onClick={shouldHavePopup ? handleNavLinkClick : handleNavClick}
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
          Request a Demo{" "}
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
      >
        <div id="popup-nav-container">
          {selectedLink &&
            selectedLink != "Solutions" &&
            Array.isArray(navBarDummyData[selectedLink]) &&
            navBarDummyData[selectedLink].map((value) => (
              <div
                key={value.title}
                className="nav-inner-container"
                onClick={popupLinkClickHandler}
              >
                <div className="nav-title">{value.title}</div>
                <div className="nav-sub-title">{value.subTitle}</div>
              </div>
            ))}
          {selectedLink && selectedLink == "Solutions" && (
            <div id="popup-nav-services-container">
              <div>
                <div className="services-heading">BY INDUSTRY</div>
                {Array.isArray(navBarDummyData[selectedLink]["BY INDUSTRY"]) &&
                  navBarDummyData[selectedLink]["BY INDUSTRY"].map((value) => (
                    <div
                      key={value.title}
                      className="nav-inner-container"
                      onClick={popupLinkClickHandler}
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
                      onClick={popupLinkClickHandler}
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
                        onClick={popupLinkClickHandler}
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
                        onClick={popupLinkClickHandler}
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
