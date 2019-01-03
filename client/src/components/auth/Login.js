import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
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

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const newUser = {
      email: this.state.email,
      password: this.state.password
    };
    console.log(newUser);
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
          <div class="container">
            <div class="row">
              <div class="col-md-4 col-sm-6 ml-auto mr-auto">
                <div class="card card-signup">
                  <form class="form" method="" action="">
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
                          placeholder="Email..."
                        />
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
                          placeholder="Password..."
                        />
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
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  {}
)(withRouter(Login));
