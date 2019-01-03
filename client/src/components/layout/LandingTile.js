import React from 'react';
import PropTypes from 'prop-types';

const LandingTile = ({
  name,
  title,
  bio,
  insta,
  youtube,
  twitter,
  facebook,
  pic
}) => {
  return (
    <div className="col-md-6">
      <div className="card card-profile card-plain">
        <div className="row">
          <div className="col-md-5">
            <div className="card-header card-header-image">
              <a href="#pablo">
                <img className="img" src={pic} />
              </a>
            </div>
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <h4 className="card-title">{name}</h4>
              <h6 className="category text-muted">{title}</h6>
              <p className="card-description">{bio}</p>
            </div>
            <div className="card-footer justify-content-center">
              <a
                href={twitter}
                className="btn btn-just-icon btn-link btn-twitter"
              >
                <i className="fa fa-twitter" />
              </a>
              <a
                href={facebook}
                className="btn btn-just-icon btn-link btn-facebook"
              >
                <i className="fa fa-facebook-square" />
              </a>
              <a href={insta} class="btn btn-just-icon btn-link btn-instagram">
                <i class="fa fa-instagram" />
              </a>
              <a href={youtube} class="btn btn-just-icon btn-link btn-youtube">
                <i class="fa fa-youtube-play" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

LandingTile.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  insta: PropTypes.string.isRequired,
  youtube: PropTypes.string.isRequired,
  twitter: PropTypes.string.isRequired,
  facebook: PropTypes.string.isRequired,
  pic: PropTypes.string.isRequired
};

export default LandingTile;
