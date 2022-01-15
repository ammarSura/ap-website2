import React, { useState } from "react";
import "../App.css";
import { Stack } from "react-bootstrap";
import HomeSearchCardComp from "./home-search-card";
import HomeCheckinCardComp from "./home-checkin-card";
import HomeEditBookingCardComp from "./home-edit-booking-card";



export default function HomeCardPickerComp() {

    const [ card, setCard ] = useState(0);
    const lst = [<HomeSearchCardComp/>, <HomeCheckinCardComp/>, <HomeEditBookingCardComp/>];

    // function changeState(x) {
    //     if (x === 0) {
    //         setCard(0);
    //     } else if (x === 1) {
    //         setCard(<HomeCheckinCardComp/>);
    //     } else {
    //         setCard(<HomeEditBookingCardComp/>);
    //     }
    // }


    return (
        <Stack className="removePadding">
            <div>
                <Stack direction="horizontal" gap={5} className="removePadding">
                    <div  className={card===0? "home-card-button1": "home-card-button2"}onClick={() => setCard(0)}>Book Flight</div>
                    <div className={card===1? "home-card-button1": "home-card-button2"}onClick={() => setCard(1)}>Check-in</div>
                    <div className={card===2? "home-card-button1": "home-card-button2"}onClick={() => setCard(2)}>Edit Booking</div>
                </Stack>
            </div>

            <div>
                {lst[card]}
            </div>
        </Stack>
        
    );

    
  
  }


