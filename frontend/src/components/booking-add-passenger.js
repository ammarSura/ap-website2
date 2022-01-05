import React, { useState } from "react";
import "../App.css";
import { Container, Row, Col } from "react-bootstrap";

export default function BookingAddPassengerComp(props) {

    
    return (
        <div>
            <Container fluid className="booking-add-passenger">
                <Row>
                    <Col sm={12} xs={12} onClick={() => props.setWhichPassenger(props.number)} className="booking-card-picker" >
                        <p>
                            Add Passenger {props.number}
                        </p>
                    </Col>
                </Row>

                {props.whichPassenger === props.number ?
                <Row>
                    <Col sm={12} xs={12} className="booking-card-picker">
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

                        <Row>
                            <Col sm={6} xs={12}>
                                <input type="text" placeholder="First Name & Middle Name (if any)" id="first-name"/>
                            </Col>

                            <Col sm={6} xs={12}>
                                <input type="text" placeholder="Last Name" id="last-name"/>
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
                
                