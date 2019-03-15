import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import isEmpty from '../../validation/is-empty';

// The columns have specified values for each screen size
// The skillset column won't display on smaller than medium because d-none

class ProfileItem extends Component {
  render() {
    const { profile } = this.props;

    return (
      <div>
          Profile Item
      </div>
    );
  }
}

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;
