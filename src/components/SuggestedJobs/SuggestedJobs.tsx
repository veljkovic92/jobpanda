import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useSelector } from "react-redux";
import { Company } from "../../store/companies-slice";
import { RootState } from "../../store/index";
import classes from "./SuggestedJobs.module.scss";
import { GiRank3 } from "react-icons/gi";
import { GoLocation } from "react-icons/go";
import { IoIosPeople } from "react-icons/io";
import jobPandaLogo from "../../assets/jobpanda.png";
import { getAuth } from "firebase/auth";
import { useIdToken } from "react-firebase-hooks/auth";
import { child, get, getDatabase, ref } from "firebase/database";
import { IndustryItem } from "../../store/jobs-slice";
// I should make a customized list of suggested jobs depending on each user, depending on what they searched the most

const SuggestedJobs = () => {
  const companies = useSelector(
    (state: RootState) => state.companies.companies
  );
  const anyJobs = useSelector((state: RootState) => state.jobs.anyJobs);

  console.log(companies);

  type MatchingUser = {
    email: string;
    phoneNumber: string;
    username: string;
    profession: string;
    experience: string;
    country: string;
    city: string;
  };

  const auth = getAuth();
  const [user, loading, error] = useIdToken(auth);
  console.log(user);

  const dbRef = ref(getDatabase());

  useEffect(() => {
    get(child(dbRef, `users/${user?.uid}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
          setMatchingUser(snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [user]);

  const [matchingUser, setMatchingUser] = useState<MatchingUser | null>(null);

  let jobsToShowcase: IndustryItem[];

  if (companies !== undefined) {
    if (matchingUser) {
      // ovde stavi da izvlaci isti job kao sto je matchingUser profession
      jobsToShowcase = [...anyJobs].filter(
        (job) => matchingUser.profession === job.industry
      );
    } else {
      jobsToShowcase = [...anyJobs];
    }
  }

  const random5 = jobsToShowcase!.sort(() => 0.5 - Math.random()).slice(0, 5);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className={classes["suggested-jobs"]}>
      <h2>Jobs that match your profession</h2>
      <Carousel responsive={responsive}>
        {random5.length === 0 ? (
          <p>No jobs that match your profession were found.</p>
        ) : (
          random5.map((job) => {
            return (
              <div key={job.id}>
                <img src={job.logo || jobPandaLogo} />
                <h4>{job.industry}</h4>
                <span>{job.name}</span>
                <span>
                  <GiRank3 /> {job.rank}
                </span>
                <br />
                <span>
                  <GoLocation /> {job.city}
                </span>
                <span>
                  <IoIosPeople /> {job.totalEmployeesExact}
                </span>
              </div>
            );
          })
        )}
      </Carousel>
    </section>
  );
};

export default React.memo(SuggestedJobs);
