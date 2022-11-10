import React, { useEffect, useState } from "react";
import { Image, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import cover from "../../../assets/Home/cooking.gif";
import useTitle from "../../../hooks/useTitle";
import ServiceCart from "../../Shared/ServiceCart";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Autoplay, Navigation, Pagination } from "swiper";
import { FaStar } from "react-icons/fa";
import chef from "../../../assets/Shared/chef.jpg";
const Home = () => {
  const [items, setItems] = useState([]);
  const [reviews, setReviews] = useState([]);
  useTitle("Home");
  useEffect(() => {
    fetch("https://funta-kitchen-server.vercel.app/services?limit=3")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  useEffect(() => {
    fetch("https://funta-kitchen-server.vercel.app/reviews")
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
            <Link to={"/services"}>
              <button className="btn btn-primary text-uppercase rounded-0 fw-bolder mt-4 btn-lg">
                Explore Now
              </button>
            </Link>
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
      <div className="container">
        <div className="row my-5">
          <div className="col-md-4 ">
            <img
              src={chef}
              width={"80%"}
              className="img-fluid rounded"
              alt=""
            />
          </div>
          <div className="col-md-8 text-start">
            <h2 className="text-uppercase fw-bolder">Funta Kitchen's Chef</h2>
            <p>
              Beginning his culinary adventure earlier than most, Andrew entered
              the kitchen at just 13 years of age. Keen to learn with a strong
              appetite for gaining the skills needed in commercial kitchens, he
              began a school-based apprenticeship that lasted three years.{" "}
              <br />
              <br />
              After a one-way trip to Melbourne, Andrew began managing his own
              kitchen team and learning the ropes of busy Melbourne hospitality.
              Exploring popular inner-city food markets increased Andrew’s
              resourcefulness and creativity, throwing together fresh local
              produce in innovative ways. Upon eventually returning to Noosa, he
              embraced a new-found inspiration to bring families together in an
              environment that caters to all. <br /> <br />
              It is with this enthusiasm that Andrew leads the talented kitchen
              team at View by Matt Golinski, crafting a menu of modern design
              and a touch of the old-fashioned to please any palate. <br />
            </p>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="col-md-12">
          <h4 className="text-center text-uppercase">
            My Valuable Customars Review
          </h4>
          <hr />
          <div className="row">
            <div className="my-5">
              <Swiper
                modules={[Navigation, Autoplay, Pagination]}
                autoplay={true}
                spaceBetween={50}
                slidesPerView={3}
                autoPlay={true}
                // onSlideChange={() => console.log("slide change")}
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
                  <SwiperSlide className="col-4" key={review._id}>
                    <div>
                      <div className="bg-primary bg-opacity-25 rounded p-3">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex">
                            <Image
                              height={50}
                              width={50}
                              roundedCircle
                              src={review.customarPhoto}
                            ></Image>
                            <div className="ps-2">
                              <p className="fw-bold mb-0">{review.customar}</p>
                              <small>{review.customarEmail}</small>
                            </div>
                          </div>
                          <div>
                            <p>
                              {review.star}
                              <FaStar className="mb-1 ms-1"></FaStar>
                            </p>
                          </div>
                        </div>
                        <div>
                          <p className="text-left pt-3">{review.reviewText}</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
