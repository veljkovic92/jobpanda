import React, { useState } from "react";
import Pagination from "react-paginate";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useNavigate } from "react-router";
import { IndustryItem } from "../../store/jobs-slice";
import { Company } from "../../store/companies-slice";
import classes from "./Pagination.module.scss";

const PaginationItem = (props: { jobs: IndustryItem[] | Company[] }) => {
  const navigate = useNavigate();
  const searchTerms = useSelector(
    (state: RootState) => state.search.searchTerms
  );

  const onJobClickHandler = (index: number) => {
    navigate(`${index}`);
  };

  function isIndustryItemArray(
    jobs: IndustryItem[] | Company[]
  ): jobs is IndustryItem[] {
    return "industry" in jobs[0];
  }
  let jobsMap = [];
  if (isIndustryItemArray(props.jobs)) {
    jobsMap = props.jobs.map((industry, index) => (
      <div
        key={index}
        className={classes.job}
        onClick={() => onJobClickHandler(index)}
      >
        <div className={classes["job__left"]}>
          <div className={classes["job__left__header"]}>
            <h1>{industry.industry}</h1>
            <p>{industry.name}</p>
          </div>

          <div className={classes["job__left__body"]}>
            <p>{industry.descriptionShort}</p>
          </div>
          <div className={classes["job__left__footer"]}>
            <p>{industry.country}</p>
            <p>{industry.city}</p>
            <p>{industry.domain}</p>
          </div>
        </div>
        <div className={classes["job__right"]}>
          <img src={industry.logo} className={classes["job__right__image"]} />
        </div>
      </div>
    ));
  } else {
    jobsMap = props.jobs.map((company) => (
      <div key={company.id} className={classes.job}>
        <div className={classes["job__left"]}>
          <div className={classes["job__left__header"]}>
            <h1>{searchTerms.skill}</h1>
            <p>{company.name}</p>
          </div>
          <div className={classes["job__left__body"]}>
            <p>{company.descriptionShort}</p>
          </div>
          <div className={classes["job__left__footer"]}>
            <p>{company.country.nameEn}</p>
            <p>{company.city.name}</p>
            <p>{company.domain}</p>
          </div>
        </div>
        <div className={classes["job__right"]}>
          <img src={company.logo} className={classes["job__right__image"]} />
        </div>
      </div>
    ));
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

export default PaginationItem;
// put Pagination also for SpecificJobItem
