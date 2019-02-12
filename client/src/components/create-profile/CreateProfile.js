import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import AwesomeGroup from '../common/AwesomeGroup';
import SelectListGroup from '../common/SelectListGroup';
import { createProfile } from '../../actions/profileActions';
import { Link } from 'react-router-dom';

// TODO: load getCurrentProfile in DidMount and then use render logic (like dashboard) to account for page reloading

class CreateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handle: this.props.profile.profile.handle,
      gym: '',
      belt: '',
      location: '',
      bio: '',
      youtube: '',
      instagram: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();
    const profileData = {
      handle: this.state.handle,
      belt: this.state.belt,
      location: this.state.location,
      gym: this.state.gym,
      bio: this.state.bio,
      youtube: this.state.youtube,
      instagram: this.state.instagram
    };

    this.props.createProfile(profileData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;
    const { profile } = this.props.profile
    console.log(profile)

    // select options for status
    const options = [
      { label: '* Select Belt', value: 0 },
      { label: 'White', value: 'White' },
      { label: 'Blue', value: 'Blue' },
      { label: 'Purple', value: 'Purple' },
      { label: 'Brown', value: 'Brown' },
      { label: 'Black', value: 'Black' }
    ];

    return (
      <div className="signup-page">
        <div
          className="page-header header-filter"
          style={{
            backgroundImage: "url('../assets/img/bg7.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'topcenter'
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-8 ml-auto mr-auto">
                <div className="card card-signup" style={{ padding: '20px' }}>
                  <form onSubmit={this.onSubmit} className="form mb-auto">
                    <h3 className="card-title text-center">
                      Create Your Profile
                    </h3>
                    <p className="description text-center">
                      This information can be viewed by others
                    </p>
                    <div className="row mr-4">
                      <div className="col-md-6">
                        <TextFieldGroup
                          placeholder="Handle"
                          name="handle"
                          type="text"
                          value={this.state.handle}
                          onChange={this.onChange}
                          error={errors.handle}
                          prepend="person_pin"
                        />
                      </div>
                      <div className="col-md-6">
                        <TextFieldGroup
                          placeholder="Current Gym"
                          name="gym"
                          type="text"
                          value={this.state.gym}
                          onChange={this.onChange}
                          error={errors.gym}
                          prepend="home"
                        />
                      </div>
                    </div>
                    <div className="row mr-4">
                      <div className="col-md-6">
                        <TextFieldGroup
                          placeholder="Belt"
                          name="belt"
                          type="text"
                          value={this.state.belt}
                          onChange={this.onChange}
                          error={errors.belt}
                          prepend="horizontal_split"
                        />
                      </div>
                      <div className="col-md-6">
                        <TextFieldGroup
                          placeholder="Location"
                          name="location"
                          type="text"
                          value={this.state.location}
                          onChange={this.onChange}
                          error={errors.location}
                          prepend="location_on"
                        />
                      </div>
                    </div>
                    <div className="row mr-4">
                      <div className="col-12">
                        <TextAreaFieldGroup
                          placeholder="Bio"
                          name="bio"
                          value={this.state.bio}
                          onChange={this.onChange}
                          error={errors.bio}
                          prepend="description"
                        />
                      </div>
                    </div>
                    <div className="row mr-4" style={{ marginLeft: '-9px' }}>
                      <div className="col-md-6">
                        <AwesomeGroup
                          placeholder="Instagram"
                          name="instagram"
                          type="text"
                          value={this.state.instagram}
                          onChange={this.onChange}
                          error={errors.instagram}
                          prepend="fab fa-instagram"
                        />
                      </div>
                      <div className="col-md-6">
                        <AwesomeGroup
                          placeholder="Youtube"
                          name="youtube"
                          type="text"
                          value={this.state.youtube}
                          onChange={this.onChange}
                          error={errors.youtube}
                          prepend="fab fa-youtube"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="text-center mt-4 mb-4">
                          <Link className="btn btn-warning" to="/dashboard">
                            Go Back
                          </Link>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="text-center mt-4 mb-4">
                          <input type="submit" className="btn btn-success" />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CreateProfile.propTypes = {
  errors: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  createProfile: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { createProfile }
)(withRouter(CreateProfile));
