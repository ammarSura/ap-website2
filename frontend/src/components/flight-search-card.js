import React, { useState } from "react";
import "../App.css";
import { Container, Row, Col } from "react-bootstrap";



export default function FlightSearchCardComp() {

    const [ trip, setTrip ] = useState(0);



    function getDetails() {
        const ele = document.getElementsByName('privileges');
        var privilege = "None";
        for (let i = 0; i < ele.length; i++) {
            if (ele[i].checked) {
                privilege = ele[i].value;
            }
        }

        const details = {
            trip: trip,
            from: document.getElementById("from").value,
            to: document.getElementById("to").value,
            depDate: document.getElementById("dep-date").value,
            retDate: document.getElementById("ret-date").value,
            passengers: document.getElementById("passengers").value,
            currency: document.getElementById("currency").value,
            privilege: privilege,
        }

        console.log(details);

        window.location.href="/flight-results";
    
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
                                    <input type="radio" name="trip" id="one-way" value="one-way"  onClick={() => setTrip(0)} defaultChecked/>
                                    <label htmlFor="one-way">One-Way</label>
                                </Col>

                            </Row>
                            
                        </Col>
                        <Col lg={6} xs={6} sm={6}>
                            <Row >
                                <Col >
                                    <input type="radio" name="trip" id="round-trip" value="one-way" onChange={() => setTrip(1)} />
                                    <label htmlFor="round-trip" >Round Trip</label>
                                </Col>
                            </Row>
                        </Col>
                    </Row>


                    <Row >
                        <Col lg={6} xs={12} sm={6} >
                            <Row>
                                <Col lg={12}xs={12} sm={12}>
                                    <input type="text" placeholder="From" id="from" />
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
                                    {(trip===0) ? 
                                        <input type="date" min="2022-01-03" max="2023-01-30"placeholder="Return Date" id="ret-date"disabled/> 
                                        :
                                        <input type="date" min="2022-01-03" max="2023-01-30"placeholder="Return Date" id="ret-date" />  
                                    }
                                    
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

                        <Col lg={12} sm={12} xs={12}>
                            <select placeholder="Class" id="class">
                                <option value="Economy">Economy</option>
                                <option value="Business">Business</option>
                                <option value="First">First Class</option>
                            </select>
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


