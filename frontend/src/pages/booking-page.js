import React from "react";
import "../App.css";
import { Container, Row, Col } from "react-bootstrap";
import BookingDetailsHeaderComp from  "../components/booking-details-header";
import BookingCardPickerComp from "../components/booking-card-picker";





export default function Booking() {

   
    return (
        <div className="booking-container">
            <h3>
                Booking page
            </h3>

            <BookingDetailsHeaderComp/>
            <BookingCardPickerComp/>
        </div>
        
    );

    
  
  }
  
