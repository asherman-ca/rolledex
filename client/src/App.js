// import logo from './logo.svg';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import setAuthToken from './utils/setAuthToken';
import './App.css';

import Register from './components/layout/Register';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="signup-page">
          <Register />
        </div>
      </div>
    );
  }
}

export default App;
