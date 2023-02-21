import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  updatePhoneNumber,
} from "firebase/auth";

import classes from "./RegisterForm.module.scss";
import { useNavigate } from "react-router-dom";
import { getDatabase, ref, set } from "firebase/database";

type Inputs = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: number;
};

type UserData = {
  userId: string;
  name: string;
  email: string;
  phoneNumber: number;
  profession?: string;
  experience?: string;
  country?: string;
  city?: string;
};

const writeUserData = (userData: UserData) => {
  const { userId, name, email, phoneNumber } = userData;
  const db = getDatabase();
  console.log(db);

  set(ref(db, "users/" + userId), {
    username: name,
    email: email,
    phone_number: phoneNumber,
  });
};
// Find the way to also update user's phoneNumber by passing the one from data. You should also try managing the token expiry through Firebase without writting the code manually (user object returns reloadListener, so there might be the way to do all of the auth logic inside firebase.)

// Trebas da napravis da se na uspesan register odmah skladisti user na firebase database i na redux store, kao i token da krece odmah sa expiry. Kad se klikne na sign out ili istekne token odmah se brise state iz redux i menja isLoggedIn na false. Na  uspesan sign-in se uporedjuje user id sa onim iz database da bi se eventualno povukao info za phone i ostale i odmah se store u redux store. Redux state menja UI u odnosu da li je user logged in ili nije.
const RegisterForm = () => {
  const navigate = useNavigate();

  const onRegisterFormSubmit = async (data: Inputs) => {
    const { name, email, password, phone } = data;
    const auth = getAuth();

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      if (user) {
        await updateProfile(user, {
          displayName: name,
        });
        console.log("updated");
        // ovde Redirect na neku stranu kao sto je profil (navigate)
        navigate("/");

        const userData = {
          userId: user.uid,
          name: name,
          email: email,
          phoneNumber: phone,
        };
        // premesti writeUserData funkciju u helpers functions folder i napravi profile page i izlistaj info tamo kroz uporedjivanje ulogovanog user-a i info koji postoji na database
        writeUserData(userData);
        // onda na profile mora da se doda broj telefona i druge rute ne rade (kroz Database storage of user that logged in)
        // ...
      }
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage + errorCode);
    }
  };

  const {
    register,
    handleSubmit,
    watch,

    formState: { errors, isDirty, isValid },
  } = useForm<Inputs>({ mode: "all" });
  const onSubmit: SubmitHandler<Inputs> = (data) => onRegisterFormSubmit(data);

  const validatePassword = (value: string) => {
    return value === watch("password") ? true : "Passwords do not match";
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Your Full Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Full name"
          {...register("name", { required: true, minLength: 3 })}
        />
        {errors.name && errors.name.type === "minLength" && (
          <p className={classes["form--error"]}>
            The name must be at least 3 characters long
          </p>
        )}
        {errors.name && errors.name.type === "required" && (
          <p className={classes["form--error"]}>The name is required</p>
        )}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          {...register("email", {
            required: true,
            pattern:
              /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
          })}
        />

        {errors.email && errors.email.type === "required" && (
          <p className={classes["form--error"]}>Email is required</p>
        )}
        {errors.email && errors.email.type === "pattern" && (
          <p className={classes["form--error"]}>
            Please enter a valid email address
          </p>
        )}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          autoComplete="new-password"
          {...register("password", { required: true, minLength: 6 })}
        />
        {errors.password && errors.password.type === "minLength" && (
          <p className={classes["form--error"]}>
            Password must be at least 6 characters long
          </p>
        )}
        {errors.password && errors.password.type === "required" && (
          <p className={classes["form--error"]}>Password is required</p>
        )}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Confirm Password"
          autoComplete="new-password"
          {...register("confirmPassword", {
            required: true,
            validate: validatePassword,
          })}
        />
        {errors.confirmPassword &&
          errors.confirmPassword.message === "Passwords do not match" && (
            <p className={classes["form--error"]}>
              {errors.confirmPassword.message}
            </p>
          )}
        {errors.confirmPassword &&
          errors.confirmPassword.type === "required" && (
            <p className={classes["form--error"]}>
              Confirmed password is required
            </p>
          )}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPhone">
        <Form.Label>Mobile Number</Form.Label>
        <Form.Control
          type="number"
          placeholder="Add your number"
          {...register("phone", { required: false })}
        />
      </Form.Group>

      <Button variant="primary" type="submit" disabled={!isDirty || !isValid}>
        Submit
      </Button>
    </Form>
  );
};

export default RegisterForm;
