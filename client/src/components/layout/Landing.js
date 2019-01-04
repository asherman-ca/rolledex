import React, { Component } from 'react';
import LandingTile from './LandingTile';

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
            <div
              className="section text-center"
              style={{ paddingBottom: '0px' }}
            >
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
                        <i className="material-icons">folder_shared</i>
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
                        <i className="material-icons">supervised_user_circle</i>
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
                        <i className="material-icons">map</i>
                      </div>
                      <h4 className="info-title">Map Your System</h4>
                      <p>
                        Keep track of your favorite techniques and concepts and
                        organize them into your game. It's never been easier to
                        visualize someone's system.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="section text-center rolledex-users"
                style={{ paddingBottom: '0px', paddingTop: '0px' }}
              >
                <h2 class="title">Rolledex Users</h2>
                <div class="team">
                  <div class="row pt-5">
                    <div class="col-md-4">
                      <div class="card card-profile">
                        <div class="card-header card-avatar">
                          <a href="#pablo">
                            <img class="img" src="../img/keenan2.jpeg" />
                          </a>
                        </div>
                        <div class="card-body">
                          <h4 class="card-title">Keenan Cornelius</h4>
                          <h6 class="card-category text-muted">
                            CEO / Co-Founder
                          </h6>
                          <p class="card-description">
                            Don't be scared of the truth because we need to
                            restart the human foundation in truth And I love you
                            like Kanye loves Kanye I love Rick Owens’ bed design
                            but the back is...
                          </p>
                        </div>
                        <div class="card-footer justify-content-center">
                          <a
                            href="#pablo"
                            class="btn btn-just-icon btn-linkedin btn-round"
                          >
                            <i class="fa fa-linkedin" />
                          </a>
                          <a
                            href="#pablo"
                            class="btn btn-just-icon btn-twitter btn-round"
                          >
                            <i class="fa fa-twitter" />
                          </a>
                          <a
                            href="#pablo"
                            class="btn btn-just-icon btn-dribbble btn-round"
                          >
                            <i class="fa fa-dribbble" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="card card-profile">
                        <div class="card-header card-avatar">
                          <a href="#pablo">
                            <img class="img" src="../img/donjon.jpg" />
                          </a>
                        </div>
                        <div class="card-body">
                          <h4 class="card-title">Jon Danahar</h4>
                          <h6 class="card-category text-muted">
                            CEO / Co-Founder
                          </h6>
                          <p class="card-description">
                            Don't be scared of the truth because we need to
                            restart the human foundation in truth And I love you
                            like Kanye loves Kanye I love Rick Owens’ bed design
                            but the back is...
                          </p>
                        </div>
                        <div class="card-footer justify-content-center">
                          <a
                            href="#pablo"
                            class="btn btn-just-icon btn-linkedin btn-round"
                          >
                            <i class="fa fa-linkedin" />
                          </a>
                          <a
                            href="#pablo"
                            class="btn btn-just-icon btn-twitter btn-round"
                          >
                            <i class="fa fa-twitter" />
                          </a>
                          <a
                            href="#pablo"
                            class="btn btn-just-icon btn-dribbble btn-round"
                          >
                            <i class="fa fa-dribbble" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="card card-profile">
                        <div class="card-header card-avatar">
                          <a href="#pablo">
                            <img class="img" src="../img/gary.jpg" />
                          </a>
                        </div>
                        <div class="card-body">
                          <h4 class="card-title">Gary Tonnen</h4>
                          <h6 class="card-category text-muted">
                            CEO / Co-Founder
                          </h6>
                          <p class="card-description">
                            Don't be scared of the truth because we need to
                            restart the human foundation in truth And I love you
                            like Kanye loves Kanye I love Rick Owens’ bed design
                            but the back is...
                          </p>
                        </div>
                        <div class="card-footer justify-content-center">
                          <a
                            href="#pablo"
                            class="btn btn-just-icon btn-linkedin btn-round"
                          >
                            <i class="fa fa-linkedin" />
                          </a>
                          <a
                            href="#pablo"
                            class="btn btn-just-icon btn-twitter btn-round"
                          >
                            <i class="fa fa-twitter" />
                          </a>
                          <a
                            href="#pablo"
                            class="btn btn-just-icon btn-dribbble btn-round"
                          >
                            <i class="fa fa-dribbble" />
                          </a>
                        </div>
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

export default Landing;
