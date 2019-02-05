import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Spinner from '../common/Spinner';
import { getCurrentProfile } from '../../actions/profileActions';

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;

    let dashboardContent;

    if (profile === null || loading) {
      dashboardContent = <Spinner />;
    } else {
      if (Object.keys(profile).length > 0) {
        // has a profile
        dashboardContent = (
          <div className="profile-content">
            <div className="container">
              <div className="row">
                <div className="col-md-6 ml-auto mr-auto">
                  <div className="profile">
                    <div className="avatar">
                      <img
                        src={user.avatar}
                        alt="Cirle Image"
                        className="img-raised rounded-circle img-fluid"
                      />
                    </div>
                    <div className="name row">
                      <div className="col-2 avatar-btn">
                        <div class="dropdown">
                          <button
                            href="#pablo"
                            class="dropdown-toggle btn btn-primary"
                            data-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="material-icons">add</i>
                            <div class="ripple-container" />
                          </button>
                          <div
                            class="dropdown-menu dropdown-menu-right"
                            x-placement="bottom-end"
                            style={{
                              position: 'absolute',
                              top: '41px',
                              left: '129px',
                              willChange: 'top, left'
                            }}
                          >
                            <h6 class="dropdown-header">Dropdown header</h6>
                            <a href="#pablo" class="dropdown-item">
                              Edit Profile
                            </a>
                            <a href="#pablo" class="dropdown-item">
                              Add Tournament
                            </a>
                            <a href="#pablo" class="dropdown-item">
                              Add Gym
                            </a>
                            <div class="dropdown-divider" />
                            <a href="#pablo" class="dropdown-item">
                              Add Technique
                            </a>
                            <div class="dropdown-divider" />
                            <a href="#pablo" class="dropdown-item">
                              Logout
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-8">
                        <h3 className="title fonting">{profile.handle}</h3>
                      </div>
                      <div className="col-2" />
                    </div>
                    <div className="description text-center">
                      <p>{profile.bio}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row mt-4 mb-4">
              <div className="col-md-6 ml-auto mr-auto edit-buttons">
                <a href="#pablo">
                  <button class="btn btn-just-icon">
                    <i class="fab fa-instagram"> </i>
                  </button>
                </a>
                <a href="#pablo">
                  <button class="btn btn-just-icon">
                    <i class="fab fa-youtube"> </i>
                  </button>
                </a>
                <Link to="/add-experience">
                  <button className="btn">Edit Tournaments</button>
                </Link>
                <Link to="/create-profile">
                  <button className="btn">Edit Profile</button>
                </Link>
                <Link to="add-education">
                  <button className="btn">Edit Experience</button>
                </Link>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 ml-auto mb-5">
                <h3 className="text-center">
                  <strong>Tournament Record</strong>
                </h3>
              </div>
              <div className="col-md-4 mr-auto">
                <h3 className="text-center">
                  <strong>Gym Affiliations</strong>
                </h3>
              </div>
            </div>
          </div>
        );
      } else {
        // User is logged in but has no profile
        dashboardContent = (
          <div className="profile-content">
            <div className="container">
              <div className="row">
                <div className="col-md-6 ml-auto mr-auto">
                  <div className="profile">
                    <div className="avatar">
                      <img
                        src="../img/donjon.jpg"
                        alt="Cirle Image"
                        className="img-raised rounded-circle img-fluid"
                      />
                    </div>
                    <div className="name">
                      <h3 className="title fonting">Jon Danaher</h3>
                    </div>
                    <div className="description text-center">
                      <p>Setup your account by adding a profile</p>
                    </div>
                    <Link to="/create-profile" className="mt-3 btn">
                      Create Profile
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }
    }

    return (
      <div className="profile-page">
        <div
          className="page-header header-filter"
          data-parallax="true"
          style={{ backgroundImage: "url('../assets/img/examples/city.jpg')" }}
        />
        <div style={{ minHeight: '400px' }} className="main main-raised">
          {dashboardContent}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  { getCurrentProfile }
)(Dashboard);
