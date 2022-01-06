import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import "../App.css";
import FligthSearchModalComp from "./flight-search-modal";



export default function FlightSearchFooterComp(props) {

    const [ show, setShow ] = useState(false);

    function showernotagrower(truth) {
        setShow(truth);
    }

    function handleBook(setShow) {
        console.log('asdsa')
        props.getSelection();
        setShow(true);
    }
   
    return (
        <div>

        
        <Container className="flight-result-footer">
            <Row>
                <Col>
                    Total Fare
                </Col>

                <Col>
                    <button onClick={() => handleBook(setShow)}>Book Now</button>
                </Col>
            </Row>
        </Container>

        <FligthSearchModalComp show={show} setShow={setShow}/>

        </div>
    );
  
  }
  
