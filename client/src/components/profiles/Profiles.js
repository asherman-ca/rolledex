import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../common/Spinner';
import { getProfiles } from '../../actions/profileActions';
import ProfileItem from './ProfileItem';

class Profiles extends Component {
  componentDidMount() {
    console.log('hits')
    this.props.getProfiles();
    console.log('hits2')
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
            <div className="col-md-12">
              <h1 className="display-4 text-center" style={{marginTop: '25px'}}><strong>Rolledex Users</strong></h1>
              <p className="lead text-center">
                Browse and connect with practitioners
              </p>
              <div className="row" style={{ paddingTop: '50px' }}>
                {profileItems}
              </div>
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
