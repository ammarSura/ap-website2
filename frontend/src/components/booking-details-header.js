import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../App.css";



export default function BookingDetailsHeaderComp() {

    
    return (
        <Container fluid className="booking-details-header">
            <Row>
                <Col sm={4} xs={12}>
                    <Row>
                        <Col  sm={12} xs={12}>
                            <p>
                                Departing
                            </p>
                        </Col>
                    </Row>

                    <Row>

                        <Col  sm={12} xs={12}>
                            <p>
                                Date and time
                            </p>
                        </Col>
                    </Row>

                    <Row>
                        <Col  sm={12} xs={12}>
                            <p>
                                Destinations and terminals
                            </p>
                        </Col>
                    </Row>
                </Col>

                <Col sm={4} xs={12}>
                    <Row>
                        <Col  sm={12} xs={12}>
                            <p>
                                Baggage
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        
                        <Col  sm={12} xs={12}>
                            <p>
                                Checkin weight
                            </p>
                        </Col>
                    </Row>

                    <Row>
                        <Col  sm={12} xs={12} xs={12}>
                            <p>
                                Hand carry weight
                            </p>
                        </Col>
                    </Row>
                </Col>

                <Col sm={4} xs={12} xs={12}>
                    <Row>
                        <Col  sm={12} xs={12}>
                            <p>
                                Fare
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col  sm={12} xs={12}>
                            <p>
                                Fare
                            </p>
                        </Col>
                    </Row>

                    <Row>
                        <Col  sm={12} xs={12}>
                            <p>
                                Fare Details
                            </p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
  
  }
  
