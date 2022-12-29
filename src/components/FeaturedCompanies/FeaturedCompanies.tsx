import React from "react";
import classes from "./FeaturedCompanies.module.scss";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";

const FeaturedCompanies = () => {
  return (
    <section className={classes["featured-companies"]}>
      <h2>Featured companies actively hiring</h2>
      <CardGroup className={classes[""]}>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Company Name</Card.Title>
            <Card.Text>
              <span>rating</span>
              <span>30k+ reviews</span>
            </Card.Text>
            <Card.Text>Global leader in some category</Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant="secondary">View Jobs</Button>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Company Name</Card.Title>
            <Card.Text>
              <span>rating</span>
              <span>30k+ reviews</span>
            </Card.Text>
            <Card.Text>Global leader in some category</Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant="secondary">View Jobs</Button>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Company Name</Card.Title>
            <Card.Text>
              <span>rating</span>
              <span>30k+ reviews</span>
            </Card.Text>
            <Card.Text>Global leader in some category</Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant="secondary">View Jobs</Button>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Company Name</Card.Title>
            <Card.Text>
              <span>rating</span>
              <span>30k+ reviews</span>
            </Card.Text>
            <Card.Text>Global leader in some category</Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant="secondary">View Jobs</Button>
          </Card.Footer>
        </Card>
      </CardGroup>
      <Button variant="outline-info" className={classes["featured-companies__view"]}>View All Companies</Button>
    </section>
  );
};

export default FeaturedCompanies;
