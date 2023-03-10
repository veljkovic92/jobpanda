import React from "react";
import classes from "./FeaturedCompanies.module.scss";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";
import { ImPower } from "react-icons/im";
import { IoIosPeople } from "react-icons/io";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import jobPandaLogo from "../../assets/jobpanda.png"

const FeaturedCompanies = () => {
  const companies = useSelector(
    (state: RootState) => state.companies.companies
  );

  const companiesToSort = [...companies];

  const top4 = companiesToSort
    .sort((a, b) => a.alexaRank - b.alexaRank)
    .slice(0, 10)
    .sort(() => 0.5 - Math.random())
    .slice(0, 4);

  // Probaj da izvuces ceo ovaj MAP u komponenti i onda u return samo izbacis rezultat

  return (
    <section className={classes["featured-companies"]}>
      <h2>Featured companies actively hiring</h2>
      <CardGroup className={classes[""]}>
        {top4.map((company) => {
          return (
            <Card key={company.id}>
              <Card.Img variant="top" src={company.logo || jobPandaLogo} />
              <Card.Body>
                <Card.Title>{company.name}</Card.Title>
                <Card.Text>
                  <span>
                    <IoIosPeople /> {company.alexaRank}
                  </span>
                  <span>
                    <ImPower /> {company.industryMain}
                  </span>
                </Card.Text>
                <Card.Text>
                  {company.descriptionShort
                    .substring(0, 70)
                    .substring(
                      0,
                      Math.min(
                        70,
                        company.descriptionShort
                          .substring(0, 70)
                          .lastIndexOf(" ")
                      )
                    )
                    .concat("...")}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant="secondary">View Jobs</Button>
              </Card.Footer>
            </Card>
          );
        })}
      </CardGroup>

      {/* Create a rerouting to more detailed page on click on button and show all of the available industries for clicked company (maybe take company name to pull data in details page) */}

      <Button
        variant="outline-info"
        className={classes["featured-companies__view"]}
      >
        View All Companies
      </Button>
    </section>
  );
};

export default React.memo(FeaturedCompanies);
