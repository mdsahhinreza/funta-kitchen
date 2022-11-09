import React, { useContext, useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { FaStar, FaTrash } from "react-icons/fa";
import { AuthContext } from "../../contex/AuthProvider/AuthProvider";

const Reviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
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
          }
          console.log(data);
        });
    }
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
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDelete(review._id)}
                  >
                    <FaTrash></FaTrash>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Reviews;
