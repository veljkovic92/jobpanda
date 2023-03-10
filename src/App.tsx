import Layout from "./components/layout/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import { fetchCompanies } from "./components/FetchCompanies/fetchCompanies";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { FetchDataAction } from "./components/FetchCompanies/fetchCompanies";
import Results from "./pages/Results/Results";
import Jobs from "./pages/Jobs/Jobs";
import JobDetail from "./pages/JobDetail/JobDetail";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import { IndustryItem, jobsSliceActions } from "./store/jobs-slice";
import allJobsList from "./helpers/allJobsList";
import Companies from "./pages/Companies/Companies";
import Register from "./pages/Register/Register";
import Profile from "./pages/Profile/Profile";
import { getDatabase, ref, child, get } from "firebase/database";
import CompanyDetails from "./pages/CompanyDetails/CompanyDetails";

const App = () => {
  const dispatch = useDispatch();

  const searchTerms = useSelector(
    (state: RootState) => state.search.searchTerms
  );

  const dbRef = ref(getDatabase());
  const [allJobs, setAllJobs] = useState<IndustryItem[] | null>(null);

  useEffect(() => {
    fetchCompanies(dispatch);

    get(child(dbRef, `jobs`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          dispatch(jobsSliceActions.addAnyJobs(snapshot.val()));
        } else {
        }
      })
      .catch((error) => {
        console.error(error);
      });
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
          <Route path="/companies/:companyId" element={<CompanyDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
