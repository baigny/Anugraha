import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Courses from './components/Courses.jsx';

class App extends Component {
  render() {
    return (

      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/courses" component={Courses} />
        </div>
      </Router>

    );
  }
}

export default App;
