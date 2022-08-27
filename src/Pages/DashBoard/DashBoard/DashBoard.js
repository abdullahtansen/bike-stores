import React from "react";
import { Container,Nav,Navbar,Button } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Link,Outlet } from 'react-router-dom';
import { FaUser ,FaUsers} from 'react-icons/fa';
import './DashBoard.css';
import useAuth from "../../../hooks/useAuth";


const DashBoard = () => {
  const {admin,logout} = useAuth();
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
            <Link to="/dashboard" className="navbar"><FaUser />Dashboard</Link>
            <Link to="myProfile" className="navbar">My Profile</Link>
            <Link to="myOrder" className="navbar">My Order</Link>
            <Link to="addReview" className="navbar">Add Review</Link>
          {admin && <Link to="makeAdmin" className="navbar"><FaUsers />Make Admin</Link>}
          </Nav>
          
          </Navbar.Collapse>
          </Container>
          </Navbar>
          <Button onClick={logout}>Logout</Button>
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
