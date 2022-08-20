import React from 'react';
import { Container } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import BikeCollection from '../BikeCollection/BikeCollection';

const BikeCollections = () => {
    const bikes = [
        {   id: 1,
            name:'Fz-x',
            description:'This is new bike',
            price: 2000,
            img:'https://i.ibb.co/xScjt5C/tvs-4v.jpg'
        },
        {   id: 2,
            name:'Fz-x',
            description:'This is new bike',
            price: 3000,
            img:'https://i.ibb.co/xScjt5C/tvs-4v.jpg'
        },
        {   id: 3,
            name:'Fz-x',
            description:'This is new bike',
            price: 5000,
            img:'https://i.ibb.co/xScjt5C/tvs-4v.jpg'
        },
        {   id: 4,
            name:'Fz-x',
            description:'This is new bike',
            price: 4000,
            img:'https://i.ibb.co/xScjt5C/tvs-4v.jpg'
        },
        {   id: 5,
            name:'Fz-x',
            description:'This is new bike',
            price: 2000,
            img:'https://i.ibb.co/xScjt5C/tvs-4v.jpg'
        },
        {   id: 6,
            name:'Fz-x',
            description:'This is new bike',
            price: 3000,
            img:'https://i.ibb.co/xScjt5C/tvs-4v.jpg'
        },
        {   id: 7,
            name:'Fz-x',
            description:'This is new bike',
            price: 5000,
            img:'https://i.ibb.co/xScjt5C/tvs-4v.jpg'
        },
        {   id: 8,
            name:'Fz-x',
            description:'This is new bike',
            price: 4000,
            img:'https://i.ibb.co/xScjt5C/tvs-4v.jpg'
        },
        {   id: 9,
            name:'Fz-x',
            description:'This is new bike',
            price: 5000,
            img:'https://i.ibb.co/xScjt5C/tvs-4v.jpg'
        },
        {   id: 10,
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
        <h1 className="animate__animated animate__rubberBand">Bike Collections</h1>
       <Col md={4} lg={4} sm={12} className="bikes mt-2">
        {bikes.map((bike) => (
          <BikeCollection key={bike.id} bike={bike} />
        ))}
       </Col>
      </Container>
    );
};

export default BikeCollections;