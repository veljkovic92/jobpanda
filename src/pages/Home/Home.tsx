import React from "react";
import DiscoverJobs from "../../components/DiscoverJobs/DiscoverJobs";
import FeaturedCompanies from "../../components/FeaturedCompanies/FeaturedCompanies";

import JobTypes from "../../components/JobTypes/JobTypes";
import MainSearchBar from "../../components/MainSearchBar/MainSearchBar";
import SuggestedJobs from "../../components/SuggestedJobs/SuggestedJobs";
import TopCompanies from "../../components/TopCompanies/TopCompanies";

const Home = () => {
  return (
    <main>
      
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
