import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Brands from '../Brands/Brands';
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
           <Brands></Brands>
           <Teams></Teams>
           <Footer></Footer>
        </div>
    );
};

export default Home;