import React from "react";
import { Stack } from "react-bootstrap";
import "../App.css";
import FlightSearchBarComp from "../components/flight-search-bar";
import FlightSearchDetailsComp from "../components/flight-search-details";
import FlightSearchDisplayComp from "../components/flight-search-display";


export default function FlightResults() {

   
    return (
        <Stack className="flight-result-stack">
            <div>
                <FlightSearchDetailsComp/>
            </div>
            <div>
                <FlightSearchBarComp/>
            </div>
            <div>
                <FlightSearchDisplayComp/>  
            </div>
            
        </Stack>    
    );
  
  }
  
