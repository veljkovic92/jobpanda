import Layout from "./components/layout/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login";
import { fetchCompanies } from "./components/FetchCompanies/fetchCompanies";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { FetchDataAction } from "./components/FetchCompanies/fetchCompanies";
import Results from "./pages/Results/Results";

const App = () => {
  const dispatch = useDispatch<Dispatch<FetchDataAction>>();
  const companies = useSelector(
    (state: RootState) => state.companies.companies
  );
  useEffect(() => {
    // dispatch(fetchCompanies());
    fetchCompanies(dispatch);
  }, []);
  
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="results" element={<Results />} />
          <Route path="/jobs" element={<h1>Jobs</h1>} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
