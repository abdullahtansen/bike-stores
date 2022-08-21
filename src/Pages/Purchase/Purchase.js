import React, { useState,useEffect } from 'react';
import { Button,Form,Container,Card  } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import { useParams } from 'react-router-dom';

const Purchase = () => {
  // const navigate = useNavigate();
  const { bikeId } = useParams();
    const {user} = useAuth();
    // const initialInfo = {userName: user.displayName, email:user.email,phone:''}
    const [orders,setOrders] = useState({});

    useEffect(() => {
      fetch(`http://localhost:5000/bikes/${bikeId}`)
        .then((res) => res.json())
        .then((data) => setOrders(data));
    }, [bikeId]);


    const handleOnBlur = e =>{
      const field = e.target.name;
      const value = e.target.value;
      const newInfo = {...orders};
      newInfo[field] = value;
      setOrders(newInfo);
    }

    const handlePurchaseSubmit = (e,data) =>{
      alert('submiting');
      // Collect Data
       const product = {
      name: user.displayName,
      email: user.email,
      productName: orders.name,
      Price: orders.price,
      number: data.number,
      address: data.address,
      img: orders.img,
    };
        // Send To the Server
      e.preventDefault();
    };
    return (
      <>
        <Container fluid className="bikes_container">
        <Card className="product" style={{ width: "350px" }}>
         <img className="bike_img" src={orders.img} alt="Fz-x" />
          <Card.Body>
            <Card.Title>{orders.name}</Card.Title>
            <Card.Text>
             <div>{orders.price}/=</div>
            </Card.Text>
              <Button variant="success" type="submit">Buy Now</Button>
          </Card.Body>
        </Card>
      </Container>
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
           defaultValue={orders.name}
           disabled
           autoFocus
         />
       </Form.Group>
       <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
         <Form.Label>User Name :</Form.Label>
         <Form.Control
           type="text"
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
           type="tel"
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
           defaultValue={orders.price}
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