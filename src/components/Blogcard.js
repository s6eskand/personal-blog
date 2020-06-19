import React from 'react';
import profilePic from '../media/images/blog_profile.png'
import './Blogcard.css';

class Blogcard extends React.Component{
    render() {
        return(
            <div className="container" style={{paddingTop: '50px'}}>
                <div className="blogcard">
                    <div className="row">
                        <img className="blogcard-image" src={this.props.image} alt=""/>
                        <div className="blogcard-text">
                            <div className="row">
                                <img style={{padding: '20px'}} className="blogcard-profile" src={profilePic} alt=""/>
                                <div>
                                    <h5 style={{paddingTop: '27px'}}>{this.props.issue}</h5>
                                    <h5>Written by Sam Eskandar</h5>
                                </div>
                            </div>
                            <h3 className="blogcard-title">{this.props.title}</h3>
                            <p className="blogcard-about">{this.props.description}</p>
                            <p className="blogcard-date"><i>{this.props.date}</i></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Blogcard;
