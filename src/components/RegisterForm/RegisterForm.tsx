import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: number;
};

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    watch,

    formState: { errors },
  } = useForm<Inputs>({ mode: "all" });
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const validatePassword = (value: string) => {
    return value === watch("password") ? true : "Passwords do not match";
  };
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  // const [number, setNumber] = useState("");

  // const onNameChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setName(event.target.value);
  // };

  // const onEmailChangeHandler = () => {

  // };

  // const onPasswordChangeHandler = () => {};

  // const onConfirmPasswordChangeHandler = () => {};

  // const onAddNumberChangeHandler = () => {};

  // const onFormSubmitHandler = () => {};
  console.log(watch("name")); // watch input value by passing the name of it

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Your Full Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Full name"
          {...register("name", { required: true, minLength: 3 })}
        />
        {errors.name && errors.name.type === "minLength" && (
          <p>The name must be at least 3 characters long</p>
        )}
        {errors.name && errors.name.type === "required" && (
          <p>The name is required</p>
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
          <p>The email is required</p>
        )}
        {errors.email && errors.email.type === "pattern" && (
          <p>Please enter a valid email address</p>
        )}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          {...register("password", { required: true, minLength: 6 })}
        />
        {errors.password && errors.password.type === "minLength" && (
          <p>The password must be at least 6 characters long</p>
        )}
        {errors.password && errors.password.type === "required" && (
          <p>The password is required</p>
        )}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Confirm Password"
          {...register("confirmPassword", {
            required: true,
            validate: validatePassword,
          })}
        />
        {errors.confirmPassword &&
          errors.confirmPassword.message === "Passwords do not match" && (
            <p>{errors.confirmPassword.message}</p>
          )}
        {errors.confirmPassword &&
          errors.confirmPassword.type === "required" && (
            <p>The confirmed password is required</p>
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

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default RegisterForm;
