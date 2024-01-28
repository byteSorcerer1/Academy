import React from "react";
import './Navbar.css'
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-md bg-body-tertiary fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              src="https://www.meram.bel.tr/assets/img/logo.svg"
              alt=""
              style={{ width: "60px", height: "60px" }}
            ></img>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav" style={{ fontSize: "18px" }}>
            <Link className="nav-link" to="/">Anasayfa</Link>
            <Link className="nav-link" to="/services">Hizmetler</Link>
            <Link className="nav-link" to="/events">Etkinlikler</Link>
            <Link className="nav-link" to="/projects">Projeler</Link>
            <Link className="nav-link" to="/contact">İletişim</Link>
            </div>
          </div>

                  </div>
      </nav>
    </div>
  );
}

export default Navbar;
