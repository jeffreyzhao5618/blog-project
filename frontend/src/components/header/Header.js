import React from "react";
import "./header.css";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="main-header pt-5 pb-1">
      <div className="container">
        <nav className="navbar navbar-expand-md justify-content-between">
          <Link className="logo navbar-brand" to="/">
            c
            <span className="dot">
              <i class="fas fa-circle"></i>
            </span>
            grass
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa fa-bars custom-toggler" aria-hidden="true"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav">
              <NavLink
                className="nav-item nav-link"
                activeClassName="active"
                exact
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className="nav-item nav-link"
                activeClassName="active"
                to="/about"
              >
                About
              </NavLink>
              <NavLink
                className="nav-item nav-link"
                activeClassName="active"
                to="/portfolio"
              >
                Portfolio
              </NavLink>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
