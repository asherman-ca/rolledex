import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
import { addExperience } from '../../actions/profileActions';
import { Link } from 'react-router-dom';

class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      vector: '',
      position: '',
      youtube: '',
      errors: {}
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit = e => {
    e.preventDefault();

    const {user} = this.props.auth;

    const expData = {
      text: this.state.text,
      position: this.state.position,
      vector: this.state.vector,
      youtube: this.state.youtube,
      name: user.name,
      avatar: user.avatar
    };

    this.props.addExperience(expData, this.props.history);
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onCheck = e => {
    this.setState({
      current: !this.state.current,
      disabled: !this.state.disabled
    });
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="signup-page">
        <div
          className="page-header header-filter"
          style={{
            backgroundImage: "url('../assets/img/bg7.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'topcenter'
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-8 ml-auto mr-auto">
                <div className="card card-signup" style={{ padding: '20px' }}>
                  <form onSubmit={this.onSubmit} className="form mb-auto">
                    <h3 className="card-title text-center">Add a Post</h3>
                    <p className="description text-center">
                      This information can be viewed by others
                    </p>
                    <div className="row mr-4">
                      <div className="col-md-6">
                        <TextFieldGroup
                          placeholder="Description"
                          name="name"
                          type="text"
                          value={this.state.text}
                          onChange={this.onChange}
                          error={errors.text}
                          prepend="person_pin"
                        />
                      </div>
                      <div className="col-md-6">
                        <TextFieldGroup
                          placeholder="Top/Bottom"
                          name="vector"
                          type="text"
                          value={this.state.vector}
                          onChange={this.onChange}
                          error={errors.vector}
                          prepend="home"
                        />
                      </div>
                    </div>
                    <div className="row mr-4">
                      <div className="col-md-6">
                        <TextFieldGroup
                          placeholder="Position"
                          name="position"
                          value={this.state.position}
                          onChange={this.onChange}
                          error={errors.position}
                          type="text"
                          prepend="home"
                        />
                      </div>
                      <div className="col-md-6">
                        <TextFieldGroup
                          placeholder="Youtube"
                          name="youtube"
                          type="text"
                          value={this.state.youtube}
                          onChange={this.onChange}
                          error={errors.youtube}
                          prepend="home"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="text-center mt-4 mb-4">
                          <Link className="btn btn-warning" to="/dashboard">
                            Go Back
                          </Link>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="text-center mt-4 mb-4">
                          <input type="submit" className="btn btn-success" />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CreatePost.propTypes = {
  errors: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addPost: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { addExperience }
)(withRouter(CreatePost));
