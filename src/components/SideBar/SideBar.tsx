import React, { useCallback, useState } from "react";
import logout from "../../assets/icons/logout.svg";
import switch_org from "../../assets/icons/switch_organization.svg";
import down_arrow_alt from "../../assets/icons/down_arrow_alt.svg";
import "./styles.scss";
import { sidebarData } from "./data";
import { useNavigate } from "react-router-dom";

const SideBar: React.FC = () => {
  const navigate = useNavigate();
  const path = window.location.pathname;
  const splitPath = path.split("/");

  const handleLogout = () => {
    sessionStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  const displaySidebarData = useCallback(() => {
    return sidebarData.map((item, idx) => {
      return (
        <div className="sidebar-item-collection" key={idx}>
          {item?.children && (
            <p className="sidebar-item-heading">{item.title}</p>
          )}
          {item?.children ? (
            item?.children.map((child, index) => {
              return (
                <a
                  key={index}
                  className={`sidebar-item ${
                    splitPath
                      .slice(splitPath.length - 2)
                      .includes(child.title.toLowerCase()) && "active"
                  }`}
                  href={child?.link}
                >
                  <img src={child.icon} alt="users" />
                  <p className="sidebar-item-text">{child.title}</p>
                </a>
              );
            })
          ) : (
            <a
              className={`sidebar-item ${
                splitPath
                  .slice(splitPath.length - 2)
                  .includes(item.title.toLowerCase()) && "active"
              }`}
              href={item?.link}
            >
              <img src={item.icon} alt="users" />
              <p className="sidebar-item-text">{item.title}</p>
            </a>
          )}
        </div>
      );
    });
  }, []);

  return (
    <div className="container">
      <div className="sidebar">
        <div className="org-switch">
          <img src={switch_org} alt="switch organization icon " />
          <p className="org-switch-text">Switch Organization</p>
          <img src={down_arrow_alt} alt="" />
        </div>
        {displaySidebarData()}
      </div>
      <div className="sidebar-footer">
        <div className="sidebar-item" onClick={handleLogout}>
          <img src={logout} alt="users" />
          <p className="sidebar-item-text">Logout</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
