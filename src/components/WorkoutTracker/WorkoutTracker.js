import React from 'react';
import workoutPhoto1 from './../../../src/workout-tracker1.png';
import workoutPhoto2 from './../../../src/workout-tracker2.png';
import './WorkoutTracker.css';


export default function WorkoutTracker() {
    return (
        <div className='workout-tracker-div'>
            <div>
                <img className='workout-tracker-img' src={workoutPhoto1} />
                <img className='workout-tracker-img' src={workoutPhoto2} />
            </div>
            
            <div>
                <h2 className="project-title">Workout Tracker</h2>
                <h5 className='text-center mt-2'>About this project</h5>
                <p>
                    This project was built to make logging workouts more simply with minimal setup.
                </p>
                <h5 className='text-center mt-2'>Tools used</h5>
                <ul className='workout-tracker-tools-list'>
                    <li>React</li>
                    <li>Firebase</li>
                    <li>Github</li>
                    <li>Heroku</li>
                    <li>Trello</li>
                    <li>Figma</li>
                </ul>
                <div className='buttons'>
                    <div><button>Live Demo</button></div>
                    <div><button>Repo</button></div>
                    <div><a href='https://www.figma.com/file/Rq8KN5iEq4hQQ46QdfoQ7HY1/Untitled'><button>Mock up</button></a></div>
                    <div><a href='https://trello.com/b/H4joADIw/work-out-tracker'><button>Trello</button></a></div>
                </div>
            </div>
        </div>
    )
}
