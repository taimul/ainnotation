import React from 'react';
import AiDetails from './AiDetails/AiDetails';
import Banner from './Banner/Banner';
import OurCustomers from './ourCustomers/OurCustomers';
import ServicesCards from './ServicesCards/ServicesCards';
import TypeService from './TypeService/TypeService';
import UseCases from './UseCases/UseCases';

const Home = () => {
    return (
        <div>
            <Banner/>
            <AiDetails/>
            <TypeService/>
            <ServicesCards/>
            <UseCases/>
            <OurCustomers/>
        </div>
    );
};

export default Home;