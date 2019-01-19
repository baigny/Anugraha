import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {redA400} from 'material-ui/styles/colors';

import '../styles/about.css'
import HorizontalLinearStepper from './HorizontalLinearStepper.jsx'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';

//import CommonCart from './CommonCart.jsx';

class About extends Component {
  render() {
    return (
        <MuiThemeProvider muiTheme={getMuiTheme({palette: {
            textColor: redA400,
          },})}>
            {/* <div className="home-pararaph">
                This is About page
                
            <CommonCart/>
                <p>You’ll need a React web app to add react-router.If you need to create one, the easiest way 
                    to get started is with a popular tool called Create React App.First install create-react-app, 
                    if you don’t already have it, and then make a new project with it.</p>
            </div>
            <Link to="/">
                <button> CLick Me to go to home </button>
            </Link> */}
            <HorizontalLinearStepper/>
        </MuiThemeProvider>
    );
  }
}

export default About;
  