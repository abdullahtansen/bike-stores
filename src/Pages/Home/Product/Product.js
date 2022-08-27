import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import './Product.css';
import { Link } from 'react-router-dom';


const Product = ({bike}) => {
    const { name, description, price, img,_id} = bike;
    return (
       <Container className="bikes_container">
      <Card className="card" style={{ width: "350px", height:'440px' }}>
       <img className="bike_img" src={img} alt="Fz-x" />
        <Card.Body>
          <Card.Title>
            <h4>{name}</h4>
            </Card.Title>
          <Card.Text>
           <div>{description.slice(0,100)}</div>
           <div>${price}</div>
          </Card.Text>
            <Link to={`/purchases/${_id}`}>
              <Button className="button">Buy Now</Button>
            </Link>
        </Card.Body>
      </Card>
    </Container>
    );
};

export default Product;