import React from "react";
import classes from "./Copyright.module.scss"

const Copyright = () => {
  return (
    <section className={classes.copyright}>
      <span>Copyright: Stefan</span>
      <span>
        All trademarks are the property of their respective owners All rights
        reserved © 2022 Info Edge (Pukovac) Ltd.
      </span>
    </section>
  );
};

export default Copyright;
