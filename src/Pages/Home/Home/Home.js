import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';
import Teams from './../Teams/Teams';


const Home = () => {
    return (
        <div>
           <Navigation></Navigation>
           <Banner></Banner>
           <Products></Products>
           <Reviews></Reviews>
           <Teams></Teams>
        </div>
    );
};

export default Home;