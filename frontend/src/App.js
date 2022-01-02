import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home-page";

export default function App() {
  return (
    <Routes> 
        
        <Route exact path="/" element={<Home />}/>
        
    </Routes>

  );
}

