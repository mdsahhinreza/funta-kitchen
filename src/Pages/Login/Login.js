import React from "react";
import { Button, Form } from "react-bootstrap";
import login from "../../assets/Login/login.gif";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Login = () => {
  const loginHandler = (event) => {};
  return (
    <div className="container p-5" style={{ minHeight: "88vh" }}>
      <h2 className="text-center ff-poppins">Login Form</h2> <hr />
      <div className="row w-75 mx-auto">
        <div className="col-6 border-end">
          <img className="img-fluid" src={login} alt="" />
        </div>
        <div className="col-6 p-5 ff-poppins my-auto">
          <Form onSubmit={loginHandler}>
            <Form.Group className="mb-2" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group className="mb-2" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <Form.Group className="mb-2" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
            {/* {error ? <p className="alert alert-danger">{error}</p> : ""}
            {!error && user ? (
              <p className="alert alert-success">Login Successfully!!</p>
            ) : (
              ""
            )} */}
            <Button variant="info" type="submit">
              Sign In
            </Button>
          </Form>
          <hr className="w-75 m-auto border-info mt-3"></hr>
          <div className="text-center mt-2">
            <Button className="w-50" variant="light">
              <FcGoogle></FcGoogle>
            </Button>
            <p className="mt-3">
              New at Funta-Kitchen? Please <Link>Register</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
