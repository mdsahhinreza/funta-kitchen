import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import { BiDish, BiPaperPlane } from "react-icons/bi";
import { PhotoProvider, PhotoView } from "react-photo-view";

const ServiceDetails = () => {
  const user = { name: "reza" };
  const service = useLoaderData();
  const { name, price, details, thumbnail, img } = service;
  return (
    <div className="mb-5 container">
      <div className="mt-5 pt-5  row mx-auto">
        <div className="col-9">
          <div className="">
            <h1 className="ff-poppins fw-bolder">{name}</h1>
            <p className="text-justify ff-poppins">{details}</p>
          </div>
        </div>
        <div className="col-3">
          <PhotoProvider>
            <PhotoView src={img}>
              <img
                width={"100%"}
                className="img-fluid"
                src={thumbnail}
                alt=""
              />
            </PhotoView>
          </PhotoProvider>
          <h5 className="pt-2">{name}</h5>
          <h3 className="ff-poppins fw-bold text-muted">Price: {price} BDT</h3>
          <Button variant="outline-info">
            <BiDish className="fs-4"></BiDish> Checkout
          </Button>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8">
          {user ? (
            <>
              <h2>Share your review about this service</h2>
              <hr className="border-primary" />
              <Form.Group className="mb-3">
                <Form.Label>Your Review</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Write your review about this service"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Your Rating</Form.Label>
                <Form.Select>
                  <option>Select Your Ratings</option>
                  <option>0/10</option>
                  <option>3/10</option>
                  <option>5/10</option>
                  <option>7/10</option>
                  <option>9/10</option>
                  <option>10/10</option>
                </Form.Select>
              </Form.Group>
              <Button variant="info">
                <BiPaperPlane></BiPaperPlane> Post
              </Button>
            </>
          ) : (
            <p className="text-center">
              Please <Link to="/login">Login</Link> to add a review
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
