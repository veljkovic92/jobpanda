import { Company } from "../store/companies-slice";
import { SearchType } from "../store/search-slice";

export const filterCompanies = (
  companies: Company[],
  searchTerms: SearchType
) => {
  let searchedCompanies: Company[] = [];

  companies.forEach((company) => {
    if (
      typeof searchTerms.experience == "number" &&
      company.experienceWanted <= searchTerms.experience
    ) {
      searchedCompanies.push(company);
    } else if (typeof searchTerms.experience == "string") {
      searchedCompanies.push(company);
    }
  });

  let searchedCompanies2: Company[] = [];

  searchedCompanies.forEach((company) => {
    company.industries.forEach((industry) => {
      if (searchTerms.skill !== "any" && industry === searchTerms.skill) {
        searchedCompanies2.push(company);
      } else if (searchTerms.skill === "any") {
        searchedCompanies2 = searchedCompanies;
      }
    });
  });

  let searchedCompanies3: Company[] = [];

  searchedCompanies2.forEach((company) => {
    if (
      searchTerms.location !== "any" &&
      company.city.name === searchTerms.location
    ) {
      searchedCompanies3.push(company);
    } else if (searchTerms.location === "any") {
      searchedCompanies3 = searchedCompanies2;
    }
  });

  return searchedCompanies3;
};
