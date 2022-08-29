import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Product from "../Product/Product";
import './Products.css'
const Products = () => {
    const [bikes,setBikes] = useState([]);
    useEffect(() => {
         fetch(`https://glacial-lowlands-76878.herokuapp.com/bikes`)
        .then((res) => res.json())
        .then((data) => setBikes(data));
    }, []);
    return (
        <Container>
        <h1 className='products_title'>Products</h1>
       <Col md={4} lg={4} sm={12} className="bikes mt-2">
        {bikes.slice(0,6).map((bike) => (
          <Product key={bike._id} bike={bike}  />
        ))}
       </Col>
      </Container>
    );
};

export default Products;