import React, { useEffect, useState } from "react";
import all_user from "../../assets/icons/all_user.svg";
import active_users from "../../assets/icons/active_users.svg";
import users_with_loans from "../../assets/icons/users_with_loans.svg";
import users_with_savings from "../../assets/icons/users_with_savings.svg";
import SummaryCard from "../../components/SummaryCard/SummaryCard";
import "./styles.scss";
import Table from "../../components/Table/Table";
import DashboardFrame from "../../components/DashboardFrame/DashboardFrame";
import { useNavigate } from "react-router-dom";

const Users: React.FC = () => {
  const [userData, setUserData] = useState<{ [key: string]: any }[]>([]);
  const navigate = useNavigate();
  const summaryData = [
    {
      icon: all_user,
      title: "users",
      count: String(userData.length),
    },
    {
      icon: active_users,
      title: "active users",
      count: String(userData.length),
    },
    {
      icon: users_with_loans,
      title: "users with loans",
      count: String(userData.length),
    },
    {
      icon: users_with_savings,
      title: "users with savings",
      count: String(userData.length),
    },
  ];

  const fetchData = async () => {
    try {
      const rawData = await fetch(
        "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users"
      );
      const data = await rawData.json();
      localStorage.setItem("userData", JSON.stringify(data));
      setUserData(data);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem("isLoggedIn");
    if (!isLoggedIn) return navigate("/");
    fetchData();
  }, [navigate]);

  return (
    <DashboardFrame>
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
        <Table userData={userData} />
      </div>
    </DashboardFrame>
  );
};

export default Users;
