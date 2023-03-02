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

const PaginationItem = (props: { jobs: IndustryItem[] | Company[] }) => {
  const navigate = useNavigate();
  const searchTerms = useSelector(
    (state: RootState) => state.search.searchTerms
  );

  const onJobClickHandler = (id: string) => {
    navigate(`${id}`);
  };

  function isIndustryItemArray(
    jobs: IndustryItem[] | Company[]
  ): jobs is IndustryItem[] {
    return "industry" in jobs[0];
  }
  let jobsMap: JSX.Element[] = [];

  if (props.jobs && props.jobs.length) {
    if (isIndustryItemArray(props.jobs)) {
      jobsMap = props.jobs.map((industry) => (
        <div
          key={industry.id}
          className={classes.job}
          onClick={() => onJobClickHandler(industry.id)}
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
      
      {jobsMap = props.jobs.map((company) => (
        <li key={company.id} className={classes["company"]}>
          <div className={classes["company__info"]}>
            <div className={classes["company__info__left"]}>
              <div
                className={classes["company__info__left__header"]}
              >
                <h2>{company.name}</h2>
                <div
                  className={
                    classes["company__info__left__header__briefing"]
                  }
                >
                  <p>{company.country.nameEn}</p>
                  <p>{company.city.name}</p>
                </div>
              </div>
              <div className={classes["company__info__left__body"]}>
                <p>{company.descriptionShort}</p>
              </div>
              <div
                className={classes["company__info__left__actions"]}
              >
                <a href={`https://www.${company.domain}`}>
                  <Button variant="info">Website</Button>
                </a>
                <Link to={`${company.id}`}>
                  <Button variant="info">Details</Button>
                </Link>
              </div>
            </div>
            <div className={classes["company__info__right"]}>
              <img
                src={company.logo}
                className={classes["company__info__right__image"]}
              />
              
            </div>
          </div>
        </li>
      ))}
      
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
