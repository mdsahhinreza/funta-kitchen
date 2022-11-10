import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import cover from "../../../assets/Home/cooking.gif";
import ServiceCart from "../../Shared/ServiceCart";
const Home = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services?limit=3")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <div>
      <div className="bg-light">
        <div className="row container mx-auto py-5">
          <div className="col-7 my-auto">
            <h1 className="display-3 fw-bolder ff-poppins  test-start">
              It's time to test some
            </h1>
            <h1 className="display-4 fw-bolder ff-poppins">
              <span className="text-info">Special</span> Foods.
            </h1>
            <button className="btn btn-primary text-uppercase rounded-0 fw-bolder mt-4 btn-lg">
              Explore Now
            </button>
          </div>
          <div className="col-5 text-end">
            <img height="400" src={cover} alt="" />
          </div>
        </div>
      </div>
      <div className="container">
        <h2 className="text-center text-uppercase fw-bolder mb-5">
          My Kitchen's Special <hr />
        </h2>
        <div className="row">
          {items.map((item) => (
            <ServiceCart key={item._id} item={item}></ServiceCart>
          ))}
        </div>
        <div className="text-center my-4">
          <Link className="btn btn-primary px-5" to={"/services"}>
            See All{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
