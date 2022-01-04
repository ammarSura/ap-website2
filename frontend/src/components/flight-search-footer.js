import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../App.css";
import FligthSearchModalComp from "./flight-search-modal";



export default function FlightSearchFooterComp() {

    const [ show, setShow ] = useState(false);
   
    return (
        <div>

        
        <Container className="flight-result-footer">
            <Row>
                <Col>
                    Total Fare
                </Col>

                <Col>
                    <button onClick={() => setShow(true)}>Book Now</button>
                </Col>
            </Row>
        </Container>

        <FligthSearchModalComp show={show} setShow={setShow}/>

        </div>
    );
  
  }
  
