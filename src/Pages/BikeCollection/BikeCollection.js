import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
// import Purchase from "../Purchase/Purchase";

const BikeCollection = ({ bike }) => {
  const {_id, name, img, description, price } = bike;
  return (
    <>
      <Container fluid className="bikes_container">
        <Card className="product" style={{ width: "350px" }}>
          <img className="bike_img" src={img} alt="Fz-x" />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              <div>{description}</div>
              <div>{price}/=</div>
            </Card.Text>
            <Link to={`/purchases/${_id}`}>
              <Button variant="success">
                Buy Now
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default BikeCollection;
