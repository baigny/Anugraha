import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import { Grid, Row, Col} from 'react-bootstrap';

import '../styles/blog.css'



export default class About extends Component {
  render() {
    return (
      <section className="blog-section">
        <div>
          <Grid>
            <Row>
              <Col md={12}>
                  <h2 className=" blue-text-header text-center">
                    Recent Posts
                  </h2>
                  <p className="text-justify">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit
                    anim id est laborum.
                  </p>
              </Col>
            </Row>
            <Row className="blog-margin">
              <Col md={12} className="blog-margin">
                <div className="blog-card blog-color">
                  <Col lg={5}>
                          <div className="rounded">
                            <img
                              className="img-fluid blog-image"
                              src="https://mdbootstrap.com/img/Photos/Others/img%20(27).jpg"
                              alt=""/>
                            <a href="#!">
                              <div overlay="white-slight" />
                            </a>
                          </div>
                  </Col>
                  <Col lg={7}>
                        <h2 className="">
                          <strong>Title of the news</strong>
                        </h2>
                        <a href="#!" className="green-text">
                          <p>
                          <i className="fa fa-at" aria-hidden="true"></i>
                            Food
                          </p>
                        </a>
                        <p>
                          Nam libero tempore, cum soluta nobis est eligendi optio cumque
                          nihil impedit quo minus id quod maxime placeat facere possimus,
                          omnis voluptas assumenda est, omnis dolor repellendus et aut
                          officiis debitis.
                        </p>
                        <p>
                          by
                          <a href="#!">
                            <strong>Carine Fox</strong>
                          </a>
                          , 19/08/2018
                        </p>
                        <button className="blog-buttons" >
                          Read more
                        </button>
                  </Col> 
                </div>
              </Col>
              <Col md={12} className="blog-margin">
                <div className="blog-card blog-color">
                  <Col lg={7}>
                        <h2 className="">
                          <strong>Title of the news</strong>
                        </h2>
                        <a href="#!" className="green-text">
                          <p>
                          <i className="fa fa-at" aria-hidden="true"></i>
                            Food
                          </p>
                        </a>
                        <p>
                          Nam libero tempore, cum soluta nobis est eligendi optio cumque
                          nihil impedit quo minus id quod maxime placeat facere possimus,
                          omnis voluptas assumenda est, omnis dolor repellendus et aut
                          officiis debitis.
                        </p>
                        <p>
                          by
                          <a href="#!">
                            <strong>Carine Fox</strong>
                          </a>
                          , 19/08/2018
                        </p>
                        <button className="blog-buttons" >
                          Read more
                        </button>
                  </Col> 
                  <Col lg={5}>
                          <div className="rounded">
                            <img
                              className="img-fluid blog-image"
                              src="https://mdbootstrap.com/img/Photos/Others/img%20(27).jpg"
                              alt=""/>
                            <a href="#!">
                              <div overlay="white-slight" />
                            </a>
                          </div>
                    </Col>
                </div>
              </Col>
            </Row>  
            <Row className="blog-margin"> 
              <Col md={12} className="blog-margin">
                <div className="blog-card blog-color">
                  <Col lg={5}>
                          <div className="rounded">
                            <img
                              className="img-fluid blog-image"
                              src="https://mdbootstrap.com/img/Photos/Others/img%20(27).jpg"
                              alt=""/>
                            <a href="#!">
                              <div overlay="white-slight" />
                            </a>
                          </div>
                  </Col>
                  <Col lg={7}>
                        <h2 className="">
                          <strong>Title of the news</strong>
                        </h2>
                        <a href="#!" className="green-text">
                          <p>
                          <i className="fa fa-at" aria-hidden="true"></i>
                            Food
                          </p>
                        </a>
                        <p>
                          Nam libero tempore, cum soluta nobis est eligendi optio cumque
                          nihil impedit quo minus id quod maxime placeat facere possimus,
                          omnis voluptas assumenda est, omnis dolor repellendus et aut
                          officiis debitis.
                        </p>
                        <p>
                          by
                          <a href="#!">
                            <strong>Carine Fox</strong>
                          </a>
                          , 19/08/2018
                        </p>
                        <button className="blog-buttons" >
                          Read more
                        </button>
                    </Col> 
                </div>
              </Col>
              <Col md={12} className="blog-margin">
                <div className="blog-card blog-color">
                  <Col lg={7}>
                        <h2 className="">
                          <strong>Title of the news</strong>
                        </h2>
                        <a href="#!" className="green-text">
                          <p>
                          <i className="fa fa-at" aria-hidden="true"></i>
                            Food
                          </p>
                        </a>
                        <p>
                          Nam libero tempore, cum soluta nobis est eligendi optio cumque
                          nihil impedit quo minus id quod maxime placeat facere possimus,
                          omnis voluptas assumenda est, omnis dolor repellendus et aut
                          officiis debitis.
                        </p>
                        <p>
                          by
                          <a href="#!">
                            <strong>Carine Fox</strong>
                          </a>
                          , 19/08/2018
                        </p>
                        <button className="blog-buttons" >
                          Read more
                        </button>
                  </Col> 
                  <Col lg={5}>
                          <div className="rounded">
                            <img
                              className="img-fluid blog-image"
                              src="https://mdbootstrap.com/img/Photos/Others/img%20(27).jpg"
                              alt=""/>
                            <a href="#!">
                              <div overlay="white-slight" />
                            </a>
                          </div>
                  </Col>
                </div>
              </Col>
            </Row>  
          </Grid> 
        </div>
      </section>

    );
  }
}



