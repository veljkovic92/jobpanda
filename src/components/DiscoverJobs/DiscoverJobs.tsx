import React from "react";
import classes from "./DiscoverJobs.module.scss";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const DiscoverJobs = () => {
  return (
    <main className={classes["discover-jobs"]}>
      <section className={classes["discover-jobs__left"]}>
        <img />
        <h2>Discover jobs across popular roles</h2>
        <p>Select a role and we'll show you relevant jobs for it!</p>
      </section>
      <section className={classes["discover-jobs__right"]}>
        <Row xs={1} md={2} className="g-6">
          {Array.from({ length: 6 }).map((_, idx) => (
            <Col key={idx}>
              <Card>
                <Card.Body>
                  <Card.Title>Full Stack Developer</Card.Title>
                  <Card.Text>23.9K+ jobs</Card.Text>
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
