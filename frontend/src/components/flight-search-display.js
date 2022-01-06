import React from "react";
import { Container } from "react-bootstrap";
import "../App.css";
import FlightSearchResultCardComp from "./flight-search-result-card";
import FlightSearchFooterComp from "./flight-search-footer";



export default function FlightSearchDisplayComp() {

    const dummy = [
        {
            time: "03:05-05:05",
            flight_number: "6E151",
            duration: "2h 5m",
            fare: 5999,
        
        },

        {
            time: "03:05-05:05",
            flight_number: "6E152",
            duration: "2h 5m",
            fare: 5999,
        
        },
        {
            time: "03:05-05:05",
            flight_number: "6E153",
            duration: "2h 5m",
            fare: 5999,
        
        },
        {
            time: "03:05-05:05",
            flight_number: "6E154",
            duration: "2h 5m",
            fare: 5999,
        
        },

        {
            time: "03:05-05:05",
            flight_number: "6E154",
            duration: "2h 5m",
            fare: 5999,
        
        },
        {
            time: "03:05-05:05",
            flight_number: "6E155",
            duration: "2h 5m",
            fare: 5999,
        
        },
        {
            time: "03:05-05:05",
            flight_number: "6E156",
            duration: "2h 5m",
            fare: 5999,
        
        },

        {
            time: "03:05-05:05",
            flight_number: "6E157",
            duration: "2h 5m",
            fare: 5999,
        
        },
        {
            time: "03:05-05:05",
            flight_number: "6E158",
            duration: "2h 5m",
            fare: 5999,
        
        },
        {
            time: "03:05-05:05",
            flight_number: "6E159",
            duration: "2h 5m",
            fare: 5999,
        
        },

        {
            time: "03:05-05:05",
            flight_number: "6E160",
            duration: "2h 5m",
            fare: 5999,
        
        },
        {
            time: "03:05-05:05",
            flight_number: "6E161",
            duration: "2h 5m",
            fare: 5999,
        
        },
        {
            time: "03:05-05:05",
            flight_number: "6E162",
            duration: "2h 5m",
            fare: 5999,
        
        },

        {
            time: "03:05-05:05",
            flight_number: "6E163",
            duration: "2h 5m",
            fare: 5999,
        
        },
        {
            time: "03:05-05:05",
            flight_number: "6E164",
            duration: "2h 5m",
            fare: 5999,
        
        },
        {
            time: "03:05-05:05",
            flight_number: "6E165",
            duration: "2h 5m",
            fare: 5999,
        
        },

        {
            time: "03:05-05:05",
            flight_number: "6E166",
            duration: "2h 5m",
            fare: 5999,
        
        },
        {
            time: "03:05-05:05",
            flight_number: "6E167",
            duration: "2h 5m",
            fare: 5999,
        
        }
    ]

    function createResultCards() {
        const lst = dummy.map( (flight) => {
            return (<FlightSearchResultCardComp key={flight.flight_number} time={flight.time} flight_number={flight.flight_number} duration={flight.duration} fare={flight.fare}/>)
        })

        return lst;
    }

   
    return (
        <Container>
            {createResultCards()}
            <FlightSearchFooterComp/>
        </Container>    
    );
  
  }
  
