import Layout from "./components/layout/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login";
import { fetchCompanies } from "./components/FetchCompanies/fetchCompanies";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { FetchDataAction } from "./components/FetchCompanies/fetchCompanies";
import Results from "./pages/Results/Results";
import Jobs from "./pages/Jobs/Jobs";
import JobDetail from "./pages/JobDetail/JobDetail";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import { jobsSliceActions } from "./store/jobs-slice";
import allJobsList from "./helpers/allJobsList";
import Companies from "./pages/Companies/Companies";

const App = () => {
  const dispatch = useDispatch();
  const companies = useSelector(
    (state: RootState) => state.companies.companies
  );
  const searchTerms = useSelector(
    (state: RootState) => state.search.searchTerms
  );

  useEffect(() => {
    fetchCompanies(dispatch);
  }, []);

  // useEffect(() => {
  //   if (companies && companies.length > 0) {
  //     const allJobs = allJobsList(companies, searchTerms);
  //     dispatch(jobsSliceActions.addAnyJobs(allJobs));
  //   }
  // }, [companies, searchTerms]);

  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/results" element={<Results />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/jobs/:jobId" element={<JobDetail />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
