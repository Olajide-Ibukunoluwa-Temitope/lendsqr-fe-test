import React, { useState } from "react";
import { DashboardFrameProps } from "./types";
import "./styles.scss";
import NavBar from "../NavBar/NavBar";
import SideBar from "../SideBar/SideBar";

const DashboardFrame: React.FC<DashboardFrameProps> = ({ children }) => {
  const [toggleSidebar, setToggleSidebar] = useState<boolean>(false);

  const handleToggleSidebar = () => {
    setToggleSidebar(!toggleSidebar);
  };

  return (
    <div className="dashboard-frame">
      <NavBar onClick={handleToggleSidebar} />
      <div className="body">
        <SideBar />
        {toggleSidebar && (
          <div className="mob-sidebar">
            <SideBar />
          </div>
        )}

        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default DashboardFrame;
