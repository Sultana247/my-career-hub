import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div className='max-w-7xl mx-auto manrope-font'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;