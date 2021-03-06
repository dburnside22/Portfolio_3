import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom'

import './index.css';
import App from './App';
import Landing from './../src/components/Landing/Landing.js';
import About from './../src/components/About/About.js';
import Projects from './../src/components/Projects/Projects.js';
import Contact from './../src/components/Contact/Contact.js';


import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';

const routing = (
    <Router>
    <div>
      <Route path="/" component={App} />
      <Route exact path="/" component={Landing} />
      <Route path="/about" component={About} />
      <Route path='/projects' component={Projects} />
      <Route path='/contact' component={Contact} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
