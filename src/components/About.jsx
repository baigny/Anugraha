import React, { Component } from 'react';
import {  MDBRow, MDBCol, MDBIcon ,MDBContainer} from "mdbreact";
import '../styles/about.css'

class About extends Component {

    render() {
        return (
            <section className="my-5">
                <MDBContainer className="mb">
                    <MDBRow>
                        <MDBCol>
                         <h2 className="font-weight-bold text-center my-5">
                                   Anugraha Women's College
                         </h2>
                         <p className="black-text  text-center mx-auto mb-5">
                            It is a fact that the success and development of the society primarily depends on value based education, by learning and practice. 
                            Reasonably adequate institutions although available in urban areas, rural areas are devoid of such amenities. 
                            In view of this, a group of well responsible individuals from Bantwal taluk area have formed Anugraha Educational Trust, Kalladka to meet the requirement.
                         </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                
                <MDBContainer className="mb">          
                    <MDBRow >
                         <MDBCol  md="6"className="mb-lg-0 mb-5">
                                <img
                                src="https://mdbootstrap.com/img/Photos/Others/images/83.jpg"
                                alt=""
                                className="img-fluid rounded z-depth-1"
                                />
                         </MDBCol>
                                          
                         <MDBCol  md="6"className="mb-lg-0 mb-5" >
                             <MDBRow className="mb-3">
                                <MDBCol md="1" size="2">
                                    <MDBIcon icon="bar-chart" size="2x" className="indigo-text" />
                                </MDBCol>
                                <MDBCol md="11" size="10">
                                    <h5 className="font-weight-bold mb-3">Marketing</h5>
                                    <p className="grey-text">
                                        Considering the educational problems of rural areas of Bantwal taluk, particularly minority muslim girls, 
                                        in 2011-12 the trust has commenced Women’s PU College 
                                        at Golthamajal, Kalladka – a central place to serve many nearby localities viz: Kalladka, Panemangalore, Bantwal, BC Road, Farangipete, 
                                        Manchi, Salettoor, Vittla, Kabaka, Mani etc. 
                                    </p>
                                </MDBCol>
                             </MDBRow>
                             <MDBRow className="mb-3">
                                <MDBCol md="1" size="2">
                                     <MDBIcon icon="music" size="2x" className="pink-text" />
                                </MDBCol>
                                <MDBCol md="11" size="10">
                                    <h5 className="font-weight-bold mb-3">Entertainment</h5>
                                    <p className="grey-text">
                                        The trustees and associates have surveyed rural areas of Bantwal taluk to emphasize importance of education among residents 
                                        and enrolled 51 students including drop-outs. 
                                    </p>
                                </MDBCol>
                             </MDBRow>
                             <MDBRow className="mb-3">
                                <MDBCol md="1" size="2">
                                    <MDBIcon icon="smile-o" size="2x" className="blue-text" />
                                </MDBCol>
                                <MDBCol md="11" size="10">
                                    <h5 className="font-weight-bold mb-3">Communication</h5>
                                    <p className="grey-text">
                                        The institution is committed to bring out well responsible citizens with the realization to perform what they learn. 
                                    </p>
                                </MDBCol>
                             </MDBRow>
                         </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <MDBContainer className="mb">
                    <MDBRow>
                        <MDBCol md="6">
                            <MDBRow className="mb-3">
                                <MDBCol md="1" size="2">
                                    <MDBIcon icon="book" size="2x" className="cyan-text" />
                                </MDBCol>
                                <MDBCol md="11" size="10">
                                    <h5 className="font-weight-bold mb-3">Education</h5>
                                    <p className="grey-text">
                                        It provides transport facility and cater students from all adjacent localities.                                         
                                    </p>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className="mb-3">
                                <MDBCol md="1" size="2">
                                    <MDBIcon icon="code" size="2x" className="red-text" />
                                </MDBCol>
                                <MDBCol md="11" size="10">
                                    <h5 className="font-weight-bold mb-3">Technology</h5>
                                    <p className="grey-text">
                                        Besides full-fledged education to girls and women, its objective is to serve rural areas where poor families cannot afford higher education.
                                    </p>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className="mb-3">
                                <MDBCol md="1" size="2">
                                    <MDBIcon icon="money" size="2x" className="deep-purple-text" />
                                </MDBCol>
                                <MDBCol md="11" size="10">
                                    <h5 className="font-weight-bold mb-3">Finance</h5>
                                    <p className="grey-text">
                                        In response to our 1st batch of PU Students, parents, effective Academic year 2013-14, 
                                        commenced “ Anugraha Women’s College” providing B.A. and B.Com courses under Mangalore University. 
                                    </p>
                                </MDBCol>
                            </MDBRow>
                        </MDBCol>
                        <MDBCol md="6">
                            <img
                            src="https://mdbootstrap.com/img/Photos/Others/images/82.jpg"
                            alt=""
                            className="img-fluid rounded z-depth-1"/>
                        </MDBCol>                
                    </MDBRow>
                </MDBContainer>
            </section>
          );
    }
  
}

export default About;