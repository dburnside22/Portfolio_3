import React from 'react';
import photo from './../../../src/guitar.jpg';


export default function Music() {
    return (
        <div>
            <h3 className='hobby-header'>Music</h3>
            <div className="hobby-div">
                <p>
                    I have the great pleasure of being from the town of Athens, Georgia 
                    and grew up enjoying the unique music scene that it provides. I have
                    played a variety of instruments for over fifteen years and music is truly 
                    my first love. Throughout my musical career, I’ve had many amazing collaboration 
                    experiences, which I accredit to influencing and forming my musical style, as well as 
                    helping me to become a better player.
                </p>
                <img className="hobby-photo" src={photo} alt='Picture of a man playing a guitar'></img>
            </div>
        </div>
    )
}
