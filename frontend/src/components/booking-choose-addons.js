import React, { useState } from "react";
import "../App.css";
import { Container, Row, Col } from "react-bootstrap";

export default function BookingChooseAddonsComp(props) {

    // if (props.whichPassenger === props.number) {
    return (
       
        
        <div>
            <Container fluid>
                <Row className="booking-pass-row">
                    <Col sm={12} xs={12} onClick={() => props.setWhichPassenger(props.number)} className={props.whichPassenger === props.number ? "booking-card-picker-purp" : "booking-card-picker" }>
                        <p style={{height: "0.75em"}}>
                            Passenger {props.number}
                        </p>
                    </Col>
                </Row>

                {props.whichPassenger === props.number ?
                <Row className="booking-pass-row">
                    <Col>
                        <Row>
                            <Col>
                                <input type="checkbox" id="non-veg-meal"/>
                                <label className="flight-result-row-font"htmlFor="non-veg-meal"><b>Non-vegetarian meal</b></label>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p>
                                    price
                                </p>
                            </Col>
                        </Row>
                    </Col>    

                    <Col>
                        <Row>
                            <Col>
                                <input type="checkbox" id="veg-meal"/>
                                <label className="flight-result-row-font"htmlFor="veg-meal"><b>Vegetarian meal</b></label>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p>
                                    price
                                </p>
                            </Col>
                        </Row>

                    </Col>
                </Row>

                : null
                }

                
            </Container>
        </div>
    );
    
} 
                
                