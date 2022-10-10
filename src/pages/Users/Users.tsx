import React from "react";
import all_user from "../../assets/icons/all_user.svg";
import active_users from "../../assets/icons/active_users.svg";
import users_with_loans from "../../assets/icons/users_with_loans.svg";
import users_with_savings from "../../assets/icons/users_with_savings.svg";
import SummaryCard from "../../components/SummaryCard/SummaryCard";
import "./styles.scss";
import Table from "../../components/Table/Table";

const Users: React.FC = () => {
  // const pseudoData = new Array(8).fill(0);
  const summaryData = [
    {
      icon: all_user,
      title: "users",
      count: "2,453",
    },
    {
      icon: active_users,
      title: "active users",
      count: "2,453",
    },
    {
      icon: users_with_loans,
      title: "users with loans",
      count: "12,453",
    },
    {
      icon: users_with_savings,
      title: "users with savings",
      count: "102,453",
    },
  ];

  return (
    <div className="page-user">
      <div className="title-section">
        <h3 className="title">Users</h3>
      </div>
      <div className="summary-details">
        {summaryData.map((value, idx) => {
          return (
            <SummaryCard
              key={idx}
              icon={value.icon}
              title={value.title}
              count={value.count}
            />
          );
        })}
      </div>
      <Table />
    </div>
  );
};

export default Users;
