
import React, { useState, useEffect } from "react";
import "../App.css";
import { Overlay, OverlayTrigger, Popover, Stack } from "react-bootstrap";



export default function PopoverComp(props) {

    function looper() {
      const els = props.lst.map((ele)=>{
        return (<div className={props.allowed2} key={ele} onClick={()=> props.setClass(ele)} style={props._class===ele? {backgroundColor: "#dee8fc"}: null}>
        {ele}
    </div>)
      })

      return els;
    }



    if (props.overlay) {
      document.addEventListener("click", (evt) => {
        let targetElement = evt.target; // clicked element
        if (!(targetElement.id === props.allowed1 || targetElement.className === props.allowed2)) {
          props.setOverlay(false);
        } 
    });

      return (
        <div style={{position: "relative"}}>
        <div className={props.squareclass}>
        </div>
        <div className={props.boxclass} >
          {looper()}
        </div>
        </div>

      );
    } else {
      return (null);
    }
 
   

    
  
  }


