import React from "react";
import { useState } from "react";
import { Form, Button, Container, Row, Col,Spinner,Alert  } from "react-bootstrap";
import { Link, useLocation,useNavigate } from 'react-router-dom';
import useAuth from "../../../hooks/useAuth";
import './Login.css';

const Login = () => {
    const [loginData,setLoginData] = useState({});
    const {user,loginUser,signInWithGoogle,loading, error} = useAuth();

    let navigate = useNavigate();
    let location = useLocation();

     let from = location.state?.from?.pathname || "/";

    // Input Value Er Jonno 
    const handleOnBlur = (e) =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    // Form er Data newar jonno
    const handleLoginSubmit = e =>{
        loginUser(loginData.email,loginData.password,navigate,from);
        e.preventDefault();
        navigate(from, { replace: true });
    }

    const handleGoogleSignIn =()=>{
        signInWithGoogle();
        navigate(from, { replace: true });
    }

  return (
    <Container>
        <h1>Login Page</h1>
      <Row>
        <Col lg={6} sm={12} md={6}>
          <Container className="form">
          <Form onSubmit={handleLoginSubmit} className="login">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="email_label">Email address</Form.Label>
              <input className="input_type" onBlur={handleOnBlur} name="email" type="email" placeholder="Enter Your email" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="email_label">Password</Form.Label>
              <input className="input_type" type="password" onBlur={handleOnBlur} name="password"  placeholder="Password" />
            </Form.Group>
            <Button variant="success" type="submit" className="login_button">
              Login
            </Button>
            <Link to="/register"> 
            <p className="register mt-2">New User? Please Register</p>
           </Link>
           {
            loading && <Spinner animation="grow" variant="info" />
          }
          {user?.email && <Alert variant="success">
         Congratulations ! user Login successfully!
        </Alert>}
        {error && <Alert variant="danger">
         {error}
        </Alert>}
          </Form>
          <Button className="googleBtn" onClick={handleGoogleSignIn}>Google signup</Button>
          </Container>
        </Col>
        <Col lg={6} sm={12} md={6}>
          <img className="img" src={'https://i.ibb.co/w68J2L8/login.png'} alt="" />
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
