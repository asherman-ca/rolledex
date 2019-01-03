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
                <h1 className="title">Your BJJ Story Starts Here.</h1>
                <h4>
                  Rolledex is a tool to track your BJJ development and gain a
                  better understanding of your progress. In doing so, you'll
                  accellerate the pace of your training and enjoy better
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
                  <h2 className="title">Accelerate your Jiu Jitsu</h2>
                  <h5 className="description">
                    Join a community of practitioners dedicated to optimizing
                    their craft. The most important details are often the
                    smallest and easiest to forget. Tracking and reviewing
                    techniques and concepts can be vital to progression and
                    we're here to help.
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
                      <h4 className="info-title">Technique Sharing</h4>
                      <p>
                        Share and discuss the most effective techniques in the
                        community. Sort by rating and add your favorite
                        techniques into your arsenal.
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
                        Browse through community profiles and learn the systems
                        used by your favorite players. Ever wonder what Gordon
                        Ryan's top 3 back attacks are?
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="info">
                      <div className="icon icon-danger">
                        <i className="material-icons">settings</i>
                      </div>
                      <h4 className="info-title">Map Your System</h4>
                      <p>
                        Keep track of your favorite techniques and concepts and
                        organize them into your game. It's never been easier to
                        visualize someone's game.
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
