import { Company } from "../store/companies-slice";
import { SearchType } from "../store/search-slice";

export const filterCompanies = (
  companies: Company[],
  searchTerms: SearchType
) => {
  let searchedCompanies: Company[] = [];

  companies.forEach((company) => {
    if (
      searchTerms.experience.length &&
      company.experienceWanted <= +searchTerms.experience
    ) {
      searchedCompanies.push(company);
    } else if (searchTerms.experience == "") {
      searchedCompanies.push(company);
    }
  });

  let searchedCompanies2: Company[] = [];

  searchedCompanies.forEach((company) => {
    company.industries.forEach((industry) => {
      if (searchTerms.skill !== "" && industry === searchTerms.skill) {
        searchedCompanies2.push(company);
      } else if (searchTerms.skill === "") {
        searchedCompanies2 = searchedCompanies;
      }
    });
  });

  let searchedCompanies3: Company[] = [];

  searchedCompanies2.forEach((company) => {
    if (
      searchTerms.location !== "" &&
      company.city.name === searchTerms.location
    ) {
      searchedCompanies3.push(company);
    } else if (searchTerms.location === "") {
      searchedCompanies3 = searchedCompanies2;
    }
  });

  let searchedCompanies4: Company[] = [];

  searchedCompanies3.forEach((company) => {
    if (
      searchTerms.company &&
      searchTerms.company !== "" &&
      company.name.toLowerCase().startsWith(searchTerms.company.toLowerCase())
    ) {
      searchedCompanies4.push(company);
    } else if (searchTerms.company === "") {
      searchedCompanies4 = searchedCompanies3;
    }
  });

  let searchedCompanies5: Company[] = [];

  searchedCompanies4.forEach((company) => {
    if (
      searchTerms.city &&
      searchTerms.city !== "" &&
      company.city.name.toLowerCase().startsWith(searchTerms.city.toLowerCase())
    ) {
      searchedCompanies5.push(company);
    } else if (searchTerms.city === "") {
      searchedCompanies5 = searchedCompanies4;
    }
  });
  console.log(searchedCompanies5);

  return searchedCompanies5;
};
