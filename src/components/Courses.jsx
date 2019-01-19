import React, { Component } from 'react';

import { Button, Card, CardBody, CardImage, CardTitle, CardText, Col, Row, Container, MDBIcon, MDBBtn } from 'mdbreact';


import '../styles/courses.css'



export default class Courses extends Component {
  render() {
    return (
      <div> 
        <Container fluid className=" text-md-left">
          <Row>
            <Col md="3">
               <Card style={{ "width": "100%", "margin":"10px" }}>
                 <CardImage
                   className="img-fluid"
                   src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
                  />
                  <CardBody>
                      <CardTitle>Card title</CardTitle>
                      <CardText>
                        <p style={{"margin":"10px","font-size":"1.6em"}}>
                           Some quick example text to build on the card title and make
                           up the bulk of the card&apos;s content.
                        </p>
                      </CardText>
                      <MDBBtn outline  style={{"marginRight":"10px","borderRadius":"50px","font-weight":"bold", "font-size":"1.5em"}}>
                         
                         <span className="font-weight-bold">Apply</span>
                      </MDBBtn>
                  </CardBody>
               </Card>
            </Col>
            <Col md="3">
               <Card style={{ "width": "100%", "margin":"10px" }}>
                 <CardImage
                   className="img-fluid"
                   src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
                  />
                  <CardBody>
                      <CardTitle>Card title</CardTitle>
                      <CardText>
                        <p style={{"margin":"10px","font-size":"1.6em"}}>
                           Some quick example text to build on the card title and make
                           up the bulk of the card&apos;s content.
                        </p>
                      </CardText>
                      <MDBBtn outline  style={{"marginRight":"10px","borderRadius":"50px","font-weight":"bold", "font-size":"1.5em"}}>
                         
                         <span className="font-weight-bold">Apply</span>
                      </MDBBtn>
                  </CardBody>
               </Card>
            </Col>
            <Col md="3">
               <Card style={{ "width": "100%", "margin":"10px" }}>
                 <CardImage
                   className="img-fluid"
                   src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
                  />
                  <CardBody>
                      <CardTitle>Card title</CardTitle>
                      <CardText>
                        <p style={{"margin":"10px","font-size":"1.6em"}}>
                           Some quick example text to build on the card title and make
                           up the bulk of the card&apos;s content.
                        </p>
                      </CardText>
                      <MDBBtn outline  style={{"marginRight":"10px","borderRadius":"50px","font-weight":"bold", "font-size":"1.5em"}}>
                        
                         <span className="font-weight-bold">Apply</span>
                      </MDBBtn>
                  </CardBody>
               </Card>
            </Col>
            <Col md="3">
               <Card style={{ "width": "100%", "margin":"10px" }}>
                 <CardImage
                   className="img-fluid"
                   src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
                  />
                  <CardBody>
                      <CardTitle>Card title</CardTitle>
                      <CardText>
                        <p style={{"margin":"10px","font-size":"1.6em"}}>
                           Some quick example text to build on the card title and make
                           up the bulk of the card&apos;s content.
                        </p>
                      </CardText>
                      <MDBBtn outline  style={{"marginRight":"10px","borderRadius":"50px","font-weight":"bold", "font-size":"1.5em"}}>
                         
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

