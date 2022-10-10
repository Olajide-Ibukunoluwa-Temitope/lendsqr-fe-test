import React, { useState } from "react";
import table_item_menu from "../../assets/icons/table_item_menu.svg";
import left_arrow from "../../assets/icons/left_arrow.svg";
import right_arrow from "../../assets/icons/right_arrow.svg";
import "./styles.scss";

const Table: React.FC = () => {
  const [tableItemCount, setTableItemCount] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageNumberStep, setPageNumberStep] = useState<{
    [key: string]: number;
  }>({
    initialStep: 0,
    lastStep: 3,
  });
  const totalItems = 500;
  const pageCount = Math.ceil(totalItems / tableItemCount);
  const pseudoData = new Array(totalItems).fill(0);
  const data = pseudoData.slice(0, tableItemCount);
  const pages = [...Array(pageCount)].map((_, idx) => idx + 1);
  const updatePages = pages.slice(
    pageNumberStep.initialStep,
    pageNumberStep.lastStep
  );
  const showEllipse =
    (updatePages[updatePages.length - 1] !== pages[pages.length - 2] ||
      updatePages[updatePages.length - 1] < pages[pages.length - 2]) &&
    updatePages[updatePages.length - 1] + 1 !== pages[pages.length - 2];

  const handleTableListCountChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setTableItemCount(Number(e.target.value));
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

  return (
    <div className="table-section">
      <div className="table-container">
        <table className="table">
          <thead className="">
            <tr>
              <th>
                <div className="table-heading-item">Organisation</div>
              </th>
              <th>
                <div className="table-heading-item">Username</div>
              </th>
              <th>
                <div className="table-heading-item">Email</div>
              </th>
              <th>
                <div className="table-heading-item">Phone number</div>
              </th>
              <th>
                <div className="table-heading-item">Date joined</div>
              </th>
              <th>
                <div className="table-heading-item">Status</div>
              </th>
              <th>
                <div className="table-heading-item"></div>
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((_, index) => (
              <tr className="table-data-row w-full" key={index}>
                <td
                  className={`${
                    index !== data.length - 1 && "border-b"
                  } table-data-item-container`}
                >
                  <div className="table-data-item">Lendsqr</div>
                </td>
                <td
                  className={`${
                    index !== data.length - 1 && "border-b"
                  } table-data-item-container`}
                >
                  <div className="table-data-item">Adedeji</div>
                </td>
                <td
                  className={`${
                    index !== data.length - 1 && "border-b"
                  } table-data-item-container`}
                >
                  <div className="table-data-item">adedeji@lendsqr.com</div>
                </td>
                <td
                  className={`${
                    index !== data.length - 1 && "border-b"
                  } table-data-item-container`}
                >
                  <div className="table-data-item">08078903721</div>
                </td>
                <td
                  className={`${
                    index !== data.length - 1 && "border-b"
                  } table-data-item-container`}
                >
                  <div className="table-data-item">May 15, 2020 10:00 AM</div>
                </td>
                <td
                  className={`${
                    index !== data.length - 1 && "border-b"
                  } table-data-item-container`}
                >
                  <div className="table-data-item">
                    <div className="status">Active</div>
                  </div>
                </td>
                <td
                  className={`${
                    index !== data.length - 1 && "border-b"
                  } table-data-item-container`}
                >
                  <div className="table-data-item">
                    <img
                      src={table_item_menu}
                      alt="table item menu"
                      className="table-item-icon"
                    />
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
