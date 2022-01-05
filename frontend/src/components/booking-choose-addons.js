import React, { useState } from "react";
import "../App.css";
import { Container, Row, Col } from "react-bootstrap";

export default function BookingChooseAddonsComp(props) {

    
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col sm={12} xs={12} onClick={() => props.setWhichPassenger(props.number)} className="booking-card-picker" >
                        <p>
                            Passenger {props.number}
                        </p>
                    </Col>
                </Row>

                {/* {props.whichPassenger === props.number ? */}
                <Row>
                    <Col>
                        <Row>
                            <Col>
                                <input type="checkbox" id="non-veg-meal"/>
                                <label htmlFor="non-veg-meal">Non-vegetarian meal</label>
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
                                <label htmlFor="veg-meal">Vegetarian meal</label>
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

                {/* : 

                null
                } */}

                
            </Container>
        </div>
    );
}
                
                