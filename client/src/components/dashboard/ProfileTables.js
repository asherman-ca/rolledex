import React, {Component} from 'react';
import Moment from 'react-moment';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import {deletePost} from '../../actions/postActions'

class ProfileTables extends Component {

    onDeleteClick(id) {
        this.props.deletePost(id);
    }

    render () {
        const { exp, edu, posts, user } = this.props

        return (
            <div style={{padding: "10px", minHeight: '400px'}} className="section section-dark">
                <div className="row" style={{marginBottom: "25px"}}>
                    <div className="col-md-5 ml-auto">
                        <h3 className="text-center title fonting">
                        <strong>Tournament Record</strong>
                        </h3>
                        {exp}
                    </div>
                    <div className="col-md-5 mr-auto">
                        <h3 className="text-center title fonting">
                        <strong>Gym Affiliations</strong>
                        </h3>
                        {edu}
                    </div>
                </div>
                <hr style={{backgroundColor:"white"}} />
                <div className="row">
                    <div className="col-md-5 ml-auto">
                        <h3 className="title fonting text-center" style={{marginTop:"20px"}}>Posts</h3>
                    </div>
                    <div className="col-md-5 mr-auto" />
                </div>
                <div className="row">
                    <div className="col-md-10 mr-auto ml-auto fonting whiting">
                        {posts.length > 0 ? posts.map(post => (
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
                                    <i onClick={this.onDeleteClick.bind(this, post._id)} style={{marginRight: "10px"}} class="material-icons">delete</i>
                                    <i class="material-icons">favorite</i> {post.likes.length}
                                    </div>
                                </div>
                            </div>
                        </div>
                        )) : 
                        <p className="text-center fonting whiting">No Posts Available</p>}
                    </div>
                </div>
            </div>
        )};
}

ProfileTables.propTypes = {
    deletePost: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    posts: PropTypes.array.isRequired,
    exp: PropTypes.array.isRequired,
    edu: PropTypes.array.isRequired
}

export default connect(null, {deletePost})
(ProfileTables);