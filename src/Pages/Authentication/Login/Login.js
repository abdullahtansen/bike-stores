import React from "react";
import { useState } from "react";
import { Form, Button, Container, Row, Col,Spinner,Alert  } from "react-bootstrap";
import { Link, useLocation,useNavigate } from 'react-router-dom';
import useAuth from "../../../hooks/useAuth";

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
          <Form onSubmit={handleLoginSubmit}>
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
            <Button variant="success" type="submit">
              Login
            </Button>
            <Link to="/register"> 
            <Button>New User? Please Register</Button>
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
          <p>------------------------------</p>
          <Button onClick={handleGoogleSignIn}>Google signup</Button>
        </Col>
        <Col lg={6} sm={12} md={6}>
          {/* <img src="" alt="" /> */}
          <h2>Image Part</h2>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
