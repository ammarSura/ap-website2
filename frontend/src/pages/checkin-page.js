import React, {useState} from "react";
import { Stack } from "react-bootstrap";
import "../App.css";

import CheckinFlightDetailsComp from "../components/checkin-flight-details";



export default function Checkin() {

    const [ checkinConfirmed, setCheckinConfirmed ] = useState(false);
    
    return(
        <div>
            <CheckinFlightDetailsComp checkinConfirmed={checkinConfirmed} setCheckinConfirmed={setCheckinConfirmed}/>

            <h1>
                Hiya
            </h1>
        </div>
        

        
    );
  
  }
  
