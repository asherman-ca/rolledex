import React, {Component} from 'react';
import Moment from 'react-moment';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {deletePost} from '../../actions/postActions'

class ProfileTables extends Component {
    onDeleteClick(id) {
        this.props.deletePost(id);
    }

    render () {
        const { exp, edu, posts, showDelete } = this.props
       
        return (
            <div style={{padding: "10px", minHeight: '400px', paddingTop:'0px'}} className="section">
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
                <hr />
                <div className="row">
                    <div className="col-md-5 ml-auto">
                        <h3 className="title fonting text-center" style={{marginTop:"20px"}}>Posts</h3>
                    </div>
                    <div className="col-md-5 mr-auto" />
                </div>
                <div className="row">
                    <div className="col-md-10 mr-auto ml-auto fonting whiting">
                        {posts ? posts.map(post => (
                        <div key={post._id} className="media">
                            <div className="float-left">
                                <div className="avatar">
                                    <img className="media-object" alt="../img/miyao.jpg" src={post.avatar} />
                                </div>
                            </div>
                            <div className="media-body">
                                <Link to={`/post/${post._id}`}>
                                    <h4 className="media-heading fonting">{post.vector} · {post.position}
                                        <small> · <Moment format="YYYY/MM/DD">{post.date}</Moment></small>
                                    </h4>
                                </Link>
                                <p style={{color: '#3C4858'}}>{post.text}</p>
                                <div className="media-footer">
                                    <div className="btn btn-link float-right" style={{cursor: 'auto'}}>
                                    {showDelete ?
                                    <i onClick={this.onDeleteClick.bind(this, post._id)} style={{marginRight: "10px", cursor: 'pointer'}} className="material-icons">delete</i> : null}
                                    <i style={{cursor: 'auto'}} className="material-icons">favorite</i> {post.likes.length}
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
    exp: PropTypes.object.isRequired,
    edu: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, {deletePost})(ProfileTables);