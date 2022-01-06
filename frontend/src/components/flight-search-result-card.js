import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import "../App.css";


export default function FlightSearchResultCardComp(props) {

   
    return (
            <Row>
                <Col lg={3} sm={3} xs={3}>
                    <p>
                       {props.time}
                    </p>
                </Col>

                <Col lg={3} sm={3} xs={3}>
                    <p>
                        {props.flight_number} 
                    </p>
                </Col>

                <Col lg={3} sm={3} xs={3}>
                    <p>
                        {props.duration} 
                    </p>
                </Col>

                <Col lg={3} sm={3} xs={3}>
                    <input type="radio" name="fare" id={ props.flight_number}/>
                    <label htmlFor="fare">{props.fare}</label>
                </Col>

                
            </Row>
    );
  
  }
  
