import React from "react";
import { Button } from "react-bootstrap";
import { AiFillPhone } from "react-icons/ai";
import { BiCurrentLocation } from "react-icons/bi";
import { BsBuilding } from "react-icons/bs";
import { FaInternetExplorer } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { MdLocationSearching, MdOutlineQueryBuilder } from "react-icons/md";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import { RootState } from "../../store";
import classes from "./CompanyDetails.module.scss";

const CompanyDetails = () => {
  const companies = useSelector(
    (state: RootState) => state.companies.companies
  );
  const navigate = useNavigate();

  const params = useParams();

  const onRerouteHandler = (event: string) => {
    const selectedJob = allJobs.find(
      (job) => job.name === selectedCompany?.name && job.industry === event
    );

    navigate(`/jobs/${selectedJob?.id}`);
  };

  const selectedCompany = companies.find(
    (company) => company.id.toString() === params.companyId
  );

  const allJobs = useSelector((state: RootState) => state.jobs.anyJobs);

  const selectedCompanyJobMap = selectedCompany?.industries.map((job) => {
    return (
      <li
        onClick={() => onRerouteHandler(job)}
        className={classes["company-details__job-desc__jobs-list__job-item"]}
      >
        <span>{job}</span>
      </li>
    );
  });

  return (
    <div className={classes["company-details"]}>
      <section className={classes["company-details__company-section"]}>
        <h1>Company Info</h1>
        <div className={classes["company-details__company-section__info"]}>
          <div
            className={classes["company-details__company-section__info__left"]}
          >
            <span>
              <BsBuilding /> {selectedCompany?.name}
            </span>
            <span>
              <IoIosPeople /> {selectedCompany?.alexaRank}
            </span>
            <span>
              <MdLocationSearching /> {selectedCompany?.continent.nameEn}
            </span>
            <span>
              <BiCurrentLocation /> {selectedCompany?.country.nameEn}
            </span>
          </div>
          <div
            className={classes["company-details__company-section__info__right"]}
          >
            <span>
              <FaInternetExplorer /> {selectedCompany?.domain}
            </span>
            <span>
              <AiFillPhone /> {selectedCompany?.phoneNumber}
            </span>
            <span>
              <IoIosPeople /> {selectedCompany?.totalEmployeesExact}
            </span>
            <span>
              <MdOutlineQueryBuilder /> {selectedCompany?.yearFounded}
            </span>
          </div>
          <div>
            <img src={selectedCompany?.logo} />
          </div>
        </div>
      </section>
      <section className={classes["company-details__job-desc"]}>
        <h3>Company Description</h3>
        <p>{selectedCompany?.description}</p>
      </section>
      <section>
        <h3>Available positions:</h3>
        <ul className={classes["company-details__job-desc__jobs-list"]}>
          {selectedCompanyJobMap}
        </ul>
      </section>
    </div>
  );
};

export default CompanyDetails;
