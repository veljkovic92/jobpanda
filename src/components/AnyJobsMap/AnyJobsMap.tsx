import { filterCompanies } from "../../helpers/filterCompanies";
import resultsOutput from "../../helpers/resultsOutput";
import classes from "../../pages/Results/Results.module.scss";
import { useEffect, useState } from "react";
import Pagination from "react-paginate";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { jobsSliceActions } from "../../store/jobs-slice";

const AnyJobsMap = () => {
  const dispatch = useDispatch();
  const companies = useSelector(
    (state: RootState) => state.companies.companies
  );
  const searchTerms = useSelector(
    (state: RootState) => state.search.searchTerms
  );

  const filteredCompanies = filterCompanies(companies, searchTerms);
  const resultsCompanies = resultsOutput(filteredCompanies, searchTerms);

  useEffect(() => {
    dispatch(jobsSliceActions.addAnyJobs(resultsCompanies));
  }, []);

  const navigate = useNavigate();
  const onJobClickHandler = (index: number) => {
    navigate(`${index}`);
  };

  const anyJobsMap = resultsCompanies.map((industry, index) => (
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

  const [currentPage, setCurrentPage] = useState(0);
  const objectsPerPage = 20;
  const totalPages = Math.ceil(anyJobsMap.length / objectsPerPage);
  const currentAllJobs = anyJobsMap.slice(
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

export default AnyJobsMap;
