import React, { Component } from 'react';

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
            <a className="navbar-brand" href="../index.html">
              ROLLEDEX{' '}
            </a>
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
                  <a
                    href="../examples/signup-page.html"
                    className="dropdown-item"
                  >
                    <i className="material-icons">person_add</i> Sign In / Out
                  </a>
                  <a
                    href="../examples/profile-page.html"
                    className="dropdown-item"
                  >
                    <i className="material-icons">account_circle</i> Profile
                  </a>
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
