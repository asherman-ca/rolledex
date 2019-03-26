import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import isEmpty from '../../validation/is-empty';

// The columns have specified values for each screen size
// The skillset column won't display on smaller than medium because d-none

class ProfileItem extends Component {
  render() {
    const { profile } = this.props;
    return (
      <div className="col-md-4">
        <div className="card card-profile lightbg" style={{ marginBottom: '50px', height: '335px' }}>
          <div className="card-header card-avatar">
            <Link to={`profile/${profile.user._id}`}>
              <img className="img" alt="../img/miyao.jpg" src={profile.user.avatar} />
            </Link>
          </div>
          <div className="card-body">
            <h4 className="card-title">{profile.handle}</h4>
            <h6 className="card-category text-muted">
              New Rolledex User
            </h6>
            <p>
              {profile.bio ? profile.bio.slice(0,125) + "..." : `In an average 5 round training session I will get
              submitted 15 times. Take that information and ask
              yourself if you really have no ego.`}
            </p>
          </div>
          <div className="card-footer justify-content-center">
            <a href={profile.social ? profile.social.instagram ? profile.social.instagram : `https://www.instagram.com/danaherjohn/?hl=en` : `https://www.instagram.com/danaherjohn/?hl=en`}>
              <button class="btn btn-just-icon btn-round btn-instagram">
                <i class="fab fa-instagram"> </i>
              </button>
            </a>
            <a href={profile.social ? profile.social.youtube ? profile.social.youtube : `https://www.instagram.com/danaherjohn/?hl=en` : `https://www.instagram.com/danaherjohn/?hl=en`}>
              <button class="btn btn-just-icon btn-round btn-youtube">
                <i class="fab fa-youtube"> </i>
              </button>
            </a>
          </div>
        </div>
      </div>               
    );
  }
}

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;
