import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../App.css";

import HomeSearchDestComp from "./home-search-dest";
import HomeSearchClassesComp from "./home-search-classes";
import HomeSearchCurrComp from "./home-search-curr";
import HomeSearchPassengersComp from "./home-search-passengers";


export default function FlightSearchBarComp() {

    const [ trip, setTrip ] = useState(0);

   
    return (
        <Container className="flight-result-search-border">
            <Row className="flight-result-search-rows">
                <Col lg={6} sm={6} xs={6}>
                    <input className="home-search-radio"type="radio" name="trip" id="one-way" value="one-way"  onClick={() => setTrip(0)} defaultChecked/>
                    <label className="home-search-radio-label"htmlFor="one-way">One-Way</label>
                </Col>

                <Col lg={6} sm={6} xs={6}>
                    <input className="home-search-radio"type="radio" name="trip" id="round-trip" value="one-way" onChange={() => setTrip(1)} />
                    <label className="home-search-radio-label" htmlFor="round-trip" >Round Trip</label>
                </Col>
            </Row>

            <Row className="flight-result-search-rows">
                <Col lg={3} sm={6} xs={12}>
                    {/* <input className="home-search-input"type="text" placeholder="From" id="from" size="16"/> */}
                    <HomeSearchDestComp type="from" placeholder="From"/>
                </Col>

                <Col lg={3} sm={6} xs={12}>
                    {/* <input className="home-search-input"type="text" placeholder="To" id="to" size="16"/> */}
                    <HomeSearchDestComp type="to" placeholder="To"/>
                </Col>

                <Col lg={3} sm={6} xs={12}>
                    <input className="home-search-input"type="date" min="2022-01-03" max="2023-01-30" placeholder="Departure Date" id="dep-date"/>
                </Col>

                <Col lg={3} sm={6} xs={12}>
                    {(trip===0) ? 
                        <input className="home-search-input"type="date" min="2022-01-03" max="2023-01-30"placeholder="Return Date" id="ret-date"disabled/> 
                        :
                        <input className="home-search-input"type="date" min="2022-01-03" max="2023-01-30"placeholder="Return Date" id="ret-date" />  
                    }
                </Col>

               
            </Row>

            <Row className="flight-result-search-rows">
                <Col lg={3} sm={6} xs={12}>
                    
                    <HomeSearchPassengersComp/>
                </Col>

                <Col lg={3} sm={6} xs={12}>
                    
                    <HomeSearchCurrComp/>
                </Col>
                <Col lg={3} sm={6} xs={12}>
                    
                    <HomeSearchClassesComp/> 
                </Col>

                <Col lg={3} sm={6} xs={12}>
                    <button className="home-search-btn">Change Search</button>
                </Col>

            </Row>

        </Container>
    );
  
  }
  
//   export default TnC;