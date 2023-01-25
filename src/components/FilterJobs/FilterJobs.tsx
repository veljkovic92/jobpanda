import React from "react";
import classes from "./FilterJobs.module.scss";
import { Form } from "react-bootstrap";

const FilterJobs = () => {
  return (
    // ovde napraviti da postoji placeholder koji objasnjava input a koji se gubi prilikom klika na input (kao kod Infostud)

    <Form className={classes.form}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Company" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="City" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
    </Form>
  );
};

export default FilterJobs;
