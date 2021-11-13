import React from 'react';
import Login from '../../Login/Login/Login';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';
import Navigation from './../Navigation/Navigation';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Products></Products>
            <WhyChooseUs></WhyChooseUs>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;