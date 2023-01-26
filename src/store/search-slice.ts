import { createSlice } from "@reduxjs/toolkit";

export type SearchType = {
  experience: string;
  location: string;
  skill: string;
  company: string;
  city: string;
}

const searchTerms: SearchType = {
  experience: "any",
  location: "any",
  skill: "any",
  company: "any",
  city: "any"
};

const initialState = {
  searchTerms,
  prevSearches: []
}

const searchSlice = createSlice({
  name: "searchSlice",
  initialState,
  reducers: {
    searchTerms(state, action) {
      state.searchTerms = action.payload;
    },
    addCompanyFilter(state, action) {
      state.searchTerms.company = action.payload;
    },
    addCityFilter(state, action) {
      state.searchTerms.city = action.payload;
    }
  },
});

export const searchSliceActions = searchSlice.actions;

export default searchSlice;
