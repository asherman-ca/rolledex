import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logOutUser } from '../../actions/authActions';
import PropTypes from 'prop-types';

class Navbar extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logOutUser();
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const guestLinks = (
      <li className="dropdown nav-item">
        <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
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
    );

    const authLinks = (
      <li className="dropdown nav-item">
        <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
          <i className="material-icons">account_circle</i> Account
        </a>
        <div className="dropdown-menu dropdown-with-icons">
          <Link className="dropdown-item" to="/">
            <i className="material-icons">fingerprint</i> Logout
          </Link>
        </div>
      </li>
    );

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
              {isAuthenticated ? authLinks : guestLinks}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  logOutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logOutUser }
)(Navbar);
