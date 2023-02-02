import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { AuthContext } from "../../contexts/UserContext";
import { FaUserAlt } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut().then().catch();
  };

  const menuItems = (
    <>
      <li>
        <Link to="/">
          <button className="btn btn-ghost">Home</button>
        </Link>
      </li>
      <li>
        <Link to="/services">
          <button className="btn btn-ghost">Services</button>
        </Link>
      </li>
      <li>
        <Link to="/about">
          <button className="btn btn-ghost">About</button>
        </Link>
      </li>
      <li>
        <Link to="/blog">
          <button className="btn btn-ghost">Blog</button>
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
            className="menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>

        <Link to="/">
          <img src={logo} alt="" className="w-28" />
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu-horizontal px-1">{menuItems}</ul>
      </div>

      <div className="navbar-end">
        {user?.email ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-outline m-1">
              <FaUserAlt /> <span className="ml-2">Admin</span>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <button
                  className="btn btn-ghost"
                  onClick={() => {
                    navigate("/add_service");
                  }}
                >
                  Add Service
                </button>
              </li>
              <li>
                <button
                  className="btn btn-ghost"
                  onClick={() => {
                    navigate("/my_reviews");
                  }}
                >
                  My Reviews
                </button>
              </li>
              <li>
                <button className="btn btn-ghost" onClick={handleLogOut}>
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/login">
            <button className="btn">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
