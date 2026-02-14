import React from 'react';
import Sidebar from '../Pages/Dashboard/Sidebar';
import { Outlet } from 'react-router';

const DashboardLayOut = () => {
    return (
        <div className='relative min-h-screen md:flex bg-white'>
            <Sidebar/>
            <div className='relative min-h-screen md:flex bg-white'>
                <div className='p-5'>
                    <Outlet/>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayOut;