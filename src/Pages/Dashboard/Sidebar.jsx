import React, { useState, useEffect, useContext } from "react";
import logo from "../../assets/apfc.png";
import { Link } from "react-router";
import { GrMenu } from "react-icons/gr";
import { FaUserCircle } from "react-icons/fa";
import { GiSoccerBall } from "react-icons/gi";
import { AuthContext } from "../../Context/AuthProvider";
import axios from "axios";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useContext(AuthContext); // Firebase user
  const [dbUser, setDbUser] = useState(null); // DB user to get role

  useEffect(() => {
    if (user?.email) {
      axios
        .get(`${import.meta.env.VITE_BASE_URL}/users/${user.email}`, {
          withCredentials: true,
        })
        .then((res) => setDbUser(res.data))
        .catch((err) => console.log(err));
    }
  }, [user]);

  return (
    <>
      {/* Hamburger Menu */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-50 bg-green-600 p-2 rounded text-white shadow"
      >
        <GrMenu />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-green-900 text-white px-4 py-6
        transform transition-transform duration-300 ease-in-out z-40
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        {/* Club Logo */}
        <div className="flex items-center justify-center mb-8 bg-green-800 p-3 rounded-xl shadow-lg">
          <Link to="/" className="flex items-center">
            <img src={logo} className="w-12 h-12 rounded-full border-2 border-white" alt="logo" />
            <h1 className="ml-2 font-['Pacifico',cursive] text-lg text-white">
              Ashir Par <br /> FC
            </h1>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col justify-between h-full">
          <div className="space-y-3">
            {/* All users see Dashboard icon */}
            <Link
              to="/dashboard"
              onClick={() => setIsOpen(false)}
              className="flex items-center px-4 py-2 rounded-lg hover:bg-green-700 transition"
            >
              <GiSoccerBall className="text-2xl mr-3" />
              Dashboard
            </Link>

            {/* Admin links */}
            {dbUser?.role === "admin" ? (
              <>
                <Link
                  to="/dashboard/players"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center px-4 py-2 rounded-lg hover:bg-green-700 transition"
                >
                  <GiSoccerBall className="text-xl mr-3" />
                  Manage Players
                </Link>

                <Link
                  to="/dashboard/next-match"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center px-4 py-2 rounded-lg hover:bg-green-700 transition"
                >
                  <GiSoccerBall className="text-xl mr-3" />
                  Next Match
                </Link>

                <Link
                  to="/dashboard/latest-result"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center px-4 py-2 rounded-lg hover:bg-green-700 transition"
                >
                  <GiSoccerBall className="text-xl mr-3" />
                  Latest Results
                </Link>

                <Link
                  to="/dashboard/news"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center px-4 py-2 rounded-lg hover:bg-green-700 transition"
                >
                  <GiSoccerBall className="text-xl mr-3" />
                  Club News
                </Link>

                <Link
                  to="/dashboard/fanmessage"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center px-4 py-2 rounded-lg hover:bg-green-700 transition"
                >
                  <GiSoccerBall className="text-xl mr-3" />
                  Fans’ Match Messages
                </Link>

                <Link
                  to="/dashboard/fanmessageForClub"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center px-4 py-2 rounded-lg hover:bg-green-700 transition"
                >
                  <GiSoccerBall className="text-xl mr-3" />
                  Fans’ Club Messages
                </Link>
              </>
            ) : (
              <>
                {/* Normal user links */}
                <Link
                  to="/dashboard/news"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center px-4 py-2 rounded-lg hover:bg-green-700 transition"
                >
                  <GiSoccerBall className="text-xl mr-3" />
                  Club News
                </Link>

                <Link
                  to="/dashboard/fanmessage"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center px-4 py-2 rounded-lg hover:bg-green-700 transition"
                >
                  <GiSoccerBall className="text-xl mr-3" />
                  Fans’ Match Messages
                </Link>

                <Link
                  to="/dashboard/fanmessageForClub"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center px-4 py-2 rounded-lg hover:bg-green-700 transition"
                >
                  <GiSoccerBall className="text-xl mr-3" />
                  Fans’ Club Messages
                </Link>
              </>
            )}
          </div>

          {/* Profile */}
          <div className="">
            <Link
              to="/dashboard/profile"
              onClick={() => setIsOpen(false)}
              className="flex items-center px-4 py-2 bg-green-800 rounded-xl hover:bg-green-700 transition transform hover:scale-105"
            >
              <FaUserCircle className="text-2xl mr-3" />
              Profile
            </Link>
          </div>
          <div></div>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;