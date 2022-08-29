import React from "react";
import useAuth from "../../../hooks/useAuth";


const MyOrders = ({ order }) => {

  const { user } = useAuth();

  return (     
          <tr>
            <td>{order.product}</td>
            <td>{user.email}</td>
            <td>{order.number}</td>
            <td>{order.price}</td>
            <td>X</td>
          </tr>
  );
};

export default MyOrders;
