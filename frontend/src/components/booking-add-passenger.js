import React, { useState } from "react";
import "../App.css";
import { Container, Row, Col } from "react-bootstrap";

export default function BookingAddPassengerComp(props) {

    
    return (
        <div>
            <Container fluid className="booking-add-passenger">
                <Row className="booking-pass-row" >
                    <Col sm={12} xs={12} onClick={() => props.setWhichPassenger(props.number)} className={props.whichPassenger === props.number ? "booking-card-picker-purp": "booking-card-picker"} >
                        <p style={{height: "0.75em"}}>
                            Add Passenger {props.number}
                        </p>
                    </Col>
                </Row>

                {props.whichPassenger === props.number ?
                <Row className="booking-pass-row">
                    <Col sm={12} xs={12} className="booking-card-high">
                        <Row>
                        
                            <Col sm={4} xs={4}>
                                <input type="radio" name="title" id="Mr"/>
                                <label htmlFor="title">Mr.</label>
                            </Col>

                            <Col sm={4} xs={4}>
                                <input type="radio" name="title" id="Ms"/>
                                <label htmlFor="title">Ms.</label>
                            </Col>

                            <Col sm={4} xs={4}>
                                <input type="radio" name="title" id="Mrs"/>
                                <label htmlFor="title">Mrs.</label>
                            </Col>
                        </Row>

                        <Row className="booking-pass-row">
                            <Col sm={6} xs={12}>
                                <input type="text" className="home-search-input"placeholder="First Name & Middle Name (if any)" id="first-name"/>
                            </Col>

                            <Col sm={6} xs={12}>
                                <input type="text" className="home-search-input"placeholder="Last Name" id="last-name"/>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                : 

                null
                }

                
            </Container>
        </div>
    );
}
                
                