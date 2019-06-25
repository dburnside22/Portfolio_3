import React, { Component } from 'react';
import './Navigation.css';

export class Navigation extends Component {
    render() {
        return (
            <div>
                <ul className="nav justify-content-center">
                    <li className="nav-link">About</li>
                    <li className="nav-link">Project</li>
                    <li className="nav-link">Contact</li>
                </ul>
            </div>
        )
    }
}

export default Navigation
