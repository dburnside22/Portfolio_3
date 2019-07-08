import React, { Component } from 'react'
import Music from './Music';
import Chess from './Chess';
import Gardening from './Gardening';

export class About extends Component {
    render() {
        return (
            <div className='container'>
                <h2>About Me...</h2>
                <p className='about-me-paragraph'> 
                    Front-End developer with experience building well tested scalable web applications 
                    from start to finish using Agile methodology. Skilled in using modern frameworks such as React and Angular, 
                    with experience in multiple backend configurations.  
                </p>

                <h2 className='hobbies-afk'>Hobbies away from the keyboard</h2>
                <div className='hobbies-components'>
                    <Music />
                    <Chess />
                    <Gardening />
                </div>
            </div>
        )
    }
}

export default About
