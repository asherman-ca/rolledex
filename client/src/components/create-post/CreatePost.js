import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
import SelectListGroup from '../common/SelectListGroup';
import { addPost } from '../../actions/postActions';
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

    const postData = {
      text: this.state.text,
      position: this.state.position,
      vector: this.state.vector,
      youtube: this.state.youtube,
      name: user.name,
      avatar: user.avatar
    };
    
    this.props.addPost(postData, this.props.history);
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
    const options = [
      { label: '* Select Top/Bottom', value: 0 },
      { label: 'Top', value: 'Top' },
      { label: 'Bottom', value: 'Bottom' }
    ];
    const positionOptions = [
      { label: '* Selection position', value: 0},
      { label: 'Side Control', value: 'Side Control'},
      { label: 'Half Guard', value: 'Half Guard'},
      { label: 'Sit Up', value: 'Sit Up'},
      { label: 'Closed Guard', value: 'Closed Guard'},
      { label: 'Open Guard', value: 'Open Guard'}
    ]

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
                        <SelectListGroup
                          placeholder="Vector"
                          name="vector"
                          value={this.state.vector}
                          onChange={this.onChange}
                          error={errors.vector}
                          options={options}
                          prepend="exposure"
                        />
                      </div>
                      <div className="col-md-6">
                      <SelectListGroup
                          placeholder="Postition"
                          name="position"
                          value={this.state.position}
                          onChange={this.onChange}
                          error={errors.position}
                          options={positionOptions}
                          prepend="videogame_asset"
                        />
                      </div>
                    </div>
                    <div className="row mr-4">
                      <div className="col-md-6">
                        <TextFieldGroup
                          placeholder="Notes"
                          name="text"
                          type="text"
                          value={this.state.text}
                          onChange={this.onChange}
                          error={errors.text}
                          prepend="notes"
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
                          prepend="movie"
                        />
                      </div>
                    </div>
                    <div className="text-center row" style={{margin: '0px 15px', paddingTop: '20px'}}>
                        <Link 
                          className="mr-auto col-4 btn btn-warning" 
                          to="/dashboard"
                          style={{padding: '12px 0px'}}>
                          Go Back
                        </Link>
                        <input 
                          type="submit" 
                          className="ml-auto col-4 btn btn-success" 
                          style={{padding: '12px 0px'}}/>
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
  { addPost }
)(withRouter(CreatePost));
