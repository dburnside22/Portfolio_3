import React from 'react';
import workoutPhoto1 from './../../../src/workout-tracker1.png';
import workoutPhoto2 from './../../../src/workout-tracker2.png';
import './../Projects/Projects.css';


export default function WorkoutTracker() {
    return (
        <div className='project-tracker-div light-gray-background p-2'>
            <div className='project-images'>
                <img className='project-tracker-img' src={workoutPhoto1} alt='workout tracker app demo'/>
                <img className='project-tracker-img' src={workoutPhoto2} alt='workout tracker app demo'/>
            </div>
            
            <div>
                <h2 className="project-title">Workout Tracker</h2>
                <h5 className='text-center mt-2'>About this project</h5>
                <p className="project-tracker-desc">
                    This project was built to make logging workouts more simply with minimal setup.
                </p>
                <h5 className='text-center mt-2'>Tools used</h5>
                <ul className='project-tracker-tools-list'>
                    <li>React</li>
                    <li>Firebase</li>
                    <li>Github</li>
                    <li>Heroku</li>
                    <li>Trello</li>
                    <li>Figma</li>
                </ul>
                <div className='buttons'>
                    <div><a href="https://workout--tracker.herokuapp.com/"><button>Live Demo</button></a></div>
                    <div><a href="https://github.com/dburnside22/WorkoutTrackerReact"><button>Repo</button></a></div>
                </div>
            </div>
        </div>
    )
}
