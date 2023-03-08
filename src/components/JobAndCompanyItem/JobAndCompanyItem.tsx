import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Company } from "../../store/companies-slice";
import { IndustryItem } from "../../store/jobs-slice";
import { GiModernCity, GiRank3 } from "react-icons/gi";
import classes from "./JobAndCompanyItem.module.scss";
import { BsBuilding } from "react-icons/bs";
import { BiCurrentLocation } from "react-icons/bi";

const JobAndCompanyItem = (item: IndustryItem | Company) => {
  function isIndustryItemArray(
    item: IndustryItem | Company
  ): item is IndustryItem {
    return "industry" in item;
  }

  const jobName =
    isIndustryItemArray(item) &&
    item.industry.replace(/(^|-)([a-z])/g, (match, p1, p2) => {
      return p1 ? " " + p2.toUpperCase() : p2.toUpperCase();
    });

  return (
    <li key={item.id} className={classes["item"]}>
      <div className={classes["item__info"]}>
        <div className={classes["item__info__left"]}>
          <div className={classes["item__info__left__header"]}>
            {isIndustryItemArray(item) ? (
              <h2>
                <GiRank3 /> {jobName}
              </h2>
            ) : (
              ""
            )}
            {isIndustryItemArray(item) ? (
              <h5>
              <BsBuilding /> {item.name}
            </h5>
            ) : (
              <h2>
              <BsBuilding /> {item.name}
            </h2>
            )}
            
            <div className={classes["item__info__left__header__briefing"]}>
              {!isIndustryItemArray(item) ? (
                <p>
                  <BiCurrentLocation /> {item.country.nameEn}{" "}
                </p>
              ) : (
                <p>
                  <BiCurrentLocation /> {item.country}{" "}
                </p>
              )}
              {!isIndustryItemArray(item) ? (
                <p>
                  <GiModernCity /> {item.city.name}
                </p>
              ) : (
                <p>
                  <GiModernCity /> {item.city}
                </p>
              )}
            </div>
          </div>
          <div className={classes["item__info__left__body"]}>
            <p>{item.descriptionShort}</p>
          </div>
          <div className={classes["item__info__left__actions"]}>
            {!isIndustryItemArray(item) ? (
              <>
                <a href={`https://www.${item.domain}`}>
                  <Button variant="info">Website</Button>
                </a>
                <Link to={`${item.id}`}>
                  <Button variant="info">Details</Button>
                </Link>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className={classes["item__info__right"]}>
          <img
            src={item.logo}
            className={classes["item__info__right__image"]}
          />
          {isIndustryItemArray(item) && (
            <Link to={`${item.id}`}>
              <Button variant="info" className={classes["item__info__right__button"]}>Details</Button>
            </Link>
          )}
        </div>
      </div>
    </li>
  );
};

export default JobAndCompanyItem;
