import React, { useState } from "react";
import Pagination from "react-paginate";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useNavigate } from "react-router";
import { IndustryItem } from "../../store/jobs-slice";
import { Company } from "../../store/companies-slice";
import classes from "./Pagination.module.scss";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import JobAndCompanyItem from "../JobAndCompanyItem/JobAndCompanyItem";

const PaginationItem = (props: { jobs: IndustryItem[] | Company[] }) => {
  const navigate = useNavigate();
  const searchTerms = useSelector(
    (state: RootState) => state.search.searchTerms
  );

  function isIndustryItemArray(
    jobs: IndustryItem[] | Company[]
  ): jobs is IndustryItem[] {
    return "industry" in jobs[0];
  }
  let jobsMap: JSX.Element[] = [];

  if (props.jobs && props.jobs.length) {
    if (isIndustryItemArray(props.jobs)) {
      jobsMap = props.jobs.map((item) => (
        <JobAndCompanyItem {...item}/>
      ));
    } else {
      {
        jobsMap = props.jobs.map((item) => (
          <JobAndCompanyItem {...item}/>
        ));
      }
    }
  }

  const [currentPage, setCurrentPage] = useState(0);
  const objectsPerPage = 20;
  const totalPages = Math.ceil(jobsMap.length / objectsPerPage);
  const currentAllJobs = jobsMap.slice(
    currentPage * objectsPerPage,
    (currentPage + 1) * objectsPerPage
  );

  const handlePageChange = (page: { selected: number }) => {
    setCurrentPage(page.selected);
    window.scrollTo(0, 0);
  };
  return props.jobs && props.jobs.length ? (
    <>
      {currentAllJobs}
      {props.jobs.length > 20 && (
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
      )}
    </>
  ) : (
    <p>"No Jobs Found"</p>
  );
};

export default PaginationItem;
