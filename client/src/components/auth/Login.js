import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions';
import TextFieldGroup from '../common/TextFieldGroup';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errors: {}
    };
  }

  componentWillReceiveProps(newProps) {
    if (newProps.auth.isAuthenticated) {
      this.props.history.push('./dashboard');
    }

    if (newProps.errors) {
      this.setState({ errors: newProps.errors });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const newUser = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(newUser);
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
              <div className="col-md-4 col-sm-6 ml-auto mr-auto">
                <div className="card card-signup">
                  <form
                    className="form"
                    method=""
                    action=""
                    onSubmit={this.onSubmit}
                  >
                    <div className="text-center">
                      <h4 className="card-title mb-4">Login</h4>
                    </div>
                    <div class="card-body">
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text">
                            <i class="material-icons">mail</i>
                          </span>
                        </div>
                        <input
                          type="email"
                          class="form-control"
                          placeholder={'Email'}
                          value={this.state.email}
                          onChange={this.onChange}
                          name="email"
                        />
                        {errors.email && (
                          <span className="description">{errors.email}</span>
                        )}
                      </div>
                      <div class="input-group mt-4">
                        <div class="input-group-prepend">
                          <span class="input-group-text">
                            <i class="material-icons">lock_outline</i>
                          </span>
                        </div>

                        <input
                          type="password"
                          class="form-control"
                          placeholder={'Password'}
                          value={this.state.password}
                          onChange={this.onChange}
                          name="password"
                        />
                        {errors.password && (
                          <div className="description">{errors.password}</div>
                        )}
                      </div>
                    </div>
                    <div className="text-center">
                      <input
                        type="submit"
                        className="mt-4 btn btn-info btn-round"
                      />
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

Login.propTypes = {
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  loginUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(withRouter(Login));
