import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from './pages/shared/Footer';
import Header from './pages/shared/Header';

const Layout = () => {
    
    return (
        <div>
        <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Layout;