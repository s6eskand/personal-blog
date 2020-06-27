import React from "react";
import {Link} from 'react-router-dom';
import './Navbar.css';

class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    render() {
        return (
            <nav className="nav">
                <div className="logo">
                    <Link to="/"><h4><i>Sam Eskandar</i></h4></Link>
                </div>
                <ul className="nav-links">
                    <a href="https://sameskandar.me"><li>Website</li></a>
                    <Link to="/about"><li>About</li></Link>
                </ul>
            </nav>
        );
    }
}

export default Navbar;