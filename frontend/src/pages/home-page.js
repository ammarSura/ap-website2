import React from "react";
import "../App.css";
import { Container, Row, Col } from "react-bootstrap";

import FlightSearchCardComp from "../components/flight-search-card";
import HomeCarouselComp from "../components/home-carousel";
import CardPickerComp from "../components/card-picker";



export default function Home() {

   
    return (
        <div>
            <Container>
                <Row>
                    <Col lg={12} sm={12} xs={12} className="removePadding">
                        <h1>Home</h1>
                    </Col>
                </Row>

                <Row>
                    <Col lg={6} sm={12} xs={12} className="removePadding">
                        <CardPickerComp/>
                    </Col>

                    <Col lg={6} sm={12} xs={12} className="removePadding">
                        <HomeCarouselComp/>
                    </Col>
                </Row>

                
            </Container>
            
            

        
        
        </div>
    );

    
  
  }
  
