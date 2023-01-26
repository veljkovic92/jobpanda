import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import classes from "./MainSearchBar.module.scss";
import { BsSearch } from "react-icons/bs";
import React, { useRef, useState } from "react";
import { type } from "@testing-library/user-event/dist/type";
import { useDispatch } from "react-redux";
import { searchSliceActions, SearchType } from "../../store/search-slice";
import Exclude from "util/types";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useNavigate } from "react-router";
import { filterCompanies } from "../../helpers/filterCompanies";
import { jobsSliceActions } from "../../store/jobs-slice";
import { companiesActions } from "../../store/companies-slice";
import allJobsList from "../../helpers/allJobsList";
import { InputGroup } from "react-bootstrap";
import { GiSettingsKnobs } from "react-icons/gi";

const MainSearchBar = () => {
  const dispatch = useDispatch();
  const companies = useSelector(
    (state: RootState) => state.companies.companies
  );
  const navigate = useNavigate();

  const [skill, setSkill] = useState("");
  const [experience, setExperience] = useState("");
  const [location, setLocation] = useState("");
  const [company, setCompany] = useState("");
  const [city, setCity] = useState("");

  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const searchTerms: SearchType = {
      skill,
      experience,
      location,
      company,
      city,
    };

    dispatch(searchSliceActions.searchTerms(searchTerms));

    const filteredCompanies = filterCompanies(companies, searchTerms);
    dispatch(companiesActions.addFilteredCompanies(filteredCompanies));

    if (skill !== "" || experience !== "" || location !== "") {
      const specificJobsList = allJobsList(filteredCompanies);
      dispatch(jobsSliceActions.addSpecificJobs(specificJobsList));
    }

    navigate("/results");
  };
  const [isMoreFiltersClicked, setIsMoreFiltersClicked] = useState(false);

  // stilizuj reakciju filtera u CSS
  return (
    <section className={classes.search}>
      <Form className={classes["search__form"]} onSubmit={onSubmitHandler}>
        <div className={classes["search__form__top"]}>
          <BsSearch style={{ width: "200px" }} />
          <Form.Control
            type="text"
            placeholder="Enter skills / designations / companies"
            onChange={(e) => setSkill(e.target.value)}
            value={skill}
          />
          <Form.Select
            aria-label="Default select example"
            onChange={(e) => setExperience(e.target.value)}
            placeholder="Select"
          >
            <option disabled selected>
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
            onChange={(e) => setLocation(e.target.value)}
            value={location}
          />
          <Button variant="primary" type="submit">
            Search
          </Button>
          <Button
            onClick={() => setIsMoreFiltersClicked((prevVal) => !prevVal)}
          >
            <GiSettingsKnobs />
          </Button>
        </div>
        <div className={classes["search__form__bot"]}>
          <div
            className={`${classes["search__form__bot__more-filters"]}
              ${
                isMoreFiltersClicked
                  ? classes["search__form__bot__more-filters-clicked"]
                  : ""
              }
            `}
          >
            <Form.Control
              type="text"
              placeholder="Enter Company"
              onChange={(e) => setCompany(e.target.value)}
              value={company}
            />
            <Form.Control
              type="text"
              placeholder="Enter City"
              onChange={(e) => setCity(e.target.value)}
              value={city}
            />
          </div>
        </div>
      </Form>
    </section>
  );
};

export default MainSearchBar;
