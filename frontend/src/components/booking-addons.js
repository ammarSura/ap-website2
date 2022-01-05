import React, { useState } from "react";
import "../App.css";
import {  } from "react-bootstrap";

import BookingChooseAddonsComp from "./booking-choose-addons";



export default function BookingAddonsComp(props) {

    const [ whichPassenger, setWhichPassenger ] = useState(1);

    if ( props.card === 2) {
        console.log('here')
        return (
            <div>
                <p>Addons</p>
                <BookingChooseAddonsComp whichPassenger={whichPassenger} setWhichPassenger={setWhichPassenger} number={1}/>
            </div>

            
            
             
         );
    } else {
        return (
            null
        );
    }
    

    
  
  }


