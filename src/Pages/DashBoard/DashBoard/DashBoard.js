import React from "react";
import { Container,Nav,Navbar } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Link,Outlet } from 'react-router-dom';
import { FaUser ,FaUsers} from 'react-icons/fa';
import './DashBoard.css';


const DashBoard = () => {
  return (
    <Container fluid>
        <h1>DashBoard</h1>
      <Container fluid>
      <Row>
        <Col className='nav_menu' lg={4} sm={6} md={3}>
        <Navbar expand="lg">
        <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
         <Nav className="flex-column">
            <Link to="/dashboard" className="navbar"><FaUser />My Profile</Link>
            <Link to="makeAdmin" className="navbar"><FaUsers />Make Admin</Link>
            <Link to="myOrder" className="navbar">My Order</Link>
            <Link to="addReview" className="navbar">Add Review</Link>
            <Link to="updateProfile" className="navbar">Update Profile</Link>
          </Nav>
          </Navbar.Collapse>
          </Container>
          </Navbar>
        </Col>
        <Col lg={8} sm={6} md={9}>
        <Outlet />
        </Col>
      </Row>
      </Container>
    </Container>
  );
};

export default DashBoard;
