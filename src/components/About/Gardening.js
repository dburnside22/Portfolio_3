import React from 'react';
import photo from './../../../src/Carrots.jpg';

export default function Gardening() {
    return (
        <div>
            <h3 className='hobby-header'>Gardening</h3>
            <div className="hobby-div">
                <p>
                    Gardening is one of life’s simple pleasures and never fails to remind me that there are 
                    things that I can control and things that I cannot. There is nothing like the feeling of 
                    taking a seed from its humble beginnings, through patience and consistency in care, and 
                    watching it turn into a plant that yields a crop. Gardening is also a great reminder to 
                    slow down and enjoy the beauty around you as you work.
                </p>
                <img className="hobby-photo" src={photo} alt='Picture of carrots'></img>
            </div>
        </div>
    )
}
