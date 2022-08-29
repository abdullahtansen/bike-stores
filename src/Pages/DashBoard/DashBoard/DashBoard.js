import React from "react";
import { Container,Nav,Navbar,Button } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Link,Outlet } from 'react-router-dom';
import {FaUsers} from 'react-icons/fa';
import './DashBoard.css';
import useAuth from "../../../hooks/useAuth";


const DashBoard = () => {
  const {admin} = useAuth();
  return (
    <>
      <Row>
        <Col className='nav_menu' lg={4} sm={12} md={4}>
        <Navbar expand="lg">
        <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
       <Nav className="flex-column nav_menubar">
            <Link to="/dashboard" className="navbar">Home</Link>
            <Link to="myProfile" className="navbar">My Profile</Link>
            <Link to="myOrder" className="navbar">My Order</Link>
            <Link to="addReview" className="navbar">Add Review</Link>
          {admin && <Link to="makeAdmin" className="navbar"><FaUsers />Make Admin</Link>}
          </Nav>
        <div className="navMenu">
        <Nav>
          <Link to='/'><Button className="buttons">Home</Button></Link>  
          </Nav>
    
          </div>
          </Navbar.Collapse>
          </Container>
          </Navbar>
        </Col>
 
        <Col lg={8} sm={12} md={9}>
        <Outlet />
        </Col>
      </Row>
      </>
  );
};

export default DashBoard;
