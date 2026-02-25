import React from "react";
import Sidebar from "../Pages/Dashboard/Sidebar";
import { Outlet } from "react-router";

const DashboardLayOut = () => {
  return (
    <div className="min-h-screen bg-gray-100 md:flex">
      
      <Sidebar />

      <div className="flex-1 p-4 md:ml-64">
        <Outlet />
      </div>
    
    </div>
  );
};

export default DashboardLayOut;