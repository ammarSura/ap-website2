import React from "react";
import "../App.css";
import { Container, Row, Col } from "react-bootstrap";



export default function EditBookingCardComp() {

    

   
    return (
        <Container fluid className="removePadding">
           
            <Row>
                <Col lg={12} sm={12} xs={12}>
                    <h3>View / Change Booking</h3>
                    <p>
                        You can change or cancel your booking, add services like snacks, baggage or seat and print your itinerary.
                    </p>
                </Col>
            </Row>

            <Row>
                <Col lg={6} sm={6} xs={12}>
                    <input text="text" id="pnr" placeholder="PNR"/>
                </Col>

                <Col lg={6} sm={6} xs={12}>
                    <input text="text" id="email/lastname" placeholder="Email/Lastname"/>
                </Col>
            </Row>

            <Row>
                <Col lg={6} sm={6} xs={6}>
                    <button>Email Itinerary</button>
                </Col>
                <Col lg={6} sm={6} xs={6}>
                    <button>Get Itinerary</button>
                </Col>
                
            </Row>
        </Container>
    );

    
  
  }


