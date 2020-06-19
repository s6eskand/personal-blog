import React from 'react';
import { Route } from 'react-router-dom';
import Post1 from './posts/Post1';
import Post2 from './posts/Post2';
import Post3 from './posts/Post3';

class Issues extends React.Component {

    render() {
        return (
            <div>
                <Route exact path="/issues/1" component={Post1} />
                <Route exact path="/issues/2" component={Post2} />
                <Route exact path="/issues/3" component={Post3} />
            </div>
        );
    }
}

export default Issues;