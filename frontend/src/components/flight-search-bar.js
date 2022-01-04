import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../App.css";


export default function FlightSearchBarComp() {

    const [ trip, setTrip ] = useState(0);

   
    return (
        <Container>
            <Row>
                <Col lg={6} sm={6} xs={6}>
                    <input type="radio" name="trip" id="one-way" value="one-way"  onClick={() => setTrip(0)} defaultChecked/>
                    <label htmlFor="one-way">One-Way</label>
                </Col>

                <Col lg={6} sm={6} xs={6}>
                    <input type="radio" name="trip" id="round-trip" value="one-way" onChange={() => setTrip(1)} />
                    <label htmlFor="round-trip" >Round Trip</label>
                </Col>
            </Row>

            <Row>
                <Col lg={2} sm={6} xs={12}>
                    <input type="text" placeholder="From" id="from" />
                </Col>

                <Col lg={2} sm={6} xs={12}>
                    <input type="text" placeholder="To" id="to" />
                </Col>

                <Col lg={2} sm={6} xs={12}>
                    <input type="date" min="2022-01-03" max="2023-01-30" placeholder="Departure Date" id="dep-date"/>
                </Col>

                <Col lg={2} sm={6} xs={12}>
                    {(trip===0) ? 
                        <input type="date" min="2022-01-03" max="2023-01-30"placeholder="Return Date" id="ret-date"disabled/> 
                        :
                        <input type="date" min="2022-01-03" max="2023-01-30"placeholder="Return Date" id="ret-date" />  
                    }
                </Col>

                <Col lg={2} sm={6} xs={12}>
                    <input type="text"placeholder="Passengers" id="passengers"/>
                </Col>

                <Col lg={2} sm={6} xs={12}>
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
                <Col lg={12}>
                    <button>Change Search</button>
                </Col>
            </Row>
        </Container>
    );
  
  }
  
//   export default TnC;