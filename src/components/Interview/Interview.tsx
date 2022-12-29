import React from "react";
import classes from "./Interview.module.scss";
import CompanyQuestions from "./CompanyQuestions/CompanyQuestions";
import RoleQuestions from "./RoleQuestions/RoleQuestions";

const Interview = () => {
  return (
    <main className={classes.interview}>
      <section className={classes["interview__left"]}>
        <h2>Prepare for your next interview</h2>
        <img />
      </section>
      <section className={classes["interview__middle"]}>
        <CompanyQuestions />
      </section>
      <section className={classes["interview__right"]}>
        <RoleQuestions />
      </section>
    </main>
  );
};

export default Interview;
