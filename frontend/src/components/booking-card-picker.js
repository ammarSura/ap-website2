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
        <Stack gap={2}>
            <div onClick={() => setCard(1)} className={card===1? "booking-card-picker-purp" : "booking-card-picker"}>
                <h3>
                    <b>Passenger Details</b>
                </h3>
            </div>

            <div>
                <BookingPassengerDetailsComp card={card}/>
            </div>
            
            <div onClick={() => setCard(2)} className={card===2? "booking-card-picker-purp" : "booking-card-picker"}>
                <h3>
                    <b>Add-Ons</b>
                </h3>
            </div>

            <div>
                <BookingAddonsComp card={card}/>
            </div>

            <div onClick={() => setCard(3)} className={card===3? "booking-card-picker-purp" : "booking-card-picker"}>
                <h3>
                    <b>Select Seat</b>
                </h3>
            </div>

            <div>
                <BookingSelectSeatComp card={card} className="booking-card-picker"/>
            </div>

            <div onClick={() => setCard(4)} className={card===4? "booking-card-picker-purp" : "booking-card-picker"}>
                <h3>
                    <b>Payment</b>
                </h3>
            </div>

            <div>
                <BookingPaymentComp card={card} className="booking-card-picker"/>
            </div>
            
        </Stack>
        
    );

    
  
  }


