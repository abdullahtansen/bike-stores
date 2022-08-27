import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './BikeCollection.css'

const BikeCollection = ({ bike }) => {
  const {_id, name, img, description, price } = bike;
  return (
    <Container className="bikes_container">
      <Card className="card" style={{ width: "350px", height:'440px' }}>
       <img className="bike_img" src={img} alt="Fz-x" />
        <Card.Body>
          <Card.Title>
            <h4>{name}</h4>
            </Card.Title>
          <Card.Text>
           <div className="Description">{description.slice(0,100)}</div>
           <div className="price">${price}</div>
          </Card.Text>
            <Link to={`/purchases/${_id}`}>
              <Button className="button">Buy Now</Button>
            </Link>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default BikeCollection;
