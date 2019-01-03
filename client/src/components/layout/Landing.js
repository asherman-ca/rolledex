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

              <div class="section text-center">
                <h2 class="title">Rolledex Users</h2>
                <div class="team">
                  <div class="row">
                    <LandingTile
                      name="Keenan Cornelius"
                      title="2x IBJJF Champion"
                      bio="Don't be scared of the truth because we need to
                      restart the human foundation in truth..."
                      insta="https://www.instagram.com"
                      youtube="https://www.instagram.com"
                      twitter="https://www.instagram.com"
                      facebook="https://www.instagram.com"
                      pic="../img/keenan2.jpeg"
                    />

                    <div class="col-md-6">
                      <div class="card card-profile card-plain">
                        <div class="row">
                          <div class="col-md-5">
                            <div class="card-header card-header-image">
                              <a href="#pablo">
                                <img class="img" src="../img/donjon.jpg" />
                              </a>
                            </div>
                          </div>
                          <div class="col-md-7">
                            <div class="card-body">
                              <h4 class="card-title">Jon Danahar</h4>
                              <h6 class="category text-muted">
                                Head Coach @ RGA
                              </h6>
                              <p class="card-description">
                                Don't be scared of the truth because we need to
                                restart the human foundation in truth...
                              </p>
                            </div>
                            <div class="card-footer justify-content-center">
                              <a
                                href="#pablo"
                                class="btn btn-just-icon btn-link btn-linkedin"
                              >
                                <i class="fa fa-linkedin" />
                              </a>
                              <a
                                href="#pablo"
                                class="btn btn-just-icon btn-link btn-facebook"
                              >
                                <i class="fa fa-facebook-square" />
                              </a>
                              <a
                                href="#pablo"
                                class="btn btn-just-icon btn-link btn-dribbble"
                              >
                                <i class="fa fa-dribbble" />
                              </a>
                              <a
                                href="#pablo"
                                class="btn btn-just-icon btn-link btn-google"
                              >
                                <i class="fa fa-google" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="card card-profile card-plain">
                        <div class="row">
                          <div class="col-md-5">
                            <div class="card-header card-header-image">
                              <a href="#pablo">
                                <img class="img" src="../img/miyao.jpg" />
                              </a>
                            </div>
                          </div>
                          <div class="col-md-7">
                            <div class="card-body">
                              <h4 class="card-title">Paulo Miyao</h4>
                              <h6 class="category text-muted">
                                4x IBJJF Champion
                              </h6>
                              <p class="card-description">
                                I love you like Kanye loves Kanye. Don't be
                                scared of the truth.
                              </p>
                            </div>
                            <div class="card-footer justify-content-center">
                              <a
                                href="#pablo"
                                class="btn btn-just-icon btn-link btn-youtube"
                              >
                                <i class="fa fa-youtube-play" />
                              </a>
                              <a
                                href="#pablo"
                                class="btn btn-just-icon btn-link btn-twitter"
                              >
                                <i class="fa fa-twitter" />
                              </a>
                              <a
                                href="#pablo"
                                class="btn btn-just-icon btn-link btn-instagram"
                              >
                                <i class="fa fa-instagram" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="card card-profile card-plain">
                        <div class="row">
                          <div class="col-md-5">
                            <div class="card-header card-header-image">
                              <a href="#pablo">
                                <img class="img" src="../img/gary.jpg" />
                              </a>
                            </div>
                          </div>
                          <div class="col-md-7">
                            <div class="card-body">
                              <h4 class="card-title">Gary Tonnen</h4>
                              <h6 class="category text-muted">
                                MMA & BJJ Champion
                              </h6>
                              <p class="card-description">
                                I love you like Kanye loves Kanye. Don't be
                                scared of the truth because we need to restart
                                the human foundation.
                              </p>
                            </div>
                            <div class="card-footer justify-content-center">
                              <a
                                href="#pablo"
                                class="btn btn-just-icon btn-link btn-linkedin"
                              >
                                <i class="fa fa-linkedin" />
                              </a>
                              <a
                                href="#pablo"
                                class="btn btn-just-icon btn-link btn-facebook"
                              >
                                <i class="fa fa-facebook-square" />
                              </a>
                              <a
                                href="#pablo"
                                class="btn btn-just-icon btn-link btn-google"
                              >
                                <i class="fa fa-google" />
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
        </div>
      </div>
    );
  }
}

export default Landing;
