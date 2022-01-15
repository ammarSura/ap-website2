
import React, { useState, useEffect } from "react";
import "../App.css";
import { Container, Row, Col } from "react-bootstrap";



export default function HomeSearchPassComp(props) {

   

    if (props.overlay) {
      document.addEventListener("click", (evt) => {
        let targetElement = evt.target; // clicked element
        if (!(targetElement.id === "allowed" || targetElement.id === "passengers")) {
          props.setOverlay(false);
        } 
    
    });

      return (
        <div style={{position: "relative"}}>
        <div className="square">
        </div>
        <div className="home-search-select2" id="allowed">
           
            <Container id="allowed" style={{paddingTop: "0.5em", marginLeft: "0.5em"}}>
                <Row>
                    <Col sm={5} xs={5}id="allowed" className="home-search-pass-pads">
                        Adults
                    </Col>

                    <Col sm={2} xs={2}id="allowed"className="home-search-pass-pads">
                        <button className="home-search-pass-btn"id="allowed" onClick={()=>{
                            if (props.adults > 0) {
                                props.setAdults(props.adults - 1)
                            }}}
                            >-</button>
                    </Col>
                    <Col sm={2} xs={2}id="allowed" className="home-search-pass-pads">
                        <div className="home-search-pass-nums ">
                        {props.adults}
                        </div>
                        
                    </Col>
                    <Col sm={2} xs={2}id="allowed"className="home-search-pass-pads">
                        < button className="home-search-pass-btn"id="allowed"onClick={()=>props.setAdults(props.adults + 1)}>+</button>
                    </Col>
                    
                </Row>

                <Row style={{marginTop: "0.5em", marginBottom: "0.5em"}}>
                <Col sm={5} xs={5}id="allowed" className="home-search-pass-pads">
                        Children
                    </Col >

                    <Col sm={2} xs={2}id="allowed" className="home-search-pass-pads">
                        <button className="home-search-pass-btn"id="allowed"onClick={()=>{
                            if (props.children > 0) {
                                props.setChildren(props.children - 1)
                            }}}
                            >-</button>
                    </Col>
                    <Col id="allowed"sm={2} xs={2} className="home-search-pass-pads">
                        <div className="home-search-pass-nums">
                            {props.children}
                        </div>
                        
                    </Col>
                    <Col id="allowed"sm={2}xs={2} className="home-search-pass-pads">
                        <button className="home-search-pass-btn"id="allowed"onClick={()=>props.setChildren(props.children + 1)}>+</button>
                    </Col>
                </Row>
            </Container>
        </div>
        </div>

      );
    } else {
      return (null);
    }
 
   

    
  
  }


