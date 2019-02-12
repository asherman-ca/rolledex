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

    // let experienceContent;

    // if (profile === null || loading) {
    //   } else {
    //   if (Object.keys(profile).length > 0 && profile.experience.length > 0) {
    //     experienceContent = (
    //       <p>Experience List</p>
    //     )
    //   } else {
    //     experienceContent = <p>No Experience Available</p>;
    //   }
    // }

    // let educationContent;

    // if (profile === null || loading) {
    //   } else {
    //   if (Object.keys(profile).length > 0 && profile.education.length > 0) {
    //     educationContent = (
    //       <p>Education List</p>
    //     )
    //   } else {
    //     educationContent = <p>No Education Available</p>
    //   }
    // }

    let dashboardContent;

    if (profile === null || loading) {
      dashboardContent = <Spinner />;
    } else {
      if (Object.keys(profile).length > 0) {
        // has a profile

        let educationContent;

        if (profile.education.length > 0) {
          educationContent = (
            <p className="text-center">Education List</p>
          )
        } else {
          educationContent = <p className="text-center">No Education Available</p>
        }

        let experienceContent;

        if (profile.experience.length > 0) {
          experienceContent = (
            <p className="text-center">Experience List</p>
          )
        } else {
          experienceContent = <p className="text-center">No Experience Available</p>
        }

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
                        <div className="dropdown">
                          <button
                            href="#pablo"
                            className="dropdown-toggle btn btn-primary"
                            data-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="material-icons">add</i>
                            <div className="ripple-container" />
                          </button>
                          <div
                            className="dropdown-menu dropdown-menu-right"
                            x-placement="bottom-end"
                            style={{
                              position: 'absolute',
                              top: '41px',
                              left: '129px',
                              willChange: 'top, left'
                            }}
                          >
                            <h6 className="dropdown-header">Profile Actions</h6>
              

                            <Link to="/create-profile" className="dropdown-item">
                              Edit Profile
                            </Link>
                            <Link
                              to="/add-experience"
                              className="dropdown-item"
                            >
                              Add Tournament
                            </Link>
                            <Link
                              to="/add-education"
                              className="dropdown-item"
                            >
                              Add Gym
                            </Link>
                            <div className="dropdown-divider" />
                            <Link
                              to="/add-post"
                              className="dropdown-item"
                            >
                              Add Technique
                            </Link>
                            <div className="dropdown-divider" />
                            <a href="#pablo" className="dropdown-item">
                              Delete Account
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-8">
                        <h3 className="title fonting">{profile.handle}</h3>
                      </div>
                      <div className="col-2 edit-buttons">
                        <a href="#pablo">
                          <button className="btn btn-just-icon btn-instagram">
                            <i className="fab fa-instagram"> </i>
                          </button>
                        </a>
                        <a href="#pablo">
                          <button className="btn btn-just-icon btn-youtube">
                            <i className="fab fa-youtube"> </i>
                          </button>
                        </a>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-8 mr-auto ml-auto">
                        <div className="description text-center">
                          <p>{profile.bio}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4 ml-auto mb-5">
                <h3 className="text-center title fonting">
                  <strong>Tournament Record</strong>
                </h3>
                {experienceContent}
              </div>
              <div className="col-md-4 mr-auto">
                <h3 className="text-center title fonting">
                  <strong>Gym Affiliations</strong>
                </h3>
                {educationContent}
              </div>
            </div>
          

            <div className="row">
              <div className="col-md-4 ml-auto">
                <h3 className="title fonting text-center">Technique</h3>
              </div>
              <div className="col-md-4 mr-auto">
              </div>
            </div>

            <div className="row">
              <div className="col-md-2" />
              <div className="col-md-8">
                <p className="text-center">All the posts!</p>
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
  auth: state.auth,
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
