import React, { Component } from 'react';
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBInput, MDBContainer } from "mdbreact";

import '../styles/contact.css'



export default class Contact extends Component {
  render() {
    return (
     
        <section className="contact-section my-5">
          <MDBContainer >
            <MDBRow>
              <MDBCol lg="7">
                <MDBCard className="mrbt">
                  <MDBCardBody className="form">
                          
                        <MDBRow>
                          <MDBCol md="12">
                            <div>
                              <h2 className="para"><MDBIcon icon="envelope" className=" margin-rights" />
                              Write to us:</h2>
                            </div>
                          </MDBCol>
                        </MDBRow>
                        <MDBRow>
                          <MDBCol md="6" className="paddingLeft" style={{"paddingRight":"2em"}}>
                            <div className="md-form mb-0">
                              <MDBInput
                                type="text"
                                id="form-contact-name"
                                label="Your name"
                               
                              />
                            </div>
                          </MDBCol>
                          <MDBCol md="6" className="paddingLeft" style={{"paddingRight":"2em"}}>
                            <div className="md-form mb-5 ">
                              <MDBInput
                                type="text"
                                id="form-contact-email"
                                label="Your email"
                                
                              />
                            </div>
                          </MDBCol>
                        </MDBRow>
                        <MDBRow>
                          <MDBCol md="6" className="paddingLeft" style={{"paddingRight":"2em"}}>
                            <div className="md-form mb-0">
                              <MDBInput
                                type="text"
                                id="form-contact-phone"
                                label="Your phone"
                              />
                            </div>
                          </MDBCol>
                          <MDBCol md="6"className="paddingLeft" style={{"paddingRight":"2em"}}>
                            <div className="md-form mb-0">
                              <MDBInput
                                type="text"
                                id="form-contact-company"
                                label="Your company"
                              />
                            </div>
                          </MDBCol>
                        </MDBRow>
                        <MDBRow>
                          <MDBCol md="12" className="paddingLeft" style={{"paddingRight":"2em"}}>
                            <div className="md-form mb-0">
                              <MDBInput
                                type="textarea"
                                id="form-contact-message"
                                label="Your message"
                              />
                              <MDBBtn rounded color="blue">
                                <MDBIcon icon="paper-plane" />
                              </MDBBtn>
                            </div>
                          </MDBCol>
                        </MDBRow>
                  </MDBCardBody>
                </MDBCard> 
              </MDBCol>
              <MDBCol lg="5">
                <MDBCard>
                  <MDBCardBody   className=" indigo darken-4 contact h-100 mrbt white-text">
                
                  <h1 className="text-center font-weight-bold">Contact Information</h1>
                  <hr className="hr-light text-center hraddress" />
                  <h2 className="text-center"> PUC Department</h2>          
                         
                        <ul className=" list-unstyled ">
                          <li  >
                             <p className="" > 
                              <MDBIcon icon="phone" className="margin-rights  "  />
                              +91 8255275500
                              </p>
                          </li>
                          <li>
                            <p>
                              <MDBIcon icon="envelope"  className="margin-rights"  />
                              anugraha.wpuc@gmail.com 
                            </p>
                          </li>
                        </ul>      
                  <h2 className="my-4 pb-2 text-center font-weight-bold">Degree Department</h2>
                        <ul className="text-lg-left list-unstyled ml-4">
                          <li>
                           <p>
                            <MDBIcon icon="phone" className="margin-rights" />+91 8255275500
                           </p>
                          </li>
                          <li>
                            <p>
                              <MDBIcon icon="envelope" className="margin-rights" />
                              anugraha.wpuc@gmail.com 
                            </p>
                          </li>
                        </ul>
                          
                          <MDBRow>
                            <MDBCol md="12">
                         <h3 className="text-center font-weight-bold">Address Info</h3>
                         <hr className="hr-light text-center hraddress" />
                            </MDBCol>
                             <MDBCol md="8">
                              <address>
                                Anugraha Women's College,<br/>
                                Pattekodi, Golthamajal,<br/>
                                Kalladka Post, <br/>
                                Bantwal Taluq, P.O 574222.<br/>
                              </address>
                            </MDBCol>
                            <MDBCol md="4">   
                        <ul className="list-inline list-unstyled social float-right ">
                         <li className="list-inline-item">
                            <a href="#!" className=" fa-lg w-ic">
                            <MDBIcon  icon="twitter" />
                            </a>
                          </li>
                          <li className="list-inline-item">
                              <a href="#!" className=" fa-lg w-ic">
                                <MDBIcon icon="facebook" />
                              </a>
                          </li>
                          <li className="list-inline-item">
                               <a href="#!" className=" fa-lg w-ic">
                                  <MDBIcon icon="instagram" />
                               </a>
                          </li>
                          <li className="list-inline-item">
                             <a href="#!" className="fa-lg w-ic">
                                <MDBIcon icon="linkedin-in" />
                             </a>
                          </li>
                        </ul>
          </MDBCol>
          </MDBRow>  
                </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
                   
                   
                     
                   
          
            <MDBRow>
              <MDBCol lg="12">                    
                <div
                      id="map-container"
                      className="rounded z-depth-1-half map-container mrbt"
                      style={{ height: "400px" }}
                >
                <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.0494258304548!2d75.07174561418509!3d12.8400826909422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba4a40f48a87bb3%3A0x93ed297f0496cf27!2sAnugraha+Institutions!5e0!3m2!1sen!2sin!4v1548073307235"
                        title="This is a unique title"
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        style={{ border: 0 }}
                />
                </div>         
                </MDBCol>
            </MDBRow>
         </MDBContainer>
        </section>
      
    );
  }
}


 