import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
import { addEducation } from '../../actions/profileActions';
import { Link } from 'react-router-dom';

class EducationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gym: '',
      location: '',
      from: '',
      to: '',
      current: false,
      disabled: false,
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
    const eduData = {
      location: this.state.location,
      gym: this.state.gym,
      from: this.state.from,
      to: this.state.to,
      current: this.state.current
    };

    this.props.addEducation(eduData, this.props.history);
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
                    <div className="row mr-4">
                      <div className="col-md-6">
                        <TextFieldGroup
                          placeholder="From Date"
                          name="from"
                          value={this.state.from}
                          onChange={this.onChange}
                          error={errors.from}
                          type="date"
                          info="From Date"
                          prepend="date_range"
                        />
                      </div>
                      <div className="col-md-6">
                        <TextFieldGroup
                          placeholder="To Date"
                          name="to"
                          value={this.state.to}
                          onChange={this.onChange}
                          error={errors.to}
                          type="date"
                          info="to Date"
                          prepend="update"
                          disabled={this.state.disabled ? 'disabled' : ''}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="form-check" style={{ paddingTop: '0px' }}>
                        <label className="form-check-label">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="current"
                            value={this.state.current}
                            onChange={this.onCheck}
                            checked={this.state.current}
                            id="current"
                          />
                          Current
                          <span className="form-check-sign">
                            <span className="check" />
                          </span>
                        </label>
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

EducationForm.propTypes = {
  errors: PropTypes.object.isRequired,
  addEducation: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { addEducation }
)(withRouter(EducationForm));
