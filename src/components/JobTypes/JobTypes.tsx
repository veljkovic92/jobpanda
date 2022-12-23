import React from "react";
import classes from "./JobTypes.module.scss"

const JobTypes = () => {
  return (
    <section className={classes["job-types"]}>
      {Array.from({ length: 12 }, (_, i) => i + 1).map((job) => (
        <div key={job}>Job</div>
      ))}
    </section>
  );
};

export default JobTypes;
