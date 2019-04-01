import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { resetUser } from '../../actions/authActions';
import { Link } from 'react-router-dom';
import TextFieldGroup from '../common/TextFieldGroup';

class Reset extends Component {
  constructor() {
    super();
    this.state = {
      password: '',
      password2: '',
      errors: {}
    };
  }

  componentWillReceiveProps(newProps) {
    if (newProps.errors) {
      this.setState({ errors: newProps.errors });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const resetData = {
      password: this.state.password,
      password2: this.state.password2
    };
    this.props.resetUser(resetData, this.props.history);
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
              <div className="col-md-5 col-sm-6 ml-auto mr-auto">
                <div className="card card-signup" style={{ padding: '20px' }}>
                  <form
                    className="form mb-auto"
                    method=""
                    action=""
                    onSubmit={this.onSubmit}
                    style={{ height: '100%' }}
                  >
                    <div className="form-style">
                      <h3 className="card-title text-center">Reset Password</h3>
                      <p className="description text-center">
                        *Standard password requirements
                      </p>
                      <div className="mr-4">
                        <TextFieldGroup
                          placeholder="Password"
                          name="password"
                          type="password"
                          value={this.state.email}
                          onChange={this.onChange}
                          error={errors.email}
                          prepend="lock_outline"
                        />
                        <TextFieldGroup
                          placeholder="Confirm Password"
                          name="password2"
                          type="password"
                          value={this.state.password2}
                          onChange={this.onChange}
                          error={errors.password2}
                          prepend="lock_outline"
                        />
                      </div>
                      <div className="text-center row" style={{margin: '0px'}}>
                            <Link style={{margin: '0px', padding: '12px 0px'}} 
                                  className="col-4 ml-auto mr-auto mt-4 btn btn-warning" 
                                  to="/dashboard">
                              Go Back
                            </Link>
                            <input 
                              style={{margin: '0px', padding: '12px 0px'}} 
                              type="submit" 
                              className="mt-4 ml-auto mr-auto col-4 btn btn-success" />
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

Reset.propTypes = {
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  resetUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { resetUser }
)(withRouter(Reset));
