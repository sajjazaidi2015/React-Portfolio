import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header class="header">
      <h1 class="styled-text">
        <span>S</span>ajjad <span>Z</span>aidi
      </h1>
      <nav>
        <Link class="a" to="/">
          Home Page
          <div></div>
        </Link>
        <Link class="a" to="/about">
          About<div></div>
        </Link>
        <Link class="a" to="/portfolio">
          Portfolio<div></div>
        </Link>
        <Link class="a" to="/contact">
          Contact<div></div>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
