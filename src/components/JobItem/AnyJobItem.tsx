import { filterCompanies } from "../../helpers/filterCompanies";
import resultsOutput from "../../helpers/specificJobsList";
import classes from "../../pages/Results/Results.module.scss";
import { useEffect, useState } from "react";
import Pagination from "react-paginate";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useNavigate } from "react-router";
import PaginationItem from "./PaginationItem";

const AnyJobItem = () => {
  const anyJobs = useSelector((state: RootState) => state.jobs.anyJobs);

  const navigate = useNavigate();
  const onJobClickHandler = (index: number) => {
    navigate(`${index}`);
  };

  // const anyJobsMap = anyJobs.map((industry, index) => (
  //   <div
  //     key={index}
  //     className={classes.job}
  //     onClick={() => onJobClickHandler(index)}
  //   >
  //     <div className={classes["job__left"]}>
  //       <div className={classes["job__left__header"]}>
  //         <h1>{industry.industry}</h1>
  //         <p>{industry.name}</p>
  //       </div>

  //       <div className={classes["job__left__body"]}>
  //         <p>{industry.descriptionShort}</p>
  //       </div>
  //       <div className={classes["job__left__footer"]}>
  //         <p>{industry.country}</p>
  //         <p>{industry.city}</p>
  //         <p>{industry.domain}</p>
  //       </div>
  //     </div>
  //     <div className={classes["job__right"]}>
  //       <img src={industry.logo} className={classes["job__right__image"]} />
  //     </div>
  //   </div>
  // ));

  // const [currentPage, setCurrentPage] = useState(0);
  // const objectsPerPage = 20;
  // const totalPages = Math.ceil(anyJobsMap.length / objectsPerPage);
  // const currentAllJobs = .slice(
  //   currentPage * objectsPerPage,
  //   (currentPage + 1) * objectsPerPage
  // );

  // const handlePageChange = (page: { selected: number }) => {
  //   setCurrentPage(page.selected);
  // };

  return <PaginationItem jobs={anyJobs} />;
};

export default AnyJobItem;
