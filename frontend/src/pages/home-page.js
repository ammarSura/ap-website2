import React from "react";
import "../App.css";
import { Container, Row, Col } from "react-bootstrap";

import HomeCarouselComp from "../components/home-carousel";
import HomeCardPickerComp from "../components/home-card-picker";



export default function Home() {

   
    return (
            <Container className="home-container">
                <Row>
                    <Col lg={12} sm={12} xs={12}>
                        <h1>Home</h1>
                    </Col>
                </Row>

                <Row>
                    <Col lg={6} sm={12} xs={12}>
                        <HomeCardPickerComp/>
                    </Col>

                    <Col lg={6} sm={12} xs={12}>
                        <HomeCarouselComp/>
                    </Col>
                </Row>

                
            </Container>            
    );

    
  
  }
  
