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
                  src="img/triangle.jpg"
                  alt="Triangle"
                  className="d-none d-lg-block img-fluid img-thumbnail triangle"
                />
              </div>
            </div>
          </div>
          <div className="bg-skew bg-skew-light" />
          <div className="container" />
          <div className="bg-skew bg-skew-light" />
        </main>
      </div>
    );
  }
}

export default App;
