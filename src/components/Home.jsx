import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import '../styles/home.css'

//import { Button } from 'react-bootstrap'
//import CommonCart from './CommonCart.jsx';
import HomePageCarousel from './HomePageCarousel.jsx';

class Home extends Component {
  render() {
    const divStyle = {
        backgroundColor: '#e4e2e2',
        borderBottom: '1px solid black',
        height: 100,
      };
    return (
        <div>
            {/* <div className="home-pararaph">
                Hello Nabil!!!!!!
                <p>How are you today?</p>
            </div> */}

            <div style={divStyle}></div>
            
            <HomePageCarousel/>

            
        </div>
    );
  }
}

export default Home;
