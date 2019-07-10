import React from 'react';
import './../Projects/Projects.css';
import recipePhoto1 from './../../../src/RecipeOfTheDay.png';
import recipePhoto2 from './../../../src/RecipeOfTheDay2.png';


export default function RecipeOfTheDay() {
    return (
            <div className='project-tracker-div light-gray-background p-2'>
                <div>
                    <h2 className="project-title">Recipe Of The Day</h2>
                    <h5 className='text-center mt-2'>About this project</h5>
                    <p className='project-tracker-desc'>
                        This project was built to generate new recipe ideas using a meals API.
                    </p>
                    <h5 className='text-center mt-2'>Tools used</h5>
                    <ul className='project-tracker-tools-list'>
                        <li>React</li>
                        <li>TheMealDB API</li>
                        <li>Github</li>
                        <li>Heroku</li>
                    </ul>
                    <div className='buttons'>
                        <div><a href='https://polite-loonie-48543.herokuapp.com/'><button>Live Demo</button></a></div>
                        <div><a href='https://github.com/dburnside22/Random-Meals'><button>Repo</button></a></div>
                    </div>
                </div>
                <div className='project-images'>
                    <img className='project-tracker-img' src={recipePhoto1} alt='recipe app demo'/>
                    <img className='project-tracker-img' src={recipePhoto2} alt='recipe app demo'/>
                </div>
                    

        </div>
    )
}
