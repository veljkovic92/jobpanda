import React from "react";
import { Company } from "../store/companies-slice";
import { SearchType } from "../store/search-slice";
import jobPandaLogo from "../assets/jobpanda.png";
import { IndustryItem } from "../store/jobs-slice";


const specificJobsList = (anyJobs: IndustryItem[], searchTerms: SearchType) => {
  

  let industriesArray: IndustryItem[] = [];

 
    anyJobs.forEach((industry) => {
      industriesArray.push({
        id: industry.id,
        name: industry.name,
        phoneNumber: industry.phoneNumber,
        rank: industry.rank,
        city: industry.city,
        country: industry.country,
        continent: industry.continent,
        domain: industry.domain,
        logo: industry.logo || jobPandaLogo,
        desc: industry.desc,
        descriptionShort: industry.descriptionShort,
        experienceWanted: industry.experienceWanted,
        totalEmployees: industry.totalEmployees,
        totalEmployeesExact: industry.totalEmployeesExact,
        yearFounded: industry.yearFounded,
        industry: industry.industry,
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

export default specificJobsList;
