import React from "react";
import { DashboardFrameProps } from "./types";
import "./styles.scss";
import NavBar from "../NavBar/NavBar";
import SideBar from "../SideBar/SideBar";

const DashboardFrame: React.FC<DashboardFrameProps> = ({ children }) => {
  return (
    <div className="dashboard-frame">
      <NavBar />
      <div className="body">
        <SideBar />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default DashboardFrame;
