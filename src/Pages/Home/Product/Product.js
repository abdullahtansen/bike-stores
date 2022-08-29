import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Product.css";
import { Link } from "react-router-dom";

const Product = ({ bike }) => {
  const { name, description, price, img, _id } = bike;
  return (
    <Container className="bikes_container">
      <Row>
        <Col lg={4} md={4} sm={12}>
          <Card className="card" style={{ width: "350px", height: "430px" }}>
            <img className="bike_img" src={img} alt="Fz-x" />
            <Card.Body>
              <Card.Title>
                <h4>{name}</h4>
              </Card.Title>
              <Card.Text>{description.slice(0, 200)}</Card.Text>
            </Card.Body>
            <Card.Text className="product_footer">
              <div className="price_btn">${price}</div>
              <div className="Button">
                <Link to={`/purchases/${_id}`}>
                  <Button className="button">Buy Now</Button>
                </Link>
              </div>
            </Card.Text>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Product;
