import React, { useEffect, useState } from "react";
import ButtonAlt from "../../components/Buttons/ButtonAlt/ButtonAlt";
import DashboardFrame from "../../components/DashboardFrame/DashboardFrame";
import back_arrow from "../../assets/icons/back_arrow.svg";
import filled_star from "../../assets/icons/filled_star.svg";
import empty_star from "../../assets/icons/empty_star.svg";
import { useLocation, useNavigate } from "react-router-dom";
import "./styles.scss";
import { tabsData } from "./data";

const UserDetails: React.FC = () => {
  const [userDetails, setUserDetails] = useState<{ [key: string]: any } | null>(
    null
  );
  const [activeTab, setActiveTab] = useState<number>(0);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem("isLoggedIn");
    if (!isLoggedIn) return navigate("/");
    if (!userDetails) {
      const stringifiedUsers = localStorage.getItem("userData");
      const parsedUsers = stringifiedUsers ? JSON.parse(stringifiedUsers) : [];
      const id = location.pathname.split("/").slice(-1)[0];
      const userInfo = parsedUsers.find(
        (item: { [key: string]: any }) => item?.id === id
      );
      setUserDetails(userInfo);
    }
  }, [location.pathname, navigate, userDetails]);

  console.log("userDetails", userDetails);
  return (
    <DashboardFrame>
      <div className="user-details">
        <div
          className="back"
          onClick={() => navigate("/dashboard/customers/users")}
        >
          <img src={back_arrow} alt="back arrow" />
          <p>Back to Users</p>
        </div>
        <div className="page-heading">
          <div>
            <h3>User Details</h3>
          </div>
          <div className="heading-buttons">
            <ButtonAlt
              btnText="BLACKLIST USER"
              color="#39CDCC"
              onClick={() => console.log("#")}
            />

            <ButtonAlt
              btnText="ACTIVATE USER"
              color="#E4033B"
              onClick={() => console.log("#")}
            />
          </div>
        </div>
        <div className="user-details-summary-container">
          <div className="user-details-summary">
            <div className="avatar-container">
              <img
                src={userDetails?.profile?.avatar}
                alt="avatar"
                className="avatar"
              />
              <div className="user-name">
                <p className="name">Grace Effiom</p>
                <p className="sub-name-text">LSQFf587g90</p>
              </div>
            </div>
            <div className="user-tier">
              <div className="user-tier-text">User’s Tier</div>
              <div className="tier-container">
                <div className="tier">
                  <img src={filled_star} alt="rating" />
                  <img src={empty_star} alt="rating" />
                  <img src={empty_star} alt="rating" />
                </div>
              </div>
            </div>
            <div className="bank-summary-container">
              <div className="bank-summary">
                <div className="loan">₦200,000.00</div>
                <div className="bank">9912345678/Providus Bank</div>
              </div>
            </div>
          </div>
          <div className="tab">
            {tabsData.map((item, idx) => {
              return (
                <div
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`tab-item-container ${
                    activeTab === idx && "active"
                  }`}
                >
                  <p className="tab-item">{item}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </DashboardFrame>
  );
};

export default UserDetails;
