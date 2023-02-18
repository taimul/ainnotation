import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Shared/Footer';
import Header from '../Components/Shared/Header';

const Main = () => {
    return (
        <div className='dark:bg-black bg-white'>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;