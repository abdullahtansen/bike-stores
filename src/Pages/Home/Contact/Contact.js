import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import { Container } from "react-bootstrap";
import './Contact.css';
import { FaLocationArrow,FaPhoneSquareAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <Navigation></Navigation>
      <Container fluid>
        <h1 className="contact_title">Contact Address</h1>
        <hr />
        <p className="contact">
        <FaLocationArrow/> 722/1, Kalabagan, Dhanmondi, Dhaka-1209.
          <br />
          <FaPhoneSquareAlt />Helpline : 01700000000 , 01700000001 , 01700000003
        </p>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default Contact;
