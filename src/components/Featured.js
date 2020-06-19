import React from 'react';
import './Featured.css';
import { FaLongArrowAltRight } from 'react-icons/fa';

class Featured extends React.Component {
    render() {
        return(
            <div className="featured-post">
                <a href={this.props.originalPost}>
                    <h2 style={{paddingTop: '20px'}}>My Favourite Blog Post of the Week!</h2>
                    <div style={{paddingTop: '20px', paddingLeft: '20px', paddingRight: '20px'}}>
                        <div className="featured-row">
                            <img className="card-profile" style={{borderRadius: '50%'}} src={this.props.authorPic} alt=""/>
                            <h5 style={{paddingTop: '15px', paddingLeft: '15px'}}>{this.props.author}</h5>
                        </div>
                        <h3>{this.props.title}</h3>
                        <p style={{paddingTop: '20px', paddingBottom: '20px'}}><i>{this.props.description}</i></p>
                        <div className="featured-row">
                            <p>Read the full post </p>
                            <FaLongArrowAltRight style={{paddingTop: '4.5px', paddingLeft: '15px'}}/>
                        </div>
                    </div>
                    <img style={{width: '500px', height: '100%'}} src={this.props.bkgimg} alt=""/>
                </a>
            </div>
        )
    }
}

export default Featured;