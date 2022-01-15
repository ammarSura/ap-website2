import React from "react";
import { Stack } from "react-bootstrap";
import "../App.css";
import FlightSearchBarComp from "../components/flight-search-bar";
import FlightSearchDetailsComp from "../components/flight-search-details";
import FlightSearchDisplayComp from "../components/flight-search-display";
import FlightSearchFooterComp from "../components/flight-search-footer";


export default function FlightResults() {

   
    return (
        <div>
        <Stack className="flight-result-stack">
            
            <div>
                <FlightSearchBarComp/>
            </div>
            <div>
                <FlightSearchDetailsComp/>
            </div>
            <div>
                <FlightSearchDisplayComp/>  
            </div>
            
        </Stack>    
        {/* <FlightSearchFooterComp getSelection={getSelection}/> */}
        </div>
    );
  
  }
  
