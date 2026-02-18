import React, { useState } from "react";
import logo from "../../assets/apfc.png";
import { Link } from "react-router";
import { GrMenu } from "react-icons/gr";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-50 bg-orange-400 p-2 rounded"
      >
        <GrMenu />
      </button>

      <div
        className={`fixed flex flex-col  bg-orange-200  h-full px-4 py-6 transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0`}
      >
        {/* Logo */}
        <div className="flex items-center justify-center bg-orange-100 p-3 rounded-lg shadow">
          <Link to="/" className="flex items-center">
            <img src={logo} className="w-10 h-10" alt="logo" />
            <h1 className='font-["Pacifico",cursive] ml-2'>
              Ashir Par <br /> Football Club
            </h1>
          </Link>
        </div>

        {/* Nav Links */}
        <nav className="mt-8 space-y-2">
          <Link
            to="/dashboard/latest-result"
            className="block px-4 py-2 bg-blue-50 rounded-lg hover:bg-orange-300 transition"
          >
            Latest Result Update
          </Link>

          <Link
            to="/dashboard/next-match"
            className="block px-4 py-2 bg-blue-50 rounded-lg hover:bg-orange-300 transition"
          >
            Next Match Update
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
