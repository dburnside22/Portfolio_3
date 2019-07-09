import React from 'react';
import { Link } from "react-router-dom";

export default function HomeCard(props) {
    return (
        <div>
            <div className="card">
            <Link to={props.link} className="card-body">
                {props.linkName}
            </Link>
            </div>
        </div>
    )
}
