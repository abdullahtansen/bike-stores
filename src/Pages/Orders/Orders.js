import React from "react";
import Modal from "react-bootstrap/Modal";
import { Button, Form, Container, Card } from "react-bootstrap";

const Orders = ({ show, handleClose, bike }) => {
  const { name, price, img} = bike;

  const handlePurchaseSubmit = e =>{
    alert('submiting');
    // Collect Data
    // Send To the Server

    handleClose();
    e.preventDefault();
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <Container className='' style={{margin:'0px',padding:'0px'}}>
            <h2 style={{textAlign:'center',color:'tomato'}}>Purchase Now!!</h2>
            <Card style={{ width: "180px",marginLeft:'30%',alignItems:'center',borderRadius:'10px'}}>
              <img className="mt-0" style={{width:'180px',borderRadius:'10px'}} src={img} alt="Fz-x" />
              <Card.Body>
                <Card.Title>Product : {name}</Card.Title>
              </Card.Body>
            </Card>
          </Container>
          <Form onSubmit={handlePurchaseSubmit}>
            <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address :</Form.Label>
              <Form.Control
                type="email"
                placeholder="enter your email address"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
              <Form.Label>Product Name :</Form.Label>
              <Form.Control
                type="email"
                defaultValue={name}
                disabled
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
              <Form.Label>User Name :</Form.Label>
              <Form.Control
                type="email"
                placeholder="Your Name"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
              <Form.Label>Phone No :</Form.Label>
              <Form.Control
                type="email"
                placeholder="Your Phone Number"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
              <Form.Label>Product Price :</Form.Label>
              <Form.Control
                type="text"
                disabled
                defaultValue={price}
                autoFocus
              />
            </Form.Group>
            <Button variant="success" type="submit">
            Purchase
          </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose} style={{marginRight:'45%'}}>
            Cancel
          </Button>

        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Orders;
