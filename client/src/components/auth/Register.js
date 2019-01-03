import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';
import TextFieldGroup from '../common/TextFieldGroup';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',
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
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(newUser, this.props.history);
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
              <div className="col-md-10 ml-auto mr-auto">
                <div className="card card-signup">
                  <h2 className="card-title text-center">Register</h2>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-5 ml-auto">
                        <div className="info info-horizontal">
                          <div className="icon icon-rose">
                            <i className="material-icons">timeline</i>
                          </div>
                          <div className="description">
                            <h4 className="info-title">Ranking</h4>
                            <p className="description">
                              We've created a ranking system for techniques.
                              Share and discover the most effective strategies.
                            </p>
                          </div>
                        </div>
                        <div className="info info-horizontal">
                          <div className="icon icon-primary">
                            <i className="material-icons">code</i>
                          </div>
                          <div className="description">
                            <h4 className="info-title">
                              Fucking Brilliant Code
                            </h4>
                            <p className="description">
                              Our pull requests merge without review. Everytime.
                              Without Errors.
                            </p>
                          </div>
                        </div>
                        <div className="info info-horizontal">
                          <div className="icon icon-info">
                            <i className="material-icons">group</i>
                          </div>
                          <div className="description">
                            <h4 className="info-title">BJJ Community</h4>
                            <p className="description">
                              Share your BJJ profile and connect with other
                              users. Also, permaban on{' '}
                              <i
                                style={{ color: 'red' }}
                                className="material-icons"
                              >
                                bug_report
                              </i>
                              <strong>
                                <span style={{ color: 'red' }}>Anthony </span>
                              </strong>
                              <i
                                style={{ color: 'red' }}
                                className="material-icons"
                              >
                                bug_report
                              </i>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-5 mr-auto">
                        <form
                          className="form"
                          method=""
                          action=""
                          onSubmit={this.onSubmit}
                        >
                          <TextFieldGroup
                            placeholder="name"
                            name="name"
                            type="text"
                            value={this.state.name}
                            onChange={this.onChange}
                            error={errors.name}
                            prepend="face"
                          />
                          <TextFieldGroup
                            placeholder="Email"
                            name="email"
                            type="text"
                            value={this.state.email}
                            onChange={this.onChange}
                            error={errors.email}
                            prepend="mail"
                          />
                          <TextFieldGroup
                            placeholder="Password"
                            name="password"
                            type="password"
                            value={this.state.password}
                            onChange={this.onChange}
                            error={errors.password}
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
                          <div className="text-center mt-4">
                            <input
                              type="submit"
                              className="btn btn-info btn-round"
                            />
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
