import React from 'react';
import { Container, Row, Col, Form, Button, Spinner,Alert } from 'react-bootstrap';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Register.css'

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
        <Container className="register_container">
        <h1>Register Page</h1>
      <Row>
        <Col lg={6} sm={12} md={6}>
        <Container className='form'>
          { !loading &&
            <Form className="login" onSubmit={handleRegisterSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label className="email_label">Your Name</Form.Label>
              <input className='input_type' onBlur={handleOnBlur} name="name" type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="email_label">Email address</Form.Label>
              <input className='input_type' onBlur={handleOnBlur} name="email" type="email" placeholder="Enter your email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="email_label">Password</Form.Label>
              <input className="input_type" onBlur={handleOnBlur} name="password" type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label className="email_label">Re-Type Password</Form.Label>
              <input className='input_type' onBlur={handleOnBlur} name="password2" type="password" placeholder="Re-Type Password" />
            </Form.Group>
            <Button className="reg_button" type="submit">
              Register
            </Button>
            <Link to="/login"> 
            <p className='register'>already registered ! Please Login?</p>
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
        </Container>
        </Col>
        <Col lg={6} sm={12} md={6}>
        <img className="img" src={'https://i.ibb.co/w68J2L8/login.png'} alt="" />
        </Col>
      </Row>
    </Container>
    );
};

export default Register;