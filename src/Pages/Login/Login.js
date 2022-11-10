import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import loginImg from "../../assets/Login/login.gif";
import successImg from "../../assets/Shared/success.gif";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contex/AuthProvider/AuthProvider";
import useTitle from "../../hooks/useTitle";

const Login = () => {
  const [sinUpSuccess, setSignUpSuccess] = useState(false);
  const { login, googleLogIn } = useContext(AuthContext);
  useTitle("Login");
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from.pathname || "/";

  const loginHandler = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password)
      .then(() => {
        console.log("SignIn Success");
        setSignUpSuccess(true);
        navigate(from, { replace: true });
      })
      .catch((err) => console.error(err));
  };

  const handleGoogleSign = () => {
    googleLogIn().then(() => {
      console.log("Login Success");
      setSignUpSuccess(true);
      navigate(from, { replace: true });
    });
  };

  return (
    <div className="container p-5" style={{ minHeight: "88vh" }}>
      <h2 className="text-center ff-poppins">Login Form</h2> <hr />
      <div className="row w-75 mx-auto">
        <div className="col-6 border-end">
          {sinUpSuccess ? (
            <img className="img-fluid" src={successImg} alt="" />
          ) : (
            <img className="img-fluid" src={loginImg} alt="" />
          )}
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
            <Button className="w-50" onClick={handleGoogleSign} variant="light">
              <FcGoogle></FcGoogle>
            </Button>
            <p className="mt-3">
              New at Funta-Kitchen? Please{" "}
              <Link to={"/register"}>Register</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
