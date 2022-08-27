import React, { useState } from 'react';
import { Button, Alert } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
    const [email,setEmail] = useState('');
    const [success,setSuccess] = useState(false);
    const {token} = useAuth();
    const handleOnBlur = e =>{
        setEmail(e.target.value)
    }
    const handleAdminSubmit = e =>{
        const user = {email};
        fetch('http://localhost:5000/users/admin',{
            method: 'PUT',
            headers:{
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount){
                setEmail('');
                setSuccess(true);
            }
        });
        e.preventDefault();
    }

    return (
        <div>
            <h2>Make An Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <input type="email" onBlur={handleOnBlur} placeholder="Enter Your Make admin Email" />
                <Button type="submit" variant="success">Make Admin</Button>
            </form>
            {success && <Alert variant="success">
         Congratulations ! Make Admin successfully!
        </Alert>}
        </div>
    );
};

export default MakeAdmin;