import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
import { addExperience } from '../../actions/profileActions';
import { Link } from 'react-router-dom';

class ExperienceForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      location: '',
      date: '',
      place: '',
      errors: {}
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit = e => {
    e.preventDefault();
    const expData = {
      name: this.state.location,
      location: this.state.gym,
      date: this.state.from,
      place: this.state.to
    };

    this.props.addExperience(expData, this.props.history);
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onCheck = e => {
    this.setState({
      current: !this.state.current,
      disabled: !this.state.disabled
    });
  };

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
                    <h3 className="card-title text-center">Add a Tournament</h3>
                    <p className="description text-center">
                      This information can be viewed by others
                    </p>
                    <div className="row mr-4">
                      <div className="col-md-6">
                        <TextFieldGroup
                          placeholder="Name"
                          name="name"
                          type="text"
                          value={this.state.name}
                          onChange={this.onChange}
                          error={errors.name}
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
                    <div className="row mr-4">
                      <div className="col-md-6">
                        <TextFieldGroup
                          placeholder="Date"
                          name="date"
                          value={this.state.date}
                          onChange={this.onChange}
                          error={errors.date}
                          type="date"
                          info="Date"
                          prepend="date_range"
                        />
                      </div>
                      <div className="col-md-6">
                        <TextFieldGroup
                          placeholder="Place"
                          name="place"
                          type="text"
                          value={this.state.place}
                          onChange={this.onChange}
                          error={errors.place}
                          prepend="home"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="text-center mt-4 mb-4">
                          <Link className="btn btn-info" to="/dashboard">
                            Go Back
                          </Link>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="text-center mt-4 mb-4">
                          <input type="submit" className="btn btn-info" />
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

ExperienceForm.propTypes = {
  errors: PropTypes.object.isRequired,
  addExperience: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { addExperience }
)(withRouter(ExperienceForm));
