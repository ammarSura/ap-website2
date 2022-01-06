import React, { useState } from "react";
import "../App.css";
import {  } from "react-bootstrap";



export default function BookingPaymentComp(props) {

    if ( props.card === 4) {
        return (
            <div>
                <button onClick={()=> window.location.href="/"}>Redirect to payment portal</button>
            </div>
            
             
         );
    } else {
        return (
            null
        );
    }
    

    
  
  }


