import React from "react";
import { Container,Nav } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import MyOrder from "../MyOrder/MyOrder";

const DashBoard = () => {
  return (
    <Container fluid>
        <h1>DashBoard</h1>
      <Row>
        <Col lg={4} sm={6} md={4}>
          <Nav className="flex-column">
            <Link to="/dashboard">DashBoard</Link>
            <Link to="/dashboard">Make Admin</Link>
            <Link to="/dashboard">My Order</Link>
          </Nav>
        </Col>
        <Col lg={8} sm={6} md={8}>
            <MakeAdmin component={<MakeAdmin />} />
            <MyOrder component={<MyOrder />} />
        </Col>
      </Row>
    </Container>
  );
};

export default DashBoard;
