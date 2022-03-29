import React from 'react';
import Banner from '../Banner/Banner';
import Galleries from '../Galleries/Galleries';
import Services from '../Services/Services';
import Subscribe from '../Subscribe/Subscribe';


const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Galleries></Galleries>
            <Services></Services>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;