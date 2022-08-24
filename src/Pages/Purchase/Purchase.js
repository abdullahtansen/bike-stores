import React, { useState,useEffect } from 'react';
import { Button,Form,Container,Card  } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import { useParams } from 'react-router-dom';

const Purchase = () => {
  const { bikesId } = useParams();
    const {user} = useAuth();
    const initialInfo = {userName: user.displayName, email:user.email, phone:'',address:''}
    const [orders,setOrders] = useState(initialInfo);

    useEffect(() => {
      fetch(`http://localhost:5000/bikes/${bikesId}`)
        .then((res) => res.json())
        .then((data) => setOrders(data));
    }, [bikesId]);

    const handleOnBlur = e =>{
      const field = e.target.name;
      const value = e.target.value;
      const newInfo = {...orders};
      newInfo[field] = value;
      setOrders(newInfo);
    }

    const handlePurchaseSubmit = (e) =>{
      // Collect Data
       const product = {
        name: user.displayName,
        email: user.email,
        number: e.target.phone.value,
        address:e.target.address.value,
        price: e.target.price.value,
        product:e.target.product.value,
    };
     // Send To the Server
    // console.log(product);
    fetch('http://localhost:5000/order', {
		method: 'POST',
		body: JSON.stringify(product),
		headers: {
		  "Content-type": "application/json"
		}
	  })
	  .then(response => response.json())
	  .then(data => {
      if(data.insertedId){
        setOrders(true)
      }
    })
       
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
         />
       </Form.Group>
       <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
         <Form.Label>Product Name :</Form.Label>
         <Form.Control
           type="email"
           name="product"
           defaultValue={orders.name}
           disabled
         />
       </Form.Group>
       <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
         <Form.Label>User Name :</Form.Label>
         <Form.Control
           type="text"
           placeholder="Your Name"
           name='userName'
           defaultValue={user.displayName}
           onBlur={handleOnBlur}
         />
       </Form.Group>
       <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
         <Form.Label>Phone No :</Form.Label>
         <Form.Control
           type="tel"
           name="phone"
           placeholder="Your Phone Number"
           onBlur={handleOnBlur}
         />
       </Form.Group>
       <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
         <Form.Label>Product Price :</Form.Label>
         <Form.Control
           type="text"
           disabled
           name="price"
           defaultValue={orders.price}
         />
       </Form.Group>
       <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
         <Form.Label>Product Price :</Form.Label>
         <Form.Control
           type="text"
           name="address"
           placeholder='Enter your address'
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