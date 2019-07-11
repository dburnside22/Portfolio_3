import React, { Component } from 'react';
import './Contact.css';
import photo from './../../../src/computer-picture.jpg';

export class Contact extends Component {
    render() {
        return (
            <div className='container'>
                <h1>Contact Me...</h1>
                <h3>Email: <a href='mailto:dburnside22@gmail.com'>dburnside22@gmail.com</a></h3>
                <h3><a href='https://www.linkedin.com/in/daniel-burnside/'>LinkedIn</a></h3>
                <h3><a href='https://github.com/dburnside22'>Github</a></h3>
                <img className='computer-photo' src={photo}></img>
            </div>
        )
    }
}

export default Contact
