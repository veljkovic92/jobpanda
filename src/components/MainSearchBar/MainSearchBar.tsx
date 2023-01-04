import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import classes from "./MainSearchBar.module.scss";
import { BsSearch } from "react-icons/bs";
import React, { useRef, useState } from "react";
import { type } from "@testing-library/user-event/dist/type";
import { useDispatch } from "react-redux";
import { searchSliceActions } from "../../store/search-slice";
import Exclude from "util/types";

const MainSearchBar = () => {
  const dispatch = useDispatch();

  // Da li moze ovaj pristup da se bolje odradi/uprosti.
  // "Null" u useRef, "Exclude" u "SearchTerms" type, i ternary operator koji sadrzi "undefined"

  const skillRef = useRef<HTMLInputElement>(null);
  const experienceRef = useRef<HTMLSelectElement>(null);
  const locationRef = useRef<HTMLInputElement>(null);

  type SearchTerms = {
    skill?: string;
    experience?: Exclude<string | number | undefined, undefined>;
    location?: string;
  };

  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const skill = skillRef.current?.value;
    const experience =
      experienceRef.current?.value === "Any experience"
        ? "any"
        : typeof experienceRef.current?.value === "string"
        ? +experienceRef.current?.value
        : undefined;
    const location = locationRef.current?.value;

    const searchTerms: SearchTerms = {
      skill,
      experience,
      location,
    };
    console.log(searchTerms);

    dispatch(searchSliceActions.searchTerm(searchTerms));
  };

  return (
    <section className={classes.search}>
      <div className={classes["search__intro"]}>
        <h1>Find your dream job now</h1>
        <p>5k+ jobs for you to explore</p>
      </div>

      <Form className={classes["search__form"]} onSubmit={onSubmitHandler}>
        <BsSearch size="80px" />
        <Form.Control
          type="text"
          placeholder="Enter skills / designations / companies"
          ref={skillRef}
        />
        <Form.Select aria-label="Default select example" ref={experienceRef}>
          <option disabled selected hidden>
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
