import React from 'react'
import {Link} from 'react-router-dom'

const Dropdown = () => {
    return (
        <div style={{padding:"20px"}} className="col-4 avatar-btn">
            <div className="dropdown">
                <button
                href="#pablo"
                className="dropdown-toggle btn btn-primary"
                data-toggle="dropdown"
                aria-expanded="false"
                >
                <i className="material-icons">add</i>
                <div className="ripple-container" />
                </button>
                <div
                className="dropdown-menu dropdown-menu-right"
                x-placement="bottom-end"
                style={{
                    position: 'absolute',
                    top: '41px',
                    left: '129px',
                    willChange: 'top, left'
                }}
                >
                <h6 className="dropdown-header">Profile Actions</h6>
                <Link to="/create-profile" className="dropdown-item">
                    Edit Profile
                </Link>
                <Link
                    to="/add-experience"
                    className="dropdown-item"
                >
                    Add Tournament
                </Link>
                <Link
                    to="/add-education"
                    className="dropdown-item"
                >
                    Add Gym
                </Link>
                <div className="dropdown-divider" />
                    <Link
                        to="/add-post"
                        className="dropdown-item"
                    >
                        Add Technique
                    </Link>
                <div className="dropdown-divider" />
                    <Link
                        to="/reset"
                        className="dropdown-item"
                    >
                        Reset Password
                    </Link>
                    <a href="#pablo" className="dropdown-item">
                        Delete Account
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Dropdown;