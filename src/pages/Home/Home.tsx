import React from "react";
import DiscoverJobs from "../../components/DiscoverJobs/DiscoverJobs";
import FeaturedCompanies from "../../components/FeaturedCompanies/FeaturedCompanies";
import Interview from "../../components/Interview/Interview";
import JobTypes from "../../components/JobTypes/JobTypes";
import MainSearchBar from "../../components/MainSearchBar/MainSearchBar";
import SuggestedJobs from "../../components/SuggestedJobs/SuggestedJobs";
import TopCompanies from "../../components/TopCompanies/TopCompanies";

const Home = () => {
  return (
    <main>
      <h1>Find your dream job now</h1>
      <p>5k+ jobs for you to explore</p>
      <MainSearchBar />
      <SuggestedJobs />
      <JobTypes />
      <TopCompanies />
      <FeaturedCompanies />
      <DiscoverJobs />
      <Interview />
    </main>
  );
};

export default Home;
