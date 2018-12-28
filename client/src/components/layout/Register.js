import React, { Component } from 'react';

class Register extends Component {
  render() {
    return (
      <div
        className="page-header"
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
                            We've created a ranking system for techniques. Share
                            and discover the most effective strategies.
                          </p>
                        </div>
                      </div>
                      <div className="info info-horizontal">
                        <div className="icon icon-primary">
                          <i className="material-icons">code</i>
                        </div>
                        <div className="description">
                          <h4 className="info-title">Fucking Brilliant Code</h4>
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
                            Share your BJJ profile and connect with other users.
                            Also, permaban on{' '}
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
                      <form className="form" method="" action="">
                        <div className="form-group">
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text">
                                <i className="material-icons">face</i>
                              </span>
                            </div>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="First Name..."
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text">
                                <i className="material-icons">mail</i>
                              </span>
                            </div>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Email..."
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text">
                                <i className="material-icons">lock_outline</i>
                              </span>
                            </div>
                            <input
                              type="password"
                              placeholder="Password..."
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="text-center">
                          <a
                            href="#pablo"
                            className="btn btn-primary btn-round"
                          >
                            Get Started
                          </a>
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
    );
  }
}

export default Register;
