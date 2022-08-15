import React from "react";
import Modal from "react-bootstrap/Modal";
import { Button, Form, Container, Card } from "react-bootstrap";

const Orders = ({ show, handleClose, bike }) => {
  const { name, price, img, description } = bike;

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <Container className='mb-5' style={{margin:'0px',padding:'0px'}}>
            <h2>Welcome To Buying Now Product!!</h2>
            <Card style={{ width: "350px",marginLeft:'12%',alignItems:'center'}}>
              <img className="mt-2" style={{width:'250px',borderRadius:'10px'}} src={img} alt="Fz-x" />
              <Card.Body>
                <Card.Title>Product : {name}</Card.Title>
                <Card.Text>
                  <div>{description}</div>
                  <div>{price}/=</div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Container>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Orders;
