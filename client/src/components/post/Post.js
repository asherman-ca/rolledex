import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Spinner from '../common/Spinner';
import { getPost } from '../../actions/postActions';
import PostBody from '../post/PostBody';
import CommentForm from './CommentForm';
import CommentFeed from './CommentFeed';

class Post extends Component {
  componentDidMount() {
    this.props.getPost(this.props.match.params.id);
  }

  render() {
    const { post, loading } = this.props.post;
    const {user} = this.props.auth;
    let postContent;

    if (post === null || loading || Object.keys(post).length === 0) {
      postContent = <Spinner />;
    } else {
      postContent = (
        <div>
          <PostBody post={post} showActions={false} />
          {/* <CommentForm postId={post._id} />
          <CommentFeed postId={post._id} comments={post.comments} /> */}
        </div>
      );
    }

    return (
      <div className="profile-page">
        <div
          className="page-header header-filter"
          data-parallax="true"
          style={{ backgroundImage: "url('../assets/img/examples/city.jpg')" }}
        />
          <div style={{ minHeight: '75vh' }} className="main main-raised">
            <div style={{ paddingTop: '50px' }} className="container">
              <div className="row">
                <div className="col-md-10 ml-auto mr-auto">
                  <Link to="/feed" style={{marginBottom: '50px'}} className="btn btn-light">
                  Back To Feed
                  </Link>
                  {postContent}
                  <div class="media media-post">
                            <a class="author float-left" href="#pablo">
                                <div class="avatar">
                                    <img class="media-object" alt="64x64" src={user.avatar} />
                                </div>
                            </a>
                            <div class="media-body">
                                <div class="form-group label-floating bmd-form-group">
                                    <textarea class="form-control" rows="1" id="exampleBlogPost"></textarea>
                                </div>
                                <div class="media-footer">
                                    <a href="#pablo" class="btn btn-primary btn-round btn-wd float-right">Post Comment</a>
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

const mapStateToProps = state => ({
  post: state.post,
  auth: state.auth
});

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  { getPost }
)(Post);
