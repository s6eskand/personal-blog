import React from 'react';
import profilePic from '../../media/images/blog_profile.png'
import './Blogcard.css';
import { Button } from '@material-ui/core';

function Blogcard(props) {

    const renderBooks = () => {
        switch (props.books) {
            case 1:
                return <span role="img" aria-label="books">&#128218;</span>;
            case 2:
                return <span role="img" aria-label="books">&#128218; &#128218;</span>;
            case 3:
                return <span role="img" aria-label="books">&#128218; &#128218; &#128218;</span>;
            case 4:
                return <span role="img" aria-label="books">&#128218; &#128218; &#128218; &#128218;</span>;
            case 5:
                return <span role="img" aria-label="books">&#128218; &#128218; &#128218; &#128218; &#128218;</span>;
            default:
                return <span role="img" aria-label="books">&#128218;</span>;
        }
    };

    return(
        <div className="blogcard-all">
            <div className="container">
                <div className="blogcard">
                    <div className="row">
                        <img className="blogcard-image" src={props.image} alt=""/>
                        <div className="blogcard-text">
                            <h3 className="blogcard-title">{props.title}</h3>
                            <p className="blogcard-about">{props.description}</p>
                            <p className="blogcard-date"><i>{props.date} {renderBooks()} {props.time}</i></p>
                            <p className="blogcard-about">{props.tags.map(tag => <Button className="tag-btn" variant="outlined">{tag}</Button>)}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blogcard;
