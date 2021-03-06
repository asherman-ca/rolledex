import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser, recoverUser } from '../../actions/authActions';
import TextFieldGroup from '../common/TextFieldGroup';
import { Link } from 'react-router-dom';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errors: {},
      showAlert: false
    };
  }

  componentWillReceiveProps(newProps) {
    if (newProps.auth.isAuthenticated) {
      this.props.history.push('./dashboard');
    }

    { newProps.errors ? console.log(newProps.errors) : console.log('nothin') }

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

  onRecoverClick() {
    this.setState({ errors: {} })
    this.props.recoverUser(this.state.email, this.props.history);
    if (this.state.errors.email === undefined) {
      this.setState({ errors: {email: 'Reset link will arrive shortly'} })
    }
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
              <div className="col-md-5 col-sm-6 ml-auto mr-auto">
                <div className="card card-signup" style={{ padding: '20px' }}>
                  <form
                    className="form mb-auto mr-4"
                    method=""
                    action=""
                    onSubmit={this.onSubmit}
                    style={{ height: '100%' }}
                  >
                  <a href="http://localhost:5000/api/users/auth/google">Login</a>
                  {/* <div className="card-header card-header-primary text-center">
                    <h4 className="card-title">Log in</h4>
                    <div className="social-line">
                      <a href="#pablo" className="btn btn-just-icon btn-link">
                        <i className="fab fa-google"></i>
                      </a>
                    </div>
                  </div> */}
                    <div className="form-style">
                      <h3 className="card-title text-center">Sign in</h3>
                      <p className="description text-center">
                        to continue to Rolledex
                      </p>
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
                      <div className="text-center row" style={{marginLeft: '0px', paddingTop: '20px'}}>
                        <input type="submit" className="btn btn-success col-6" style={{margin:"0px"}} />
                        <div 
                          style={{padding: '0px', cursor: 'pointer'}}
                          className="col-6 register-redirect"
                          onClick={this.onRecoverClick.bind(this)}
                        >Forgot Password?</div>

                        {/* <Link to="/register" style={{padding:'0px'}} className="col-6 register-redirect">
                          Forgot Password?
                        </Link> */}
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
  { loginUser, recoverUser }
)(withRouter(Login));
