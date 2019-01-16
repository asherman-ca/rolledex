import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import AwesomeGroup from '../common/AwesomeGroup';
import SelectListGroup from '../common/SelectListGroup';
// import { createProfile } from '../../actions/profileActions';

class EducationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gym: '',
      location: '',
      from: '',
      to: '',
      website: '',
      current: false,
      description: '',
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
      location: this.state.location,
      gym: this.state.gym,
      website: this.state.website,
      from: this.state.from,
      to: this.state.to,
      current: this.state.current,
      description: this.state.description
    };

    this.props.createProfile(profileData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;

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
                    <h3 className="card-title text-center">Add a Gym</h3>
                    <p className="description text-center">
                      This information can be viewed by others
                    </p>
                    <div className="row mr-4">
                      <div className="col-md-6">
                        <TextFieldGroup
                          placeholder="Name"
                          name="gym"
                          type="text"
                          value={this.state.gym}
                          onChange={this.onChange}
                          error={errors.gym}
                          prepend="person_pin"
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
                          prepend="home"
                        />
                      </div>
                    </div>
                    <div className="text-center mt-4 mb-4">
                      <input type="submit" className="btn btn-info btn-round" />
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
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(
  mapStateToProps,
  {}
)(withRouter(EducationForm));
