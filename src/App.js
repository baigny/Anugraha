import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Courses from './components/Courses.jsx';
import Gallery from './components/Gallery.jsx';
import News from './components/News.jsx';
import Blog from './components/Blog.jsx';
import Contact from './components/Contact.jsx';

import Navbar from './components/PrimaryNavbar.jsx';
import Footer from './components/FooterNavbar.jsx';

class App extends Component {
  render() {
    return (

      <Router>
        <div>
          <Navbar/>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/courses" component={Courses}/>
          <Route path="/gallery" component={Gallery}/>
          <Route path="/news" component={News}/>
          <Route path="/blog" component={Blog}/>
          <Route path="/contact" component={Contact}/>
          <Footer/>
        </div>
      </Router>

    );
  }
}

export default App;
