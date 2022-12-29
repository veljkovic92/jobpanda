import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const CompanyQuestions = () => {
  return (
    <section>
      <h2>Interview Questions By Company</h2>
      <Row xs={1} md={2}>
        {Array.from({ length: 6 }).map((_, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Company Name</Card.Title>
                <Card.Text>
                  1.6k+
                  <br/>
                  Interview
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default CompanyQuestions;
