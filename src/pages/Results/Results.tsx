import { useSelector } from "react-redux";
import MainSearchBar from "../../components/MainSearchBar/MainSearchBar";
import { RootState } from "../../store";
import classes from "./Results.module.scss";
import AnyJobItem from "../../components/JobItem/AnyJobItem";
import SpecificJobItem from "../../components/JobItem/SpecificJobItem";

const Results = () => {
  const searchTerms = useSelector(
    (state: RootState) => state.search.searchTerms
  );

  const jobsMap =
    searchTerms.skill === "" &&
    searchTerms.experience === "" &&
    searchTerms.country === "" &&
    searchTerms.company === "" &&
    searchTerms.city === "" ? (
      <AnyJobItem />
    ) : (
      <SpecificJobItem />
    );

  return (
    <>
      <MainSearchBar />

      <div className={classes.jobs}>{jobsMap}</div>
    </>
  );
};

export default Results;
