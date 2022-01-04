import React, { useState } from "react";
import "../App.css";
import { Stack } from "react-bootstrap";



export default function HomeCardPickerComp() {

    const [ card, setCard ] = useState(1);
    console.log(card);

    return (
        <Stack className="booking-card-picker">
            <div onClick={() => setCard(1)}>
                <h3>
                    Passenger Details
                </h3>
            </div>

            <div onClick={() => setCard(2)}>
                <h3>
                    Add-Ons
                </h3>
            </div>

            <div onClick={() => setCard(3)}>
                <h3>
                    Select Seat
                </h3>
            </div>

            <div onClick={() => setCard(4)}>
                <h3>
                    Payment
                </h3>
            </div>
            
        </Stack>
        
    );

    
  
  }


