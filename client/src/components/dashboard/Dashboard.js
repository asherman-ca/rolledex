import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Spinner from '../common/Spinner';
import ExpTable from './ExpTable'
import EduTable from './EduTable'
import Dropdown from './Dropdown';
import SocialButtons from './SocialButtons';
import ProfileTables from './ProfileTables';
import { getCurrentProfile, deleteAccount } from '../../actions/profileActions';
import { getUserPosts } from '../../actions/postActions';

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
    this.props.getUserPosts(this.props.auth.user.id);
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
          educationContent = <p className="text-center fonting">No Education Available</p>
        }

        let experienceContent;

        if (profile.experience.length > 0) {
          experienceContent = (
            <ExpTable 
              exp={profile.experience}
            />
          )
        } else {
          experienceContent = <p className="text-center fonting">No Experience Available</p>
        }

        dashboardContent = (
          <div className="profile-content">
            <div className="container">
              <div style={{padding: "0px"}} className="section">
                <div className="row">
                  <div className="col-md-6 ml-auto mr-auto">
                    <div className="profile">
                      <Link to={`profile/${user.id}`} className="avatar">
                        <img
                          src={user.avatar}
                          alt="./img/miyao.jpg"
                          className="img-raised rounded-circle img-fluid"
                        />
                      </Link>
                      <div className="name row">
                        <Dropdown remover={this.props.deleteAccount} />
                        <div className="col-4 edit-buttons">
                          <h3 style={{margin: "0px"}} className="title fonting">{profile.handle}</h3>
                        </div>
                        {profile.social ? <SocialButtons social={profile.social} /> : <SocialButtons />}
                      </div>
                      { profile.bio ?
                      <div className="row">
                        <div className="col-8 mr-auto ml-auto">
                          <div className="description text-center">
                            <p>{profile.bio}</p>
                          </div>
                        </div>
                      </div> : null
                      }
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
              showDelete={true}
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
                        alt="./img/miyao.jpg"
                        className="img-raised rounded-circle img-fluid"
                      />
                    </div>
                    <div className="name">
                      <h3 className="title fonting">{user.name}</h3>
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

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
  getUserPosts: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  { getCurrentProfile, getUserPosts, deleteAccount }
)(Dashboard);