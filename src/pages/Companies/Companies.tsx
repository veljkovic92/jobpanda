import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import classes from "./Companies.module.scss";

const Companies = () => {
  const companies = useSelector(
    (state: RootState) => state.companies.companies
  );

  return (
    <ul>
      {companies.map((company, index) => (
        <li key={index} className={classes.company}>
          <div className={classes["company__left"]}>
            <div className={classes["company__left__header"]}>
              <h1>{company.name}</h1>
            </div>
            <div className={classes["company__left__body"]}>
              <p>{company.descriptionShort}</p>
            </div>
            <div className={classes["company__left__footer"]}>
              <p>{company.country.nameEn}</p>
              <p>{company.city.name}</p>
              <p>{company.domain}</p>
            </div>
          </div>
          <div className={classes["company__right"]}>
            <img
              src={company.logo}
              className={classes["company__right__image"]}
            />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Companies;
