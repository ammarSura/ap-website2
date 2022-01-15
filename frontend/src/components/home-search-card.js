import React, { useState, useRef } from "react";
import "../App.css";
import { Container, Row, Col } from "react-bootstrap";
import PopoverComp from './popover';
import HomeSearchClassesComp from "./home-search-classes";
import HomeSearchCurrComp from "./home-search-curr";
import HomeSearchPassengersComp from "./home-search-passengers";
import HomeSearchDestComp from "./home-search-dest";



export default function HomeSearchCardComp() {

    const [ trip, setTrip ] = useState(0);



    function getDetails() {
        // const ele = document.getElementsByName('privileges');
        // var privilege = "None";
        // for (let i = 0; i < ele.length; i++) {
        //     if (ele[i].checked) {
        //         privilege = ele[i].value;
        //     }
        // }

        const details = {
            trip: trip,
            from: document.getElementById("from").value,
            to: document.getElementById("to").value,
            depDate: document.getElementById("dep-date").value,
            retDate: document.getElementById("ret-date").value,
            passengers: document.getElementById("passengers").value,
            currency: document.getElementById("currency").value,
            class: document.getElementById("classes").value,
        }
        console.log(details)

        // console.log(document.getElementById("passengers"));

        window.location.href="/flight-results";
    
    }

   
    return (
        <Container fluid className="home-card-container">
           
            <Row>
                <Col lg={12} xs={12} sm={12}>
                    <Row>
                        <Col lg={6} xs={12} sm={6}>
                            <h3 ><b>Book a Flight</b></h3>
                        </Col>
                    </Row>
                    <Row >
                        <Col lg={6} xs={6} sm={6}>
                            <Row >
                                <Col >
                                    <input className="home-search-radio"type="radio" name="trip" id="one-way" value="one-way"  onClick={() => setTrip(0)} defaultChecked/>
                                    <label className="home-search-radio-label" htmlFor="one-way">One-Way</label>
                                </Col>

                            </Row>
                            
                        </Col>
                        <Col lg={6} xs={6} sm={6}>
                            <Row >
                                <Col >
                                    <input className="home-search-radio"type="radio" name="trip" id="round-trip" value="one-way" onChange={() => setTrip(1)} />
                                    <label className="home-search-radio-label" htmlFor="round-trip" >Round Trip</label>
                                </Col>
                            </Row>
                        </Col>
                    </Row>


                    <Row >
                        <Col lg={6} xs={12} sm={6} >
                            <Row>
                                <Col lg={12}xs={12} sm={12}>
                                   
                                    <HomeSearchDestComp type="from" placeholder="From"/>
                                </Col>
                            </Row>
                            
                        </Col>

                        <Col lg={6} xs={12} sm={6}>
                            <Row >
                                <Col lg={12}xs={12}sm={12}>
                                    
                                    <HomeSearchDestComp type="to" placeholder="To"/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>


                    <Row >
                        <Col lg={6} xs={12}sm={6}>
                            <Row >
                                

                                <Col lg={12}xs={12}sm={12}>
                                    <input className="home-search-input" type="date" min="2022-01-03" max="2023-01-30" placeholder="Departure Date" id="dep-date"/>
                                </Col>
                            </Row>
                            
                        </Col>

                        <Col lg={6} xs={12}sm={6}>
                            <Row >
                                

                                <Col lg={12}xs={12}sm={12}>
                                    {(trip===0) ? 
                                        <input className="home-search-input" type="date" min="2022-01-03" max="2023-01-30"placeholder="Return Date" id="ret-date"disabled/> 
                                        :
                                        <input className="home-search-input" type="date" min="2022-01-03" max="2023-01-30"placeholder="Return Date" id="ret-date" />  
                                    }
                                    
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    
                    <Row >

                        <Col lg={6} xs={12}sm={6}>
                            
                            <HomeSearchPassengersComp/>
                        </Col>

                        <Col lg={6} xs={12}sm={6}>
                            
                            <HomeSearchCurrComp/>
                        </Col>

                    </Row>


                    <Row>

                        <Col lg={6} sm={6} xs={12} >
                        
                            <HomeSearchClassesComp/>
                             
                        </Col>

                        <Col lg={6} sm={6} xs={12}>
                            <button onClick={ () => getDetails() } className="home-search-btn">Search Flight</button>
                        </Col>

                    </Row>

                    {/* <Row>
                        <Col lg={12} sm={12} xs={12}>
                            <button onClick={ () => getDetails() } className="home-search-btn">Search Flight</button>
                        </Col>
                    </Row> */}
                </Col>

            </Row>


        </Container>
    );

    
  
  }


