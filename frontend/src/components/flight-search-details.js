import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../App.css";


export default function FlightSearchDetailsComp() {

   
    return (
        <Container>
            <Row>
                <Col lg={4} sm={4} xs={12}>
                    <h3>
                        Date
                    </h3>
                </Col>

                <Col lg={4} sm={4} xs={12}>
                    <h3>
                        Destinations
                    </h3>
                </Col>

                <Col lg={4} sm={4} xs={12}>
                    <h3>
                        Passengers
                    </h3>
                </Col>

                
            </Row>
        </Container> 
    );
  
  }
  
