import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import { deletePost, addLike, removeLike } from '../../actions/postActions';
import Moment from 'react-moment';
import CommentFeed from './CommentFeed';

class PostBody extends Component {
  onDeleteClick = (id) => {
    this.props.deletePost(id);
  }

  onLikeClick = (id) => {
    this.props.addLike(id);
  }

  onUnlikeClick = (id) => {
    this.props.removeLike(id);
  }

  findUserLike = (likes) => {
    const { auth } = this.props;

    if (likes.filter(like => like.user === auth.user.id).length > 0) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    const { post, auth, showActions } = this.props;
    const { user } = auth;
    
    return (
      <div class="media">
        <a class="float-left" href="#pablo">
          <div class="avatar">
              <img class="media-object" alt="Tim Picture" src={post.avatar} />
          </div>
        </a>
          <div class="media-body">
            <h4 class="media-heading">{post.vector} · {post.position} · <em>{user.name}</em>
              <small> · <Moment format="YYYY/MM/DD">{post.date}</Moment></small>
            </h4>
            <p>{post.text}</p>
            <div class="media-footer">
              <div className="btn btn-link float-right">
                <i onClick={this.onLikeClick.bind(this, post._id)} style={{marginRight: '15px'}} className="material-icons">thumb_up</i>
                <i onClick={this.onUnlikeClick.bind(this, post._id)} style={{marginRight: '15px'}} className="material-icons">thumb_down</i>
                <i className="material-icons">favorite</i> {post.likes.length}
              </div>
            </div>
          </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

PostBody.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deletePost: PropTypes.func.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired
};

PostBody.defaultProps = {
  showActions: true
};

export default connect(
  mapStateToProps,
  { deletePost, addLike, removeLike }
)(PostBody);