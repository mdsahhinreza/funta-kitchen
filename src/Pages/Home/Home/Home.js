import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import cover from "../../../assets/Home/cooking.gif";
import useTitle from "../../../hooks/useTitle";
import ServiceCart from "../../Shared/ServiceCart";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Autoplay, Navigation, Pagination } from "swiper";

const Home = () => {
  const [items, setItems] = useState([]);
  const [reviews, setReviews] = useState([]);
  useTitle("Home");
  useEffect(() => {
    fetch("http://localhost:5000/services?limit=3")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
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
          {items.length <= 0 ? (
            <div className="text-center my-5">
              <Spinner animation="border" variant="primary" />{" "}
              <h2>Loading Products</h2>
            </div>
          ) : (
            ""
          )}

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
      <div className="container mt-5">
        <div className="col-md-12">
          <h4 className="text-center text-uppercase">
            My Valuable Customars Review
          </h4>
          <hr />
          <div className="my-5">
            <Swiper
              modules={[Navigation, Autoplay, Pagination]}
              autoplay={true}
              spaceBetween={50}
              slidesPerView={3}
              Autoplay={true}
              onSlideChange={() => console.log("slide change")}
              breakpoints={{
                576: {
                  // width: 576,
                  slidesPerView: 1,
                },
                768: {
                  // width: 768,
                  slidesPerView: 3,
                },
              }}
              // slidesPerView={2}
            >
              {reviews.map((review) => (
                <SwiperSlide>{review.reviewText}</SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
