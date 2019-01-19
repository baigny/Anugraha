import React, { Component } from 'react';
import '../styles/home.css'
import {Jumbotron, Grid,  Button} from 'react-bootstrap';

import HomePageCarousel from './HomePageCarousel.jsx';

class Home extends Component {
  render() {
    return (
        <div>
			<Grid>
				<Jumbotron>
					<h2> Welcome to Anugraha Women's College</h2>
					<p> College Education</p>
					<Link to="/about">
					  <Button bsStyle="primary" >About</Button>
				   </Link>
				</Jumbotron>             
			</Grid>
            <HomePageCarousel/>
        </div>
    );
  }
}

export default Home;
