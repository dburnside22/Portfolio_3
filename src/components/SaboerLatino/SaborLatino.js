import React from 'react';
import './../Projects/Projects.css';
import photo from './../../../src/SaborLatino.png';


export default function SaborLatino() {
    return (
        <div className='project-tracker-div light-gray-background p-2'>
                <div>
                    <h2 className="project-title">Sabor Latino</h2>
                    <h5 className='text-center mt-2'>About this project</h5>
                    <p className='project-tracker-desc'>
                        This was a website built for a local resturant with some delicious food!
                    </p>
                    <h5 className='text-center mt-2'>Tools used</h5>
                    <ul className='project-tracker-tools-list-3'>
                        <li>Angular</li>
                        <li>Github</li>
                        <li>Heroku</li>
                    </ul>
                    <div className='buttons'>
                        <div><a href='https://saborlatino.herokuapp.com/'><button>Live Demo</button></a></div>
                        <div><a href='https://github.com/dburnside22/Random-Meals'><button>Repo</button></a></div>
                    </div>
                </div>
                <div className='sabor-img-div'>
                    <img className='sabor-img' src={photo} alt='Resturant web app demo'/>
                </div>
                    

        </div>
    )
}
