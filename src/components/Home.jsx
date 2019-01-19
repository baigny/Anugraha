import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css'
import {Jumbotron, Grid,  Button} from 'react-bootstrap';

import HomePageCarousel from './HomePageCarousel.jsx';

class Home extends Component {
  render() {
    return (
        <div>
			
            <HomePageCarousel/>
            <Jumbotron>
					<h2> Welcome to Anugraha Women's College</h2>
					<p> College Education</p>
					<Link to="/about">
					  <Button bsStyle="primary" >About</Button>
				   </Link>
			</Jumbotron>          
            <Grid>

				<Jumbotron>
					<h2> Welcome to Anugraha Women's College</h2>
					<p> College Education</p>
					<Link to="/about">
					  <Button bsStyle="primary" >About</Button>
				   </Link>
				</Jumbotron>             
			</Grid>
        </div>
    );
  }
}

export default Home;
