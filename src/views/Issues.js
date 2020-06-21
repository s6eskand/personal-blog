import React from 'react';
import { Route } from 'react-router-dom';
import About from './posts/About';
import Post2 from './posts/Post2';
import Post3 from './posts/Post3';

class Issues extends React.Component {

    render() {
        return (
            <div>
                <Route exact path="/about" component={About} />
                <Route exact path="/issues/2" component={Post2} />
                <Route exact path="/issues/3" component={Post3} />
            </div>
        );
    }
}

export default Issues;