import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { Button, Card } from 'react-bootstrap';
import './MyProfile.css';

const MyProfile = () => {
    const {user,logout} = useAuth()
    return (
        <>
         <Card className='profile_container' style={{ width: '15rem' }}>
         <Card.Img variant="top" className='profileImg' src={user.photoURL} />
         <Card.Body>
           <Card.Title>{user.displayName}</Card.Title>
           <Button className='profile_btn' onClick={logout}>Logout</Button>
         </Card.Body>
       </Card>
       </>
    );
};

export default MyProfile;