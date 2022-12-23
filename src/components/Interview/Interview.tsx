import React from "react";
import classes from "./Interview.module.scss"
import CompanyQuestions from "./CompanyQuestions/CompanyQuestions";
import RoleQuestions from "./RoleQuestions/RoleQuestions";

const Interview = () => {
  return (
    <main className={classes.interview}>
      <section>
        <h2>Prepare for your next interview</h2>
        <img />
      </section>
      <section>
        <CompanyQuestions />
      </section>
      <section>
        <RoleQuestions />
      </section>
    </main>
  );
};

export default Interview;
