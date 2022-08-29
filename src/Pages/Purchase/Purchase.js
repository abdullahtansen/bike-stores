import React, { useState, useEffect } from "react";
import { Button, Form, Container, Card } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import { useParams } from "react-router-dom";
import "./Purchase.css";
import Navigation from "./../Shared/Navigation/Navigation";
import Footer from "./../Shared/Footer/Footer";

const Purchase = () => {
  const { bikesId } = useParams();
  const { user } = useAuth();
  const initialInfo = {
    userName: user.displayName,
    email: user.email,
    phone: "",
    address: "",
  };
  const [orders, setOrders] = useState(initialInfo);

  useEffect(() => {
    fetch(`https://glacial-lowlands-76878.herokuapp.com/bikes/${bikesId}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [bikesId]);

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...orders };
    newInfo[field] = value;
    setOrders(newInfo);
  };

  const handlePurchaseSubmit = (e) => {
    // Collect Data
    const product = {
      name: user.displayName,
      email: user.email,
      number: e.target.phone.value,
      address: e.target.address.value,
      price: e.target.price.value,
      product: e.target.product.value,
    };
    // Send To the Server
    // console.log(product);
    fetch("https://glacial-lowlands-76878.herokuapp.com/order", {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.insertedId) {
          setOrders(true);
          alert('Order Confirmed');
        }
      });

    e.preventDefault();
  };
  return (
    <>
      <Navigation></Navigation>
      <Container className="full_container">
        <Container className="purchase_container" style={{ marginTop: "10px" }}>
          <Card className="product" style={{ width: "350px" }}>
            <img className="bike_img" src={orders.img} alt="Fz-x" />
            <Card.Body>
              <Card.Title>
                <h4>{orders.name}</h4>
              </Card.Title>
              <Card.Text>
                <div className="price_btn">${orders.price}</div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Container>
        <Form onSubmit={handlePurchaseSubmit} className='form_purchases'>
          <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
            <Form.Label className="email_labels">Email address :</Form.Label>
            <input
              className="input_types"
              defaultValue={user.email}
              name="email"
              disabled
              onBlur={handleOnBlur}
              type="email"
              placeholder="enter your email address"
            />
          </Form.Group>
          <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
            <Form.Label className="email_labels">Product Name :</Form.Label>
            <input
              className="input_types"
              type="email"
              name="product"
              defaultValue={orders.name}
              disabled
            />
          </Form.Group>
          <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
            <Form.Label className="email_labels">User Name :</Form.Label>
            <input
              className="input_types"
              type="text"
              placeholder="Your Name"
              name="userName"
              defaultValue={user.displayName}
              onBlur={handleOnBlur}
            />
          </Form.Group>
          <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
            <Form.Label className="email_labels">Phone No :</Form.Label>
            <input
              className="input_types"
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              onBlur={handleOnBlur}
            />
          </Form.Group>
          <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
            <Form.Label className="email_labels">Product Price :</Form.Label>
            <input
              className="input_types"
              type="text"
              disabled
              name="price"
              defaultValue={orders.price}
            />
          </Form.Group>
          <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
            <Form.Label className="email_labels">Address :</Form.Label>
            <input
            className="input_types"
              type="text"
              name="address"
              placeholder="Enter your address"
            />
          </Form.Group>
          <Button variant="success" type="submit">
            Purchase
          </Button>
        </Form>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default Purchase;
