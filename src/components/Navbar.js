import React from "react";
import {Link} from 'react-router-dom';
import './Navbar.css';

class Navbar extends React.Component {
    render() {
        return (
            <nav className="nav">
                <div className="logo">
                    <Link to="/"><h4><i>Sam Eskandar</i></h4></Link>
                </div>
                <ul className="nav-links">
                    <Link to="/"><li>Issues</li></Link>
                    <Link to="/about"><li>About</li></Link>
                </ul>
            </nav>
        );
    }
}

export default Navbar;