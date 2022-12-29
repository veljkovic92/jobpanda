import Layout from "./components/layout/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login";
import { fetchCompanies } from "./components/FetchCompanies/fetchCompanies";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import axios from "axios";

const App = () => {
  // const companies = useSelector(
  //   (state: RootState) => state.companies.companies
  // );
  // useEffect(() => {
  //   fetchCompanies();
  // }, []);
  // console.log(companies);
  // const [data, setData] = useState(null);
  // async function getUser() {
  //   try {
  //     const response = await axios.get(
  //       "https://api.thecompaniesapi.com/v1/companies?size=100&token=ahF0qg2s"
  //     );
  //     setData(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
  // getUser();
  // console.log(data);

  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<h1>Jobs</h1>} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
