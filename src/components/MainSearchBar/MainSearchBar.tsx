import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import classes from "./MainSearchBar.module.scss";
import { BsSearch } from "react-icons/bs";
import React, { useRef, useState } from "react";
import { type } from "@testing-library/user-event/dist/type";
import { useDispatch } from "react-redux";
import { searchSliceActions } from "../../store/search-slice";
import Exclude from "util/types";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useNavigate } from "react-router";
import { filterCompanies } from "../../helpers/filterCompanies";
import { jobsSliceActions } from "../../store/jobs-slice";
import { companiesActions } from "../../store/companies-slice";
import allJobsList from "../../helpers/allJobsList";

const MainSearchBar = () => {
  const dispatch = useDispatch();
  const companies = useSelector(
    (state: RootState) => state.companies.companies
  );
  const navigate = useNavigate();

  const skillRef = useRef<HTMLInputElement>(null);
  const experienceRef = useRef<HTMLSelectElement>(null);
  const locationRef = useRef<HTMLInputElement>(null);

  type SearchTerms = {
    skill: string;
    experience: string | number;
    location: string;
  };

  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const skill = skillRef.current!.value || "any";
    const experience =
      experienceRef.current!.value === "Any experience"
        ? "any"
        : +experienceRef.current!.value;
    const location = locationRef.current!.value || "any";

    const searchTerms: SearchTerms = {
      skill,
      experience,
      location,
    };

    dispatch(searchSliceActions.searchTerms(searchTerms));

    const filteredCompanies = filterCompanies(companies, searchTerms);
    dispatch(companiesActions.addFilteredCompanies(filteredCompanies));

    if (skill !== "any" || experience !== "any" || location !== "any") {
      const specificJobsList = allJobsList(filteredCompanies);
      dispatch(jobsSliceActions.addSpecificJobs(specificJobsList));
    }

    navigate("/results");
  };

  return (
    <section className={classes.search}>
      <Form className={classes["search__form"]} onSubmit={onSubmitHandler}>
        <BsSearch size="80px" />
        <Form.Control
          type="text"
          placeholder="Enter skills / designations / companies"
          ref={skillRef}
        />
        <Form.Select
          aria-label="Default select example"
          ref={experienceRef}
          defaultValue="any"
        >
          <option disabled hidden>
            Select experience
          </option>
          <option>Any experience</option>
          {Array.from({ length: 30 }, (_, i) => i + 1).map((option) => (
            <option value={option} key={option}>
              {option} {option === 1 ? "year" : "years"}
            </option>
          ))}
        </Form.Select>
        <Form.Control
          type="text"
          placeholder="Enter location"
          ref={locationRef}
        />
        <Button variant="primary" type="submit">
          Search
        </Button>
      </Form>
    </section>
  );
};

export default MainSearchBar;
