import React from "react";
import { Company } from "../store/companies-slice";
import { SearchType } from "../store/search-slice";
import jobPandaLogo from "../assets/jobpanda.png";
import { IndustryItem } from "../store/jobs-slice";

const allJobsList = (filteredCompanies: Company[], searchTerms: SearchType) => {
  console.log(filteredCompanies);

  let industriesArray: IndustryItem[] = [];

  filteredCompanies.forEach((company) => {
    company.industries.forEach((industry) => {
      industriesArray.push({
        id: company.id,
        name: company.name,
        phoneNumber: company.phoneNumber,
        rank: company.alexaRank,
        city: company.city.name,
        country: company.country.nameEn,
        continent: company.continent.nameEn,
        domain: company.domain,
        logo: company.logo || jobPandaLogo,
        desc: company.description,
        descriptionShort: company.descriptionShort,
        experienceWanted: company.experienceWanted,
        totalEmployees: company.totalEmployees,
        totalEmployeesExact: company.totalEmployeesExact,
        yearFounded: company.yearFounded,
        industry: industry,
      });
    });
  });

  if (searchTerms.experience !== "" && !isNaN(+searchTerms.experience)) {
    industriesArray = industriesArray.filter(
      (company) => company.experienceWanted <= +searchTerms.experience
    );
  }

  if (searchTerms.skill !== "") {
    industriesArray = industriesArray.filter((company) =>
      company.industry.toLowerCase().startsWith(searchTerms.skill.toLowerCase())
    );
  }

  if (searchTerms.country !== "") {
    industriesArray = industriesArray.filter((company) =>
      company.country
        .toLowerCase()
        .startsWith(searchTerms.country.toLowerCase())
    );
  }

  if (searchTerms.company !== "") {
    industriesArray = industriesArray.filter((company) =>
      company.name.toLowerCase().startsWith(searchTerms.company.toLowerCase())
    );
  }

  if (searchTerms.city !== "") {
    industriesArray = industriesArray.filter((company) =>
      company.city.toLowerCase().startsWith(searchTerms.city.toLowerCase())
    );
  }

  // izbrisi da se uvek shuffle uradi i to dodaj kao opciju na svaki list industrija (sortiranje)
 
  const shuffledJobsArray = industriesArray.sort(function () {
    return Math.random() - 0.5;
  });

  return industriesArray;
};

export default allJobsList;
