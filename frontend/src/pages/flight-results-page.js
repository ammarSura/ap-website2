import React from "react";
// import { Stack } from
import "../App.css";
import FlightSearchBarComp from "../components/flight-search-bar";
import FlightSearchDetailsComp from "../components/flight-search-details";
import FlightSearchDisplayComp from "../components/flight-search-display";


export default function FlightResults() {

   
    return (
        <div>
            <FlightSearchDetailsComp/>
            <FlightSearchBarComp/>
            <FlightSearchDisplayComp/>
        </div>    
    );
  
  }
  
