import React from 'react';
import Sidebar from '../Pages/Dashboard/Sidebar';
import { Outlet } from 'react-router';

const DashboardLayOut = () => {
    return (
        <div className=' md:flex bg-gray-100 min-h-screen'>
            
           <div>
             <Sidebar/>
           </div>
            <div className=' md:flex ml-62 bg-gray-100 min-h-screen flex-1 p-4'>
               
                    <Outlet/>
                    
                
            </div>
        </div>
    );
};

export default DashboardLayOut;