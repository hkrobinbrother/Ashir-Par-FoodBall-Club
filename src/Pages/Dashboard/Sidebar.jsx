import React, { useState } from "react";

import logo from "../../assets/apfc.png";
import { GrLogout } from "react-icons/gr";
import { Link } from "react-router";

// import MenuItem from "../../Components/MenuItem";

const Sidebar = () => {
  //  const { logOut } = useAuth()
  const [isActive, setActive] = useState(false);
  //   const [role,isLoading] = useRole()

  // Sidebar Responsive Handler

  return (
    <div
      className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
        isActive && "-translate-x-full"
      }  md:translate-x-0  transition duration-200 ease-in-out`}
    >
      <div>
        <div>
          <div className="w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-lime-100    mx-auto">
            <Link to="/" className="flex items-center">
              <img
                // className='hidden md:block'
                src={logo}
                className="w-10 h-10"
                alt="logo"
                width="100"
                height="100"
              />
              <h1 className='font-["Pacifico",cursive] ml-2'> Ashir Par <br /> FoodBall Club</h1>
            </Link>
          </div>
        </div>

        {/* Nav Items */}
        <div className="flex flex-col justify-between flex-1 mt-6">
          <nav>
            {/*  Menu Items */}
            <h1>hello</h1>
          </nav>
        </div>
      </div>


    </div>
  );
};

export default Sidebar;
