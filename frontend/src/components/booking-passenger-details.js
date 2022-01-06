import React, { useState } from "react";
import "../App.css";
import { Container, Row, Col, Stack } from "react-bootstrap";

import BookingAddPassengerComp from "./booking-add-passenger";



export default function BookingPassengerDetailsComp(props) {

    const dummy = 3;
    const [ whichPassenger, setWhichPassenger ] = useState(1);

    function passengerDisplay() {
        let helper = []
        
        for (let i = 1; i < dummy + 1; i++) {
            helper.push(i)
        }


        const lst = helper.map( (passenger) => {

            return(
                <BookingAddPassengerComp number={passenger} key={passenger} whichPassenger={whichPassenger} setWhichPassenger={setWhichPassenger}/>                    
            );
            
        })

        return lst;
    }

    if ( props.card === 1) {
        return (
            <Stack>
                {passengerDisplay()}
            </Stack>
            
             
         );
    } else {
        return (
            null
        );
        }
    

    
  
  }


