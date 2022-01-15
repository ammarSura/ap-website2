import React from "react";
import "../App.css";
import { Container, Row, Col } from "react-bootstrap";



export default function HomeCheckinCardComp() {

    

   
    return (
        <Container fluid className="home-card-container">
           
            <Row>
                <Col lg={12} sm={12} xs={12}>
                    <h3><b>Mandatory web check-in</b></h3>
                    <p>
                        It is free 48 hr to 60 min before domestic and 24 hr to 75 min before international flight. Facilitation fee @ ₹200 (domestic only) for airport check-in. Check state-wise regulations
                    </p>
                </Col>
            </Row>

            <Row>
                <Col lg={6} sm={6} xs={12}>
                    <input className="home-search-input" text="text" id="pnr" placeholder="PNR"/>
                </Col>

                <Col lg={6} sm={6} xs={12}>
                    <input className="home-search-input" text="text" id="email/lastname" placeholder="Email/Lastname"/>
                </Col>
            </Row>

            <Row>
                <Col lg={6} sm={6} xs={12}>
                <button className="home-search-btn"onClick={() => window.location.href="/web-checkin"} >See Travel Mandates</button>
                </Col>
                <Col lg={6} sm={6} xs={12} >
                    <button className="home-search-btn"onClick={() => window.location.href="/web-checkin"} >Check-in</button>
                </Col>
                
            </Row>
        </Container>
    );

    
  
  }


