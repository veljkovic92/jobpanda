import React from "react";
import { FaCity, FaInternetExplorer } from "react-icons/fa";
import { ImPower } from "react-icons/im";
import { IoIosPeople } from "react-icons/io";
import { MdLocationSearching, MdOutlineQueryBuilder } from "react-icons/md";
import { BiCurrentLocation } from "react-icons/bi";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { RootState } from "../../store";
import { AiFillPhone } from "react-icons/ai";
import { BsBuilding } from "react-icons/bs";
import classes from "./JobDetail.module.scss";
import JobApplicationForm from "../../components/JobApplicationForm/JobApplicationForm";

const JobDetail = () => {
  const params = useParams();
  const allJobs = useSelector((state: RootState) => state.jobs.anyJobs);

  console.log(params.jobId);

  const selectedJob = allJobs.find((job) => job.id === params.jobId);

  return (
    <div className={classes["job-details"]}>
      <section className={classes["job-details__job-section"]}>
        <h1>{selectedJob?.industry}</h1>
        <div className={classes["job-details__job-section__info"]}>
          <span>Experience wanted: {selectedJob?.experienceWanted}</span>
          <span>Location: {selectedJob?.city}</span>
        </div>
      </section>
      <section className={classes["job-details__company-section"]}>
        <h3>Company Info</h3>
        <div className={classes["job-details__company-section__info"]}>
          <div className={classes["job-details__company-section__info__left"]}>
            <span>
              <BsBuilding /> {selectedJob?.name}
            </span>
            <span>
              <IoIosPeople /> {selectedJob?.rank}
            </span>
            <span>
              <MdLocationSearching /> {selectedJob?.continent}
            </span>
            <span>
              <BiCurrentLocation /> {selectedJob?.country}
            </span>
          </div>
          <div className={classes["job-details__company-section__info__right"]}>
            <span>
              <FaInternetExplorer /> {selectedJob?.domain}
            </span>
            <span>
              <AiFillPhone /> {selectedJob?.phoneNumber}
            </span>
            <span>
              <IoIosPeople /> {selectedJob?.totalEmployeesExact}
            </span>
            <span>
              <MdOutlineQueryBuilder /> {selectedJob?.yearFounded}
            </span>
          </div>
          <div>
            <img src={selectedJob?.logo} />
          </div>
        </div>
      </section>
      <section className={classes["job-details__job-desc"]}>
        <h3>Company Description</h3>
        <p>{selectedJob?.desc}</p>
      </section>
      <section>
        <JobApplicationForm />
      </section>
    </div>
  );
};

export default JobDetail;
