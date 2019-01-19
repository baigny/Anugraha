import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Button } from 'react-bootstrap'

class CommonCart extends Component {
  render() {
    return (
        <div>
            <h1>Hey, I am a common cart here, wherever you will call me i will appear </h1>
            <Link to="/courses">
                <Button> CLick Me </Button>
            </Link>
        </div>
    );
  }
}

export default CommonCart;