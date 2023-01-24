import { createSlice } from "@reduxjs/toolkit";

export type Company = {
  alexaRank: number;
  city: {
    name: string;
  };
  companiesSimilar: [];
  continent: {
    nameEn: string;
  };
  country: {
    nameEn: string;
  };
  description: string;
  descriptionShort: string;
  domain: string;
  experienceWanted: number;
  id: number;
  industries: [];
  industryMain: string;
  logo: string;
  monthlyVisitors: string;
  name: string;
  phoneNumber: string;
  socialNetworks: {
    angellist: string;
    facebook: string;
    instagram: string;
    linkedin: string;
    twitter: string;
    youtube: string;
  };
  technologies: [];
  technologyCategories: [];
  totalEmployees: string;
  totalEmployeesExact: number;
  yearFounded: number;
};

type CompanyState = {
  companies: Company[];
  filteredCompanies: Company[]
};

const initialState: CompanyState = {
  companies: [],
  filteredCompanies: []
};

const companiesSlice = createSlice({
  name: "companies",
  initialState,
  reducers: {
    addCompanies(state, action) {
      state.companies = action.payload;
    },
    addFilteredCompanies(state, action) {
      state.filteredCompanies = action.payload;
    }
  },
});

export const companiesActions = companiesSlice.actions;

export default companiesSlice;
