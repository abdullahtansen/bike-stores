import React from "react";
import "./Brand.css";
import { Container, Col } from "react-bootstrap";

const Brand = ({ brand }) => {
  const { img } = brand;
  return (
    <Container className="brand-contain">
      <Col lg={3} md={3} sm={12}>
        <div>
        <img
          className="brand-container"
          style={{ width: "150px" }}
          src={img}
          alt=""
        />
        </div>
      </Col>
    </Container>
  );
};

export default Brand;
