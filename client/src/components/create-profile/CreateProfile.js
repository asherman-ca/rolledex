import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import AwesomeGroup from '../common/AwesomeGroup';
import SelectListGroup from '../common/SelectListGroup';
import { createProfile } from '../../actions/profileActions';

class CreateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displaySocialInputs: false,
      handle: '',
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
    const { errors, displaySocialInputs } = this.state;

    // select options for status
    const options = [
      { label: '* Select Professional Status', value: 0 },
      { label: 'Developer', value: 'Developer' },
      { label: 'Junior Developer', value: 'Junioer Developer' },
      { label: 'Senior Developer', value: 'Senior Developer' },
      { label: 'Student or Learning', value: 'Student or Learning' },
      { label: 'Instructor or Teacher', value: 'Instructor or Teacher' },
      { label: 'Intern', value: 'Intern' },
      { label: 'Manager', value: 'Manager' },
      { label: 'Other', value: 'Other' }
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
                <div className="card card-signup">
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
  createProfile: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { createProfile }
)(withRouter(CreateProfile));
