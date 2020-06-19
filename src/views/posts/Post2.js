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
                        <p><i>June 19 2020 &bull; 5 min read</i></p>
                    </div>
                    <div className="social-icons">
                        <a href="https://github.com/s6eskand"><FaGithub id="github" size={30} /></a>
                        <a href="https://linkedin.com/in/sameskandar"><FaLinkedin id="linkedin" size={30} /></a>
                    </div>
                </div>
                <div className="main-img" >
                    <img src={reactHook} alt=""/>
                </div>
                <div>
                    <p>This is a test</p>
                </div>
            </div>
        </div>
    );
}

export default Post2;