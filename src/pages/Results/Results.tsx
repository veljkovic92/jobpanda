import { useSelector } from "react-redux";
import MainSearchBar from "../../components/MainSearchBar/MainSearchBar";
import { RootState } from "../../store";
import classes from "./Results.module.scss";
import AnyJobItem from "../../components/JobItem/AnyJobItem";
import SpecificJobItem from "../../components/JobItem/SpecificJobItem";
import FilterJobs from "../../components/FilterJobs/FilterJobs";

const Results = () => {
  const searchTerms = useSelector(
    (state: RootState) => state.search.searchTerms
  );

  const jobsMap =
    searchTerms.skill === "any" ? <AnyJobItem /> : <SpecificJobItem />;

  return (
    <>
      <MainSearchBar />
      <FilterJobs />
      <div className={classes.jobs}>{jobsMap}</div>
    </>
  );
};

export default Results;
