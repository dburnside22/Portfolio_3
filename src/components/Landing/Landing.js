import React, { Component } from 'react';
import './Landing.css';
import { Link } from "react-router-dom";


export class Landing extends Component {
    render() {
        return (
            <div>
                <div className="hero-image">
                    <div className="hero-text">
                        <h1>Daniel Burnside</h1>
                        <h3>Software Developer</h3>
                    </div>
                </div>
                <div className="home-cards">
                    <div className="card text-center">
                        <div className="card-body">
                            <h5 className="card-title">Special title treatment</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <Link to={"/about"} className="btn btn-primary">About</Link>
                        </div>
                    </div>
                    <div className="card text-center">
                        <div className="card-body">
                            <h5 className="card-title">Special title treatment</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <Link to={"/projects"} className="btn btn-primary">Projects</Link>
                        </div>
                    </div>
                    <div className="card text-center">
                        <div className="card-body">
                            <h5 className="card-title">Special title treatment</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <Link to={"/contact"} className="btn btn-primary">Contact</Link>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Landing
