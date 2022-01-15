import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../App.css";


export default function FlightSearchDetailsComp() {

   
    return (
        <Container fluid className="flight-result-row-font">
            <Row>
                <Col lg={3} sm={3} xs={12}>
                    <p>
                        15 Jan, Sunday
                    </p>
                </Col>

                <Col lg={3} sm={3} xs={12}>
                    <p>
                        IXB {"=>"} DEL
                    </p>
                </Col>

                <Col lg={3} sm={3} xs={12}>
                    <p>
                        2 Adults, 1 Child, 1 Senior Citizen
                    </p>
                </Col>

                <Col lg={3} sm={3} xs={12}>
                    <p>
                        $5004 (per person)
                    </p>
                </Col>

                
            </Row>
        </Container> 
    );
  
  }
  
