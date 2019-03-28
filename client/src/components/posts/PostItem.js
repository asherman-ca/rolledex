import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { deletePost, addLike, removeLike } from '../../actions/postActions';
import Moment from 'react-moment';

class PostItem extends Component {
  onDeleteClick(id) {
    this.props.deletePost(id);
  }

  onLikeClick(id) {
    this.props.addLike(id);
  }

  onUnlikeClick(id) {
    this.props.removeLike(id);
  }

  findUserLike(likes) {
    const { auth } = this.props;

    if (likes.filter(like => like.user === auth.user.id).length > 0) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    const { post } = this.props;
    console.log(post);
    // const { user } = auth;
    return (
      <div class="media">
        <a class="float-left" href="#pablo">
          <Link to={`/profile/${post.user}`}>
            <div class="avatar">
                <img class="media-object" alt="../img/miyao.jpg" src={post.avatar} />
            </div>
          </Link>
        </a>
          <div class="media-body">
            <h4 class="media-heading">{post.vector} · {post.position} · <em>{post.name}</em>
              <small> · <Moment format="YYYY/MM/DD">{post.date}</Moment></small>
            </h4>
            <p>{post.text}</p>
            <div class="media-footer">
              <Link to={`/post/${post._id}`} className="btn btn-primary btn-link float-right" style={{marginBottom: '0px', padding: '0px', marginLeft: '5px'}}>
                <i class="material-icons">reply</i> Reply
              </Link>
              <div class="btn btn-link float-right" style={{marginBottom: '0px', cursor: 'auto', padding: '0px'}}>
                <i class="material-icons">favorite</i> {post.likes.length}
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

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deletePost: PropTypes.func.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired
};

PostItem.defaultProps = {
  showActions: true
};

export default connect(
  mapStateToProps,
  { deletePost, addLike, removeLike }
)(PostItem);