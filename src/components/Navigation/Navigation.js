import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Navigation.css';

export class Navigation extends Component {
    render() {
        return (
            <div>
                <ul className="nav justify-content-center">
                    <li className="nav-item"><Link to={'/'} className="nav-link">Home</Link></li>
                    <li className="nav-item"><Link to={'/about'} className="nav-link">About</Link></li>
                    <li className="nav-item"><Link to={'/projects'} className="nav-link">Projects</Link></li>
                    <li className="nav-item"><Link to={'/contact'} className="nav-link">Contact</Link></li>
                </ul>
            </div>
        )
    }
}

export default Navigation
