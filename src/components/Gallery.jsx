import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Jumbotron, Grid, Button} from 'react-bootstrap';

import '../styles/home.css'



export default class Gallery extends Component {
  render() {
    return (
      <div> 
         <Grid>
            <Jumbotron>
                <h2> Welcome to Anugraha Women's College</h2>
                <p>GAllery</p>
            </Jumbotron>    
          </Grid>
          <Link to="/about">
               <Button bsStyle="primary" >About</Button>
          </Link>
      </div>
    );
  }
}


