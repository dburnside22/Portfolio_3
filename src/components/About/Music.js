import React from 'react';
import photo from './../../../src/guitar.jpg';


export default function Music() {
    return (
        <div className="light-gray-background">
            <div className="hobby-div">
                <div className="hobby-desc">
                    <h3 className='hobby-header'>Music</h3>
                    I have the great pleasure of being from the town of Athens, Georgia 
                    and grew up enjoying the unique music scene that it provides. I have
                    played a variety of instruments for over fifteen years and music is truly 
                    my first love. Throughout my musical career, I’ve had many amazing collaboration 
                    experiences, which I accredit to influencing and forming my musical style, as well as 
                    helping me to become a better player.
                </div>
                <img className="hobby-photo" src={photo} alt='Man playing a guitar'></img>
            </div>
        </div>
    )
}
