import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import useTitle from "../../hooks/useTitle";
import ServiceCart from "../Shared/ServiceCart";

const Services = () => {
  const [services, setServices] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    fetch("https://funta-kitchen-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoader(false);
      });
  }, []);

  useTitle("Services");
  return (
    <div className="container position-relative">
      {loader ? (
        <div className="text-center position-absolute  w-100 top-50 ">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        ""
      )}
      <h2 className="text-start text-uppercase fw-bolder mt-3 mb-5">
        Our Best Product's <hr />
      </h2>
      <div className="row">
        {services.map((item) => (
          <ServiceCart key={item._id} item={item}></ServiceCart>
        ))}
      </div>
    </div>
  );
};

export default Services;
