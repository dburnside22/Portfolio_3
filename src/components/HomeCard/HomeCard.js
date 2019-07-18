import React from 'react';
import { Link } from "react-router-dom";

export default function HomeCard(props) {
    return (
        <div className='card-container'>
            <div className="card">
            <span className='background'></span>
            <Link to={props.link} className="card-body">
                {props.linkName}
            </Link>
            </div>
        </div>
    )
}
