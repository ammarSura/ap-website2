import React, { useState } from "react";
import "../App.css";
import {  } from "react-bootstrap";



export default function BookingAddonsComp(props) {

    if ( props.card === 2) {
        console.log('here')
        return (
            <div>
                <p>Addons</p>
            </div>
            
             
         );
    } else {
        return (
            null
        );
    }
    

    
  
  }


