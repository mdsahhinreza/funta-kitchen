import React from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import ServiceCart from "../Shared/ServiceCart";

const Services = () => {
  const items = useLoaderData();
  useTitle("Services");
  return (
    <div className="container">
      <h2 className="text-start text-uppercase fw-bolder mt-3 mb-5">
        Our Best Product's <hr />
      </h2>
      <div className="row">
        {items.map((item) => (
          <ServiceCart key={item._id} item={item}></ServiceCart>
        ))}
      </div>
    </div>
  );
};

export default Services;
