import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../common/Spinner';
import { getProfiles } from '../../actions/profileActions';
import ProfileItem from './ProfileItem';

class Profiles extends Component {
  componentDidMount() {
    this.props.getProfiles();
  }

  render() {
    const { profiles, loading } = this.props.profile;
    let profileItems;

    if (profiles === null || loading) {
      profileItems = <Spinner />;
    } else {
      if (profiles.length > 0) {
        profileItems = profiles
          .slice(0, 10)
          .map(item => <ProfileItem profile={item} key={item._id} />);
      } else {
        profileItems = <h4>No profiles found</h4>;
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
        <div className="container">
          <div className="row">
          <div className="col-md-6 tech-box" style={{marginTop: '50px', marginBottom: '60px'}}>
            <h1 className="display-4 fonting" style={{marginTop: "0px", marginBottom: "0px"}}><strong>Rolledex Users</strong></h1>
            <p className="lead tech-paragraph description fonting" style={{margin: "0px", paddingTop: '5px'}}>
              Find your Favorite Practitioners
            </p>
          </div>
          <div className="col-md-6" />
          <div className="row">
            {profileItems}
          </div>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getProfiles }
)(Profiles);
