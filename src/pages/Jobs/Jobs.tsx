import AnyJobItem from "../../components/JobItem/AnyJobItem";
import classes from "../../pages/Results/Results.module.scss";

const Jobs = () => {
  return (
    <div className={classes.jobs}>
      <AnyJobItem />
    </div>
  );
};

export default Jobs;
