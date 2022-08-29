import React from 'react';
import { Container } from 'react-bootstrap';
import Brand from '../Brand/Brand';
import './Brands.css';

const ourBrands = [
    {
      id: 1,
      img: "https://i.ibb.co/mH0m9zf/Bajaj-Motorcycles-Logo.png",
    },
    {
      id: 2,
      img: "https://i.ibb.co/5nM1rGJ/Hero-logo.png",
    
    },
    {
      id: 3,
      img: "https://i.ibb.co/WBPJqFv/pulser-Logo.jpg",
     
    },
    {
      id: 4,
      img: "https://i.ibb.co/877fQsm/TVS-Motor-Company-Logo.png",
     
    },
    {
      id: 5,
      img: "https://i.ibb.co/xGzxwSz/Yamaha-Motorcycle-Logo.png",
     
    },
    
  ];


const Brands = () => {
    return (
        <div>
        <h2 className="brand_tittle" style={{color:'tomato',fontWeight:'700',marginBottom:'20px'}}>Our Brand</h2>
        <Container className="brand_container">
          {ourBrands.map((brand) => (
            <Brand key={brand.id} brand={brand} />
          ))}
        </Container>
      </div>
    );
};

export default Brands;