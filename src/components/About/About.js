import React, { Component } from 'react'

export class About extends Component {
    render() {
        return (
            <div className='container'>
                <h2>About Me...</h2>
                <p> 
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type
                    specimen book. It has survived not only five centuries, but also the leap into electronic 
                    typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of 
                    Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
                    Aldus PageMaker including versions of Lorem Ipsum.
                </p>

                <h5>Hobbies</h5>
                <p>
                    Music
                    I have the great pleasure of being from the town of Athens, Georgia 
                    and grew up enjoying the unique music scene that it provides. I have
                    played a variety of instruments for over fifteen years and music is truly 
                    my first love. Throughout my musical career, I’ve had many amazing collaboration 
                    experiences, which I accredit to influencing and forming my musical style, as well as 
                    helping me to become a better player.
                </p>
                <p>
                    Chess
                    My father first introduced me to chess when I was eight years old. To this day, 
                    the game captures my attention and I am amazed at how the principles I’ve observed from 
                    it can be applied to everyday life. The complexities of such a seemingly simple game provide 
                    for a challenging, yet enjoyable, pastime. The game of chess is something that I will continue
                    to enjoy and desire to improve in throughout my lifetime.
                </p>
                <p>
                    Gardening
                    Gardening is one of life’s simple pleasures and never fails to remind me that there are 
                    things that I can control and things that I cannot. There is nothing like the feeling of 
                    taking a seed from its humble beginnings, through patience and consistency in care, and 
                    watching it turn into a plant that yields a crop. Gardening is also a great reminder to 
                    slow down and enjoy the beauty around you as you work.
                </p>
            </div>
        )
    }
}

export default About
