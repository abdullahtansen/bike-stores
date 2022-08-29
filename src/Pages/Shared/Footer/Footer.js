import React from "react";
import "./Footer.css";
import { Col } from "react-bootstrap";

const Footer = () => {
  return (
    <Col lg={12} sm={12} md={12}>
      <div className="footer">
        <h2 className="footer_title">Bike Store Industries Ltd.</h2>
        <h5 style={{ color: "black" }}>Providing reliable tech since 2012</h5>
        <h5 style={{ color: "black" }}>
          Copyright © 2022 - All right reserved ||{" "}
          <span style={{ color: "darkRed",fontWeightt:'600' }}>Tansen</span>
        </h5>
      </div>
    </Col>
  );
};

export default Footer;
