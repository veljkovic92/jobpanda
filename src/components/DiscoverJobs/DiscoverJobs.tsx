import React from "react";
import classes from "./DiscoverJobs.module.scss";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const DiscoverJobs = () => {
  return (
    <main className={classes["discover-jobs"]}>
      <section>
        <img />
        <h2>Discover jobs across popular roles</h2>
        <p>Select a role and we'll show you relevant jobs for it!</p>
      </section>
      <section>
        <Row xs={1} md={2} className="g-4">
          {Array.from({ length: 4 }).map((_, idx) => (
            <Col>
              <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
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
