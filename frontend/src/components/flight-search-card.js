import React from "react";
import "../App.css";
import { Container, Row, Col } from "react-bootstrap";



export default function FlightSearchCardComp() {

    function getDetails() {
        const details = {
            
        }
    }

   
    return (
        <Container fluid className="removePadding">
           
            <Row>
                <Col lg={12} xs={12} sm={12}>
                    <Row>
                        <Col lg={6} xs={12} sm={6}>
                            <h3>Book a Flight</h3>
                        </Col>
                    </Row>
                    <Row >
                        <Col lg={6} xs={6} sm={6}>
                            <Row >
                                <Col >
                                    <input type="radio" name="trip" id="one-way" value="one-way"/>
                                    <label for="one-way">One-Way</label>
                                </Col>

                            </Row>
                            
                        </Col>
                        <Col lg={6} xs={6} sm={6}>
                            <Row >
                                <Col >
                                    <input type="radio" name="trip" id="round-trip" value="one-way"/>
                                    <label for="round-trip">Round Trip</label>
                                </Col>
                            </Row>
                        </Col>
                    </Row>


                    <Row >
                        <Col lg={6} xs={12} sm={6} >
                            <Row>
        
                                <Col lg={12}xs={12} sm={12}>
                                    <input type="text" placeholder="From" id="from"/>
                                </Col>
                            </Row>
                            
                        </Col>

                        <Col lg={6} xs={12} sm={6}>
                            <Row >
                                <Col lg={12}xs={12}sm={12}>
                                    <input type="text" placeholder="To" id="to"/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>


                    <Row >
                        <Col lg={6} xs={12}sm={6}>
                            <Row >
                                

                                <Col lg={12}xs={12}sm={12}>
                                    <input type="date" min="2022-01-03" max="2023-01-30" placeholder="Departure Date" id="dep-date"/>
                                </Col>
                            </Row>
                            
                        </Col>

                        <Col lg={6} xs={12}sm={6}>
                            <Row >
                                

                                <Col lg={12}xs={12}sm={12}>
                                    <input type="date" min="2022-01-03" max="2023-01-30"placeholder="Return Date" id="ret-date"/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    
                    <Row >

                        <Col lg={6} xs={12}sm={6}>
                            <input type="text"placeholder="Passengers" id="passengers"/>
                        </Col>

                        <Col lg={6} xs={12}sm={6}>
                            <input type="text"placeholder="Pay in (Currency)" id="currency"/>
                        </Col>

                    </Row>


                    <Row>

                        <Col lg={6} sm={6} xs={6}>
                            <input type="radio" name="privileges" id="army" value="army"/>
                            <label for="army">Armed Forces</label>
                        </Col>

                        <Col lg={6} sm={6} xs={6}>
                            <input type="radio" name="privileges" id="student" value="student"/>
                            <label for="student">Student</label>
                        </Col>
                    </Row>

                    <Row>

                        <Col lg={6} sm={6} xs={6}>
                            <input type="radio" name="privileges" id="medical" value="medical"/>
                            <label for="medical">Medical Workers</label>
                        </Col>

                        <Col lg={6} sm={6} xs={6}>
                            <input type="radio" name="privileges" id="ltc" value="ltc"/>
                            <label for="ltc">LTC</label>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12} sm={12} xs={12}>
                            <button onClick={ () => getDetails() }>Search Flight</button>
                        </Col>
                    </Row>
                </Col>

            </Row>


        </Container>
    );

    
  
  }


