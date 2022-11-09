import React from "react";
import { Button, Form } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";

const AddService = () => {
  return (
    <div className="mt-5 pt-5" style={{ minHeight: "80vh" }}>
      <div className="row container mx-auto">
        <h2 className="text-center">Add New Service</h2>
        <hr className="w-25 m-auto border-info"></hr>
        <div className="">
          <Form className="w-50 m-auto pt-4">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Service Title</Form.Label>
              <Form.Control
                name="name"
                type="text"
                placeholder="service title"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Service Image Link</Form.Label>
              <Form.Control name="img" type="text" placeholder="full image" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Service Thumbnail Link</Form.Label>
              <Form.Control
                name="thumbnail"
                type="text"
                placeholder="thumbnail image"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Service Description</Form.Label>
              <Form.Control
                as="textarea"
                name="details"
                type="text"
                placeholder="description"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Price</Form.Label>
              <Form.Control name="price" type="text" placeholder="price" />
            </Form.Group>

            <Button variant="info" type="submit">
              <FaPlus></FaPlus> Add Service
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AddService;
