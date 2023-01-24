import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MainSearchBar from "../../components/MainSearchBar/MainSearchBar";
import AnyJobsMap from "../../components/JobItem/AnyJobItem";
import { filterCompanies } from "../../helpers/filterCompanies";
import resultsOutput from "../../helpers/allJobsList";
import { RootState } from "../../store";
import classes from "./Results.module.scss";
import { useDispatch } from "react-redux";
import { jobsSliceActions } from "../../store/jobs-slice";
import AnyJobItem from "../../components/JobItem/AnyJobItem";
import SpecificJobItem from "../../components/JobItem/SpecificJobItem";

// Ovde trebam da izbacim sve kompanije koje zadovoljavaju search kriterijume
const Results = () => {
  const dispatch = useDispatch();
  const companies = useSelector(
    (state: RootState) => state.companies.companies
  );
  const searchTerms = useSelector(
    (state: RootState) => state.search.searchTerms
  );

  const filteredCompanies = filterCompanies(companies, searchTerms);

  useEffect(() => {
    if (
      searchTerms.skill !== "any" ||
      searchTerms.experience !== "any" ||
      (searchTerms.location !== "any" && filteredCompanies)
    ) {
      dispatch(jobsSliceActions.addSpecificJobs(filteredCompanies));
    }
  }, []);

  const jobsMap =
    searchTerms.skill === "any" ? <AnyJobItem /> : <SpecificJobItem />;
  // ceo div da bude companyItem

  return (
    <>
      <MainSearchBar />
      <div className={classes.jobs}>{jobsMap}</div>
    </>
  );
};

export default Results;
