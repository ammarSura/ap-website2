import React, { useState } from "react";
import "../App.css";
import {  } from "react-bootstrap";

import BookingSeatMapComp from "./booking-seat-map";



export default function BookingSelectSeatComp(props) {

    if ( props.card === 3) {
        return (
            <div>
                <BookingSeatMapComp/>
            </div>
            
             
         );
    } else {
        return (
            null
        );
    }
    

    
  
  }


