import React, { useState } from "react";
import { useSelector } from "react-redux";
import MainSearchBar from "../../components/MainSearchBar/MainSearchBar";
import AnyJobsMap from "../../components/AnyJobsMap/AnyJobsMap";
import { filterCompanies } from "../../helpers/filterCompanies";
import resultsOutput from "../../helpers/resultsOutput";
import { RootState } from "../../store";
import classes from "./Results.module.scss";
import { useDispatch } from "react-redux";
import { jobsSliceActions } from "../../store/jobs-slice";

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

  if (searchTerms.skill !== "any" && filteredCompanies) {
    dispatch(jobsSliceActions.addSpecificJobs(filteredCompanies));
  }

  const specificJobsMap = filteredCompanies.map((company) => (
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

  return (
    <>
      <MainSearchBar />
      <div className={classes.jobs}>
        {searchTerms.skill === "any" ? <AnyJobsMap /> : specificJobsMap}
      </div>
    </>
  );
};

export default Results;
