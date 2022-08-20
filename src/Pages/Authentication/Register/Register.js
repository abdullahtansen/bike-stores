import React from 'react';
import { Container, Row, Col, Form, Button, Spinner,Alert } from 'react-bootstrap';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [loginData,setLoginData] = useState({});
    const navigate = useNavigate();
    const {user, registerUser, loading,error} = useAuth();

    // Input Value Er Jonno 
    const handleOnBlur = (e) =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    // Form er Data newar jonno
    const handleRegisterSubmit = e =>{
        if(loginData.password !== loginData.password2){
            alert('your password did not match');
            return;
        }
        registerUser(loginData.email, loginData.password,loginData.name,navigate);
        e.preventDefault();
    }
    return (
        <Container>
        <h1>Register Page</h1>
      <Row>
        <Col lg={6} sm={12} md={6}>
          { !loading &&
            <Form onSubmit={handleRegisterSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Your Name</Form.Label>
              <Form.Control onBlur={handleOnBlur} name="name" type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control onBlur={handleOnBlur} name="email" type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control onBlur={handleOnBlur} name="password" type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Re-Type Password</Form.Label>
              <Form.Control onBlur={handleOnBlur} name="password2" type="password" placeholder="Re-Type Password" />
            </Form.Group>
            <Button variant="success" type="submit">
              Register
            </Button>
            <Link to="/login"> 
            <Button variant="text">already registered ! Please Login?</Button>
           </Link>
          </Form>
          }
          {
            loading && <Spinner animation="grow" variant="info" />
          }
          {user?.email && <Alert variant="success">
         Congratulations ! user created successfully!
        </Alert>}
        {error && <Alert variant="danger">
         {error}
        </Alert>}
        </Col>
        <Col lg={6} sm={12} md={6}>
          {/* <img src="" alt="" /> */}
          <h2>Image Part</h2>
        </Col>
      </Row>
    </Container>
    );
};

export default Register;