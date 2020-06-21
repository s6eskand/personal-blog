import React from 'react';
import './PostHeader.css';

// icons
import { FaGithub, FaLinkedin } from "react-icons/fa";

// images
import samProfile from '../../media/images/blog_profile.png';
import intro from '../../media/images/introduction.png';

function Post1() {
        return (
            <div className="posts-container">
                <div className="posts-header">
                    <h1 className="posts-title">Welcome to my Blog!</h1>
                    <div className="author-info">
                        <img className="author-img" src={samProfile} alt=""/>
                        <div className="info-text">
                            <p><b>Written by: Sam Eskandar</b></p>
                            <p><i>June 19 2020 </i><span role="img" aria-label="books">&#128218;</span><i> 2 min read</i></p>
                        </div>
                        <div className="social-icons">
                            <a href="https://github.com/s6eskand"><FaGithub id="github" size={30} /></a>
                            <a href="https://linkedin.com/in/sameskandar"><FaLinkedin id="linkedin" size={30} /></a>
                        </div>
                    </div>
                    <div className="main-img" >
                        <img src={intro} alt=""/>
                    </div>
                    <div className="main-content">
                        <p>
                            After over a month of procrastination, I have finally brought myself to make this blog! <br/>
                            <br/>
                            <br/>
                            I originally had the idea to start a technical blog because I document everything I learn.
                            If you were to go through my Github account you would quickly see that I have a lot of tutorial
                            projects that I use as reference for when I am building larger scale applications. So, I had the idea
                            to share those resources. <br/>
                            <br/>
                            <br/>
                            Every single post will be a tutorial on a way to execute a task with a specific language or framework,
                            or just getting you set up with a specific language or framework. However, the learning doesn't stop there. <br/>
                            <br/>
                            <br/>
                            With every tutorial/article on this blog, will be a link to the fully documented (yay commenting!) and completed project.
                            These projects will all be in one repository on my Github account that can be found <a href="https://github.com/s6eskand/learn-with-me">here</a>. <br/>
                            <br/>
                            <br/>
                            So feel free to star the repo, use it as reference, or just copy and paste some of the boilerplate code needed to complete the project. I hope that I can help as much as possible with
                            any issues you may be facing, and thank you for reading this far <span role="img" aria-label="smiling emoji">&#128516;</span>
                        </p>
                    </div>
                </div>
            </div>
        );
}

export default Post1;