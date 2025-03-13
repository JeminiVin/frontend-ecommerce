import React from 'react'

import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaShoppingCart, FaUser } from "react-icons/fa"; // Importing icons
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">
        {/* Brand Logo */}
        <Link className="navbar-brand fw-bold text-primary" to="/">
          ShopX
        </Link>

        {/* Navbar Toggler for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/shop">Shop</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            
          </ul>

          

          {/* Icons: Cart & User Login */}
          <ul className="navbar-nav ms-3">
            <li className="nav-item">
              <Link className="nav-link position-relative" to="/cart">
                <FaShoppingCart size={20} />
              </Link>
            </li>
            <li className="nav-item ms-2">
              <Link className="nav-link" to="/login">
                <FaUser size={20} /> Login
              </Link>
            </li>
            <li className="nav-item ms-2">
              <Link className="nav-link" to="/signup">
                <FaUser size={20} /> Signup
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
