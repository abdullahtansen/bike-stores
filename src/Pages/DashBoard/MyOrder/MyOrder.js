import React, { useState } from 'react';
import { useEffect } from 'react';
import useAuth from '../../../hooks/useAuth';
import MyOrders from '../MyOrders/MyOrders';

const MyOrder = () => {
    const [orders,setOrders] = useState([]);
    const {user} = useAuth();
    
    useEffect(()=>{
        fetch(`http://localhost:5000/order?email=${user.email}`)
        .then(res=>res.json())
        .then(data=>setOrders(data))},[user.email]);
        
    return (
        <div>
           {orders.map((order) => (
          <MyOrders key={order._id} order={order} />
        ))}
        </div>
    );
};

export default MyOrder;