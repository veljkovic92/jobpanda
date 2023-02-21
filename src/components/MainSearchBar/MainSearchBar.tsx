import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import classes from "./MainSearchBar.module.scss";
import { BsSearch } from "react-icons/bs";
import React, { useEffect, useRef, useState } from "react";
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
import specificJobsList from "../../helpers/specificJobsList";
import { InputGroup } from "react-bootstrap";
import { GiSettingsKnobs } from "react-icons/gi";

const MainSearchBar = () => {
  const dispatch = useDispatch();
  const companies = useSelector(
    (state: RootState) => state.companies.companies
  );
  const anyJobs = useSelector((state:RootState) => state.jobs.anyJobs)
  const {
    skill: localSkill,
    experience: localExperience,
    country: localCountry,
    company: localCompany,
    city: localCity,
  } = useSelector((state: RootState) => state.search.searchTerms);

  const navigate = useNavigate();

  const [skill, setSkill] = useState(localSkill);
  const [experience, setExperience] = useState(localExperience);
  const [country, setCountry] = useState(localCountry);
  const [company, setCompany] = useState(localCompany);
  const [city, setCity] = useState(localCity);

  // Ovde trebas da dodas svaki onChangeHandler umesto inline dole u tsx code da bude ovde, da bi na svaki change se update npr. skill kroz setSkill i plus dispatch promena direktno u Redux state. Ovo sve da bi state ostao uvek up to date sa promenama direktno.
  const onSkillChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const skill = event.target.value;
    setSkill(skill);
    dispatch(searchSliceActions.addSkillFilter(skill));
  };

  const onExperienceChangeHandler = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const experience = event.target.value;
    setExperience(experience);
    dispatch(searchSliceActions.addExperienceFilter(experience));
  };

  const onCountryChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const country = event.target.value;
    setCountry(country);
    dispatch(searchSliceActions.addCountryFilter(country));
  };

  const onCompanyChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const company = event.target.value;
    setCompany(company);
    dispatch(searchSliceActions.addCompanyFilter(company));
  };

  const onCityChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const city = event.target.value;
    setCity(city);
    dispatch(searchSliceActions.addCityFilter(city));
  };

  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const searchTerms: SearchType = {
      skill,
      experience,
      country,
      company,
      city,
    };

    dispatch(searchSliceActions.searchTerms(searchTerms));

    const filteredCompanies = filterCompanies(companies, searchTerms);
    dispatch(companiesActions.addFilteredCompanies(filteredCompanies));
    // Ova logika ispod dodaje pravi listu o specificnim poslovima na osnovu liste filtriranih kompanija. To je problem jer ukoliko imam npr. filter za "skill" onda se on ne uzima u obzir vec se sve kompanije mapiraju i svi poslovi renderuju. Meni treba da ponovo predje filter kroz filtered companies i da uporedi sta postoji od filtera i ostavi samo one jobs u specificJobsList koji se slazu sa filterom.
    if (
      skill !== "" ||
      experience !== "" ||
      !isNaN(+experience) ||
      country !== "" ||
      company !== "" ||
      city !== ""
    ) {
      const specificJobs = specificJobsList(anyJobs, searchTerms);
      dispatch(jobsSliceActions.addSpecificJobs(specificJobs));
    }

    navigate("/results");
  };
  const [isMoreFiltersClicked, setIsMoreFiltersClicked] = useState(false);

  // stilizuj reakciju filtera u CSS
  // Napravi da experience se pokazuje na onaj koji je odabran na reroute i refresh
  return (
    <section className={classes.search}>
      <Form className={classes["search__form"]} onSubmit={onSubmitHandler}>
        <div className={classes["search__form__top"]}>
          <BsSearch style={{ width: "200px" }} />
          <Form.Control
            type="text"
            placeholder="Enter skills / designations / companies"
            onChange={onSkillChangeHandler}
            value={skill}
          />
          <Form.Select
            aria-label="Default select example"
            onChange={onExperienceChangeHandler}
          >
            {experience ? (
              <option disabled selected>{experience} years</option>
            ) : (
              <option disabled selected>Select experience</option>
            )}

            <option>Any experience</option>
            {Array.from({ length: 30 }, (_, i) => i + 1).map((option) => (
              <option value={option} key={option}>
                {option} {option === 1 ? "year" : "years"}
              </option>
            ))}
          </Form.Select>
          <Form.Control
            type="text"
            placeholder="Enter Country"
            onChange={onCountryChangeHandler}
            value={country}
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
              onChange={onCompanyChangeHandler}
              value={company}
            />
            <Form.Control
              type="text"
              placeholder="Enter City"
              onChange={onCityChangeHandler}
              value={city}
            />
          </div>
        </div>
      </Form>
    </section>
  );
};

export default MainSearchBar;
