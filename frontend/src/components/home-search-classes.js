
import React, {useState} from "react";
import { Carousel } from "react-bootstrap";
import "../App.css";
import PopoverComp from "./popover";


export default function HomeSearchClassesComp() {

    const [ overlay, setOverlay ] = useState(false);
    const [ _class, setClass ] = useState("Economy");
    return (
        <div style={{position: "relative"}}>
            <input className="home-search-input" id="classes" type="text"placeholder="Class" readOnly value={_class}onClick={()=> setOverlay(!overlay)} />

                            
            <PopoverComp setClass={setClass} overlay={overlay} setOverlay={setOverlay} _class={_class} lst={["Economy", "Business", "First Class"]} allowed1={"classes"} allowed2={"home-search-boxes"}boxclass="home-search-select" squareclass="square"/>
        </div> 
                           
                            
    );

    
  
  }
  


