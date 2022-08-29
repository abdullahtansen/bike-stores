import React from 'react';
import { Container, Nav, Navbar,Button  } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import useAuth from '../../../hooks/useAuth';
import './Navigation.css';

const Navigation = () => {
  const {user,logout} = useAuth();
    return (
        <Navbar fixed="top" className='navBar' collapseOnSelect expand="lg" bg="dark" variant="dark"> 
        <Container>
          <Navbar.Brand className='me-5'>
            <Link to="/">
              <h3 style={{color:'yellowgreen',}}>Bike Store</h3>
              </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto navigation">
              <Link to="/bikeCollection" style={{marginRight:'2px'}}>Bike Collection</Link>
              <Link to="/about"  style={{marginLeft:'15px'}}>About</Link>
              <Link to="/contact"  style={{marginLeft:'15px'}}>Contact Us</Link>
            </Nav>
            <Nav>
              {
                user?.email ?
                <>
                 <Link
                  style={{ textDecoration: "none", color: "white",marginRight:'10px' }}
                  to="/dashboard"
                >
                  <Button className='buttons'>Dashboard</Button>
                </Link>
                  <Button className='logOut_button' onClick={logout}>Logout</Button>
                </>
                :
                <Link to="/login">
                    <Button className='buttons'>Login</Button>
                </Link>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Navigation;