import React, { useContext, useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import registerImg from "../../assets/Register/register.gif";
import successImg from "../../assets/Shared/success.gif";

import { AuthContext } from "../../contex/AuthProvider/AuthProvider";
import useTitle from "../../hooks/useTitle";

const Register = () => {
  const [sinUpSuccess, setSignUpSuccess] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [loader, setLoader] = useState(null);
  const { createUser, updateUser, login, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  useTitle("Registration");

  const handleRegister = (event) => {
    event.preventDefault();
    setLoader(true);
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);

        updateUser(name, photo)
          .then(() => console.log("User Name and Photo Updated"))
          .catch((err) => console.error(err));
        logOut().then(() => console.log("SignOut Success"));
        login(email, password).then(() => {
          toast("Registration and SignIn Success");
          setLoader(false);
        });
        form.reset();
        setSignUpSuccess(true);

        setInterval(() => {
          navigate("/");
        }, 1500);
      })
      .catch((err) => console.error(err));
  };

  const handleAccepted = (event) => {
    setAcceptTerms(event.target.checked);
  };
  return (
    <div
      className="container p-5 position-relative"
      style={{ minHeight: "88vh" }}
    >
      {loader ? (
        <div className="text-center position-absolute  w-100 top-50 ">
          <span className="bg-warning p-5 rounded bg-opacity-50">
            <Spinner animation="border" variant="primary" />
          </span>
        </div>
      ) : (
        ""
      )}

      <div className="row w-75 mx-auto">
        <h2 className="text-center ff-poppins">Registration Form</h2> <hr />
        <div className="col-6 border-end">
          {sinUpSuccess ? (
            <img className="img-fluid" src={successImg} alt="" />
          ) : (
            <img className="img-fluid" src={registerImg} alt="" />
          )}
        </div>
        <div className="col-6 p-5">
          <Form onSubmit={handleRegister}>
            <Form.Group className="mb-2" controlId="formBasicEmail">
              <Form.Label>
                Full Name<sup className="text-danger fs-6">*</sup>
              </Form.Label>
              <Form.Control
                name="name"
                type="text"
                placeholder="Enter full name"
                required
              />
            </Form.Group>

            <Form.Group className="mb-2" controlId="formBasicEmail">
              <Form.Label>
                Photo URL<sup className="text-danger fs-6">*</sup>
              </Form.Label>
              <Form.Control
                name="photo"
                type="text"
                placeholder="Enter photo url"
                required
              />
            </Form.Group>

            <Form.Group className="mb-2" controlId="formBasicEmail">
              <Form.Label>
                Email address<sup className="text-danger fs-6">*</sup>
              </Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="Enter email"
                required
              />
            </Form.Group>

            <Form.Group className="mb-2" controlId="formBasicPassword">
              <Form.Label>
                Password<sup className="text-danger fs-6">*</sup>
              </Form.Label>
              <Form.Control
                name="password"
                type="password"
                placeholder="Password"
                required
              />
            </Form.Group>
            <Form.Group className="mb-2" controlId="formBasicCheckbox">
              <Form.Check
                onClick={handleAccepted}
                type="checkbox"
                label="Agree with Funta-Kitchen privacy & policy"
                required
              />
            </Form.Group>
            {/* {error ? <p className="alert alert-danger">{error}</p> : ""}
            {!error && user ? (
              <p className="alert alert-success">Successfully Registered!!</p>
            ) : (
              ""
            )} */}
            <Button variant="info" type="submit" disabled={!acceptTerms}>
              Register{" "}
            </Button>
            <p className="mt-3">
              Already Register ? Please <Link to={"/login"}>Login</Link>
            </p>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Register;
