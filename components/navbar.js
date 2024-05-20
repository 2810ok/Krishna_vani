import React from 'react';

const Navbar = () => {
  return (
    <div>
      <style jsx>{`
        /* Navbar Styles */
        .navbar {
          height: 66px;
          background: linear-gradient(to right, #f8f9fa, #e9ecef);
          border-bottom: 2px solid #dee2e6;
          padding-left: 20px;
          padding-right: 20px;
        }

        .navbar-brand img {
          height: 50px;
          border-radius: 50%;
          transform: scale(1.5);
          transition: transform 0.3s;
        }

        .navbar-brand img:hover {
          transform: scale(1.8);
        }

        .navbar-nav .nav-link {
          font-size: 1.1rem;
          color: #343a40;
          font-weight: bold;
          transition: color 0.3s, background-color 0.3s;
          padding-left: 25px;
          margin-right: 25px;
          border-radius: 25px;
        }

        .navbar-nav .nav-link:hover {
          color: #ffffff !important;
          background-color: #000000;
        }

        .navbar h4 {
          font-size: 1.5rem;
          margin-left: 20px;
          margin-right: auto;
        }
      `}</style>

      {/* Navbar HTML */}
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container">
          {/* Logo */}
          <a className="navbar-brand" href="/">
            <img src="logo.jpg" alt="Your Logo" />
          </a>
          <h4 className="text-2xl font-bold">Buddy</h4>
          {/* Navbar Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Collapse */}
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">
                  Buddy
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">
                  Contact Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">
                  About Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
