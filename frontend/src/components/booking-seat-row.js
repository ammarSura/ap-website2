import React, { useState } from "react";
import "../App.css";
import { Row, Col } from "react-bootstrap";

import BookingSeatComp from "./booking-seat";

export default function BookingSeatRowComp(props) {

    console.log('redner')
    
    
    return (
        <Row>
            <BookingSeatComp/>
            <BookingSeatComp/>
            <BookingSeatComp/>
        </Row>
    );

    
}
                
                