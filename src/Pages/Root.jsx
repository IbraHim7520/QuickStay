import React from 'react';
import Navbar from "../Components/Navbar"
import { Outlet, useLocation } from 'react-router';
import Footer from '../Components/Footer';
const Root = () => {
    const path = useLocation();
    return (
        <div>
                        <Navbar></Navbar>
                        <div className='min-h-screen'>
                            <Outlet></Outlet>
                        </div>
                        <Footer></Footer>
        </div>
    );
};

export default Root;