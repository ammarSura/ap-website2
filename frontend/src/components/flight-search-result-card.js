import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import "../App.css";


export default function FlightSearchResultCardComp(props) {

   
    return (
            <Row className="flight-result-rows">
                <Col lg={3} sm={3} xs={3} className="flight-result-row-font">
                    <p>
                       <b>{props.time}</b>
                    </p>
                </Col>

                <Col lg={3} sm={3} xs={3} className="flight-result-row-font">
                    <p>
                        <b>{props.flight_number} </b>
                    </p>
                </Col>

                <Col lg={3} sm={3} xs={3}>
                    <p>
                    <b>{props.duration} </b>
                    </p>
                </Col>

                <Col lg={3} sm={3} xs={3} className="flight-result-row-font">
                    <input type="radio" name="fare" id={ props.flight_number}/>
                    <label htmlFor="fare"><b>{props.fare}</b></label>
                </Col>

                
            </Row>
    );
  
  }
  
