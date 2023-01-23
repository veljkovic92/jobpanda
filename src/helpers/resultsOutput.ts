import React from "react";
import { Company } from "../store/companies-slice";
import { SearchType } from "../store/search-slice";
import jobPandaLogo from "../assets/jobpanda.png";
import { useDispatch } from "react-redux";

const resultsOutput = (
  filteredCompanies: Company[],
  searchTerms: SearchType
) => {
  console.log(filteredCompanies);

  type IndustryItem = {
    id: number;
    name: string;
    phoneNumber: string;
    rank: number;
    city: string;
    country: string;
    continent: string;
    domain: string;
    logo: string;
    desc: string;
    descriptionShort: string;
    industry: string;
    experienceWanted: number;
    totalEmployees: string;
    totalEmployeesExact: number;
    yearFounded: number;
  };
  const industriesArray: IndustryItem[] = [];

  if (searchTerms.skill === "any") {
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
  }

  console.log(industriesArray);
  const shuffledIndustriesArray = industriesArray.sort(function () {
    return Math.random() - 0.5;
  });

  return shuffledIndustriesArray;
};

export default resultsOutput;
