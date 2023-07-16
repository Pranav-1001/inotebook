import React from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  let navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate('/login')
  }

  // window.addEventListener('load', () => {
  //   const hamburgerMenu = document.querySelector('.hamburger-menu');
  //   const navbarMenu = document.querySelector('.navbar-nav');

  //   hamburgerMenu.addEventListener('click', () => {
  //     navbarMenu.classList.toggle('active');
  //   });
  // });

  return (
    <nav
      style={{
        paddingTop: "15px",
        paddingBottom: "15px",
      }}
    >
      <div className="logo">
        <Link to="/">iNotebook</Link>
      </div>
      <div className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
      <div className="hamburger-menu">
        <div className="bar"></div>
      </div>
      <div className="navbar-login">
        {!localStorage.getItem("token")?
        <form className="d-flex">
          <Link className="btn btn-primary mx-2" to="/login" role="button">
            Login
          </Link>
          <Link className="btn btn-primary" to="/signup" role="button">
            Sign Up
          </Link>
        </form>: <button onClick={handleLogout} className="btn btn-primary">Logout</button>}
      </div>
    </nav>
  );
};

export default Navbar;
