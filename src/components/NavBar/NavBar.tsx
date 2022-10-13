import React from "react";
import logo from "../../assets/logo/lendsqr_logo.svg";
import search from "../../assets/icons/search.svg";
import notification from "../../assets/icons/notification.png";
import profile_img from "../../assets/images/profile_img.png";
import down_arrow from "../../assets/icons/down_arrow.svg";
import hamburger from "../../assets/icons/hamburger.png";
import "./styles.scss";
import { NavBarProps } from "./types";

const NavBar: React.FC<NavBarProps> = ({ onClick }) => {
  return (
    <div className="nav">
      <div className="logo-container">
        <img src={logo} alt="lendsqr logo" className="logo" />
      </div>
      <div className="nav-items">
        <div className="search-input-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search for anything"
          />
          <div className="search-btn">
            <img src={search} alt="search icon" />
          </div>
        </div>
        <div className="nav-options">
          <a href={`${window.location.pathname}`} className="docs">
            Docs
          </a>
          <img src={notification} alt="notification" className="notification" />
          <div className="profile">
            <img src={profile_img} alt="profile" className="profile-image" />
            <p>Adedeji</p>
            <img src={down_arrow} alt="down arrow" />
          </div>
        </div>
      </div>
      <div className="menu-icon">
        <img src={hamburger} alt="menu icon" width={27} onClick={onClick} />
      </div>
    </div>
  );
};

export default NavBar;
