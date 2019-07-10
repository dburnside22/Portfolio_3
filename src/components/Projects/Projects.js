import React, { Component } from 'react'
import WorkoutTracker from '../WorkoutTracker/WorkoutTracker';
import RecipeOfTheDay from '../RecipeOfTheDay/RecipeOfTheDay';
import SaborLatino from '../SaboerLatino/SaborLatino';

export class Projects extends Component {
    render() {
        return (
            <div className="container">
                < WorkoutTracker />
                < RecipeOfTheDay />
                < SaborLatino />
            </div>
        )
    }
}

export default Projects
