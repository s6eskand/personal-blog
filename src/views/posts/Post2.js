import React from 'react';
import './PostHeader.css';

// icons
import { FaGithub, FaLinkedin } from "react-icons/fa";

// images
import samProfile from '../../media/images/blog_profile.png';
import reactHook from '../../media/images/react_hooks.png';

function Post2() {
    return (
        <div className="posts-container">
            <div className="posts-header">
                <h1 className="posts-title">An intro to React Hooks</h1>
                <div className="author-info">
                    <img className="author-img" src={samProfile} alt=""/>
                    <div className="info-text">
                        <p><b>Written by: Sam Eskandar</b></p>
                        <div className="info-specific">
                            <p><i>June 19 2020 </i><span role="img" aria-label="books">&#128218; &#128218; &#128218;</span> </p>
                            <p style={{margin: '3px'}}><i> 10 min read</i></p>
                        </div>
                    </div>
                    <div className="social-icons">
                        <a href="https://github.com/s6eskand"><FaGithub id="github" size={30} /></a>
                        <a href="https://linkedin.com/in/sameskandar"><FaLinkedin id="linkedin" size={30} /></a>
                    </div>
                </div>
                <div className="main-img" >
                    <img src={reactHook} alt=""/>
                </div>
                <div className="main-content">
                    <p>
                        Fishing is no easy task. You have to use the right bait, cast the line properly, be able to
                        pick up the slightest of movements, and fight to pull the fish out of the water. <br/>
                        <br/>
                        <br/>
                        Just as you are reading this post, I was incredibly disappointed that React Hooks had nothing to
                        do with fishing, and everything to do with React.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Post2;