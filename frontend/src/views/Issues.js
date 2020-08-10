import React from 'react';
import { Route } from 'react-router-dom';

import { routes } from "../constants/posts";

class Issues extends React.Component {

    render() {
        return (
            <>
                {routes.map(post =>
                    <Route exact path={post.path} component={post.component}/>
                )}
            </>
        );
    }
}

export default Issues;