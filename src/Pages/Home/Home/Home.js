import React, { useEffect, useState } from "react";
import cover from "../../../assets/Home/cooking.gif";
import ServiceCart from "../../Shared/ServiceCart";
const Home = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("fake.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <div>
      <div className="bg-light">
        <div className="row container m-auto">
          <div className="col-7 my-auto">
            <h1 className="display-4 fw-bolder ff-poppins  test-start">
              It's time to test some
            </h1>
            <h1 className="display-4 fw-bolder ff-poppins">
              <span className="text-info">Special</span> Foods.
            </h1>
          </div>
          <div className="col-5 text-end">
            <img height="400" src={cover} alt="" />
          </div>
        </div>
        <div className="container">
          <h4 className="text-center">My Kitchen Special</h4>
          <div className="row">
            {items.map((item) => (
              <ServiceCart key={item.name} item={item}></ServiceCart>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
