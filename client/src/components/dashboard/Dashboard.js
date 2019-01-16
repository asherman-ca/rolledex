import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCurrentProfile } from '../../actions/profileActions';

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }

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
                      <h3 className="title fonting">Jon Danaher</h3>
                      <h6>Head Coach @ RGA</h6>
                      <a href="#pablo">
                        <button class="btn btn-just-icon btn-round btn-instagram">
                          <i class="fab fa-instagram"> </i>
                        </button>
                      </a>
                      <a href="#pablo">
                        <button class="btn btn-just-icon btn-round btn-youtube">
                          <i class="fab fa-youtube"> </i>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="description text-center">
              <p>
                An artist of considerable range, Chet Faker &#x2014; the name
                taken by Melbourne-raised, Brooklyn-based Nick Murphy &#x2014;
                writes, performs and records all of his own music, giving it a
                warm, intimate feel with a solid groove structure.{' '}
              </p>
            </div>
            <div className="row mt-4 mb-4">
              <div className="col-md-6 ml-auto mr-auto edit-buttons">
                <Link to="/add-experience">
                  <button className="btn btn-info">Edit Tournaments</button>
                </Link>
                <Link to="/create-profile">
                  <button className="btn btn-info">Edit Profile</button>
                </Link>
                <Link to="add-education">
                  <button className="btn btn-info">Edit Experience</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 ml-auto mb-5">
              <h3 className="text-center">
                <strong>Tournament Record</strong>
              </h3>
            </div>
            <div className="col-md-4 mr-auto">
              <h3 className="text-center">
                <strong>Gym Affiliations</strong>
              </h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { getCurrentProfile }
)(Dashboard);
