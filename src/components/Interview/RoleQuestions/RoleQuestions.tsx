import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const RoleQuestions = () => {
  return (
    <section>
      <h2>Interview questions by role</h2>
      <Row xs={1} md={1}>
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Body>
                <Card.Text>
                  <span>Software Engineer</span>
                  <span>(7.2K+ questions)</span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default RoleQuestions;
