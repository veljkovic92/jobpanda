import React from "react";
import { Company } from "../store/companies-slice";
import { SearchType } from "../store/search-slice";
import jobPandaLogo from "../assets/jobpanda.png";
import { IndustryItem } from "../store/jobs-slice";

const allJobsList = (filteredCompanies: Company[]) => {
  console.log(filteredCompanies);

  const industriesArray: IndustryItem[] = [];

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

  // izbrisi da se uvek shuffle uradi i to dodaj kao opciju na svaki list industrija (sortiranje)
  console.log(industriesArray);
  const shuffledJobsArray = industriesArray.sort(function () {
    return Math.random() - 0.5;
  });

  return shuffledJobsArray;
};

export default allJobsList;
