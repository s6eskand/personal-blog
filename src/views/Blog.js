import React from "react";
import {Link} from "react-router-dom";

// components
import Featured from '../components/Featured';
import Blogcard from '../components/Blogcard';

// Images
import introduction from '../media/images/introduction.png';
import djangoUnchained from '../media/images/django_django_unchained.png';
import reactHooks from '../media/images/react_hooks.png';

class Blog extends React.Component {
    render() {
        return(
            <div className="row" style={{marginBottom: '100px'}}>
                <Featured originalPost="https://michelleangkasa.wixsite.com/michelle/post/i-learn-for-the-trees-environmental-education"
                          authorPic="https://lh4.googleusercontent.com/-MoNlfJk8EVk/AAAAAAAAAAI/AAAAAAAAAOM/-Q_z7oEgc_I/s96-c/photo.jpg"
                          author="Written by Michelle Angkasa"
                          title="I Learn for the Trees: Environmental Education"
                          description='"The complexity of Earth and its life systems can never be safely managed. What might be managed is us: human desires, economies, politics, and communities ...'
                          bkgimg="https://static.wixstatic.com/media/ad13a6_07de3e10c7534dac88c300dd5cb34e3b~mv2.jpg/v1/fill/w_1480,h_833,al_c,q_90,usm_0.66_1.00_0.01/ad13a6_07de3e10c7534dac88c300dd5cb34e3b~mv2.webp"
                />
                <div className="row">
                    <div className="container" style={{ paddingTop: '100px'}}>
                        <h1 className="collection-title">The Full Collection of My Personal Blog Posts</h1>
                        <hr style={{borderTop: '2px solid #b4b4b4', marginTop: '5px'}}/>
                    </div>
                    <Link to="/issues/3">
                        <Blogcard
                            image={djangoUnchained}
                            title="Building a Web Application with Django"
                            description="Essentially the preview..."
                            date="June 19 2020"
                            issue="Issue #03"
                        />
                    </Link>
                    <Link to="/issues/2">
                        <Blogcard
                            image={reactHooks}
                            title="An intro to React Hooks"
                            description="Essentially the preview..."
                            date="today"
                            issue="Issue #02"
                        />
                    </Link>
                    <Link to="/issues/1">
                        <Blogcard
                            image={introduction}
                            title="Welcome to my Blog!"
                            description="After over a month of procrastination, I have..."
                            date="June 19 2020"
                            issue="Issue #01"
                        />
                    </Link>
                </div>
            </div>
        )
    }
}

export default Blog;