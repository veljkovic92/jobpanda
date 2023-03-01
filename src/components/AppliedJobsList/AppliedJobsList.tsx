import React, { useEffect, useState } from "react";
import { getDatabase, ref, update, child, get } from "firebase/database";
import { IndustryItem } from "../../store/jobs-slice";
import { useIdToken } from "react-firebase-hooks/auth";
import { getAuth, signOut, updateProfile } from "firebase/auth";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import classes from "./AppliedJobsList.module.scss";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const AppliedJobsList = () => {
  const auth = getAuth();
  const [user, loading, error] = useIdToken(auth);

  const allJobs = useSelector((state: RootState) => state.jobs.anyJobs);

  const [allAppliedJobs, setAllAppliedJobs] = useState<IndustryItem[] | null>(
    null
  );

  const dbRef = ref(getDatabase());

  useEffect(() => {
    get(child(dbRef, `users/${user?.uid}/applied_jobs`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setAllAppliedJobs(snapshot.val());
        } else {
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const mapAppliedJobs =
    allAppliedJobs && Object.keys(allAppliedJobs).map((job) => job);

  const listAllAppliedJobs =
    mapAppliedJobs &&
    allJobs.filter((job) => {
      for (let i = 0; i < mapAppliedJobs.length; i++) {
        if (job.id == mapAppliedJobs[i]) {
          return job;
        }
      }
    });
  // I should add additional 'Link' element that takes user to the company of the job it was clicked on
  return (
    <div className={classes["applied-jobs"]}>
      <h2>Previously applied jobs</h2>
      <ul className={classes["applied-jobs__list"]}>
        {listAllAppliedJobs &&
          listAllAppliedJobs.map((job) => (
            <li className={classes["applied-jobs__list__item"]}>
              <div className={classes["applied-jobs__list__item__details"]}>
                <div
                  className={classes["applied-jobs__list__item__details__left"]}
                >
                  <p>
                    Company:
                    <br />
                    <strong>
                      <em>{job?.name}</em>
                    </strong>
                  </p>
                  <p>
                    Job:
                    <br />
                    <strong>
                      <em>{job?.industry}</em>
                    </strong>
                  </p>
                </div>
                <div
                  className={
                    classes["applied-jobs__list__item__details__right"]
                  }
                >
                  <img src={job?.logo} />
                </div>
              </div>

              <div className={classes["applied-jobs__list__item__actions"]}>
                <Link to={`/jobs/${job.id}`}>To this Job</Link>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default AppliedJobsList;
