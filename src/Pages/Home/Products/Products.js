// import React, { useEffect, useState } from "react";
import React from "react";
import { Container } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Product from "../Product/Product";
import './Products.css'
const Products = () => {
    // const [bike, setBikes] = useState([]);
    const bikes = [
        {
            name:'Fz-x',
            description:'This is new bike',
            price: 2000,
            img:'https://i.ibb.co/xScjt5C/tvs-4v.jpg'
        },
        {
            name:'Fz-x',
            description:'This is new bike',
            price: 3000,
            img:'https://i.ibb.co/xScjt5C/tvs-4v.jpg'
        },
        {
            name:'Fz-x',
            description:'This is new bike',
            price: 5000,
            img:'https://i.ibb.co/xScjt5C/tvs-4v.jpg'
        },
        {
            name:'Fz-x',
            description:'This is new bike',
            price: 4000,
            img:'https://i.ibb.co/xScjt5C/tvs-4v.jpg'
        },
    ];
    // useEffect(() => {
    //      fetch(`http://localhost:5000/bikes`)
    //     .then((res) => res.json())
    //     .then((data) => setBikes(data));
    // }, []);
    return (
        <Container>
        <h1 className="animate__animated animate__rubberBand">Products</h1>
       <Col md={4} lg={4} sm={12} className="bikes mt-2">
        {bikes.map((bike) => (
          <Product key={bike._id} bike={bike} />
        ))}
       </Col>
      </Container>
    );
};

export default Products;