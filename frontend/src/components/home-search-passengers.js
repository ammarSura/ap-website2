
import React, {useState} from "react";
import { Carousel } from "react-bootstrap";
import "../App.css";
import PopoverComp from "./popover";
import HomeSearchPassPopComp from "./home-search-pass-pop";


export default function HomeSearchPassengersComp() {

    const [ overlay, setOverlay ] = useState(false);
    const [ adults, setAdults ] = useState(0);
    const [children, setChildren ] = useState(0);
    return (
        <div style={{position: "relative"}}>
            <input className="home-search-input" id="passengers" type="text"placeholder="Passengers"readOnly value={adults + children}onClick={()=> setOverlay(!overlay)} />

                            
            <HomeSearchPassPopComp  setAdults={setAdults} adults={adults }setChildren={setChildren} children={children} overlay={overlay} setOverlay={setOverlay} allowed1={"xc"} allowed2={"home-search-boxes"}/>
        </div> 
                           
                            
    );

    
  
  }
  


