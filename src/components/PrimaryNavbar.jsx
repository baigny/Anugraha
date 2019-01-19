import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

import '../styles/primaryNavbar.css'



export default class PrimaryNavbar extends Component {
  render() {
    return (
      <div > 
          <Navbar inverse collapseOnSelect className="xyz">
            <Navbar.Header>
              <Navbar.Brand>
                <Link to = "/">
                  Anugraha
                </Link>
              </Navbar.Brand>
              <Navbar.Toggle/>
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight>
                <NavItem eventKey={1} componentClass={Link} href="/" to="/">
                  HOME
                 </NavItem> 
                 <NavItem eventKey={2} componentClass={Link} href="/about" to="/about">
                 ABOUT
                 </NavItem> 
                 <NavItem eventKey={3} componentClass={Link} href="/courses" to="/courses">
                  COURSES
                 </NavItem> 
                 <NavItem eventKey={4} componentClass={Link} href="/gallery" to="/gallery">
                  GALLERY
                 </NavItem> 
                 <NavItem eventKey={5} componentClass={Link} href="/blog" to="/blog">
                  BLOG
                 </NavItem> 
                 <NavItem eventKey={6} componentClass={Link} href="/news"  to="/news">
                  NEWS
                 </NavItem> 
                 <NavItem eventKey={7} componentClass={Link} href="/contact"  to="/contact">
                  CONTACT
                 </NavItem> 
              </Nav>
            </Navbar.Collapse>
          </Navbar>        
      </div>
    );
  }
}


