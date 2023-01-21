import React from "react";
import classes from "./Home.module.scss"
import DiscoverJobs from "../../components/DiscoverJobs/DiscoverJobs";
import FeaturedCompanies from "../../components/FeaturedCompanies/FeaturedCompanies";

import JobTypes from "../../components/JobTypes/JobTypes";
import MainSearchBar from "../../components/MainSearchBar/MainSearchBar";
import SuggestedJobs from "../../components/SuggestedJobs/SuggestedJobs";
import TopCompanies from "../../components/TopCompanies/TopCompanies";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const Home = () => {
  const numOfCompanies = useSelector(
    (state: RootState) => state.companies.companies.length
  );

  return (
    <main>
       <div className={classes["home__intro"]}>
        <h1>Find your dream job now</h1>
        <p>{numOfCompanies} jobs for you to explore</p>
      </div>
      <MainSearchBar />
      <SuggestedJobs />
      <JobTypes />
      <TopCompanies />
      <FeaturedCompanies />
      <DiscoverJobs />
      
    </main>
  );
};

export default Home;
