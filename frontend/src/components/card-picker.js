import React, { useState } from "react";
import "../App.css";
import { Stack } from "react-bootstrap";
import FlightSearchCardComp from "../components/flight-search-card";
import FlightCheckinCardComp from "../components/flight-checkin-card";
import EditBookingCardComp from "../components/edit-booking-card";



export default function CardPickerComp() {

    const [ card, setCard ] = useState(<FlightSearchCardComp/>);

    return (
        <Stack className="removePadding">
            <div>
                <Stack direction="horizontal" gap={5} style={{paddingLeft: "0%"}}>
                    <div onClick={() => setCard(<FlightSearchCardComp/>)}>Book Flight</div>
                    <div onClick={() => setCard(<FlightCheckinCardComp/>)}>Check-in</div>
                    <div onClick={() => setCard(<EditBookingCardComp/>)}>Edit Booking</div>
                </Stack>
            </div>

            <div>
                {card}
            </div>
        </Stack>
        
    );

    
  
  }


