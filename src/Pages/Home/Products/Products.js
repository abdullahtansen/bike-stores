import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Product from "../Product/Product";
import './Products.css'
const Products = () => {
    const [bikes,setBikes] = useState([]);
    useEffect(() => {
         fetch(`http://localhost:5000/bikes`)
        .then((res) => res.json())
        .then((data) => setBikes(data));
    }, []);
    return (
        <Container>
        <h1 className="animate__animated animate__rubberBand">Products</h1>
       <Col md={4} lg={4} sm={12} className="bikes mt-2">
        {bikes.slice(0,6).map((bike) => (
          <Product key={bike._id} bike={bike}  />
        ))}
       </Col>
      </Container>
    );
};

export default Products;