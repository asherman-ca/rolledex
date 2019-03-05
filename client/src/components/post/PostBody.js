import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import { deletePost, addLike, removeLike } from '../../actions/postActions';
import Moment from 'react-moment';

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
              <img class="media-object" alt="Tim Picture" src={user.avatar} />
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