import React from 'react';

const SocialButtons = social => {
    return (
        <div style={{padding:"20px"}} className="col-md-2 edit-buttons">
            <a href={social.instagram ? social.instagram : 'https://www.instagram.com'}>
                <button className="btn btn-just-icon btn-instagram">
                <i className="fab fa-instagram"> </i>
                </button>
            </a>
            <a href={social.youtube ? social.youtube : 'https://www.youtube.com'}>
                <button className="btn btn-just-icon btn-youtube">
                <i className="fab fa-youtube"> </i>
                </button>
            </a>
        </div>
    )
}

export default SocialButtons;