import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteComment } from '../../actions/postActions';
import Moment from 'react-moment';

class CommentItem extends Component {
  onDeleteClick(postId, commentId) {
    this.props.deleteComment(postId, commentId);
  }

  render() {
    const { comment, postId, auth } = this.props;

    return (
      <div class="media" style={{marginBottom: '15px', marginLeft: '50px'}}>
        <a class="float-left" href="#pablo">
          <div class="avatar">
            <img class="media-object" alt="64x64" src={comment.avatar} />
          </div>
        </a>
        <div class="media-body">
          <h4 class="media-heading">{comment.name}
            <small>· <Moment format="YYYY/MM/DD">{comment.date}</Moment></small>
          </h4>
          <p>{comment.text}</p>
        </div>
      </div> 
    );
  }
}

// !!!!
// Best example of what to proptype
// !!!

CommentItem.propTypes = {
  deleteComment: PropTypes.func.isRequired,
  comment: PropTypes.object.isRequired,
  postId: PropTypes.string.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { deleteComment }
)(CommentItem);
