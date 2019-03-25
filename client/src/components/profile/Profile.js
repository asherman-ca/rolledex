import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Spinner from '../common/Spinner';
import ExpTable from '../dashboard/ExpTable'
import EduTable from '../dashboard/EduTable'
import SocialButtons from '../dashboard/SocialButtons';
import ProfileTables from '../dashboard/ProfileTables';
import { getProfileById } from '../../actions/profileActions';
import { getUserPosts } from '../../actions/postActions';

class Profile extends Component {
  componentDidMount() {
    this.props.getProfileById(this.props.match.params.id);
    this.props.getUserPosts(this.props.match.params.id);
  }

  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;
    const { posts } = this.props.post;

    let dashboardContent;

    if (profile === null || loading) {
      dashboardContent = <Spinner />;
    } else {
      if (Object.keys(profile).length > 0) {
        // has a profile

        let educationContent;

        if (profile.education.length > 0) {
          educationContent = (
            <EduTable 
              edu={profile.education}
            />
          )
        } else {
          educationContent = <p className="text-center fonting whiting">No Education Available</p>
        }

        let experienceContent;

        if (profile.experience.length > 0) {
          experienceContent = (
            <ExpTable 
              exp={profile.experience}
            />
          )
        } else {
          experienceContent = <p className="text-center fonting whiting">No Experience Available</p>
        }

        dashboardContent = (
          <div className="profile-content">
            <div className="container">
              <div style={{padding: "0px", paddingBottom: "20px"}} className="section">
                <div className="row">
                  <div className="col-md-6 ml-auto mr-auto">
                    <div className="profile">
                      <div className="avatar">
                        <img
                          src={profile.user.avatar}
                          alt="Cirle Image"
                          className="img-raised rounded-circle img-fluid"
                        />
                      </div>
                      <div className="name row">
                        <div className="col-md-8 edit-buttons">
                          <h3 style={{margin: "0px"}} className="title fonting">{profile.handle}</h3>
                        </div>
                        <SocialButtons />
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
            </div>
            <ProfileTables 
              exp={experienceContent} 
              edu={educationContent} 
              posts={posts} 
              user={user}
              />
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
                        src={user.avatar}
                        alt="Cirle Image"
                        className="img-raised rounded-circle img-fluid"
                      />
                    </div>
                    <div className="name">
                      <h3 className="title fonting">{user.name}</h3>
                    </div>
                    <div className="description text-center">
                      <p>User hasn't setup profile</p>
                    </div>
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
        <div style={{ minHeight: '75vh' }} className="main main-raised">
          {dashboardContent}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth,
  post: state.post
});

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
  getUserPosts: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  { getProfileById, getUserPosts }
)(Profile);