import React from "react";

const Navbar = ({ number }) => {
  return (
    <div>
      <header id="background" className="navbar">
        <h2 className="navbar-brand fs-2 ms-3">Fake Brand</h2>
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link" href="#/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/">
              Product
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/">
              About Us
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/">
              Cart {number}
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Navbar;
