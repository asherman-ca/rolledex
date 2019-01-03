import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-color-on-scroll navbar-transparent fixed-top navbar-expand-lg"
        color-on-scroll="100"
        id="sectionsNav"
      >
        <div className="container">
          <div className="navbar-translate">
            <Link className="navbar-brand" to="/">
              ROLLEDEX{' '}
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
              <span className="navbar-toggler-icon" />
              <span className="navbar-toggler-icon" />
            </button>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className="dropdown nav-item">
                <a
                  href="#"
                  className="dropdown-toggle nav-link"
                  data-toggle="dropdown"
                >
                  <i className="material-icons">view_day</i> Sections
                </a>
                <div className="dropdown-menu dropdown-with-icons">
                  <a href="../sections.html#headers" className="dropdown-item">
                    <i className="material-icons">dns</i> Profiles
                  </a>
                  <a href="../sections.html#features" className="dropdown-item">
                    <i className="material-icons">build</i> Techniques
                  </a>
                </div>
              </li>
              <li className="dropdown nav-item">
                <a
                  href="#"
                  className="dropdown-toggle nav-link"
                  data-toggle="dropdown"
                >
                  <i className="material-icons">account_circle</i> Account
                </a>
                <div className="dropdown-menu dropdown-with-icons">
                  <Link className="dropdown-item" to="/register">
                    <i className="material-icons">account_circle</i> Register
                  </Link>
                  <Link className="dropdown-item" to="/login">
                    <i className="material-icons">fingerprint</i> Login
                  </Link>
                  <Link className="dropdown-item" to="/">
                    <i className="material-icons">place</i> Landing
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
