import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { Button } from 'react-bootstrap';

const MyProfile = () => {
    const {user,logout} = useAuth()
    return (
        <div>
           <h2>{user.displayName}</h2>
           <img src={user.photoURL} alt="" />
           <Button onClick={logout}>Logout</Button>
        </div>
    );
};

export default MyProfile;