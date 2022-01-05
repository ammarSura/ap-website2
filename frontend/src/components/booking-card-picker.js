import React, { useState } from "react";
import "../App.css";
import { Stack } from "react-bootstrap";

import BookingPassengerDetailsComp from "./booking-passenger-details";
import BookingAddonsComp from "./booking-addons";
import BookingSelectSeatComp from "./booking-select-seat";
import BookingPaymentComp from "./booking-payment";



export default function HomeCardPickerComp() {

    const [ card, setCard ] = useState(1);

    return (
        <Stack>
            <div onClick={() => setCard(1)} className="booking-card-picker">
                <h3>
                    Passenger Details
                </h3>
            </div>

            <div>
                <BookingPassengerDetailsComp card={card}/>
            </div>
            
            <div onClick={() => setCard(2)} className="booking-card-picker">
                <h3>
                    Add-Ons
                </h3>
            </div>

            <div>
                <BookingAddonsComp card={card}/>
            </div>

            <div onClick={() => setCard(3)} className="booking-card-picker">
                <h3>
                    Select Seat
                </h3>
            </div>

            <div>
                <BookingSelectSeatComp card={card} className="booking-card-picker"/>
            </div>

            <div onClick={() => setCard(4)}>
                <h3>
                    Payment
                </h3>
            </div>

            <div>
                <BookingPaymentComp card={card}/>
            </div>
            
        </Stack>
        
    );

    
  
  }


