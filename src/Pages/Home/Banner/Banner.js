import React from "react";
import { Container, Carousel, Button } from "react-bootstrap";
import './Banner.css';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <Container fluid className="contained">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block image"
            src="https://i.ibb.co/qg3WyRP/banner3.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
          <Link to='/bikeCollection'>
              <Button className="banner_btn">Explore</Button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block image"
            src="https://i.ibb.co/1bTvsFT/banner.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <Link to='/bikeCollection'>
              <Button className="banner_btn">Explore</Button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block image"
            src="https://i.ibb.co/jy8BPFg/banner4.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
          <Link to='/bikeCollection'>
              <Button className="banner_btn">Explore</Button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Banner;
