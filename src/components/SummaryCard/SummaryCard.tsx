import React from "react";
import { SummaryCardProps } from "./types";
import "./styles.scss";

const SummaryCard: React.FC<SummaryCardProps> = ({ icon, title, count }) => {
  return (
    <div className="summary-card">
      <div className="all-user">
        <img src={icon} alt="all user icon" />
      </div>
      <p className="title">{title}</p>
      <p className="count">{count}</p>
    </div>
  );
};

export default SummaryCard;
