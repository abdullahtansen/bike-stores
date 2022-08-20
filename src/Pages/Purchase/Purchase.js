import React, { useState } from 'react';
import {  Button, Form } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const Purchase = () => {
    const {user} = useAuth();
    const initialInfo = {userName: user.displayName, email:user.email,phone:''}
    const [orders,setOrders] = useState(initialInfo);

    const handleOnBlur = e =>{
      const field = e.target.name;
      const value = e.target.value;
      const newInfo = {...orders};
      newInfo[field] = value;
      setOrders(newInfo);
    }

    const handlePurchaseSubmit = e =>{
      alert('submiting');
      // Collect Data
      const purchases = {
        ...orders,

      }
      console.log(purchases);
      // Send To the Server
      e.preventDefault();
    };
    return (
      <>
        {/* <Container fluid className="bikes_container">
        <Card className="product" style={{ width: "350px" }}>
         <img className="bike_img" src={img} alt="Fz-x" />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
             <div>{price}/=</div>
            </Card.Text>
              <Button variant="success" type="submit">Buy Now</Button>
          </Card.Body>
        </Card>
      </Container> */}
       <Form onSubmit={handlePurchaseSubmit}>
       <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
         <Form.Label>Email address :</Form.Label>
         <Form.Control
          defaultValue={user.email}
          name="email"
          onBlur={handleOnBlur}
           type="email"
           placeholder="enter your email address"
           autoFocus
         />
       </Form.Group>
       <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
         <Form.Label>Product Name :</Form.Label>
         <Form.Control
           type="email"
          //  defaultValue={name}
           disabled
           autoFocus
         />
       </Form.Group>
       <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
         <Form.Label>User Name :</Form.Label>
         <Form.Control
           type="email"
           placeholder="Your Name"
           name='userName'
           defaultValue={user.displayName}
           autoFocus
           onBlur={handleOnBlur}
         />
       </Form.Group>
       <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
         <Form.Label>Phone No :</Form.Label>
         <Form.Control
           type="email"
           name="phone"
           placeholder="Your Phone Number"
           autoFocus
           onBlur={handleOnBlur}
         />
       </Form.Group>
       <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
         <Form.Label>Product Price :</Form.Label>
         <Form.Control
           type="text"
           disabled
          //  defaultValue={price}
           autoFocus
         />
       </Form.Group>
       <Button variant="success" type="submit">
       Purchase
     </Button>
     </Form>
     </>
    );
};

export default Purchase;