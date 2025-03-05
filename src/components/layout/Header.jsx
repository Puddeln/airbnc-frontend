import React from "react";
import { Link } from "react-router-dom"; // import the Link component from react-router-dom

function Header() {
  return (
    <div className="header">
      <img src="src/assets/logo2.png" alt="Header logo" />
      <h1>Find your haunt </h1>

      <nav className="navbar">
        <ul>
          {/* Navigation links to different pages */}
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/host">Host</Link>
          </li>
          <li>
            <Link to="/property">Property</Link>
          </li>
          <li>
            <Link to="/user">User</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
