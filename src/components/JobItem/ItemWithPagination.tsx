import React, { useState } from "react";
import Pagination from "react-paginate";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useNavigate } from "react-router";
import { IndustryItem } from "../../store/jobs-slice";
import { Company } from "../../store/companies-slice";
import classes from "./Pagination.module.scss";

type Jobs = IndustryItem[] | Company[];

const ItemWithPagination = (jobs: Jobs) => {
  const [currentPage, setCurrentPage] = useState(0);
  const objectsPerPage = 20;
  const totalPages = Math.ceil(jobs.length / objectsPerPage);
  const currentAllJobs = jobs.slice(
    currentPage * objectsPerPage,
    (currentPage + 1) * objectsPerPage
  );

  const handlePageChange = (page: { selected: number }) => {
    setCurrentPage(page.selected);
  };
  return (
    <>
      {currentAllJobs}
      <div className={classes["pagination-container"]}>
        <Pagination
          pageCount={totalPages}
          pageRangeDisplayed={20}
          marginPagesDisplayed={2}
          onPageChange={handlePageChange}
          activeClassName="active"
          activeLinkClassName="active"
          containerClassName="pagination"
          forcePage={currentPage}
          className={classes.pagination}
        />
      </div>
    </>
  );
};

export default ItemWithPagination;
// put Pagination also for SpecificJobItem
