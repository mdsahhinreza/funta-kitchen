import React from "react";
import { Button, Card } from "react-bootstrap";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";

const ServiceCart = ({ item }) => {
  const { _id, name, details, price, img } = item;
  return (
    <div className="col-4 mb-3">
      <Card className="border border-info border-opacity-50">
        <PhotoProvider>
          <PhotoView src={img}>
            <Card.Img variant="top" height={231} src={img} />
          </PhotoView>
        </PhotoProvider>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{details.slice(0, 100)} ...</Card.Text>
          <p className="text-dark">
            Price: <b>{price} BDT</b>
          </p>
          <Link to={`/services/${_id}`}>
            <Button variant="info">Details</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ServiceCart;
