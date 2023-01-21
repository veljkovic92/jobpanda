import React from "react";
import classes from "./DiscoverJobs.module.scss";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { showDuplicates } from "../../helpers/allIndustriesFunctions";

// Here you should create a list of 6 most popular jobs and also the button that reroutes the user to the detailed page which lists all of the available jobs

const DiscoverJobs = () => {
  const companies = useSelector(
    (state: RootState) => state.companies.companies
  );

  const duplicates = showDuplicates(companies, "duplicate");

  return (
    <main className={classes["discover-jobs"]}>
      <section className={classes["discover-jobs__left"]}>
        <img />
        <h2>Discover jobs across popular roles</h2>
        <p>Select a role and we'll show you relevant jobs for it!</p>
      </section>
      <section className={classes["discover-jobs__right"]}>
        <Row xs={1} md={2} className="g-6">
          {duplicates.map((industry, idx) => (
            <Col key={idx}>
              <Card>
                <Card.Body>
                  <Card.Title>{industry.name}</Card.Title>
                  <Card.Text>{industry.count} jobs</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>
    </main>
  );
};

export default DiscoverJobs;
