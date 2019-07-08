import React from 'react';
import photo from './../../../src/Chess.jpg';
import './About.css';

export default function Chess() {
    return (
        <div>
            <h3 className='hobby-header'>Chess</h3>
            <div className="hobby-div">
                <img className="hobby-photo" src={photo} alt='Picture of chess pieces'></img>
                <p>
                    My father first introduced me to chess when I was eight years old. To this day, 
                    the game captures my attention and I am amazed at how the principles I’ve observed from 
                    it can be applied to everyday life. The complexities of such a seemingly simple game provide 
                    for a challenging, yet enjoyable, pastime. The game of chess is something that I will continue
                    to enjoy and desire to improve in throughout my lifetime.
                </p>
            </div>
           
        </div>
    )
}
