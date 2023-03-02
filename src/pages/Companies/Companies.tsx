import React from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PaginationItem from "../../components/JobItem/PaginationItem";
import { RootState } from "../../store";
import classes from "./Companies.module.scss";

const Companies = () => {
  const companies = useSelector(
    (state: RootState) => state.companies.companies
  );

  return (
    <ul className={classes.companies}>
<PaginationItem jobs={companies}/>
    </ul>
      
    
  );
};

export default Companies;
