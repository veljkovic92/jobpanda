import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useSelector } from "react-redux";
import { Company } from "../../store/companies-slice";
import { RootState } from "../../store/index";
import classes from "./SuggestedJobs.module.scss";
import { GiRank3 } from "react-icons/gi";
import { GoLocation } from "react-icons/go";
import { IoIosPeople } from "react-icons/io";

// I should make a customized list of suggested jobs depending on each user, depending on what they searched the most

const SuggestedJobs = () => {
  const companies = useSelector(
    (state: RootState) => state.companies.companies
  );
  let companiesToShowcase: Company[];

  if (companies !== undefined) {
    companiesToShowcase = [...companies];
  }

  const random5 = companiesToShowcase!
    .sort(() => 0.5 - Math.random())
    .slice(0, 5);
  

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className={classes["suggested-jobs"]}>
      <h2>Jobs you may be interested in</h2>
      <Carousel responsive={responsive}>
        {random5.map((company) => {
          return (
            <div key={company.id}>
              <img src={company.logo} />
              <h4>
                {company.industries[Math.floor(Math.random() * random5.length)]}
              </h4>
              <span>{company.name}</span>
              <span>
                <GiRank3 /> {company.alexaRank}
              </span>
              <br />
              <span>
                <GoLocation /> {company.city.name}
              </span>
              <span>
                <IoIosPeople /> {company.totalEmployeesExact}
              </span>
            </div>
          );
        })}
      </Carousel>
    </section>
  );
};

export default SuggestedJobs;
