import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import BikeCollection from '../BikeCollection/BikeCollection';
import './BikeCollections.css'
import Navigation from './../Shared/Navigation/Navigation';
import Footer from './../Shared/Footer/Footer';

const BikeCollections = () => {
    const [bikes,setBikes] = useState([]);
    useEffect(() => {
         fetch(`https://glacial-lowlands-76878.herokuapp.com/bikes`)
        .then((res) => res.json())
        .then((data) => setBikes(data));
    }, []);
    return (
        <>
        <Navigation></Navigation>
        <Container>
        <h1 className="bike_collection">Bike Collections</h1>
       <Col md={4} lg={4} sm={12} className="bikes mt-2">
        {bikes.map((bike) => (
          <BikeCollection key={bike._id} bike={bike} />
        ))}
       </Col>
      </Container>
      <Footer></Footer>
      </>
    );
};

export default BikeCollections;