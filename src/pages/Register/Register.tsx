import React from "react";
import { Form } from "react-bootstrap";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

const Register = () => {
  return (
    <main>
      <section>
        <h2>On Register you can</h2>
        <ul>
          <li>Build your profile and let recruiters find you</li>
          <li> Get job postings delivered right to your Email</li>
          <li>Find a job and grow your career</li>
        </ul>
      </section>
      <section>
        <RegisterForm />
      </section>
    </main>
  );
};

export default Register;
