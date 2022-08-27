import React, { useState } from 'react';
import { useEffect } from 'react';
import useAuth from '../../../hooks/useAuth';
import MyOrders from '../MyOrders/MyOrders';

const MyOrder = () => {
    const [orders,setOrders] = useState([]);
    const {user,token} = useAuth();
    
    useEffect(()=>{
        const url = `http://localhost:5000/order?email=${user.email}`;
        fetch(url,{
            headers: {
                'authorization': `Bearer ${token}`
            }
        })
        .then(res=>res.json())
        .then(data=>setOrders(data))},[user.email, token]);
        
    return (
        <div>
           {orders.map((order) => (
          <MyOrders key={order._id} order={order} />
        ))}
        </div>
    );
};

export default MyOrder;