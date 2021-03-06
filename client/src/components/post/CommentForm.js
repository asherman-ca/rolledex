import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import { addComment } from '../../actions/postActions';

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const { user } = this.props.auth;
    const { postId } = this.props;
    const newComment = {
      user: user.id,
      text: this.state.text,
      name: user.name,
      avatar: user.avatar
    };

    this.props.addComment(postId, newComment);
    this.setState({ text: '' });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;
    const {user} = this.props.auth
    
    return (
        <form onSubmit={this.onSubmit} className="media media-post">
            <div className="author float-left">
                <div className="avatar">
                    <img className="media-object" alt="64x64" src={user.avatar} />
                </div>
            </div>
            <div className="media-body">
                <TextAreaFieldGroup 
                    placeholder="Post Comment"
                    name="text"
                    value={this.state.text}
                    onChange={this.onChange}
                    error={errors.text}
                />
                <div className="media-footer">
                    <input 
                      type="submit" 
                      className="btn btn-primary btn-round btn-wd float-right"
                      style={{marginBottom: '0px'}}
                    />
                </div>
            </div>
        </form>
    );
  }
}

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  postId: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { addComment }
)(CommentForm);
