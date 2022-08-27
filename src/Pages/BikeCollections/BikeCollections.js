import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import BikeCollection from '../BikeCollection/BikeCollection';
import './BikeCollections.css'

const BikeCollections = () => {
    const [bikes,setBikes] = useState([]);
    useEffect(() => {
         fetch(`http://localhost:5000/bikes`)
        .then((res) => res.json())
        .then((data) => setBikes(data));
    }, []);
    return (
        <Container>
        <h1 className="animate__animated animate__rubberBand">Bike Collections</h1>
       <Col md={4} lg={4} sm={12} className="bikes mt-2">
        {bikes.map((bike) => (
          <BikeCollection key={bike._id} bike={bike} />
        ))}
       </Col>
      </Container>
    );
};

export default BikeCollections;