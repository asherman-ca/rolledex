import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { deleteComment } from '../../actions/postActions';
import Moment from 'react-moment';

class CommentItem extends Component {
  onDeleteClick(postId, commentId) {
    this.props.deleteComment(postId, commentId);
  }

  render() {
    const { comment } = this.props;

    return (
      <div className="media" style={{marginBottom: '15px', marginLeft: '50px'}}>
        <Link className="float-left" to={`/profile/${comment.user}`}>
          <div className="avatar">
            <img className="media-object" alt="64x64" src={comment.avatar} />
          </div>
        </Link>
        <div className="media-body">
          <h4 className="media-heading">{comment.name}
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
