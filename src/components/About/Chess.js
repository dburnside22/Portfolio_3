import React from 'react';
import photo from './../../../src/Chessphoto.jpg';
import './About.css';

export default function Chess() {
    return (
        <div>
            <div className="hobby-div">
                <img className="hobby-photo" src={photo} alt='Chess pieces'></img>
                <div className='hobby-desc'>
                    <h3 className='hobby-header'>Chess</h3>
                    My father first introduced me to chess when I was eight years old. To this day, 
                    the game captures my attention and I am amazed at how the principles I’ve observed from 
                    it can be applied to everyday life. The complexities of such a seemingly simple game provide 
                    for a challenging, yet enjoyable, pastime. The game of chess is something that I will continue
                    to enjoy and desire to improve in throughout my lifetime.
                </div>
            </div>
           
        </div>
    )
}
