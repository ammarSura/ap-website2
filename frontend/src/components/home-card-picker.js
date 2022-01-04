import React, { useState } from "react";
import "../App.css";
import { Stack } from "react-bootstrap";
import HomeSearchCardComp from "./home-search-card";
import HomeCheckinCardComp from "./home-checkin-card";
import HomeEditBookingCardComp from "./home-edit-booking-card";



export default function HomeCardPickerComp() {

    const [ card, setCard ] = useState(<HomeSearchCardComp/>);

    return (
        <Stack className="removePadding">
            <div>
                <Stack direction="horizontal" gap={5} className="removePadding">
                    <div onClick={() => setCard(<HomeSearchCardComp/>)}>Book Flight</div>
                    <div onClick={() => setCard(<HomeCheckinCardComp/>)}>Check-in</div>
                    <div onClick={() => setCard(<HomeEditBookingCardComp/>)}>Edit Booking</div>
                </Stack>
            </div>

            <div>
                {card}
            </div>
        </Stack>
        
    );

    
  
  }


