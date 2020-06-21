import React from 'react';
import profilePic from '../media/images/blog_profile.png'
import './Blogcard.css';
import { Button } from '@material-ui/core';

class Blogcard extends React.Component{
    render() {
        return(
            <div className="blogcard-all">
                <div className="container">
                    <div className="blogcard">
                        <div className="row">
                            <img className="blogcard-image" src={this.props.image} alt=""/>
                            <div className="blogcard-text">
                                <div className="row">
                                    <img className="blogcard-profile" src={profilePic} alt=""/>
                                    <div>
                                        <h5 className="blogcard-issue">{this.props.issue}</h5>
                                        <h5>Written by Sam Eskandar</h5>
                                    </div>
                                </div>
                                <h3 className="blogcard-title">{this.props.title}</h3>
                                <p className="blogcard-date"><i>{this.props.date}</i></p>
                                <p className="blogcard-about">{this.props.tags.map(tag => <Button className="tag-btn" variant="outlined">{tag}</Button>)}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Blogcard;
