import AnyJobItem from "../../components/JobItem/AnyJobItem";
import classes from "./Jobs.module.scss";

const Jobs = () => {
  return (
    <ul className={classes.jobs}>
      <AnyJobItem />
    </ul>
  );
};

export default Jobs;
