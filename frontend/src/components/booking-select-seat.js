import React, { useState } from "react";
import "../App.css";
import {  } from "react-bootstrap";



export default function BookingSelectSeatComp(props) {

    if ( props.card === 3) {
        console.log('here')
        return (
            <div>
                <p>Select Seat</p>
            </div>
            
             
         );
    } else {
        return (
            null
        );
    }
    

    
  
  }


