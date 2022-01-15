import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home-page";
import FlightResults from "./pages/flight-results-page";
import Booking from "./pages/booking-page";
import Checkin from "./pages/checkin-page";
import Login from "./pages/login-page";

export default function App() {
  return (
    <Routes> 
        
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/flight-results" element={<FlightResults />}/>
        <Route exact path="/booking" element={<Booking />}/>
        <Route exact path="/web-checkin" element={<Checkin/>}/>
        <Route exact path="/login" element={<Login/>}/>
        
    </Routes>

  );
}

