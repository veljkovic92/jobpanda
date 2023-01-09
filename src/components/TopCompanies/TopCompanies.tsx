import React from "react";
import classes from "./TopCompanies.module.scss";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { useSelector } from "react-redux";
import { RootState } from "../../store/index";
import { type } from "@testing-library/user-event/dist/type";
import { sortCompanies } from "../../helpers/sortCompanies";
import { sortRandomAndSliceFour } from "../../helpers/sortRandomAndSliceFour";
// Izvuci top 10 kompanija sa najboljom Alexa ocenom i onda izbaci randomnih 4 koje se prikazuju kao Top companies

// izbaci computer-software, finance, machinery, insurance iz industries
const TopCompanies = () => {
  const companies = useSelector(
    (state: RootState) => state.companies.companies
  );

  const companiesToSort = [...companies];

  const computerSoftwareCompanies = sortCompanies(
    companiesToSort,
    "computer-software"
  );
  const financeCompanies = sortCompanies(companiesToSort, "finance");
  const machineryCompanies = sortCompanies(companiesToSort, "machinery");
  const industryCompanies = sortCompanies(companiesToSort, "industry");

  const featuredTopComputerSoftwareCompanies = sortRandomAndSliceFour(
    computerSoftwareCompanies
  );
  const featuredTopFinanceCompanies = sortRandomAndSliceFour(financeCompanies);
  const featuredTopMachineryCompanies =
    sortRandomAndSliceFour(machineryCompanies);
  const featuredTopIndustryCompanies =
    sortRandomAndSliceFour(industryCompanies);

  //   .slice(0, 4);
  // const top10 = companiesToSort
  //   .sort((a, b) => a.alexaRank - b.alexaRank)
  //   .slice(0, 10)
  //   .sort(() => 0.5 - Math.random())
  //   .slice(0, 4);

  return (
    <section className={classes["top-companies"]}>
      <h2 className={classes["top-companies__header"]}>
        Top companies hiring now
      </h2>
      <CardGroup>
        <Card>
          <Card.Body>
            <Card.Title>Computer Software</Card.Title>
            <Card.Text>
              {computerSoftwareCompanies.length} are actively hiring
            </Card.Text>
          </Card.Body>
          <Card.Footer className={classes["top-companies__card__footer"]}>
            {featuredTopComputerSoftwareCompanies.map((company) => {
              return (
                <Card.Img
                  variant="top"
                  src={company.logo}
                  className={classes["top-companies__card__footer__img"]}
                  key={company.id}
                />
              );
            })}
          </Card.Footer>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Finance</Card.Title>
            <Card.Text>{financeCompanies.length} are actively hiring</Card.Text>
          </Card.Body>
          <Card.Footer>
            {featuredTopFinanceCompanies.map((company) => {
              return (
                <Card.Img
                  variant="top"
                  src={company.logo}
                  className={classes["top-companies__card__footer__img"]}
                  key={company.id}
                />
              );
            })}
           
          </Card.Footer>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Machinery</Card.Title>
            <Card.Text>
              {machineryCompanies.length} are actively hiring
            </Card.Text>
          </Card.Body>
          <Card.Footer>
          {featuredTopMachineryCompanies.map((company) => {
              return (
                <Card.Img
                  variant="top"
                  src={company.logo}
                  className={classes["top-companies__card__footer__img"]}
                  key={company.id}
                />
              );
            })}
          </Card.Footer>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Industry</Card.Title>
            <Card.Text>
              {industryCompanies.length} are actively hiring
            </Card.Text>
          </Card.Body>
          <Card.Footer>
          {featuredTopIndustryCompanies.map((company) => {
              return (
                <Card.Img
                  variant="top"
                  src={company.logo}
                  className={classes["top-companies__card__footer__img"]}
                  key={company.id}
                />
              );
            })}
          </Card.Footer>
        </Card>
      </CardGroup>
    </section>
  );
};

export default TopCompanies;
