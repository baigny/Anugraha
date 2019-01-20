import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import {redA400} from 'material-ui/styles/colors';

import '../styles/about.css'
import HorizontalLinearStepper from './HorizontalLinearStepper.jsx'
//import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
//import AppBar from 'material-ui/AppBar';

class News extends Component {
  render() {
    return (
        <MuiThemeProvider muiTheme={getMuiTheme({palette: {
            textColor: redA400,
          },})}>
            {/* <div className="home-pararaph">
                This is About page
                
            <Link to="/">
                <button> CLick Me to go to home </button>
            </Link> */}
            <HorizontalLinearStepper/>
        </MuiThemeProvider>
    );
  }
}

export default News;
  