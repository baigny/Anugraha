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
          originalMetricGrouping: {
            expressions: [{
                domainExpression: '(.*)',
                agentExpression: '(.*)',
                metricExpression: '(.*)'
              },
              {
                domainExpression: '(.*)',
                agentExpression: '(.*)',
                metricExpression: '(.*)'
              },
              {
                domainExpression: '(.*)',
                agentExpression: '(.*)',
                metricExpression: '(.*)'
              }],
              managementModuleId: '',
              metricGroupingName: '',
              active: true,
              editable: true,
              useManagementModuleAgentExpression: false,
              description: ''
            },
          metricGrouping: {
            expressions: [{
                domainExpression: '(.*)',
                agentExpression: '(.*)',
                metricExpression: '(.*)'
              },
              {
                domainExpression: '(.*)',
                agentExpression: '(.*)',
                metricExpression: '(.*)'
              },
              {
                domainExpression: '(.*)',
                agentExpression: '(.*)',
                metricExpression: '(.*)'
              }],
            managementModuleId: '',
            metricGroupingName: '',
            active: true,
            editable: true,
            useManagementModuleAgentExpression: false,
            description: ''
          },
          value: 0
        }
      }

      
      evaluateCircString = () => {

        this.setState({
          value: (JSON.stringify(this.state.originalMetricGrouping) === JSON.stringify(this.state.metricGrouping)) ? 1 : 2
        })
        
        
      }

  render() {
    return (
        <div>
            <Button onClick={this.evaluateCircString}> Evaluate </Button>
            <div className="home-pararaph">
                {this.state.value}
            </div>
            <Link to='/'>
            home
            </Link>


        </div>
    );
  }
}

export default Courses;
