import React from "react";
import { useSelector } from "react-redux";
import { filterCompanies } from "../../helpers/filterCompanies";
import resultsOutput from "../../helpers/resultsOutput";
import { RootState } from "../../store";
// Ovde trebam da izbacim sve kompanije koje zadovoljavaju search kriterijume
const Results = () => {
  const companies = useSelector(
    (state: RootState) => state.companies.companies
  );
  const searchTerms = useSelector(
    (state: RootState) => state.search.searchTerms
  );

  const filteredCompanies = filterCompanies(companies, searchTerms);
  const resultsCompanies = resultsOutput(filteredCompanies, searchTerms);

  const anyJobsMap = resultsCompanies.map((industry) => (
    <div key={Math.random() * 10000}>
      <div>
        <h1>{industry.industry}</h1>
        <img src={industry.logo} />
      </div>
    </div>
  ));

  const specificJobsMap = filteredCompanies.map((company) => (
    <div key={company.id}>
      <div>
        <h1>{searchTerms.skill}</h1>
        <img src={company.logo} />
      </div>
    </div>
  ));

  return (
    <div>{searchTerms.skill === "any" ? anyJobsMap : specificJobsMap}</div>
  );
};

export default Results;
