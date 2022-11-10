import React, { useContext, useEffect, useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import { FaStar, FaTrash, FaRegEdit } from "react-icons/fa";
import { AuthContext } from "../../contex/AuthProvider/AuthProvider";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import { toast } from "react-toastify";

const Reviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [review, setReview] = useState({});
  const [givenStar, setGivenStar] = useState(0);
  const naigate = useNavigate();
  useTitle("My Review");
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setReview({});
    setGivenStar(0);
  };

  const handleShow = (id) => {
    setShow(true);
    fetch(`http://localhost:5000/reviews/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setReview(data);
        setGivenStar(data.star);
      });
  };

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [user?.email]);

  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to Delete this Review?"
    );
    if (proceed) {
      console.log("deleted");
      fetch(`http://localhost:5000/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const leftReviews = reviews.filter((review) => review._id !== id);
            setReviews(leftReviews);
            toast("Review Deleted Succssfull");
          }
          console.log(data);
        });
    }
  };

  const handleReviewUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const text = form.review.value;
    const id = form.id.value;

    const editData = {
      reviewText: text,
      star: givenStar,
    };

    fetch(`http://localhost:5000/reviews/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(editData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast("Review Update Successfull!");
          handleClose();
          naigate("/my-reviews");
        }
      });
  };
  return (
    <div className="mt-5 pt-5" style={{ minHeight: "80vh" }}>
      <div className="row container m-auto">
        <h3 className="ff-poppins text-center">My All Reviews</h3>
        <hr className="border-info w-25 m-auto"></hr>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th width="5%" className="text-center">
                Sl
              </th>
              <th width="15%" className="text-center">
                Product Name
              </th>
              <th width="60%" className="text-center">
                Review
              </th>
              <th width="10%" className="text-center">
                Start
              </th>
              <th width="10%" className="text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((review, sl) => (
              <tr key={review._id}>
                <td className="text-center">{sl + 1}</td>
                <td className="text-start">{review.productTitle}</td>
                <td className="text-start">{review.reviewText}</td>
                <td className="text-center">
                  {review.star}
                  <FaStar className="mb-1 text-warning"></FaStar>
                </td>
                <td className="text-center">
                  <Button
                    className="btn btn-sm btn-info me-2"
                    onClick={() => handleShow(review._id)}
                  >
                    <FaRegEdit></FaRegEdit>
                  </Button>
                  <Button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDelete(review._id)}
                  >
                    <FaTrash></FaTrash>
                  </Button>
                </td>
              </tr>
            ))}
            {reviews.length <= 0 ? (
              <tr>
                <td className={`text-center`} colSpan={5}>
                  No reviews ware added
                </td>
              </tr>
            ) : (
              ""
            )}
          </tbody>
        </Table>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <Form onSubmit={handleReviewUpdate}>
            <Form.Group className="mb-3">
              <Form.Label>Your Review</Form.Label>
              <Form.Control
                name="review"
                defaultValue={review.reviewText}
                as="textarea"
                placeholder="Write your review about this service"
              />
              <input type="hidden" name="id" defaultValue={review._id} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Your Rating {givenStar}</Form.Label>
              <div>
                <button
                  onMouseEnter={() => setGivenStar(1)}
                  className={`btn btn-lg p-0 m-0 ${
                    givenStar >= 1 ? "text-warning" : ""
                  }`}
                >
                  <FaStar></FaStar>
                </button>
                <button
                  onMouseEnter={() => setGivenStar(2)}
                  className={`btn btn-lg p-0 m-0 ${
                    givenStar >= 2 ? "text-warning" : ""
                  }`}
                >
                  <FaStar></FaStar>
                </button>
                <button
                  onMouseEnter={() => setGivenStar(3)}
                  className={`btn btn-lg p-0 m-0 ${
                    givenStar >= 3 ? "text-warning" : ""
                  }`}
                >
                  <FaStar></FaStar>
                </button>
                <button
                  onMouseEnter={() => setGivenStar(4)}
                  className={`btn btn-lg p-0 m-0 ${
                    givenStar >= 4 ? "text-warning" : ""
                  }`}
                >
                  <FaStar></FaStar>
                </button>
                <button
                  onMouseEnter={() => setGivenStar(5)}
                  className={`btn btn-lg p-0 m-0 ${
                    givenStar >= 5 ? "text-warning" : ""
                  }`}
                >
                  <FaStar></FaStar>
                </button>
              </div>
            </Form.Group>
            <div>
              <Button variant="danger" className="me-2" onClick={handleClose}>
                Close
              </Button>
              <Button variant="info" type="submit">
                Post Review
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Reviews;
