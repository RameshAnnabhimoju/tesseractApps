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
import { navBarDummyData, SubPagesDummyData } from "../../utils/DummyData";
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

    if (name) {
      switch (name) {
        case "Pricing":
          navigate("/pricing");
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
    if (name) {
      console.log(name);
      switch (name) {
        case "Blog":
          navigate("/blogs");
          break;
        case "Product":
          navigate("/product", {
            state: { data: SubPagesDummyData["Product"] },
          });
          break;
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
        default:
          navigate("/details");
          break;
      }
    }
  };
  return (
    <nav id="navbar-container">
      <div id="navbar-logo" onClick={() => navigate("/")}>
        <img src={logo_small} alt="tesseract logo" />
        TesseractApps
      </div>

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
              className="nav-link"
              onClick={shouldHavePopup ? undefined : handleNavClick}
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
        onMouseLeave={closePopup}
      >
        <div id="popup-nav-container">
          {selectedLink &&
            selectedLink != "Solutions" &&
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
