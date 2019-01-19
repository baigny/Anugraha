import React from 'react';

import { Col, Container, Row, Footer } from "mdbreact";
import { MDBIcon } from "mdbreact";

class FooterPage extends React.Component {
render() {
return (
<Footer className="page-footer unique-color-dark " style={{"width":"100%","position":"relative","bottom":"0"}} >
  <Container fluid className=" text-md-left">
    <Row>
      
      <Col xs="12" sm ="4" md="4">
    
          <h6 className="text-uppercase font-weight-bold ">Products</h6>
          <hr style={{"width" : "80px","position":"relative", "right": "43%"}} />
          <p>
            <a href="#!">MDBootstrap</a>
          </p>
          <p>
            <a href="#!">MDWordPress</a>
          </p>
          <p>
            <a href="#!">BrandFlow</a>
          </p>
          <p>
            <a href="#!">Bootstrap Angular</a>
          </p>
      </Col>
      <Col xs="12" sm ="4" md="4">
    
          <h6 className="text-uppercase font-weight-bold">Useful links</h6>
           <hr className="" style={{"width" : "80px","position":"relative", "right": "41%"}} />
          <p>
            <a href="#!">Your Account</a>
          </p>
          <p>
            <a href="#!">Become an Affiliate</a>
          </p>
          <p>
            <a href="#!">Shipping Rates</a>
          </p>
          <p>
            <a href="#!">Help</a>
          </p>
      </Col>
      <Col xs="12" sm ="4" md="4">
   
          <h6 className="text-uppercase font-weight-bold">Contact</h6>
          <hr style={{"width" : "80px","position":"relative", "right": "43%"}} />
          <p >
            <MDBIcon icon="address-book" className="amber-text pr-3" style={{"marginRight":".5em"}}/> Anugraha Women's College, Kalladka</p>
          <p>
            <MDBIcon icon="at" className="red-text pr-3" style={{"marginRight":".5em"}}/>  info@example.com</p>
          <p>
           <MDBIcon icon="mobile"  className="cyan-text pr-3" style={{"marginRight":".5em"}}/>  + 01 234 567 88</p>
          <p>
            <MDBIcon icon="mobile"  className=" pr-3" style={{"marginRight":".5em","color":"red"}}/> + 01 234 567 89</p>
      </Col>
      

    </Row>
  </Container>
  <div className="footer-copyright text-center py-3">
    <Container fluid>
      &copy; {new Date().getFullYear()} Copyright:{" "}
      <a href="https://www.MDBootstrap.com"> Anugraha Women's College </a>
    </Container>

  </div>
</Footer>
);
}
}

export default FooterPage;