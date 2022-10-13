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

  const userDetailsData = [
    {
      title: "Personal Information",
      cols: 5,
      content: [
        {
          title: "full Name",
          value:
            userDetails?.profile.firstName +
            " " +
            userDetails?.profile.lastName,
        },
        {
          title: "Phone Number",
          value: userDetails?.profile.phoneNumber,
        },
        {
          title: "Email Address",
          value: userDetails?.email,
        },
        {
          title: "Bvn",
          value: userDetails?.profile.bvn,
        },
        {
          title: "Gender",
          value: userDetails?.profile.gender,
        },
        {
          title: "Marital status",
          value: "Single",
        },
        {
          title: "Children",
          value: "None",
        },
        {
          title: "Type of residence",
          value: "Parent’s Apartment",
        },
      ],
    },
    {
      title: "Education and Employment",
      cols: 4,
      content: [
        {
          title: "level of education",
          value: userDetails?.education.level,
        },
        {
          title: "employment status",
          value: userDetails?.education.employmentStatus,
        },
        {
          title: "sector of employment",
          value: userDetails?.education.sector,
        },
        {
          title: "Duration of employment",
          value: userDetails?.education.duration,
        },
        {
          title: "office email",
          value: userDetails?.education.officeEmail,
        },
        {
          title: "Monthly income",
          value: `₦${
            userDetails ? Math.min(...userDetails?.education.monthlyIncome) : ""
          } - ₦${
            userDetails ? Math.max(...userDetails?.education.monthlyIncome) : ""
          }`,
        },
        {
          title: "loan repayment",
          value: `₦${userDetails?.education.loanRepayment}`,
        },
      ],
    },
    {
      title: "Socials",
      cols: 5,
      content: [
        {
          title: "Twitter",
          value: userDetails?.socials.twitter,
        },
        {
          title: "Facebook",
          value: userDetails?.socials.facebook,
        },
        {
          title: "Instagram",
          value: userDetails?.socials.instagram,
        },
      ],
    },
    {
      title: "Guarantor",
      cols: 5,
      content: [
        {
          title: "full Name",
          value:
            userDetails?.guarantor.firstName +
            " " +
            userDetails?.guarantor.lastName,
        },
        {
          title: "Phone Number",
          value: userDetails?.guarantor.phoneNumber,
        },
        {
          title: "Email Address",
          value: "grace@gmail.com",
        },
        {
          title: "Relationship",
          value: "Sister",
        },
      ],
    },
  ];

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
                <p className="name">
                  {userDetails?.profile.firstName +
                    " " +
                    userDetails?.profile.lastName}
                </p>
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
                <div className="loan">₦{userDetails?.accountBalance}</div>
                <div className="bank">
                  {userDetails?.accountNumber}/Providus Bank
                </div>
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
        <div className="user-general-details">
          {userDetailsData.map((value, idx) => {
            return (
              <div
                className={`section-container ${
                  idx !== userDetailsData.length - 1 && "separator"
                }`}
                key={idx}
              >
                <h4 className="section-title">{value.title}</h4>
                <div
                  className={`cols ${value.cols === 5 && "cols-5"} ${
                    value.cols === 4 && "cols-4"
                  }`}
                >
                  {value.content.map((content, index) => {
                    return (
                      <div key={index} className="detail-container">
                        <p className="detail-title">{content.title}</p>
                        <p className="detail">{content.value}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </DashboardFrame>
  );
};

export default UserDetails;
