import logo_small from "../../assets/tesseract_logo_small.png";
import search from "../../assets/search.svg";
import plus from "../../assets/plus.svg";
import profile from "../../assets/person.svg";
import australia from "../../assets/australia.png";
import "./NavBarStyles.css";
import { useState } from "react";
const NavBarComponent = () => {
  const [showSearch, setShowSearch] = useState(false);
  const handleSearchIcon = () => {
    setShowSearch(!showSearch);
  };
  return (
    <div id="navbar-container">
      <div id="navbar-logo">
        <img src={logo_small} alt="tesseract logo" />
        Tesseract Apps
      </div>
      <div id="navbar-links">
        <div className="nav-link">About</div>
        <div className="nav-link">Product</div>
        <div className="nav-link">Services</div>
        <div className="nav-link">Case Studies</div>
        <div className="nav-link">Pricing</div>
        <div className="nav-link">Resources</div>
        <div className="nav-link">Contact Us</div>
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
        <div id="navbar-requestDemo">
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
    </div>
  );
};

export default NavBarComponent;
