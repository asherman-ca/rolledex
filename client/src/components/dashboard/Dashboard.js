import React, { Component } from 'react';
import { connect } from 'react-redux';

class Dashboard extends Component {
  render() {
    return (
      <div className="profile-page">
        <div
          class="page-header header-filter"
          data-parallax="true"
          style={{ backgroundImage: "url('../assets/img/examples/city.jpg')" }}
        />
        <div className="main main-raised">
          <div className="profile-content">
            <div className="container">
              <div className="row">
                <div className="col-md-6 ml-auto mr-auto">
                  <div className="profile">
                    <div className="avatar">
                      <img
                        src="../img/donjon.jpg"
                        alt="Cirle Image"
                        className="img-raised rounded-circle img-fluid"
                      />
                    </div>
                    <div className="name">
                      <h3 className="title">Jon Danaher</h3>
                      <h6>Head Coach @ RGA</h6>
                      <a
                        href="#pablo"
                        className="btn btn-just-icon btn-link btn-dribbble"
                      >
                        <i className="fab fa-instagram" />
                      </a>
                      <a
                        href="#pablo"
                        className="btn btn-just-icon btn-link btn-twitter"
                      >
                        <i className="fab fa-youtube" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="description text-center">
              <p>
                An artist of considerable range, Chet Faker &#x2014; the name
                taken by Melbourne-raised, Brooklyn-based Nick Murphy &#x2014;
                writes, performs and records all of his own music, giving it a
                warm, intimate feel with a solid groove structure.{' '}
              </p>
            </div>

            <div class="row">
              <div class="col-md-6 ml-auto mr-auto">
                <div class="profile-tabs">
                  <ul
                    class="nav nav-pills nav-pills-icons justify-content-center"
                    role="tablist"
                  >
                    <li class="nav-item">
                      <a
                        class="nav-link active"
                        href="#work"
                        role="tab"
                        data-toggle="tab"
                      >
                        <i class="material-icons">palette</i> Affiliation
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        href="#connections"
                        role="tab"
                        data-toggle="tab"
                      >
                        <i class="material-icons">people</i> Competition
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        href="#media"
                        role="tab"
                        data-toggle="tab"
                      >
                        <i class="material-icons">camera</i> Techniques
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  {}
)(Dashboard);
