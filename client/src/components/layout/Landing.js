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
        <div className="main main-raised">
          <div className="container">
            <div className="section text-center">
              <div className="row">
                <div className="col-md-8 ml-auto mr-auto">
                  <h2 className="title">All the features you need</h2>
                  <h5 className="description">
                    Forgeting small and important details happens to the best of
                    us, but those details are often required for success. By
                    keeping a log of the various facets of their game and
                    reviewing them regurly, our users enjoy unparalleled success
                    in training and competition.
                  </h5>
                </div>
              </div>
              <div className="features">
                <div className="row">
                  <div className="col-md-4">
                    <div className="info">
                      <div className="icon icon-info">
                        <i className="material-icons">chat</i>
                      </div>
                      <h4 className="info-title">Technique sharing</h4>
                      <p>
                        Share and discuss the techniques in the community. Sort
                        by rating and add your favorite techniques into your
                        arsenal.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="info">
                      <div className="icon icon-success">
                        <i className="material-icons">face</i>
                      </div>
                      <h4 className="info-title">BJJ Community</h4>
                      <p>
                        Create your own profile and browse through the profiles
                        of others. Learn the secrets to your favorite players
                        success by studying the map of their game.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="info">
                      <div className="icon icon-danger">
                        <i className="material-icons">settings</i>
                      </div>
                      <h4 className="info-title">Service</h4>
                      <p>
                        Rolledex service is always available to help with any
                        questions you have. Rest easy knowing that your account
                        is always safe and secure.
                      </p>
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

export default Landing;
