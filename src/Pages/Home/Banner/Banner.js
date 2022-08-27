import React from "react";
import { Container, Carousel, Button } from "react-bootstrap";
import './Banner.css';

const Banner = () => {
  return (
    <Container fluid className="contained">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block image"
            src="https://i.ibb.co/fdQ4Kmz/bike-banner-1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <Button className="banner_btn">Explore</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block image"
            src="https://i.ibb.co/qBz0pPb/bike-Banner-1.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <Button className="banner_btn">Explore</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block image"
            src="https://i.ibb.co/vQV7r09/bike-banner-1.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <Button className="banner_btn">Explore</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Banner;
