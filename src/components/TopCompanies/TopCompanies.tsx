import React from "react";
import classes from "./TopCompanies.module.scss";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

const TopCompanies = () => {
  return (
    <section className={classes["top-companies"]}>
      <h2 className={classes["top-companies__header"]}>
        Top companies hiring now
      </h2>
      <CardGroup>
        <Card>
          <Card.Body>
            <Card.Title>Job category</Card.Title>
            <Card.Text>1.3k+ hiring now</Card.Text>
          </Card.Body>
          <Card.Footer>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Img variant="top" src="holder.js/100px160" />
          </Card.Footer>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Job category</Card.Title>
            <Card.Text>1.3k+ hiring now</Card.Text>
          </Card.Body>
          <Card.Footer>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Img variant="top" src="holder.js/100px160" />
          </Card.Footer>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Job category</Card.Title>
            <Card.Text>1.3k+ hiring now</Card.Text>
          </Card.Body>
          <Card.Footer>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Img variant="top" src="holder.js/100px160" />
          </Card.Footer>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Job category</Card.Title>
            <Card.Text>1.3k+ hiring now</Card.Text>
          </Card.Body>
          <Card.Footer>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Img variant="top" src="holder.js/100px160" />
          </Card.Footer>
        </Card>
      </CardGroup>
    </section>
  );
};

export default TopCompanies;
