import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./head.css";

export default function Header() {
  React.useEffect(() => {
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        let currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.querySelector('nav').style.opacity = "1";
        } else {
            document.querySelector('nav').style.opacity = "0";
        }
        prevScrollpos = currentScrollPos;
    };
}, []);
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <Link className="navbar-brand" to="">
              <img className="im4" src="star.JPG" alt="Logo" /> The Cleanic
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/Plans">Plans</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="Services">Services</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/About">About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Log-in <img className="im7" src="profile.JPG" alt="Profile" />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/cart">
                    <button id="btn1" className="btn btn-primary">Cart</button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
