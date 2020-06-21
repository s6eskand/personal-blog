import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Blog from "./views/Blog";
import Issues from './views/Issues';
import './App.css';


function App() {
    return (
      <div>
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Blog} />
                <Issues />
            </Switch>
        </Router>
      </div>
    );
}

export default App;
