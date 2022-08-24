import React from 'react';
import { Container, Nav, Navbar,Button  } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {
  const {user,logout} = useAuth();
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Bike Store</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link to="/bikeCollection">Bike Collection</Link>
            </Nav>
            <Nav>
              {
                user?.email ?
                <>
                 <Link
                  style={{ textDecoration: "none", color: "white",marginRight:'10px' }}
                  to="/dashboard"
                >
                  <Button color="inherit">Dashboard</Button>
                </Link>
                  <Button onClick={logout}>Logout</Button>
                </>
                :
                <Link to="/login">
                    <Button>Login</Button>
                </Link>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Navigation;