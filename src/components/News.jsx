import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Jumbotron, Grid, Button} from 'react-bootstrap';




export default class Home extends Component {
  render() {
    return (

      <div> 
         <Grid>
            <Jumbotron>
                <h2> Welcome to Anugraha Women's College</h2>
                <p> NEWS</p>
            </Jumbotron>    
          </Grid>
          <Link to="/about">
               <Button bsStyle="primary" >About</Button>
          </Link>
      </div>
     
    );
  }
}


