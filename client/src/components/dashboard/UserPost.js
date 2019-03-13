import React from 'react'
import PropTypes from 'prop-types';

const UserPost = (post) => {
    return (
        <div class="media">
            <a class="float-left" href="#pablo">
                <div class="avatar">
                    <img class="media-object" alt="Tim Picture" src={user.avatar} />
                </div>
            </a>
            <div class="media-body">
                <h4 class="media-heading fonting whiting">{post.vector} · {post.position}
                    <small> · <Moment format="YYYY/MM/DD">{post.date}</Moment></small>
                </h4>
                <p>{post.text}</p>
                <div class="media-footer">
                    <div class="btn btn-link float-right">
                        <i class="material-icons">delete</i>
                        <i class="material-icons">favorite</i> {post.likes.length}
                    </div>
                </div>
            </div>
        </div>
    )
}

UserPost.propTypes = {
    avatar: PropTypes.string.isRequired,
    vector: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    likes: PropTypes.array.isRequired
}

export default UserPost;