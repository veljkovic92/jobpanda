import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Company } from '../../store/companies-slice'
import { IndustryItem } from '../../store/jobs-slice'
import classes from "./JobAndCompanyItem.module.scss"

const JobAndCompanyItem = (item: IndustryItem | Company) => {

  function isIndustryItemArray(
    item: IndustryItem | Company
  ): item is IndustryItem {
    return "industry" in item;
  }

  
    return (
      <li key={item.id} className={classes["item"]}>
            <div className={classes["item__info"]}>
              <div className={classes["item__info__left"]}>
                <div className={classes["item__info__left__header"]}>
                  {isIndustryItemArray(item) ?  <h1>{item.industry}</h1> : ""}
                  <h2>{item.name}</h2>
                  <div
                    className={classes["item__info__left__header__briefing"]}
                  >
                    {!isIndustryItemArray(item) ? <p>{item.country.nameEn} </p>: <p>{item.country} </p>}
                    {!isIndustryItemArray(item) ? <p>{item.city.name}</p>: <p>{item.city}</p>}
                    
                  </div>
                </div>
                <div className={classes["item__info__left__body"]}>
                  <p>{item.descriptionShort}</p>
                </div>
                <div className={classes["item__info__left__actions"]}>
                  {!isIndustryItemArray(item) ? <a href={`https://www.${item.domain}`}>
                    <Button variant="info">Website</Button>
                  </a> : ""}
                  <Link to={`${item.id}`}>
                    <Button variant="info">Details</Button>
                  </Link>
                </div>
              </div>
              <div className={classes["item__info__right"]}>
                <img
                  src={item.logo}
                  className={classes["item__info__right__image"]}
                />
              </div>
            </div>
          </li>
    )
  
  
}

export default JobAndCompanyItem