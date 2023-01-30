import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { SearchType } from "../../store/search-slice";
import classes from "./JobItem.module.scss";
import PaginationItem from "./PaginationItem";

const SpecificJobItem = () => {
  // this logic for mapping specific items doesn't take in consideration every filter added. Check to maybe accept prop of searchTerms and iterate through each job to further filter it out. Also, check the first filter logic to see if you can do something there. Break now...
  const filteredCompanies = useSelector(
    (state: RootState) => state.companies.filteredCompanies
  );
  const specificJobs = useSelector(
    (state: RootState) => state.jobs.specificJobs
  );

  const searchTerms = useSelector(
    (state: RootState) => state.search.searchTerms
  );

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

  return <PaginationItem jobs={specificJobs} />;
};

export default SpecificJobItem;
