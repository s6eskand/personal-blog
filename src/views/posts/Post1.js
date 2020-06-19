import React from 'react';
import './PostHeader.css';

// icons
import { FaGithub, FaLinkedin } from "react-icons/fa";

// images
import samProfile from '../../media/images/blog_profile.png';
import motivation from '../../media/images/motivation.png';

function Post1() {
        return (
            <div className="posts-container">
                <div className="posts-header">
                    <h1 className="posts-title">Staying Motivated During a Pandemic</h1>
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
                        <img src={motivation} alt=""/>
                    </div>
                    <div className="main-content">
                        <p>
                            Life is extremely busy. We live a continuous cycle of pushing ourselves to work harder, study longer, spend more time with family and friends,
                            and various other activities. However, a global health crisis on the scale of COVID-19 will send your fast paced lifestyle to a screeching halt. <br/>
                            <br/>
                            So once the entire world comes to a halt, how do we find the motivation to keep pushing forward? <br/>
                            <br/>
                            Well the answer isn't as simple as it should be. Finding motivation in our day to day can already be a daunting task, and adding the fact that many of us
                            are now stuck at home with nothing to do, does not help the situation.<br/>
                            <br/>
                        </p>
                        <h2>1. Accepting the reality of the situation</h2>
                        <br/>
                        <p>
                            We are in a pandemic. Many of us have lost jobs, summer plans, and unfortunately family and friends due to the virus. It is a stressful situation, and it is
                            perfectly okay to do nothing sometimes. Do not under any circumstances let anyone tell you that you were never lacking time, only initiative because it is
                            just important to be taking care of yourself as it is to be getting things done. <br/>
                            <br/>
                            Another thing to note is that everyone reacts differently to the situations they are put in. It may be discouraging to look at your peers and see them being
                            productive, getting work done, and waking up before 5pm (yes, I am guilty too). However, you have to remember that you are your own person and you take your own
                            time to recuperate, and recover. You may be someone who has taken the gift of extra time that the stay at home orders have given you from day one, or you may be like
                            myself, who spent the first 2 weeks of the shutdown playing League of Legends for hours at a time that I am ashamed to admit. <br/>
                            <br/>
                            The important thing is that you are you, and nobody can rush you into getting accustomed to the new lifestyle COVID-19 has forced upon us. <br/>
                            <br/>
                        </p>
                        <h2>2. Finding things you love to do</h2>
                    </div>
                </div>
            </div>
        );
}

export default Post1;