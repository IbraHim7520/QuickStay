import React from 'react';
import Navbar from "../Components/Navbar"
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
          <div className=''>
              <Outlet></Outlet>
          </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;