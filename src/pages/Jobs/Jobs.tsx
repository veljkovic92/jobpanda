import AnyJobsMap from "../../components/AnyJobsMap/AnyJobsMap";
import classes from "../../pages/Results/Results.module.scss";

const Jobs = () => {
  return (
    <div className={classes.jobs}>
      <AnyJobsMap />
    </div>
  );
};

export default Jobs;
