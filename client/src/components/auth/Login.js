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

  onRecoverClick() {
    // console.log(this.state.email)
    this.props.recoverUser(this.state.email, this.props.history);
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
                          style={{padding: '0px'}}
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
