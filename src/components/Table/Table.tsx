import React, { useEffect, useRef, useState } from "react";
import table_item_menu from "../../assets/icons/table_item_menu.svg";
import left_arrow from "../../assets/icons/left_arrow.svg";
import right_arrow from "../../assets/icons/right_arrow.svg";
import view_details from "../../assets/icons/view_details.svg";
import blacklist_user from "../../assets/icons/blacklist_user.png";
import activate_user from "../../assets/icons/activate_user.png";
import filter_icon from "../../assets/icons/filter_icon.svg";
import "./styles.scss";
import { tableHeading } from "./data";
import TextField from "../InputFields/TextField/TextField";
import SelectField from "../InputFields/SelectField/SelectField";
import ButtonAlt from "../Buttons/ButtonAlt/ButtonAlt";
import Button from "../Buttons/Button/Button";
import { TableProps } from "./types";
import { parseDate, sliceIntoChunks } from "../../utilities";

const Table: React.FC<TableProps> = ({ userData }) => {
  const [tableItemCount, setTableItemCount] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [showTableMenu, setShowTableMenu] = useState<boolean>(false);
  const [activeMenu, setActiveMenu] = useState<number>(0);
  const [showFilterMenu, setShowFilterMenu] = useState<boolean>(false);
  const [activeFilterMenu, setActiveFilterMenu] = useState<number>(0);
  const [pageNumberStep, setPageNumberStep] = useState<{
    [key: string]: number;
  }>({
    initialStep: 0,
    lastStep: 3,
  });
  const optMenuRef = useRef(null);
  const filterRef = useRef(null);

  const totalItems = userData.length;
  const pageCount = Math.ceil(totalItems / tableItemCount);

  const pages = [...Array(pageCount)].map((_, idx) => idx + 1);
  const updatePages = pages.slice(
    pageNumberStep.initialStep,
    pageNumberStep.lastStep
  );
  const splitData = sliceIntoChunks(userData, tableItemCount);
  const showEllipse =
    updatePages[updatePages.length - 1] !== pages[pages.length - 2] &&
    updatePages[updatePages.length - 1] < pages[pages.length - 2] &&
    updatePages[updatePages.length - 1] + 1 !== pages[pages.length - 2] &&
    updatePages[updatePages.length - 1] !== pages[pages.length - 1];

  //  functions
  const handleTableListCountChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setTableItemCount(Number(e.target.value));
    setCurrentPage(1);
  };

  const handleNextPage = () => {
    if (currentPage >= pageCount) return;
    if (currentPage >= pageNumberStep.lastStep) {
      setPageNumberStep((prevState) => {
        return {
          initialStep: prevState.initialStep + 3,
          lastStep: prevState.lastStep + 3,
        };
      });
    }
    setCurrentPage((prevState) => {
      return prevState + 1;
    });
  };

  const handlePrevPage = () => {
    if (currentPage <= 1) return;
    if (currentPage <= pageNumberStep.initialStep + 1) {
      setPageNumberStep((prevState) => {
        return {
          initialStep: prevState.initialStep - 3,
          lastStep: prevState.lastStep - 3,
        };
      });
    }
    setCurrentPage((prevState) => {
      return prevState - 1;
    });
  };

  const handlePageNumberClick = (num: number) => {
    setCurrentPage(() => {
      return num;
    });
  };

  const handleMenuOptionClick = (id: number) => {
    setShowTableMenu(true);
    setActiveMenu(id);
  };

  const handleFilterClick = (id: number) => {
    setShowFilterMenu(true);
    setActiveFilterMenu(id);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        (optMenuRef.current &&
          !(optMenuRef.current as any)?.contains(event.target)) ||
        (filterRef.current &&
          !(filterRef.current as any)?.contains(event.target))
      ) {
        setShowTableMenu(false);
        setShowFilterMenu(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [optMenuRef, filterRef]);

  if (!userData || userData.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div className="table-section">
      <div className="table-container">
        <table className="table">
          <thead className="">
            <tr>
              {tableHeading.map((value, idx) => {
                return (
                  <th key={idx}>
                    <div className="table-heading-item">
                      <div className="heading">
                        <p>{value}</p>
                        <div className="icon">
                          {value !== "" && (
                            <img
                              src={filter_icon}
                              alt="filter"
                              className="filter-icon"
                              onClick={() => handleFilterClick(idx)}
                            />
                          )}
                          {/* this should be refactored to use be a funxtion and uses switch case to display field depending on type */}
                          {showFilterMenu && activeFilterMenu === idx && (
                            <div ref={filterRef} className="filter-dropdown">
                              <SelectField
                                placeholder="Select"
                                name="organization"
                                handleChange={() => console.log("fds")}
                                borderRadius="8px"
                                label="organization"
                                options={[
                                  { label: "Lendsqr", value: "lendsqr" },
                                ]}
                              />
                              <TextField
                                type="text"
                                placeholder="User"
                                name="username"
                                borderRadius="8px"
                                label="Username"
                                value=""
                                handleChange={() => console.log("fd")}
                              />
                              <TextField
                                type="text"
                                placeholder="Email"
                                label="Email"
                                name="email"
                                borderRadius="8px"
                                value=""
                                handleChange={() => console.log("fd")}
                              />
                              <TextField
                                type="date"
                                placeholder="Date"
                                label="Date"
                                name="date"
                                borderRadius="8px"
                                value=""
                                handleChange={() => console.log("fd")}
                              />
                              <TextField
                                type="text"
                                placeholder="Phone Number"
                                label="Phone Number"
                                name="phoneNo"
                                borderRadius="8px"
                                value=""
                                handleChange={() => console.log("fd")}
                              />
                              <SelectField
                                placeholder="Select"
                                name="status"
                                handleChange={() => console.log("fds")}
                                borderRadius="8px"
                                label="status"
                                options={[
                                  { label: "Lendsqr", value: "lendsqr" },
                                ]}
                              />
                              <div className="filter-buttons">
                                <ButtonAlt
                                  btnText="Reset"
                                  color="#545F7D"
                                  onClick={() => console.log("#")}
                                />
                                <Button
                                  btnText="Filter"
                                  onClick={() => console.log("#")}
                                />
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {splitData?.[currentPage - 1]?.map((user, index) => (
              <tr className="table-data-row" key={index}>
                <td
                  className={`${
                    index !== splitData?.[currentPage - 1].length - 1 &&
                    "border-b"
                  } table-data-item-container`}
                >
                  <div className="table-data-item">{user.orgName}</div>
                </td>
                <td
                  className={`${
                    index !== splitData?.[currentPage - 1].length - 1 &&
                    "border-b"
                  } table-data-item-container`}
                >
                  <div className="table-data-item">{user.userName}</div>
                </td>
                <td
                  className={`${
                    index !== splitData?.[currentPage - 1].length - 1 &&
                    "border-b"
                  } table-data-item-container`}
                >
                  <div className="table-data-item">{user.email}</div>
                </td>
                <td
                  className={`${
                    index !== splitData?.[currentPage - 1].length - 1 &&
                    "border-b"
                  } table-data-item-container`}
                >
                  <div className="table-data-item">
                    {user.profile.phoneNumber}
                  </div>
                </td>
                <td
                  className={`${
                    index !== splitData?.[currentPage - 1].length - 1 &&
                    "border-b"
                  } table-data-item-container`}
                >
                  <div className="table-data-item">
                    {parseDate(user.createdAt)}
                  </div>
                </td>
                <td
                  className={`${
                    index !== splitData?.[currentPage - 1].length - 1 &&
                    "border-b"
                  } table-data-item-container`}
                >
                  <div className="table-data-item">
                    <div className="status">Active</div>
                  </div>
                </td>
                <td
                  className={`${
                    index !== splitData?.[currentPage - 1].length - 1 &&
                    "border-b"
                  } table-data-item-container`}
                >
                  <div className="table-data-item table-data-item-menu">
                    <div onClick={() => handleMenuOptionClick(index)}>
                      <img
                        src={table_item_menu}
                        alt="table item menu"
                        className="table-item-icon"
                      />
                    </div>

                    {activeMenu === index && showTableMenu && (
                      <div ref={optMenuRef} className="menu-dropdown">
                        <a
                          href={`/dashboard/customers/users/${index + 1}`}
                          className="menu-item"
                        >
                          <img src={view_details} alt="view details" />
                          <p>View Details</p>
                        </a>
                        <div className="menu-item">
                          <img src={blacklist_user} alt="blacklist user" />
                          <p>Blacklist User</p>
                        </div>
                        <div className="menu-item">
                          <img src={activate_user} alt="activate user" />
                          <p>Activate User</p>
                        </div>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="pagination-container">
        <div className="table-list-count">
          <p>Showing</p>
          <select
            name="table-list-count"
            className="count-dropdown"
            onChange={handleTableListCountChange}
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
          <p>out of {totalItems}</p>
        </div>
        <div className="pagination">
          <div
            className={`arrow-container ${
              currentPage <= 1 && "arrow-disabled"
            }`}
            onClick={handlePrevPage}
          >
            <img src={left_arrow} alt="left arrow" />
          </div>
          <div className="pagination-number">
            {pageCount > 7 ? (
              <>
                {" "}
                {updatePages.map((page, idx) => {
                  return (
                    pages[pages.length - 1] !==
                      updatePages[updatePages.length - 1] && (
                      <span
                        key={idx}
                        className={`pagination-number-item ${
                          page === currentPage &&
                          "pagination-number-item-active"
                        }`}
                        onClick={() => handlePageNumberClick(page)}
                      >
                        {page}
                      </span>
                    )
                  );
                })}
                {showEllipse && (
                  <span
                    className={`pagination-number-item`}
                    onClick={() => {
                      setPageNumberStep((prevState) => {
                        return {
                          initialStep: prevState.initialStep + 3,
                          lastStep: prevState.lastStep + 3,
                        };
                      });
                    }}
                  >
                    ...
                  </span>
                )}
                {pages
                  .slice(
                    !showEllipse &&
                      pageCount % 3 !== 0 &&
                      updatePages[updatePages.length - 1] + 1 !==
                        pages[pages.length - 2]
                      ? pageCount - 1
                      : pageCount - 2,
                    pageCount
                  )
                  .map((page, idx) => {
                    return (
                      <span
                        key={idx}
                        className={`pagination-number-item ${
                          page === currentPage &&
                          "pagination-number-item-active"
                        }`}
                        onClick={() => handlePageNumberClick(page)}
                      >
                        {page}
                      </span>
                    );
                  })}
              </>
            ) : (
              pages.map((page, idx) => {
                return (
                  <span
                    key={idx}
                    className={`pagination-number-item ${
                      page === currentPage && "pagination-number-item-active"
                    }`}
                    onClick={() => handlePageNumberClick(page)}
                  >
                    {page}
                  </span>
                );
              })
            )}
          </div>
          <div
            className={`arrow-container ${
              currentPage >= pageCount && "arrow-disabled"
            }`}
            onClick={handleNextPage}
          >
            <img src={right_arrow} alt="right arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
