import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css'
import {Jumbotron, Grid, Button, Col} from 'react-bootstrap';

import HomePageCarousel from './HomePageCarousel.jsx';
import HomePageCarousel2 from './HomePageCarousel2.jsx';

class Home extends Component {
  render() {
    return (
        <div>
          
          <div className="container carousel-width-overflow">
            {/* <HomePageCarousel/> */}
            {/* <HomePageCarousel2/> */}
            {1 ?
              <HomePageCarousel/>
            :
              <HomePageCarousel2/>
            }
          </div>
                  
          <div>  
            <Grid className="overflow-jumbotron">
                <Jumbotron>
                <Grid>
                <Col xs={12} md={8}>
                  {/* <h2> Welcome to Anugraha Women's College</h2> */}
                  <h2>Greetings!</h2>

                  <p>
                    In the name of Allah, The Most Gracious , The Most Merciful
                  </p>
                  
                  <p>
                    It is a fact that the success and development of the society principally depends on value based education by learning and practice. 
                    Reasonably adequate institutions although available in urban areas, rural areas are devoid of such amenities. 
                    In view of this, a group of well responsible individuals from Bantwal taluk area have formed ANUGRAHA EDUCATIONAL TRUST, Kalladka to meet the requirement.
                  </p>
                  <p>
                    The Trust has, therefore decided to run suitable insttitutions in Kalladka- a central place to serve many nearby localities where Muslim population about 20% viz: Kalladka, Panemangalore, Bantwal, B.C Road, Farangipete, Melkar, Manchi, Salettoor, Vittal, Kabaka, Mani etc. Besides full-fledged education to girls and women, aim is to serve rural areas where poor families cannot afford higher education. ...
                  </p>


                  <Link to="/about">
                    <Button bsStyle="primary" >About</Button>
                  </Link>
                </Col>
                <Col xs={12} md={4}>
                  <div className="fb-page" 
                    data-href="https://www.facebook.com/anugraha.institutions" data-tabs="timeline" 
                    data-width="360" data-height="590" 
                    data-small-header="true" data-adapt-container-width="true" data-hide-cover="true" data-show-facepile="false">
                    <blockquote cite="https://www.facebook.com/anugraha.institutions" className="fb-xfbml-parse-ignore">
                      <a href="https://www.facebook.com/anugraha.institutions">Anugraha Institutions Kalladka</a>
                    </blockquote>
                  </div>
                </Col>
                  
                </Grid>
                </Jumbotron>             
              
						</Grid>
          </div>
          <section className="home-admissions home-admissions-bg bg-opacity-black">
            <div className="container-fluid pa0">
                  <div className="col-lg-6 col-md-6">
                    <div className="admissions-image-holder">
                      <div className="section-title-2 text-center">
                      <h2 className="text-white">Admissions 2019</h2>
                      <div className="title-line"></div>
                    <p className="text-white">Start on Your Path to Better Future.</p>
                  </div>
                  </div>
                </div>
                
                      <div className="col-md-6 pa0">
                          <div className="admissions-text-box">
                            <div className="feature7 mb-40">
                            <Link to="/courses">
                              <div className="feature7-icon">
                                <span aria-hidden="true">
                                <i className="fa fa-graduation-cap"></i></span>
                              </div>
                              <div className="feature7-info">
                                <h4 className="text-white">Courses &amp; Eligibility</h4>
                                <p>The Institution is Dedicated to Promote an Effective Learning Environment That Encourages 
                                Excellence.</p>
                              </div>
                              </Link>
                            </div>
                            
                            <div className="feature7 mb-40">
                            <Link to="/gallery">
                              <div className="feature7-icon">
                                <span aria-hidden="true"><i className="fa fa-envelope-o"></i></span>
                              </div>
                              <div className="feature7-info">
                                <h4 className="text-white">Facilities</h4>
                                <p>Download Application Forms of Engineering, M.Tech, MBA, Diploma and Hostel</p>
                              </div>
                              </Link>
                            </div>
                            <div className="feature7 mb-40">
                            <Link to="/about">
                              <div className="feature7-icon">
                                <span aria-hidden="true"><i className="fa fa-book"></i></span>
                              </div>
                              <div className="feature7-info">
                                <h4 className="text-white">Prospectus</h4>
                                <p>PACE is one of the Fastest Growing Institutions in Mangalore</p>
                              </div>
                              </Link>
                            </div>
                          </div>
                    
                  </div>
              </div>
          </section>
          
        </div>
    );
  }
}

export default Home;
