import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./BikeCollection.css";

const BikeCollection = ({ bike }) => {
  const { _id, name, img, description, price } = bike;
  return (
    <Container className="bikes_container">
      <Card className="card" style={{ width: "350px", height:'430px', }}>
       <img className="bike_img" src={img} alt="Fz-x" />
        <Card.Body>
          <Card.Title>
            <h4>{name}</h4>
            </Card.Title>
          <Card.Text>
          {description.slice(0,200)}
          </Card.Text>
        </Card.Body>
        <Card.Text className='product_footer'>
           <div className="price_btn">
           ${price}
           </div>
           <div className="Button">
           <Link to={`/purchases/${_id}`}>
              <Button className="button">Buy Now</Button>
            </Link>
           </div>
          </Card.Text>
      </Card>
    </Container>
  );
};

export default BikeCollection;
