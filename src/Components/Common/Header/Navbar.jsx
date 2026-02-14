import { Link } from "react-router";
import afcpLogo from "../../../assets/apfc.png";

const Navbar = () => {
  const nev = (
    <div className="flex font-bold text-white ">
      <li className="hover:bg-blue-400 rounded-lg">
        <Link to="/">Home</Link>
      </li>
      <li className="hover:bg-blue-400 rounded-lg">
        <Link to="/players">Players</Link>
      </li>
      <li className="hover:bg-blue-400 rounded-lg">
        <Link to="/matches">Matches</Link>
      </li>
      <li className="hover:bg-blue-400 rounded-lg">
        <Link to="/news">News</Link>
      </li>
    </div>
  );
  return (
    <div className="navbar  fixed z-10 bg-black/20 shadow-sm">
      <div className="container mx-auto flex">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm bg-black/20 dropdown-content  rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {nev}
            </ul>
          </div>
          <Link to="/">
            <img src={afcpLogo} alt="APFC Logo" className="h-12 w-12" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{nev}</ul>
        </div>
        <div className="navbar-end">
          <Link to="/dashboard">
            <button className="px-4 py-2 rounded-lg bg-blue-900 hover:bg-blue-600 transition font-semibold text-white">
              Dashboard
            </button>
          </Link>
        </div>
        <div className="navbar-end">
          <Link
            to="/login"
            className="px-4 py-2 rounded-lg bg-blue-900 hover:bg-blue-600 transition font-semibold text-white"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
