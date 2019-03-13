import React from 'react';
import Moment from 'react-moment'

const ProfileTables = ({exp, edu, posts, user}) => {
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
    );
}

export default ProfileTables;