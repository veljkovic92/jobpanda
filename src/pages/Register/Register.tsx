import React from "react";
import { Form } from "react-bootstrap";
import classes from "./Register.module.scss";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

const Register = () => {
  return (
    <main className={classes.register}>
      <section className={classes["register__left"]}>
        <h2>On Register you can</h2>
        <ul>
          <li>Build your profile and let recruiters find you</li>
          <li> Get job postings delivered right to your Email</li>
          <li>Find a job and grow your career</li>
        </ul>
      </section>
      <section className={classes["register__right"]}>
        <RegisterForm />
      </section>
    </main>
  );
};

export default Register;
