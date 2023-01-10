import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { Company } from "../../store/companies-slice";
import { VscTypeHierarchy } from "react-icons/vsc";
import classes from "./JobTypes.module.scss";

// Combine all arrays "industries" from each company and than pull random 10 to showcase. Add button to "show all industries" that reroutes to another page where all industries are being shown. Each industry can show directly below every company that has business in it or it can be clicked on and than again reroutes to that detailed page that shows every company

const JobTypes = () => {
  const companies = useSelector(
    (state: RootState) => state.companies.companies
  );
  let companiesToShowcase: Company[];

  if (companies !== undefined) {
    companiesToShowcase = [...companies];
  }
  let arrayOfAllIndustries: string[] = [];

  if (companies !== undefined) {
    for (let i = 0; i < companies.length; i++) {
      arrayOfAllIndustries = [
        ...arrayOfAllIndustries,
        ...companies[i].industries,
      ];
    }
  }

  let nonDuplicatedArrayOfAllIndustries = arrayOfAllIndustries.filter(
    (c, index) => {
      return arrayOfAllIndustries.indexOf(c) !== index;
    }
  );

  const random10 = nonDuplicatedArrayOfAllIndustries!
    .sort(() => 0.5 - Math.random())
    .slice(0, 10);

  return (
    <section className={classes["job-types"]}>
      {random10.map((industry, index) => (
        <div key={index}>
          <VscTypeHierarchy />
          <span>{industry}</span>
        </div>
      ))}
    </section>
  );
};

export default JobTypes;
