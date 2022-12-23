import React from "react";
import LoginForm from "../../components/LoginForm/LoginForm";

const Login = () => {
  return (
    <main>
      <h1>
        Welcome Back! <br /> Please Log in
      </h1>
      <section>
        <div>
          <h2>New to Naukri?</h2>
          <ul>
            <li>One click apply using naukri profile.</li>
            <li>Get relevant job recommendations.</li>
            <li>Showcase profile to top companies and consultants.</li>
            <li> Know application status on applied jobs.</li>
          </ul>
        </div>
        <div>
          <a>Register For Free</a>
        </div>
        <img />
      </section>
      <section>
        <LoginForm />
      </section>
    </main>
  );
};

export default Login;
