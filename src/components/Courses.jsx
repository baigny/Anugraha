import React, { Component } from 'react';

import { Card, CardBody, CardImage, CardTitle, CardText, Col, Row, Container, MDBBtn } from 'mdbreact';


import '../styles/courses.css'



export default class Courses extends Component {
  render() {
    return (
      <div> 
        <Container fluid className=" text-md-left">
          <Row>
            <Col md="3">
               <Card>
                 <CardImage
                   className="img-fluid"
                   src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
                  />
                  <CardBody>
                      <CardTitle>Card title</CardTitle>
                      <CardText>
                           Some quick example text to build on the card title and make
                           up the bulk of the card&apos;s content.
                      </CardText>
                      <MDBBtn outline>
                         
                         <span className="font-weight-bold">Apply</span>
                      </MDBBtn>
                  </CardBody>
               </Card>
            </Col>
            <Col md="3">
               <Card>
                 <CardImage
                   className="img-fluid"
                   src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
                  />
                  <CardBody>
                      <CardTitle>Card title</CardTitle>
                      <CardText>
                           Some quick example text to build on the card title and make
                           up the bulk of the card&apos;s content.
                      </CardText>
                      <MDBBtn outline>
                         
                         <span className="font-weight-bold">Apply</span>
                      </MDBBtn>
                  </CardBody>
               </Card>
            </Col>
            <Col md="3">
               <Card>
                 <CardImage
                   className="img-fluid"
                   src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
                  />
                  <CardBody>
                      <CardTitle>Card title</CardTitle>
                      <CardText>
                           Some quick example text to build on the card title and make
                           up the bulk of the card&apos;s content.
                      </CardText>
                      <MDBBtn outline>
                        
                         <span className="font-weight-bold">Apply</span>
                      </MDBBtn>
                  </CardBody>
               </Card>
            </Col>
            <Col md="3">
               <Card>
                 <CardImage
                   className="img-fluid"
                   src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
                  />
                  <CardBody>
                      <CardTitle>Card title</CardTitle>
                      <CardText>
                           Some quick example text to build on the card title and make
                           up the bulk of the card&apos;s content.
                      </CardText>
                      <MDBBtn outline>
                         
                         <span className="font-weight-bold">Apply</span>
                      </MDBBtn>
                  </CardBody>
               </Card>
            </Col>

          </Row>
        </Container>

      </div>
    );
  }
}

