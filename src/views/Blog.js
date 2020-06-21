import React from "react";
import {Link} from "react-router-dom";

// components
import Featured from '../components/Featured';
import Blogcard from '../components/Blogcard';

// Images
import introduction from '../media/images/introduction.png';
import djangoUnchained from '../media/images/django_django_unchained.png';
import reactHooks from '../media/images/react_hooks.png';

// TODO add tags to previews
class Blog extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tags: [
                'General',
                'React',
                'Hooks',
                'JavaScript',
                'Django',
                'Python'
            ],
            tag1: ['general'],
            tag2: ['React', 'Hooks', 'JavaScript'],
            tag3: ['Django', 'Python']
        }
    }

    render() {
        return(
            <div className={window.innerWidth > 760 ? "center" : "container"} style={{marginBottom: '100px'}}>
                <div className="container" style={{ paddingTop: '100px'}}>
                    <h1 className="collection-title">The Full Collection of My Personal Blog Posts</h1>
                    <hr style={{borderTop: '2px solid #b4b4b4', marginTop: '5px'}}/>
                </div>
                <Link to="/issues/3">
                    <Blogcard
                        image={djangoUnchained}
                        title="Building a Web Application with Django"
                        tags={this.state.tag3}
                        date="June 20 2020 &#128218; &#128218; &#128218; 20 min read"
                        issue="Issue #03"
                    />
                </Link>
                <Link to="/issues/2">
                    <Blogcard
                        image={reactHooks}
                        title="An intro to React Hooks"
                        tags={this.state.tag2}
                        date="June 19 2020 &#128218; &#128218; 10 min read"
                        issue="Issue #02"
                    />
                </Link>
                <Link to="/issues/1">
                    <Blogcard
                        image={introduction}
                        title="Welcome to my Blog!"
                        tags={this.state.tag1}
                        date="June 19 2020 &#128218; 2 min read"
                        issue="Issue #01"
                    />
                </Link>
            </div>
        )
    }
}

export default Blog;