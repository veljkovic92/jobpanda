import React from "react";
import { useSelector } from "react-redux";
import { filterCompanies } from "../../helpers/filterCompanies";
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
  const companiesMap = filteredCompanies.map((company) => (
    <div key={company.id}>
      <h1>{company.name}</h1>
    </div>
  ));
  return <div>{companiesMap}</div>;
};

export default Results;
