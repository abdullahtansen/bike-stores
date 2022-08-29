import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import { Container } from 'react-bootstrap';
import './About.css'

const About = () => {
    return (
       <>
       <Navigation></Navigation>
        <Container fluid className="about_section">
            <h2 className='mt-5 about_title'>Our Bike Stores</h2>
            <Container className="mb-5">
            <p className="about">
            Our company is working with trustworthiness.Our company service is provided by everyone with honesty.We have good relationship with other brands
            and we provide good quality goods in business.We bring the bikes
            from foreign countries and we import them legally. We have no shortage of customers due to the good service. To know about our company,contact our company address.
            <br /> Thank you.
            </p>
            </Container>
        </Container>
        <Footer></Footer>
       </>
    );
};

export default About;