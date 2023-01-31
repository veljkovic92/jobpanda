import React from "react";
import classes from "./Interview.module.scss";
import CompanyQuestions from "./CompanyQuestions/CompanyQuestions";
import RoleQuestions from "./RoleQuestions/RoleQuestions";
import picture from "../../assets/interview.png";

// Trebas da dodas novi key 'interviewQuestions' sa array koji sadrzi razna pitanja. Taj jedan key-value treba da se umetne u svaki company object kao static placeholder i onda da se te vrednosti array-a mapiraju u section 'Interview'

const Interview = () => {
  return (
    <main className={classes.interview}>
      <section className={classes["interview__left"]}>
        <h2>Prepare for your next interview</h2>
        <img src={picture} />
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

export default React.memo(Interview);
