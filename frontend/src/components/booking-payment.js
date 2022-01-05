import React, { useState } from "react";
import "../App.css";
import {  } from "react-bootstrap";



export default function BookingPaymentComp(props) {

    if ( props.card === 4) {
        return (
            <div>
                <p>Payment</p>
            </div>
            
             
         );
    } else {
        return (
            null
        );
    }
    

    
  
  }


