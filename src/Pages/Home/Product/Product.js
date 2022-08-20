// import React, { useState } from "react";
import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import './Product.css';
// import Orders from "../../Orders/Orders";
import { Link } from 'react-router-dom';


const Product = ({bike}) => {
    const { name, description, price, img, id } = bike;

    // const [show, setShow] = useState(false);
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
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
            {/* <Button onClick={handleShow} variant="success">Buy Now</Button> */}
            <Link name={name} key={id} img={img} description={description} price={price} to="/purchase">
              <Button>Buy Now</Button>
            </Link>
        </Card.Body>
      </Card>
    </Container>
    {/* <Orders
     handleClose={handleClose}
     show={show}
     bike={bike}
    ></Orders> */}
    </>
    );
};

export default Product;