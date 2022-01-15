
import React, {useState} from "react";
import { Carousel } from "react-bootstrap";
import "../App.css";
import PopoverComp from "./popover";


export default function HomeSearchCurrComp() {

    const [ overlay, setOverlay ] = useState(false);
    const [ _class, setClass ] = useState("INR");
    return (
        <div style={{position: "relative"}}>
            <input className="home-search-input" id="currency" type="text"placeholder="Class"readOnly value={_class}onClick={()=> setOverlay(!overlay)} />

                            
            <PopoverComp setClass={setClass} overlay={overlay} setOverlay={setOverlay} _class={_class} lst={["INR", "USD", "GBP"]} allowed1={"currency"} allowed2={"home-search-boxes"}boxclass="home-search-select1" squareclass="square1"/>
        </div> 
                           
                            
    );

    
  
  }
  


