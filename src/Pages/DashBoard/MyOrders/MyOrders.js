import React from "react";
import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import useAuth from "../../../hooks/useAuth";
const MyOrders = ({ order }) => {
  const { user } = useAuth();


  return (
    <Container>
      <Table responsive bordered hover variant="bg-light">
        <thead>
          <tr>
          <th>Product</th>
          <th>Email</th>
          <th>Number</th>
          <th>Price</th>
          <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{order.product}</td>
            <td>{user.email}</td>
            <td>{order.number}</td>
            <td>{order.price}</td>
            <td>X</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default MyOrders;
