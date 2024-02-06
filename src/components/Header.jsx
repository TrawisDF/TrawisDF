import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">TravisDF🚀</Link>
      </div>
      <ul className="nav-links">
        <li className="nav-link">
          <Link to="/about">About</Link>
        </li>
        <li className="nav-link">
          <Link to="#">Projects</Link>
        </li>
        <li className="nav-link">
          <Link to="/contacts">Contacts</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
