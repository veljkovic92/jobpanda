import React from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../store";
import classes from "./Companies.module.scss";

const Companies = () => {
  const companies = useSelector(
    (state: RootState) => state.companies.companies
  );

  return (
    <ul className={classes.companies}>
      {companies.map((company, index) => (
        <li key={company.id} className={classes["companies__company"]}>
          <div className={classes["companies__company__info"]}>
            <div className={classes["companies__company__info__left"]}>
              <div
                className={classes["companies__company__info__left__header"]}
              >
                <h2>{company.name}</h2>
                <div
                  className={
                    classes["companies__company__info__left__header__briefing"]
                  }
                >
                  <p>{company.country.nameEn}</p>
                  <p>{company.city.name}</p>
                </div>
              </div>
              <div className={classes["companies__company__info__left__body"]}>
                <p>{company.descriptionShort}</p>
              </div>
              <div
                className={classes["companies__company__info__left__actions"]}
              >
                <a href={`https://www.${company.domain}`}>
                  <Button variant="info">Website</Button>
                </a>
                <Link to={`${company.id}`}>
                  <Button variant="info">Details</Button>
                </Link>
              </div>
            </div>
            <div className={classes["companies__company__info__right"]}>
              <img
                src={company.logo}
                className={classes["companies__company__info__right__image"]}
              />
              
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Companies;
