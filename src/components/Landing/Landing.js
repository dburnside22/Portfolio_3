import React, { Component } from 'react';
import './Landing.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import HomeCard from '../HomeCard/HomeCard';


export class Landing extends Component {
    render() {
        return (
            <div>
                <div className="hero-image">
                    <div className="hero-text">
                        <h1 className=''>Daniel Burnside</h1>
                        <h3>Software Developer</h3>
                        <h5><FontAwesomeIcon icon={faMapMarkerAlt} /> Austin, TX</h5>
                        <div className='icons'>
                            <a href='https://www.linkedin.com/in/daniel-burnside/'><FontAwesomeIcon icon={faLinkedin} /></a>
                            <a href='https://github.com/dburnside22'><FontAwesomeIcon icon={faGithub}/></a>
                        </div>

                    </div>
                </div>
                <div className="home-cards">
                    < HomeCard link="/about" linkName="About" />
                    < HomeCard link="/projects" linkName="Projects" />
                    < HomeCard link="/contact" linkName="Contact" />
                </div>

            </div>
        )
    }
}

export default Landing
