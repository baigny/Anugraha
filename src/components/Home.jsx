import React, { Component } from 'react';
import '../styles/home.css'

import HomePageCarousel from './HomePageCarousel.jsx';

class Home extends Component {
  render() {
    return (
        <div>
            <HomePageCarousel/>
        </div>
    );
  }
}

export default Home;
