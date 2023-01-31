import React from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import classes from "./Login.module.scss";
import register from "../../assets/register.png"

const Login = () => {
  return (
    <main className={classes.login}>
      <div className={classes["login__body"]}>
        <section className={classes["login__body__left"]}>
          <h2>New to JobPanda?</h2>
          <ul className={classes["login__body__left__list"]}>
            <li>One click apply using naukri profile.</li>
            <li>Get relevant job recommendations.</li>
            <li>Showcase profile to top companies and consultants.</li>
            <li> Know application status on applied jobs.</li>
          </ul>

          <div>
            <a>Register For Free</a>
          </div>
          <img src={register} />
        </section>
        <section className={classes["login__body__right"]}>
          <h2>
            Welcome Back! <br /> Please Log in
          </h2>
          <LoginForm />
        </section>
      </div>
    </main>
  );
};

export default Login;
