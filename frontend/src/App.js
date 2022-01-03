import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home-page";
import FlightResults from "./pages/flight-results-page";

export default function App() {
  return (
    <Routes> 
        
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/flight-results" element={<FlightResults />}/>
        
    </Routes>

  );
}

