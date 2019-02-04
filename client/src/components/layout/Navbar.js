import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logOutUser } from '../../actions/authActions';
import { clearCurrentProfile } from '../../actions/profileActions';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

class Navbar extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logOutUser();
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const guestLinks = (
      <li className="dropdown nav-item">
        <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
          <i className="material-icons">account_circle</i> Profile
        </a>
        <div className="dropdown-menu dropdown-with-icons">
          <Link className="dropdown-item" to="/register">
            <i className="material-icons">account_circle</i> Register
          </Link>
          <Link className="dropdown-item" to="/login">
            <i className="material-icons">fingerprint</i> Login
          </Link>
        </div>
      </li>
    );

    const authLinks = (
      <li className="dropdown nav-item">
        <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
          <i className="material-icons">account_circle</i> Profile
        </a>
        <div className="dropdown-menu dropdown-with-icons">
          <a
            href="/"
            onClick={this.onLogoutClick.bind(this)}
            className="dropdown-item"
          >
            <i className="material-icons">fingerprint</i> Logout
          </a>
          <Link className="dropdown-item" to="/dashboard">
            <i className="material-icons">place</i> Dashboard
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
  { logOutUser, clearCurrentProfile }
)(withRouter(Navbar));
