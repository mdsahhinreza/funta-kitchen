import React from "react";
import { Button, Table } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";

const Reviews = () => {
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
                Thumbnail
              </th>
              <th width="30%" className="text-center">
                Service Name
              </th>
              <th width="50%" className="text-center">
                Review
              </th>
              <th width="10%" className="text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center">01</td>
              <td className="text-center">Thumbnail</td>
              <td className="text-center">Service Name</td>
              <td className="text-center">Review</td>
              <td className="text-center">
                <Button className="btn btn-danger">
                  <FaTrash></FaTrash>
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Reviews;
