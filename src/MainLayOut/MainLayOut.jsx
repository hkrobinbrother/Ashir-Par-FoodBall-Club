import React from 'react';
import Navbar from '../Components/Common/Header/Navbar';
import { Outlet } from 'react-router';

const MainLayOut = () => {
    return (
        <div>
           <Navbar></Navbar>
           <Outlet/>
           
        </div>
    );
};

export default MainLayOut;