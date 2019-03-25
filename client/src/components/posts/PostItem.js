import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
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
            <h4 class="media-heading">{post.vector} · {post.position} · <em>{post.name}</em>
              <small> · <Moment format="YYYY/MM/DD">{post.date}</Moment></small>
            </h4>
            <p>{post.text}</p>
            <div class="media-footer">
              <Link to={`/post/${post._id}`} className="btn btn-primary btn-link float-right" style={{marginBottom: '0px'}}>
                <i class="material-icons">reply</i> Reply
              </Link>
              <a href="#pablo" class="btn btn-link float-right" data-original-title="Like Comment" style={{marginBottom: '0px'}}>
                <i class="material-icons">favorite</i> {post.likes.length}
              </a>
            </div>
            {
              /* 
              TODO: create map function to create comment items
              <div class="media">
              <a class="float-left" href="#pablo">
                <div class="avatar">
                  <img class="media-object" alt="64x64" src="../assets/img/kit/pro/faces/card-profile4-square.jpg" />
                </div>
              </a>
                <div class="media-body">
                  <h4 class="media-heading">Tina Andrew
                    <small>· 12 Hours Ago</small>
                  </h4>
                  <p>Hello guys, nice to have you on the platform! There will be a lot of great stuff coming soon. We will keep you posted for the latest news.</p>
                  <p> Don't forget, You're Awesome!</p>
                    <div class="media-footer">
                    <a href="#pablo" class="btn btn-primary btn-link float-right" rel="tooltip" title="" data-original-title="Reply to Comment">
                        <i class="material-icons">reply</i> Reply
                    </a>
                    <a href="#pablo" class="btn btn-link btn-secondary float-right">
                        <i class="material-icons">favorite</i> 2
                    </a>
                    </div>
                </div>
            </div> */}
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


{/* <div className="card card-body mb-3">
        <div className="row">
          <div className="col-md-2">
            <img
              className="rounded-circle d-none d-md-block"
              src={post.avatar}
              alt=""
            />
            <br />
            <p className="text-center">{post.name}</p>
          </div>
          <div className="col-md-10">
            <p className="lead">{post.text}</p>
            {showActions ? (
              <span>
                <button
                  onClick={this.onLikeClick.bind(this, post._id)}
                  type="button"
                  className="btn btn-light mr-1"
                >
                  <i
                    className={classnames('fas fa-thumbs-up', {
                      'text-info': this.findUserLike(post.likes)
                    })}
                  />
                  <span className="badge badge-light">{post.likes.length}</span>
                </button>
                <button
                  onClick={this.onUnlikeClick.bind(this, post._id)}
                  type="button"
                  className="btn btn-light mr-1"
                >
                  <i className="text-secondary fas fa-thumbs-down" />
                </button>
                <Link to={`/post/${post._id}`} className="btn btn-info mr-1">
                  Comments
                </Link>
                {post.user === auth.user.id ? (
                  <button
                    type="button"
                    onClick={this.onDeleteClick.bind(this, post._id)}
                    className="btn btn-danger mr-1"
                  >
                    <i className="fas fa-times" />
                  </button>
                ) : null}
              </span>
            ) : null}
          </div>
        </div>
      </div> */}