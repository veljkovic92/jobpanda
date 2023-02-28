import React from "react";
import { Company } from "../store/companies-slice";
import { SearchType } from "../store/search-slice";
import jobPandaLogo from "../assets/jobpanda.png";
import { IndustryItem } from "../store/jobs-slice";
import { v4 as uuidv4 } from "uuid";

const allJobsList = (filteredCompanies: Company[]) => {
  let industriesArray: IndustryItem[] = [];

  filteredCompanies.forEach((company) => {
    company.industries.forEach((industry) => {
      industriesArray.push({
        id: uuidv4(),
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
  console.log(industriesArray);

  return industriesArray;
};

export default allJobsList;

// I created a new database object "jobs" and should now replace this existing allJobsList which gets called every time the app starts with "jobs". Basically, my app should only pull data about jobs from firebase database. I should change my code accordingly
