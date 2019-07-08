import React from 'react';
import { Link } from "react-router-dom";

export default function HomeCard(props) {
    return (
        <div>
            <div className="card text-center">
                <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <Link to={props.link} className="btn btn-primary">{props.linkName}</Link>
                </div>
            </div>
        </div>
    )
}
