import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Jumbotron, Grid,  Button} from 'react-bootstrap';
import '../styles/about.css'



export default class About extends Component {
  render() {
    return (
    	<div>
    	  <Grid>
            <Jumbotron>
                <h2> Welcome to Anugraha Women's College</h2>
                <p> Lorem imspumLorem imspumLorem imspumLorem imspumLorem imspumLorem imspumLorem imspumLorem imspumLorem imspumLorem imspumLorem imspum
	          Lorem imspumLorem imspumLorem imspumLorem imspumLorem imspumLorem imspumLorem imspumLorem imspumLorem imspumLorem imspumLorem imspumLorem imspum
	          Lorem imspumLorem imspumLorem imspumLorem imspumLorem imspumLorem imspumLorem imspumLorem imspum
	          Lorem imspumLorem imspumLorem imspumLorem imspumLorem imspumLorem imspumLorem imspumLorem imspumLorem imspum
	          Lorem imspum</p>
                <Link to="/">
                  <Button bsStyle="primary" >Home</Button>
               </Link>
            </Jumbotron>             
          </Grid>	      
  	  	</div>
    );
  }
}


