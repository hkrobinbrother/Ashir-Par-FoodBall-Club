import { Link } from "react-router";
import afcpLogo from "../../../assets/apfc.png";
import useAuth from "../../../Hook/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();

  const handleLogout = async () => {
    await logOut();
  };

  const navLinks = (
    <>
      <li>
        <Link to="/" className="hover:text-blue-400">Home</Link>
      </li>
      <li>
        <Link to="/players" className="hover:text-blue-400">Players</Link>
      </li>
      <li>
        <Link to="/matches" className="hover:text-blue-400">Matches</Link>
      </li>
      <li>
        <Link to="/news" className="hover:text-blue-400">News</Link>
      </li>
    </>
  );

  return (
    <div className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/60 shadow-md">
      <div className="container mx-auto navbar px-4">

        {/* Left Side */}
        <div className="navbar-start">

          {/* Mobile Menu */}
          <div className="dropdown lg:hidden">
            <label tabIndex={0} className="btn btn-ghost text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-3 shadow bg-black rounded-box w-52 text-white"
            >
              {navLinks}
            </ul>
          </div>

          {/* Logo */}
          <Link to="/">
            <img src={afcpLogo} alt="APFC Logo" className="h-12 w-12" />
          </Link>
        </div>

        {/* Center Menu (Desktop) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-6 text-white font-semibold">
            {navLinks}
          </ul>
        </div>

        {/* Right Side */}
        <div className="navbar-end gap-3">
          {user ? (
            <>
              <Link to="/dashboard">
                <button className="px-4 py-2 rounded-lg bg-blue-700 hover:bg-blue-500 transition text-white">
                  Dashboard
                </button>
              </Link>

              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-500 transition text-white"
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/login">
              <button className="px-4 py-2 rounded-lg bg-blue-700 hover:bg-blue-500 transition text-white">
                Login
              </button>
            </Link>
          )}
        </div>

      </div>
    </div>
  );
};

export default Navbar;