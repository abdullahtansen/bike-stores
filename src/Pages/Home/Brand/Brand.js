import React from 'react';
import './Brand.css';
import { Container } from 'react-bootstrap';

const Brand = ({brand}) => {
    const {img} = brand;
    return (
           <Container>
                 <img className="brand-container" style={{ width: "150px"}} src={img} alt="" />
           </Container>
    );
};

export default Brand;