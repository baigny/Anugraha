import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css'
import {Jumbotron, Grid, Button, Col} from 'react-bootstrap';
import ContentLoader from "react-content-loader";

import HomePageCarousel from './HomePageCarousel.jsx';
import HomePageCarousel2 from './HomePageCarousel2.jsx';

class Home extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      loadFb: false
    };
  }

  componentDidMount(){
    setTimeout(function(){
      this.renderFbComponent();
    }.bind(this), 3000);
  }

  renderFbComponent = () => {
    setTimeout(function(){window.FB.XFBML.parse()}, 1000);
    this.setState({
      loadFb: true
    })
  }

  CustomContentLoader = () => (
    <ContentLoader className="content-placeholder"
      height={560}
      width={260}
      speed={1}
      primaryColor="#f3f3f3"
      secondaryColor="#ecebeb"
    >
      <circle cx="30" cy="30" r="30" />
      <rect x="70" y="15" rx="4" ry="4" width="117" height="6" /> 
      <rect x="70" y="35" rx="3" ry="3" width="85" height="6" /> 
      <rect x="0" y="80" rx="3" ry="3" width="350" height="6" /> 
      <rect x="0" y="100" rx="3" ry="3" width="380" height="6" /> 
      <rect x="0" y="120" rx="3" ry="3" width="221" height="6" /> 
      <rect x="0" y="140" rx="3" ry="3" width="201" height="6" /> 
      <rect x="0" y="160" rx="3" ry="3" width="240" height="6" /> 
      <rect x="0" y="180" rx="3" ry="3" width="380" height="6" /> 
      <rect x="0" y="200" rx="3" ry="3" width="201" height="6" /> 
      <rect x="0" y="220" rx="3" ry="3" width="350" height="6" /> 
      <rect x="0" y="240" rx="3" ry="3" width="380" height="6" /> 
      <rect x="0" y="260" rx="3" ry="3" width="201" height="6" /> 
      <rect x="0" y="280" rx="3" ry="3" width="350" height="6" /> 
      <rect x="0" y="300" rx="3" ry="3" width="350" height="6" /> 
      <rect x="0" y="320" rx="3" ry="3" width="350" height="6" /> 
      <rect x="0" y="340" rx="3" ry="3" width="380" height="6" /> 
      <rect x="0" y="360" rx="3" ry="3" width="201" height="6" /> 
      <rect x="0" y="380" rx="3" ry="3" width="350" height="6" />
    </ContentLoader>
  )
  
  

  render() {
    return (
        <div>
          
          <div className="carousel-width-overflow">
            {/* <HomePageCarousel/> */}
            {/* <HomePageCarousel2/> */}
            {0 ?
              <HomePageCarousel/>
            :
              <HomePageCarousel2/>
            }
          </div>
                  
          <div>  
            <Grid className="overflow-jumbotron">
                
                <Grid>
                <Col xs={12} md={8}>
                  <Jumbotron>
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
                  </Jumbotron>             
                </Col>
                <Col xs={12} md={4}>
                  {this.state.loadFb ? 
                    <div className="fb-page" 
                      data-href="https://www.facebook.com/anugraha.institutions" data-tabs="timeline" 
                      data-width="420" data-height="590" 
                      data-small-header="true" data-adapt-container-width="true" data-hide-cover="true" data-show-facepile="false">
                      <blockquote cite="https://www.facebook.com/anugraha.institutions" className="fb-xfbml-parse-ignore">
                        <a href="https://www.facebook.com/anugraha.institutions">Anugraha Institutions Kalladka</a>
                      </blockquote>
                    </div>
                    :
                    this.CustomContentLoader()
                  }
                </Col>
                  
                </Grid>
              
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
