import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/courses.css'

import { Button } from 'react-bootstrap'
//import CircularJSON from 'circular-json'
//import CommonCart from './CommonCart.jsx';

class Courses extends Component {
    
  constructor(props){
    super(props)
        this.state = {
          value: 0
        }
      }

      
      incrementVal = () => {

        this.setState({
          value: this.state.value + 1
        })
        
        
      }

  render() {
    return (
        <div>
            <Button onClick={this.incrementVal}> Evaluate </Button>
            <div className="home-pararaph">
                {this.state.value}
            </div>
            <Link to='/'>
            HOME
            </Link>


        </div>
    );
  }
}

export default Courses;
