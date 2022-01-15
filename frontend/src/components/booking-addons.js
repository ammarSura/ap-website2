import React, { useState } from "react";
import "../App.css";
import {  } from "react-bootstrap";

import BookingChooseAddonsComp from "./booking-choose-addons";



export default function BookingAddonsComp(props) {

    const [ whichPassenger, setWhichPassenger ] = useState(1);
    const dummy = 3;

    function passengerDisplay() {
        let helper = []
        
        for (let i = 1; i < dummy + 1; i++) {
            helper.push(i)
        }


        const lst = helper.map( (passenger) => {

            return(
                <BookingChooseAddonsComp number={passenger} key={passenger} whichPassenger={whichPassenger} setWhichPassenger={setWhichPassenger}/>                    
            );
            
        })

        return lst;
    }

    if ( props.card === 2) {
        console.log('here')
        return (
            <div>
                {/* <p>Addons</p> */}
                {/* <BookingChooseAddonsComp whichPassenger={whichPassenger} setWhichPassenger={setWhichPassenger} number={1}/> */}
                {passengerDisplay()}
            </div>

           

            
            
             
         );
    } else {
        return (
            null
        );
    }
    

    
  
  }


