import React, { Component } from 'react';

class Landing extends Component {
  render() {
    return (
      <div className="landing-page">
        <div
          className="page-header header-filter"
          data-parallax="true"
          style={{ backgroundImage: "url('../assets/img/bg7.jpg')" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h1 className="title">Your BJJ Story Starts With Us.</h1>
                <h4>
                  Rolledex will empower you to track your BJJ development and
                  gain a better understanding of your progress. In doing so,
                  you'll accellerate the pace of your training and enjoy better
                  results. We beleive in training smarter - not harder.
                </h4>
                <br />
                <a
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  target="_blank"
                  className="btn btn-danger btn-raised btn-lg"
                >
                  <i className="fa fa-play" /> Watch video
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
