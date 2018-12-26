// import logo from './logo.svg';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import setAuthToken from './utils/setAuthToken';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header className="site-header">
          <nav className="navbar navbar-expand-lg navbar-light py-3">
            <div className="container">
              <a href="index.html" className="navbar-brand text-dark">
                Rolledex
              </a>
            </div>
          </nav>
        </header>
        <main className="content">
          <div className="container">
            <div className="row justify-content-lg-between align-items-lg-center py-5">
              <div className="col-lg-6">
                <h1 className="display-4">Create your digital profile</h1>
                <p className="lead mb-4">
                  Rolledex is an social jiu jitsu database for tracking, sharing
                  and improving your game
                </p>
                <a href="components.html" className="btn btn-pill btn-primary">
                  Sign Up
                </a>
              </div>
              <div className="col-lg-6">
                <img
                  src="img/aojpano.jpg"
                  alt="Triangle"
                  className="d-none d-lg-block img-fluid img-thumbnail triangle"
                />
              </div>
            </div>
          </div>
          <div className="bg-skew bg-skew-light">
            <div className="container">
              <div className="row pt-5">
                <div className="col-sm-6 col-md-4 mb-4 mb-md-5">
                  <div className="pr-lg-3">
                    <span className="icon icon-primary mb-3">
                      <i
                        className="icon-inner fab fa-accessible-icon"
                        aria-hidden="true"
                      />
                    </span>
                    <h3 className="h4">Accessible</h3>
                    <p className="mb-md-0">
                      Built with accessibility in mind and following best
                      practices.
                    </p>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 mb-4 mb-md-5">
                  <div className="pr-lg-3">
                    <span className="icon icon-primary mb-3">
                      <i
                        className="icon-inner fas fa-mobile-alt"
                        aria-hidden="true"
                      />
                    </span>
                    <h3 className="h4">Mobile First</h3>
                    <p className="mb-md-0">
                      Mobile-first flexbox grid to build layouts of all shapes
                      and sizes.
                    </p>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 mb-4 mb-md-5">
                  <div className="pr-lg-3">
                    <span className="icon icon-primary mb-3">
                      <i
                        className="icon-inner fab fa-font-awesome-flag"
                        aria-hidden="true"
                      />
                    </span>
                    <h3 className="h4">Font Awesome</h3>
                    <p className="mb-md-0">
                      More than 1200 vector icons from the web's most popular
                      icon set.
                    </p>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 mb-4 mb-md-5">
                  <div className="pr-lg-3">
                    <span className="icon icon-primary mb-3">
                      <i
                        className="icon-inner fas fa-code"
                        aria-hidden="true"
                      />
                    </span>
                    <h3 className="h4">Valid Code</h3>
                    <p className="mb-md-0">
                      W3C valid code to ensure the site works properly on all
                      major browsers.
                    </p>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 mb-4 mb-md-5">
                  <div className="pr-lg-3">
                    <span className="icon icon-primary mb-3">
                      <i
                        className="icon-inner fab fa-sass"
                        aria-hidden="true"
                      />
                    </span>
                    <h3 className="h4">Sass Files</h3>
                    <p className="mb-md-0">
                      Easily customize your site modifying the source scss
                      files.
                    </p>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 mb-4 mb-md-5">
                  <div className="pr-lg-3">
                    <span className="icon icon-primary mb-3">
                      <i
                        className="icon-inner fab fa-gulp"
                        aria-hidden="true"
                      />
                    </span>
                    <h3 className="h4">Gulp</h3>
                    <p className="mb-md-0">
                      Automated workflow for your development tasks.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container" />
          <div className="bg-skew bg-skew-light" />
        </main>
      </div>
    );
  }
}

export default App;
