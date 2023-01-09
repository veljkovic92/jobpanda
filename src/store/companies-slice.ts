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
  id: number;
  industries: [];
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
  totalEmployeesExact: number;
  yearFounded: number;
};

type CompanyState = {
  companies: Company[];
};

const initialState: CompanyState = {
  companies: [],
};

const companiesSlice = createSlice({
  name: "companies",
  initialState,
  reducers: {
    addCompanies(state, action) {
      state.companies = action.payload;
    },
  },
});

export const companiesActions = companiesSlice.actions;

export default companiesSlice;
