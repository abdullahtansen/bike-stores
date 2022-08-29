import React, { useState } from 'react';
import { useEffect } from 'react';
import useAuth from '../../../hooks/useAuth';
import MyOrders from '../MyOrders/MyOrders';
import { Table } from 'react-bootstrap';

const MyOrder = () => {
    const [orders,setOrders] = useState([]);
    const {user,token} = useAuth();
    
    useEffect(()=>{
        const url = `https://glacial-lowlands-76878.herokuapp.com/order?email=${user.email}`;
        fetch(url,{
            headers: {
                'authorization': `Bearer ${token}`
            }
        })
        .then(res=>res.json())
        .then(data=>setOrders(data))},[user.email, token]);
        
    return (
        <div className='mt-5'>
             <Table responsive hover>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Email</th>
              <th>Number</th>
              <th>Total Price</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
          {orders.map((order) => (
          <MyOrders key={order._id} order={order} />
        ))}
          </tbody>
        </Table>

          
        </div>
    );
};

export default MyOrder;