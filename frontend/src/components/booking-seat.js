import React, { useState } from "react";
import "../App.css";
import { Row, Col } from "react-bootstrap";

export default function BookingSeatComp(props) {

    console.log('maxed',props.maxed)

    if (!props.maxed) {
        return (
            <Col sm={3} xs={3}>
            <input type="checkbox" 
                className="booking-seat-input"
                id={props.seat}
                onChange={() => props.addSeat(props.seat)}
            />
            <label 
                className="booking-seat-label1" 
                htmlFor={props.seat}
            >
                {props.seat}
                    
            
            </label>
        </Col>
        );
    } else {

        if (document.getElementById(props.seat).checked) {
            return (
                <Col sm={3} xs={3}>
            <input type="checkbox" 
                className="booking-seat-input"
                id={props.seat}
                onChange={() => props.addSeat(props.seat)}
            />
            <label 
                className="booking-seat-label1" 
                htmlFor={props.seat}
            >
                {props.seat}
                    
            
            </label>
        </Col>
            );
        } else {
            return (<Col sm={3} xs={3}>
                <input type="checkbox" 
                    className="booking-seat-input"
                    id={props.seat}
                    onChange={() => props.addSeat(props.seat)}
                    disabled
                />
                <label 
                    className="booking-seat-label2" 
                    htmlFor={props.seat}
                >
                    {props.seat}
                        
                
                </label>
            </Col>);
        }
        return null;
    }
    

    
}
                
                