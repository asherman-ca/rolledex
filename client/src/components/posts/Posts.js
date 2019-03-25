import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPosts } from '../../actions/postActions';
import Spinner from '../common/Spinner';
import PostFeed from './PostFeed';

class Posts extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    const { posts, loading } = this.props.post;
    let postContent;

    if (posts === null || loading) {
      postContent = <Spinner />;
    } else {
      postContent = <PostFeed posts={posts} />;
    }

    return (
      <div className="profile-page">
        <div
          className="page-header header-filter"
          data-parallax="true"
          style={{ backgroundImage: "url('../assets/img/examples/city.jpg')" }}
        />
          <div style={{ minHeight: '75vh' }} className="main main-raised">
            <div className="container">
              <div className="row">
                <div className="col-md-6 tech-box" style={{marginTop: '50px', marginBottom: '50px'}}>
                  <h1 className="display-4" style={{marginTop: "0px", marginBottom: "0px"}}><strong>Hot Techniques</strong></h1>
                  <p className="lead tech-paragraph description" style={{margin: "0px", paddingTop: '5px'}}>
                    Browse Rolledex's Best Tech
                  </p>
                </div>
                <div className="col-md-6" />
                <div className="col-md-12">
                  {postContent}
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  post: state.post
});

Posts.propTypes = {
  post: PropTypes.object.isRequired,
  getPosts: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  { getPosts }
)(Posts);
